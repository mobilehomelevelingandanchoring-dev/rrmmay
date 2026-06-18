import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { isAdminAuthenticated } from '@/lib/adminAuth'
import { getAllBookings } from '@/lib/bookingStore'
import { SettingsClient } from '@/components/admin/SettingsClient'

export const metadata: Metadata = {
  title: 'Settings | RRM Admin',
  robots: { index: false, follow: false },
}

export const dynamic = 'force-dynamic'

export default async function SettingsPage() {
  if (!(await isAdminAuthenticated())) redirect('/admin/login')

  const bookings = await getAllBookings()

  const stats = {
    total: bookings.length,
    pending: bookings.filter((b) => b.status === 'pending_quote').length,
    confirmed: bookings.filter((b) => b.status === 'confirmed').length,
    completed: bookings.filter((b) => b.status === 'completed').length,
    revenue: bookings
      .filter((b) => b.status === 'completed' && b.confirmedPrice)
      .reduce((sum, b) => sum + (b.confirmedPrice ?? 0), 0),
    lastReceivedAt: bookings[0]?.createdAt ?? null,
  }

  return <SettingsClient stats={stats} />
}
