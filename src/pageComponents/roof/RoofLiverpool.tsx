'use client';
import { useEffect } from 'react';

import Link from 'next/link';
import { ChevronRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { Layout } from '@/components/layout/Layout';

export function RoofLiverpool() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Professional Roof Cleaning in Liverpool | R.R.M Exterior Cleaning',
      description: 'Expert roof cleaning services in Liverpool. Professional moss removal and soft washing for all roof types.',
      address: { '@type': 'PostalAddress', addressLocality: 'Liverpool', addressCountry: 'GB' },
      telephone: '+447845463877',
      areaServed: 'Liverpool'
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);
    document.title = 'Roof Cleaning Liverpool | Professional Moss Removal Services';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Professional roof cleaning in Liverpool. Expert moss removal and soft washing. Call: 07845 463877');
    return () => { if (script.parentNode) document.head.removeChild(script); };
  }, []);

  return (
    <Layout>
      <main className="min-h-screen bg-background">
      <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom section-padding">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Professional Roof Cleaning in Liverpool</h1>
          <p className="text-xl text-muted-foreground mb-6">Expert <strong>roof cleaning services</strong> across Liverpool. Professional moss and algae removal with soft washing.</p>
          <Button size="lg" asChild><a href="tel:+447845463877"><Phone className="h-5 w-5 mr-2" />Get Free Quote</a></Button>
        </div>
      </article>
      <div className="container-custom section-padding">
        <div className="max-w-4xl">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Roof Cleaning Throughout Liverpool</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">Liverpool's diverse properties deserve expert care. R.R.M Exterior Cleaning provides professional <strong>roof cleaning and maintenance</strong> for all property types.</p>
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
