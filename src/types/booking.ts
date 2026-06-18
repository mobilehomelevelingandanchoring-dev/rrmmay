export type ServiceId =
  | 'pressure-washing'
  | 'window-cleaning'
  | 'gutter-clearing'
  | 'roof-cleaning'
  | 'conservatory-cleaning'

export type PropertyType =
  | 'terraced'
  | 'semi-detached'
  | 'detached'
  | 'commercial'

export type BookingStatus =
  | 'pending_quote'
  | 'confirmed'
  | 'completed'
  | 'cancelled'

export interface BookingCustomer {
  name: string
  phone: string
  email: string
  postalCode: string
  address?: string     // optional — quote form collects postcode only
  notes?: string
}

export interface Booking {
  id: string
  createdAt: string
  updatedAt: string
  status: BookingStatus
  services: ServiceId[]
  propertyType?: PropertyType | ''
  bedroomCount?: number
  scheduledDate?: string           // optional — quote form does not schedule
  scheduledTime?: string           // optional
  estimatedDurationHours?: number  // optional
  estimatedPrice?: number
  confirmedPrice?: number
  customer: BookingCustomer
}

export interface ServiceDefinition {
  id: ServiceId
  label: string
  description: string
  baseDurationHours: number
  basePrice: number
  emoji: string
}

export interface TimeSlot {
  time: string
  label: string
  period: 'morning' | 'afternoon'
  available: boolean
}

export interface WizardFormState {
  services: ServiceId[]
  propertyType: PropertyType | ''
  bedroomCount: number
  scheduledDate: string
  scheduledTime: string
  name: string
  phone: string
  email: string
  postalCode: string
  address: string
  notes: string
}
