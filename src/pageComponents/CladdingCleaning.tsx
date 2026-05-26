'use client';
import { useEffect } from 'react';

import Link from 'next/link';
import { ChevronRight, Phone, AlertCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

export function CladdingCleaning() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Professional Cladding Cleaning Services | R.R.M Exterior Cleaning Specialist',
      description: 'Expert cladding cleaning and maintenance for UPVC, metal, aluminium, and composite cladding across North West UK. Safe soft washing removes algae, mold, and pollution staining.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '9 Noon Ct',
        addressLocality: 'Newton-le-Willows',
        postalCode: 'WA12 8QY',
        addressCountry: 'GB'
      },
      telephone: '+447845463877',
      areaServed: ['Newton-le-Willows', 'St Helens', 'Warrington', 'Widnes', 'Liverpool', 'Manchester', 'Lymm', 'Golborne', 'Huyton', 'Wigan', 'Skelmersdale'],
      serviceType: 'Cladding Cleaning',
      url: 'https://rrmexternalcleaning.co.uk/services/cladding-cleaning'
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    document.title = 'Professional Cladding Cleaning North West | UPVC & Metal Cladding Specialists';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Expert cladding cleaning for UPVC, metal, aluminium & composite. Safe soft washing removes algae, mold, pollution stains across North West. Call 07845 463877');
    }

    return () => {
      if (script.parentNode) document.head.removeChild(script);
    };
  }, []);

  return (
    <Layout>
      <main className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <nav className="bg-secondary/50" aria-label="Breadcrumb">
        <div className="container-custom py-4">
          <ol className="flex items-center gap-2 text-sm flex-wrap">
            <li><Link href="/" className="text-primary hover:text-accent transition-colors">Home</Link></li>
            <li className="text-primary-foreground/50"><ChevronRight className="h-4 w-4" /></li>
            <li className="text-primary-foreground/70" aria-current="page">Cladding Cleaning</li>
          </ol>
        </div>
      </nav>

      {/* Hero Header */}
      <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom section-padding">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional Cladding Cleaning Across the North West
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Expert <strong>cladding cleaning specialists</strong> serving Newton-le-Willows, St Helens, and all North West areas. We safely clean UPVC, metal, aluminium, and composite cladding using soft washing techniques that protect your building's appearance and longevity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="group">
              <a href="tel:+447845463877" title="Call for free cladding cleaning assessment">
                <Phone className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                Get Free Assessment: 07845 463877
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact" title="Request professional cladding cleaning quote">
                Request Quote
              </Link>
            </Button>
          </div>
        </div>
      </article>

      {/* Main Content */}
      <div className="container-custom section-padding">
        <div className="max-w-4xl">
          
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Modern buildings across the North West rely on cladding for protection and aesthetic appeal. UPVC, metal, aluminium, and composite cladding withstand weather extremes, but the region's damp climate and industrial pollution accelerate biological growth and staining. Over time, dirty cladding looks neglected and compromises the building's protective qualities. Professional cladding cleaning restores appearance, maintains property value, and extends your cladding's working lifespan.
            </p>
          </section>

          {/* What is Cladding Cleaning */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">What Is Cladding Cleaning?</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Cladding cleaning is the professional removal of algae, mold, lichen, pollution stains, and environmental contaminants from building facades. Unlike pressure washing, which can damage cladding materials, professional soft washing uses low-pressure water combined with biodegradable cleaning solutions that safely eliminate biological growth and restore the cladding's original appearance.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Different cladding materials require specialized approaches. UPVC responds well to soft washing that removes algae without surface damage. Metal and aluminium cladding need careful treatment to prevent corrosion and discoloration. Composite materials require expertise to ensure the cleaning solution doesn't compromise the material's integrity. Professional cladding cleaners understand these nuances and apply the right technique to your specific building.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The North West's damp climate accelerates cladding deterioration. Regular professional cleaning prevents biological growth from establishing itself, removes pollution stains before they become permanent, and maintains your building's protective and aesthetic qualities for decades to come.
            </p>
          </section>

          {/* Types of Cladding We Clean */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Types of Cladding We Clean</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">UPVC Cladding</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Popular for residential and commercial buildings. UPVC cladding accumulates algae in North West damp conditions. Soft washing safely removes growth without scratching or fading the white finish. Professional cleaning maintains UPVC's protective qualities and aesthetic appearance.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Metal Cladding</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Steel and copper metal cladding requires specialized treatment. Aggressive cleaning causes corrosion and discoloration. Our soft washing approach removes pollution and biological growth without compromising the metal's protective coating or finish.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Aluminium Cladding</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Aluminium cladding is durable but vulnerable to pollution staining and oxidation in damp climates. Professional soft washing removes stains and biological growth while protecting the anodized finish. Regular cleaning extends lifespan and maintains appearance.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Composite Cladding</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Fiber-cement and engineered composite cladding demands expertise. These materials are sensitive to high-pressure cleaning. Our biodegradable soft washing solutions safely remove algae, mold, and staining without surface damage or material degradation.
                </p>
              </div>
            </div>
          </section>

          {/* Common Cladding Issues */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Common Cladding Issues in the North West</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Algae & Green Growth</h3>
                  <p className="text-muted-foreground">North West damp climate accelerates algae colonization on cladding. Green or black stains indicate active biological growth that worsens without treatment.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Mold & Fungal Growth</h3>
                  <p className="text-muted-foreground">Moisture and poor ventilation create perfect conditions for mold development. Growth weakens cladding and creates health and safety concerns.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Pollution & Industrial Staining</h3>
                  <p className="text-muted-foreground">Industrial heritage regions and urban pollution create stubborn stains on cladding. These marks compromise building appearance and require professional treatment.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Weather Staining & Mineral Deposits</h3>
                  <p className="text-muted-foreground">Acid rain and mineral-rich water create permanent-looking stains. Rain streaks and water marks accumulate over time without regular maintenance.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Lichen & Slow-Growing Organisms</h3>
                  <p className="text-muted-foreground">Lichen and slow-growing organisms create crusty, difficult-to-remove marks that compromise cladding aesthetics and longevity.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Professional Cladding Cleaning Matters */}
          <section className="mb-12 bg-secondary/30 rounded-lg p-8 border border-secondary">
            <h2 className="text-2xl font-bold text-foreground mb-6">Why Professional Cladding Cleaning Matters</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Protects Material Integrity</h3>
                <p className="text-muted-foreground">Biological growth weakens cladding by trapping moisture and accelerating material degradation. Professional soft washing removes the threat before damage occurs.</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Maintains Property Value</h3>
                <p className="text-muted-foreground">Clean cladding dramatically improves building appearance and first impressions. Properties with well-maintained facades are more attractive to tenants, buyers, and investors.</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Extends Cladding Lifespan</h3>
                <p className="text-muted-foreground">Regular professional cleaning prevents premature deterioration and extends your cladding's working life significantly, delaying expensive replacement projects.</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Ensures Health & Safety</h3>
                <p className="text-muted-foreground">Mold and biological growth harbor allergens and pathogens. Professional cleaning creates healthier indoor and outdoor environments for occupants.</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Safe & Damage-Free Cleaning</h3>
                <p className="text-muted-foreground">Professional soft washing eliminates damage risks associated with pressure washing. We use appropriate techniques for each cladding type, protecting your investment.</p>
              </div>
            </div>
          </section>

          {/* Our Process */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Our Professional Cladding Cleaning Process</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">1. Expert Assessment</h3>
                  <p className="text-muted-foreground">We inspect your cladding, identify material type, assess growth severity, and check for damage. This information guides our approach and ensures we use appropriate methods.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">2. Site Protection & Preparation</h3>
                  <p className="text-muted-foreground">We protect landscaping, windows, electrical installations, and sensitive areas. Proper preparation prevents collateral damage and ensures safety.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">3. Soft Wash Application</h3>
                  <p className="text-muted-foreground">We apply specialized, biodegradable cleaning solutions at low pressure appropriate to your specific cladding type. These target algae, mold, and biological organisms at their source.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">4. Gentle Rinsing & Finishing</h3>
                  <p className="text-muted-foreground">Low-pressure rinsing removes cleaning solution and loosened growth without stressing cladding materials. We ensure complete removal of all contaminants.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">5. Inspection & Maintenance Advice</h3>
                  <p className="text-muted-foreground">Final inspection confirms outstanding results. We discuss maintenance recommendations and identify any underlying damage requiring specialist attention.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Areas We Cover */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Areas We Cover</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              R.R.M Exterior Cleaning Specialist provides professional cladding cleaning services throughout the North West. Based in Newton-le-Willows, we serve residential and commercial properties across:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Newton-le-Willows & Surrounding Villages</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">St Helens</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Warrington</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Widnes</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Liverpool</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Manchester & Greater Manchester</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Lymm</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Golborne</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Huyton</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Wigan</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Skelmersdale</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">All surrounding North West areas</span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-6">
              Local expertise and understanding of North West climate challenges mean we know exactly how to maintain cladding in our region's unique conditions.
            </p>
          </section>

          {/* Video Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">See Professional Cladding Cleaning in Action</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Watch this video demonstrating professional cladding cleaning and soft washing techniques. You'll see how expert methods safely remove years of algae, mold, and pollution without damaging the cladding surface. This is the professional expertise R.R.M Exterior Cleaning brings to every commercial and residential project.
            </p>
            <div className="relative w-full bg-secondary rounded-lg overflow-hidden border border-secondary mb-6">
              <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }}>
                <iframe
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none'
                  }}
                  src="https://www.youtube.com/embed/bsUy8g__i6g"
                  title="Professional Cladding Cleaning & Soft Washing Techniques"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Professional soft washing delivers outstanding results while protecting your cladding's integrity. Expert technique, specialized equipment, and proven methods make the difference between temporary cleaning and lasting protection.
            </p>
          </section>

          {/* Internal Links */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Our Complete Exterior Cleaning Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Cladding cleaning is part of comprehensive building maintenance. We provide complementary services that work together to protect your entire property:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/services/pressure-washing" className="group p-6 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">Pressure Washing</h3>
                <p className="text-sm text-muted-foreground">High-pressure cleaning for driveways, patios, and hard surfaces requiring aggressive grime removal</p>
              </Link>
              <Link href="/services/render-cleaning" className="group p-6 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">Render Cleaning</h3>
                <p className="text-sm text-muted-foreground">Professional soft washing for rendered facades, removing algae, moss, and weather staining safely</p>
              </Link>
              <Link href="/services/roof-cleaning" className="group p-6 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">Roof Cleaning</h3>
                <p className="text-sm text-muted-foreground">Professional moss and algae removal from tiles and slates to prevent leaks and water damage</p>
              </Link>
              <Link href="/services/gutter-cleaning" className="group p-6 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">Gutter Cleaning</h3>
                <p className="text-sm text-muted-foreground">Complete gutter and downpipe clearing to ensure proper water drainage and prevent structural damage</p>
              </Link>
              <Link href="/services/exterior-cleaning" className="group p-6 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary md:col-span-2">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">Complete Exterior Cleaning Services</h3>
                <p className="text-sm text-muted-foreground">Comprehensive building maintenance covering all exterior surfaces and specialized cleaning needs</p>
              </Link>
            </div>
          </section>

          {/* EEAT Section */}
          <section className="mb-12 bg-accent/5 rounded-lg p-8 border border-accent/20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Why R.R.M Exterior Cleaning Specialist?</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Experience & Expertise</h3>
                <p className="text-muted-foreground">Years of professional cladding cleaning and building maintenance experience. We understand every cladding material type, regional climate challenges, and the most effective safe cleaning methods.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Material-Specific Knowledge</h3>
                <p className="text-muted-foreground">Expertise with UPVC, metal, aluminium, and composite cladding systems. We know how each material responds to different treatments and apply the right approach for your specific building.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Local Authority & North West Understanding</h3>
                <p className="text-muted-foreground">Based in Newton-le-Willows, we understand the specific challenges cladding faces in our damp climate. Local expertise means smarter solutions and better long-term outcomes for your property.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Professional Standards & Safety</h3>
                <p className="text-muted-foreground">Fully insured, trained professionals using commercial-grade equipment and eco-friendly solutions. We maintain safety protocols and follow best practices on every project, no matter the size or complexity.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Trusted by Commercial & Residential Clients</h3>
                <p className="text-muted-foreground">Businesses and homeowners across Newton-le-Willows, St Helens, Warrington, and beyond trust R.R.M Exterior Cleaning. Our reputation is built on reliable, professional service and outstanding results.</p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Cladding Cleaning FAQs</h2>
            <div className="space-y-4">
              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  Will soft washing damage my cladding?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">No. Professional soft washing is specifically designed to clean cladding safely. Low pressure combined with biodegradable solutions removes growth without harming the surface. Pressure washing, by contrast, can cause permanent damage, especially to UPVC and composite materials.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  How often should commercial and residential cladding be cleaned?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">Most North West properties benefit from professional cladding cleaning every 2-3 years. Properties with heavy tree coverage, poor ventilation, or extreme exposure may need more frequent attention. Professional assessment determines your property's specific maintenance schedule.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  What's the difference between soft washing and pressure washing cladding?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">Soft washing uses low pressure with specialized solutions to target biological growth at source. Pressure washing uses high force that gouges cladding, forces water into cavities, and causes permanent damage. For virtually all cladding types, soft washing is the professional, safe choice.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  Are the cleaning solutions environmentally safe?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">Yes. We use biodegradable, eco-friendly cleaning solutions that break down naturally and don't harm local waterways or ecosystems. Environmental responsibility is core to our professional practice and commitment to North West communities.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  What if my cladding has gaps or joint issues?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">Professional cladding cleaning can reveal gaps, damaged joints, or underlying issues. We identify these during assessment and recommend specialist repair if needed. Early detection prevents water infiltration and expensive structural problems down the line.</p>
              </details>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg p-8 border border-accent/30 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Professional Cladding Cleaning for Your North West Property</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Restore your building's appearance and protect your investment. Contact R.R.M Exterior Cleaning Specialist for professional cladding maintenance across the North West.
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
              Serving Newton-le-Willows, St Helens, Warrington, Liverpool, Manchester and all North West areas. Available 24/7 | Free Assessment | Professional & Insured
            </p>
          </section>

        </div>
      </div>
      </main>
    </Layout>
  );
}
