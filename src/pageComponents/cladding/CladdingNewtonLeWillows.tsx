'use client';
import { useEffect } from 'react';

import Link from 'next/link';
import { ChevronRight, Phone, AlertCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { Layout } from '@/components/layout/Layout';

export function CladdingNewtonLeWillows() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Professional Cladding Cleaning Newton-le-Willows | R.R.M Exterior Cleaning Specialist',
      description: 'Expert cladding cleaning and soft washing services for Newton-le-Willows buildings. UPVC, metal, aluminium cladding specialists. Safe algae and mold removal.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '9 Noon Ct',
        addressLocality: 'Newton-le-Willows',
        postalCode: 'WA12 8QY',
        addressCountry: 'GB'
      },
      telephone: '+447845463877',
      areaServed: 'Newton-le-Willows',
      serviceType: 'Cladding Cleaning'
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    document.title = 'Cladding Cleaning Newton-le-Willows | Professional UPVC & Metal Cladding Service';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Professional cladding cleaning in Newton-le-Willows. UPVC, metal, aluminium cladding experts. Safe soft washing removes algae, mold, pollution stains. Call 07845 463877');
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
            <li className="text-primary-foreground/70" aria-current="page">Newton-le-Willows</li>
          </ol>
        </div>
      </nav>

      <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom section-padding">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional Cladding Cleaning in Newton-le-Willows & WA12
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Expert cladding cleaning specialists for Newton-le-Willows homes and businesses. We safely clean UPVC, metal, aluminium, and composite cladding using soft washing techniques that protect your building's appearance and integrity.
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
              Newton-le-Willows properties rely on cladding for protection and curb appeal. The damp North West climate accelerates algae, mold, and biological growth on UPVC, metal, aluminium, and composite cladding. Over time, dirty cladding looks neglected and compromises the building's protective qualities. Professional soft washing restores appearance, maintains property value, and extends your cladding's lifespan.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Cladding Cleaning for Newton-le-Willows Properties</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Newton-le-Willows' location in the North West means exposed cladding faces constant environmental challenges. The combination of high rainfall, pollution, and damp conditions accelerates biological growth. Professional soft washing removes algae and mold before damage occurs, protecting your building's investment and maintaining structural integrity.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Algae & Green Growth</h3>
                  <p className="text-muted-foreground text-sm">Damp Newton-le-Willows climate promotes rapid algae spread. Green stains indicate active biological growth that worsens over time without treatment.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Mold & Fungal Issues</h3>
                  <p className="text-muted-foreground text-sm">Moisture traps in cladding joints create perfect conditions for mold. Growth weakens cladding and raises health concerns.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Pollution & Weather Staining</h3>
                  <p className="text-muted-foreground text-sm">Pollution and rain create stubborn streaks. Mineral deposits and acid rain cause permanent-looking discoloration.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Water Infiltration Damage</h3>
                  <p className="text-muted-foreground text-sm">Failed drainage forces water into cladding, causing damp, salt staining, and structural issues over time.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Clogged Joints & Gaps</h3>
                  <p className="text-muted-foreground text-sm">Algae accumulation in cladding joints traps moisture and accelerates material deterioration.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Cladding Deterioration & Damage</h3>
                  <p className="text-muted-foreground text-sm">Untreated biological growth weakens cladding, leading to surface failure and expensive replacement.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-secondary/30 rounded-lg p-8 border border-secondary">
            <h2 className="text-2xl font-bold text-foreground mb-6">Why Professional Cladding Cleaning Matters</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Prevents Material Degradation</h3>
                <p className="text-muted-foreground">Biological growth weakens cladding by trapping moisture. Professional soft washing removes the threat before permanent damage occurs.</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Protects Property Value</h3>
                <p className="text-muted-foreground">Clean cladding dramatically improves building appearance. Properties with well-maintained facades are more attractive to buyers and renters.</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Extends Cladding Lifespan</h3>
                <p className="text-muted-foreground">Well-maintained cladding lasts decades. Professional cleaning prevents premature deterioration and expensive replacement projects.</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Improves Health & Safety</h3>
                <p className="text-muted-foreground">Mold and biological growth harbor allergens. Professional cleaning creates healthier environments for building occupants.</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Safe, Damage-Free Cleaning</h3>
                <p className="text-muted-foreground">Professional soft washing removes growth safely without damaging UPVC, metal, aluminium, or composite surfaces.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Our Professional Cladding Cleaning Process</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">1. Expert Assessment</h3>
                  <p className="text-muted-foreground">We inspect your Newton-le-Willows property, identify cladding type, assess growth and damage, and plan the appropriate treatment approach.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">2. Site Protection & Preparation</h3>
                  <p className="text-muted-foreground">We protect landscaping, windows, and sensitive areas. Proper preparation prevents collateral damage and ensures safety.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">3. Soft Wash Application</h3>
                  <p className="text-muted-foreground">We apply specialized biodegradable solutions at low pressure appropriate to your cladding type, eliminating algae and mold at source.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">4. Gentle Rinsing & Finish</h3>
                  <p className="text-muted-foreground">Low-pressure rinsing removes solution and loosened growth without stressing your cladding materials.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">5. Inspection & Maintenance Advice</h3>
                  <p className="text-muted-foreground">Final inspection confirms excellent results. We discuss maintenance recommendations and identify any damage requiring specialist attention.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Cladding Cleaning FAQs - Newton-le-Willows</h2>
            <div className="space-y-4">
              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  Is soft washing safe for Newton-le-Willows cladding?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">Absolutely. Professional soft washing is designed to clean cladding safely. Pressure washing damages cladding permanently, especially UPVC and composite materials. Soft washing protects your property.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  How often should I clean cladding in Newton-le-Willows?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">Every 2-3 years is typical for North West properties. Newton-le-Willows' damp climate may require more frequent attention. Professional assessment determines your property's specific schedule.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  What cladding materials can you clean?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">We clean UPVC, metal, aluminium, and composite cladding. Each material requires specialized treatment. Our expertise ensures safe, effective cleaning for your specific cladding type.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  Will cleaning prevent water damage?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">Yes. Professional cleaning removes biological growth that traps moisture and degrades cladding. Clean cladding repels water effectively, preventing damp and water infiltration.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  What if my cladding has damage?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">Professional cleaning reveals underlying damage. We identify issues during assessment and recommend specialist repair if needed. Early detection prevents costly structural problems.</p>
              </details>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Related Services for Newton-le-Willows</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/services/soft-washing" className="group p-6 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">Soft Washing</h3>
                <p className="text-sm text-muted-foreground">Low-pressure cleaning for all delicate surfaces throughout your property</p>
              </Link>
              <Link href="/services/pressure-washing" className="group p-6 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">Pressure Washing</h3>
                <p className="text-sm text-muted-foreground">High-pressure cleaning for driveways, patios, and hard surfaces</p>
              </Link>
              <Link href="/services/roof-cleaning" className="group p-6 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">Roof Cleaning</h3>
                <p className="text-sm text-muted-foreground">Professional moss and algae removal to prevent leaks</p>
              </Link>
              <Link href="/services/gutter-cleaning" className="group p-6 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">Gutter Cleaning</h3>
                <p className="text-sm text-muted-foreground">Complete gutter and downpipe clearing for proper drainage</p>
              </Link>
            </div>
          </section>

          <section className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg p-8 border border-accent/30 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Professional Cladding Cleaning in Newton-le-Willows</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Restore your property's appearance and protect your investment. Contact R.R.M Exterior Cleaning Specialist for professional cladding maintenance.
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
              Newton-le-Willows specialists | WA12 service area | 24/7 available | Free assessment | Professional & insured
            </p>
          </section>

        </div>
      </div>
      </main>
    </Layout>
  );
}
