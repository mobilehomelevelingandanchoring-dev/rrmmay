import type { Metadata } from 'next'
import { BookingWizard } from '@/components/booking/BookingWizard'

export const metadata: Metadata = {
  title: 'Book a Clean | RRM External Cleaning Specialist',
  description:
    'Book pressure washing, gutter clearing, roof cleaning, window cleaning or conservatory cleaning online. Get an instant estimate and choose your slot.',
  robots: { index: false },
}

export default function BookPage() {
  return <BookingWizard />
}
