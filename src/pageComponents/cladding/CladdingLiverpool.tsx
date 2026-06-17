'use client';
import { useEffect } from 'react';

import Link from 'next/link';
import { ChevronRight, Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { Layout } from '@/components/layout/Layout';

export function CladdingLiverpool() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Cladding Cleaning Liverpool | Professional Soft Washing',
      description: 'Expert cladding cleaning for Liverpool properties. Safe algae, mold, and pollution removal from UPVC, metal, and aluminium cladding.',
      address: { '@type': 'PostalAddress', addressLocality: 'Liverpool', addressCountry: 'GB' },
      telephone: '+447845463877',
      areaServed: 'Liverpool',
      serviceType: 'Cladding Cleaning'
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);
    document.title = 'Cladding Cleaning Liverpool | Professional UPVC & Metal Service';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Professional cladding cleaning in Liverpool. Safe soft washing for all cladding types. Call 07845 463877');
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
            <li><Link href="/services/cladding-cleaning" className="text-primary hover:text-accent transition-colors">Cladding Cleaning</Link></li>
            <li className="text-primary-foreground/50"><ChevronRight className="h-4 w-4" /></li>
            <li className="text-primary-foreground/70" aria-current="page">Liverpool</li>
          </ol>
        </div>
      </nav>

      <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom section-padding">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Cladding Cleaning in Liverpool
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Expert soft washing for historic and modern Liverpool properties. Safe removal of algae, mold, and environmental stains from all cladding types.
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
              Liverpool's maritime climate and urban environment accelerate cladding deterioration. Professional soft washing removes algae, mold, and pollution stains from UPVC, metal, and aluminium cladding, protecting your property's value and appearance.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-6">Why Choose Professional Cleaning?</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Preserves Historic Character</h3>
                  <p className="text-muted-foreground text-sm">Expert handling for Liverpool's heritage properties and listed buildings.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Removes Environmental Staining</h3>
                  <p className="text-muted-foreground text-sm">Urban pollution and acid rain damage are safely eliminated.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Extends Material Lifespan</h3>
                  <p className="text-muted-foreground text-sm">Professional maintenance prevents premature deterioration and failure.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Safe for All Materials</h3>
                  <p className="text-muted-foreground text-sm">Soft washing protects UPVC, metal, and aluminium from damage.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Professional Cleaning Process</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="bg-accent text-primary rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Expert Assessment</h3>
                  <p className="text-muted-foreground text-sm">Identify cladding type and soiling requirements.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-accent text-primary rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Site Protection</h3>
                  <p className="text-muted-foreground text-sm">Protect landscaping and sensitive areas.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-accent text-primary rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Soft Wash Application</h3>
                  <p className="text-muted-foreground text-sm">Apply biodegradable solutions at low pressure.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-accent text-primary rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Gentle Rinsing</h3>
                  <p className="text-muted-foreground text-sm">Complete low-pressure rinsing for perfect results.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-accent text-primary rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">5</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Inspection & Advice</h3>
                  <p className="text-muted-foreground text-sm">Final check and maintenance recommendations.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Questions?</h2>
            <div className="space-y-4">
              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  Will soft washing damage my historic cladding?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">No. We specialize in heritage properties and understand material sensitivities.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  How frequently should Liverpool properties be cleaned?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">Every 2-3 years is typical. Urban pollution may require more frequent attention.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  What cleaning solutions do you use?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">Biodegradable, environmentally safe solutions appropriate for your cladding type.</p>
              </details>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Related Services</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/services/render-cleaning" className="group p-6 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">Render Cleaning</h3>
                <p className="text-sm text-muted-foreground">Historic facade care</p>
              </Link>
              <Link href="/services/pressure-washing" className="group p-6 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">Pressure Washing</h3>
                <p className="text-sm text-muted-foreground">Hard surface cleaning</p>
              </Link>
              <Link href="/services/roof-cleaning" className="group p-6 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">Roof Cleaning</h3>
                <p className="text-sm text-muted-foreground">Moss and algae removal</p>
              </Link>
              <Link href="/services/gutter-cleaning" className="group p-6 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">Gutter Cleaning</h3>
                <p className="text-sm text-muted-foreground">Drainage care</p>
              </Link>
            </div>
          </section>

          <section className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg p-8 border border-accent/30 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Cladding Cleaning in Liverpool</h2>
            <p className="text-muted-foreground mb-6">Expert care for your property's exterior.</p>
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
            <p className="text-sm text-muted-foreground mt-4">Liverpool specialists | Heritage expertise | 24/7 available | Professional & insured</p>
          </section>

        </div>
      </div>
      </main>
    </Layout>
  );
}
