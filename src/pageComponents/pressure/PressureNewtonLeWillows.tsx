'use client';
import { useEffect } from 'react';

import Link from 'next/link';
import { ChevronRight, Phone, MapPin, Clock, CheckCircle, AlertCircle, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { Layout } from '@/components/layout/Layout';

export function PressureNewtonLeWillows() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Professional Pressure Washing in Newton-le-Willows | R.R.M Exterior Cleaning',
      description: 'Expert pressure washing services for driveways, patios, decking, and commercial properties in Newton-le-Willows. Professional power washing specialists.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '9 Noon Ct',
        addressLocality: 'Newton-le-Willows',
        postalCode: 'WA12 8QY',
        addressCountry: 'GB'
      },
      telephone: '+447845463877',
      areaServed: 'Newton-le-Willows',
      serviceType: 'Pressure Washing',
      url: 'https://rrmexternalcleaning.co.uk/services/pressure-washing/newton-le-willows'
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    document.title = 'Pressure Washing Newton-le-Willows | Professional Driveway & Patio Cleaning';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Professional pressure washing in Newton-le-Willows. Driveway cleaning, patio cleaning, decking cleaning, and more. Expert jet washing services. Call: 07845 463877');
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
            <li><Link href="/services/pressure-washing" className="text-primary hover:text-accent transition-colors">Pressure Washing</Link></li>
            <li className="text-primary-foreground/50"><ChevronRight className="h-4 w-4" /></li>
            <li className="text-primary-foreground/70" aria-current="page">Newton-le-Willows</li>
          </ol>
        </div>
      </nav>

      {/* Hero Header */}
      <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom section-padding">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional Pressure Washing in Newton-le-Willows
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Expert <strong>pressure washing services</strong> for driveways, patios, decking, and commercial properties throughout Newton-le-Willows. Professional <strong>jet washing</strong> using safe, effective methods to restore your property's appearance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="group">
              <a href="tel:+447845463877" title="Call for free pressure washing quote">
                <Phone className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                Get Free Quote: 07845 463877
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact" title="Request pressure washing assessment">
                Request Assessment
              </Link>
            </Button>
          </div>
        </div>
      </article>

      {/* Main Content */}
      <div className="container-custom section-padding">
        <div className="max-w-4xl">
          
          {/* Service Overview */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Professional Pressure Washing Services in Newton-le-Willows</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Your property's exterior surfaces accumulate dirt, algae, moss, and stubborn stains over time. Newton-le-Willows' damp climate accelerates weathering and biological growth. At R.R.M Exterior Cleaning, we provide professional <strong>pressure washing services</strong> using state-of-the-art equipment and proven techniques to safely restore driveways, patios, decking, and commercial facades to like-new condition.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our <strong>expert jet washing</strong> methods remove years of accumulated grime, oil stains, and organic growth without damaging surfaces—whether concrete, stone, brick, or decking.
            </p>
          </section>

          {/* What We Offer */}
          <section className="mb-12 bg-secondary/30 rounded-lg p-8 border border-secondary">
            <h2 className="text-2xl font-bold text-foreground mb-6">Our Professional Pressure Washing Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Driveway Pressure Washing</h3>
                  <p className="text-muted-foreground text-sm">Deep cleaning of concrete, asphalt, and tarmac driveways to remove oil stains, moss, algae, and dirt buildup.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Patio & Paving Cleaning</h3>
                  <p className="text-muted-foreground text-sm">Professional cleaning of block paving, natural stone, and concrete patios to restore original color and appearance.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Decking & Fencing</h3>
                  <p className="text-muted-foreground text-sm">Gentle yet effective cleaning of wooden decks and fencing to remove moss, algae, and weathering without damage.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Commercial Building Washing</h3>
                  <p className="text-muted-foreground text-sm">Professional facade cleaning for commercial properties, warehouses, and retail establishments.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Pathway & Sidewalk Cleaning</h3>
                  <p className="text-muted-foreground text-sm">Complete removal of dirt, algae, and slippery biofilms from walkways and entrance areas.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Soft Washing Alternative</h3>
                  <p className="text-muted-foreground text-sm">Low-pressure soft washing for delicate surfaces where high-pressure washing could cause damage.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Professional Service */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Why Choose Professional Pressure Washing?</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Restore Curb Appeal & Property Value</h3>
                <p className="text-muted-foreground">Clean, well-maintained exterior surfaces dramatically improve first impressions and property value. Professional <strong>pressure washing</strong> transforms tired-looking properties instantly.</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Protect Your Investment</h3>
                <p className="text-muted-foreground">Moss, algae, and dirt absorb moisture, accelerating surface deterioration. Regular professional <strong>jet washing</strong> prevents costly damage to driveways, patios, and facades.</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Safe & Eco-Friendly Methods</h3>
                <p className="text-muted-foreground">Our professionals use appropriate pressure levels and eco-friendly cleaning solutions. High pressure is effective for concrete but harmful to delicate surfaces—we know the difference.</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Professional Equipment & Expertise</h3>
                <p className="text-muted-foreground">Commercial-grade pressure washing equipment requires expertise to operate safely. Incorrect pressure or technique causes surface damage, flooding, and injury risks.</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Time & Effort Savings</h3>
                <p className="text-muted-foreground">Professional <strong>pressure washing</strong> in Newton-le-Willows is completed efficiently, saving you hours of manual labor and equipment rental costs.</p>
              </div>
            </div>
          </section>

          {/* Risks Section */}
          <section className="mb-12 bg-red-500/5 border border-red-500/20 rounded-lg p-8">
            <div className="flex gap-4 mb-6">
              <AlertCircle className="h-8 w-8 text-red-500 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-foreground">Risks of DIY Pressure Washing</h2>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-red-500 font-bold">•</span>
                <span><strong>Surface Damage:</strong> Excessive pressure gouges concrete, removes brick mortar, strips wood finishes</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold">•</span>
                <span><strong>Water Damage:</strong> Improper technique forces water into walls, foundations, and basements</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold">•</span>
                <span><strong>Personal Injury:</strong> High-pressure water causes serious cuts, eye injuries, and bruising</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold">•</span>
                <span><strong>Equipment Rental Costs:</strong> Professional equipment rental, fuel, and chemical costs add up quickly</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold">•</span>
                <span><strong>Inconsistent Results:</strong> Lack of experience results in missed spots, uneven cleaning, and streaking</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold">•</span>
                <span><strong>Environmental Concerns:</strong> Harsh chemicals and incorrect disposal harm local waterways</span>
              </li>
            </ul>
          </section>

          {/* Prevention & Maintenance */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Prevention & Maintenance Tips</h2>
            <div className="bg-secondary/30 border border-secondary rounded-lg p-6 mb-6">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Regular professional <strong>pressure washing</strong> prevents expensive damage and keeps your Newton-le-Willows property looking pristine. Most homeowners benefit from annual cleaning; high-traffic commercial areas may need 2-3 times yearly.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Between professional cleanings, sweep regularly and address spills immediately. Sealing concrete driveways after cleaning extends cleanliness and protects against staining.
              </p>
              <p className="text-muted-foreground">
                For damp Newton-le-Willows properties with persistent moss and algae, preventative treatments after pressure washing slow regrowth and reduce cleaning frequency.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Pressure Washing FAQs</h2>
            <div className="space-y-4">
              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  What is the difference between pressure washing and soft washing?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4"><strong>Pressure washing</strong> uses high water pressure (3000-4000 PSI) for tough surfaces like concrete driveways. <strong>Soft washing</strong> uses lower pressure (500-1000 PSI) with biodegradable solutions for delicate surfaces like wood, vinyl, and roof tiles. Professional technicians choose the right method for each surface.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  Will pressure washing damage my driveway?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">Professional pressure washing at correct PSI safely cleans concrete, asphalt, and paving. Damage occurs only with excessive pressure or improper technique. Our experienced technicians adjust pressure for each surface type, ensuring effective cleaning without harm.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  How often should I have my driveway pressure washed?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">Most Newton-le-Willows homeowners benefit from annual <strong>pressure washing</strong>. High-traffic commercial properties may need cleaning 2-3 times yearly. Factors include rainfall, tree coverage, and traffic. We recommend annual inspection to determine your specific needs.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  Are your cleaning solutions environmentally safe?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">Yes! We use eco-friendly, biodegradable cleaning solutions wherever possible. Our professional technicians are trained in safe chemical handling and responsible disposal practices that protect local waterways and ecosystems.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  Can you pressure wash in winter?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">We can pressure wash in most weather conditions, though freezing temperatures may create icy surfaces. We avoid washing when temperatures drop below 5°C to prevent dangerous conditions and ensure proper drying.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  Do you offer sealant application after pressure washing?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">Yes! After professional <strong>pressure washing</strong>, we offer protective sealing for concrete and pavers. Sealant prevents staining, repels water, and extends the time between cleanings. Ask about our sealant options during your free quote.</p>
              </details>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg p-8 border border-accent/30 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Professional Pressure Washing in Newton-le-Willows</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Transform your property's exterior. Contact R.R.M Exterior Cleaning for professional pressure washing, driveway cleaning, and jet washing throughout Newton-le-Willows.
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
              Available 24/7 | Free Quote | Professional & Insured | Expert Jet Washing
            </p>
          </section>

          {/* Related Services */}
          <section className="mt-12 pt-12 border-t border-secondary">
            <h2 className="text-2xl font-bold text-foreground mb-6">Related Services in Newton-le-Willows</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/services/gutter-cleaning" className="group p-6 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">Gutter Cleaning</h3>
                <p className="text-sm text-muted-foreground">Professional gutter and downpipe maintenance</p>
              </Link>
              <Link href="/services/roof-cleaning" className="group p-6 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">Roof Cleaning</h3>
                <p className="text-sm text-muted-foreground">Expert moss removal and soft washing</p>
              </Link>
              <Link href="/services/soft-washing" className="group p-6 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">Soft Washing</h3>
                <p className="text-sm text-muted-foreground">Gentle cleaning for delicate surfaces</p>
              </Link>
            </div>
          </section>

          {/* Local Info */}
          <section className="mt-12 pt-12 border-t border-secondary">
            <h2 className="text-2xl font-bold text-foreground mb-4">Expert Pressure Washing Throughout Newton-le-Willows</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Based in Newton-le-Willows, R.R.M Exterior Cleaning serves all residential and commercial properties throughout the area. Whether you need driveway cleaning, commercial building washing, or patio pressure washing, we're your local expert.
            </p>
            <div className="bg-secondary/30 border border-secondary rounded-lg p-6">
              <div className="flex items-start gap-4 mb-4">
                <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Our Location</h3>
                  <p className="text-muted-foreground">9 Noon Ct, Newton-le-Willows, WA12 8QY</p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-4">
                <Phone className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Call Us</h3>
                  <a href="tel:+447845463877" className="text-accent hover:text-primary transition-colors">+44 7845 463877</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Hours</h3>
                  <p className="text-muted-foreground">Available 24/7 for emergency service</p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
      </main>
    </Layout>
  );
}
