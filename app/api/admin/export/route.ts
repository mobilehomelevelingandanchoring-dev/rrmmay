import { NextResponse } from 'next/server'
import { isAdminAuthenticated } from '@/lib/adminAuth'
import { getAllBookings } from '@/lib/bookingStore'

export const dynamic = 'force-dynamic'

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const bookings = await getAllBookings()

  const cols = [
    'ID', 'Status', 'Name', 'Phone', 'Email', 'Postcode', 'Address',
    'Services', 'Message', 'Scheduled Date', 'Scheduled Time',
    'Confirmed Price', 'Received At',
  ]

  const rows = bookings.map((b) => [
    b.id,
    b.status,
    b.customer.name,
    b.customer.phone,
    b.customer.email ?? '',
    b.customer.postalCode,
    b.customer.address ?? '',
    b.services.join('; '),
    (b.customer.notes ?? '').replace(/\r?\n/g, ' '),
    b.scheduledDate ?? '',
    b.scheduledTime ?? '',
    b.confirmedPrice != null ? `£${b.confirmedPrice.toFixed(2)}` : '',
    new Date(b.createdAt).toLocaleString('en-GB', { timeZone: 'Europe/London' }),
  ])

  const csv = [cols, ...rows]
    .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(','))
    .join('\r\n')

  const date = new Date().toISOString().split('T')[0]

  return new NextResponse(csv, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="rrm-bookings-${date}.csv"`,
    },
  })
}
