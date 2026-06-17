'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
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
import { contactSchema, type ContactFormData } from '@/lib/bookingSchema'

interface StepContactProps {
  defaultValues: Partial<ContactFormData>
  onChange: (data: Partial<ContactFormData>, isValid: boolean) => void
}

export function StepContact({ defaultValues, onChange }: StepContactProps) {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: defaultValues.name ?? '',
      phone: defaultValues.phone ?? '',
      email: defaultValues.email ?? '',
      postalCode: defaultValues.postalCode ?? '',
      address: defaultValues.address ?? '',
      notes: defaultValues.notes ?? '',
    },
    mode: 'onChange',
  })

  // Propagate changes upward
  useEffect(() => {
    const sub = form.watch((values) => {
      onChange(values as Partial<ContactFormData>, form.formState.isValid)
    })
    return () => sub.unsubscribe()
  }, [form, onChange])

  // Trigger initial validity check
  useEffect(() => {
    form.trigger()
  }, [form])

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-bold text-foreground mb-1">Your details</h2>
        <p className="text-sm text-muted-foreground">
          We&apos;ll send a confirmation and contact you before the visit.
        </p>
      </div>

      <Form {...form}>
        <div className="space-y-4">
          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold">Full Name *</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Jane Smith"
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
                <FormLabel className="text-sm font-semibold">Phone Number *</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="tel"
                    placeholder="07700 900 123"
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
                <FormLabel className="text-sm font-semibold">Email Address *</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="jane@example.com"
                    autoComplete="email"
                    inputMode="email"
                    className="h-12 text-base rounded-xl"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Postcode + Address row */}
          <FormField
            control={form.control}
            name="postalCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold">Postcode *</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="WN8 9AB"
                    autoComplete="postal-code"
                    className="h-12 text-base rounded-xl uppercase"
                    onChange={(e) => field.onChange(e.target.value.toUpperCase())}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold">Street Address *</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="14 Acacia Avenue, Skelmersdale"
                    autoComplete="street-address"
                    className="h-12 text-base rounded-xl"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Optional notes / photo prompt */}
          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold">
                  Notes / Property Details{' '}
                  <span className="font-normal text-muted-foreground">(optional)</span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="e.g. Access via side gate, double garage, 2-storey conservatory, specific problem areas…"
                    className="resize-none rounded-xl text-base min-h-[100px]"
                    rows={4}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Photo upload prompt */}
          <div className="rounded-xl border-2 border-dashed border-border p-4 text-center bg-muted/30">
            <p className="text-sm font-medium text-foreground mb-1">📸 Want a more accurate quote?</p>
            <p className="text-xs text-muted-foreground">
              Send photos of your property via WhatsApp to{' '}
              <a
                href="https://wa.me/447000000000"
                className="text-accent font-semibold underline underline-offset-2"
              >
                WhatsApp us
              </a>{' '}
              after booking and we&apos;ll factor them into your quote.
            </p>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-3 pt-2">
            {['No payment today', 'Free quote', 'Fully insured'].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1 text-xs font-medium text-accent bg-accent/10 px-3 py-1.5 rounded-full"
              >
                ✓ {item}
              </span>
            ))}
          </div>
        </div>
      </Form>
    </div>
  )
}
