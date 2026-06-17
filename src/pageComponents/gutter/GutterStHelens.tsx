'use client';
import { useEffect, Fragment } from 'react';

import Link from 'next/link';
import { ChevronRight, Phone, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { Layout } from '@/components/layout/Layout';

export function GutterStHelens() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Professional Gutter Cleaning in St Helens | R.R.M Exterior Cleaning',
      description: 'Expert gutter cleaning, downpipe clearing, and roofline cleaning services in St Helens. Professional debris removal and maintenance.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '9 Noon Ct, Newton-le-Willows',
        addressLocality: 'St Helens',
        postalCode: 'WA12 8QY',
        addressCountry: 'GB'
      },
      telephone: '+447845463877',
      areaServed: 'St Helens',
      serviceType: 'Gutter Cleaning',
      url: 'https://www.rrmexternalcleaningspecialist.co.uk/services/gutter-cleaning/st-helens'
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    document.title = 'Gutter Cleaning St Helens | Professional Service | R.R.M';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Expert gutter cleaning in St Helens. Prevent water damage with professional debris removal, downpipe clearing & roofline maintenance. Call: 07845 463877');
    }

    return () => {
      if (script.parentNode) document.head.removeChild(script);
    };
  }, []);

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Gutter Cleaning', url: '/services/gutter-cleaning' },
    { name: 'St Helens', url: '/services/gutter-cleaning/st-helens' }
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
            Professional Gutter Cleaning Services in St Helens
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Trusted <strong>gutter cleaning specialists</strong> protecting St Helens properties. Expert <strong>downpipe unblocking</strong>, comprehensive <strong>roofline maintenance</strong>, and professional debris removal for residential and commercial properties. Safeguard your property investment from costly water damage.
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Why St Helens Property Owners Trust R.R.M Exterior Cleaning</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              St Helens' unique climate presents specific challenges for property maintenance. The region's industrial heritage combined with frequent rainfall creates the perfect conditions for rapid gutter blockages, moss accumulation, and debris build-up. Our specialized <strong>gutter cleaning services</strong> are specifically designed to address these local environmental factors.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With extensive experience servicing St Helens' diverse architectural landscape—from historic Victorian terraces and Edwardian homes to contemporary new builds—we understand that each property type requires a tailored approach. Our certified technicians deliver expert care regardless of your property's age, style, or roofline complexity.
            </p>
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mt-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">What Sets Our Service Apart</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span><strong>Local Knowledge:</strong> Deep understanding of St Helens' specific weather patterns and their impact on gutter systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span><strong>Safety First:</strong> Fully insured with professional-grade equipment and safety protocols</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span><strong>Transparent Pricing:</strong> No hidden fees—clear quotes before any work begins</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12 bg-secondary/30 rounded-lg p-8 border border-secondary">
            <h2 className="text-2xl font-bold text-foreground mb-6">Complete Gutter Maintenance Solutions for St Helens Properties</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Professional Gutter Debris Removal</h3>
                  <p className="text-muted-foreground text-sm">Thorough elimination of leaves, twigs, moss, silt, and accumulated organic matter from all gutter sections. We carefully remove debris from gutter guards and leaf screens, ensuring optimal water flow throughout your entire rainwater management system.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Downpipe Clearing & Unblocking</h3>
                  <p className="text-muted-foreground text-sm">Professional clearing of obstructed downpipes using specialized equipment. We address blockages at any point in the system—from hopper heads to underground drainage connections—ensuring rainwater flows freely away from your property's foundation.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Roofline & Fascia Cleaning</h3>
                  <p className="text-muted-foreground text-sm">Comprehensive cleaning of your complete roofline system including fascia boards, soffits, and bargeboard. Using controlled low-pressure techniques and environmentally responsible cleaning solutions, we restore your roofline's appearance while protecting materials from damage.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Gutter Guard Installation & Repair</h3>
                  <p className="text-muted-foreground text-sm">Installation of premium gutter protection systems designed to minimize future maintenance requirements. We assess your property's specific needs—considering surrounding vegetation, roof pitch, and local wildlife—to recommend the most effective solution.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Detailed Inspection & Assessment</h3>
                  <p className="text-muted-foreground text-sm">Professional evaluation identifying existing damage, material deterioration, improper installation, or potential issues before they escalate. We provide photographic evidence and detailed reports, empowering you to make informed decisions.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Scheduled Maintenance Programs</h3>
                  <p className="text-muted-foreground text-sm">Tailored maintenance agreements ensuring your gutters remain clear throughout the year. Our preventative programs eliminate emergency callouts, extend system lifespan, and provide peace of mind through every season.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">The Critical Importance of Professional Gutter Maintenance in St Helens</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Prevent Costly Water Damage & Interior Leaks</h3>
                <p className="text-muted-foreground mb-3">St Helens experiences above-average annual rainfall, making properly functioning gutters absolutely essential for property protection. When gutters become clogged, water has nowhere to go—it overflows onto fascia boards, seeps behind siding, saturates foundation walls, and can even penetrate your home's interior.</p>
                <p className="text-muted-foreground text-sm">The consequences escalate quickly: rotted fascia boards require replacement (£1,500-£3,000), foundation repairs can exceed £5,000, and interior water damage remediation often costs £3,000-£8,000 depending on severity. Regular professional gutter cleaning is inexpensive insurance against these expensive repairs.</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Safeguard Your Property's Structural Integrity</h3>
                <p className="text-muted-foreground mb-3">Standing water in clogged gutters creates the ideal breeding ground for mosquitoes and other pests while promoting destructive mold and mildew growth. In St Helens' naturally damp climate, these conditions worsen rapidly.</p>
                <p className="text-muted-foreground text-sm">Beyond pest issues, water overflowing from blocked gutters saturates the ground adjacent to your foundation. During winter freeze-thaw cycles, this moisture expands and contracts, creating foundation cracks and structural movement. Professional <strong>gutter maintenance</strong> prevents these cascading problems before they begin.</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Extend Your Roof System Lifespan</h3>
                <p className="text-muted-foreground mb-3">Clean, properly functioning gutters significantly reduce moisture exposure to your roof structure. When gutters overflow, water backs up under roof shingles, saturating the underlying decking and potentially compromising the entire roof system.</p>
                <p className="text-muted-foreground text-sm">Given St Helens' challenging weather conditions—particularly during autumn and winter months—this protection becomes even more critical. Regular professional cleaning can add years to your roof's effective lifespan, delaying the need for costly roof replacement.</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Professional Safety & Proper Equipment</h3>
                <p className="text-muted-foreground mb-3">Gutter cleaning involves working at height, often in awkward positions on ladders or scaffolding. For homeowners without proper equipment, training, or insurance, this presents serious safety risks.</p>
                <p className="text-muted-foreground text-sm">Our professional team uses commercial-grade ladder stabilizers, safety harnesses, and specialized gutter cleaning tools. We're fully insured for high-level work, and our technicians receive regular safety training. You get professional results without personal risk.</p>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-red-500/5 border border-red-500/20 rounded-lg p-8">
            <div className="flex gap-4 mb-6">
              <AlertCircle className="h-8 w-8 text-red-500 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-foreground">Warning: Serious Risks of Neglecting Gutter Maintenance</h2>
            </div>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-red-500 font-bold text-xl">•</span>
                <div>
                  <strong className="text-foreground">Progressive Water Damage:</strong>
                  <p className="mt-1">Overflowing water doesn't simply disappear—it finds the path of least resistance. This typically means saturating fascia boards, soffits, and wall cavities. Over months and years, this constant moisture exposure causes wood rot, paint failure, and structural deterioration.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold text-xl">•</span>
                <div>
                  <strong className="text-foreground">Mold Growth & Pest Infestations:</strong>
                  <p className="mt-1">Stagnant water in blocked gutters attracts mosquitoes, wasps, and other insects that breed in standing water. Overflowing water creates damp conditions in wall cavities and under roofing materials—the perfect environment for toxic mold species that pose health risks to your family.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold text-xl">•</span>
                <div>
                  <strong className="text-foreground">Foundation & Basement Problems:</strong>
                  <p className="mt-1">When gutters fail to channel water away from your property, it pools around the foundation. This causes foundation settling, basement flooding, damp problems in ground-floor rooms, and in severe cases, structural cracking requiring extensive underpinning work.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold text-xl">•</span>
                <div>
                  <strong className="text-foreground">Expensive Emergency Repairs:</strong>
                  <p className="mt-1">Preventative gutter cleaning typically costs £80-£200 depending on property size. Emergency water damage repairs start at £1,000 and can easily exceed £10,000 for severe foundation or interior damage. Regular maintenance is always more cost-effective than emergency remediation.</p>
                </div>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Recommended Gutter Cleaning Frequency for St Helens Properties</h2>
            <div className="bg-secondary/30 border border-secondary rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">Standard Recommendation: Twice Yearly</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Most St Helens residential properties benefit from <strong>professional gutter cleaning twice annually</strong>:
              </p>
              <div className="ml-4 mb-4 space-y-3">
                <div className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Spring Cleaning (April-May):</strong>
                    <p className="text-muted-foreground text-sm mt-1">Removes winter debris accumulation, storm damage debris, and early spring seed dispersal before the growing season begins.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Autumn Cleaning (October-November):</strong>
                    <p className="text-muted-foreground text-sm mt-1">Critical pre-winter maintenance removing fallen leaves and preparing gutters for St Helens' wettest months. This timing is particularly important as blocked gutters during winter rainfall can cause severe damage.</p>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 mt-6">Higher-Risk Properties May Require Additional Service</h3>
              <p className="text-muted-foreground text-sm mb-3">Properties with these characteristics often need more frequent attention:</p>
              <ul className="text-muted-foreground text-sm space-y-1 ml-4">
                <li>• Surrounded by mature trees (especially oak, sycamore, or pine)</li>
                <li>• Older gutter systems showing signs of deterioration</li>
                <li>• Properties with previous water damage requiring extra vigilance</li>
                <li>• Commercial buildings with larger roof areas and complex drainage systems</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                We recommend professional inspection annually to identify early warning signs—minor leaks, loose fixings, joint separation, or material deterioration—before they develop into expensive problems.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions About Gutter Cleaning in St Helens</h2>
            <div className="space-y-4">
              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  How long does professional gutter cleaning typically take?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="text-muted-foreground mt-4">
                  <p className="mb-3">Most standard residential properties (semi-detached or detached homes) take 1-2 hours for complete gutter cleaning including downpipe clearing and basic roofline cleaning. Larger properties, those with multiple roof levels, or homes with extensive gutter systems may require 2-4 hours.</p>
                  <p>We provide accurate time estimates during your free initial quote after assessing your property's specific requirements.</p>
                </div>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  What's included in your standard gutter cleaning service?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="text-muted-foreground mt-4">
                  <p className="mb-3">Our comprehensive service includes:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Complete removal of all debris from gutters and gutter guards</li>
                    <li>• Thorough downpipe clearing and flow testing</li>
                    <li>• Basic roofline cleaning (removing surface dirt and organic growth)</li>
                    <li>• Disposal of all waste materials</li>
                    <li>• Visual inspection for damage or wear</li>
                    <li>• Photographic before/after documentation</li>
                    <li>• Written report highlighting any concerns</li>
                  </ul>
                  <p className="mt-3">Additional services like fascia deep cleaning, gutter repairs, or gutter guard installation are available at additional cost.</p>
                </div>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  Can you work during St Helens' typical rainy weather?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="text-muted-foreground mt-4">
                  <p className="mb-3">Light rain or drizzle doesn't prevent effective gutter cleaning. In fact, light rain can help us verify that water flows correctly through cleaned gutters and downpipes.</p>
                  <p>However, heavy rainfall, high winds, or storm conditions require rescheduling for safety reasons. We monitor weather forecasts carefully and communicate proactively if conditions necessitate appointment changes.</p>
                </div>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  Do you offer emergency gutter cleaning services?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="text-muted-foreground mt-4">
                  <p className="mb-3">Yes, we provide emergency response for urgent situations like completely blocked downpipes causing active flooding, storm damage, or gutters overflowing onto sensitive areas. Contact us immediately on <a href="tel:+447845463877" className="text-accent hover:text-primary transition-colors font-semibold">07845 463877</a> for emergency assistance.</p>
                  <p>While we prioritize emergencies, we strongly recommend regular preventative maintenance to avoid emergency situations entirely.</p>
                </div>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  Are you fully insured for working at height?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="text-muted-foreground mt-4">
                  <p className="mb-3">Absolutely. We carry comprehensive public liability insurance (£5 million coverage) and employer's liability insurance. All our technicians are trained in safe working at height procedures, and we use professional-grade safety equipment on every job.</p>
                  <p>You can request proof of insurance documentation before work commences if desired.</p>
                </div>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  Do you have references from other St Helens customers?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="text-muted-foreground mt-4">
                  <p className="mb-3">We've successfully completed hundreds of gutter cleaning projects throughout St Helens and surrounding areas. We're happy to provide references from satisfied customers in your specific neighborhood upon request.</p>
                  <p>Additionally, check our online reviews and testimonials from verified St Helens customers who've experienced our professional service firsthand.</p>
                </div>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  What payment methods do you accept?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="text-muted-foreground mt-4">
                  <p className="mb-3">We accept all major payment methods for your convenience: cash, bank transfer (BACs), credit and debit cards, and contactless payment.</p>
                  <p>Payment is due upon completion of work to your satisfaction. We never require upfront payment for standard gutter cleaning services.</p>
                </div>
              </details>

              <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  Can you repair damaged gutters you discover during cleaning?
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="text-muted-foreground mt-4">
                  <p className="mb-3">Yes! If we identify damaged sections, loose fixings, leaking joints, or other issues during cleaning, we can provide an immediate quote for repairs. With your approval, we can often complete minor repairs the same day.</p>
                  <p>For more extensive repairs requiring specialized materials or significant work, we'll provide a detailed written quote and can schedule the repair work at your convenience.</p>
                </div>
              </details>
            </div>
          </section>

          <section className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg p-8 border border-accent/30 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Protect Your St Helens Property Investment?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Don't wait for costly water damage to develop. Contact R.R.M Exterior Cleaning today for professional gutter cleaning services throughout St Helens and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="group">
                <a href="tel:+447845463877">
                  <Phone className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Call Now: 07845 463877
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Get Your Free Quote</Link>
              </Button>
            </div>
          </section>

          <section className="mt-12 pt-12 border-t border-secondary">
            <h2 className="text-2xl font-bold text-foreground mb-4">Service Area: Complete Gutter Cleaning Coverage Across St Helens</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We proudly serve all residential and commercial properties throughout St Helens borough and surrounding communities. Whether you're in the town center, outlying villages, or rural areas, our professional gutter cleaning team provides the same high-quality service to every customer.
            </p>
            <div className="bg-secondary/30 border border-secondary rounded-lg p-6 mb-6">
              <p className="text-muted-foreground text-center mb-4">
                <strong className="text-foreground">Serving:</strong> St Helens, Newton-le-Willows, Haydock, Rainford, Billinge, Eccleston, Thatto Heath, Sutton, and all surrounding areas
              </p>
            </div>
            <div className="bg-secondary/30 border border-secondary rounded-lg p-6">
              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Contact R.R.M Exterior Cleaning</h3>
                  <p className="text-muted-foreground text-sm mb-2">Local, Trusted, Professional—that's the R.R.M difference.</p>
                  <a href="tel:+447845463877" className="text-accent hover:text-primary transition-colors font-semibold">📞 Call: 07845 463877</a>
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
