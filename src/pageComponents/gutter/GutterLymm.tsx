'use client';
import { useEffect, Fragment } from 'react';

import Link from 'next/link';
import { ChevronRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { Layout } from '@/components/layout/Layout';

export function GutterLymm() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Gutter Cleaning in Lymm | R.R.M Exterior Cleaning',
      description: 'Professional gutter cleaning and roofline maintenance in Lymm.',
      address: { '@type': 'PostalAddress', addressLocality: 'Lymm', addressCountry: 'GB' },
      telephone: '+447845463877',
      areaServed: 'Lymm',
      serviceType: 'Gutter Cleaning'
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);
    document.title = 'Gutter Cleaning Lymm | Professional Roof Gutter Services';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Professional gutter cleaning in Lymm. Expert downpipe clearing and maintenance. Call: 07845 463877');
    return () => { if (script.parentNode) document.head.removeChild(script); };
  }, []);

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Gutter Cleaning', url: '/services/gutter-cleaning' },
    { name: 'Lymm', url: '/services/gutter-cleaning/lymm' }
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
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Professional Gutter Cleaning in Lymm</h1>
          <p className="text-xl text-muted-foreground mb-6">Expert gutter cleaning and roofline maintenance for properties across Lymm.</p>
          <Button size="lg" asChild><a href="tel:+447845463877"><Phone className="h-5 w-5 mr-2" />Get Free Quote</a></Button>
        </div>
      </article>
      <div className="container-custom section-padding">
        <div className="max-w-4xl">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Gutter Cleaning in Lymm</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">Professional gutter cleaning services protecting Lymm properties from water damage and deterioration.</p>
          </section>
          <section className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg p-8 border border-accent/30 text-center">
            <Button size="lg" asChild><a href="tel:+447845463877"><Phone className="h-5 w-5 mr-2" />Call: 07845 463877</a></Button>
          </section>
        </div>
      </div>
      </main>
    </Layout>
  );
}
