'use client';
import { useEffect } from 'react';

import Link from 'next/link';
import { ChevronRight, Phone, AlertCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { Layout } from '@/components/layout/Layout';

export function CladdingStHelens() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Cladding Cleaning St Helens | Professional UPVC, Metal & Aluminium Specialists',
      description: 'Expert industrial and commercial cladding cleaning for St Helens properties. Pollution, algae, and mold removal from UPVC, metal, aluminium cladding. Heritage building specialists.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '9 Noon Ct',
        addressLocality: 'Newton-le-Willows',
        postalCode: 'WA12 8QY',
        addressCountry: 'GB'
      },
      telephone: '+447845463877',
      areaServed: 'St Helens',
      serviceType: 'Cladding Cleaning'
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    document.title = 'Cladding Cleaning St Helens | Industrial Pollution & Algae Removal';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Professional cladding cleaning in St Helens. Industrial pollution, algae, mold removal from UPVC, metal, aluminium cladding. Expert heritage building care. Call 07845 463877');
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
            <li className="text-primary-foreground/70" aria-current="page">St Helens</li>
          </ol>
        </div>
      </nav>

      <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom section-padding">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Industrial Cladding Cleaning Services for St Helens
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            St Helens' industrial heritage leaves cladding exposed to unique pollution challenges. Our specialists remove industrial staining, algae, and mold from UPVC, metal, and aluminium cladding using safe, effective soft washing techniques.
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
              St Helens' industrial past means buildings face industrial pollution combined with North West damp conditions. Chemical deposits, soot, and algae accumulate on cladding faster than in residential areas. Professional soft washing removes industrial staining while protecting your building's materials and appearance.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Cladding Cleaning for St Helens Industrial & Commercial Properties</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              St Helens' industrial heritage leaves lasting marks on cladding. Chemical pollution, soot deposits, and environmental stains require specialized removal techniques. Our expertise with industrial staining and heritage properties ensures complete cleaning without material damage.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Industrial Pollution & Chemical Deposits</h3>
                  <p className="text-muted-foreground text-sm">St Helens' industrial areas accumulate soot and chemical residues that create stubborn dark staining on all cladding types.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Algae & Biological Growth</h3>
                  <p className="text-muted-foreground text-sm">Pollution combined with damp creates ideal conditions for algae and mold growth on St Helens cladding.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Acid Rain Damage & Mineral Staining</h3>
                  <p className="text-muted-foreground text-sm">Industrial areas experience increased acid rain damage, creating permanent-looking stains and corrosion marks.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Material-Specific Corrosion</h3>
                  <p className="text-muted-foreground text-sm">Metal and aluminium cladding corrodes rapidly in industrial environments without professional maintenance.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Joint Contamination & Water Infiltration</h3>
                  <p className="text-muted-foreground text-sm">Industrial particles lodge in cladding joints, trapping moisture and causing structural water damage.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Heritage Building Concerns</h3>
                  <p className="text-muted-foreground text-sm">St Helens' heritage buildings require sensitive cleaning that preserves historic materials and character.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-secondary/30 rounded-lg p-8 border border-secondary">
            <h2 className="text-2xl font-bold text-foreground mb-6">Specialized Industrial Cladding Cleaning</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Removes Industrial Pollution</h3>
                <p className="text-muted-foreground">Chemical deposits and soot require specialized soft washing solutions to dissolve pollution without damaging cladding materials.</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Protects Commercial Reputation</h3>
                <p className="text-muted-foreground">Clean cladding is essential for commercial properties. Professional cleaning maintains professional appearance and building value.</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Prevents Corrosion & Deterioration</h3>
                <p className="text-muted-foreground">Regular professional cleaning prevents industrial corrosion that rapidly degrades metal and aluminium cladding in St Helens.</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Heritage Building Expertise</h3>
                <p className="text-muted-foreground">Our specialists understand heritage building materials and cleaning sensitivities. We preserve character while removing soiling.</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Extends Asset Lifespan</h3>
                <p className="text-muted-foreground">Professional maintenance prevents premature deterioration and expensive replacement of industrial-exposed cladding.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Our Professional Process</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">1. Industrial Assessment</h3>
                  <p className="text-muted-foreground">We evaluate pollution type, material composition, and degree of soiling to determine specialized treatment approach.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">2. Specialized Solution Selection</h3>
                  <p className="text-muted-foreground">Different pollution requires different chemistry. We apply industrial-grade biodegradable solutions appropriate to your soiling.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">3. Low-Pressure Application</h3>
                  <p className="text-muted-foreground">Soft wash application gives solutions time to work, breaking down industrial deposits safely without material stress.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">4. Complete Rinsing</h3>
                  <p className="text-muted-foreground">Thorough low-pressure rinsing removes solution residue and loosened contamination, leaving cladding spotlessly clean.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">5. Inspection & Recommendations</h3>
                  <p className="text-muted-foreground">Final inspection identifies any underlying damage. We recommend maintenance schedules and specialist repairs if needed.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">St Helens Cladding FAQs</h2>
            <div className="space-y-4">
              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  How does industrial pollution affect cladding?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">Chemical deposits and soot accelerate corrosion on metal and aluminium. UPVC discolors. Deposits trap moisture, promoting biological growth. Professional cleaning prevents accelerated deterioration.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  How often should St Helens cladding be cleaned?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">Industrial areas require cleaning every 1-2 years due to pollution accumulation. Professional assessment determines your property's specific schedule based on exposure and material.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  Can you clean heritage building cladding?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">Yes. Our specialists understand heritage materials and use gentle techniques that remove soiling while preserving original character and finish.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  Will soft washing damage metal or aluminium cladding?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">No. Soft washing is specifically designed for metal and aluminium. Pressure washing causes permanent damage. Our techniques safely clean while protecting protective coatings.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  What about corrosion beneath the pollution?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">Professional cleaning reveals underlying damage. We identify corrosion during assessment and recommend specialist treatment if needed. Early detection prevents structural failure.</p>
              </details>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Related Services</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/services/render-cleaning" className="group p-6 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">Render Cleaning</h3>
                <p className="text-sm text-muted-foreground">Algae and pollution removal from rendered facades</p>
              </Link>
              <Link href="/services/pressure-washing" className="group p-6 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">Pressure Washing</h3>
                <p className="text-sm text-muted-foreground">High-pressure cleaning for hard surfaces and courtyards</p>
              </Link>
              <Link href="/services/roof-cleaning" className="group p-6 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">Roof Cleaning</h3>
                <p className="text-sm text-muted-foreground">Professional moss and algae removal</p>
              </Link>
              <Link href="/services/gutter-cleaning" className="group p-6 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">Gutter Cleaning</h3>
                <p className="text-sm text-muted-foreground">Complete gutter maintenance and drainage care</p>
              </Link>
            </div>
          </section>

          <section className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg p-8 border border-accent/30 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Professional Cladding Cleaning in St Helens</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Restore your property's appearance and protect your investment. Our St Helens specialists understand industrial pollution challenges and heritage building requirements.
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
              St Helens specialists | Industrial expertise | Heritage building care | 24/7 available | Free assessment | Professional & insured
            </p>
          </section>

        </div>
      </div>
      </main>
    </Layout>
  );
}
