'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Loader2 } from 'lucide-react';
import { quoteSchema, type QuoteFormData } from '@/lib/bookingSchema';
import { submitQuoteAction } from '@/lib/bookingActions';

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
];

const contactDetails = [
  {
    icon: Phone,
    title: 'Phone',
    body: '07845 463877',
    href: 'tel:+447845463877',
    isLink: true,
  },
  {
    icon: Mail,
    title: 'Email',
    body: 'rrmexternalcleaning@gmail.com',
    href: 'mailto:rrmexternalcleaning@gmail.com',
    isLink: true,
  },
  {
    icon: MapPin,
    title: 'Service Area',
    body: 'Newton-le-Willows, Warrington & Greater Manchester',
    href: null,
    isLink: false,
  },
  {
    icon: Clock,
    title: 'Working Hours',
    body: (
      <>
        <span className="block">Monday - Saturday: 8am - 6pm</span>
        <span className="block">Sunday: Closed</span>
      </>
    ),
    href: null,
    isLink: false,
  },
];

export default function Contact() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { name: '', phone: '', email: '', postcode: '', service: '', message: '' },
    mode: 'onTouched',
  });

  async function onSubmit(data: QuoteFormData) {
    setServerError(null);
    const result = await submitQuoteAction(data);
    if (result.success && result.quoteId) {
      router.push(`/book/success?id=${result.quoteId}`);
    } else {
      setServerError(result.error ?? 'Something went wrong. Please try again.');
    }
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-bg py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed">
              Ready for a free quote? Have a question about our services?
              Contact us today and we'll get back to you promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">

            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Get in touch with R.R.M External Cleaning Specialist. We're here to answer
                your questions and provide free, no-obligation quotes for all our services.
              </p>

              <div className="space-y-4">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon;
                  const inner = (
                    <Card className="border-border/50 hover:border-accent/30 hover:shadow-sm transition-all duration-200">
                      <CardContent className="flex items-start gap-4 p-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent shrink-0">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="font-display font-semibold text-foreground mb-0.5">
                            {detail.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {detail.body}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  );

                  if (detail.isLink && detail.href) {
                    return (
                      <a key={detail.title} href={detail.href} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-lg">
                        {inner}
                      </a>
                    );
                  }
                  return <div key={detail.title}>{inner}</div>;
                })}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-md border-border/50">
                <CardContent className="p-8">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                    Request a Free Quote
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-1">
                        <Label htmlFor="name">Name <span className="text-destructive">*</span></Label>
                        <Input id="name" placeholder="Your name" {...register('name')} />
                        {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="phone">Phone <span className="text-destructive">*</span></Label>
                        <Input id="phone" type="tel" placeholder="Your phone number" {...register('phone')} />
                        {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="email">Email <span className="text-muted-foreground font-normal">(optional)</span></Label>
                      <Input id="email" type="email" placeholder="Your email address" {...register('email')} />
                      {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="postcode">Postcode <span className="text-destructive">*</span></Label>
                      <Input id="postcode" placeholder="e.g. WA12 8QY" className="uppercase" {...register('postcode')} />
                      {errors.postcode && <p className="text-xs text-destructive">Enter a valid UK postcode</p>}
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="service">Service Required</Label>
                      <select
                        id="service"
                        {...register('service')}
                        className="w-full h-11 rounded-md border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                      >
                        {SERVICE_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="message">Message <span className="text-destructive">*</span></Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your cleaning requirements..."
                        rows={4}
                        {...register('message')}
                      />
                      {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
                    </div>

                    {serverError && (
                      <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                        <p className="text-sm text-destructive">{serverError}</p>
                      </div>
                    )}

                    <Button type="submit" variant="highlight" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending…</>
                      ) : (
                        <><Send className="mr-2 h-4 w-4" aria-hidden="true" /> Send Message</>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      We'll respond within 24 hours. Your information is kept private.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
