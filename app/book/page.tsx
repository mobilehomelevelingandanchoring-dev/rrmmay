import type { Metadata } from 'next'
import { QuoteForm } from '@/components/booking/QuoteForm'

export const metadata: Metadata = {
  title: 'Free Quote | RRM External Cleaning Specialist',
  description:
    'Request a free no-obligation quote for pressure washing, gutter clearing, roof cleaning, window cleaning or any exterior cleaning service. We respond within 24 hours.',
  robots: { index: false },
}

export default function BookPage() {
  return <QuoteForm />
}
