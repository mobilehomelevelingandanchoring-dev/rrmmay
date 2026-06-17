import { z } from 'zod'

const SERVICE_IDS = [
  'pressure-washing',
  'window-cleaning',
  'gutter-clearing',
  'roof-cleaning',
  'conservatory-cleaning',
] as const

const PROPERTY_TYPES = ['terraced', 'semi-detached', 'detached', 'commercial'] as const

export const contactSchema = z.object({
  name: z.string().min(2, 'Full name is required').max(100),
  phone: z
    .string()
    .min(10, 'A valid UK phone number is required')
    .regex(/^(\+44\s?|0)[0-9]{9,10}$/, 'Enter a valid UK phone number (e.g. 07700 900123)'),
  email: z.string().email('Enter a valid email address'),
  postalCode: z
    .string()
    .min(5, 'A valid UK postcode is required')
    .regex(/^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i, 'Enter a valid UK postcode (e.g. WN8 9AB)'),
  address: z
    .string()
    .min(5, 'Street address is required')
    .max(200, 'Address is too long'),
  notes: z.string().max(500, 'Notes cannot exceed 500 characters').optional(),
})

export const bookingSchema = z.object({
  services: z
    .array(z.enum(SERVICE_IDS))
    .min(1, 'Please select at least one service'),
  propertyType: z.enum(PROPERTY_TYPES, {
    required_error: 'Please select your property type',
  }),
  bedroomCount: z.number().int().min(1).max(10).optional(),
  scheduledDate: z.string().min(1, 'Please select a date'),
  scheduledTime: z.string().min(1, 'Please select a time slot'),
  customer: contactSchema,
})

export type ContactFormData = z.infer<typeof contactSchema>
export type BookingFormData = z.infer<typeof bookingSchema>
