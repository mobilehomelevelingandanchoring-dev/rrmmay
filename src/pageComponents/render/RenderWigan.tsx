'use client';
import { useEffect } from 'react';

import Link from 'next/link';
import { ChevronRight, Phone, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { Layout } from '@/components/layout/Layout';

export function RenderWigan() {
  useEffect(() => {
    const schema = { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'Render Cleaning Wigan | R.R.M Exterior Cleaning', address: { '@type': 'PostalAddress', streetAddress: '9 Noon Ct', addressLocality: 'Newton-le-Willows', postalCode: 'WA12 8QY', addressCountry: 'GB' }, telephone: '+447845463877', areaServed: 'Wigan', serviceType: 'Render Cleaning' };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);
    document.title = 'Render Cleaning Wigan | Professional Soft Washing';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Professional render cleaning in Wigan. Safe soft washing for algae and moss removal. Expert facade restoration. Call 07845 463877');
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
            <li className="text-primary-foreground/70" aria-current="page">Wigan</li>
          </ol>
        </div>
      </nav>

      <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom section-padding">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional Render Cleaning in Wigan
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Expert soft washing and render cleaning services for Wigan properties. Professional algae and moss removal, facade restoration, trusted local specialists.
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
              Wigan properties face significant challenges from North West damp and weather. Rendered facades accumulate algae, moss, and biological growth that compromise appearance and structural integrity. Professional soft washing safely removes growth, protects your investment, and maintains property value long-term.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Common Render Issues in Wigan</h2>
            <ul className="space-y-2">
              <li className="flex gap-3">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Algae growth from damp conditions</span>
              </li>
              <li className="flex gap-3">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Moss accumulation in shaded areas</span>
              </li>
              <li className="flex gap-3">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Weather staining and pollution discoloration</span>
              </li>
              <li className="flex gap-3">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Water damage from poor drainage</span>
              </li>
              <li className="flex gap-3">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Structural deterioration from growth</span>
              </li>
            </ul>
          </section>

          <section className="mb-12 bg-secondary/30 rounded-lg p-8 border border-secondary">
            <h2 className="text-2xl font-bold text-foreground mb-4">Benefits of Professional Cleaning</h2>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>✓ Prevents water infiltration and damp damage</li>
              <li>✓ Extends facade lifespan and maintains value</li>
              <li>✓ Restores appearance and curb appeal</li>
              <li>✓ Avoids expensive repairs and deterioration</li>
              <li>✓ Safe treatment for all render systems</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Soft Washing Method</h2>
            <ol className="space-y-2 text-muted-foreground text-sm list-decimal list-inside">
              <li>Professional assessment of your Wigan property</li>
              <li>Protective site preparation</li>
              <li>Low-pressure soft wash with biodegradable solutions</li>
              <li>Gentle rinsing protecting surface integrity</li>
              <li>Maintenance recommendations for future protection</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">FAQs</h2>
            <div className="space-y-3">
              <details className="bg-secondary/30 rounded-lg p-4 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between text-sm">
                  Will soft washing damage my render?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-3 text-sm">No. Professional soft washing is designed to protect render. High-pressure methods damage render permanently. Trust professional expertise.</p>
              </details>
              <details className="bg-secondary/30 rounded-lg p-4 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between text-sm">
                  What's the cleaning schedule for Wigan?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-3 text-sm">Every 2-3 years is typical. Wigan's climate may require more frequent attention. Professional assessment determines your specific needs.</p>
              </details>
              <details className="bg-secondary/30 rounded-lg p-4 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between text-sm">
                  How does professional cleaning extend render life?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-3 text-sm">Professional cleaning removes biological growth and water infiltration threats. Maintained render avoids deterioration and extends lifespan significantly.</p>
              </details>
            </div>
          </section>

          <section className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg p-8 border border-accent/30 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Professional Render Cleaning in Wigan</h2>
            <p className="text-muted-foreground mb-6">
              Protect your Wigan property with expert soft washing. Safe, effective, and locally trusted.
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
            <p className="text-sm text-muted-foreground mt-4">Wigan specialists | 24/7 available | Free assessment | Professional & insured</p>
          </section>

        </div>
      </div>
      </main>
    </Layout>
  );
}
