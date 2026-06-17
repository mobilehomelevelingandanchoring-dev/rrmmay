import { redirect } from 'next/navigation'
import { isAdminAuthenticated } from '@/lib/adminAuth'
import { AdminSidebar } from '@/components/admin/AdminSidebar'
import { getAllBookings } from '@/lib/bookingStore'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const authed = await isAdminAuthenticated()
  if (!authed) redirect('/admin/login')

  const bookings = getAllBookings()
  const pendingCount = bookings.filter((b) => b.status === 'pending_quote').length

  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar bookingCount={pendingCount} />
      {/* Push content down on mobile for the fixed top bar */}
      <div className="flex-1 flex flex-col min-w-0 pt-14 md:pt-0">
        {children}
      </div>
    </div>
  )
}
