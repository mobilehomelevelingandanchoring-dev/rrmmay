'use client';
import { useEffect } from 'react';

import Link from 'next/link';
import { ChevronRight, Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { Layout } from '@/components/layout/Layout';

export function CladdingWarrington() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Cladding Cleaning Warrington | Professional Soft Washing Service',
      description: 'Expert cladding cleaning in Warrington. Safe soft washing removes algae, mold, and pollution stains from UPVC, metal, and aluminium cladding.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Warrington',
        addressCountry: 'GB'
      },
      telephone: '+447845463877',
      areaServed: 'Warrington',
      serviceType: 'Cladding Cleaning'
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    document.title = 'Cladding Cleaning Warrington | UPVC, Metal & Aluminium Specialists';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Professional cladding cleaning in Warrington. Safe soft washing removes algae, mold, and pollution from all cladding types. Call 07845 463877');
    }

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
            <li><Link href="/services/cladding-cleaning" className="text-primary hover:text-accent transition-colors">Cladding Cleaning</Link></li>
            <li className="text-primary-foreground/50"><ChevronRight className="h-4 w-4" /></li>
            <li className="text-primary-foreground/70" aria-current="page">Warrington</li>
          </ol>
        </div>
      </nav>

      <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom section-padding">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Cladding Cleaning in Warrington
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Expert soft washing for UPVC, metal, and aluminium cladding throughout Warrington. Safe removal of algae, mold, and pollution without damage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="group">
              <a href="tel:+447845463877">
                <Phone className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                Call: 07845 463877
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
            <p className="text-muted-foreground leading-relaxed mb-8">
              Warrington properties require regular cladding maintenance to combat damp North West conditions. Our professional soft washing removes algae, mold, and environmental stains safely without damaging your UPVC, metal, or aluminium cladding.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-6">Why Professional Cladding Cleaning?</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Prevents Material Degradation</h3>
                  <p className="text-muted-foreground text-sm">Algae and mold trap moisture, weakening cladding over time. Professional cleaning prevents this damage.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Maintains Property Value</h3>
                  <p className="text-muted-foreground text-sm">Clean cladding dramatically improves curb appeal and protects your property's worth.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Extends Cladding Lifespan</h3>
                  <p className="text-muted-foreground text-sm">Regular maintenance prevents premature replacement and saves significant costs.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Improves Health & Safety</h3>
                  <p className="text-muted-foreground text-sm">Removes allergens and pathogenic growth from your building exterior.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Our Cladding Cleaning Process</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="bg-accent text-primary rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Expert Assessment</h3>
                  <p className="text-muted-foreground text-sm">Identify cladding type and determine the best cleaning approach.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-accent text-primary rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Site Protection</h3>
                  <p className="text-muted-foreground text-sm">Protect landscaping and sensitive areas before cleaning begins.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-accent text-primary rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Soft Wash Application</h3>
                  <p className="text-muted-foreground text-sm">Apply biodegradable solutions at low pressure to eliminate growth safely.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-accent text-primary rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Gentle Rinsing</h3>
                  <p className="text-muted-foreground text-sm">Complete low-pressure rinsing for spotless results.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-accent text-primary rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">5</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Inspection & Advice</h3>
                  <p className="text-muted-foreground text-sm">Final check and maintenance recommendations for future care.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Common Questions</h2>
            <div className="space-y-4">
              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  Will soft washing damage my cladding?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">No. Professional soft washing is designed to clean safely. Pressure washing damages cladding permanently.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  How often should I clean my cladding?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">Every 2-3 years is typical for North West properties. Professional assessment determines your specific needs.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  What cladding types can you clean?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">We clean UPVC, metal, aluminium, and composite cladding with specialized techniques for each material.</p>
              </details>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Related Services</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/services/render-cleaning" className="group p-6 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">Render Cleaning</h3>
                <p className="text-sm text-muted-foreground">Algae and stain removal from rendered surfaces</p>
              </Link>
              <Link href="/services/pressure-washing" className="group p-6 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">Pressure Washing</h3>
                <p className="text-sm text-muted-foreground">High-pressure cleaning for hard surfaces</p>
              </Link>
              <Link href="/services/roof-cleaning" className="group p-6 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">Roof Cleaning</h3>
                <p className="text-sm text-muted-foreground">Professional moss and algae removal</p>
              </Link>
              <Link href="/services/gutter-cleaning" className="group p-6 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">Gutter Cleaning</h3>
                <p className="text-sm text-muted-foreground">Complete drainage maintenance</p>
              </Link>
            </div>
          </section>

          <section className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg p-8 border border-accent/30 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Professional Cladding Cleaning in Warrington</h2>
            <p className="text-muted-foreground mb-6">Restore your property's appearance with expert soft washing.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="tel:+447845463877">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now: 07845 463877
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Request Assessment</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">Warrington specialists | 24/7 available | Free assessment | Professional & insured</p>
          </section>

        </div>
      </div>
      </main>
    </Layout>
  );
}
