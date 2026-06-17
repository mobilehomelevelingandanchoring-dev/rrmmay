'use client';

import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { problems } from '@/data/problems';
import { surfaces } from '@/data/surfaces';
import { Layers, MapPin, Wrench, AlertTriangle, Grid3X3 } from 'lucide-react';

const locationClusters: { label: string; slugs: string[] }[] = [
  {
    label: 'Newton-le-Willows — Our Home Base',
    slugs: ['newton-le-willows'],
  },
  {
    label: 'Immediate Neighbours',
    slugs: ['earlestown', 'golborne', 'lowton', 'haydock', 'burtonwood'],
  },
  {
    label: 'Wigan Belt',
    slugs: ['ashton-in-makerfield', 'leigh', 'wigan'],
  },
  {
    label: 'Warrington & Cheshire',
    slugs: ['warrington', 'lymm', 'great-sankey'],
  },
  {
    label: 'Merseyside',
    slugs: [
      'st-helens',
      'widnes',
      'huyton',
      'halewood',
      'woolton',
      'childwall',
      'aigburth',
      'litherland',
      'wavertree',
    ],
  },
  {
    label: 'Greater Manchester & Beyond',
    slugs: ['manchester', 'skelmersdale', 'irlam', 'ormskirk', 'uppermill'],
  },
];

export function TopicalMap() {
  const serviceEntries = services;
  const problemEntries = Object.values(problems);
  const surfaceEntries = Object.values(surfaces);

  return (
    <section
      className="section-padding bg-background"
      aria-labelledby="topical-map-heading"
    >
      <div className="container-custom">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Our Expertise
          </span>
          <h2
            id="topical-map-heading"
            className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Complete Exterior Cleaning Coverage
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From pressure washing to specialist surface treatments, explore
            everything we offer across the North West. Every service, location,
            and problem we solve — all in one place.
          </p>
        </div>

        {/* Accordion Map */}
        <Accordion
          type="multiple"
          defaultValue={['services']}
          className="max-w-3xl mx-auto"
        >
          {/* Services Cluster */}
          <AccordionItem value="services" className="border-border/50 hover:border-accent/30 transition-colors duration-200">
            <AccordionTrigger className="text-base font-display font-semibold hover:no-underline hover:text-accent transition-colors duration-200 py-4">
              <span className="flex items-center gap-2">
                <Wrench className="h-5 w-5 text-accent" aria-hidden="true" />
                Services We Offer
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="grid gap-2 sm:grid-cols-2 pb-2">
                {serviceEntries.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded"
                    >
                      {s.shortName}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Location Clusters */}
          {locationClusters.map((cluster) => {
            const clusterLocations = cluster.slugs
              .map((slug) => locations.find((l) => l.slug === slug))
              .filter(Boolean);
            if (clusterLocations.length === 0) return null;

            const value = `locations-${cluster.slugs[0]}`;
            return (
              <AccordionItem key={value} value={value} className="border-border/50 hover:border-accent/30 transition-colors duration-200">
                <AccordionTrigger className="text-base font-display font-semibold hover:no-underline hover:text-accent transition-colors duration-200 py-4">
                  <span className="flex items-center gap-2">
                    <MapPin
                      className="h-5 w-5 text-accent"
                      aria-hidden="true"
                    />
                    {cluster.label}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="grid gap-2 sm:grid-cols-2 pb-2">
                    {clusterLocations.map((loc) => (
                      <li key={loc.slug}>
                        <Link
                          href={`/locations/${loc.slug}`}
                          className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded"
                        >
                          {loc.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            );
          })}

          {/* Common Problems */}
          <AccordionItem value="problems" className="border-border/50 hover:border-accent/30 transition-colors duration-200">
            <AccordionTrigger className="text-base font-display font-semibold hover:no-underline hover:text-accent transition-colors duration-200 py-4">
              <span className="flex items-center gap-2">
                <AlertTriangle
                  className="h-5 w-5 text-accent"
                  aria-hidden="true"
                />
                Common Problems We Solve
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="grid gap-2 sm:grid-cols-2 pb-2">
                {problemEntries.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/problems/${p.slug}`}
                      className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded"
                    >
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Surface Types */}
          <AccordionItem value="surfaces" className="border-border/50 hover:border-accent/30 transition-colors duration-200">
            <AccordionTrigger className="text-base font-display font-semibold hover:no-underline hover:text-accent transition-colors duration-200 py-4">
              <span className="flex items-center gap-2">
                <Grid3X3
                  className="h-5 w-5 text-accent"
                  aria-hidden="true"
                />
                Surface Types We Clean
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="grid gap-2 sm:grid-cols-2 pb-2">
                {surfaceEntries.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/surfaces/${s.slug}`}
                      className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

      </div>
    </section>
  );
}
