import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CheckCircle, Star, Shield, Clock, Phone, Zap, ArrowRight } from 'lucide-react';

const trustIndicators = [
  { icon: Clock, text: 'Est. 2016' },
  { icon: Shield, text: 'Fully insured' },
  { icon: Star, text: '5-star rated' },
  { icon: CheckCircle, text: 'Free quotes' },
];

const servicePills = [
  { label: 'Jet Washing', href: '/services/jet-washing' },
  { label: 'Driveway Cleaning', href: '/services/driveway-cleaning' },
  { label: 'Roof Cleaning', href: '/services/roof-cleaning' },
  { label: 'Gutter Cleaning', href: '/services/gutter-cleaning' },
  { label: 'Patio Cleaning', href: '/services/patio-cleaning' },
  { label: 'Render Cleaning', href: '/services/render-cleaning' },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden hero-bg" aria-labelledby="hero-heading">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 0%, transparent 50%)`
        }} />
      </div>

      <div className="container-custom relative">
        <div className="py-20 md:py-28 lg:py-36 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* Left Side: Content */}
          <div className="max-w-3xl w-full lg:w-1/2 z-10">

            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 text-sm text-accent-foreground mb-6 animate-fade-in">
              <Star className="h-4 w-4 text-accent fill-accent" aria-hidden="true" />
              <span className="font-semibold">5-Star Rated · 8+ Years Local · Fully Insured</span>
            </div>

            {/* Main Heading — primary keyword "Exterior Cleaning" in first 2 words */}
            <h1
              id="hero-heading"
              className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-5 animate-fade-in-up leading-[1.1]"
            >
              Exterior Cleaning Experts —{' '}
              <span className="text-accent">Same-Week Appointments.</span>
            </h1>

            {/* Subtitle — "you/your" language, stat anchor, no filler */}
            <p className="text-lg md:text-xl text-primary-foreground/85 mb-6 animate-fade-in-delay-1 leading-relaxed max-w-xl">
              47 five-star reviews. R.R.M delivers professional{' '}
              <strong className="text-white">jet washing</strong>, driveway cleaning, roof cleaning
              &amp; render treatment across Newton-le-Willows, Warrington &amp; the North West.
              Your quote is free. Your surface is safe.
            </p>

            {/* Service Pills */}
            <div className="flex flex-wrap gap-2 mb-8 animate-fade-in-delay-1">
              {servicePills.map((pill) => (
                <Link
                  key={pill.label}
                  href={pill.href}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 hover:bg-accent hover:border-accent px-3 py-1.5 text-xs font-medium text-primary-foreground/90 hover:text-white transition-all duration-200 backdrop-blur-sm"
                >
                  <Zap className="h-3 w-3" aria-hidden="true" />
                  {pill.label}
                </Link>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in-delay-2">
              <Button variant="hero" size="xl" asChild>
                <Link href="/contact" title="Request a free quote">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="tel:+447845463877" title="Call R.R.M now">
                  <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                  Call: 07845 463877
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-5 animate-fade-in-delay-3">
              {trustIndicators.map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-primary-foreground/80">
                  <item.icon className="h-4 w-4 text-accent" aria-hidden="true" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative z-10 mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full transform translate-x-10 translate-y-10" />

            {/* Social proof overlay on image */}
            <div className="relative">
              <Image
                src="/img1.png"
                alt="R.R.M jet washing and exterior cleaning in action — North West"
                width={512}
                height={384}
                priority
                fetchPriority="high"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 512px"
                className="relative w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl border-4 border-white/10 transform hover:scale-[1.02] transition-all duration-500 object-cover"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white text-foreground rounded-xl shadow-xl px-4 py-3 flex items-center gap-3">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" aria-hidden="true" />
                  ))}
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground leading-none">5-Star Service</p>
                  <p className="text-xs text-muted-foreground leading-none mt-0.5">Trusted across North West</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 50L48 45.7C96 41.3 192 32.7 288 35.2C384 37.7 480 51.3 576 55.8C672 60.3 768 55.7 864 48.3C960 41 1056 31 1152 31.7C1248 32.3 1344 43.7 1392 49.3L1440 55V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
}
