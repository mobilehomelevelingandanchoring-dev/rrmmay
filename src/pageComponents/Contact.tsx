'use client';

import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const contactDetails = [
  {
    icon: Phone,
    title: 'Phone',
    body: 'Call for a free quote',
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
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data
    setSubmitted(true);
  };

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

                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success/10 mx-auto mb-4">
                        <CheckCircle className="h-8 w-8 text-success" aria-hidden="true" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-foreground mb-2">
                        Thank You!
                      </h3>
                      <p className="text-muted-foreground">
                        We've received your message and will be in touch shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            placeholder="Your name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="Your phone number"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email address"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="postcode">Postcode *</Label>
                        <Input
                          id="postcode"
                          placeholder="Your postcode"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">Service Required</Label>
                        <Select>
                          <SelectTrigger id="service" className="h-11">
                            <SelectValue placeholder="Select a service..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pressure-washing">Pressure Washing</SelectItem>
                            <SelectItem value="driveway-cleaning">Driveway Cleaning</SelectItem>
                            <SelectItem value="roof-cleaning">Roof Cleaning</SelectItem>
                            <SelectItem value="gutter-cleaning">Gutter Cleaning</SelectItem>
                            <SelectItem value="window-cleaning">Window Cleaning</SelectItem>
                            <SelectItem value="render-cleaning">Render Cleaning</SelectItem>
                            <SelectItem value="multiple">Multiple Services</SelectItem>
                            <SelectItem value="other">Other / Not Sure</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your cleaning requirements..."
                          rows={4}
                          required
                        />
                      </div>

                      <Button type="submit" variant="highlight" size="lg" className="w-full">
                        <Send className="mr-2 h-4 w-4" aria-hidden="true" />
                        Send Message
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        We'll respond within 24 hours. Your information is kept private.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
