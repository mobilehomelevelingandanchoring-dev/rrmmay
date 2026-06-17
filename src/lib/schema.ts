/**
 * Schema Markup Utilities for SEO
 * Implements structured data for LocalBusiness and Service entities
 */

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://rrmexternalcleaningspecialist.co.uk/#organization',
  name: 'R.R.M External Cleaning Specialist',
  description: 'Professional exterior cleaning services in Newton-le-Willows, Warrington, and Greater Manchester',
  url: 'https://rrmexternalcleaningspecialist.co.uk',
  telephone: '+447845463877',
  email: 'rrmexternalcleaning@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '9 Noon Ct',
    addressLocality: 'Newton-le-Willows',
    addressRegion: 'Merseyside',
    postalCode: 'WA12 8QY',
    addressCountry: 'GB',
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Newton-le-Willows',
    },
    {
      '@type': 'City',
      name: 'Warrington',
    },
    {
      '@type': 'City',
      name: 'Golborne',
    },
    {
      '@type': 'City',
      name: 'Huyton',
    },
    {
      '@type': 'City',
      name: 'Lymm',
    },
    {
      '@type': 'State',
      name: 'Greater Manchester',
    },
  ],
  image: 'https://rrmexternalcleaningspecialist.co.uk/logo.png',
  priceRange: '$$',
  ratingValue: '5',
  foundingDate: '2016',
  sameAs: [
    'https://www.facebook.com/rrmcleaning',
    'https://www.instagram.com/rrmcleaning',
  ],
};

export const serviceSchema = (serviceTitle: string, serviceDescription: string, areaName: string = 'Newton-le-Willows') => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `https://rrmexternalcleaningspecialist.co.uk/services/${serviceTitle.toLowerCase().replace(/\s+/g, '-')}`,
  name: serviceTitle,
  description: serviceDescription,
  provider: {
    '@type': 'LocalBusiness',
    '@id': 'https://rrmexternalcleaningspecialist.co.uk/#organization',
    name: 'R.R.M External Cleaning Specialist',
  },
  areaServed: {
    '@type': 'City',
    name: areaName,
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: `${serviceTitle} Services`,
    itemListElement: {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: serviceTitle,
      },
    },
  },
});

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://rrmexternalcleaningspecialist.co.uk/#organization',
  name: 'R.R.M External Cleaning Specialist',
  url: 'https://rrmexternalcleaningspecialist.co.uk',
  logo: 'https://rrmexternalcleaningspecialist.co.uk/logo.png',
  description: 'Professional exterior cleaning services - pressure washing, driveway cleaning, roof cleaning, gutter cleaning, and more.',
  sameAs: [
    'https://www.facebook.com/rrmcleaning',
    'https://www.instagram.com/rrmcleaning',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    telephone: '+447845463877',
    email: 'rrmexternalcleaning@gmail.com',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '9 Noon Ct',
    addressLocality: 'Newton-le-Willows',
    addressRegion: 'Merseyside',
    postalCode: 'WA12 8QY',
    addressCountry: 'GB',
  },
};

export const videoObjectSchema = (videoId: string, title: string, description: string, uploadDate: string = new Date().toISOString()) => ({
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: title,
  description: description,
  videoUrl: `https://www.youtube.com/watch?v=${videoId}`,
  embedUrl: `https://www.youtube.com/embed/${videoId}`,
  thumbnailUrl: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
  uploadDate: uploadDate,
  duration: 'PT5M',
  provider: {
    '@type': 'Organization',
    '@id': 'https://rrmexternalcleaningspecialist.co.uk/#organization',
    name: 'R.R.M External Cleaning Specialist',
  },
});
