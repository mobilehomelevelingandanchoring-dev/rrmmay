'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu, Phone, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Locations', href: '/locations' },
  { name: 'Problems', href: '/problems' },
  { name: 'Surfaces', href: '/surfaces' },
  { name: 'Areas We Cover', href: '/areas' },
  { name: 'About Us', href: '/about' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

const googleReviewsUrl =
  'https://www.google.com/maps/search/?api=1&query=R+R+M+External+Cleaning+Specialist+Newton-le-Willows+Merseyside+UK';

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border/50 shadow-sm">
      <nav className="container-custom" aria-label="Main navigation">

        <div className="flex items-center justify-between h-20 lg:h-24">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <Image
              src="/logo.webp"
              alt="R.R.M External Cleaning Logo"
              width={80}
              height={80}
              priority
              fetchPriority="high"
              className="h-14 sm:h-16 lg:h-20 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                  'after:absolute after:bottom-1 after:left-3 after:right-3 after:h-0.5 after:rounded-full after:transition-all after:duration-200 after:origin-center',
                  pathname === item.href
                    ? 'text-accent bg-accent/10 after:bg-accent after:scale-x-100'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted after:bg-accent after:scale-x-0 hover:after:scale-x-100'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-4">

            {/* Google Reviews */}
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col bg-white px-3 py-2 rounded-lg border border-border hover:shadow-md hover:border-border/80 transition-all duration-200"
            >
              <div className="flex items-center gap-0.5 text-xs font-bold">
                <span style={{ color: '#4285F4' }}>G</span>
                <span style={{ color: '#EA4335' }}>o</span>
                <span style={{ color: '#FBBC05' }}>o</span>
                <span style={{ color: '#4285F4' }}>g</span>
                <span style={{ color: '#34A853' }}>l</span>
                <span style={{ color: '#EA4335' }}>e</span>
                <span className="ml-1 text-muted-foreground font-semibold">Rating</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm font-bold mr-1">5.0</span>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </a>

            {/* Call */}
            <a
              href="tel:+447845463877"
              className="inline-flex items-center min-h-[44px] px-5 py-2.5 bg-accent text-accent-foreground text-sm font-semibold rounded-lg hover:bg-accent/90 hover:shadow-md transition-all duration-200"
            >
              <Phone className="h-4 w-4 mr-2" aria-hidden="true" />
              Call Us
            </a>

            {/* CTA */}
            <Button variant="highlight" asChild>
              <Link href="/contact">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu (Sheet) */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden h-11 w-11 hover:bg-muted"
                aria-label="Open navigation menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[360px] p-0 flex flex-col">
              <SheetHeader className="px-6 py-5 border-b border-border">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <Link href="/" className="flex items-center gap-3">
                  <Image
                    src="/logo.webp"
                    alt="R.R.M External Cleaning Logo"
                    width={56}
                    height={56}
                    className="h-14 w-auto"
                  />
                </Link>
              </SheetHeader>

              <nav className="flex flex-col p-4 gap-1 flex-1 overflow-y-auto" aria-label="Mobile navigation">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'flex items-center px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 min-h-[44px]',
                      pathname === item.href
                        ? 'text-accent bg-accent/10 font-semibold'
                        : 'text-foreground hover:bg-muted hover:text-accent'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              <div className="px-4 py-5 border-t border-border space-y-3">
                <a
                  href="tel:+447845463877"
                  className="flex items-center justify-center gap-2 w-full min-h-[44px] px-5 py-3 bg-accent text-accent-foreground text-sm font-semibold rounded-lg hover:bg-accent/90 hover:shadow-md transition-all duration-200"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call Us
                </a>
                <Button variant="highlight" size="lg" className="w-full" asChild>
                  <Link href="/contact">Book Now</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>

        </div>
      </nav>
    </header>
  );
}
