'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { Phone, MapPin, Loader2, Copy, Check, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table'
import { StatusBadge } from './StatusBadge'
import { updateBookingStatusAction, deleteBookingAction } from '@/lib/bookingActions'
import { BOOKING_SERVICES } from '@/data/bookingServices'
import type { Booking, BookingStatus } from '@/types/booking'

interface JobTableProps {
  bookings: Booking[]
}

const STATUS_OPTIONS: { value: BookingStatus; label: string }[] = [
  { value: 'pending_quote', label: 'Pending Quote' },
  { value: 'confirmed', label: 'Confirmed' },
  { value: 'completed', label: 'Completed' },
  { value: 'cancelled', label: 'Cancelled' },
]

function formatDate(dateStr: string): string {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-GB', {
    day: '2-digit', month: 'short', year: 'numeric',
  })
}

function formatTime(t: string): string {
  const [h, m] = t.split(':').map(Number)
  const period = h < 12 ? 'AM' : 'PM'
  const h12 = h === 0 ? 12 : h > 12 ? h - 12 : h
  return `${h12}:${String(m).padStart(2, '0')} ${period}`
}

function buildCopyText(booking: Booking): string {
  const lines: string[] = [
    `Ref: ${booking.id}`,
    `Name: ${booking.customer.name}`,
    `Phone: ${booking.customer.phone}`,
  ]
  if (booking.customer.email) lines.push(`Email: ${booking.customer.email}`)
  lines.push(`Postcode: ${booking.customer.postalCode}`)
  if (booking.customer.address) lines.push(`Address: ${booking.customer.address}`)
  if (booking.services.length > 0) lines.push(`Services: ${booking.services.join(', ')}`)
  if (booking.customer.notes) lines.push(`Message: ${booking.customer.notes}`)
  if (booking.scheduledDate) lines.push(`Scheduled: ${booking.scheduledDate}${booking.scheduledTime ? ' at ' + booking.scheduledTime : ''}`)
  if (booking.confirmedPrice) lines.push(`Price: £${booking.confirmedPrice.toFixed(2)}`)
  lines.push(`Status: ${booking.status}`)
  lines.push(`Submitted: ${new Date(booking.createdAt).toLocaleDateString('en-GB')}`)
  return lines.join('\n')
}

function InlineStatusEditor({ booking }: { booking: Booking }) {
  const [status, setStatus] = useState<BookingStatus>(booking.status)
  const [price, setPrice] = useState(booking.confirmedPrice?.toString() ?? '')
  const [isPending, startTransition] = useTransition()

  function save() {
    startTransition(async () => {
      await updateBookingStatusAction(booking.id, status, price ? parseFloat(price) : undefined)
    })
  }

  return (
    <div className="flex items-center gap-2 min-w-[280px]">
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value as BookingStatus)}
        className="h-8 rounded-lg border border-border bg-background px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-ring flex-1"
      >
        {STATUS_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="£ Price"
        className="h-8 w-24 rounded-lg border border-border bg-background px-2 text-xs focus:outline-none focus:ring-1 focus:ring-ring"
      />
      <Button
        size="sm"
        onClick={save}
        disabled={isPending}
        className="h-8 px-3 text-xs bg-primary text-primary-foreground"
      >
        {isPending ? <Loader2 className="w-3 h-3 animate-spin" /> : 'Save'}
      </Button>
    </div>
  )
}

function CopyButton({ booking }: { booking: Booking }) {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(buildCopyText(booking)).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <Button
      size="sm"
      variant="outline"
      onClick={handleCopy}
      title="Copy booking details"
      className="h-8 px-2 gap-1 text-xs"
    >
      {copied ? (
        <><Check className="w-3 h-3 text-green-600" /><span className="text-green-600">Copied</span></>
      ) : (
        <><Copy className="w-3 h-3" />Copy</>
      )}
    </Button>
  )
}

function DeleteButton({ booking }: { booking: Booking }) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  function handleDelete() {
    if (!window.confirm(`Delete booking ${booking.id} for ${booking.customer.name}?\n\nThis cannot be undone.`)) return
    startTransition(async () => {
      const result = await deleteBookingAction(booking.id)
      if (result.success) {
        router.refresh()
      } else {
        alert(result.error ?? 'Failed to delete booking')
      }
    })
  }

  return (
    <Button
      size="sm"
      variant="outline"
      onClick={handleDelete}
      disabled={isPending}
      title="Delete booking"
      className="h-8 px-2 gap-1 text-xs text-destructive hover:text-destructive hover:bg-destructive/10 border-destructive/30"
    >
      {isPending ? <Loader2 className="w-3 h-3 animate-spin" /> : <><Trash2 className="w-3 h-3" />Delete</>}
    </Button>
  )
}

export function JobTable({ bookings }: JobTableProps) {
  return (
    <div className="rounded-xl border overflow-hidden bg-card">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="font-semibold text-xs uppercase tracking-wide w-28">Reference</TableHead>
            <TableHead className="font-semibold text-xs uppercase tracking-wide">Customer</TableHead>
            <TableHead className="font-semibold text-xs uppercase tracking-wide">Service / Message</TableHead>
            <TableHead className="font-semibold text-xs uppercase tracking-wide w-36">Scheduled</TableHead>
            <TableHead className="font-semibold text-xs uppercase tracking-wide w-24">Price</TableHead>
            <TableHead className="font-semibold text-xs uppercase tracking-wide w-24">Status</TableHead>
            <TableHead className="font-semibold text-xs uppercase tracking-wide">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings.map((booking) => {
            const mapsQuery = booking.customer.address?.trim()
              ? `${booking.customer.address}, ${booking.customer.postalCode}`
              : booking.customer.postalCode
            const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(mapsQuery)}`
            const firstService = booking.services.length > 0
              ? BOOKING_SERVICES.find((s) => s.id === booking.services[0])
              : null
            const extraCount = booking.services.length - 1
            const hasSchedule = !!(booking.scheduledDate && booking.scheduledTime)

            return (
              <TableRow key={booking.id} className="hover:bg-muted/30 align-top">
                <TableCell className="py-4">
                  <p className="text-xs font-mono text-muted-foreground">{booking.id}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{formatDate(booking.createdAt)}</p>
                </TableCell>

                <TableCell className="py-4">
                  <p className="font-semibold text-sm text-foreground">{booking.customer.name}</p>
                  {booking.customer.address && (
                    <p className="text-xs text-muted-foreground mt-0.5">{booking.customer.address}</p>
                  )}
                  <p className="text-xs font-mono text-muted-foreground">{booking.customer.postalCode}</p>
                  {booking.customer.email && (
                    <p className="text-xs text-muted-foreground mt-0.5 truncate max-w-[160px]">{booking.customer.email}</p>
                  )}
                </TableCell>

                <TableCell className="py-4 max-w-[220px]">
                  {firstService ? (
                    <div className="flex flex-wrap gap-1 mb-1">
                      <span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full font-medium">
                        {firstService.emoji} {firstService.label}
                      </span>
                      {extraCount > 0 && (
                        <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">
                          +{extraCount} more
                        </span>
                      )}
                    </div>
                  ) : null}
                  {booking.customer.notes && (
                    <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                      {booking.customer.notes}
                    </p>
                  )}
                </TableCell>

                <TableCell className="py-4">
                  {hasSchedule ? (
                    <>
                      <p className="text-sm font-medium text-foreground">{formatDate(booking.scheduledDate!)}</p>
                      <p className="text-xs text-muted-foreground">{formatTime(booking.scheduledTime!)}</p>
                      {booking.estimatedDurationHours ? (
                        <p className="text-xs text-muted-foreground">~{booking.estimatedDurationHours}h</p>
                      ) : null}
                    </>
                  ) : (
                    <p className="text-xs text-muted-foreground italic">Awaiting schedule</p>
                  )}
                </TableCell>

                <TableCell className="py-4">
                  {booking.confirmedPrice ? (
                    <p className="text-sm font-bold text-foreground">£{booking.confirmedPrice.toFixed(2)}</p>
                  ) : booking.estimatedPrice ? (
                    <p className="text-xs text-muted-foreground">est. £{booking.estimatedPrice}</p>
                  ) : (
                    <p className="text-xs text-muted-foreground">—</p>
                  )}
                </TableCell>

                <TableCell className="py-4">
                  <StatusBadge status={booking.status} />
                </TableCell>

                <TableCell className="py-4">
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-1.5">
                      <a href={`tel:${booking.customer.phone}`}>
                        <Button size="sm" variant="outline" className="h-8 px-2 gap-1 text-xs">
                          <Phone className="w-3 h-3" />Call
                        </Button>
                      </a>
                      <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="outline" className="h-8 px-2 gap-1 text-xs">
                          <MapPin className="w-3 h-3" />Map
                        </Button>
                      </a>
                      <CopyButton booking={booking} />
                      <DeleteButton booking={booking} />
                    </div>
                    <InlineStatusEditor booking={booking} />
                  </div>
                </TableCell>
              </TableRow>
            )
          })}

          {bookings.length === 0 && (
            <TableRow>
              <TableCell colSpan={7} className="py-12 text-center text-muted-foreground text-sm">
                No quote requests yet.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
