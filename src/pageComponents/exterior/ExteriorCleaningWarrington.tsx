'use client';
import { useEffect, Fragment } from 'react';
import Link from 'next/link';
import { ChevronRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

export function ExteriorCleaningWarrington() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Professional Exterior Cleaning Services in Warrington | R.R.M Exterior Cleaning Specialist',
      description: 'Complete exterior cleaning services in Warrington. Pressure washing, roof cleaning, gutter clearing, soft washing, and all property maintenance.',
      address: { '@type': 'PostalAddress', addressLocality: 'Warrington', addressCountry: 'GB' },
      telephone: '+447845463877',
      areaServed: 'Warrington'
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);
    document.title = 'Exterior Cleaning Warrington | Professional Property Maintenance Services';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Professional exterior cleaning in Warrington. Pressure washing, roof cleaning, gutter clearing, soft washing. Free quote: 07845 463877');
    return () => { if (script.parentNode) document.head.removeChild(script); };
  }, []);

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Exterior Cleaning', url: '/services/exterior-cleaning' },
    { name: 'Warrington', url: '/services/exterior-cleaning/warrington' }
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
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Professional Exterior Cleaning Services in Warrington</h1>
          <p className="text-xl text-muted-foreground mb-6">Complete exterior cleaning solutions for Warrington properties. Pressure washing, soft washing, driveway, roof, and gutter cleaning services.</p>
          <Button size="lg" asChild><a href="tel:+447845463877"><Phone className="h-5 w-5 mr-2" />Get Free Quote</a></Button>
        </div>
      </article>
      <div className="container-custom section-padding">
        <div className="max-w-4xl">
          <section className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg p-8 border border-accent/30 text-center">
            <p className="font-bold text-foreground mb-4">Professional exterior cleaning serving Warrington and surrounding areas</p>
            <Button size="lg" asChild><a href="tel:+447845463877"><Phone className="h-5 w-5 mr-2" />Call: 07845 463877</a></Button>
          </section>
        </div>
      </div>
      </main>
    </Layout>
  );
}
