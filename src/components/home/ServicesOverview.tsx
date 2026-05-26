'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Droplets,
  Home,
  Layers,
  Wind,
  Sparkles,
  Square,
  Zap,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Droplets,
    title: 'Pressure Washing',
    description: 'Professional pressure washing for patios, pathways, and hard surfaces. Removes stubborn dirt, moss, algae, and stains with high-powered equipment.',
    href: '/services/pressure-washing',
  },
  {
    icon: Home,
    title: 'Driveway Cleaning',
    description: 'Expert driveway cleaning for block paving, concrete, tarmac, and natural stone. Restore curb appeal and safety with our comprehensive cleaning service.',
    href: '/services/driveway-cleaning',
  },
  {
    icon: Layers,
    title: 'Roof Cleaning',
    description: 'Safe and effective roof cleaning using soft wash techniques. Removes moss, lichen, algae, and weathering from tiles and flat roofs.',
    href: '/services/roof-cleaning',
  },
  {
    icon: Wind,
    title: 'Gutter Cleaning',
    description: 'Professional gutter cleaning and maintenance. Prevents water damage and extends gutter lifespan with thorough debris removal.',
    href: '/services/gutter-cleaning',
  },
  {
    icon: Sparkles,
    title: 'Window Cleaning',
    description: 'Crystal-clear windows for residential and commercial properties. Pure water technology delivers streak-free results every time.',
    href: '/services/window-cleaning',
  },
  {
    icon: Square,
    title: 'Render Cleaning',
    description: 'Specialist rendered wall cleaning. Safely removes algae growth, pollution stains, and organic discoloration from render surfaces.',
    href: '/services/render-cleaning',
  },
  {
    icon: Zap,
    title: 'Jet Washing',
    description: 'High-powered jet washing blasts away years of built-up grime, oil stains, and algae from any hard surface. Fast, thorough, and affordable.',
    href: '/services/jet-washing',
  },
  {
    icon: Layers,
    title: 'Moss Removal',
    description: 'Professional moss and algae removal from roofs, patios, and outdoor surfaces. Prevents regrowth with preventative treatment.',
    href: '/services/moss-removal',
  },
];

export function ServicesOverview() {
  return (
    <section className="section-padding bg-background" aria-labelledby="services-heading">
      <div className="container-custom">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Our Services
          </span>
          <h2 id="services-heading" className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pressure Washing & Exterior Cleaning Services North West
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From <strong>jet washing</strong> and <strong>driveway cleaning</strong> to <strong>roof soft washing</strong> and gutter maintenance,
            R.R.M Exterior Cleaning provides comprehensive exterior cleaning services. Based in Newton-le-Willows, we serve Warrington, St Helens, Widnes, Liverpool, Manchester, Golborne, Huyton, Lymm, Wigan, Skelmersdale, and across Greater Manchester.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative overflow-hidden flex flex-col min-h-[320px] rounded-xl shadow-md hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 transition-all duration-300"
            >
              {/* Background Image */}
              <Image
                src={`/img${index + 1}.png`}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/20 group-hover:from-black/85 group-hover:via-black/55 transition-all duration-300 z-0" />

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full p-6 text-primary-foreground">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/20 backdrop-blur-sm border border-white/20 text-accent group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-200 shadow-sm">
                    <service.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="pt-2">
                    <h3 className="font-display text-lg font-semibold text-white group-hover:text-accent transition-colors duration-200 leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed flex-1">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center text-sm font-semibold text-white/90 group-hover:text-accent transition-all duration-200">
                  <span>{service.title}</span>
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}
