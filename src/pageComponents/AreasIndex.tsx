'use client';

import Link from 'next/link';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ContactInfo } from '@/components/ContactInfo';
import { MapPin, ArrowRight } from 'lucide-react';

const areas = [
  {
    name: 'Newton-le-Willows',
    description: 'Our home base. Full exterior cleaning services for all residential and commercial properties.',
    href: '/areas/newton-le-willows',
    highlight: true,
  },
  {
    name: 'Golborne',
    description: 'Regular service coverage with quick response times for our Golborne customers.',
    href: '/areas/golborne',
  },
  {
    name: 'Huyton',
    description: 'Professional exterior cleaning services throughout Huyton and Knowsley.',
    href: '/areas/huyton',
  },
  {
    name: 'Warrington',
    description: 'Comprehensive cleaning solutions for residential and commercial properties across Warrington.',
    href: '/areas/warrington',
  },
  {
    name: 'Wigan',
    description: 'Professional exterior cleaning for homes and businesses across the Wigan borough.',
    href: '/areas/wigan',
  },
  {
    name: 'Lymm',
    description: 'Serving Lymm village and surrounding areas with premium cleaning services.',
    href: '/areas/lymm',
  },
  {
    name: 'Greater Manchester',
    description: 'Extended coverage across Greater Manchester regions. Contact us to check availability.',
    href: '/areas/greater-manchester',
  },
];

export default function AreasIndex() {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-bg py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Areas We Cover
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 leading-relaxed">
              Based in Newton-le-Willows, we provide professional exterior cleaning services 
              throughout Warrington, Greater Manchester and surrounding areas. Find your location 
              below or contact us to check coverage.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link href="/contact">Check Your Area</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className={`group card-elevated p-6 flex flex-col ${area.highlight ? 'ring-2 ring-accent' : ''}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="h-5 w-5 text-accent" />
                  <h2 className="font-display text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {area.name}
                  </h2>
                  {area.highlight && (
                    <span className="text-xs font-semibold bg-accent text-accent-foreground px-2 py-0.5 rounded-full">
                      HQ
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground leading-relaxed flex-1 mb-4">
                  {area.description}
                </p>
                <div className="flex items-center text-sm font-semibold text-accent">
                  <span>View services</span>
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Don't see your area listed? We may still be able to help.
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">
                Contact Us to Check
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-secondary/10">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-2">
            Serving Your Area
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Contact us today to discuss your exterior cleaning needs and confirm coverage.
          </p>
          <ContactInfo variant="default" />
        </div>
      </section>
    </Layout>
  );
}
