'use client';

import Link from 'next/link';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ContactInfo } from '@/components/ContactInfo';
import { 
  Droplets, Home, Layers, Wind, Sparkles, Square,
  ArrowRight 
} from 'lucide-react';

const services = [
  {
    icon: Droplets,
    title: 'Pressure Washing',
    description: 'High-powered cleaning for patios, pathways, and hard surfaces. Removes deep-set dirt, moss, and stains effectively.',
    href: '/services/pressure-washing',
  },
  {
    icon: Home,
    title: 'Driveway Cleaning',
    description: 'Restore your driveway to its original condition. We clean block paving, concrete, tarmac, and more.',
    href: '/services/driveway-cleaning',
  },
  {
    icon: Layers,
    title: 'Roof Cleaning',
    description: 'Safe removal of moss, lichen, and algae from roof tiles using low-pressure soft wash techniques.',
    href: '/services/roof-cleaning',
  },
  {
    icon: Wind,
    title: 'Gutter Cleaning',
    description: 'Prevent water damage with professional gutter clearing. We remove debris and ensure proper drainage.',
    href: '/services/gutter-cleaning',
  },
  {
    icon: Sparkles,
    title: 'Window Cleaning',
    description: 'Crystal-clear windows for homes and businesses. Pure water technology for streak-free results.',
    href: '/services/window-cleaning',
  },
  {
    icon: Square,
    title: 'Render Cleaning',
    description: 'Specialist cleaning for rendered walls. Removes algae, pollution stains, and organic growth safely.',
    href: '/services/render-cleaning',
  },
  {
    icon: Wind,
    title: 'Soft Washing',
    description: 'Low-pressure chemical cleaning for delicate surfaces like roofs, render, and brickwork.',
    href: '/services/soft-washing',
  },
  {
    icon: Layers,
    title: 'Moss Removal',
    description: 'Professional moss and algae removal from roofs and outdoor surfaces with long-lasting protection.',
    href: '/services/moss-removal',
  },
  {
    icon: Home,
    title: 'Block Paving Cleaning',
    description: 'Complete block paving restoration including cleaning, weed removal, and professional re-sanding.',
    href: '/services/block-paving-cleaning',
  },
];

export default function ServicesIndex() {
  return (
    <Layout>

      {/* HERO */}
      <section className="hero-bg py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Exterior Cleaning Services Across the North West
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/85 mb-4 leading-relaxed">
              Your driveway, roof, render, gutters, and patio all cleaned by one specialist team —
              R.R.M External Cleaning Specialist has delivered professional exterior cleaning since
              2016 with 47 five-star reviews across the North West.
            </p>
            <p className="text-base text-primary-foreground/75 mb-8 leading-relaxed max-w-2xl">
              We cover 40 services across every surface type. Pick your service below to see
              exactly how we work, what it costs, and how quickly we can reach your property.
            </p>

            <Button variant="hero" size="lg" asChild>
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service, index) => (
              <Link
                key={service.title}
                href={service.href}
                className="group card-elevated relative overflow-hidden h-full flex flex-col p-6 md:p-8"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('/img${index + 1}.png')` }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors z-0" />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full text-primary-foreground">

                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl 
                                  bg-accent/20 backdrop-blur-sm border border-white/20 
                                  text-accent group-hover:bg-accent group-hover:text-white 
                                  transition-colors mb-8">
                    <service.icon className="h-7 w-7" />
                  </div>

                  {/* Title */}
                  <h2 className="font-display text-xl font-bold text-white 
                                 group-hover:text-accent transition-colors mb-4">
                    {service.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-200 leading-relaxed flex-1 mb-6">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center text-sm font-semibold text-white mt-auto">
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>

                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 hero-bg">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
            Not Sure Which Exterior Cleaning Service You Need?
          </h2>

          <p className="text-primary-foreground/85 mb-8 max-w-xl mx-auto">
            Tell us what you&apos;re dealing with — moss on the roof, green render, blocked
            gutters, or a grimy driveway — and we&apos;ll recommend the right approach and
            give you an honest price. No pressure, no upselling.
          </p>

          <Button variant="hero" size="lg" asChild>
            <Link href="/contact">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-secondary/10">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-2">
            Request Your Free Exterior Cleaning Quote
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Call 07845 463877 or fill in the contact form — we&apos;ll get back to you the same day
          and can typically reach your property within the week.
          </p>
          <ContactInfo variant="default" />
        </div>
      </section>
    </Layout>
  );
}
