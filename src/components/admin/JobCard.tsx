'use client'

import { useState, useTransition } from 'react'
import { Phone, MapPin, ChevronDown, ChevronUp, PoundSterling, Loader2, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { StatusBadge } from './StatusBadge'
import { updateBookingStatusAction } from '@/lib/bookingActions'
import { BOOKING_SERVICES } from '@/data/bookingServices'
import type { Booking, BookingStatus } from '@/types/booking'

interface JobCardProps {
  booking: Booking
}

const STATUS_OPTIONS: { value: BookingStatus; label: string }[] = [
  { value: 'pending_quote', label: 'Pending Quote' },
  { value: 'confirmed', label: 'Confirmed' },
  { value: 'completed', label: 'Completed' },
  { value: 'cancelled', label: 'Cancelled' },
]

function formatDate(dateStr: string): string {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

function formatTime(t: string): string {
  const [h, m] = t.split(':').map(Number)
  const period = h < 12 ? 'AM' : 'PM'
  const h12 = h === 0 ? 12 : h > 12 ? h - 12 : h
  return `${h12}:${String(m).padStart(2, '0')} ${period}`
}

export function JobCard({ booking }: JobCardProps) {
  const [expanded, setExpanded] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState<BookingStatus>(booking.status)
  const [priceInput, setPriceInput] = useState(booking.confirmedPrice?.toString() ?? '')
  const [isPending, startTransition] = useTransition()

  const knownServices = booking.services
    .map((id) => BOOKING_SERVICES.find((s) => s.id === id))
    .filter(Boolean)

  const hasSchedule = !!(booking.scheduledDate && booking.scheduledTime)
  const hasAddress = !!(booking.customer.address && booking.customer.address.trim())

  const mapsQuery = hasAddress
    ? `${booking.customer.address}, ${booking.customer.postalCode}`
    : booking.customer.postalCode
  const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(mapsQuery)}`

  function saveStatus() {
    const price = priceInput ? parseFloat(priceInput) : undefined
    startTransition(async () => {
      await updateBookingStatusAction(booking.id, selectedStatus, price)
    })
  }

  return (
    <div className="bg-card rounded-xl border shadow-sm overflow-hidden">
      {/* Card header */}
      <div className="p-4 space-y-3">
        {/* Top row: ID + status */}
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-xs font-mono text-muted-foreground">{booking.id}</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Received {new Date(booking.createdAt).toLocaleDateString('en-GB')}
            </p>
          </div>
          <StatusBadge status={booking.status} />
        </div>

        {/* Customer name + postcode */}
        <div>
          <p className="font-semibold text-foreground text-lg leading-tight">
            {booking.customer.name}
          </p>
          <p className="text-sm text-muted-foreground mt-0.5">{booking.customer.postalCode}</p>
        </div>

        {/* Services — only show if any known services */}
        {knownServices.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {knownServices.map((svc) => svc && (
              <span
                key={svc.id}
                className="inline-flex items-center gap-1 text-xs font-medium bg-accent/10 text-accent px-2 py-1 rounded-full"
              >
                {svc.emoji} {svc.label}
              </span>
            ))}
          </div>
        )}

        {/* Schedule row — only if date was set (wizard bookings) */}
        {hasSchedule && (
          <div className="flex items-center gap-4 text-sm">
            <span className="font-medium text-foreground">
              📅 {formatDate(booking.scheduledDate!)}
            </span>
            <span className="text-muted-foreground">{formatTime(booking.scheduledTime!)}</span>
            {booking.estimatedDurationHours ? (
              <span className="text-muted-foreground">~{booking.estimatedDurationHours}h</span>
            ) : null}
          </div>
        )}

        {/* Customer message / notes preview */}
        {booking.customer.notes && (
          <div className="bg-muted/50 rounded-lg p-3 border border-border/50">
            <div className="flex items-center gap-1.5 mb-1">
              <MessageSquare className="w-3.5 h-3.5 text-muted-foreground" />
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Message
              </p>
            </div>
            <p className="text-sm text-foreground line-clamp-3 leading-relaxed">
              {booking.customer.notes}
            </p>
          </div>
        )}

        {/* Price row */}
        {(booking.confirmedPrice || booking.estimatedPrice) && (
          <div className="flex items-center gap-3">
            {booking.confirmedPrice ? (
              <span className="text-lg font-bold text-foreground">
                £{booking.confirmedPrice.toFixed(2)}
                <span className="text-xs font-normal text-muted-foreground ml-1">confirmed</span>
              </span>
            ) : booking.estimatedPrice ? (
              <span className="text-sm text-muted-foreground">
                Est. from £{booking.estimatedPrice}
              </span>
            ) : null}
          </div>
        )}

        {/* Quick action buttons */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <a href={`tel:${booking.customer.phone}`}>
            <Button
              variant="outline"
              className="w-full h-11 gap-2 text-sm font-semibold"
              asChild={false}
            >
              <Phone className="w-4 h-4" />
              Call Client
            </Button>
          </a>
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="w-full h-11 gap-2 text-sm font-semibold"
              asChild={false}
            >
              <MapPin className="w-4 h-4" />
              Navigate
            </Button>
          </a>
        </div>

        {/* Expand toggle */}
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors w-full justify-center pt-1"
        >
          {expanded ? (
            <><ChevronUp className="w-4 h-4" /> Hide details</>
          ) : (
            <><ChevronDown className="w-4 h-4" /> Show details &amp; update status</>
          )}
        </button>
      </div>

      {/* Expanded section */}
      {expanded && (
        <div className="border-t border-border bg-muted/30 p-4 space-y-4">
          {/* Contact details */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                Phone
              </p>
              <a href={`tel:${booking.customer.phone}`} className="text-sm text-accent font-medium">
                {booking.customer.phone}
              </a>
            </div>
            {booking.customer.email && (
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                  Email
                </p>
                <a
                  href={`mailto:${booking.customer.email}`}
                  className="text-sm text-accent font-medium break-all"
                >
                  {booking.customer.email}
                </a>
              </div>
            )}
          </div>

          {/* Full address if available */}
          {hasAddress && (
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                Address
              </p>
              <p className="text-sm text-foreground">
                {booking.customer.address}
                <br />
                {booking.customer.postalCode}
              </p>
            </div>
          )}

          {/* Full message */}
          {booking.customer.notes && (
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                Full Message
              </p>
              <p className="text-sm text-foreground bg-background rounded-lg p-3 border whitespace-pre-wrap">
                {booking.customer.notes}
              </p>
            </div>
          )}

          {/* Status + price update */}
          <div className="space-y-3 pt-1">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Update Status
            </p>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value as BookingStatus)}
              className={cn(
                'w-full h-11 rounded-xl border border-border bg-background px-3 text-sm font-medium',
                'focus:outline-none focus:ring-2 focus:ring-ring'
              )}
            >
              {STATUS_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>

            <div className="flex items-center gap-2">
              <PoundSterling className="w-4 h-4 text-muted-foreground shrink-0" />
              <input
                type="number"
                value={priceInput}
                onChange={(e) => setPriceInput(e.target.value)}
                placeholder="Confirmed price (optional)"
                min="0"
                step="0.01"
                className={cn(
                  'flex-1 h-11 rounded-xl border border-border bg-background px-3 text-sm',
                  'focus:outline-none focus:ring-2 focus:ring-ring'
                )}
              />
            </div>

            <Button
              onClick={saveStatus}
              disabled={isPending}
              className="w-full h-11 bg-primary text-primary-foreground font-semibold rounded-xl"
            >
              {isPending ? (
                <><Loader2 className="w-4 h-4 animate-spin mr-2" /> Saving…</>
              ) : (
                'Save Changes'
              )}
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
