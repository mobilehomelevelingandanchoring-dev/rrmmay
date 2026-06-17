'use client';
import { useEffect } from 'react';

import Link from 'next/link';
import { ChevronRight, Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

export function CladdingManchester() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Cladding Cleaning Manchester | Professional Soft Washing',
      description: 'Expert cladding cleaning for Manchester commercial and residential properties. Safe algae, mold, and pollution removal.',
      address: { '@type': 'PostalAddress', addressLocality: 'Manchester', addressCountry: 'GB' },
      telephone: '+447845463877',
      areaServed: 'Manchester',
      serviceType: 'Cladding Cleaning'
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);
    document.title = 'Cladding Cleaning Manchester | Commercial & Residential Service';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Professional cladding cleaning in Manchester. Safe soft washing for commercial and residential properties. Call 07845 463877');
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
            <li className="text-primary-foreground/70" aria-current="page">Manchester</li>
          </ol>
        </div>
      </nav>

      <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom section-padding">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Cladding Cleaning in Manchester
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Expert soft washing for Manchester commercial and residential cladding. Safe removal of algae, mold, and urban pollution stains from all cladding types.
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
              Manchester's urban environment and commercial growth mean buildings face unique cladding challenges. Professional soft washing removes urban pollution, algae, and mold from UPVC, metal, and aluminium cladding, maintaining your property's professional appearance and value.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-6">Manchester Cladding Cleaning Solutions</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Removes Urban Pollution</h3>
                  <p className="text-muted-foreground text-sm">Manchester's urban environment accelerates pollution accumulation. We remove soot and chemical deposits safely.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Protects Commercial Reputation</h3>
                  <p className="text-muted-foreground text-sm">Clean cladding is essential for commercial properties. Professional cleaning maintains professional appearance.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Extends Material Lifespan</h3>
                  <p className="text-muted-foreground text-sm">Professional maintenance prevents premature deterioration and expensive replacement.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Safe for All Materials</h3>
                  <p className="text-muted-foreground text-sm">Soft washing protects UPVC, metal, and aluminium from pressure washing damage.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Our Process</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="bg-accent text-primary rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Assessment</h3>
                  <p className="text-muted-foreground text-sm">Identify cladding type and soiling requirements for your Manchester property.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-accent text-primary rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Preparation</h3>
                  <p className="text-muted-foreground text-sm">Protect landscaping and sensitive areas.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-accent text-primary rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Soft Wash</h3>
                  <p className="text-muted-foreground text-sm">Apply biodegradable solutions at low pressure.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-accent text-primary rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Rinse</h3>
                  <p className="text-muted-foreground text-sm">Complete low-pressure rinsing for spotless results.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-accent text-primary rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">5</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Inspection</h3>
                  <p className="text-muted-foreground text-sm">Final check and maintenance recommendations.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">FAQs</h2>
            <div className="space-y-4">
              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  Is soft washing safe for all Manchester properties?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">Yes. Soft washing is safe for all cladding types on residential and commercial properties.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  How often should Manchester cladding be cleaned?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">Every 2-3 years typically. Urban pollution may require more frequent cleaning. We'll recommend a schedule for your property.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  What about commercial building cleaning?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">We specialize in commercial properties. We work around your schedule with minimal disruption.</p>
              </details>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Other Services</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/services/render-cleaning" className="group p-6 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">Render Cleaning</h3>
                <p className="text-sm text-muted-foreground">Facade maintenance</p>
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
                <p className="text-sm text-muted-foreground">Drainage maintenance</p>
              </Link>
            </div>
          </section>

          <section className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg p-8 border border-accent/30 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Professional Cladding Cleaning in Manchester</h2>
            <p className="text-muted-foreground mb-6">Expert care for commercial and residential properties.</p>
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
            <p className="text-sm text-muted-foreground mt-4">Manchester specialists | Commercial expertise | 24/7 available | Professional & insured</p>
          </section>

        </div>
      </div>
      </main>
    </Layout>
  );
}
