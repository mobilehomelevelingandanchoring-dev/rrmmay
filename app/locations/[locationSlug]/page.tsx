import type { Metadata } from 'next';
import { locations } from '@/data/locations';
import LocationPageContent from '@/pageComponents/LocationPage';

const BASE_URL = 'https://rrmexternalcleaningspecialist.co.uk';
const SITE_NAME = 'R.R.M External Cleaning Specialist';

export function generateStaticParams() {
  return locations.map((l) => ({ locationSlug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locationSlug: string }>;
}): Promise<Metadata> {
  const { locationSlug } = await params;
  const location = locations.find((l) => l.slug === locationSlug);
  if (!location) return {};

  const title =
    location.tier === 1
      ? `Exterior Cleaning ${location.name} | R.R.M External Cleaning Specialist`
      : `Exterior Cleaning in ${location.name}, ${location.county} | R.R.M`;

  const description =
    location.tier === 1
      ? `Professional exterior cleaning in ${location.name} (${location.postcodes.join(', ')}) — pressure washing, driveway, roof, gutter & render cleaning. R.R.M — fully insured, 5-star rated, est. 2016. Free quotes. 24/7 available.`
      : `Professional exterior cleaning services in ${location.name}, ${location.county}. Pressure washing, driveway cleaning, roof & gutter services from R.R.M External Cleaning — fully insured, est. 2016. Free quotes.`;

  const canonical = `${BASE_URL}/locations/${location.slug}/`;

  return {
    title: { absolute: title },
    description,
    keywords: [
      `exterior cleaning ${location.name}`,
      `pressure washing ${location.name}`,
      `driveway cleaning ${location.name}`,
      `roof cleaning ${location.name}`,
      `gutter cleaning ${location.name}`,
      `render cleaning ${location.name}`,
      `patio cleaning ${location.name}`,
      `window cleaning ${location.name}`,
      `exterior cleaning ${location.county}`,
      `cleaning services ${location.name}`,
      `jet washing ${location.name}`,
      `exterior cleaning near me`,
      ...location.postcodes.map((p) => `exterior cleaning ${p}`),
    ],
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'website',
      siteName: SITE_NAME,
      locale: 'en_GB',
      images: [
        {
          url: `${BASE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — Exterior Cleaning in ${location.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
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

export default async function LocationPage({
  params,
}: {
  params: Promise<{ locationSlug: string }>;
}) {
  const { locationSlug } = await params;
  return <LocationPageContent params={{ locationSlug }} />;
}
