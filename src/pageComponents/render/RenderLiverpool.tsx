'use client';
import { useEffect } from 'react';

import Link from 'next/link';
import { ChevronRight, Phone, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { Layout } from '@/components/layout/Layout';

export function RenderLiverpool() {
  useEffect(() => {
    const schema = { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'Professional Render Cleaning Liverpool | R.R.M Exterior Cleaning Specialist', address: { '@type': 'PostalAddress', streetAddress: '9 Noon Ct', addressLocality: 'Newton-le-Willows', postalCode: 'WA12 8QY', addressCountry: 'GB' }, telephone: '+447845463877', areaServed: 'Liverpool', serviceType: 'Render Cleaning' };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);
    document.title = 'Render Cleaning Liverpool | Professional Soft Washing';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Professional render cleaning in Liverpool. Expert soft washing for historic and modern properties. Algae, moss, stain removal. Call 07845 463877');
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
            <li><Link href="/services/render-cleaning" className="text-primary hover:text-accent transition-colors">Render Cleaning</Link></li>
            <li className="text-primary-foreground/50"><ChevronRight className="h-4 w-4" /></li>
            <li className="text-primary-foreground/70" aria-current="page">Liverpool</li>
          </ol>
        </div>
      </nav>

      <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom section-padding">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional Render Cleaning in Liverpool
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Expert soft washing and render cleaning services for Liverpool's diverse properties. Historic and modern facades, expert algae and moss removal, professional stain treatment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="group">
              <a href="tel:+447845463877">
                <Phone className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                Get Free Assessment: 07845 463877
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Request Quote</Link>
            </Button>
          </div>
        </div>
      </article>

      <div className="container-custom section-padding">
        <div className="max-w-4xl">
          <section className="mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Liverpool's diverse architecture—from historic period properties to contemporary developments—requires specialized render cleaning expertise. North West damp climate accelerates algae and biological growth. Professional soft washing safely restores facades, protects heritage properties, and maintains value across Liverpool's varied property stock.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Render Issues in Liverpool Properties</h2>
            <div className="space-y-3">
              <div className="flex gap-4">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground"><strong>Algae & Growth Acceleration:</strong> Liverpool's damp climate creates ideal conditions for rapid biological colonization.</p>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground"><strong>Historic Property Preservation:</strong> Period properties require gentle treatment that respects heritage finishes while removing growth.</p>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground"><strong>Pollution & Industrial Staining:</strong> Liverpool's maritime and industrial heritage creates stubborn pollution stains.</p>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground"><strong>Water Damage & Damp:</strong> Poor drainage in older properties forces moisture into render structures.</p>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground"><strong>Render Deterioration:</strong> Untreated biological growth weakens facades, threatening structural integrity.</p>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-secondary/30 rounded-lg p-8 border border-secondary">
            <h2 className="text-2xl font-bold text-foreground mb-4">Why Choose Professional Render Cleaning</h2>
            <p className="text-muted-foreground mb-4">
              Professional soft washing prevents structural damage, protects property investment, extends facade lifespan, maintains heritage authenticity, and improves curb appeal. Our expertise covers historic period properties and modern developments across Liverpool.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Render Cleaning Process</h2>
            <ol className="space-y-2 text-muted-foreground list-decimal list-inside text-sm">
              <li>Professional assessment identifying growth type and property-specific challenges</li>
              <li>Site preparation protecting landscaping and sensitive areas</li>
              <li>Soft wash application with biodegradable solutions at low pressure</li>
              <li>Gentle rinsing removing growth without surface damage</li>
              <li>Inspection and maintenance guidance for future protection</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">FAQs</h2>
            <div className="space-y-3">
              <details className="bg-secondary/30 rounded-lg p-4 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between text-sm">
                  Is soft washing suitable for historic Liverpool properties?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-3 text-sm">Yes. Soft washing is ideal for historic properties. Low pressure and gentle solutions protect heritage finishes while effectively removing growth and pollution.</p>
              </details>
              <details className="bg-secondary/30 rounded-lg p-4 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between text-sm">
                  How often should Liverpool rendered properties be cleaned?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-3 text-sm">Every 2-3 years is typical. Liverpool's maritime climate may require more frequent attention. Professional assessment determines your property's needs.</p>
              </details>
              <details className="bg-secondary/30 rounded-lg p-4 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between text-sm">
                  Can you remove industrial staining from render?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-3 text-sm">Yes. Our specialized solutions are effective against pollution, mineral deposits, and industrial staining. Professional treatment reveals clean render beneath layers of accumulation.</p>
              </details>
            </div>
          </section>

          <section className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg p-8 border border-accent/30 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Professional Render Cleaning in Liverpool</h2>
            <p className="text-muted-foreground mb-6">
              Protect your Liverpool property with expert soft washing. Historic or modern, we safely restore rendered facades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="tel:+447845463877">
                  <Phone className="h-5 w-5 mr-2" />
                  Call: 07845 463877
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Request Assessment</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">Liverpool specialists | Historic & modern properties | Free assessment | Professional & insured</p>
          </section>

        </div>
      </div>
      </main>
    </Layout>
  );
}
