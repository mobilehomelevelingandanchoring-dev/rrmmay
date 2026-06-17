/**
 * Schema Engine — generates JSON-LD structured data for service × location pages
 * Returns a JSON string ready for dangerouslySetInnerHTML
 */

import type { Service, Location, ContentBlock } from '@/types';
import { services } from '@/data/services';

const BASE_URL = 'https://rrmexternalcleaningspecialist.co.uk';
const BUSINESS_NAME = 'R.R.M External Cleaning Specialist';
const PHONE = '+447845463877';
const EMAIL = 'rrmexternalcleaning@gmail.com';

const ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: '9 Noon Ct',
  addressLocality: 'Newton-le-Willows',
  addressRegion: 'Merseyside',
  postalCode: 'WA12 8QY',
  addressCountry: 'GB',
};

const GEO = {
  '@type': 'GeoCoordinates',
  latitude: 53.4575,
  longitude: -2.6729,
};

const SERVICE_AREA = {
  '@type': 'GeoCircle',
  geoMidpoint: {
    '@type': 'GeoCoordinates',
    latitude: 53.4575,
    longitude: -2.6729,
  },
  geoRadius: '40000',
};

// All 40 services as OfferCatalog items
const OFFER_CATALOG_ITEMS = services.map((s) => ({
  '@type': 'Offer',
  itemOffered: {
    '@type': 'Service',
    name: s.name,
    description: s.description,
    url: `${BASE_URL}/services/${s.slug}/`,
  },
}));

function buildLocalBusiness(location: Location): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': `${BASE_URL}/#localbusiness`,
    name: BUSINESS_NAME,
    address: ADDRESS,
    geo: GEO,
    telephone: PHONE,
    email: EMAIL,
    url: BASE_URL,
    foundingDate: '2016',
    priceRange: '££',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    currenciesAccepted: 'GBP',
    paymentAccepted: 'Cash, Bank Transfer, Card',
    serviceArea: SERVICE_AREA,
    areaServed: {
      '@type': 'City',
      name: location.name,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: location.county,
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Exterior Cleaning Services',
      itemListElement: OFFER_CATALOG_ITEMS,
    },
    image: `${BASE_URL}/logo.webp`,
    sameAs: [
      'https://www.facebook.com/rrmcleaning',
      'https://www.instagram.com/rrmcleaning',
    ],
  };
}

function buildServiceSchema(service: Service, location: Location): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${BASE_URL}/services/${service.slug}/${location.slug}/#service`,
    name: service.name,
    description: service.description,
    url: `${BASE_URL}/services/${service.slug}/${location.slug}/`,
    serviceType: 'Exterior Cleaning',
    category: 'Property Maintenance',
    serviceOutput: `Professionally cleaned ${service.surfaces.slice(0, 2).join(' and ')} surfaces, free from moss, algae, biological contamination, and surface staining`,
    audience: {
      '@type': 'Audience',
      audienceType: 'Residential and Commercial Property Owners',
      geographicArea: {
        '@type': 'AdministrativeArea',
        name: location.county,
      },
    },
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${BASE_URL}/#localbusiness`,
      name: BUSINESS_NAME,
      telephone: PHONE,
      address: ADDRESS,
    },
    areaServed: [
      {
        '@type': 'City',
        name: location.name,
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: location.county,
        },
      },
      ...location.postcodes.map((postcode) => ({
        '@type': 'PostalAddress',
        postalCode: postcode,
        addressCountry: 'GB',
      })),
    ],
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${BASE_URL}/services/${service.slug}/${location.slug}/`,
      servicePhone: PHONE,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '47',
      bestRating: '5',
      worstRating: '1',
    },
  };
}

function buildFaqSchema(content: ContentBlock): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

function buildBreadcrumbSchema(
  service: Service,
  location: Location,
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${BASE_URL}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: `${BASE_URL}/services/`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.name,
        item: `${BASE_URL}/services/${service.slug}/`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: location.name,
        item: `${BASE_URL}/services/${service.slug}/${location.slug}/`,
      },
    ],
  };
}

export function generateSchema(
  service: Service,
  location: Location,
  content: ContentBlock,
): string {
  const schemas = [
    buildLocalBusiness(location),
    buildServiceSchema(service, location),
    buildFaqSchema(content),
    buildBreadcrumbSchema(service, location),
  ];
  return JSON.stringify(schemas);
}

// Service index page schema — reuses buildLocalBusiness for full parity with town pages
export function generateServiceIndexSchema(service: Service): string {
  // Use home location context for the hub LocalBusiness schema
  const homeLoc = {
    name: 'Newton-le-Willows',
    county: 'Merseyside',
    slug: 'newton-le-willows',
  } as Location;

  const schemas = [
    buildLocalBusiness(homeLoc),
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.name,
      description: service.description,
      url: `${BASE_URL}/services/${service.slug}/`,
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${BASE_URL}/#localbusiness`,
        name: BUSINESS_NAME,
        telephone: PHONE,
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'North West England',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services/` },
        { '@type': 'ListItem', position: 3, name: service.name, item: `${BASE_URL}/services/${service.slug}/` },
      ],
    },
  ];
  return JSON.stringify(schemas);
}
