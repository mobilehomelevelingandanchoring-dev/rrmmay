'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight, Star } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-16 md:py-24 hero-bg relative overflow-hidden" aria-labelledby="cta-heading">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 75% 25%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(255,255,255,0.08) 0%, transparent 40%)`
        }} />
      </div>

      <div className="container-custom relative">
        <div className="max-w-3xl mx-auto text-center">

          {/* Trust pill */}
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 text-sm text-accent-foreground mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
            ))}
            <span className="font-semibold ml-1">5-Star Rated Service</span>
          </div>

          <h2
            id="cta-heading"
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6"
          >
            Get Your Free Exterior Cleaning Quote Today
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/85 mb-3 leading-relaxed">
            Tell us what you need — we&apos;ll give you an honest assessment and a clear price.
            No pressure, no upselling, no hidden costs.
          </p>
          <p className="text-base text-primary-foreground/70 mb-8 leading-relaxed">
            Most North West properties get a same-week appointment. Call now or fill in the
            contact form and we&apos;ll get back to you within a few hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link href="/contact">
                Request a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="tel:+447845463877">
                <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                Call: 07845 463877
              </a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-primary-foreground/70 font-medium">
            Est. 2016 &bull; Fully Insured &bull; 47 Five-Star Reviews &bull; Same-Week Availability
          </p>
          <p className="mt-2 text-sm text-primary-foreground/70">
            Serving Newton-le-Willows, Warrington, St Helens, Manchester &amp; across the North West
          </p>
        </div>
      </div>
    </section>
  );
}
