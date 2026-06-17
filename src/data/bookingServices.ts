import type { ServiceDefinition, ServiceId } from '@/types/booking'

export const BOOKING_SERVICES: ServiceDefinition[] = [
  {
    id: 'pressure-washing',
    label: 'Pressure Washing',
    description: 'Driveways, patios, pathways & exterior walls',
    baseDurationHours: 3,
    basePrice: 120,
    emoji: '💦',
  },
  {
    id: 'window-cleaning',
    label: 'Window Cleaning',
    description: 'All windows inside & out, frames & sills',
    baseDurationHours: 1.5,
    basePrice: 60,
    emoji: '🪟',
  },
  {
    id: 'gutter-clearing',
    label: 'Gutter Clearing',
    description: 'Full gutter clean, flush & downpipe check',
    baseDurationHours: 1.5,
    basePrice: 75,
    emoji: '🏠',
  },
  {
    id: 'roof-cleaning',
    label: 'Roof Cleaning',
    description: 'Moss removal, biocide treatment & protective coating',
    baseDurationHours: 4,
    basePrice: 250,
    emoji: '🧹',
  },
  {
    id: 'conservatory-cleaning',
    label: 'Conservatory Cleaning',
    description: 'Roof panels, frames, glass & gutters cleaned',
    baseDurationHours: 2,
    basePrice: 90,
    emoji: '🏡',
  },
]

export const PROPERTY_TYPE_OPTIONS = [
  { value: 'terraced' as const, label: 'Terraced', multiplier: 1.0 },
  { value: 'semi-detached' as const, label: 'Semi-Detached', multiplier: 1.25 },
  { value: 'detached' as const, label: 'Detached', multiplier: 1.5 },
  { value: 'commercial' as const, label: 'Commercial', multiplier: 2.0 },
]

export function getPropertyMultiplier(propertyType: string): number {
  return PROPERTY_TYPE_OPTIONS.find((p) => p.value === propertyType)?.multiplier ?? 1.0
}

export function calculateEstimate(
  serviceIds: ServiceId[],
  propertyType: string,
  bedroomCount?: number
): { durationHours: number; estimatedPrice: number } {
  if (!serviceIds.length || !propertyType) {
    return { durationHours: 0, estimatedPrice: 0 }
  }

  const multiplier = getPropertyMultiplier(propertyType)
  const bedroomBonus = bedroomCount && bedroomCount > 2 ? (bedroomCount - 2) * 0.1 : 0
  const totalMultiplier = multiplier + bedroomBonus

  const selected = BOOKING_SERVICES.filter((s) => serviceIds.includes(s.id))
  const baseDuration = selected.reduce((sum, s) => sum + s.baseDurationHours, 0)
  const basePrice = selected.reduce((sum, s) => sum + s.basePrice, 0)

  return {
    durationHours: Math.ceil(baseDuration * totalMultiplier * 10) / 10,
    estimatedPrice: Math.round(basePrice * totalMultiplier),
  }
}

// Returns all 30-min interval start times that fit a job of given duration within 08:00–17:00
export function getAvailableStartTimes(durationHours: number): string[] {
  const workStart = 8
  const workEnd = 17
  const slots: string[] = []

  for (let hour = workStart; hour < workEnd; hour++) {
    for (const mins of [0, 30]) {
      const startDecimal = hour + mins / 60
      if (startDecimal + durationHours <= workEnd) {
        slots.push(`${String(hour).padStart(2, '0')}:${mins === 0 ? '00' : '30'}`)
      }
    }
  }

  return slots
}

export function formatTime24to12(time24: string): string {
  const [hourStr, minStr] = time24.split(':')
  const hour = parseInt(hourStr, 10)
  const period = hour < 12 ? 'AM' : 'PM'
  const hour12 = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour
  return `${hour12}:${minStr} ${period}`
}
