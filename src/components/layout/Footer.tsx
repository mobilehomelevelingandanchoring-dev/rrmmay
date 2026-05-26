'use client';

import Link from 'next/link';
import { Droplets, Phone, Mail, Clock, Youtube, Facebook, Instagram } from 'lucide-react';

const services = [
  { name: 'Pressure Washing', href: '/services/pressure-washing' },
  { name: 'Driveway Cleaning', href: '/services/driveway-cleaning' },
  { name: 'Roof Cleaning', href: '/services/roof-cleaning' },
  { name: 'Gutter Cleaning', href: '/services/gutter-cleaning' },
  { name: 'Window Cleaning', href: '/services/window-cleaning' },
  { name: 'Render Cleaning', href: '/services/render-cleaning' },
  { name: 'Soft Washing', href: '/services/soft-washing' },
  { name: 'Moss & Algae Removal', href: '/services/moss-removal' },
];

const areas = [
  { name: 'Newton-le-Willows', href: '/areas/newton-le-willows' },
  { name: 'Warrington', href: '/areas/warrington' },
  { name: 'St Helens', href: '/areas/st-helens' },
  { name: 'Widnes', href: '/areas/widnes' },
  { name: 'Liverpool', href: '/areas/liverpool' },
  { name: 'Manchester', href: '/areas/manchester' },
  { name: 'Golborne', href: '/areas/golborne' },
  { name: 'Huyton', href: '/areas/huyton' },
  { name: 'Lymm', href: '/areas/lymm' },
  { name: 'Wigan', href: '/areas/wigan' },
  { name: 'Skelmersdale', href: '/areas/skelmersdale' },
  { name: 'Greater Manchester', href: '/areas/greater-manchester' },
];

const socialLinks = [
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@R.R.MExternalCleaning',
    icon: Youtube,
    description: 'Watch our pressure washing and exterior cleaning videos and tutorials'
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61556594193490',
    icon: Facebook,
    description: 'Connect with us on Facebook for updates and before/after transformations'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/reel/DOX4E-KiNof/',
    icon: Instagram,
    description: 'Follow our Instagram for stunning exterior cleaning transformations'
  },
];

const externalProfiles = [
  {
    name: 'Pinterest',
    url: 'https://uk.pinterest.com/rrmexternalcleaningspecialist/',
    description: 'Exterior cleaning inspiration and design ideas'
  },
  {
    name: 'Checkatrade',
    url: 'https://www.checkatrade.com/trades/rrmexternalcleaningspecialist',
    description: 'Verified customer reviews and ratings'
  },
  {
    name: 'Yell',
    url: 'https://www.yell.com/biz/r-r-m-external-cleaning-specialist-newton-le-willows-10988371/',
    description: 'Business directory profile'
  },
  {
    name: 'Blog',
    url: 'https://rrmexternalcleaningspecialists.blogspot.com/',
    description: 'Expert tips and exterior cleaning guides'
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-primary text-primary-foreground"
      role="contentinfo"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <div className="container-custom section-padding">

        {/* Main Footer Content */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">

          {/* Company Info & Contact */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground group-hover:scale-110 group-hover:shadow-lg transition-all duration-200">
                <Droplets className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold leading-tight">
                  R.R.M
                </span>
                <span className="text-xs text-primary-foreground/70 leading-tight">
                  External Cleaning
                </span>
              </div>
            </Link>

            <address className="not-italic">
              <div className="mb-6">
                <p className="font-semibold text-sm mb-1" itemProp="name">
                  R.R.M External Cleaning Specialist
                </p>
                <div className="text-sm text-primary-foreground/80 leading-relaxed" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <div itemProp="streetAddress">9 Noon Ct</div>
                  <div>
                    <span itemProp="addressLocality">Newton-le-Willows</span>,
                    <span itemProp="postalCode"> WA12 8QY</span>
                  </div>
                  <div itemProp="addressCountry" className="hidden">United Kingdom</div>
                </div>
              </div>

              <div className="flex flex-col gap-4 text-sm">
                <a
                  href="tel:+447845463877"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors duration-200 font-medium group"
                  aria-label="Call R.R.M External Cleaning Specialist on 07845 463877"
                  itemProp="telephone"
                >
                  <Phone className="h-4 w-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" aria-hidden="true" />
                  <span>+44 7845 463877</span>
                </a>

                <a
                  href="mailto:rrmexternalcleaning@gmail.com"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors duration-200 group"
                  aria-label="Email us at rrmexternalcleaning@gmail.com"
                  itemProp="email"
                >
                  <Mail className="h-4 w-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" aria-hidden="true" />
                  <span>rrmexternalcleaning@gmail.com</span>
                </a>

                <div className="flex items-center gap-2 text-primary-foreground/80">
                  <Clock className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  <div className="text-sm">
                    <div>Open 24/7</div>
                  </div>
                </div>
              </div>
            </address>

            <p className="text-sm text-primary-foreground/70 mt-6 leading-relaxed" itemProp="description">
              Professional <strong>pressure washing</strong>, <strong>driveway cleaning</strong>, and <strong>exterior cleaning</strong> services across the North West since 2016.
              Specializing in roof soft washing, gutter cleaning, window cleaning, and more.
            </p>
          </div>

          {/* Services */}
          <nav aria-label="Services footer navigation" className="lg:col-span-1">
            <h3 className="font-display text-base font-semibold mb-4 text-accent">Our Services</h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-1"
                    title={`Professional ${service.name} in Newton-le-Willows and Greater Manchester`}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Service Areas */}
          <nav aria-label="Service areas footer navigation" className="lg:col-span-1">
            <h3 className="font-display text-base font-semibold mb-4 text-accent">Service Areas</h3>
            <ul className="space-y-2.5">
              {areas.map((area) => (
                <li key={area.name}>
                  <Link
                    href={area.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-1"
                    title={`Pressure washing and exterior cleaning services in ${area.name}`}
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Quick Links */}
          <nav aria-label="Quick links footer navigation" className="lg:col-span-1">
            <h3 className="font-display text-base font-semibold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2.5 mb-8">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-1"
                  title="Learn about R.R.M External Cleaning"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-1"
                  title="Frequently asked questions about our services"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-1"
                  title="Contact R.R.M External Cleaning for a free quote"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-1"
                  title="Browse all exterior cleaning services"
                >
                  All Services
                </Link>
              </li>
              <li>
                <Link
                  href="/problems"
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-1"
                  title="Solutions for common exterior problems"
                >
                  Exterior Problems
                </Link>
              </li>
            </ul>

            {/* Social Icons */}
            <h3 className="font-display text-base font-semibold mb-3 text-accent">Follow Us</h3>
            <div className="flex gap-3" role="list">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    rel="external noopener noreferrer"
                    className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-primary-foreground/10 text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-110 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                    aria-label={`Follow us on ${social.name}: ${social.description}`}
                    title={social.description}
                    role="listitem"
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </nav>

          {/* Trusted Profiles */}
          <nav aria-label="External profiles footer navigation" className="lg:col-span-1">
            <h3 className="font-display text-base font-semibold mb-4 text-accent">Trusted By</h3>
            <ul className="space-y-2.5">
              {externalProfiles.map((profile) => (
                <li key={profile.name}>
                  <a
                    href={profile.url}
                    rel="external noopener noreferrer"
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-1"
                    title={profile.description}
                    aria-label={`Visit our ${profile.name} profile: ${profile.description}`}
                  >
                    {profile.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Bar with Divider */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {currentYear} <strong>R.R.M External Cleaning Specialist</strong>. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-accent transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-1">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="hover:text-accent transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-1">
                Terms & Conditions
              </Link>
            </div>
            <p>Professional exterior cleaning since 2016</p>
          </div>
        </div>
      </div>

      {/* Hidden metadata for SEO */}
      <meta itemProp="url" content="https://rrmexternalcleaningspecialist.co.uk" />
    </footer>
  );
}
