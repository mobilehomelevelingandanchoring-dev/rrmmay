import type { Metadata } from 'next';
import ServicesIndexContent from '@/pageComponents/ServicesIndex';

const BASE_URL = 'https://rrmexternalcleaningspecialist.co.uk';
const SITE_NAME = 'R.R.M External Cleaning Specialist';

export const metadata: Metadata = {
  title: {
    absolute: 'Exterior Cleaning Services North West | R.R.M Specialist',
  },
  description:
    '40 professional exterior cleaning services across the North West — pressure washing, driveway cleaning, roof soft washing, gutter clearing, render cleaning & more. R.R.M — fully insured, est. 2016. Free quotes.',
  keywords: [
    'exterior cleaning services North West',
    'pressure washing services near me',
    'driveway cleaning services North West',
    'roof cleaning services Warrington',
    'gutter cleaning near me',
    'render cleaning North West',
    'patio cleaning services near me',
    'jet washing services North West',
    'exterior cleaning specialist near me',
    'professional exterior cleaning',
  ],
  alternates: { canonical: `${BASE_URL}/services/` },
  openGraph: {
    title: 'Exterior Cleaning Services North West | 40 Services | R.R.M',
    description:
      '40 professional exterior cleaning services across 21 North West locations. Pressure washing, driveway cleaning, roof cleaning, gutters, render & more. R.R.M — fully insured, est. 2016. Free quotes.',
    url: `${BASE_URL}/services/`,
    type: 'website',
    siteName: SITE_NAME,
    locale: 'en_GB',
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Exterior Cleaning Services — R.R.M External Cleaning Specialist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Exterior Cleaning Services | 40 Services | R.R.M North West',
    description:
      '40 professional exterior cleaning services across the North West. Pressure washing, driveway, roof, gutters, render & more. Free quotes.',
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
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services/` },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicesIndexContent />
    </>
  );
}
