'use client';
import { useEffect, Fragment } from 'react';

import Link from 'next/link';
import { ChevronRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

export function GutterManchester() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Professional Gutter Cleaning in Manchester | R.R.M Exterior Cleaning',
      description: 'Expert gutter cleaning and roofline maintenance services in Manchester. Professional downpipe clearing and debris removal.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '9 Noon Ct, Newton-le-Willows',
        addressLocality: 'Manchester',
        postalCode: 'WA12 8QY',
        addressCountry: 'GB'
      },
      telephone: '+447845463877',
      areaServed: 'Manchester',
      serviceType: 'Gutter Cleaning'
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    document.title = 'Gutter Cleaning Manchester | Professional Roof Gutter Services';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Professional gutter cleaning in Manchester. Expert downpipe clearing, roofline maintenance, and debris removal. Call: 07845 463877');
    }

    return () => {
      if (script.parentNode) document.head.removeChild(script);
    };
  }, []);

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Gutter Cleaning', url: '/services/gutter-cleaning' },
    { name: 'Manchester', url: '/services/gutter-cleaning/manchester' }
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
            Professional Gutter Cleaning in Manchester
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Expert <strong>gutter cleaning services</strong>, <strong>downpipe clearing</strong>, and <strong>roofline maintenance</strong> across Greater Manchester. Professional debris removal for residential and commercial properties.
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Gutter Cleaning Services Across Manchester</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Manchester's rapid growth and diverse property portfolio demand expert <strong>gutter maintenance</strong>. From historic Victorian properties to modern developments, R.R.M Exterior Cleaning provides professional <strong>gutter cleaning services</strong> throughout Manchester and surrounding areas.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team handles the unique challenges of Manchester's urban properties, from tight access areas to multi-story residential buildings, ensuring every property receives expert care.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Why Gutter Cleaning Matters</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                In Manchester's climate with frequent rainfall, proper gutter function is essential for property protection. Blocked gutters lead to water damage costing thousands in repairs.
              </p>
              <p className="text-muted-foreground">
                Professional <strong>gutter cleaning</strong> prevents water overflow, protects your foundation, prevents mold growth, and extends your roof's lifespan.
              </p>
            </div>
          </section>

          <section className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg p-8 border border-accent/30 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Professional Gutter Cleaning in Manchester</h2>
            <p className="text-muted-foreground mb-6">
              Protect your Manchester property with professional gutter cleaning and maintenance. Available throughout the city.
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
