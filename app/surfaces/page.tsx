import type { Metadata } from 'next';
import SurfacesIndexContent from '@/pageComponents/SurfacesIndex';

const BASE_URL = 'https://rrmexternalcleaningspecialist.co.uk';
const SITE_NAME = 'R.R.M External Cleaning Specialist';

export const metadata: Metadata = {
  title: {
    absolute: 'Cleaning by Surface Type | Block Paving, Render & More',
  },
  description:
    'Professional exterior cleaning matched to your surface. Concrete, block paving, tarmac, render, roof tiles, uPVC, timber & glass. R.R.M External Cleaning — North West specialists. Free quotes.',
  keywords: [
    'exterior cleaning by surface type',
    'concrete cleaning North West',
    'block paving cleaning near me',
    'tarmac cleaning North West',
    'render cleaning near me',
    'roof tile cleaning specialist',
    'uPVC cleaning North West',
    'timber cleaning exterior',
    'surface-specific exterior cleaning',
    'exterior surface cleaning North West',
  ],
  alternates: { canonical: `${BASE_URL}/surfaces/` },
  openGraph: {
    title: 'Exterior Cleaning by Surface Type | R.R.M North West',
    description:
      'Surface-specific exterior cleaning — concrete, block paving, tarmac, render, roof tiles, uPVC, timber, glass. R.R.M External Cleaning Specialist. Free no-obligation quotes across the North West.',
    url: `${BASE_URL}/surfaces/`,
    type: 'website',
    siteName: SITE_NAME,
    locale: 'en_GB',
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Exterior Cleaning by Surface Type — R.R.M External Cleaning Specialist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cleaning by Surface Type | R.R.M External Cleaning',
    description:
      'Surface-specific exterior cleaning — concrete, block paving, tarmac, render, roof tiles, uPVC & more. North West specialists. Free quotes.',
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
    { '@type': 'ListItem', position: 2, name: 'Surface Types', item: `${BASE_URL}/surfaces/` },
  ],
};

export default function SurfacesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SurfacesIndexContent />
    </>
  );
}
