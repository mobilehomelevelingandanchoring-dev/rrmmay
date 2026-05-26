import type { Metadata } from 'next';
import AboutPageContent from '@/pageComponents/About';

const BASE_URL = 'https://rrmexternalcleaningspecialist.co.uk';
const SITE_NAME = 'R.R.M External Cleaning Specialist';

export const metadata: Metadata = {
  title: {
    absolute: 'About R.R.M External Cleaning | Est. 2016, North West',
  },
  description:
    'R.R.M External Cleaning Specialist — founded 2016, Newton-le-Willows. Fully insured, no subcontracting, 5-star rated. Professional exterior cleaning across Merseyside, Greater Manchester & Cheshire.',
  keywords: [
    'about RRM External Cleaning Specialist',
    'exterior cleaning specialist North West',
    'professional exterior cleaning company Newton-le-Willows',
    'exterior cleaning Merseyside',
    'fully insured exterior cleaning North West',
    'local exterior cleaning specialist',
    'established exterior cleaning company 2016',
    'RRM External Cleaning about us',
  ],
  alternates: { canonical: `${BASE_URL}/about/` },
  openGraph: {
    title: 'About R.R.M External Cleaning Specialist | Est. 2016',
    description:
      'Founded 2016 in Newton-le-Willows. Fully insured, no subcontracting, 5-star rated exterior cleaning across Merseyside, Greater Manchester & Cheshire. Free no-obligation quotes.',
    url: `${BASE_URL}/about/`,
    type: 'website',
    siteName: SITE_NAME,
    locale: 'en_GB',
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'About R.R.M External Cleaning Specialist — Est. 2016, Newton-le-Willows',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About R.R.M External Cleaning Specialist',
    description:
      'Founded 2016 in Newton-le-Willows. Fully insured exterior cleaning across Merseyside, Greater Manchester & Cheshire. Free no-obligation quotes.',
    images: [`${BASE_URL}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

// Organization schema for E-E-A-T and LLM entity recognition
const orgSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
  '@id': `${BASE_URL}/#organization`,
  name: SITE_NAME,
  url: BASE_URL,
  foundingDate: '2016',
  foundingLocation: {
    '@type': 'Place',
    name: 'Newton-le-Willows',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Newton-le-Willows',
      addressRegion: 'Merseyside',
      postalCode: 'WA12',
      addressCountry: 'GB',
    },
  },
  description:
    'R.R.M External Cleaning Specialist is a professional exterior cleaning company established in 2016, based in Newton-le-Willows, Merseyside. We provide 40 exterior cleaning services across 21 locations in the North West including Warrington, St Helens, Manchester, Liverpool, Widnes, and Leigh. Fully insured, no subcontracting, available 24/7.',
  telephone: '+447845463877',
  email: 'rrmexternalcleaning@gmail.com',
  slogan: 'Professional Exterior Cleaning — North West England',
  knowsAbout: [
    'Pressure Washing', 'Soft Wash Cleaning', 'Driveway Cleaning', 'Roof Cleaning',
    'Gutter Clearing', 'Render Cleaning', 'Patio Cleaning', 'Window Cleaning',
    'Exterior Property Maintenance', 'Biocide Treatment',
  ],
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: { '@type': 'GeoCoordinates', latitude: 53.4575, longitude: -2.6729 },
    geoRadius: '40000',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '47',
    bestRating: '5',
  },
  sameAs: [
    'https://www.facebook.com/rrmcleaning',
    'https://www.instagram.com/rrmcleaning',
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'About Us', item: `${BASE_URL}/about/` },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([orgSchema, breadcrumbSchema]) }}
      />
      <AboutPageContent />
    </>
  );
}
