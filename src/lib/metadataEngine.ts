/**
 * Metadata Engine — generates Next.js Metadata objects for service × location pages
 */

import type { Metadata } from 'next';
import type { Service, Location } from '@/types';

const BASE_URL = 'https://rrmexternalcleaningspecialist.co.uk';
const SITE_NAME = 'R.R.M External Cleaning Specialist';

/** Truncate at the last word boundary so titles never end mid-word */
function truncateAtWord(str: string, max: number): string {
  if (str.length <= max) return str;
  return str.slice(0, max).replace(/\s+\S*$/, '') + '...';
}

export function generatePageMetadata(service: Service, location: Location): Metadata {
  // Keyword-first: "[Service] in [Location] | R.R.M External Cleaning" — ≤60 chars
  const fullTitle = `${service.shortName} in ${location.name} | R.R.M External Cleaning`;
  const title = truncateAtWord(fullTitle, 60);

  // Tier-based description for higher local CTR
  const postcodeHint =
    location.tier === 1 && location.postcodes?.[0]
      ? ` (${location.postcodes[0]} & surrounding areas)`
      : '';

  const fullDesc =
    location.tier === 1
      ? `${service.shortName} in ${location.name}${postcodeHint} from R.R.M — locally based, fully insured, 5-star rated, est. 2016. Free no-obligation quotes. 24/7 availability.`
      : location.tier === 2
        ? `Professional ${service.name.toLowerCase()} in ${location.name}, ${location.county}. R.R.M External Cleaning — fully insured, 5-star rated, est. 2016. Free quotes across ${location.postcodes.slice(0, 2).join(' & ')}.`
        : `${service.shortName} in ${location.name} from R.R.M External Cleaning — based in Newton-le-Willows, serving ${location.county}. Fully insured, est. 2016. Free quote today.`;

  const description = fullDesc.length <= 155 ? fullDesc : truncateAtWord(fullDesc, 152);

  const canonical = `${BASE_URL}/services/${service.slug}/${location.slug}/`;

  return {
    title: { absolute: title },
    description,
    keywords: [
      `${service.shortName.toLowerCase()} ${location.name}`,
      `${service.name.toLowerCase()} ${location.name}`,
      `${service.name.toLowerCase()} ${location.county}`,
      `professional ${service.name.toLowerCase()}`,
      `${service.shortName.toLowerCase()} near me`,
      `exterior cleaning ${location.name}`,
      ...location.postcodes.map((p) => `${service.shortName.toLowerCase()} ${p}`),
    ],
    alternates: {
      canonical,
    },
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
          alt: `${SITE_NAME} — ${title}`,
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

// ─── Per-service SEO overrides (high-converting, locally targeted) ─────────────

interface ServiceIndexOverride {
  title: string;
  description: string;
  keywords: string[];
}

const serviceIndexOverrides: Record<string, ServiceIndexOverride> = {
  'driveway-cleaning': {
    title: 'Affordable Driveway Cleaning Near You | R.R.M',
    description:
      'Oil stains, moss & grime on your driveway? R.R.M External Cleaning Specialist delivers affordable jet washing near Warrington & North West. Book today!',
    keywords: [
      'driveway cleaning near me', 'affordable driveway cleaning',
      'driveway cleaning Warrington', 'driveway cleaning Newton-le-Willows',
      'driveway cleaning Manchester', 'driveway jet washing North West',
      'oil stain removal driveway', 'moss removal driveway',
      'pressure washing driveway', 'block paving cleaning North West',
      'driveway cleaning specialist',
    ],
  },
  'roof-cleaning': {
    title: 'Affordable Roof Cleaning Near You | R.R.M',
    description:
      'Moss & algae destroying your roof tiles? R.R.M offers affordable soft wash roof cleaning across Newton-le-Willows, Warrington & Manchester. Book today!',
    keywords: [
      'roof cleaning near me', 'affordable roof cleaning North West',
      'soft wash roof cleaning Warrington', 'roof moss removal Newton-le-Willows',
      'roof cleaning Manchester', 'roof algae treatment North West',
      'roof tile cleaning', 'moss treatment roof North West',
      'roof cleaning specialist', 'affordable roof soft wash',
    ],
  },
  'patio-cleaning': {
    title: 'Affordable Patio Cleaning Near You | R.R.M',
    description:
      'Green algae, moss & black stains spoiling your patio? R.R.M offers affordable patio jet washing near Warrington, Newton-le-Willows & Manchester. Book today!',
    keywords: [
      'patio cleaning near me', 'affordable patio cleaning North West',
      'patio jet washing Warrington', 'patio cleaning Newton-le-Willows',
      'patio cleaning Manchester', 'patio moss removal', 'patio algae removal',
      'patio pressure washing North West', 'black stain removal patio',
      'patio cleaning specialist North West',
    ],
  },
  'gutter-cleaning': {
    title: 'Affordable Gutter Cleaning Near You | R.R.M',
    description:
      'Blocked gutters causing damp & damage? R.R.M External Cleaning Specialist clears gutters affordably across Newton-le-Willows, Warrington & Manchester. Book now!',
    keywords: [
      'gutter cleaning near me', 'blocked gutters North West',
      'affordable gutter cleaning Warrington', 'gutter cleaning Newton-le-Willows',
      'gutter unblocking Manchester', 'gutter clearing North West',
      'gutter cleaning specialist', 'gutter overflow repair North West',
      'fascia cleaning North West', 'residential gutter cleaning North West',
    ],
  },
  'render-cleaning': {
    title: 'Affordable Render Cleaning & Sealing | R.R.M',
    description:
      "Stained, green or cracked render damaging your home's appearance? R.R.M offers affordable render cleaning & sealing across the North West. Book today!",
    keywords: [
      'render cleaning near me', 'affordable render cleaning North West',
      'render cleaning Warrington', 'render sealing Newton-le-Willows',
      'render cleaning Manchester', 'render moss removal', 'green render cleaning',
      'render restoration North West', 'K-rend cleaning North West',
      'render sealing specialist', 'exterior wall cleaning North West',
    ],
  },
  'render-sealing': {
    title: 'Affordable Render Cleaning & Sealing | R.R.M',
    description:
      "Stained, green or cracked render damaging your home's appearance? R.R.M offers affordable render cleaning & sealing across the North West. Book today!",
    keywords: [
      'render sealing near me', 'affordable render sealing North West',
      'render cleaning and sealing Warrington', 'render sealing Newton-le-Willows',
      'render protection North West', 'K-rend sealing North West',
      'render sealing specialist', 'exterior wall sealing North West',
    ],
  },
  'window-cleaning': {
    title: 'Affordable Window Cleaning Near You | R.R.M',
    description:
      'Grime, bird mess & streaks dulling your windows? R.R.M External Cleaning Specialist offers affordable window cleaning across the North West. Book today!',
    keywords: [
      'window cleaning near me', 'affordable window cleaning North West',
      'window cleaning Warrington', 'window cleaning Newton-le-Willows',
      'window cleaning Manchester', 'residential window cleaning North West',
      'commercial window cleaning North West', 'water-fed pole window cleaning',
      'streak-free window cleaning', 'window cleaning specialist North West',
    ],
  },
  'commercial-exterior-cleaning': {
    title: 'Affordable Commercial Exterior Cleaning | R.R.M',
    description:
      'Grimy facades, stained car parks & blocked gutters costing you clients? R.R.M delivers affordable commercial exterior cleaning across North West. Get a quote!',
    keywords: [
      'commercial exterior cleaning North West', 'commercial pressure washing Warrington',
      'commercial jet washing Manchester', 'commercial building cleaning Newton-le-Willows',
      'affordable commercial cleaning North West', 'car park cleaning North West',
      'commercial gutter cleaning', 'facade cleaning North West',
      'commercial exterior specialist North West', 'industrial cleaning North West',
    ],
  },
  'jet-washing': {
    title: 'Affordable Jet Washing Near You | R.R.M Specialist',
    description:
      'Stubborn grime, stains & algae no match for our professional jet washing. R.R.M offers affordable jet washing services near Warrington & North West. Book today!',
    keywords: [
      'jet washing near me', 'affordable jet washing North West',
      'jet washing Warrington', 'jet washing Newton-le-Willows',
      'jet washing Manchester', 'pressure washing near me',
      'jet wash driveway North West', 'jet wash patio North West',
      'jet wash services North West', 'professional jet washing North West',
      'jet washing specialist',
    ],
  },
};

export function generateServiceIndexMetadata(service: Service): Metadata {
  const override = serviceIndexOverrides[service.slug];

  const title =
    override?.title ??
    truncateAtWord(`${service.name} North West | R.R.M External Cleaning`, 60);

  const fullDesc =
    override?.description ??
    `Professional ${service.name.toLowerCase()} across 21 locations in the North West. R.R.M — fully insured, 5-star rated, est. 2016. Free quotes.`;
  const description = override
    ? fullDesc
    : fullDesc.length <= 155
      ? fullDesc
      : truncateAtWord(fullDesc, 152);

  const canonical = `${BASE_URL}/services/${service.slug}/`;

  return {
    title: { absolute: title },
    description,
    ...(override?.keywords && { keywords: override.keywords }),
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
          alt: `${SITE_NAME} — ${title}`,
        },
      ],
    },
    twitter: { card: 'summary_large_image', title, description },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
  };
}

export function generateServicesPageMetadata(): Metadata {
  const title = 'Exterior Cleaning Services North West | R.R.M External Cleaning';
  const description =
    'All 40 exterior cleaning services across 21 North West locations. R.R.M External Cleaning Specialist — fully insured, 5-star rated, est. 2016, available 24/7. Free quotes.';
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: `${BASE_URL}/services/` },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/services/`,
      type: 'website',
      siteName: SITE_NAME,
      locale: 'en_GB',
      images: [
        {
          url: `${BASE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — Exterior Cleaning Services`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
  };
}
