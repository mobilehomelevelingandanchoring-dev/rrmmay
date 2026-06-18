'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2, Shield, Clock, Lock } from 'lucide-react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { quoteSchema, type QuoteFormData } from '@/lib/bookingSchema'
import { submitQuoteAction } from '@/lib/bookingActions'

const SERVICE_OPTIONS = [
  { value: '', label: 'Select a service...' },
  { value: 'pressure-washing', label: 'Pressure Washing' },
  { value: 'window-cleaning', label: 'Window Cleaning' },
  { value: 'gutter-clearing', label: 'Gutter Clearing' },
  { value: 'roof-cleaning', label: 'Roof Cleaning' },
  { value: 'conservatory-cleaning', label: 'Conservatory Cleaning' },
  { value: 'render-cleaning', label: 'Render / K-Rend Cleaning' },
  { value: 'driveway-cleaning', label: 'Driveway Cleaning' },
  { value: 'patio-cleaning', label: 'Patio Cleaning' },
  { value: 'fascia-soffit-cleaning', label: 'Fascia & Soffit Cleaning' },
  { value: 'commercial-cleaning', label: 'Commercial Exterior Cleaning' },
  { value: 'other', label: 'Other / Not Sure' },
]

export function QuoteForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const form = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      postcode: '',
      service: '',
      message: '',
    },
    mode: 'onTouched',
  })

  async function onSubmit(data: QuoteFormData) {
    setIsSubmitting(true)
    setError(null)
    try {
      const result = await submitQuoteAction(data)
      if (result.success && result.quoteId) {
        router.push(`/book/success?id=${result.quoteId}`)
      } else {
        setError(result.error ?? 'Something went wrong. Please try again.')
      }
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-muted/40">
      {/* Page header */}
      <div className="bg-primary text-primary-foreground px-4 pt-12 pb-10 text-center">
        <p className="text-sm font-medium text-white/60 mb-1">RRM External Cleaning</p>
        <h1 className="text-2xl font-bold">Request a Free Quote</h1>
        <p className="text-white/70 text-sm mt-2 max-w-xs mx-auto">
          Fill out the form below and we&apos;ll get back to you as soon as possible.
        </p>
      </div>

      {/* Form card */}
      <div className="px-4 pb-16 -mt-4">
        <div className="max-w-lg mx-auto bg-card rounded-2xl border shadow-sm overflow-hidden">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="p-6 space-y-5">

                {/* Name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold">
                        Name <span className="text-destructive">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Your name"
                          autoComplete="name"
                          className="h-12 text-base rounded-xl"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Phone */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold">
                        Phone <span className="text-destructive">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="tel"
                          placeholder="Your phone number"
                          autoComplete="tel"
                          inputMode="tel"
                          className="h-12 text-base rounded-xl"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold">
                        Email{' '}
                        <span className="font-normal text-muted-foreground">(optional)</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="Your email address"
                          autoComplete="email"
                          inputMode="email"
                          className="h-12 text-base rounded-xl"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Postcode */}
                <FormField
                  control={form.control}
                  name="postcode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold">
                        Postcode <span className="text-destructive">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Your postcode"
                          autoComplete="postal-code"
                          className="h-12 text-base rounded-xl uppercase"
                          onChange={(e) => field.onChange(e.target.value.toUpperCase())}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Service */}
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold">Service Required</FormLabel>
                      <FormControl>
                        <select
                          {...field}
                          className="w-full h-12 rounded-xl border border-input bg-background px-3 text-base text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                        >
                          {SERVICE_OPTIONS.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold">
                        Message <span className="text-destructive">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Tell us about your cleaning requirements..."
                          className="resize-none rounded-xl text-base min-h-[120px]"
                          rows={5}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Error */}
                {error && (
                  <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20">
                    <p className="text-sm text-destructive font-medium">{error}</p>
                  </div>
                )}

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 text-base font-semibold rounded-xl bg-primary hover:bg-primary/90"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin mr-2" />
                      Sending…
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>

                {/* Privacy note */}
                <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-1.5">
                  <Lock className="w-3 h-3 shrink-0" />
                  We&apos;ll respond within 24 hours. Your information is kept private.
                </p>
              </div>

              {/* Trust footer */}
              <div className="border-t border-border bg-muted/30 px-6 py-4">
                <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-accent" />
                    Fully insured
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-accent" />
                    Response within 24h
                  </span>
                  <span className="flex items-center gap-1.5">
                    ✓ No obligation — free quote
                  </span>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}
