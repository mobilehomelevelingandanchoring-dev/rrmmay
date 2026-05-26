/**
 * Centralised TypeScript types for R.R.M External Cleaning Specialist
 * Import from '@/types' in all other files
 */

export type Tier = 1 | 2 | 3;

export type ServiceGroup =
  | 'SURFACE_CLEANING'
  | 'DRIVEWAY'
  | 'PATIO_GARDEN'
  | 'ROOF'
  | 'WALLS_RENDER'
  | 'GUTTERS_FASCIAS'
  | 'SPECIALIST'
  | 'COMMERCIAL'
  | 'PROPERTY_MAINTENANCE';

export interface Location {
  slug: string;
  name: string;
  tier: Tier;
  county: string;
  postcodes: string[];
  nearbyHubs: string[];
  spokeLocations: string[];
  description: string;
  propertyTypes: string;
  localChallenges: string;
  localNeighborhoods: string[];
  uniqueAngle: string;
  commercialZones?: string;
  climateNotes: string;
  faqOverrides?: { question: string; answer: string }[];
}

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  surfaces: string[];
  equipment: string;
  method: 'pressure' | 'soft-wash' | 'vacuum' | 'combined' | 'manual' | 'chemical';
  residentialFocus: string;
  commercialFocus: string;
  group: ServiceGroup[];
  relatedServices: string[];
  avgJobDuration: string;
  seasonalNote: string;
}

export interface ContentBlock {
  h1: string;
  metaTitle: string;
  metaDescription: string;
  introSection: { h2: string; body: string };
  serviceSection: {
    h2: string;
    subsections: { h3: string; body: string }[];
  };
  relatedServicesSection: {
    h2: string;
    items: { name: string; href: string; blurb: string }[];
  };
  trustSection: { h2: string; body: string };
  ctaSection: { h2: string; body: string };
  nearbyAreas: {
    text: string;
    links: { label: string; href: string }[];
  };
  faqItems: { question: string; answer: string }[];
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}
