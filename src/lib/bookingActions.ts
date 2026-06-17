'use server'

import { revalidatePath } from 'next/cache'
import { calculateEstimate } from '@/data/bookingServices'
import { bookingSchema, type BookingFormData } from '@/lib/bookingSchema'
import {
  createBooking,
  updateBooking,
  getAllBookings,
  getBookedTimeSlotsForDate,
} from '@/lib/bookingStore'
import type { Booking } from '@/types/booking'

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

  const booking = createBooking({
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

export async function getAdminBookingsAction(): Promise<Booking[]> {
  return getAllBookings()
}

export async function updateBookingStatusAction(
  id: string,
  status: Booking['status'],
  confirmedPrice?: number
): Promise<{ success: boolean; error?: string }> {
  const result = updateBooking(id, {
    status,
    ...(confirmedPrice !== undefined && { confirmedPrice }),
  })
  if (!result) return { success: false, error: 'Booking not found' }
  revalidatePath('/admin/dashboard')
  return { success: true }
}

export async function getAvailableSlotsAction(dateStr: string): Promise<string[]> {
  return getBookedTimeSlotsForDate(dateStr)
}
