import type { Metadata } from 'next';
import ContactPageContent from '@/pageComponents/Contact';

const BASE_URL = 'https://rrmexternalcleaningspecialist.co.uk';
const SITE_NAME = 'R.R.M External Cleaning Specialist';

export const metadata: Metadata = {
  title: {
    absolute: 'Contact R.R.M External Cleaning | Free Quote North West',
  },
  description:
    'Get a free no-obligation quote for exterior cleaning near you. Call 07845 463877 or email us. R.R.M External Cleaning — serving Warrington, Newton-le-Willows, St Helens & North West. Available 24/7.',
  keywords: [
    'contact exterior cleaning North West',
    'free quote exterior cleaning near me',
    'exterior cleaning quote Warrington',
    'exterior cleaning quote Newton-le-Willows',
    'book exterior cleaning North West',
    'exterior cleaning contact number',
    'free no-obligation cleaning quote',
    'pressure washing near me quote',
  ],
  alternates: { canonical: `${BASE_URL}/contact/` },
  openGraph: {
    title: 'Contact R.R.M External Cleaning | Free Quote North West',
    description:
      'Get a free no-obligation quote for exterior cleaning near you. Call 07845 463877 or email us. Serving Warrington, Newton-le-Willows, St Helens & the wider North West. Available 24/7.',
    url: `${BASE_URL}/contact/`,
    type: 'website',
    siteName: SITE_NAME,
    locale: 'en_GB',
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Contact R.R.M External Cleaning Specialist — Free Quotes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact R.R.M External Cleaning | Free Quote',
    description:
      'Free no-obligation exterior cleaning quotes. Call 07845 463877. Serving Warrington, Newton-le-Willows, St Helens & the North West.',
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

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${BASE_URL}/contact/`,
  name: 'Contact R.R.M External Cleaning Specialist',
  description: 'Contact page for R.R.M External Cleaning Specialist. Request a free no-obligation quote for exterior cleaning services across the North West.',
  url: `${BASE_URL}/contact/`,
  mainEntity: {
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': `${BASE_URL}/#localbusiness`,
    name: SITE_NAME,
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
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: { '@type': 'GeoCoordinates', latitude: 53.4575, longitude: -2.6729 },
      geoRadius: '40000',
    },
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: `${BASE_URL}/contact/` },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([contactSchema, breadcrumbSchema]) }}
      />
      <ContactPageContent />
    </>
  );
}
