import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Phone, Clock, MessageSquare, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Quote Request Received | RRM External Cleaning',
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
            <h1 className="text-2xl font-bold text-foreground">Quote Request Received!</h1>
            <p className="text-muted-foreground mt-2 leading-relaxed">
              Thank you for getting in touch. We&apos;ll review your request and get back to you
              within 24 hours with a free, no-obligation quote.
            </p>
          </div>

          {/* Reference */}
          {id && (
            <div className="bg-muted rounded-xl p-4 text-left">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                Reference Number
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
              { icon: Clock, text: 'We review your request — usually within a few hours' },
              { icon: Phone, text: 'We call or message you to discuss your requirements' },
              { icon: CheckCircle2, text: 'We visit your property and provide a firm quote' },
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
            <a href="tel:+447845463877" className="block">
              <Button className="w-full h-12 bg-primary text-primary-foreground text-base font-semibold rounded-xl gap-2">
                <Phone className="w-4 h-4" />
                Call Us: 07845 463877
              </Button>
            </a>
            <a
              href="https://wa.me/447845463877?text=Hi%2C%20I%27ve%20just%20submitted%20a%20quote%20request%20and%20wanted%20to%20follow%20up."
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button
                variant="outline"
                className="w-full h-12 text-base font-semibold rounded-xl gap-2 border-green-500 text-green-600 hover:bg-green-50"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Us
              </Button>
            </a>
            <Link href="/">
              <Button
                variant="ghost"
                className="w-full h-11 text-sm font-medium rounded-xl gap-2 text-muted-foreground"
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
