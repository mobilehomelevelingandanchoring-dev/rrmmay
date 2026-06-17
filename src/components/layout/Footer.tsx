'use client';

import Link from 'next/link';
import { Phone, Mail, Clock, Youtube, Facebook, Instagram, Shield, Award, Star, MapPin } from 'lucide-react';
import { locations as allLocations } from '@/data/locations';

const socialLinks = [
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@R.R.MExternalCleaning',
    icon: Youtube,
    description: 'Watch our pressure washing and exterior cleaning transformations',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61556594193490',
    icon: Facebook,
    description: 'Before & after photos and local cleaning updates',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/reel/DOX4E-KiNof/',
    icon: Instagram,
    description: 'Exterior cleaning results across the North West',
  },
];

const externalCitations = [
  {
    name: 'Checkatrade',
    url: 'https://www.checkatrade.com/trades/rrmexternalcleaningspecialist',
    label: 'Checkatrade — Verified reviews',
  },
  {
    name: 'Yell.com',
    url: 'https://www.yell.com/biz/r-r-m-external-cleaning-specialist-newton-le-willows-10988371/',
    label: 'Yell.com — Business directory',
  },
  {
    name: 'Pinterest',
    url: 'https://uk.pinterest.com/rrmexternalcleaningspecialist/',
    label: 'Pinterest — Cleaning inspiration',
  },
  {
    name: 'Expert Blog',
    url: 'https://rrmexternalcleaningspecialists.blogspot.com/',
    label: 'Our blog — Cleaning guides & tips',
  },
];

// Topical service clusters for semantic SEO — organised by silo, not alphabetically
const serviceColumns = [
  {
    heading: 'Driveways & Patios',
    services: [
      { name: 'Driveway Cleaning', href: '/services/driveway-cleaning' },
      { name: 'Patio Cleaning', href: '/services/patio-cleaning' },
      { name: 'Concrete Cleaning', href: '/services/concrete-cleaning' },
      { name: 'Tarmac Cleaning', href: '/services/tarmac-cleaning' },
      { name: 'Driveway Sealing', href: '/services/driveway-sealing' },
      { name: 'Patio Sealing', href: '/services/patio-sealing' },
      { name: 'Oil Stain Removal', href: '/services/oil-stain-removal' },
      { name: 'Sandstone Cleaning', href: '/services/sandstone-cleaning' },
    ],
  },
  {
    heading: 'Roofs & Gutters',
    services: [
      { name: 'Roof Cleaning', href: '/services/roof-cleaning' },
      { name: 'Gutter Cleaning', href: '/services/gutter-cleaning' },
      { name: 'Fascia & Soffit Cleaning', href: '/services/fascia-soffit-cleaning' },
      { name: 'Roof Moss Treatment', href: '/services/roof-moss-treatment' },
      { name: 'Gutter Guard Installation', href: '/services/gutter-guard-installation' },
      { name: 'Roof Sealing', href: '/services/roof-sealing' },
    ],
  },
  {
    heading: 'Walls & Windows',
    services: [
      { name: 'Render Cleaning', href: '/services/render-cleaning' },
      { name: 'Brick Cleaning', href: '/services/brick-cleaning' },
      { name: 'Window Cleaning', href: '/services/window-cleaning' },
      { name: 'Cladding Cleaning', href: '/services/cladding-cleaning' },
      { name: 'Conservatory Cleaning', href: '/services/conservatory-cleaning' },
      { name: 'uPVC Cleaning', href: '/services/uPVC-cleaning' },
      { name: 'Wall Cleaning', href: '/services/wall-cleaning' },
    ],
  },
  {
    heading: 'Specialist Treatments',
    services: [
      { name: 'Pressure Washing', href: '/services/pressure-washing' },
      { name: 'Jet Washing', href: '/services/jet-washing' },
      { name: 'Algae Removal', href: '/services/algae-removal' },
      { name: 'Moss Removal', href: '/services/moss-removal' },
      { name: 'Bio-Wash Treatment', href: '/services/bio-wash-treatment' },
      { name: 'Weed Treatment', href: '/services/weed-treatment' },
      { name: 'Solar Panel Cleaning', href: '/services/solar-panel-cleaning' },
      { name: 'Commercial Cleaning', href: '/services/commercial-exterior-cleaning' },
    ],
  },
];

// Problem pages — captures informational intent queries
const problemPages = [
  { name: 'Moss Growth on Surfaces', href: '/problems/moss-growth' },
  { name: 'Algae Staining & Discoloration', href: '/problems/algae-discoloration' },
  { name: 'Lichen Growth on Roofs', href: '/problems/lichen-growth' },
  { name: 'Black Spot & Mould', href: '/problems/black-spot-mold' },
  { name: 'Pollution & Traffic Staining', href: '/problems/pollution-staining' },
  { name: 'Grime & Dirt Build-up', href: '/problems/grime-dirt-accumulation' },
  { name: 'Oil Stains on Driveways', href: '/problems/oil-stains' },
];

// Surface pages — material-specific expertise signals
const surfacePages = [
  { name: 'Concrete Driveways & Paths', href: '/surfaces/concrete' },
  { name: 'Block Paving & Brick Pavers', href: '/surfaces/block-paving' },
  { name: 'Tarmac & Asphalt', href: '/surfaces/tarmac' },
  { name: 'Brick & Natural Stone', href: '/surfaces/brick-stone' },
  { name: 'Timber & Wood Surfaces', href: '/surfaces/timber-wood' },
  { name: 'Roof Tiles & Gutters', href: '/surfaces/roof-tiles-gutters' },
  { name: 'uPVC & Plastic', href: '/surfaces/upvc-plastic' },
  { name: 'Glass & Glazing', href: '/surfaces/glass-glazing' },
];

const googleReviewsUrl =
  'https://www.google.com/maps/search/?api=1&query=R+R+M+External+Cleaning+Specialist+Newton-le-Willows+Merseyside+UK';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-primary text-primary-foreground"
      role="contentinfo"
      aria-label="Site footer"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      {/* E-E-A-T Trust Strip */}
      <div className="border-b border-primary-foreground/10">
        <div className="container-custom py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/20 flex-shrink-0">
                <Award className="h-4 w-4 text-accent" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold text-primary-foreground">Est. 2016</p>
                <p className="text-[11px] text-primary-foreground/60">9+ years experience</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/20 flex-shrink-0">
                <Shield className="h-4 w-4 text-accent" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold text-primary-foreground">Fully Insured</p>
                <p className="text-[11px] text-primary-foreground/60">Public liability covered</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/20 flex-shrink-0">
                <Star className="h-4 w-4 text-accent fill-accent" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold text-primary-foreground">5-Star Rated</p>
                <p className="text-[11px] text-primary-foreground/60">Google & Checkatrade</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/20 flex-shrink-0">
                <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold text-primary-foreground">Northwest England</p>
                <p className="text-[11px] text-primary-foreground/60">21 service areas covered</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container-custom py-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">

          {/* ── Company Info & NAP ── */}
          <div className="lg:col-span-3 md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5 group" aria-label="R.R.M External Cleaning Specialist home">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground group-hover:scale-110 transition-all duration-200">
                <span className="text-lg font-bold leading-none" aria-hidden="true">R</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-base font-bold leading-tight" itemProp="name">
                  R.R.M External Cleaning
                </span>
                <span className="text-[11px] text-primary-foreground/60 leading-tight">
                  Specialist · Northwest England
                </span>
              </div>
            </Link>

            <address className="not-italic mb-5">
              <div
                className="text-sm text-primary-foreground/70 leading-relaxed mb-4"
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
                <div itemProp="streetAddress">9 Noon Ct</div>
                <div>
                  <span itemProp="addressLocality">Newton-le-Willows</span>,{' '}
                  <span itemProp="postalCode">WA12 8QY</span>
                </div>
                <div itemProp="addressRegion">Merseyside</div>
                <span itemProp="addressCountry" className="sr-only">United Kingdom</span>
              </div>

              <div className="flex flex-col gap-3 text-sm">
                <a
                  href="tel:+447845463877"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors font-medium group"
                  aria-label="Call R.R.M External Cleaning on 07845 463877"
                  itemProp="telephone"
                >
                  <Phone className="h-4 w-4 flex-shrink-0 group-hover:scale-110 transition-transform" aria-hidden="true" />
                  <span>+44 7845 463877</span>
                </a>
                <a
                  href="mailto:rrmexternalcleaning@gmail.com"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors group"
                  aria-label="Email rrmexternalcleaning@gmail.com"
                  itemProp="email"
                >
                  <Mail className="h-4 w-4 flex-shrink-0 group-hover:scale-110 transition-transform" aria-hidden="true" />
                  <span>rrmexternalcleaning@gmail.com</span>
                </a>
                <div className="flex items-center gap-2 text-primary-foreground/70">
                  <Clock className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  <span>Open 24/7 — Call anytime</span>
                </div>
              </div>
            </address>

            <p className="text-sm text-primary-foreground/60 leading-relaxed mb-5" itemProp="description">
              Professional <strong className="text-primary-foreground/80">exterior cleaning specialists</strong> serving
              Newton-le-Willows, Warrington, St Helens, Wigan, and the wider Northwest since 2016.
              Specialists in <strong className="text-primary-foreground/80">pressure washing</strong>,{' '}
              <strong className="text-primary-foreground/80">roof cleaning</strong>,{' '}
              <strong className="text-primary-foreground/80">driveway restoration</strong>, and{' '}
              <strong className="text-primary-foreground/80">gutter clearing</strong>.
            </p>

            {/* Google Reviews CTA */}
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors text-sm"
              aria-label="View our 5-star Google reviews"
            >
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                ))}
              </div>
              <span className="text-primary-foreground/80 font-medium">5.0 on Google</span>
            </a>
          </div>

          {/* ── Services — organised by topical cluster ── */}
          <nav aria-label="Services navigation" className="lg:col-span-5 md:col-span-2">
            <h3 className="font-display text-sm font-semibold mb-4 text-accent uppercase tracking-wide">
              Our Services
            </h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-5">
              {serviceColumns.map((col) => (
                <div key={col.heading}>
                  <p className="text-[11px] font-semibold text-primary-foreground/50 uppercase tracking-wider mb-2">
                    {col.heading}
                  </p>
                  <ul className="space-y-1.5">
                    {col.services.map((s) => (
                      <li key={s.href}>
                        <Link
                          href={s.href}
                          className="text-sm text-primary-foreground/70 hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                        >
                          {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-primary-foreground/10">
              <Link
                href="/services"
                className="text-sm font-semibold text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
              >
                View all 40 services →
              </Link>
            </div>
          </nav>

          {/* ── Service Areas ── */}
          <nav aria-label="Service areas navigation" className="lg:col-span-2">
            <h3 className="font-display text-sm font-semibold mb-4 text-accent uppercase tracking-wide">
              Service Areas
            </h3>
            <ul className="space-y-1.5">
              {allLocations.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                    title={`Exterior cleaning services in ${loc.name}`}
                  >
                    {loc.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-3">
              <Link
                href="/areas"
                className="text-xs font-semibold text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
              >
                All areas we cover →
              </Link>
            </div>
          </nav>

          {/* ── Problems & Surfaces — topical entity columns ── */}
          <div className="lg:col-span-2">

            {/* Common Problems — intent-based internal linking */}
            <nav aria-label="Common exterior problems navigation" className="mb-7">
              <h3 className="font-display text-sm font-semibold mb-4 text-accent uppercase tracking-wide">
                Common Problems
              </h3>
              <ul className="space-y-1.5">
                {problemPages.map((p) => (
                  <li key={p.href}>
                    <Link
                      href={p.href}
                      className="text-sm text-primary-foreground/70 hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                    >
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Surface Types — material expertise signals */}
            <nav aria-label="Surface types navigation">
              <h3 className="font-display text-sm font-semibold mb-4 text-accent uppercase tracking-wide">
                Surface Types
              </h3>
              <ul className="space-y-1.5">
                {surfacePages.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="text-sm text-primary-foreground/70 hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

        </div>

        {/* ── Secondary footer row: resources, social, citations ── */}
        <div className="mt-10 pt-8 border-t border-primary-foreground/10 grid gap-8 md:grid-cols-3">

          {/* Quick links */}
          <nav aria-label="Company links navigation">
            <h3 className="font-display text-sm font-semibold mb-3 text-accent uppercase tracking-wide">
              Company
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              {[
                { name: 'About Us', href: '/about', title: 'About R.R.M External Cleaning Specialist' },
                { name: 'FAQ', href: '/faq', title: 'Frequently asked questions' },
                { name: 'Contact Us', href: '/contact', title: 'Get in touch for a free quote' },
                { name: 'Book a Job', href: '/book', title: 'Book an exterior cleaning visit' },
                { name: 'Privacy Policy', href: '/privacy-policy', title: 'Our privacy policy' },
                { name: 'Terms & Conditions', href: '/terms-conditions', title: 'Terms and conditions' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                    title={link.title}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social media */}
          <div>
            <h3 className="font-display text-sm font-semibold mb-3 text-accent uppercase tracking-wide">
              Follow Our Work
            </h3>
            <div className="flex gap-2.5 mb-4" role="list">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    rel="external noopener noreferrer"
                    className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-primary-foreground/10 text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                    aria-label={`Follow us on ${social.name}: ${social.description}`}
                    title={social.description}
                    role="listitem"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
            <p className="text-xs text-primary-foreground/50 leading-relaxed">
              See before & after transformations, cleaning tips, and local project updates.
            </p>
          </div>

          {/* External authority citations — E-A-T backlink signals */}
          <nav aria-label="Trusted profiles and citations">
            <h3 className="font-display text-sm font-semibold mb-3 text-accent uppercase tracking-wide">
              Find Us Online
            </h3>
            <ul className="space-y-1.5">
              {externalCitations.map((cite) => (
                <li key={cite.name}>
                  <a
                    href={cite.url}
                    rel="external noopener noreferrer"
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                    aria-label={cite.label}
                    title={cite.label}
                  >
                    {cite.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-primary-foreground/50">
            <p>
              © {currentYear}{' '}
              <strong className="text-primary-foreground/70">R.R.M External Cleaning Specialist</strong>.
              All rights reserved.
            </p>
            <p className="text-center text-primary-foreground/40">
              Pressure washing &amp; exterior cleaning in Newton-le-Willows · Warrington · St Helens · Wigan · Northwest England
            </p>
            <p>
              Powered by{' '}
              <a
                href="https://smallbusinessmarketingprofessional.com/"
                rel="external noopener noreferrer"
                className="hover:text-primary-foreground/70 transition-colors underline underline-offset-2"
              >
                Small Business Marketing Professional
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Hidden schema metadata */}
      <meta itemProp="url" content="https://rrmexternalcleaningspecialist.co.uk" />
    </footer>
  );
}
