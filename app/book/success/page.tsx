import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Phone, Calendar, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Booking Confirmed | RRM External Cleaning',
  robots: { index: false },
}

interface PageProps {
  searchParams: Promise<{ id?: string }>
}

export default async function BookingSuccessPage({ searchParams }: PageProps) {
  const { id } = await searchParams

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header accent */}
      <div className="bg-primary h-2" />

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-md text-center space-y-6">
          {/* Success icon */}
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
          </div>

          {/* Heading */}
          <div>
            <h1 className="text-2xl font-bold text-foreground">Booking Received!</h1>
            <p className="text-muted-foreground mt-2 leading-relaxed">
              Thank you. We&apos;ll review your request and be in touch within a few hours to
              confirm your slot and provide a final quote.
            </p>
          </div>

          {/* Booking reference */}
          {id && (
            <div className="bg-muted rounded-xl p-4 text-left">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                Booking Reference
              </p>
              <p className="font-mono text-lg font-bold text-foreground">{id}</p>
              <p className="text-xs text-muted-foreground mt-1">
                Keep this for your records.
              </p>
            </div>
          )}

          {/* What happens next */}
          <div className="text-left space-y-3">
            <p className="text-sm font-semibold text-foreground">What happens next?</p>
            {[
              { icon: Phone, text: 'We call or text you to confirm the date & time' },
              { icon: Calendar, text: 'You receive a reminder the day before your clean' },
              { icon: CheckCircle2, text: 'We arrive on site and carry out the work' },
            ].map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-accent" />
                </div>
                <p className="text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="space-y-3 pt-2">
            <a href="tel:+447000000000" className="block">
              <Button className="w-full h-12 bg-primary text-primary-foreground text-base font-semibold rounded-xl gap-2">
                <Phone className="w-4 h-4" />
                Call Us Now
              </Button>
            </a>
            <Link href="/">
              <Button
                variant="outline"
                className="w-full h-12 text-base font-semibold rounded-xl gap-2"
              >
                Back to Home
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
