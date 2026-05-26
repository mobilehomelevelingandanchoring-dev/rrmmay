'use client';
import { useEffect } from 'react';

import Link from 'next/link';
import { ChevronRight, Phone, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { Layout } from '@/components/layout/Layout';

export function RenderSkelmersdale() {
  useEffect(() => {
    const schema = { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'Render Cleaning Skelmersdale | R.R.M Exterior Cleaning', address: { '@type': 'PostalAddress', streetAddress: '9 Noon Ct', addressLocality: 'Newton-le-Willows', postalCode: 'WA12 8QY', addressCountry: 'GB' }, telephone: '+447845463877', areaServed: 'Skelmersdale', serviceType: 'Render Cleaning' };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);
    document.title = 'Render Cleaning Skelmersdale | Professional Soft Washing';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Professional render cleaning in Skelmersdale. Safe soft washing for algae and moss removal. Expert facade restoration. Call 07845 463877');
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
            <li className="text-primary-foreground/70" aria-current="page">Skelmersdale</li>
          </ol>
        </div>
      </nav>

      <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom section-padding">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional Render Cleaning in Skelmersdale
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Expert soft washing and render cleaning services for Skelmersdale properties. Professional algae and moss removal, facade restoration, trusted local specialists.
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
              Skelmersdale properties are exposed to North West damp and weather that accelerate render deterioration. Algae, moss, and biological growth compromise appearance and threaten structural integrity. Professional soft washing safely removes growth, protects your investment, and maintains long-term property value.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Render Problems in Skelmersdale</h2>
            <ul className="space-y-2">
              <li className="flex gap-3">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Algae growth from damp climate</span>
              </li>
              <li className="flex gap-3">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Moss in shaded and north-facing areas</span>
              </li>
              <li className="flex gap-3">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Weather staining and pollution marks</span>
              </li>
              <li className="flex gap-3">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Water damage from drainage problems</span>
              </li>
              <li className="flex gap-3">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Structural deterioration from untreated growth</span>
              </li>
            </ul>
          </section>

          <section className="mb-12 bg-secondary/30 rounded-lg p-8 border border-secondary">
            <h2 className="text-2xl font-bold text-foreground mb-4">Professional Soft Washing Benefits</h2>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>✓ Prevents water infiltration and structural damage</li>
              <li>✓ Extends render lifespan and maintains value</li>
              <li>✓ Restores appearance and improves curb appeal</li>
              <li>✓ Protects against expensive repairs</li>
              <li>✓ Safe treatment for all render systems</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Cleaning Process</h2>
            <ol className="space-y-2 text-muted-foreground text-sm list-decimal list-inside">
              <li>Expert assessment of your Skelmersdale property</li>
              <li>Site preparation protecting landscaping</li>
              <li>Soft wash with biodegradable low-pressure solutions</li>
              <li>Gentle rinsing preserving render integrity</li>
              <li>Maintenance guidance for long-term protection</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">FAQs</h2>
            <div className="space-y-3">
              <details className="bg-secondary/30 rounded-lg p-4 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between text-sm">
                  Is soft washing safe for render?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-3 text-sm">Yes. Professional soft washing is designed to clean render safely. Pressure washing damages render permanently. Trust professional expertise.</p>
              </details>
              <details className="bg-secondary/30 rounded-lg p-4 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between text-sm">
                  How often should I clean rendered facades?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-3 text-sm">Every 2-3 years is typical. Skelmersdale's climate may require more frequent attention. Professional assessment determines your property's needs.</p>
              </details>
              <details className="bg-secondary/30 rounded-lg p-4 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between text-sm">
                  What causes staining on render?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-3 text-sm">Rain, pollution, algae, and moss create staining. Professional soft washing removes these environmental layers safely and effectively.</p>
              </details>
            </div>
          </section>

          <section className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg p-8 border border-accent/30 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Professional Render Cleaning in Skelmersdale</h2>
            <p className="text-muted-foreground mb-6">
              Protect your Skelmersdale property with expert soft washing. Safe, effective, and locally trusted.
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
            <p className="text-sm text-muted-foreground mt-4">Skelmersdale specialists | 24/7 available | Free assessment | Professional & insured</p>
          </section>

        </div>
      </div>
      </main>
    </Layout>
  );
}
