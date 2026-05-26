'use client';
import { useEffect } from 'react';

import Link from 'next/link';
import { ChevronRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { Layout } from '@/components/layout/Layout';

export function PressureManchester() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Professional Pressure Washing in Manchester | R.R.M Exterior Cleaning',
      description: 'Expert pressure washing services throughout Manchester. Professional driveway cleaning, patio cleaning, and commercial property washing.',
      address: { '@type': 'PostalAddress', addressLocality: 'Manchester', addressCountry: 'GB' },
      telephone: '+447845463877',
      areaServed: 'Manchester'
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);
    document.title = 'Pressure Washing Manchester | Professional Driveway & Patio Cleaning';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Professional pressure washing in Manchester. Expert driveway cleaning, patio cleaning, and jet washing. Call: 07845 463877');
    return () => { if (script.parentNode) document.head.removeChild(script); };
  }, []);

  return (
    <Layout>
      <main className="min-h-screen bg-background">
      <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom section-padding">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Professional Pressure Washing in Manchester</h1>
          <p className="text-xl text-muted-foreground mb-6">Expert <strong>pressure washing services</strong> across Greater Manchester. Professional <strong>jet washing</strong> for driveway cleaning, patios, and commercial properties.</p>
          <Button size="lg" asChild><a href="tel:+447845463877"><Phone className="h-5 w-5 mr-2" />Get Free Quote</a></Button>
        </div>
      </article>
      <div className="container-custom section-padding">
        <div className="max-w-4xl">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Pressure Washing Services Across Manchester</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">Manchester's dynamic property portfolio requires expert maintenance. R.R.M Exterior Cleaning provides professional <strong>pressure washing and commercial cleaning</strong> for residential and commercial properties.</p>
          </section>
          <section className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg p-8 border border-accent/30 text-center">
            <Button size="lg" asChild><a href="tel:+447845463877"><Phone className="h-5 w-5 mr-2" />Call: 07845 463877</a></Button>
          </section>
        </div>
      </div>
      </main>
    </Layout>
  );
}
