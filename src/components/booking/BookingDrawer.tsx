'use client'

import { useState } from 'react'
import { ChevronUp, ChevronDown, Clock, PoundSterling, Wrench } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { BOOKING_SERVICES } from '@/data/bookingServices'
import type { ServiceId, PropertyType } from '@/types/booking'

interface BookingDrawerProps {
  step: number
  services: ServiceId[]
  propertyType: PropertyType | ''
  bedroomCount: number
  durationHours: number
  estimatedPrice: number
  scheduledDate: string
  scheduledTime: string
  onNext: () => void
  onBack: () => void
  nextLabel: string
  nextDisabled: boolean
  isSubmitting?: boolean
}

export function BookingDrawer({
  step,
  services,
  propertyType,
  bedroomCount,
  durationHours,
  estimatedPrice,
  scheduledDate,
  scheduledTime,
  onNext,
  onBack,
  nextLabel,
  nextDisabled,
  isSubmitting,
}: BookingDrawerProps) {
  const [expanded, setExpanded] = useState(false)

  const hasScope = services.length > 0 && propertyType !== ''
  const serviceLabels = services
    .map((id) => BOOKING_SERVICES.find((s) => s.id === id)?.label ?? id)
    .join(', ')

  const formattedDate = scheduledDate
    ? new Date(scheduledDate + 'T00:00:00').toLocaleDateString('en-GB', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
      })
    : null

  const formatTime = (t: string) => {
    if (!t) return null
    const [h, m] = t.split(':').map(Number)
    const period = h < 12 ? 'AM' : 'PM'
    const h12 = h === 0 ? 12 : h > 12 ? h - 12 : h
    return `${h12}:${String(m).padStart(2, '0')} ${period}`
  }

  return (
    <div
      className={cn(
        'fixed bottom-0 inset-x-0 z-40 bg-primary text-primary-foreground',
        'shadow-[0_-4px_24px_rgba(0,0,0,0.25)]',
        'transition-all duration-300 ease-in-out'
      )}
    >
      {/* Expandable summary panel */}
      {expanded && hasScope && (
        <div className="px-4 pt-4 pb-2 border-b border-white/20 space-y-3">
          {services.length > 0 && (
            <div className="flex items-start gap-2 text-sm">
              <Wrench className="w-4 h-4 mt-0.5 text-accent shrink-0" />
              <span className="text-white/80">{serviceLabels}</span>
            </div>
          )}
          {durationHours > 0 && (
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-accent shrink-0" />
              <span className="text-white/80">
                Estimated job time:{' '}
                <span className="font-semibold text-white">{durationHours} hrs</span>
              </span>
            </div>
          )}
          {estimatedPrice > 0 && (
            <div className="flex items-center gap-2 text-sm">
              <PoundSterling className="w-4 h-4 text-accent shrink-0" />
              <span className="text-white/80">
                Estimated price:{' '}
                <span className="font-semibold text-white">from £{estimatedPrice}</span>
              </span>
            </div>
          )}
          {formattedDate && (
            <div className="flex items-center gap-2 text-sm">
              <span className="text-white/60">📅</span>
              <span className="text-white/80">
                {formattedDate}
                {scheduledTime && ` at ${formatTime(scheduledTime)}`}
              </span>
            </div>
          )}
          <p className="text-[11px] text-white/50 leading-tight">
            Final price confirmed after site inspection. No charge if we can&apos;t attend.
          </p>
        </div>
      )}

      {/* Main bar */}
      <div className="px-4 py-3 flex items-center gap-3">
        {/* Summary toggle */}
        <button
          onClick={() => setExpanded((e) => !e)}
          className="flex flex-col min-w-0 flex-1 text-left"
          aria-label={expanded ? 'Collapse booking summary' : 'Expand booking summary'}
        >
          <div className="flex items-center gap-1">
            <span className="text-xs font-medium text-white/60 uppercase tracking-wide">
              {hasScope ? `${services.length} service${services.length > 1 ? 's' : ''}` : 'Your booking'}
            </span>
            {hasScope && (expanded ? (
              <ChevronDown className="w-3 h-3 text-white/60" />
            ) : (
              <ChevronUp className="w-3 h-3 text-white/60" />
            ))}
          </div>
          {estimatedPrice > 0 ? (
            <span className="text-lg font-bold text-white">
              from £{estimatedPrice}
              {durationHours > 0 && (
                <span className="text-sm font-normal text-white/60 ml-1">· {durationHours}h</span>
              )}
            </span>
          ) : (
            <span className="text-sm text-white/60">Select services above</span>
          )}
        </button>

        {/* Navigation */}
        <div className="flex items-center gap-2 shrink-0">
          {step > 1 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onBack}
              className="text-white/70 hover:text-white hover:bg-white/10 h-11 px-3"
            >
              Back
            </Button>
          )}
          <Button
            onClick={onNext}
            disabled={nextDisabled || isSubmitting}
            className={cn(
              'h-12 px-6 text-base font-semibold rounded-xl',
              'bg-orange-500 hover:bg-orange-400 text-white',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              'transition-colors duration-150'
            )}
          >
            {isSubmitting ? 'Submitting…' : nextLabel}
          </Button>
        </div>
      </div>

      {/* iOS safe area spacer */}
      <div className="h-safe-bottom bg-primary" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }} />
    </div>
  )
}
