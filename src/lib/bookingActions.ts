'use server'

import { revalidatePath } from 'next/cache'
import { calculateEstimate } from '@/data/bookingServices'
import {
  bookingSchema,
  quoteSchema,
  type BookingFormData,
  type QuoteFormData,
} from '@/lib/bookingSchema'
import {
  createBooking,
  updateBooking,
  getAllBookings,
  getBookedTimeSlotsForDate,
} from '@/lib/bookingStore'
import type { Booking, ServiceId } from '@/types/booking'

// Known ServiceId values that map to BOOKING_SERVICES
const KNOWN_SERVICE_IDS: ServiceId[] = [
  'pressure-washing',
  'window-cleaning',
  'gutter-clearing',
  'roof-cleaning',
  'conservatory-cleaning',
]

export async function submitBookingAction(
  data: BookingFormData
): Promise<{ success: boolean; bookingId?: string; error?: string }> {
  const parsed = bookingSchema.safeParse(data)
  if (!parsed.success) {
    return { success: false, error: 'Invalid form data. Please check your entries.' }
  }

  const { services, propertyType, bedroomCount, scheduledDate, scheduledTime, customer } =
    parsed.data
  const { durationHours, estimatedPrice } = calculateEstimate(
    services,
    propertyType,
    bedroomCount
  )

  const booking = await createBooking({
    services,
    propertyType,
    bedroomCount,
    scheduledDate,
    scheduledTime,
    estimatedDurationHours: durationHours,
    estimatedPrice,
    customer,
  })

  return { success: true, bookingId: booking.id }
}

// Quote request form — simpler single-page form, no scheduling
export async function submitQuoteAction(
  data: QuoteFormData
): Promise<{ success: boolean; quoteId?: string; error?: string }> {
  const parsed = quoteSchema.safeParse(data)
  if (!parsed.success) {
    return { success: false, error: 'Invalid form data. Please check your entries.' }
  }

  const { name, phone, email, postcode, service, message } = parsed.data

  // Map to known ServiceId if the dropdown value is one of our standard IDs
  const serviceId = service && KNOWN_SERVICE_IDS.includes(service as ServiceId)
    ? (service as ServiceId)
    : null

  // For non-standard service selections (render-cleaning, driveway-cleaning, other, etc.)
  // prepend service label to the customer message so admin can see it
  const fullNotes = service && !serviceId && service !== ''
    ? `Service requested: ${service}\n\n${message}`
    : message

  const booking = await createBooking({
    services: serviceId ? [serviceId] : [],
    customer: {
      name,
      phone,
      email: email ?? '',
      postalCode: postcode,
      notes: fullNotes,
    },
  })

  return { success: true, quoteId: booking.id }
}

export async function getAdminBookingsAction(): Promise<Booking[]> {
  return await getAllBookings()
}

export async function updateBookingStatusAction(
  id: string,
  status: Booking['status'],
  confirmedPrice?: number
): Promise<{ success: boolean; error?: string }> {
  const result = await updateBooking(id, {
    status,
    ...(confirmedPrice !== undefined && { confirmedPrice }),
  })
  if (!result) return { success: false, error: 'Booking not found' }
  revalidatePath('/admin/dashboard')
  return { success: true }
}

export async function getAvailableSlotsAction(dateStr: string): Promise<string[]> {
  return await getBookedTimeSlotsForDate(dateStr)
}
