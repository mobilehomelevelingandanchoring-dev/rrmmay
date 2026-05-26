'use client';
import { useEffect, Fragment } from 'react';

import Link from 'next/link';
import { ChevronRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { Layout } from '@/components/layout/Layout';

export function GutterWarrington() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Professional Gutter Cleaning in Warrington | R.R.M Exterior Cleaning',
      description: 'Expert gutter cleaning, downpipe clearing, and roofline cleaning services in Warrington. Professional debris removal and maintenance.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '9 Noon Ct, Newton-le-Willows',
        addressLocality: 'Warrington',
        postalCode: 'WA12 8QY',
        addressCountry: 'GB'
      },
      telephone: '+447845463877',
      areaServed: 'Warrington',
      serviceType: 'Gutter Cleaning',
      url: 'https://www.rrmexternalcleaningspecialist.co.uk/services/gutter-cleaning/warrington'
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    document.title = 'Gutter Cleaning Warrington | Professional Roof Gutter Cleaning';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Professional gutter cleaning in Warrington. Expert downpipe clearing, debris removal, and roofline maintenance. Call for free quote: 07845 463877');
    }

    return () => {
      if (script.parentNode) document.head.removeChild(script);
    };
  }, []);

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Gutter Cleaning', url: '/services/gutter-cleaning' },
    { name: 'Warrington', url: '/services/gutter-cleaning/warrington' }
  ];

  return (
    <Layout>
      <main className="min-h-screen bg-background">
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

      <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom section-padding">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional Gutter Cleaning in Warrington
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Expert <strong>gutter cleaning services</strong>, <strong>downpipe clearing</strong>, and <strong>roofline maintenance</strong> for homes and businesses across Warrington. Protect your property from water damage with professional debris removal.
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

      <div className="container-custom section-padding">
        <div className="max-w-4xl">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Professional Gutter Cleaning Services in Warrington</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Warrington's dynamic property market demands attention to home maintenance. At R.R.M Exterior Cleaning, we provide specialist <strong>gutter cleaning services</strong> throughout Warrington, keeping your <strong>roofline clean</strong> and protecting your property investment from water damage.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From Victorian properties in town to modern developments in surrounding areas, our team delivers expert <strong>gutter maintenance</strong> tailored to Warrington's diverse housing stock.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Why Choose Professional Gutter Cleaning?</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Protect Your Property Value</h3>
                <p className="text-muted-foreground">Water damage significantly reduces property value. Regular <strong>gutter cleaning</strong> prevents costly damage and maintains your investment.</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Professional Safety Standards</h3>
                <p className="text-muted-foreground">Our team works safely at height with proper equipment and insurance, eliminating the risks of DIY gutter cleaning.</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Tailored Service for Warrington</h3>
                <p className="text-muted-foreground">We understand Warrington's climate and local property types, providing service suited to your specific needs.</p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg p-8 border border-accent/30 text-center mt-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Get Professional Gutter Cleaning in Warrington Today</h2>
            <p className="text-muted-foreground mb-6">
              Don't let gutter problems damage your Warrington property. Contact us for professional service.
            </p>
            <Button size="lg" asChild>
              <a href="tel:+447845463877">
                <Phone className="h-5 w-5 mr-2" />
                Call Now: 07845 463877
              </a>
            </Button>
          </section>
        </div>
      </div>
      </main>
    </Layout>
  );
}
