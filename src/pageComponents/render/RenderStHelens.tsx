'use client';
import { useEffect } from 'react';

import Link from 'next/link';
import { ChevronRight, Phone, AlertCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { Layout } from '@/components/layout/Layout';

export function RenderStHelens() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Professional Render Cleaning St Helens | R.R.M Exterior Cleaning Specialist',
      description: 'Expert render cleaning and soft washing services in St Helens. Safe algae removal, stain treatment, and facade restoration for industrial heritage properties.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '9 Noon Ct',
        addressLocality: 'Newton-le-Willows',
        postalCode: 'WA12 8QY',
        addressCountry: 'GB'
      },
      telephone: '+447845463877',
      areaServed: 'St Helens',
      serviceType: 'Render Cleaning',
      url: 'https://rrmexternalcleaning.co.uk/services/render-cleaning/st-helens'
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    document.title = 'Render Cleaning St Helens | Professional Soft Washing Service';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Professional render cleaning in St Helens. Safe soft washing for industrial heritage properties. Algae, moss, and stain removal. Call 07845 463877');
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
            <li><Link href="/services/render-cleaning" className="text-primary hover:text-accent transition-colors">Render Cleaning</Link></li>
            <li className="text-primary-foreground/50"><ChevronRight className="h-4 w-4" /></li>
            <li className="text-primary-foreground/70" aria-current="page">St Helens</li>
          </ol>
        </div>
      </nav>

      <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom section-padding">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Render Cleaning in St Helens & Industrial Heritage Properties
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Professional render cleaning and soft washing services for St Helens homes and businesses. We specialize in industrial heritage properties, removing decades of pollution, algae, and weather staining safely and effectively.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="group">
              <a href="tel:+447845463877" title="Call for free render cleaning assessment in St Helens">
                <Phone className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                Get Free Assessment: 07845 463877
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact" title="Request render cleaning quote">
                Request Quote
              </Link>
            </Button>
          </div>
        </div>
      </article>

      <div className="container-custom section-padding">
        <div className="max-w-4xl">
          <section className="mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              St Helens' industrial heritage means rendered properties face unique challenges. Decades of industrial pollution, combined with North West damp climate, accelerate algae and biological growth. Professional render cleaning restores character, protects historic and modern properties alike, and prevents water damage that undermines structural integrity.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Render Cleaning for St Helens Industrial Heritage Properties</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              St Helens' rich industrial past left its mark on our built environment. Rendered facades accumulated pollution, mineral deposits, and discoloration that regular cleaning cannot address. Professional soft washing removes these environmental layers safely, revealing clean, well-maintained render and restoring St Helens properties to their true appearance.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Industrial Pollution Staining</h3>
                  <p className="text-muted-foreground text-sm">St Helens' industrial history created deep pollution stains that require specialized treatment and professional expertise.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Decades of Algae Buildup</h3>
                  <p className="text-muted-foreground text-sm">Long-term exposure to growth creates thick, stubborn layers that compromise render and require expert removal.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Moisture & Rising Damp</h3>
                  <p className="text-muted-foreground text-sm">Poor drainage and water infiltration in older St Helens properties requires professional assessment and treatment.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Mineral & Salt Deposits</h3>
                  <p className="text-muted-foreground text-sm">Industrial pollution left mineral and salt accumulation requiring specialized soft washing solutions.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Moss & Biological Growth</h3>
                  <p className="text-muted-foreground text-sm">North West damp accelerates growth, particularly on shaded, north-facing St Helens properties.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Structural Render Erosion</h3>
                  <p className="text-muted-foreground text-sm">Untreated damage weakens render, threatening the structural integrity of historic and period properties.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-secondary/30 rounded-lg p-8 border border-secondary">
            <h2 className="text-2xl font-bold text-foreground mb-6">Why Choose Professional Render Cleaning for St Helens</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Industrial Expertise & Heritage Understanding</h3>
                <p className="text-muted-foreground">We understand St Helens' unique property challenges—industrial pollution, older render systems, and complex water management issues. Expert knowledge ensures safe, effective treatment.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Safe, Damage-Free Soft Washing</h3>
                <p className="text-muted-foreground">Our low-pressure methods protect older render systems and delicate heritage finishes while removing years of accumulated growth and pollution.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Property Value & Historic Preservation</h3>
                <p className="text-muted-foreground">Clean render dramatically improves curb appeal and property value. For heritage properties, professional cleaning preserves character and authenticity.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Long-Term Structural Protection</h3>
                <p className="text-muted-foreground">Professional cleaning prevents water penetration, biological damage, and expensive structural repairs that plague neglected rendered properties.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Render Cleaning FAQs - St Helens</h2>
            <div className="space-y-4">
              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  Is soft washing suitable for older St Helens properties?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">Absolutely. Soft washing is especially suitable for older render systems. Its low pressure and gentle approach protect heritage finishes while effectively removing decades of growth and pollution.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  Will cleaning damage my render?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">No. Professional soft washing is designed to clean render safely. High-pressure washing damages render permanently. Our methods protect your property while delivering outstanding results.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  How often should St Helens properties be cleaned?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">Every 2-3 years is typical. St Helens' industrial history and damp climate may require more frequent attention. We recommend professional assessment to determine your property's specific needs.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  Can you remove industrial staining from render?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">Yes. Our specialized soft washing solutions are effective against industrial pollution, mineral deposits, and accumulated staining. Professional treatment reveals the clean render beneath.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  What if my render has structural damage?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">Professional cleaning reveals underlying damage. We'll identify issues during assessment and recommend specialized repair if needed. Early detection prevents expensive problems.</p>
              </details>
            </div>
          </section>

          <section className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg p-8 border border-accent/30 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Professional Render Cleaning for St Helens</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Restore your St Helens property's appearance and protect its future. Professional soft washing removes industrial pollution, algae, and weathering while safeguarding your render's integrity.
            </p>
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
            <p className="text-sm text-muted-foreground mt-4">
              St Helens specialists | Industrial heritage experts | 24/7 availability | Free assessment | Professional & insured
            </p>
          </section>

        </div>
      </div>
      </main>
    </Layout>
  );
}
