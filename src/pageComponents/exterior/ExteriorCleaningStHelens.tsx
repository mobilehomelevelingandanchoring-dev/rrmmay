'use client';
import { useEffect, Fragment } from 'react';
import Link from 'next/link';
import { ChevronRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

export function ExteriorCleaningStHelens() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Professional Exterior Cleaning Services in St Helens | R.R.M Exterior Cleaning Specialist',
      description: 'Complete exterior cleaning services in St Helens covering pressure washing, roof cleaning, gutter clearing, and all property maintenance. Expert local specialists.',
      address: { '@type': 'PostalAddress', addressLocality: 'St Helens', addressCountry: 'GB' },
      telephone: '+447845463877',
      areaServed: 'St Helens',
      serviceType: 'Exterior Cleaning Services'
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);
    document.title = 'Exterior Cleaning St Helens | Professional Property Maintenance Services';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Professional exterior cleaning in St Helens. Pressure washing, roof cleaning, gutter clearing, soft washing. Call: 07845 463877');
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
            <li><Link href="/services/exterior-cleaning" className="text-primary hover:text-accent transition-colors">Exterior Cleaning</Link></li>
            <li className="text-primary-foreground/50"><ChevronRight className="h-4 w-4" /></li>
            <li className="text-primary-foreground/70">St Helens</li>
          </ol>
        </div>
      </nav>
      <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom section-padding">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Professional Exterior Cleaning Services in St Helens</h1>
          <p className="text-xl text-muted-foreground mb-6">Complete <strong>exterior cleaning solutions</strong> for St Helens properties. Expert pressure washing, roof cleaning, gutter clearing, and soft washing with professional methods and local expertise.</p>
          <Button size="lg" asChild><a href="tel:+447845463877"><Phone className="h-5 w-5 mr-2" />Get Free Assessment</a></Button>
        </div>
      </article>
      <div className="container-custom section-padding">
        <div className="max-w-4xl">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Expert Exterior Cleaning Services in St Helens</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">St Helens' industrial heritage and damp North West climate create unique exterior challenges. R.R.M Exterior Cleaning Specialist provides comprehensive <strong>exterior cleaning services</strong> protecting residential and commercial properties throughout St Helens.</p>
            <p className="text-muted-foreground leading-relaxed">From <strong>pressure washing</strong> driveways to <strong>soft washing</strong> roofs, <strong>gutter clearing</strong>, and specialized brick cleaning—we handle all exterior maintenance needs with professional expertise.</p>
          </section>
          <section className="mb-12 bg-secondary/30 rounded-lg p-8 border border-secondary">
            <h2 className="text-2xl font-bold text-foreground mb-6">Why St Helens Properties Need Professional Exterior Cleaning</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Pollution, damp weather, and organic growth accelerate exterior deterioration in St Helens. Regular professional <strong>exterior cleaning</strong> protects property value, prevents costly damage, and maintains curb appeal.</p>
            <p className="text-muted-foreground">Our local expertise means we understand St Helens-specific challenges and provide solutions that work in your climate.</p>
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
