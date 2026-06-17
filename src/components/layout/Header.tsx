'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu, Phone, ChevronDown, ChevronRight, Star, Shield, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

const serviceMegaMenu = [
  {
    category: 'Driveways & Patios',
    items: [
      { name: 'Driveway Cleaning', href: '/services/driveway-cleaning' },
      { name: 'Patio Cleaning', href: '/services/patio-cleaning' },
      { name: 'Concrete Cleaning', href: '/services/concrete-cleaning' },
      { name: 'Tarmac Cleaning', href: '/services/tarmac-cleaning' },
      { name: 'Sandstone Cleaning', href: '/services/sandstone-cleaning' },
      { name: 'Driveway Sealing', href: '/services/driveway-sealing' },
      { name: 'Oil Stain Removal', href: '/services/oil-stain-removal' },
    ],
  },
  {
    category: 'Roofs & Gutters',
    items: [
      { name: 'Roof Cleaning', href: '/services/roof-cleaning' },
      { name: 'Gutter Cleaning', href: '/services/gutter-cleaning' },
      { name: 'Fascia & Soffit Cleaning', href: '/services/fascia-soffit-cleaning' },
      { name: 'Roof Moss Treatment', href: '/services/roof-moss-treatment' },
      { name: 'Gutter Guard Installation', href: '/services/gutter-guard-installation' },
      { name: 'Roof Sealing', href: '/services/roof-sealing' },
    ],
  },
  {
    category: 'Walls & Windows',
    items: [
      { name: 'Render Cleaning', href: '/services/render-cleaning' },
      { name: 'Brick Cleaning', href: '/services/brick-cleaning' },
      { name: 'Window Cleaning', href: '/services/window-cleaning' },
      { name: 'Cladding Cleaning', href: '/services/cladding-cleaning' },
      { name: 'Conservatory Cleaning', href: '/services/conservatory-cleaning' },
      { name: 'uPVC Cleaning', href: '/services/uPVC-cleaning' },
    ],
  },
  {
    category: 'Specialist & Commercial',
    items: [
      { name: 'Pressure Washing', href: '/services/pressure-washing' },
      { name: 'Jet Washing', href: '/services/jet-washing' },
      { name: 'Algae Removal', href: '/services/algae-removal' },
      { name: 'Moss Removal', href: '/services/moss-removal' },
      { name: 'Commercial Cleaning', href: '/services/commercial-exterior-cleaning' },
      { name: 'Solar Panel Cleaning', href: '/services/solar-panel-cleaning' },
    ],
  },
];

const mainNav = [
  { name: 'Locations', href: '/locations' },
  { name: 'Problems', href: '/problems' },
  { name: 'Surfaces', href: '/surfaces' },
  { name: 'Areas', href: '/areas' },
  { name: 'About', href: '/about' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

const mobileNav = [
  { name: 'Home', href: '/' },
  { name: 'All Services', href: '/services' },
  { name: 'Locations', href: '/locations' },
  { name: 'Common Problems', href: '/problems' },
  { name: 'Surface Types', href: '/surfaces' },
  { name: 'Areas We Cover', href: '/areas' },
  { name: 'About Us', href: '/about' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

const googleReviewsUrl =
  'https://www.google.com/maps/search/?api=1&query=R+R+M+External+Cleaning+Specialist+Newton-le-Willows+Merseyside+UK';

export function Header() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!servicesOpen) return;
    function handleOutsideClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') setServicesOpen(false);
    }
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [servicesOpen]);

  return (
    <header className="sticky top-0 z-50 shadow-sm" role="banner">

      {/* Trust bar — E-E-A-T authority strip, desktop only */}
      <div className="hidden lg:block bg-primary text-primary-foreground text-xs border-b border-primary-foreground/10">
        <div className="container-custom flex items-center justify-between py-1.5">
          <div className="flex items-center gap-5 text-primary-foreground/80">
            <a
              href="tel:+447845463877"
              className="flex items-center gap-1.5 hover:text-accent transition-colors font-medium"
              aria-label="Call us on 07845 463877"
            >
              <Phone className="h-3 w-3" aria-hidden="true" />
              <span>07845 463877</span>
            </a>
            <span aria-hidden="true" className="text-primary-foreground/30">|</span>
            <a
              href="mailto:rrmexternalcleaning@gmail.com"
              className="hover:text-accent transition-colors"
              aria-label="Email rrmexternalcleaning@gmail.com"
            >
              rrmexternalcleaning@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4 text-primary-foreground/70">
            <span className="flex items-center gap-1">
              <Shield className="h-3 w-3 text-accent" aria-hidden="true" />
              <span>Fully Insured</span>
            </span>
            <span aria-hidden="true" className="text-primary-foreground/30">·</span>
            <span className="flex items-center gap-1">
              <Award className="h-3 w-3 text-accent" aria-hidden="true" />
              <span>Est. 2016</span>
            </span>
            <span aria-hidden="true" className="text-primary-foreground/30">·</span>
            <span>Northwest England Coverage</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-card/95 backdrop-blur-md border-b border-border/50">
        <nav className="container-custom" aria-label="Primary navigation">
          <div className="flex items-center justify-between h-20 lg:h-[68px]">

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group flex-shrink-0"
              aria-label="R.R.M External Cleaning Specialist — home page"
            >
              <Image
                src="/logo.webp"
                alt="R.R.M External Cleaning Specialist logo — Northwest England"
                width={80}
                height={80}
                priority
                fetchPriority="high"
                className="h-14 sm:h-16 lg:h-[58px] w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop navigation links */}
            <div className="hidden lg:flex items-center">

              {/* Services mega-menu trigger */}
              <div ref={menuRef} className="relative">
                <button
                  type="button"
                  onClick={() => setServicesOpen((v) => !v)}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  aria-controls="services-megamenu"
                  className={cn(
                    'flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                    pathname.startsWith('/services')
                      ? 'text-accent bg-accent/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  )}
                >
                  Services
                  <ChevronDown
                    className={cn(
                      'h-3.5 w-3.5 transition-transform duration-200',
                      servicesOpen && 'rotate-180'
                    )}
                    aria-hidden="true"
                  />
                </button>

                {/* Mega-menu dropdown — topical silo navigation */}
                {servicesOpen && (
                  <div
                    id="services-megamenu"
                    role="menu"
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[700px] bg-card border border-border rounded-xl shadow-xl p-5 z-50"
                  >
                    <div className="grid grid-cols-4 gap-5">
                      {serviceMegaMenu.map((group) => (
                        <div key={group.category} role="group" aria-label={group.category}>
                          <p className="text-[11px] font-semibold text-accent uppercase tracking-wider mb-2.5 pb-1.5 border-b border-border">
                            {group.category}
                          </p>
                          <ul className="space-y-1.5">
                            {group.items.map((item) => (
                              <li key={item.href}>
                                <Link
                                  href={item.href}
                                  role="menuitem"
                                  onClick={() => setServicesOpen(false)}
                                  className="block text-[13px] text-muted-foreground hover:text-accent hover:translate-x-0.5 transition-all duration-150 leading-snug"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-3.5 border-t border-border flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        40 specialist cleaning services across Northwest England
                      </span>
                      <Link
                        href="/services"
                        onClick={() => setServicesOpen(false)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:underline"
                      >
                        View all services
                        <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Other nav links */}
              {mainNav.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                    'after:absolute after:bottom-1 after:left-3 after:right-3 after:h-0.5 after:rounded-full after:transition-all after:duration-200 after:origin-center',
                    pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href + '/'))
                      ? 'text-accent bg-accent/10 after:bg-accent after:scale-x-100'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted after:bg-accent after:scale-x-0 hover:after:scale-x-100'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">

              {/* Google Rating — social proof / E-E-A-T signal */}
              <a
                href={googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col bg-white px-3 py-1.5 rounded-lg border border-border hover:shadow-md transition-all duration-200"
                aria-label="R.R.M External Cleaning — 5-star Google rating. Click to view our reviews."
              >
                <div className="flex items-center gap-0.5 text-[10px] font-bold leading-none mb-0.5">
                  <span style={{ color: '#4285F4' }}>G</span>
                  <span style={{ color: '#EA4335' }}>o</span>
                  <span style={{ color: '#FBBC05' }}>o</span>
                  <span style={{ color: '#4285F4' }}>g</span>
                  <span style={{ color: '#34A853' }}>l</span>
                  <span style={{ color: '#EA4335' }}>e</span>
                  <span className="ml-1 text-muted-foreground font-semibold">Rating</span>
                </div>
                <div className="flex items-center gap-0.5">
                  <span className="text-xs font-bold mr-0.5">5.0</span>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                  ))}
                </div>
              </a>

              <a
                href="tel:+447845463877"
                className="inline-flex items-center min-h-[38px] px-4 py-2 bg-accent text-accent-foreground text-sm font-semibold rounded-lg hover:bg-accent/90 hover:shadow-md transition-all duration-200"
                aria-label="Call R.R.M External Cleaning on 07845 463877"
              >
                <Phone className="h-3.5 w-3.5 mr-1.5" aria-hidden="true" />
                07845 463877
              </a>

              <Button variant="highlight" size="sm" asChild>
                <Link href="/book">Get Free Quote</Link>
              </Button>
            </div>

            {/* Mobile: phone icon + hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href="tel:+447845463877"
                className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
                aria-label="Call R.R.M External Cleaning"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
              </a>

              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 hover:bg-muted"
                    aria-label="Open navigation menu"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[360px] p-0 flex flex-col">
                  <SheetHeader className="px-6 py-4 border-b border-border">
                    <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                    <Link href="/" className="flex items-center gap-3">
                      <Image
                        src="/logo.webp"
                        alt="R.R.M External Cleaning Specialist"
                        width={48}
                        height={48}
                        className="h-12 w-auto"
                      />
                    </Link>
                  </SheetHeader>

                  <nav className="flex flex-col p-4 gap-0.5 flex-1 overflow-y-auto" aria-label="Mobile navigation">
                    {mobileNav.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          'flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 min-h-[44px]',
                          pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                            ? 'text-accent bg-accent/10 font-semibold'
                            : 'text-foreground hover:bg-muted hover:text-accent'
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>

                  <div className="px-4 py-4 border-t border-border space-y-2.5">
                    <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground pb-1">
                      <span className="flex items-center gap-1">
                        <Shield className="h-3 w-3 text-accent" aria-hidden="true" />
                        Fully Insured
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <Award className="h-3 w-3 text-accent" aria-hidden="true" />
                        Est. 2016
                      </span>
                    </div>
                    <a
                      href="tel:+447845463877"
                      className="flex items-center justify-center gap-2 w-full min-h-[44px] px-5 py-3 bg-accent text-accent-foreground text-sm font-semibold rounded-lg hover:bg-accent/90 transition-all duration-200"
                      aria-label="Call us on 07845 463877"
                    >
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      Call: 07845 463877
                    </a>
                    <Button variant="highlight" size="lg" className="w-full" asChild>
                      <Link href="/book">Get Free Quote</Link>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

          </div>
        </nav>
      </div>
    </header>
  );
}
