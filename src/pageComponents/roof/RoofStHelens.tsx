'use client';
import { useEffect } from 'react';

import Link from 'next/link';
import { ChevronRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { Layout } from '@/components/layout/Layout';

export function RoofStHelens() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Professional Roof Cleaning in St Helens | R.R.M Exterior Cleaning',
      description: 'Expert roof cleaning, moss removal, and soft washing services in St Helens. Professional maintenance for all roof types.',
      address: { '@type': 'PostalAddress', addressLocality: 'St Helens', addressCountry: 'GB' },
      telephone: '+447845463877',
      areaServed: 'St Helens',
      serviceType: 'Roof Cleaning'
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);
    document.title = 'Roof Cleaning St Helens | Professional Moss & Algae Removal';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Professional roof cleaning in St Helens. Expert soft washing, moss removal, and maintenance. Call: 07845 463877');
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
            <li><Link href="/services/roof-cleaning" className="text-primary hover:text-accent transition-colors">Roof Cleaning</Link></li>
            <li className="text-primary-foreground/50"><ChevronRight className="h-4 w-4" /></li>
            <li className="text-primary-foreground/70">St Helens</li>
          </ol>
        </div>
      </nav>
      <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom section-padding">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Professional Roof Cleaning in St Helens</h1>
          <p className="text-xl text-muted-foreground mb-6">Expert <strong>roof cleaning services</strong>, <strong>moss removal</strong>, and professional soft washing for all roof types across St Helens.</p>
          <Button size="lg" asChild><a href="tel:+447845463877"><Phone className="h-5 w-5 mr-2" />Get Free Quote</a></Button>
        </div>
      </article>
      <div className="container-custom section-padding">
        <div className="max-w-4xl">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Professional Roof Cleaning Services in St Helens</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">St Helens' climate creates ideal conditions for moss and algae growth. R.R.M Exterior Cleaning provides expert <strong>roof cleaning services</strong> throughout St Helens, using safe soft washing techniques to remove moss, algae, and stains without damaging your roof.</p>
          </section>
          <section className="mb-12 bg-secondary/30 rounded-lg p-8 border border-secondary">
            <h2 className="text-2xl font-bold text-foreground mb-6">Why Professional Roof Cleaning Matters</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">St Helens' damp climate accelerates organic growth. Regular <strong>roof maintenance</strong> prevents water damage, extends roof lifespan, and protects your property value.</p>
          </section>
          <section className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg p-8 border border-accent/30 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Professional Roof Cleaning in St Helens</h2>
            <Button size="lg" asChild><a href="tel:+447845463877"><Phone className="h-5 w-5 mr-2" />Call: 07845 463877</a></Button>
          </section>
        </div>
      </div>
      </main>
    </Layout>
  );
}
