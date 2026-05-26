'use client';
import { useEffect, Fragment } from 'react';

import Link from 'next/link';
import { ChevronRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

export function GutterLiverpool() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Professional Gutter Cleaning in Liverpool | R.R.M Exterior Cleaning',
      description: 'Expert gutter cleaning, downpipe clearing, and roofline cleaning services in Liverpool. Professional debris removal and maintenance.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '9 Noon Ct, Newton-le-Willows',
        addressLocality: 'Liverpool',
        postalCode: 'WA12 8QY',
        addressCountry: 'GB'
      },
      telephone: '+447845463877',
      areaServed: 'Liverpool',
      serviceType: 'Gutter Cleaning'
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    document.title = 'Gutter Cleaning Liverpool | Professional Roof Gutter Cleaning';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Professional gutter cleaning in Liverpool. Expert downpipe clearing, debris removal, and roofline maintenance. Call: 07845 463877');
    }

    return () => {
      if (script.parentNode) document.head.removeChild(script);
    };
  }, []);

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Gutter Cleaning', url: '/services/gutter-cleaning' },
    { name: 'Liverpool', url: '/services/gutter-cleaning/liverpool' }
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
            Professional Gutter Cleaning in Liverpool
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Expert <strong>gutter cleaning services</strong>, <strong>downpipe clearing</strong>, and <strong>roofline maintenance</strong> across Liverpool. Protect your property from water damage with professional debris removal and maintenance.
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Gutter Cleaning Throughout Liverpool</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Liverpool's historic and modern properties require specialized <strong>gutter maintenance</strong> to combat the region's challenging weather. R.R.M Exterior Cleaning provides professional <strong>gutter cleaning services</strong> throughout Liverpool, from Merseyside waterfront properties to suburban residential areas.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our experience with Liverpool's diverse architecture ensures expert care for Victorian properties, modern homes, and commercial buildings alike.
            </p>
          </section>

          <section className="bg-secondary/30 border border-secondary rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Our Comprehensive Gutter Services</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>Gutter debris removal and cleaning</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>Downpipe clearing and unblocking</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>Roofline, fascia, and soffit cleaning</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>Gutter guard installation</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>Professional inspection and maintenance</span>
              </li>
            </ul>
          </section>

          <section className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg p-8 border border-accent/30 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Professional Gutter Cleaning in Liverpool</h2>
            <p className="text-muted-foreground mb-6">
              Protect your Liverpool property from water damage and structural issues. Our professional gutter cleaning prevents costly repairs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="tel:+447845463877">
                  <Phone className="h-5 w-5 mr-2" />
                  Call: 07845 463877
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Request Assessment</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
      </main>
    </Layout>
  );
}
