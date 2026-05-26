'use client';
import { useEffect } from 'react';

import Link from 'next/link';
import { ChevronRight, Phone, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { Layout } from '@/components/layout/Layout';

export function RenderWidnes() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Professional Render Cleaning Widnes | R.R.M Exterior Cleaning Specialist',
      description: 'Expert render cleaning and soft washing services in Widnes. Safe algae removal, stain treatment, and professional facade restoration.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '9 Noon Ct',
        addressLocality: 'Newton-le-Willows',
        postalCode: 'WA12 8QY',
        addressCountry: 'GB'
      },
      telephone: '+447845463877',
      areaServed: 'Widnes',
      serviceType: 'Render Cleaning'
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);
    document.title = 'Render Cleaning Widnes | Professional Soft Washing Service';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Professional render cleaning in Widnes. Safe soft washing for algae, moss, and weather stains. Local specialists. Call 07845 463877');
    return () => {
      if (script.parentNode) document.head.removeChild(script);
    };
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
            <li className="text-primary-foreground/70" aria-current="page">Widnes</li>
          </ol>
        </div>
      </nav>

      <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom section-padding">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional Render Cleaning in Widnes
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Expert soft washing and render cleaning services for Widnes properties. Safe algae and moss removal from rendered facades. Professional, insured, and trusted by the community.
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
              Widnes properties face constant challenges from North West damp and weather. Rendered facades accumulate algae, moss, and discoloration that compromise appearance and threaten structural integrity. Professional soft washing removes biological growth safely, protects your investment, and maintains property value for years to come.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Common Render Issues in Widnes</h2>
            <div className="space-y-3">
              <div className="flex gap-4">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground"><strong>Algae & Biological Growth:</strong> Damp climate accelerates growth that spreads rapidly without treatment.</p>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground"><strong>Moss & Lichen:</strong> Particularly severe in shaded areas, retains moisture that damages render.</p>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground"><strong>Water Infiltration:</strong> Poor drainage forces moisture into render, causing damp and structural issues.</p>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground"><strong>Weather Staining:</strong> Pollution and rain create streaks that impact curb appeal.</p>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground"><strong>Render Deterioration:</strong> Untreated growth weakens render, leading to cracks and permanent damage.</p>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-secondary/30 rounded-lg p-8 border border-secondary">
            <h2 className="text-2xl font-bold text-foreground mb-4">Why Professional Soft Washing Matters</h2>
            <p className="text-muted-foreground mb-4">
              Professional render cleaning prevents structural damage, protects against water infiltration, extends facade lifespan, restores property appeal, and maintains value. Our safe soft washing approach eliminates growth without compromising render integrity—unlike dangerous DIY pressure washing.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Process</h2>
            <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
              <li>Professional assessment of your Widnes property's specific needs</li>
              <li>Site preparation to protect landscaping and sensitive areas</li>
              <li>Soft wash application with biodegradable solutions at low pressure</li>
              <li>Gentle rinsing that removes growth without surface damage</li>
              <li>Inspection and maintenance recommendations for future protection</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Render Cleaning FAQs</h2>
            <div className="space-y-3">
              <details className="bg-secondary/30 rounded-lg p-4 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between">
                  Is soft washing safe for my render?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-3 text-sm">Yes. Professional soft washing is designed to clean render safely. High-pressure washing damages render permanently. Our methods protect your property.</p>
              </details>
              <details className="bg-secondary/30 rounded-lg p-4 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between">
                  How often should I clean render in Widnes?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-3 text-sm">Every 2-3 years is typical. Widnes' damp climate may require more frequent attention. Professional assessment determines your property's specific needs.</p>
              </details>
              <details className="bg-secondary/30 rounded-lg p-4 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between">
                  Can pressure washing damage render?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-3 text-sm">Yes. High pressure gouges render, forces water inside, and causes permanent damage. Professional soft washing is the safe, effective choice.</p>
              </details>
            </div>
          </section>

          <section className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg p-8 border border-accent/30 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Professional Render Cleaning for Widnes</h2>
            <p className="text-muted-foreground mb-6">
              Restore your property's appearance and protect its future with professional soft washing. Contact R.R.M Exterior Cleaning Specialist today.
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
            <p className="text-sm text-muted-foreground mt-4">
              Widnes specialists | 24/7 available | Free assessment | Professional & insured
            </p>
          </section>

        </div>
      </div>
      </main>
    </Layout>
  );
}
