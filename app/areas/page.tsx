import type { Metadata } from 'next';
import AreasIndexContent from '@/pageComponents/AreasIndex';

const BASE_URL = 'https://rrmexternalcleaningspecialist.co.uk';
const SITE_NAME = 'R.R.M External Cleaning Specialist';

export const metadata: Metadata = {
  title: {
    absolute: 'Service Areas Near You | R.R.M Exterior Cleaning',
  },
  description:
    'Exterior cleaning near you across Merseyside, Greater Manchester & Cheshire. R.R.M covers Lowton, Haydock, Earlestown, Burtonwood, Ashton-in-Makerfield, Golborne & surrounding areas.',
  keywords: [
    'exterior cleaning near me',
    'pressure washing near me',
    'exterior cleaning Lowton',
    'exterior cleaning Haydock',
    'exterior cleaning Earlestown',
    'exterior cleaning Burtonwood',
    'exterior cleaning Golborne',
    'exterior cleaning Ashton-in-Makerfield',
    'local exterior cleaning near me',
    'cleaning services near Newton-le-Willows',
  ],
  alternates: { canonical: `${BASE_URL}/areas/` },
  openGraph: {
    title: 'Service Areas Near You | R.R.M Exterior Cleaning',
    description:
      'Exterior cleaning near you across Merseyside, Greater Manchester & Cheshire. Covering Lowton, Haydock, Earlestown, Burtonwood, Golborne & more. Free no-obligation quotes.',
    url: `${BASE_URL}/areas/`,
    type: 'website',
    siteName: SITE_NAME,
    locale: 'en_GB',
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'R.R.M External Cleaning — Service Areas Near You',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Service Areas Near You | R.R.M Exterior Cleaning',
    description:
      'Exterior cleaning near you in Lowton, Haydock, Earlestown, Burtonwood, Golborne & more. Free quotes across the North West.',
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
    { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${BASE_URL}/areas/` },
  ],
};

export default function AreasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AreasIndexContent />
    </>
  );
}
