'use client';
import { useEffect } from 'react';

import Link from 'next/link';
import { ChevronRight, Phone, AlertCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { Layout } from '@/components/layout/Layout';

export function RenderWarrington() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Professional Render Cleaning Warrington | R.R.M Exterior Cleaning Specialist',
      description: 'Expert render cleaning and soft washing services in Warrington. Safe algae removal, stain treatment, and professional facade restoration for homes and businesses.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '9 Noon Ct',
        addressLocality: 'Newton-le-Willows',
        postalCode: 'WA12 8QY',
        addressCountry: 'GB'
      },
      telephone: '+447845463877',
      areaServed: 'Warrington',
      serviceType: 'Render Cleaning',
      url: 'https://rrmexternalcleaning.co.uk/services/render-cleaning/warrington'
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    document.title = 'Render Cleaning Warrington | Professional Soft Washing Service';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Professional render cleaning in Warrington. Safe soft washing for algae, moss, and weather stains on rendered facades. Local specialists. Call 07845 463877');
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
            <li className="text-primary-foreground/70" aria-current="page">Warrington</li>
          </ol>
        </div>
      </nav>

      <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom section-padding">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional Render Cleaning in Warrington
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Expert soft washing and render cleaning services for Warrington properties. Safe algae and moss removal, professional stain treatment, and facade restoration for residential and commercial buildings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="group">
              <a href="tel:+447845463877" title="Call for free render cleaning assessment in Warrington">
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
              Warrington's North West location and varied property stock demand professional render maintenance. From modern new-builds to established homes, rendered facades face algae, moss, and weather staining. R.R.M Exterior Cleaning provides safe, effective soft washing that protects your property's appearance and structural integrity for years to come.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Render Cleaning Challenges in Warrington</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Warrington's damp climate and commercial activity accelerate biological growth on rendered facades. Professional cleaning removes algae and moss before they cause permanent damage, protects property value, and maintains structural integrity that untreated growth would compromise.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Algae & Green Staining</h3>
                  <p className="text-muted-foreground text-sm">Common in Warrington's wet climate. Indicates active biological growth that spreads rapidly without treatment.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Moss Accumulation</h3>
                  <p className="text-muted-foreground text-sm">Thrives in shaded areas and retains moisture that damages render over time.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Water Infiltration & Damp</h3>
                  <p className="text-muted-foreground text-sm">Poor drainage forces water into render, causing moisture damage and structural issues.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Weather Staining & Discoloration</h3>
                  <p className="text-muted-foreground text-sm">Pollution and rain create streaks that impact curb appeal and property value.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Gutter-Related Water Damage</h3>
                  <p className="text-muted-foreground text-sm">Clogged or failed gutters direct water down facades, accelerating growth and deterioration.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Render Erosion & Structural Weakness</h3>
                  <p className="text-muted-foreground text-sm">Untreated growth weakens render, leading to cracks, patches, and expensive restoration needs.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-secondary/30 rounded-lg p-8 border border-secondary">
            <h2 className="text-2xl font-bold text-foreground mb-6">Our Professional Render Cleaning Approach</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Expert Assessment</h3>
                  <p className="text-muted-foreground">We inspect your Warrington property, identify growth type, and assess water management before recommending treatment.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Soft Wash Treatment</h3>
                  <p className="text-muted-foreground">Low-pressure biodegradable solutions eliminate algae and moss safely without damaging render.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Gentle Rinse & Finish</h3>
                  <p className="text-muted-foreground">Low-pressure rinsing removes solution and loosened growth while protecting your property's surface.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Maintenance Recommendations</h3>
                  <p className="text-muted-foreground">We advise on gutter maintenance, drainage improvements, and regular cleaning schedules for long-term protection.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Render Cleaning FAQs - Warrington</h2>
            <div className="space-y-4">
              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  How does soft washing protect render better than pressure washing?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">Soft washing uses low pressure combined with biodegradable solutions that eliminate growth at its source. Pressure washing gouges render, forces water inside, and causes permanent damage. Professional soft washing is safer and more effective.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  What's the best schedule for render cleaning in Warrington?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">Every 2-3 years is typical for North West properties. Warrington's damp climate may require more frequent attention depending on location and exposure. Professional assessment determines your specific needs.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  Will cleaning affect my render's water resistance?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">No. Professional cleaning restores render's water-repelling ability. Algae and moss compromise surface integrity and trap moisture. Clean render sheds water effectively and resists future growth better.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  Can you clean render on commercial Warrington properties?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">Absolutely. We specialize in both residential and commercial render cleaning. Professional maintenance protects property value, improves business appearance, and maintains structural integrity.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  How much does professional render cleaning cost?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">Costs vary based on property size, growth severity, and access requirements. Free professional assessment helps determine exact pricing. Professional cleaning is investment protection compared to repair costs.</p>
              </details>
            </div>
          </section>

          <section className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg p-8 border border-accent/30 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Professional Render Cleaning for Warrington</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Protect your Warrington property with professional render cleaning. Safe soft washing removes growth, restores appearance, and extends your facade's lifespan.
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
              Warrington specialists | Residential & commercial | 24/7 availability | Free assessment | Professional & insured
            </p>
          </section>

        </div>
      </div>
      </main>
    </Layout>
  );
}
