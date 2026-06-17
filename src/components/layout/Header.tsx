'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Menu,
  Phone,
  ChevronDown,
  ChevronRight,
  Star,
  Shield,
  Award,
  MapPin,
} from 'lucide-react';
import { cn } from '@/lib/utils';

/* ─── Topical silo navigation — Services ───────────────────────────────────
   Organised by entity type cluster, not alphabetically.
   Each cluster = one SEO content silo (reflects internal link architecture).
   Category descriptions contain semantic co-occurrence terms for each silo.
──────────────────────────────────────────────────────────────────────────── */
const serviceMegaMenu = [
  {
    category: 'Driveways & Patios',
    description: 'Block paving · concrete · tarmac · natural stone',
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
    description: 'Soft wash · moss treatment · gutter clearing',
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
    description: 'Render · brick · uPVC · cladding · glazing',
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
    category: 'Specialist Treatments',
    description: 'Pressure wash · algae · moss · commercial',
    items: [
      { name: 'Pressure Washing', href: '/services/pressure-washing' },
      { name: 'Jet Washing', href: '/services/jet-washing' },
      { name: 'Algae Removal', href: '/services/algae-removal' },
      { name: 'Moss Removal', href: '/services/moss-removal' },
      { name: 'Bio-Wash Treatment', href: '/services/bio-wash-treatment' },
      { name: 'Commercial Cleaning', href: '/services/commercial-exterior-cleaning' },
    ],
  },
];

/* ─── Geographic coverage — Locations ──────────────────────────────────────
   Organised by region for geographic authority signalling.
   Tier 1 hubs listed first; spoke locations follow by county.
──────────────────────────────────────────────────────────────────────────── */
const locationMegaMenu = [
  {
    region: 'Merseyside',
    locations: [
      { name: 'Newton-le-Willows', href: '/locations/newton-le-willows' },
      { name: 'St Helens', href: '/locations/st-helens' },
      { name: 'Haydock', href: '/locations/haydock' },
      { name: 'Earlestown', href: '/locations/earlestown' },
      { name: 'Huyton', href: '/locations/huyton' },
      { name: 'Wavertree', href: '/locations/wavertree' },
      { name: 'Halewood', href: '/locations/halewood' },
    ],
  },
  {
    region: 'Cheshire & Warrington',
    locations: [
      { name: 'Warrington', href: '/locations/warrington' },
      { name: 'Widnes', href: '/locations/widnes' },
      { name: 'Lymm', href: '/locations/lymm' },
      { name: 'Great Sankey', href: '/locations/great-sankey' },
      { name: 'Burtonwood', href: '/locations/burtonwood' },
    ],
  },
  {
    region: 'Greater Manchester',
    locations: [
      { name: 'Leigh', href: '/locations/leigh' },
      { name: 'Golborne', href: '/locations/golborne' },
      { name: 'Lowton', href: '/locations/lowton' },
      { name: 'Ashton-in-Makerfield', href: '/locations/ashton-in-makerfield' },
      { name: 'Irlam', href: '/locations/irlam' },
      { name: 'Manchester', href: '/locations/manchester' },
    ],
  },
  {
    region: 'West Lancashire',
    locations: [
      { name: 'Skelmersdale', href: '/locations/skelmersdale' },
      { name: 'Ormskirk', href: '/locations/ormskirk' },
      { name: 'Uppermill', href: '/locations/uppermill' },
    ],
  },
];

const googleReviewsUrl =
  'https://www.google.com/maps/search/?api=1&query=R+R+M+External+Cleaning+Specialist+Newton-le-Willows+Merseyside+UK';

type OpenMenu = 'services' | 'locations' | null;

export function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback(() => setOpenMenu(null), []);

  useEffect(() => {
    if (!openMenu) return;
    function onOutsideClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) closeMenu();
    }
    function onEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') closeMenu();
    }
    document.addEventListener('mousedown', onOutsideClick);
    document.addEventListener('keydown', onEscape);
    return () => {
      document.removeEventListener('mousedown', onOutsideClick);
      document.removeEventListener('keydown', onEscape);
    };
  }, [openMenu, closeMenu]);

  function toggle(menu: OpenMenu) {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  }

  return (
    <header className="sticky top-0 z-50 shadow-sm" role="banner">

      {/* ── E-E-A-T trust bar (desktop) ──────────────────────────────────── */}
      <div className="hidden lg:block bg-primary text-primary-foreground text-xs border-b border-primary-foreground/10">
        <div className="container-custom flex items-center justify-between py-1.5">
          <div className="flex items-center gap-5 text-primary-foreground/80">
            <a
              href="tel:+447845463877"
              className="flex items-center gap-1.5 hover:text-accent transition-colors font-medium"
              aria-label="Call R.R.M External Cleaning on 07845 463877"
            >
              <Phone className="h-3 w-3" aria-hidden="true" />
              07845 463877
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
          <div className="flex items-center gap-4 text-primary-foreground/60">
            <span className="flex items-center gap-1 text-primary-foreground/80">
              <Shield className="h-3 w-3 text-accent" aria-hidden="true" />
              Fully Insured
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1 text-primary-foreground/80">
              <Award className="h-3 w-3 text-accent" aria-hidden="true" />
              Est. 2016
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1 text-primary-foreground/80">
              <MapPin className="h-3 w-3 text-accent" aria-hidden="true" />
              Northwest England — 21 service areas
            </span>
          </div>
        </div>
      </div>

      {/* ── Primary navigation ───────────────────────────────────────────── */}
      <div className="bg-card/95 backdrop-blur-md border-b border-border/50">
        <nav
          ref={navRef}
          className="container-custom"
          aria-label="Primary navigation"
          role="navigation"
        >
          <div className="flex items-center justify-between h-20 lg:h-[68px]">

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group flex-shrink-0"
              aria-label="R.R.M External Cleaning Specialist — home"
            >
              <Image
                src="/logo.webp"
                alt="R.R.M External Cleaning Specialist — Northwest England exterior cleaning"
                width={80}
                height={80}
                priority
                fetchPriority="high"
                className="h-14 sm:h-16 lg:h-[58px] w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* ── Desktop nav links ─────────────────────────────────────── */}
            <div className="hidden lg:flex items-center">

              {/* Services mega-menu */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => toggle('services')}
                  aria-expanded={openMenu === 'services'}
                  aria-haspopup="true"
                  aria-controls="nav-services"
                  className={cn(
                    'flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                    openMenu === 'services' || pathname.startsWith('/services')
                      ? 'text-accent bg-accent/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  )}
                >
                  Services
                  <ChevronDown
                    className={cn('h-3.5 w-3.5 transition-transform duration-200', openMenu === 'services' && 'rotate-180')}
                    aria-hidden="true"
                  />
                </button>

                {openMenu === 'services' && (
                  <div
                    id="nav-services"
                    role="menu"
                    aria-label="Cleaning services navigation"
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[720px] bg-card border border-border rounded-xl shadow-xl p-5 z-50"
                  >
                    <div className="grid grid-cols-4 gap-5">
                      {serviceMegaMenu.map((group) => (
                        <div key={group.category} role="group" aria-label={group.category}>
                          <p className="text-[11px] font-semibold text-accent uppercase tracking-wider mb-0.5">
                            {group.category}
                          </p>
                          <p className="text-[10px] text-muted-foreground mb-2.5 pb-2 border-b border-border">
                            {group.description}
                          </p>
                          <ul className="space-y-1.5">
                            {group.items.map((item) => (
                              <li key={item.href}>
                                <Link
                                  href={item.href}
                                  role="menuitem"
                                  onClick={closeMenu}
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
                        40 specialist exterior cleaning services — Northwest England
                      </span>
                      <Link
                        href="/services"
                        onClick={closeMenu}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:underline"
                      >
                        Browse all 40 services
                        <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Locations mega-menu */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => toggle('locations')}
                  aria-expanded={openMenu === 'locations'}
                  aria-haspopup="true"
                  aria-controls="nav-locations"
                  className={cn(
                    'flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                    openMenu === 'locations' || pathname.startsWith('/locations')
                      ? 'text-accent bg-accent/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  )}
                >
                  Locations
                  <ChevronDown
                    className={cn('h-3.5 w-3.5 transition-transform duration-200', openMenu === 'locations' && 'rotate-180')}
                    aria-hidden="true"
                  />
                </button>

                {openMenu === 'locations' && (
                  <div
                    id="nav-locations"
                    role="menu"
                    aria-label="Service areas navigation"
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[560px] bg-card border border-border rounded-xl shadow-xl p-5 z-50"
                  >
                    <div className="grid grid-cols-4 gap-4">
                      {locationMegaMenu.map((group) => (
                        <div key={group.region} role="group" aria-label={`${group.region} service areas`}>
                          <p className="text-[11px] font-semibold text-accent uppercase tracking-wider mb-2 pb-1.5 border-b border-border">
                            {group.region}
                          </p>
                          <ul className="space-y-1.5">
                            {group.locations.map((loc) => (
                              <li key={loc.href}>
                                <Link
                                  href={loc.href}
                                  role="menuitem"
                                  onClick={closeMenu}
                                  className="block text-[13px] text-muted-foreground hover:text-accent hover:translate-x-0.5 transition-all duration-150 leading-snug"
                                >
                                  {loc.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-3.5 border-t border-border flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        Exterior cleaning across Merseyside, Cheshire, Greater Manchester & West Lancashire
                      </span>
                      <Link
                        href="/areas"
                        onClick={closeMenu}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:underline"
                      >
                        All 21 areas
                        <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Topic entity links — Problems, Surfaces, supporting content */}
              {[
                { name: 'Problems', href: '/problems', title: 'Common exterior problems we solve' },
                { name: 'Surfaces', href: '/surfaces', title: 'Surface types we clean' },
                { name: 'About', href: '/about', title: 'About R.R.M External Cleaning Specialist' },
                { name: 'FAQ', href: '/faq', title: 'Frequently asked questions' },
                { name: 'Contact', href: '/contact', title: 'Get a free quote or book a visit' },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  title={item.title}
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

            {/* ── Desktop CTAs ──────────────────────────────────────────── */}
            <div className="hidden lg:flex items-center gap-3">

              {/* Google Rating — aggregateRating E-E-A-T signal */}
              <a
                href={googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col bg-white px-3 py-1.5 rounded-lg border border-border hover:shadow-md transition-all duration-200"
                aria-label="R.R.M External Cleaning — 5-star Google rating. Click to view reviews."
                title="View our Google reviews — 5.0 rating"
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
                aria-label="Call R.R.M External Cleaning — 07845 463877"
              >
                <Phone className="h-3.5 w-3.5 mr-1.5" aria-hidden="true" />
                07845 463877
              </a>

              <Button variant="highlight" size="sm" asChild>
                <Link href="/book" title="Book a free exterior cleaning quote">
                  Get Free Quote
                </Link>
              </Button>
            </div>

            {/* ── Mobile: phone + hamburger ─────────────────────────────── */}
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

                  {/* Mobile nav — flat list matching topical entity order */}
                  <nav className="flex flex-col p-4 gap-0.5 flex-1 overflow-y-auto" aria-label="Mobile navigation">
                    {[
                      { name: 'Home', href: '/' },
                      { name: 'Cleaning Services', href: '/services' },
                      { name: 'Service Locations', href: '/locations' },
                      { name: 'Common Problems', href: '/problems' },
                      { name: 'Surface Types', href: '/surfaces' },
                      { name: 'Areas We Cover', href: '/areas' },
                      { name: 'About Us', href: '/about' },
                      { name: 'FAQ', href: '/faq' },
                      { name: 'Contact & Quotes', href: '/contact' },
                    ].map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        aria-current={pathname === item.href ? 'page' : undefined}
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
                      aria-label="Call R.R.M External Cleaning on 07845 463877"
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
