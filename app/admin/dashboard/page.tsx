import type { Metadata } from 'next'
import { getAllBookings } from '@/lib/bookingStore'
import { JobCard } from '@/components/admin/JobCard'
import { JobTable } from '@/components/admin/JobTable'
import { StatusBadge } from '@/components/admin/StatusBadge'
import type { BookingStatus } from '@/types/booking'

export const metadata: Metadata = {
  title: 'Dashboard | RRM Admin',
  robots: { index: false, follow: false },
}

// Revalidate every 30 seconds for near-real-time updates without full SSR on every request
export const revalidate = 30

const STATUS_FILTERS: { label: string; value: BookingStatus | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Pending Quote', value: 'pending_quote' },
  { label: 'Confirmed', value: 'confirmed' },
  { label: 'Completed', value: 'completed' },
  { label: 'Cancelled', value: 'cancelled' },
]

interface PageProps {
  searchParams: Promise<{ status?: string }>
}

export default async function AdminDashboardPage({ searchParams }: PageProps) {
  const { status: statusFilter = 'all' } = await searchParams
  const allBookings = getAllBookings()

  const filtered =
    statusFilter === 'all'
      ? allBookings
      : allBookings.filter((b) => b.status === statusFilter)

  // Summary counts
  const counts = {
    pending_quote: allBookings.filter((b) => b.status === 'pending_quote').length,
    confirmed: allBookings.filter((b) => b.status === 'confirmed').length,
    completed: allBookings.filter((b) => b.status === 'completed').length,
    cancelled: allBookings.filter((b) => b.status === 'cancelled').length,
  }

  const totalRevenue = allBookings
    .filter((b) => b.status === 'completed' && b.confirmedPrice)
    .reduce((sum, b) => sum + (b.confirmedPrice ?? 0), 0)

  return (
    <div className="flex-1 p-4 md:p-6 space-y-6">
      {/* Page heading */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-foreground">Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            {allBookings.length} total booking{allBookings.length !== 1 ? 's' : ''}
          </p>
        </div>
        <a href="/book" target="_blank" rel="noopener noreferrer">
          <button className="text-xs font-medium text-accent hover:underline underline-offset-2">
            View booking page ↗
          </button>
        </a>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <SummaryCard label="Pending Quote" value={counts.pending_quote} accent="amber" />
        <SummaryCard label="Confirmed" value={counts.confirmed} accent="blue" />
        <SummaryCard label="Completed" value={counts.completed} accent="green" />
        <SummaryCard
          label="Revenue"
          value={`£${totalRevenue.toFixed(0)}`}
          accent="teal"
          isText
        />
      </div>

      {/* Status filter tabs */}
      <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
        {STATUS_FILTERS.map((f) => {
          const isActive = statusFilter === f.value
          return (
            <a
              key={f.value}
              href={f.value === 'all' ? '/admin/dashboard' : `/admin/dashboard?status=${f.value}`}
              className={`
                shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-colors
                ${isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }
              `}
            >
              {f.label}
              {f.value !== 'all' && (
                <span className="ml-1.5 text-[10px] opacity-70">
                  ({counts[f.value as BookingStatus] ?? 0})
                </span>
              )}
            </a>
          )
        })}
      </div>

      {/* ─── Mobile: card list ─── */}
      <div className="md:hidden space-y-3">
        {filtered.length === 0 ? (
          <EmptyState />
        ) : (
          filtered.map((booking) => <JobCard key={booking.id} booking={booking} />)
        )}
      </div>

      {/* ─── Desktop: data table ─── */}
      <div className="hidden md:block">
        <JobTable bookings={filtered} />
      </div>
    </div>
  )
}

interface SummaryCardProps {
  label: string
  value: number | string
  accent: 'amber' | 'blue' | 'green' | 'teal'
  isText?: boolean
}

const ACCENT_CLASSES: Record<string, string> = {
  amber: 'bg-amber-50 border-amber-100 text-amber-700',
  blue: 'bg-blue-50 border-blue-100 text-blue-700',
  green: 'bg-green-50 border-green-100 text-green-700',
  teal: 'bg-accent/10 border-accent/20 text-accent',
}

function SummaryCard({ label, value, accent, isText }: SummaryCardProps) {
  return (
    <div className={`rounded-xl border p-4 ${ACCENT_CLASSES[accent]}`}>
      <p className="text-xs font-semibold uppercase tracking-wide opacity-70">{label}</p>
      <p className={`font-bold mt-1 ${isText ? 'text-xl' : 'text-3xl'}`}>{value}</p>
    </div>
  )
}

function EmptyState() {
  return (
    <div className="text-center py-12 rounded-xl border border-dashed border-border">
      <p className="text-muted-foreground font-medium">No bookings in this category</p>
      <p className="text-sm text-muted-foreground mt-1">
        New bookings appear here automatically.
      </p>
    </div>
  )
}
