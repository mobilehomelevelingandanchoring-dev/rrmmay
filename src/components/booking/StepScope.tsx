'use client'

import { cn } from '@/lib/utils'
import { CheckCircle2, Minus, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BOOKING_SERVICES, PROPERTY_TYPE_OPTIONS } from '@/data/bookingServices'
import type { ServiceId, PropertyType } from '@/types/booking'

interface StepScopeProps {
  selectedServices: ServiceId[]
  propertyType: PropertyType | ''
  bedroomCount: number
  onServicesChange: (services: ServiceId[]) => void
  onPropertyTypeChange: (type: PropertyType) => void
  onBedroomCountChange: (count: number) => void
}

export function StepScope({
  selectedServices,
  propertyType,
  bedroomCount,
  onServicesChange,
  onPropertyTypeChange,
  onBedroomCountChange,
}: StepScopeProps) {
  function toggleService(id: ServiceId) {
    if (selectedServices.includes(id)) {
      onServicesChange(selectedServices.filter((s) => s !== id))
    } else {
      onServicesChange([...selectedServices, id])
    }
  }

  return (
    <div className="space-y-8">
      {/* Services */}
      <section>
        <h2 className="text-lg font-bold text-foreground mb-1">What needs cleaning?</h2>
        <p className="text-sm text-muted-foreground mb-4">Select all that apply</p>
        <div className="grid grid-cols-1 gap-3">
          {BOOKING_SERVICES.map((service) => {
            const selected = selectedServices.includes(service.id)
            return (
              <button
                key={service.id}
                onClick={() => toggleService(service.id)}
                aria-pressed={selected}
                className={cn(
                  'relative flex items-center gap-4 p-4 rounded-xl border-2 text-left w-full',
                  'min-h-[72px] transition-all duration-150',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                  selected
                    ? 'border-accent bg-accent/10'
                    : 'border-border bg-card hover:border-accent/50 hover:bg-accent/5'
                )}
              >
                {/* Emoji icon */}
                <span className="text-3xl shrink-0 w-10 text-center">{service.emoji}</span>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className={cn('font-semibold text-[15px]', selected ? 'text-accent' : 'text-foreground')}>
                    {service.label}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-tight">
                    {service.description}
                  </p>
                </div>

                {/* Duration badge */}
                <span className="text-xs text-muted-foreground shrink-0">
                  ~{service.baseDurationHours}h
                </span>

                {/* Selected indicator */}
                {selected && (
                  <CheckCircle2 className="absolute top-3 right-3 w-5 h-5 text-accent" />
                )}
              </button>
            )
          })}
        </div>
      </section>

      {/* Property type */}
      <section>
        <h2 className="text-lg font-bold text-foreground mb-1">Property type</h2>
        <p className="text-sm text-muted-foreground mb-4">
          This helps us estimate the job duration
        </p>
        <div className="grid grid-cols-2 gap-3">
          {PROPERTY_TYPE_OPTIONS.map((opt) => {
            const selected = propertyType === opt.value
            return (
              <button
                key={opt.value}
                onClick={() => onPropertyTypeChange(opt.value)}
                aria-pressed={selected}
                className={cn(
                  'flex flex-col items-center justify-center gap-1 p-4 rounded-xl border-2',
                  'min-h-[64px] font-semibold text-sm transition-all duration-150',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                  selected
                    ? 'border-accent bg-accent text-accent-foreground'
                    : 'border-border bg-card text-foreground hover:border-accent/50 hover:bg-accent/5'
                )}
              >
                {opt.label}
              </button>
            )
          })}
        </div>
      </section>

      {/* Bedroom count (only for non-commercial) */}
      {propertyType && propertyType !== 'commercial' && (
        <section>
          <h2 className="text-lg font-bold text-foreground mb-1">Number of bedrooms</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Larger homes take longer to clean
          </p>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => onBedroomCountChange(Math.max(1, bedroomCount - 1))}
              disabled={bedroomCount <= 1}
              className="h-12 w-12 rounded-full border-2 text-lg"
              aria-label="Decrease bedrooms"
            >
              <Minus className="w-5 h-5" />
            </Button>
            <span className="text-3xl font-bold text-foreground w-12 text-center tabular-nums">
              {bedroomCount}
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => onBedroomCountChange(Math.min(10, bedroomCount + 1))}
              disabled={bedroomCount >= 10}
              className="h-12 w-12 rounded-full border-2 text-lg"
              aria-label="Increase bedrooms"
            >
              <Plus className="w-5 h-5" />
            </Button>
            <span className="text-sm text-muted-foreground">bedrooms</span>
          </div>
        </section>
      )}
    </div>
  )
}
