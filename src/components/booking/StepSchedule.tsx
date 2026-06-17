'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { Calendar } from '@/components/ui/calendar'
import { Skeleton } from '@/components/ui/skeleton'
import { getAvailableStartTimes, formatTime24to12 } from '@/data/bookingServices'
import { getAvailableSlotsAction } from '@/lib/bookingActions'

interface StepScheduleProps {
  durationHours: number
  selectedDate: string
  selectedTime: string
  onDateChange: (date: string) => void
  onTimeChange: (time: string) => void
}

function isSunday(date: Date): boolean {
  return date.getDay() === 0
}

function isPast(date: Date): boolean {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return date < today
}

export function StepSchedule({
  durationHours,
  selectedDate,
  selectedTime,
  onDateChange,
  onTimeChange,
}: StepScheduleProps) {
  const [bookedSlots, setBookedSlots] = useState<string[]>([])
  const [loadingSlots, setLoadingSlots] = useState(false)

  // Fetch already-booked slots whenever the date changes
  useEffect(() => {
    if (!selectedDate) return
    setLoadingSlots(true)
    getAvailableSlotsAction(selectedDate)
      .then(setBookedSlots)
      .finally(() => setLoadingSlots(false))
  }, [selectedDate])

  const allPossibleSlots = durationHours > 0 ? getAvailableStartTimes(durationHours) : []
  const morningSlots = allPossibleSlots.filter((t) => parseInt(t.split(':')[0], 10) < 12)
  const afternoonSlots = allPossibleSlots.filter((t) => parseInt(t.split(':')[0], 10) >= 12)

  const calendarDate = selectedDate ? new Date(selectedDate + 'T00:00:00') : undefined

  function handleDaySelect(day: Date | undefined) {
    if (!day) return
    // Format as YYYY-MM-DD
    const yyyy = day.getFullYear()
    const mm = String(day.getMonth() + 1).padStart(2, '0')
    const dd = String(day.getDate()).padStart(2, '0')
    onDateChange(`${yyyy}-${mm}-${dd}`)
    onTimeChange('') // Clear time when date changes
  }

  function SlotButton({ time }: { time: string }) {
    const isBooked = bookedSlots.includes(time)
    const isSelected = selectedTime === time
    const label = formatTime24to12(time)

    return (
      <button
        onClick={() => !isBooked && onTimeChange(time)}
        disabled={isBooked}
        aria-pressed={isSelected}
        className={cn(
          'h-12 px-3 rounded-xl border-2 text-sm font-semibold transition-all duration-150',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
          isSelected
            ? 'border-accent bg-accent text-accent-foreground'
            : isBooked
            ? 'border-border bg-muted text-muted-foreground cursor-not-allowed line-through opacity-50'
            : 'border-border bg-card text-foreground hover:border-accent/60 hover:bg-accent/5'
        )}
      >
        {label}
      </button>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-bold text-foreground mb-1">Pick a date</h2>
        <p className="text-sm text-muted-foreground mb-4">
          We work Monday–Saturday, 8 AM–5 PM
        </p>
      </div>

      {/* Calendar */}
      <div className="rounded-xl border bg-card overflow-hidden">
        <Calendar
          mode="single"
          selected={calendarDate}
          onSelect={handleDaySelect}
          disabled={(date) => isPast(date) || isSunday(date)}
          className="w-full p-0"
          classNames={{
            months: 'w-full',
            month: 'w-full',
            table: 'w-full',
            head_row: 'flex w-full',
            head_cell: 'flex-1 text-center text-[0.8rem] text-muted-foreground font-normal py-2',
            row: 'flex w-full mt-1',
            cell: cn(
              'flex-1 text-center text-sm p-0',
              '[&:has([aria-selected])]:bg-accent/20 rounded-md'
            ),
            day: cn(
              'mx-auto flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium',
              'hover:bg-accent/10 transition-colors'
            ),
            day_selected:
              'bg-accent text-accent-foreground hover:bg-accent hover:text-accent-foreground',
            day_today: 'font-bold underline underline-offset-2',
            day_disabled: 'opacity-30 cursor-not-allowed',
            caption: 'flex justify-center py-3 relative items-center',
            caption_label: 'text-base font-semibold text-foreground',
            nav_button:
              'h-9 w-9 flex items-center justify-center rounded-lg border hover:bg-muted transition-colors',
            nav_button_previous: 'absolute left-2',
            nav_button_next: 'absolute right-2',
          }}
        />
      </div>

      {/* Time slots */}
      {selectedDate && (
        <div className="space-y-4">
          {durationHours === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-4">
              Select your services first to see available times.
            </p>
          ) : loadingSlots ? (
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: 9 }).map((_, i) => (
                <Skeleton key={i} className="h-12 rounded-xl" />
              ))}
            </div>
          ) : (
            <>
              {morningSlots.length > 0 && (
                <div>
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                    🌅 Morning — 8:00 AM to 12:00 PM
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {morningSlots.map((t) => (
                      <SlotButton key={t} time={t} />
                    ))}
                  </div>
                </div>
              )}

              {afternoonSlots.length > 0 && (
                <div>
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                    ☀️ Afternoon — 12:00 PM to 5:00 PM
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {afternoonSlots.map((t) => (
                      <SlotButton key={t} time={t} />
                    ))}
                  </div>
                </div>
              )}

              {morningSlots.length === 0 && afternoonSlots.length === 0 && (
                <div className="text-center py-6 rounded-xl bg-muted/50">
                  <p className="text-muted-foreground text-sm">
                    No slots available for a {durationHours}h job on this date.
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">
                    Try a different date or reduce the number of services.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      )}

      {!selectedDate && (
        <div className="text-center py-8 rounded-xl border border-dashed border-border">
          <p className="text-muted-foreground text-sm">Select a date to see available time slots</p>
        </div>
      )}
    </div>
  )
}
