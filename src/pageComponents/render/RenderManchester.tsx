'use client';
import { useEffect } from 'react';

import Link from 'next/link';
import { ChevronRight, Phone, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { Layout } from '@/components/layout/Layout';

export function RenderManchester() {
  useEffect(() => {
    const schema = { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'Professional Render Cleaning Manchester | R.R.M Exterior Cleaning Specialist', address: { '@type': 'PostalAddress', streetAddress: '9 Noon Ct', addressLocality: 'Newton-le-Willows', postalCode: 'WA12 8QY', addressCountry: 'GB' }, telephone: '+447845463877', areaServed: 'Manchester', serviceType: 'Render Cleaning' };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);
    document.title = 'Render Cleaning Manchester | Professional Soft Washing';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Professional render cleaning in Manchester. Expert soft washing for commercial and residential properties. Safe algae, moss, and stain removal. Call 07845 463877');
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
            <li className="text-primary-foreground/70" aria-current="page">Manchester</li>
          </ol>
        </div>
      </nav>

      <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom section-padding">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional Render Cleaning in Manchester
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Expert soft washing and render cleaning services for Manchester commercial and residential properties. Professional facade restoration, algae and moss removal, expert stain treatment.
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
              Manchester's dynamic commercial landscape and mixed residential properties require comprehensive render maintenance. North West damp climate accelerates biological growth on rendered facades. Professional soft washing maintains property appearance, protects investment, and ensures compliance with property standards across Manchester's diverse real estate portfolio.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Render Challenges for Manchester Properties</h2>
            <div className="space-y-3">
              <div className="flex gap-4">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground"><strong>Commercial Property Standards:</strong> Manchester businesses need pristine facades for professional image and tenant satisfaction.</p>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground"><strong>Urban Pollution Staining:</strong> City environment creates stubborn stains and discoloration on render surfaces.</p>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground"><strong>Rapid Biological Growth:</strong> Damp urban climate accelerates algae and moss development on facades.</p>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground"><strong>Water Damage & Damp:</strong> Failed drainage and poor maintenance lead to moisture infiltration and structural issues.</p>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground"><strong>Portfolio Maintenance Needs:</strong> Large property portfolios require coordinated professional render cleaning programs.</p>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-secondary/30 rounded-lg p-8 border border-secondary">
            <h2 className="text-2xl font-bold text-foreground mb-4">Professional Render Cleaning Benefits</h2>
            <p className="text-muted-foreground mb-4">
              Maintains commercial appearance, protects property investment, extends facade lifespan, ensures structural integrity, improves tenant satisfaction, and enhances Manchester property value. Our professional soft washing approach is safe for all property types.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Approach</h2>
            <ol className="space-y-2 text-muted-foreground list-decimal list-inside text-sm">
              <li>Expert assessment of Manchester property's specific render condition</li>
              <li>Customized treatment plan addressing unique challenges</li>
              <li>Soft wash application with low-pressure biodegradable solutions</li>
              <li>Professional rinsing protecting surface integrity</li>
              <li>Maintenance guidance and scheduled cleaning programs</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">FAQs</h2>
            <div className="space-y-3">
              <details className="bg-secondary/30 rounded-lg p-4 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between text-sm">
                  Is soft washing suitable for commercial Manchester properties?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-3 text-sm">Absolutely. Professional soft washing maintains commercial appearance while protecting property value. Safe, effective, and ideal for building facades and curtain walls.</p>
              </details>
              <details className="bg-secondary/30 rounded-lg p-4 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between text-sm">
                  How does render cleaning improve property value?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-3 text-sm">Clean render dramatically improves curb appeal and first impressions. Well-maintained facades are more attractive to buyers, tenants, and investors, directly impacting property value.</p>
              </details>
              <details className="bg-secondary/30 rounded-lg p-4 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between text-sm">
                  Do you offer maintenance programs for multiple properties?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-3 text-sm">Yes. We provide coordinated render cleaning programs for property portfolios, commercial investors, and estate managers across Manchester.</p>
              </details>
            </div>
          </section>

          <section className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg p-8 border border-accent/30 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Professional Render Cleaning for Manchester</h2>
            <p className="text-muted-foreground mb-6">
              Maintain your Manchester property portfolio with professional render cleaning. Commercial and residential expertise available.
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
            <p className="text-sm text-muted-foreground mt-4">Manchester specialists | Commercial & residential | Property portfolios | Free assessment | Professional & insured</p>
          </section>

        </div>
      </div>
      </main>
    </Layout>
  );
}
