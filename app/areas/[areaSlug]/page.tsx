import type { Metadata } from 'next';
import AreaPageContent from '@/pageComponents/AreaPage';

const BASE_URL = 'https://rrmexternalcleaningspecialist.co.uk';
const SITE_NAME = 'R.R.M External Cleaning Specialist';

const areaMetadata: Record<string, { title: string; description: string; county: string }> = {
  'lowton': {
    title: 'Exterior Cleaning in Lowton, WA3 | R.R.M Specialist',
    description: 'Professional exterior cleaning near Lowton — pressure washing, driveway cleaning, roof soft washing, gutter clearing. R.R.M: est. 2016, fully insured, free quotes (WA3).',
    county: 'Greater Manchester',
  },
  'haydock': {
    title: 'Exterior Cleaning in Haydock, WA11 | R.R.M Specialist',
    description: 'Expert exterior cleaning near Haydock — pressure washing, driveway cleaning, roof cleaning & gutter services. R.R.M: fully insured, est. 2016, free quotes (WA11).',
    county: 'Merseyside',
  },
  'earlestown': {
    title: 'Exterior Cleaning in Earlestown, WA12 | R.R.M',
    description: 'Professional exterior cleaning near Earlestown — driveway cleaning, roof soft washing, gutter clearing. R.R.M: local, est. 2016, fully insured. Free quotes (WA12).',
    county: 'Merseyside',
  },
  'burtonwood': {
    title: 'Exterior Cleaning in Burtonwood, WA5 | R.R.M',
    description: 'Professional exterior cleaning near Burtonwood — pressure washing, driveway & roof cleaning. R.R.M External Cleaning: fully insured, est. 2016. Free no-obligation quotes (WA5).',
    county: 'Cheshire',
  },
  'ashton-in-makerfield': {
    title: 'Exterior Cleaning Ashton-in-Makerfield | R.R.M',
    description: 'Expert exterior cleaning near Ashton-in-Makerfield — pressure washing, driveway cleaning, roof soft washing, gutter services. R.R.M: fully insured, free quotes (WN4).',
    county: 'Greater Manchester',
  },
  'golborne': {
    title: 'Exterior Cleaning in Golborne, WA3 | R.R.M Specialist',
    description: 'Professional exterior cleaning near Golborne — pressure washing, driveway & roof cleaning. R.R.M External Cleaning: est. 2016, fully insured, free no-obligation quotes (WA3).',
    county: 'Greater Manchester',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ areaSlug: string }>;
}): Promise<Metadata> {
  const { areaSlug } = await params;
  const meta = areaMetadata[areaSlug];

  const canonical = `${BASE_URL}/areas/${areaSlug}/`;

  if (!meta) {
    return {
      title: { absolute: 'Exterior Cleaning Near You | R.R.M Specialist' },
      description:
        'Professional exterior cleaning near you — pressure washing, driveway cleaning, roof & gutter services. R.R.M External Cleaning Specialist — est. 2016, fully insured. Free quotes.',
      alternates: { canonical },
      openGraph: {
        title: 'Exterior Cleaning Near You | R.R.M Specialist',
        description: 'Professional exterior cleaning services in your local area. Fully insured, est. 2016. Free no-obligation quotes.',
        url: canonical,
        type: 'website',
        siteName: SITE_NAME,
        locale: 'en_GB',
        images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'R.R.M External Cleaning Specialist' }],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Exterior Cleaning Near You | R.R.M',
        description: 'Professional exterior cleaning in your area. Fully insured, est. 2016. Free quotes.',
        images: [`${BASE_URL}/og-image.png`],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
      },
    };
  }

  return {
    title: { absolute: meta.title },
    description: meta.description,
    keywords: [
      `exterior cleaning near ${areaSlug.replace(/-/g, ' ')}`,
      `pressure washing ${areaSlug.replace(/-/g, ' ')}`,
      `driveway cleaning ${areaSlug.replace(/-/g, ' ')}`,
      `exterior cleaning ${meta.county}`,
      'exterior cleaning near me',
      'pressure washing near me',
    ],
    alternates: { canonical },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonical,
      type: 'website',
      siteName: SITE_NAME,
      locale: 'en_GB',
      images: [
        {
          url: `${BASE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${meta.title} — R.R.M External Cleaning Specialist`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
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
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ areaSlug: string }>;
}) {
  const { areaSlug } = await params;
  return <AreaPageContent params={{ areaSlug }} />;
}
