'use client';
import { useEffect } from 'react';

import Link from 'next/link';
import { ChevronRight, Phone, AlertCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

export function RenderCleaning() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Professional Render Cleaning Services | R.R.M Exterior Cleaning Specialist',
      description: 'Expert render cleaning and soft washing services across the North West UK. Safe algae and dirt removal for rendered facades. Local specialists in property maintenance.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '9 Noon Ct',
        addressLocality: 'Newton-le-Willows',
        postalCode: 'WA12 8QY',
        addressCountry: 'GB'
      },
      telephone: '+447845463877',
      areaServed: ['Newton-le-Willows', 'St Helens', 'Warrington', 'Widnes', 'Liverpool', 'Manchester', 'Lymm', 'Golborne', 'Huyton', 'Wigan', 'Skelmersdale'],
      serviceType: 'Render Cleaning',
      url: 'https://rrmexternalcleaning.co.uk/services/render-cleaning'
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    document.title = 'Professional Render Cleaning North West | Algae & Dirt Removal Specialist';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Expert render cleaning and soft washing across North West UK. Safe algae removal, stain treatment, and facade restoration. Local specialists. Call: 07845 463877');
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
            <li className="text-primary-foreground/70" aria-current="page">Render Cleaning</li>
          </ol>
        </div>
      </nav>

      {/* Hero Header */}
      <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom section-padding">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional Render Cleaning & Soft Washing Services Across the North West
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Expert <strong>render cleaning specialists</strong> serving Newton-le-Willows, St Helens, and all North West areas. We safely remove algae, dirt, and weathering stains from rendered facades using soft washing techniques that protect your property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="group">
              <a href="tel:+447845463877" title="Call for free render cleaning assessment">
                <Phone className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                Get Free Assessment: 07845 463877
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact" title="Request professional render cleaning quote">
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
              Rendered facades are beautiful and protective, but they're vulnerable to North West weather. Rain, damp conditions, and poor drainage create perfect environments for algae, moss, and stubborn stains. Over time, these biological growths make your home look neglected and can cause underlying damage if left untreated.
            </p>
          </section>

          {/* What is Render Cleaning */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">What Is Render Cleaning?</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Render cleaning is the professional removal of algae, moss, dirt, and discoloration from rendered brick, stone, or cement facades. Unlike pressure washing, which can damage render surfaces, professional <strong>render cleaning uses soft washing</strong>—a technique combining low-pressure water with specially formulated, biodegradable solutions that eliminate organic growth safely.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Rendered finishes require gentler care than concrete. The specialized approach we use respects render's integrity while delivering exceptional results. The cleaning solution targets the biological organisms causing discoloration, removing them at their source rather than just blasting away the visible layer.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This method is particularly important in the North West, where our damp climate accelerates growth and weather constantly challenges exterior surfaces. Professional render cleaning not only restores appearance but also extends your property's lifespan.
            </p>
          </section>

          {/* Common Problems */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Common Render Problems in North West Properties</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Algae & Green Growth</h3>
                  <p className="text-muted-foreground text-sm">Damp North West climate promotes rapid algae spread. Green or black stains indicate active biological growth that worsens over time.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Moss Colonization</h3>
                  <p className="text-muted-foreground text-sm">Moss thrives on render, particularly lower sections and shaded areas. It retains moisture, accelerating render degradation.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Weather Staining & Discoloration</h3>
                  <p className="text-muted-foreground text-sm">Pollution, acid rain, and mineral deposits create dark streaks and uneven staining on render surfaces.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Water Damage & Rising Damp</h3>
                  <p className="text-muted-foreground text-sm">Clogged gutters and poor drainage force water into render, causing dampness, salt staining, and structural issues.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Biological Colonization</h3>
                  <p className="text-muted-foreground text-sm">Lichens and slow-growing organisms create crusty, permanent-looking marks that damage aesthetic appeal.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Render Erosion & Deterioration</h3>
                  <p className="text-muted-foreground text-sm">Untreated biological growth and water penetration weaken render, leading to cracks, patches, and expensive repairs.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Professional Cleaning Matters */}
          <section className="mb-12 bg-secondary/30 rounded-lg p-8 border border-secondary">
            <h2 className="text-2xl font-bold text-foreground mb-6">Why Professional Render Cleaning Matters</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Prevents Structural Damage</h3>
                <p className="text-muted-foreground">Biological growth and moisture penetration compromise render integrity. Professional cleaning removes the threat before damage spreads, saving thousands in repairs.</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Protects Against Water Ingress</h3>
                <p className="text-muted-foreground">Clean render repels water effectively. Regular professional cleaning prevents damp, rising moisture, and the expensive structural problems they cause.</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Extends Render Lifespan</h3>
                <p className="text-muted-foreground">Well-maintained render lasts decades. Professional cleaning and maintenance prevent premature deterioration and costly re-rendering projects.</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Restores Property Appeal & Value</h3>
                <p className="text-muted-foreground">Clean render dramatically improves curb appeal. Properties with well-maintained facades are more attractive to buyers, renters, and visitors.</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Improves Health & Safety</h3>
                <p className="text-muted-foreground">Biological growth harbors allergens and spores. Clean render creates healthier surroundings for occupants and prevents slip hazards from algae.</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Safe Removal Without Damage</h3>
                <p className="text-muted-foreground">DIY pressure washing damages render permanently. Professional soft washing removes growth safely, respecting your property's finish and materials.</p>
              </div>
            </div>
          </section>

          {/* Our Process */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Our Render Cleaning Process</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">1. Professional Assessment</h3>
                  <p className="text-muted-foreground">We inspect your render, identify the type of growth, check for damage, and assess water flow patterns. This guides our approach and ensures we use appropriate methods.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">2. Site Preparation</h3>
                  <p className="text-muted-foreground">We protect landscaping, windows, and sensitive areas. Proper preparation prevents collateral damage and ensures our cleaning solution works effectively.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">3. Soft Wash Application</h3>
                  <p className="text-muted-foreground">We apply specialized, biodegradable cleaning solutions at low pressure. These target algae, moss, and biological organisms at their source, eliminating them safely.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">4. Gentle Rinsing</h3>
                  <p className="text-muted-foreground">Low-pressure rinse removes the cleaning solution and loosened growth. This gentle approach preserves render integrity while delivering outstanding results.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">5. Final Inspection & Advice</h3>
                  <p className="text-muted-foreground">We inspect the cleaned render, discuss maintenance recommendations, and identify any underlying damage requiring professional attention.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Areas We Cover */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Areas We Cover</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              R.R.M Exterior Cleaning Specialist provides professional render cleaning and soft washing services throughout the North West. Based in Newton-le-Willows, we serve residential and commercial properties across:
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
              Local expertise and understanding of North West climate challenges mean we know exactly how to maintain rendered properties in our region.
            </p>
          </section>

          {/* Video Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">See Professional Render Cleaning in Action</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Watch this video demonstrating professional soft washing and rendering techniques. You'll see how expert methods safely restore rendered facades, removing years of algae, moss, and weathering without damaging the surface. This is the professional expertise R.R.M Exterior Cleaning brings to every project.
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
                  title="Professional Render Cleaning & Soft Washing Techniques"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Professional soft washing delivers results without compromising your property's integrity. Expert technique, specialized equipment, and proven methods make the difference.
            </p>
          </section>

          {/* Internal Links */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Our Complete Exterior Cleaning Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Render cleaning is part of comprehensive exterior maintenance. We provide complementary services that work together to protect your entire property:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/services/pressure-washing" className="group p-6 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">Pressure Washing</h3>
                <p className="text-sm text-muted-foreground">High-pressure cleaning for driveways, patios, and hard surfaces that need deeper grime removal</p>
              </Link>
              <Link href="/services/roof-cleaning" className="group p-6 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">Roof Cleaning</h3>
                <p className="text-sm text-muted-foreground">Professional moss and algae removal from tiles and slates to prevent leaks and water damage</p>
              </Link>
              <Link href="/services/gutter-cleaning" className="group p-6 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">Gutter Cleaning</h3>
                <p className="text-sm text-muted-foreground">Complete gutter and downpipe clearing to ensure proper water drainage and prevent structural damage</p>
              </Link>
              <Link href="/services/soft-washing" className="group p-6 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">Soft Washing</h3>
                <p className="text-sm text-muted-foreground">Low-pressure cleaning with biodegradable solutions for delicate surfaces throughout your property</p>
              </Link>
              <Link href="/services/exterior-cleaning" className="group p-6 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary md:col-span-2">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">Complete Exterior Cleaning Services</h3>
                <p className="text-sm text-muted-foreground">Comprehensive property maintenance covering all exterior surfaces and specialized cleaning needs</p>
              </Link>
            </div>
          </section>

          {/* EEAT Section */}
          <section className="mb-12 bg-accent/5 rounded-lg p-8 border border-accent/20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Why R.R.M Exterior Cleaning Specialist?</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Experience & Expertise</h3>
                <p className="text-muted-foreground">Years of professional render cleaning and soft washing experience. We understand every surface type, regional climate challenges, and the most effective safe cleaning methods.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Local Knowledge</h3>
                <p className="text-muted-foreground">Based in the North West, we understand the specific challenges render faces in our damp climate. Our local expertise means smarter solutions and better long-term outcomes for your property.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Professional Standards</h3>
                <p className="text-muted-foreground">Fully insured, trained professionals using commercial-grade equipment and eco-friendly solutions. We maintain safety protocols and follow best practices on every project.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Trusted by the Community</h3>
                <p className="text-muted-foreground">Homeowners and businesses across Newton-le-Willows, St Helens, Warrington, and beyond trust R.R.M Exterior Cleaning. Our reputation is built on reliable, professional service and outstanding results.</p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Render Cleaning FAQs</h2>
            <div className="space-y-4">
              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  Will soft washing damage my render?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">No. Professional soft washing is specifically designed to clean render safely. Low pressure combined with biodegradable solutions removes growth without harming the render surface. Pressure washing, by contrast, can cause permanent damage.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  How often should render be professionally cleaned?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">Most North West properties benefit from professional render cleaning every 2-3 years. Properties with heavy tree coverage, poor drainage, or extreme exposure may need more frequent attention. We recommend professional inspection to assess your specific needs.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  Can I pressure wash my render myself?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">We strongly advise against DIY pressure washing render. Excessive pressure gouges the surface, forces water into the structure, and can cause permanent damage requiring expensive repairs. Professional soft washing is the safe, effective approach.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  Are the cleaning solutions environmentally safe?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">Yes. We use biodegradable, eco-friendly cleaning solutions that break down naturally and don't harm local waterways or ecosystems. Environmental responsibility is core to our professional practice.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  What if my render has cracks or damage?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">Professional render cleaning can reveal underlying damage. We'll identify issues during our assessment and recommend specialized repairs if needed. Early detection prevents expensive structural problems.</p>
              </details>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg p-8 border border-accent/30 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Professional Render Cleaning for Your North West Property</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Restore your render's appearance and protect your property's value. Contact R.R.M Exterior Cleaning Specialist for professional soft washing and render maintenance.
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
