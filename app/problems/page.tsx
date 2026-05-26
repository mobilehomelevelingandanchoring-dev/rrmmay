import type { Metadata } from 'next';
import ProblemsIndexContent from '@/pageComponents/ProblemsIndex';

const BASE_URL = 'https://rrmexternalcleaningspecialist.co.uk';
const SITE_NAME = 'R.R.M External Cleaning Specialist';

export const metadata: Metadata = {
  title: {
    absolute: 'Exterior Property Problems & Solutions | R.R.M North West',
  },
  description:
    'Moss, algae, lichen, oil stains, black spot mould — R.R.M External Cleaning has the professional solution. Expert exterior property treatments across the North West. Free no-obligation quotes.',
  keywords: [
    'exterior property problems North West',
    'moss removal near me',
    'algae removal exterior surfaces',
    'lichen removal roof tiles',
    'oil stain removal driveway',
    'black spot mould exterior',
    'exterior cleaning solutions North West',
    'property problem treatment Warrington',
    'exterior surface restoration near me',
  ],
  alternates: { canonical: `${BASE_URL}/problems/` },
  openGraph: {
    title: 'Exterior Property Problems & Solutions | R.R.M North West',
    description:
      'Moss, algae, lichen, oil stains, black spot mould, pollution staining — professional exterior treatment across the North West. R.R.M — est. 2016, fully insured. Free quotes.',
    url: `${BASE_URL}/problems/`,
    type: 'website',
    siteName: SITE_NAME,
    locale: 'en_GB',
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Exterior Property Problems & Solutions — R.R.M External Cleaning',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Exterior Property Problems & Solutions | R.R.M',
    description:
      'Professional solutions for moss, algae, lichen, oil stains & more. Exterior property treatment across the North West. Free quotes.',
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
    { '@type': 'ListItem', position: 2, name: 'Exterior Problems', item: `${BASE_URL}/problems/` },
  ],
};

export default function ProblemsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ProblemsIndexContent />
    </>
  );
}
