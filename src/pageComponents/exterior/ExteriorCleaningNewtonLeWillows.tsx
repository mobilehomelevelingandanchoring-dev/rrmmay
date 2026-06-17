'use client';
import { useEffect, Fragment } from 'react';
import Link from 'next/link';
import { ChevronRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

export function ExteriorCleaningNewtonLeWillows() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Professional Exterior Cleaning Services in Newton-le-Willows | R.R.M Exterior Cleaning Specialist',
      description: 'Expert exterior cleaning in Newton-le-Willows covering pressure washing, roof cleaning, gutter cleaning, soft washing, and all property maintenance services. Local specialists in property protection.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '9 Noon Ct',
        addressLocality: 'Newton-le-Willows',
        postalCode: 'WA12 8QY',
        addressCountry: 'GB'
      },
      telephone: '+447845463877',
      areaServed: 'Newton-le-Willows',
      serviceType: 'Exterior Cleaning Services',
      url: 'https://rrmexternalcleaning.co.uk/services/exterior-cleaning/newton-le-willows'
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    document.title = 'Exterior Cleaning Newton-le-Willows | Professional Property Maintenance Services';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Professional exterior cleaning in Newton-le-Willows. Pressure washing, roof cleaning, gutter cleaning, soft washing. Expert property maintenance. Call: 07845 463877');
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
            <li><Link href="/services/exterior-cleaning" className="text-primary hover:text-accent transition-colors">Exterior Cleaning</Link></li>
            <li className="text-primary-foreground/50"><ChevronRight className="h-4 w-4" /></li>
            <li className="text-primary-foreground/70" aria-current="page">Newton-le-Willows</li>
          </ol>
        </div>
      </nav>

      {/* Hero Header */}
      <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom section-padding">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional Exterior Cleaning Services in Newton-le-Willows
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Complete <strong>exterior cleaning solutions</strong> for Newton-le-Willows homes and businesses. From <strong>pressure washing</strong> and <strong>roof cleaning</strong> to <strong>gutter clearing</strong> and <strong>soft washing</strong>—we protect your property with expert care and proven methods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="group">
              <a href="tel:+447845463877" title="Call for free exterior cleaning assessment">
                <Phone className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                Get Free Assessment: 07845 463877
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact" title="Request professional exterior cleaning quote">
                Request Quote
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Complete Exterior Cleaning Services in Newton-le-Willows</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Your property's exterior faces constant assault from Newton-le-Willows' weather—rain, wind, pollution, and organic growth. Dirt, moss, algae, and stains accumulate silently on roofs, gutters, driveways, patios, and walls. At R.R.M Exterior Cleaning Specialist, we provide comprehensive <strong>exterior cleaning services</strong> using professional-grade equipment and safe, proven methods to restore and protect your entire property.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you need <strong>pressure washing</strong>, <strong>soft washing</strong>, <strong>roof cleaning</strong>, <strong>gutter clearing</strong>, or specialized services like render, brick, or UPVC cleaning—we handle it all with expertise and care.
            </p>
          </section>

          {/* Problems We Solve */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Exterior Problems We Solve</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Moss, Algae & Organic Growth</h3>
                  <p className="text-muted-foreground text-sm">Newton-le-Willows' damp climate creates ideal conditions for moss and algae. Professional cleaning removes this growth safely from roofs, gutters, and paving.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Oil Stains & Grime Buildup</h3>
                  <p className="text-muted-foreground text-sm">Driveways and patios accumulate stubborn oil, fuel, and dirt stains. Professional pressure washing removes years of buildup effectively.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Weather Staining & Discoloration</h3>
                  <p className="text-muted-foreground text-sm">Pollution, acid rain, and weathering cause staining on brick, render, and stone. Expert cleaning restores original appearance.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Clogged Gutters & Downpipes</h3>
                  <p className="text-muted-foreground text-sm">Blocked gutters cause water damage and structural issues. Professional clearing prevents costly damage and maintains drainage.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Slippery Surfaces & Safety Issues</h3>
                  <p className="text-muted-foreground text-sm">Moss and algae create slip hazards on roofs, gutters, and patios. Professional cleaning improves safety and prevents accidents.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Curb Appeal & Property Value Loss</h3>
                  <p className="text-muted-foreground text-sm">Dirty, neglected exteriors signal poor maintenance. Professional cleaning dramatically improves appearance and property value.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Services Offered */}
          <section className="mb-12 bg-secondary/30 rounded-lg p-8 border border-secondary">
            <h2 className="text-2xl font-bold text-foreground mb-6">Our Complete Exterior Cleaning Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Pressure Washing & Jet Washing</h3>
                  <p className="text-muted-foreground text-sm">Professional high-pressure cleaning for driveways, patios, and concrete surfaces. Removes stubborn stains and years of buildup.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Soft Washing & Gentle Cleaning</h3>
                  <p className="text-muted-foreground text-sm">Low-pressure safe cleaning for roofs, gutters, and delicate surfaces using biodegradable solutions.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Roof Cleaning & Moss Removal</h3>
                  <p className="text-muted-foreground text-sm">Expert removal of moss, algae, and debris from tiles, slates, and all roof types. Prevents leaks and water damage.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Gutter Cleaning & Clearance</h3>
                  <p className="text-muted-foreground text-sm">Complete gutter and downpipe clearing to maintain proper water drainage and prevent structural damage.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Driveway & Patio Cleaning</h3>
                  <p className="text-muted-foreground text-sm">Deep cleaning of driveways, patios, and paving to remove oil stains, moss, and weathering marks.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Render, Brick & Stone Cleaning</h3>
                  <p className="text-muted-foreground text-sm">Specialist cleaning for render, brick, and natural stone to restore appearance without damage.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">UPVC, Fascia & Soffit Cleaning</h3>
                  <p className="text-muted-foreground text-sm">Safe cleaning of PVC windows, fascia, and soffit without causing damage or discoloration.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Commercial Exterior Cleaning</h3>
                  <p className="text-muted-foreground text-sm">Professional cleaning for commercial buildings, warehouses, retail, and industrial properties.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Why Choose R.R.M Exterior Cleaning Specialist?</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Local Expertise & Trust</h3>
                <p className="text-muted-foreground">Based in Newton-le-Willows, we understand the local climate, property types, and maintenance challenges. Years of experience in the North West means we know what works.</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Professional Equipment & Proven Methods</h3>
                <p className="text-muted-foreground">Commercial-grade pressure washers, soft washing systems, and safe cleaning chemicals. We choose the right technique for each surface.</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Fully Insured & Safe Practices</h3>
                <p className="text-muted-foreground">Full public liability insurance, proper safety protocols, and expertise handling all property types. Your peace of mind is guaranteed.</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Eco-Friendly & Responsible</h3>
                <p className="text-muted-foreground">Biodegradable cleaning solutions and responsible chemical disposal. We protect your property and the environment.</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Affordable & Transparent Pricing</h3>
                <p className="text-muted-foreground">Free assessments and quotes with no hidden charges. Professional service at fair prices.</p>
              </div>
            </div>
          </section>

          {/* Maintenance Tips */}
          <section className="mb-12 bg-secondary/30 rounded-lg p-8 border border-secondary">
            <h2 className="text-2xl font-bold text-foreground mb-4">Prevention & Maintenance Advice</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Regular professional <strong>exterior cleaning</strong> is the best protection for your Newton-le-Willows property. Most homeowners and businesses benefit from annual cleaning; high-traffic or heavily exposed areas may need more frequent attention.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Between professional cleanings, regular maintenance extends cleanliness and prevents damage. Sweep gutters seasonally, address spills promptly, and inspect for signs of moss or algae growth.
            </p>
            <p className="text-muted-foreground">
              Newton-le-Willows' damp climate accelerates biological growth. Early intervention prevents costly repairs and maintains property value.
            </p>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Exterior Cleaning FAQs</h2>
            <div className="space-y-4">
              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  What's the difference between pressure washing and soft washing?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4"><strong>Pressure washing</strong> uses high water pressure (3000+ PSI) for tough surfaces like concrete. <strong>Soft washing</strong> uses lower pressure (500-1000 PSI) with biodegradable solutions for delicate surfaces. Professional expertise ensures the right method for each surface.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  How often should exterior cleaning be done?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">Most Newton-le-Willows properties benefit from annual <strong>exterior cleaning</strong>. High-traffic areas, commercial properties, or those with heavy tree coverage may need 2-3 times yearly. We recommend professional inspection to determine your specific needs.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  Will exterior cleaning damage my property?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">Professional cleaning never damages your property. Our technicians understand different surface types—concrete, stone, brick, render, wood, UPVC—and apply appropriate methods and pressure. Damage only occurs with inexperienced DIY attempts.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  Are your cleaning solutions environmentally safe?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">Yes. We use eco-friendly, biodegradable solutions throughout our services. Our professional technicians follow responsible chemical disposal practices that protect local waterways and ecosystems.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  Do you offer sealant or protective treatments?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">Yes! After professional cleaning, we offer protective sealants for concrete, stone, and pavers. These treatments extend cleanliness, prevent staining, and repel water. Ask about options during your free assessment.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  Can you clean commercial properties?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">Absolutely! We provide professional <strong>exterior cleaning services</strong> for commercial buildings, retail premises, warehouses, and industrial properties. Commercial cleaning can often be scheduled outside business hours.</p>
              </details>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg p-8 border border-accent/30 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Protect Your Newton-le-Willows Property Today</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Professional exterior cleaning protects your investment, improves curb appeal, and maintains property value. Contact R.R.M Exterior Cleaning Specialist for a free assessment.
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
              Available 24/7 | Free Assessment | Professional & Insured | Local Specialists
            </p>
          </section>

          {/* Related Services */}
          <section className="mt-12 pt-12 border-t border-secondary">
            <h2 className="text-2xl font-bold text-foreground mb-6">Our Complete Service Range in Newton-le-Willows</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <Link href="/services/pressure-washing" className="group p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary text-center">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-1">Pressure Washing</h3>
                <p className="text-xs text-muted-foreground">High-pressure cleaning</p>
              </Link>
              <Link href="/services/soft-washing" className="group p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary text-center">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-1">Soft Washing</h3>
                <p className="text-xs text-muted-foreground">Gentle surface care</p>
              </Link>
              <Link href="/services/roof-cleaning" className="group p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary text-center">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-1">Roof Cleaning</h3>
                <p className="text-xs text-muted-foreground">Moss & algae removal</p>
              </Link>
              <Link href="/services/gutter-cleaning" className="group p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary text-center">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-1">Gutter Cleaning</h3>
                <p className="text-xs text-muted-foreground">Drainage maintenance</p>
              </Link>
            </div>
          </section>

          {/* Local Info */}
          <section className="mt-12 pt-12 border-t border-secondary">
            <h2 className="text-2xl font-bold text-foreground mb-4">Exterior Cleaning Throughout Newton-le-Willows</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Based right here in Newton-le-Willows, R.R.M Exterior Cleaning Specialist serves all residential and commercial properties throughout the area. We understand local weather patterns, property types, and maintenance needs unique to Newton-le-Willows and surrounding areas.
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
