import type { Metadata } from 'next';
import LocationsIndexContent from '@/pageComponents/LocationsIndex';

const BASE_URL = 'https://rrmexternalcleaningspecialist.co.uk';
const SITE_NAME = 'R.R.M External Cleaning Specialist';

export const metadata: Metadata = {
  title: {
    absolute: 'Service Locations | Exterior Cleaning Near You | R.R.M',
  },
  description:
    'Find exterior cleaning services near you across the North West. R.R.M covers 21 locations — Warrington, Newton-le-Willows, St Helens, Widnes, Leigh, Manchester, Liverpool & more. Free quotes.',
  keywords: [
    'exterior cleaning near me',
    'exterior cleaning locations North West',
    'exterior cleaning Warrington',
    'exterior cleaning Newton-le-Willows',
    'exterior cleaning St Helens',
    'exterior cleaning Widnes',
    'exterior cleaning Manchester',
    'exterior cleaning Leigh',
    'exterior cleaning Merseyside',
    'local exterior cleaning specialist',
    'pressure washing near me',
    'driveway cleaning near me',
  ],
  alternates: { canonical: `${BASE_URL}/locations/` },
  openGraph: {
    title: 'Service Locations | Exterior Cleaning Near You | R.R.M',
    description:
      'Find exterior cleaning near you across the North West. R.R.M covers Warrington, Newton-le-Willows, St Helens, Widnes, Leigh, Manchester, Liverpool & 15 more locations. Free quotes.',
    url: `${BASE_URL}/locations/`,
    type: 'website',
    siteName: SITE_NAME,
    locale: 'en_GB',
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'R.R.M External Cleaning Service Locations — North West England',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Exterior Cleaning Locations Near You | R.R.M North West',
    description:
      '21 locations covered across the North West. Warrington, Newton-le-Willows, St Helens, Manchester & more. Free no-obligation quotes.',
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

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Service Locations', item: `${BASE_URL}/locations/` },
  ],
};

export default function LocationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <LocationsIndexContent />
    </>
  );
}
