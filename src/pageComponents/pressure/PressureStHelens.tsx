'use client';
import { useEffect } from 'react';

import Link from 'next/link';
import { ChevronRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { Layout } from '@/components/layout/Layout';

export function PressureStHelens() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Professional Pressure Washing in St Helens | R.R.M Exterior Cleaning',
      description: 'Expert pressure washing services in St Helens. Professional driveway cleaning, patio cleaning, and jet washing for residential and commercial properties.',
      address: { '@type': 'PostalAddress', addressLocality: 'St Helens', addressCountry: 'GB' },
      telephone: '+447845463877',
      areaServed: 'St Helens',
      serviceType: 'Pressure Washing'
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);
    document.title = 'Pressure Washing St Helens | Professional Driveway & Patio Cleaning';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Professional pressure washing in St Helens. Expert driveway cleaning, patio cleaning, and jet washing. Free quote: 07845 463877');
    return () => { if (script.parentNode) document.head.removeChild(script); };
  }, []);

  return (
    <Layout>
      <main className="min-h-screen bg-background">
      <nav className="bg-secondary/50" aria-label="Breadcrumb">
        <div className="container-custom py-4">
          <ol className="flex items-center gap-2 text-sm flex-wrap">
            <li><Link href="/" className="text-primary hover:text-accent transition-colors">Home</Link></li>
            <li className="text-primary-foreground/50"><ChevronRight className="h-4 w-4" /></li>
            <li><Link href="/services/pressure-washing" className="text-primary hover:text-accent transition-colors">Pressure Washing</Link></li>
            <li className="text-primary-foreground/50"><ChevronRight className="h-4 w-4" /></li>
            <li className="text-primary-foreground/70">St Helens</li>
          </ol>
        </div>
      </nav>
      <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom section-padding">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Professional Pressure Washing in St Helens</h1>
          <p className="text-xl text-muted-foreground mb-6">Expert <strong>pressure washing services</strong> for driveways, patios, commercial buildings, and more across St Helens. Professional <strong>jet washing</strong> to restore your property's appearance.</p>
          <Button size="lg" asChild><a href="tel:+447845463877"><Phone className="h-5 w-5 mr-2" />Get Free Quote</a></Button>
        </div>
      </article>
      <div className="container-custom section-padding">
        <div className="max-w-4xl">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Professional Pressure Washing Services in St Helens</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">St Helens' industrial heritage and damp climate create conditions ideal for dirt, algae, and staining. R.R.M Exterior Cleaning provides expert <strong>pressure washing services</strong> to restore residential and commercial properties throughout St Helens.</p>
          </section>
          <section className="mb-12 bg-secondary/30 rounded-lg p-8 border border-secondary">
            <h2 className="text-2xl font-bold text-foreground mb-6">Why Professional Pressure Washing Matters</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">St Helens properties accumulate persistent grime, algae, and weathering stains. Professional <strong>pressure washing and jet washing</strong> safely removes years of buildup without damaging surfaces.</p>
          </section>
          <section className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg p-8 border border-accent/30 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Professional Pressure Washing in St Helens</h2>
            <Button size="lg" asChild><a href="tel:+447845463877"><Phone className="h-5 w-5 mr-2" />Call: 07845 463877</a></Button>
          </section>
        </div>
      </div>
      </main>
    </Layout>
  );
}
