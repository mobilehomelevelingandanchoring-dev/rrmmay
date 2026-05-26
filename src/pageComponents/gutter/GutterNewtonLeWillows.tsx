'use client';
import { useEffect, Fragment } from 'react';

import Link from 'next/link';
import { ChevronRight, Phone, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { Layout } from '@/components/layout/Layout';

export function GutterNewtonLeWillows() {
  useEffect(() => {
    // Add structured data
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Professional Gutter Cleaning in Newton-le-Willows | R.R.M Exterior Cleaning',
      description: 'Expert gutter cleaning, downpipe clearing, and roofline cleaning services in Newton-le-Willows. Professional debris removal and maintenance.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '9 Noon Ct',
        addressLocality: 'Newton-le-Willows',
        postalCode: 'WA12 8QY',
        addressCountry: 'GB'
      },
      telephone: '+447845463877',
      areaServed: 'Newton-le-Willows',
      serviceType: 'Gutter Cleaning',
      url: 'https://www.rrmexternalcleaningspecialist.co.uk/services/gutter-cleaning/newton-le-willows'
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    document.title = 'Gutter Cleaning Newton-le-Willows | Professional Roof Gutter Cleaning';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Professional gutter cleaning in Newton-le-Willows. Expert downpipe clearing, debris removal, and roofline maintenance. Call for free quote: 07845 463877');
    }

    return () => {
      if (script.parentNode) document.head.removeChild(script);
    };
  }, []);

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Gutter Cleaning', url: '/services/gutter-cleaning' },
    { name: 'Newton-le-Willows', url: '/services/gutter-cleaning/newton-le-willows' }
  ];

  return (
    <Layout>
      <main className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <nav className="bg-secondary/50" aria-label="Breadcrumb">
        <div className="container-custom py-4">
          <ol className="flex items-center gap-2 text-sm flex-wrap">
            {breadcrumbs.map((crumb, index) => (
              <Fragment key={crumb.url}>
                {index > 0 && <li className="text-primary-foreground/50"><ChevronRight className="h-4 w-4" /></li>}
                <li>
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-primary-foreground/70" aria-current="page">{crumb.name}</span>
                  ) : (
                    <Link href={crumb.url} className="text-primary hover:text-accent transition-colors">{crumb.name}</Link>
                  )}
                </li>
              </Fragment>
            ))}
          </ol>
        </div>
      </nav>

      {/* Hero Header */}
      <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom section-padding">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional Gutter Cleaning in Newton-le-Willows
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Expert <strong>gutter cleaning services</strong>, <strong>downpipe clearing</strong>, and <strong>roofline maintenance</strong> for homes and businesses across Newton-le-Willows. Protect your property from water damage with professional debris removal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="group">
              <a href="tel:+447845463877" title="Call for free gutter cleaning quote">
                <Phone className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                Get Free Quote: 07845 463877
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact" title="Request professional gutter cleaning assessment">
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Professional Gutter Cleaning Services in Newton-le-Willows</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Your gutters are vital to protecting your home from water damage, yet they're often overlooked until problems develop. At R.R.M Exterior Cleaning, we provide comprehensive <strong>gutter cleaning services</strong> throughout Newton-le-Willows, keeping your <strong>roofline clean</strong> and your property protected.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We combine professional expertise with industry-standard equipment to deliver thorough <strong>gutter maintenance</strong> that prevents costly damage and extends the life of your roof and guttering system.
            </p>
          </section>

          {/* What We Offer */}
          <section className="mb-12 bg-secondary/30 rounded-lg p-8 border border-secondary">
            <h2 className="text-2xl font-bold text-foreground mb-6">Our Gutter Cleaning Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Gutter Debris Removal</h3>
                  <p className="text-muted-foreground text-sm">Complete removal of leaves, twigs, moss, and accumulated debris from gutters and gutter guards.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Downpipe Clearing</h3>
                  <p className="text-muted-foreground text-sm">Professional clearing of blocked downpipes ensuring water flows freely away from your property.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Roofline Cleaning</h3>
                  <p className="text-muted-foreground text-sm">Complete cleaning of roofline, fascia, and soffit using safe, low-pressure techniques.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Gutter Guard Installation</h3>
                  <p className="text-muted-foreground text-sm">Installation of protective gutter guards to reduce future maintenance needs.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Inspection & Assessment</h3>
                  <p className="text-muted-foreground text-sm">Professional inspection to identify damage, wear, or potential issues requiring repair.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Maintenance Programs</h3>
                  <p className="text-muted-foreground text-sm">Regular maintenance plans to keep gutters clear year-round and prevent emergencies.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Professional Service */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Why Choose Professional Gutter Cleaning?</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Prevent Water Damage & Leaks</h3>
                <p className="text-muted-foreground">Clogged gutters cause water to overflow, leading to fascia rot, foundation damage, and expensive interior leaks. Professional cleaning keeps water flowing correctly.</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Protect Your Property's Structural Integrity</h3>
                <p className="text-muted-foreground">Standing water attracts pests and promotes mold growth. Regular <strong>gutter maintenance</strong> prevents structural deterioration that can cost thousands to repair.</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Extend Roof Lifespan</h3>
                <p className="text-muted-foreground">Clean gutters reduce moisture exposure to your roof, extending its lifespan and protecting your biggest asset.</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Safety & Professional Access</h3>
                <p className="text-muted-foreground">Gutter cleaning at height is dangerous. Our professionals have proper equipment, insurance, and expertise to work safely at any height.</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Improve Curb Appeal</h3>
                <p className="text-muted-foreground">Clean gutters and roofline dramatically improve your home's appearance, important for property value and first impressions.</p>
              </div>
            </div>
          </section>

          {/* Risks Section */}
          <section className="mb-12 bg-red-500/5 border border-red-500/20 rounded-lg p-8">
            <div className="flex gap-4 mb-6">
              <AlertCircle className="h-8 w-8 text-red-500 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-foreground">Risks of Neglecting Gutter Cleaning</h2>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-red-500 font-bold">•</span>
                <span><strong>Water Damage:</strong> Overflowing water damages fascias, soffits, and foundation</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold">•</span>
                <span><strong>Mold & Pest Infestation:</strong> Standing water attracts insects and promotes mold growth</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold">•</span>
                <span><strong>Foundation Damage:</strong> Unchecked water can compromise structural foundations</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold">•</span>
                <span><strong>Expensive Repairs:</strong> Water damage repairs can easily exceed £5,000+</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold">•</span>
                <span><strong>Reduced Property Value:</strong> Water damage and mold significantly reduce home value</span>
              </li>
            </ul>
          </section>

          {/* How Often */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">How Often Should Gutters Be Cleaned?</h2>
            <div className="bg-secondary/30 border border-secondary rounded-lg p-6 mb-6">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Most homes benefit from <strong>gutter cleaning twice yearly</strong>—once in spring after winter debris accumulation, and again in autumn after leaves fall.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Properties with large trees nearby may need more frequent cleaning. In Newton-le-Willows' climate, autumn cleaning is particularly important before winter rains.
              </p>
              <p className="text-muted-foreground">
                We recommend professional inspection annually to identify issues early and prevent costly damage.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Gutter Cleaning FAQs</h2>
            <div className="space-y-4">
              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  How long does professional gutter cleaning take?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">Most residential properties take 1-2 hours depending on size, number of stories, and debris accumulation. We provide time estimates during the initial quote.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  Can you clean gutters in the rain?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">Light rain doesn't prevent gutter cleaning, though heavy rain may require rescheduling. We work safely in most conditions using appropriate safety protocols.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  Do you remove debris from my yard?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">Yes! All debris is collected and removed from your property. We leave your gutters clean and your grounds tidy.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  What's the cost of gutter cleaning in Newton-le-Willows?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">Prices vary based on property size, number of stories, and gutter length. We provide free quotes. Call 07845 463877 for an estimate.</p>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  Can you install gutter guards?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">Yes, we install high-quality gutter guards that reduce debris accumulation by 80%, significantly lowering future cleaning frequency and maintenance needs.</p>
              </details>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg p-8 border border-accent/30 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Protect Your Newton-le-Willows Property?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Don't wait for water damage to happen. Contact R.R.M Exterior Cleaning today for professional gutter cleaning, downpipe clearing, and roofline maintenance throughout Newton-le-Willows.
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
              Available 24/7 | Free Quote | Professional & Insured | Same-Day Response
            </p>
          </section>

          {/* Related Services */}
          <section className="mt-12 pt-12 border-t border-secondary">
            <h2 className="text-2xl font-bold text-foreground mb-6">Related Services in Newton-le-Willows</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/services/roof-cleaning" className="group p-6 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">Roof Cleaning</h3>
                <p className="text-sm text-muted-foreground">Professional roof soft washing and moss removal</p>
              </Link>
              <Link href="/services/pressure-washing" className="group p-6 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">Pressure Washing</h3>
                <p className="text-sm text-muted-foreground">Deep cleaning for driveways, patios, and surfaces</p>
              </Link>
              <Link href="/services/window-cleaning" className="group p-6 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">Window Cleaning</h3>
                <p className="text-sm text-muted-foreground">Crystal-clear windows using pure water technology</p>
              </Link>
            </div>
          </section>

          {/* Local Info */}
          <section className="mt-12 pt-12 border-t border-secondary">
            <h2 className="text-2xl font-bold text-foreground mb-4">Gutter Cleaning Throughout Newton-le-Willows</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Based right here in Newton-le-Willows, R.R.M Exterior Cleaning serves all residential and commercial properties throughout the area. Whether you're in the town center, surrounding villages, or rural properties, we're just a quick call away.
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
