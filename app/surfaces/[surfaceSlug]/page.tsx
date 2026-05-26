import type { Metadata } from 'next';
import { surfaces } from '@/data/surfaces';
import SurfacePageContent from '@/pageComponents/SurfacePage';

const BASE_URL = 'https://rrmexternalcleaningspecialist.co.uk';
const SITE_NAME = 'R.R.M External Cleaning Specialist';

export function generateStaticParams() {
  return Object.keys(surfaces).map((slug) => ({ surfaceSlug: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ surfaceSlug: string }>;
}): Promise<Metadata> {
  const { surfaceSlug } = await params;
  const surface = surfaces[surfaceSlug];
  if (!surface) return {};

  const canonical = `${BASE_URL}/surfaces/${surfaceSlug}/`;

  const title = surface.metaTitle.length <= 60
    ? surface.metaTitle
    : `${surface.displayName} Cleaning | North West Specialist`;

  const description =
    `${surface.metaDescription} Specialist ${surface.name.toLowerCase()} cleaning across Warrington, Newton-le-Willows, St Helens & the North West. Free quotes.`.slice(0, 155);

  return {
    title: { absolute: title },
    description,
    keywords: [
      `${surface.name.toLowerCase()} cleaning North West`,
      `${surface.name.toLowerCase()} cleaning near me`,
      `${surface.name.toLowerCase()} cleaning Warrington`,
      `professional ${surface.name.toLowerCase()} cleaning`,
      `${surface.name.toLowerCase()} restoration North West`,
      'exterior surface cleaning near me',
      'exterior cleaning specialist North West',
    ],
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'article',
      siteName: SITE_NAME,
      locale: 'en_GB',
      images: [
        {
          url: `${BASE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${surface.displayName} Cleaning — R.R.M External Cleaning Specialist`,
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

export default async function SurfacePage({
  params,
}: {
  params: Promise<{ surfaceSlug: string }>;
}) {
  const { surfaceSlug } = await params;
  return <SurfacePageContent params={{ surfaceSlug }} />;
}
