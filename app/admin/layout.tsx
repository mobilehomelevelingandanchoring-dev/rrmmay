import { isAdminAuthenticated } from '@/lib/adminAuth'
import { getAllBookings } from '@/lib/bookingStore'
import { AdminSidebar } from '@/components/admin/AdminSidebar'

export const dynamic = 'force-dynamic'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const authed = await isAdminAuthenticated()

  // Not authenticated: render only the child (login page) with no sidebar shell.
  // The middleware already redirects unauthenticated requests away from all
  // /admin/* routes except /admin/login, so no redirect is needed here.
  if (!authed) {
    return <>{children}</>
  }

  const bookings = await getAllBookings()
  const pendingCount = bookings.filter((b) => b.status === 'pending_quote').length

  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar bookingCount={pendingCount} />
      <div className="flex-1 flex flex-col min-w-0 pt-14 md:pt-0">
        {children}
      </div>
    </div>
  )
}
