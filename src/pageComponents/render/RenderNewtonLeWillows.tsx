'use client';
import { useEffect } from 'react';

import Link from 'next/link';
import { ChevronRight, Phone, AlertCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { Layout } from '@/components/layout/Layout';

export function RenderNewtonLeWillows() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Professional Render Cleaning Newton-le-Willows | R.R.M Exterior Cleaning Specialist',
      description: 'Expert render cleaning and soft washing services in Newton-le-Willows. Safe algae removal, stain treatment, and rendered facade restoration. Local specialists.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '9 Noon Ct',
        addressLocality: 'Newton-le-Willows',
        postalCode: 'WA12 8QY',
        addressCountry: 'GB'
      },
      telephone: '+447845463877',
      areaServed: 'Newton-le-Willows',
      serviceType: 'Render Cleaning',
      url: 'https://rrmexternalcleaning.co.uk/services/render-cleaning/newton-le-willows'
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    document.title = 'Render Cleaning Newton-le-Willows | Professional Soft Washing Service';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Professional render cleaning in Newton-le-Willows. Safe soft washing for algae, moss, and weather stains on rendered facades. Local specialists. Call 07845 463877');
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
            <li className="text-primary-foreground/70" aria-current="page">Newton-le-Willows</li>
          </ol>
        </div>
      </nav>

      <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom section-padding">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Render Cleaning in Newton-le-Willows & WA12 Area
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Professional render cleaning and soft washing services for Newton-le-Willows homes and businesses. We safely remove algae, moss, and weathering stains from rendered facades using gentle, effective soft washing techniques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="group">
              <a href="tel:+447845463877" title="Call for free render cleaning assessment in Newton-le-Willows">
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
              Newton-le-Willows' damp climate and frequent rainfall create perfect conditions for algae, moss, and biological growth on rendered properties. Dirty render doesn't just look neglected—it indicates active damage that worsens without professional care. R.R.M Exterior Cleaning specializes in safe, effective render cleaning that restores appearance and protects your property's longevity.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Newton-le-Willows Properties Need Regular Render Cleaning</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Newton-le-Willows' location in the North West means exposed rendered facades face constant environmental challenges. The combination of high rainfall, industrial pollution, and damp conditions accelerates algae and moss colonization. Regular professional render cleaning prevents biological growth from establishing itself, protects your render's structural integrity, and maintains your property's market appeal.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Algae & Green Staining</h3>
                  <p className="text-muted-foreground text-sm">Common in Newton-le-Willows due to consistent moisture and damp climate. Indicates active biological growth that spreads rapidly.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Moss & Lichen Accumulation</h3>
                  <p className="text-muted-foreground text-sm">Thrives in WA12's wet conditions, particularly on north-facing and shaded areas. Retains moisture that damages render.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Pollution & Weather Staining</h3>
                  <p className="text-muted-foreground text-sm">Industrial heritage and pollution in the area create dark streaks and uneven discoloration on render surfaces.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Water Penetration Damage</h3>
                  <p className="text-muted-foreground text-sm">Newton-le-Willows' rainfall forces water into untreated render, causing damp, salt staining, and structural compromise.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Clogged Gutters & Poor Drainage</h3>
                  <p className="text-muted-foreground text-sm">Failed drainage forces water down rendered facades, accelerating biological growth and moisture damage.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Render Deterioration & Cracking</h3>
                  <p className="text-muted-foreground text-sm">Untreated biological growth weakens render over time, leading to permanent damage and expensive repairs.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-secondary/30 rounded-lg p-8 border border-secondary">
            <h2 className="text-2xl font-bold text-foreground mb-6">Our Render Cleaning Process</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">1. Professional Assessment</h3>
                  <p className="text-muted-foreground">We inspect your Newton-le-Willows property, identify growth type, check for damage, and assess water flow patterns.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">2. Site Preparation</h3>
                  <p className="text-muted-foreground">We protect landscaping, windows, and sensitive areas to prevent collateral damage.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">3. Soft Wash Application</h3>
                  <p className="text-muted-foreground">Low-pressure biodegradable solutions eliminate algae, moss, and biological organisms at their source.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">4. Gentle Rinsing</h3>
                  <p className="text-muted-foreground">Low-pressure rinse removes solution and loosened growth without compromising render integrity.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">5. Final Inspection & Advice</h3>
                  <p className="text-muted-foreground">We inspect results, discuss maintenance recommendations, and identify any underlying damage requiring repair.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Render Cleaning FAQs - Newton-le-Willows</h2>
            <div className="space-y-4">
              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  Is soft washing safe for Newton-le-Willows rendered properties?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">Absolutely. Professional soft washing is specifically designed for render and is far safer than DIY pressure washing. Our low-pressure methods protect your property while effectively removing growth.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  How often should I clean render in Newton-le-Willows?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">Every 2-3 years is typical for North West properties. Newton-le-Willows' damp climate may require more frequent cleaning. We recommend professional assessment to determine your specific schedule.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  Can I use a pressure washer on my Newton-le-Willows render?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">No. Pressure washing permanently damages render by gouging the surface, forcing water into the structure, and accelerating deterioration. Professional soft washing is the safe, effective choice.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  What causes render problems in WA12?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">Newton-le-Willows' high rainfall, industrial pollution, and damp climate create perfect conditions for algae and moss. Combined with poor drainage, water penetration accelerates biological growth and render deterioration.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  How does professional cleaning prevent water damage?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">Clean render repels water effectively. Biological growth traps moisture and degrades the surface. Professional cleaning removes the threat, preventing damp, rising moisture, and expensive structural damage.</p>
              </details>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Related Render Cleaning Services</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/services/soft-washing" className="group p-6 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">Soft Washing Services</h3>
                <p className="text-sm text-muted-foreground">Low-pressure cleaning for all delicate surfaces throughout your Newton-le-Willows property</p>
              </Link>
              <Link href="/services/pressure-washing" className="group p-6 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">Pressure Washing</h3>
                <p className="text-sm text-muted-foreground">Professional high-pressure cleaning for driveways, patios, and hard surfaces</p>
              </Link>
              <Link href="/services/gutter-cleaning" className="group p-6 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">Gutter Cleaning</h3>
                <p className="text-sm text-muted-foreground">Complete gutter and downpipe clearing to prevent water damage to render</p>
              </Link>
              <Link href="/services/roof-cleaning" className="group p-6 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">Roof Cleaning</h3>
                <p className="text-sm text-muted-foreground">Professional moss and algae removal to complete your property maintenance</p>
              </Link>
            </div>
          </section>

          <section className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg p-8 border border-accent/30 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Restore Your Newton-le-Willows Rendered Property</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Professional render cleaning restores appearance, prevents water damage, and extends your property's lifespan. R.R.M Exterior Cleaning specializes in safe soft washing for Newton-le-Willows homes and businesses.
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
              Newton-le-Willows specialists | WA12 service area | 24/7 availability | Free assessment | Professional & insured
            </p>
          </section>

        </div>
      </div>
      </main>
    </Layout>
  );
}
