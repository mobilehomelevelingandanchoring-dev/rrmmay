export const generateAreaSchema = (areaName: string, areaSlug: string) => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `https://rrmexternalcleaningspecialist.co.uk/areas/${areaSlug}/#localbusiness`,
  name: `R.R.M External Cleaning - ${areaName}`,
  description: `Professional pressure washing and exterior cleaning services in ${areaName}`,
  url: `https://rrmexternalcleaningspecialist.co.uk/areas/${areaSlug}`,
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
  areaServed: {
    '@type': 'City',
    name: areaName,
  },
  image: 'https://rrmexternalcleaningspecialist.co.uk/logo.webp',
  priceRange: '$$',
  foundingDate: '2016',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    ratingCount: '1',
  },
  sameAs: [
    'https://www.facebook.com/rrmcleaning',
    'https://www.instagram.com/rrmcleaning',
  ],
});

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const generateServiceSchema = (serviceName: string, areaName: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: `${serviceName} in ${areaName}`,
  provider: {
    '@type': 'LocalBusiness',
    name: 'R.R.M External Cleaning Specialist',
    url: 'https://rrmexternalcleaningspecialist.co.uk',
  },
  areaServed: {
    '@type': 'City',
    name: areaName,
  },
  serviceType: serviceName,
});
