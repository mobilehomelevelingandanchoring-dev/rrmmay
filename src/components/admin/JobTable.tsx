'use client'

import { useState, useTransition } from 'react'
import { Phone, MapPin, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { StatusBadge } from './StatusBadge'
import { updateBookingStatusAction } from '@/lib/bookingActions'
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
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
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

export function JobTable({ bookings }: JobTableProps) {
  const formatDate = (dateStr: string) =>
    new Date(dateStr + 'T00:00:00').toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })

  const formatTime = (t: string) => {
    const [h, m] = t.split(':').map(Number)
    const period = h < 12 ? 'AM' : 'PM'
    const h12 = h === 0 ? 12 : h > 12 ? h - 12 : h
    return `${h12}:${String(m).padStart(2, '0')} ${period}`
  }

  return (
    <div className="rounded-xl border overflow-hidden bg-card">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="font-semibold text-xs uppercase tracking-wide w-28">
              Booking
            </TableHead>
            <TableHead className="font-semibold text-xs uppercase tracking-wide">
              Customer
            </TableHead>
            <TableHead className="font-semibold text-xs uppercase tracking-wide">
              Services
            </TableHead>
            <TableHead className="font-semibold text-xs uppercase tracking-wide w-36">
              Scheduled
            </TableHead>
            <TableHead className="font-semibold text-xs uppercase tracking-wide w-24">
              Price
            </TableHead>
            <TableHead className="font-semibold text-xs uppercase tracking-wide w-24">
              Status
            </TableHead>
            <TableHead className="font-semibold text-xs uppercase tracking-wide">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings.map((booking) => {
            const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(
              `${booking.customer.address}, ${booking.customer.postalCode}`
            )}`
            const serviceCount = booking.services.length
            const firstService = BOOKING_SERVICES.find((s) => s.id === booking.services[0])

            return (
              <TableRow key={booking.id} className="hover:bg-muted/30 align-top">
                {/* Booking ID */}
                <TableCell className="py-4">
                  <p className="text-xs font-mono text-muted-foreground">{booking.id}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {formatDate(booking.createdAt)}
                  </p>
                </TableCell>

                {/* Customer */}
                <TableCell className="py-4">
                  <p className="font-semibold text-sm text-foreground">{booking.customer.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {booking.customer.address}
                  </p>
                  <p className="text-xs font-mono text-muted-foreground">
                    {booking.customer.postalCode}
                  </p>
                </TableCell>

                {/* Services */}
                <TableCell className="py-4">
                  <div className="flex flex-wrap gap-1">
                    {firstService && (
                      <span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full font-medium">
                        {firstService.emoji} {firstService.label}
                      </span>
                    )}
                    {serviceCount > 1 && (
                      <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">
                        +{serviceCount - 1} more
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    ~{booking.estimatedDurationHours}h job
                  </p>
                </TableCell>

                {/* Scheduled */}
                <TableCell className="py-4">
                  <p className="text-sm font-medium text-foreground">
                    {formatDate(booking.scheduledDate)}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {formatTime(booking.scheduledTime)}
                  </p>
                </TableCell>

                {/* Price */}
                <TableCell className="py-4">
                  {booking.confirmedPrice ? (
                    <p className="text-sm font-bold text-foreground">
                      £{booking.confirmedPrice.toFixed(2)}
                    </p>
                  ) : booking.estimatedPrice ? (
                    <p className="text-xs text-muted-foreground">
                      est. £{booking.estimatedPrice}
                    </p>
                  ) : (
                    <p className="text-xs text-muted-foreground">—</p>
                  )}
                </TableCell>

                {/* Status badge */}
                <TableCell className="py-4">
                  <StatusBadge status={booking.status} />
                </TableCell>

                {/* Actions */}
                <TableCell className="py-4">
                  <div className="space-y-2">
                    <div className="flex gap-1.5">
                      <a href={`tel:${booking.customer.phone}`}>
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 px-2 gap-1 text-xs"
                        >
                          <Phone className="w-3 h-3" />
                          Call
                        </Button>
                      </a>
                      <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 px-2 gap-1 text-xs"
                        >
                          <MapPin className="w-3 h-3" />
                          Map
                        </Button>
                      </a>
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
                No bookings yet.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
