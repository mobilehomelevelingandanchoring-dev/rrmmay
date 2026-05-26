import type { Metadata } from 'next';
import ServiceDynamicClient from './ServiceDynamicClient';

const BASE_URL = 'https://rrmexternalcleaningspecialist.co.uk';

// Display names for location slugs
const locationDisplayNames: Record<string, string> = {
  'skelmersdale': 'Skelmersdale',
  'warrington': 'Warrington',
  'liverpool': 'Liverpool',
  'manchester': 'Manchester',
  'st-helens': 'St Helens',
  'widnes': 'Widnes',
  'wigan': 'Wigan',
  'golborne': 'Golborne',
  'huyton': 'Huyton',
  'lymm': 'Lymm',
  'newton-le-willows': 'Newton-le-Willows',
};

// Display names for service slugs
const serviceDisplayNames: Record<string, string> = {
  'pressure-washing': 'Pressure Washing',
  'driveway-cleaning': 'Driveway Cleaning',
  'roof-cleaning': 'Roof Cleaning',
  'patio-cleaning': 'Patio Cleaning',
  'gutter-cleaning': 'Gutter Cleaning',
  'window-cleaning': 'Window Cleaning',
  'render-cleaning': 'Render Cleaning',
  'commercial-exterior-cleaning': 'Commercial Exterior Cleaning',
  'jet-washing': 'Jet Washing',
  'soft-washing': 'Soft Washing',
  'moss-removal': 'Moss Removal',
  'exterior-cleaning': 'Exterior Cleaning',
};

// Metadata for location-specific service pages
// Titles: primary keyword (service + location) first, brand at end. 52–60 chars.
// Descriptions: entity-dense, service + location + trust signals. 148–158 chars.
const locationMeta: Record<string, Record<string, { title: string; description: string }>> = {
  'pressure-washing': {
    'liverpool': {
      title: 'Pressure Washing Liverpool | R.R.M External Cleaning',
      description: 'Pressure washing in Liverpool — driveways, patios & commercial hard surfaces. R.R.M External Cleaning Specialist, fully insured, est. 2016. Free quote: 07845 463877.',
    },
    'warrington': {
      title: 'Pressure Washing Warrington | R.R.M External Cleaning',
      description: 'Pressure washing in Warrington — driveways, patios, paths & commercial surfaces. R.R.M External Cleaning, fully insured, est. 2016. Free quote: 07845 463877.',
    },
  },
  'gutter-cleaning': {
    'skelmersdale': {
      title: 'Gutter Cleaning Skelmersdale | R.R.M External Cleaning',
      description: 'Gutter cleaning in Skelmersdale — blocked gutters & downpipes cleared for homes & businesses. R.R.M, fully insured, est. 2016. Free quote: 07845 463877.',
    },
    'warrington': {
      title: 'Gutter Cleaning Warrington | R.R.M External Cleaning',
      description: 'Gutter cleaning in Warrington — debris removal, downpipe clearing & roofline maintenance. R.R.M, fully insured, est. 2016. Free no-obligation quote: 07845 463877.',
    },
    'liverpool': {
      title: 'Gutter Cleaning Liverpool | R.R.M External Cleaning',
      description: 'Gutter cleaning in Liverpool — residential & commercial blocked gutters cleared. R.R.M External Cleaning Specialist, fully insured, est. 2016. Call 07845 463877.',
    },
    'manchester': {
      title: 'Gutter Cleaning Manchester | R.R.M External Cleaning',
      description: 'Gutter cleaning in Manchester — homes & businesses across Greater Manchester. R.R.M External Cleaning Specialist, fully insured, est. 2016. Call 07845 463877.',
    },
    'st-helens': {
      title: 'Gutter Cleaning St Helens | R.R.M External Cleaning',
      description: 'Gutter cleaning in St Helens — blocked gutters & downpipes cleared using vacuum systems. R.R.M, fully insured, est. 2016. Free quote: 07845 463877.',
    },
    'widnes': {
      title: 'Gutter Cleaning Widnes | R.R.M External Cleaning',
      description: 'Gutter cleaning in Widnes — residential & commercial gutters cleared, downpipes flushed. R.R.M, fully insured, est. 2016. Free quote: 07845 463877.',
    },
    'wigan': {
      title: 'Gutter Cleaning Wigan | R.R.M External Cleaning',
      description: 'Gutter cleaning in Wigan — homes & businesses across Greater Manchester. R.R.M External Cleaning Specialist, fully insured, est. 2016. Call 07845 463877.',
    },
    'golborne': {
      title: 'Gutter Cleaning Golborne | R.R.M External Cleaning',
      description: 'Gutter cleaning in Golborne — blocked gutters cleared using vacuum systems. R.R.M External Cleaning Specialist, fully insured, est. 2016. Call 07845 463877.',
    },
    'huyton': {
      title: 'Gutter Cleaning Huyton | R.R.M External Cleaning',
      description: 'Gutter cleaning in Huyton — residential & commercial gutters cleared by R.R.M. Fully insured, est. 2016. Free no-obligation quote: 07845 463877.',
    },
    'lymm': {
      title: 'Gutter Cleaning Lymm | R.R.M External Cleaning',
      description: 'Gutter cleaning in Lymm, Cheshire — homes & businesses served by R.R.M. Fully insured, est. 2016. Free no-obligation quote: 07845 463877.',
    },
    'newton-le-willows': {
      title: 'Gutter Cleaning Newton-le-Willows | R.R.M Specialist',
      description: 'Gutter cleaning in Newton-le-Willows (WA12) — local specialists, fully insured, est. 2016. Blocked gutters cleared same-week. Free quote: 07845 463877.',
    },
  },
  'exterior-cleaning': {
    'wigan': {
      title: 'Exterior Cleaning Wigan | R.R.M External Cleaning',
      description: 'Exterior cleaning in Wigan — driveways, roofs, render, gutters & patios. R.R.M, fully insured, 40 services, est. 2016. Free quote: 07845 463877.',
    },
    'skelmersdale': {
      title: 'Exterior Cleaning Skelmersdale | R.R.M External Cleaning',
      description: 'Exterior cleaning in Skelmersdale — driveways, roofs, render & gutters cleaned. R.R.M, fully insured, est. 2016. Free no-obligation quote: 07845 463877.',
    },
    'warrington': {
      title: 'Exterior Cleaning Warrington | R.R.M External Cleaning',
      description: 'Exterior cleaning in Warrington — driveways, roofs, render, gutters & patios. R.R.M, fully insured, 47 five-star reviews, est. 2016. Free quote: 07845 463877.',
    },
    'liverpool': {
      title: 'Exterior Cleaning Liverpool | R.R.M External Cleaning',
      description: 'Exterior cleaning in Liverpool — driveways, roofs, render & gutters. R.R.M External Cleaning Specialist, fully insured, est. 2016. Free quote: 07845 463877.',
    },
    'manchester': {
      title: 'Exterior Cleaning Manchester | R.R.M External Cleaning',
      description: 'Exterior cleaning in Manchester — driveways, roofs, render, gutters & patios. R.R.M, fully insured, est. 2016, 47 five-star reviews. Free quote: 07845 463877.',
    },
    'st-helens': {
      title: 'Exterior Cleaning St Helens | R.R.M External Cleaning',
      description: 'Exterior cleaning in St Helens — driveways, render, roofs & gutters. R.R.M External Cleaning Specialist, fully insured, est. 2016. Free quote: 07845 463877.',
    },
    'widnes': {
      title: 'Exterior Cleaning Widnes | R.R.M External Cleaning',
      description: 'Exterior cleaning in Widnes — driveways, render, roofs & gutters. R.R.M External Cleaning Specialist, fully insured, est. 2016. Free quote: 07845 463877.',
    },
    'golborne': {
      title: 'Exterior Cleaning Golborne | R.R.M External Cleaning',
      description: 'Exterior cleaning in Golborne — driveways, render, roofs & gutters cleaned. R.R.M, fully insured, est. 2016. Free no-obligation quote: 07845 463877.',
    },
    'huyton': {
      title: 'Exterior Cleaning Huyton | R.R.M External Cleaning',
      description: 'Exterior cleaning in Huyton — driveways, render, roofs & gutters. R.R.M External Cleaning Specialist, fully insured, est. 2016. Free quote: 07845 463877.',
    },
    'lymm': {
      title: 'Exterior Cleaning Lymm | R.R.M External Cleaning',
      description: 'Exterior cleaning in Lymm, Cheshire — driveways, render, roofs & gutters. R.R.M External Cleaning Specialist, fully insured, est. 2016. Free quote: 07845 463877.',
    },
    'newton-le-willows': {
      title: 'Exterior Cleaning Newton-le-Willows | R.R.M Specialist',
      description: 'Exterior cleaning in Newton-le-Willows (WA12) — driveways, roofs, render & gutters. Local specialists, fully insured, est. 2016. Free quote: 07845 463877.',
    },
  },
};

// Generic service metadata — title (52–60 chars), description (148–158 chars), keywords
// Titles: primary keyword first; no "Affordable" opener (generic/weak signal)
// Descriptions: entity-dense, factual, primary keyword early, soft CTA at end
const serviceMeta: Record<string, { title: string; description: string; keywords: string[] }> = {
  'pressure-washing': {
    // 52 chars
    title: 'Pressure Washing North West | R.R.M Specialist',
    // 155 chars
    description:
      'Pressure washing for driveways, patios & hard surfaces across North West England. R.R.M — hot-water equipment, est. 2016, 47 five-star reviews. Free quote.',
    keywords: [
      'pressure washing near me', 'jet washing North West', 'pressure washing Warrington',
      'pressure washing Newton-le-Willows', 'driveway pressure washing North West',
      'professional pressure washing', 'hot water pressure washing North West',
    ],
  },
  'driveway-cleaning': {
    // 54 chars
    title: 'Driveway Cleaning North West | R.R.M Specialist',
    // 153 chars
    description:
      'Driveway cleaning for block paving, concrete, tarmac & sandstone. R.R.M removes moss, oil stains & algae across the North West. Est. 2016. Free quote.',
    keywords: [
      'driveway cleaning near me', 'driveway cleaning North West',
      'driveway cleaning Warrington', 'driveway cleaning Newton-le-Willows',
      'oil stain removal driveway', 'moss removal driveway', 'block paving cleaning North West',
    ],
  },
  'roof-cleaning': {
    // 52 chars
    title: 'Roof Cleaning North West | R.R.M Soft Wash',
    // 155 chars
    description:
      'Roof cleaning using low-pressure soft wash & biocide — safe for all tile types. R.R.M serves Merseyside, Cheshire & Greater Manchester. Est. 2016. Free quote.',
    keywords: [
      'roof cleaning near me', 'soft wash roof cleaning North West',
      'roof moss removal Warrington', 'roof cleaning Newton-le-Willows',
      'roof cleaning Manchester', 'roof tile cleaning', 'biocide roof treatment North West',
    ],
  },
  'patio-cleaning': {
    // 53 chars
    title: 'Patio Cleaning North West | R.R.M Specialist',
    // 153 chars
    description:
      'Patio cleaning for sandstone, limestone, block paving & concrete. R.R.M removes moss, algae & black staining across the North West. Est. 2016. Free quote.',
    keywords: [
      'patio cleaning near me', 'patio cleaning North West',
      'patio jet washing Warrington', 'patio cleaning Newton-le-Willows',
      'sandstone patio cleaning', 'block paving patio cleaning', 'patio moss removal North West',
    ],
  },
  'gutter-cleaning': {
    // 54 chars
    title: 'Gutter Cleaning North West | R.R.M Specialist',
    // 155 chars
    description:
      'Gutter cleaning for residential & commercial properties across North West England. R.R.M clears blocked gutters & downpipes. Est. 2016. Free no-obligation quote.',
    keywords: [
      'gutter cleaning near me', 'blocked gutters North West',
      'gutter cleaning Warrington', 'gutter cleaning Newton-le-Willows',
      'gutter unblocking Manchester', 'fascia cleaning North West',
      'residential gutter cleaning North West',
    ],
  },
  'window-cleaning': {
    // 54 chars
    title: 'Window Cleaning North West | R.R.M Specialist',
    // 154 chars
    description:
      'Window cleaning with pure water & water-fed pole — streak-free results for homes & businesses. R.R.M covers North West England. Est. 2016. Free no-obligation quote.',
    keywords: [
      'window cleaning near me', 'window cleaning North West',
      'window cleaning Warrington', 'window cleaning Newton-le-Willows',
      'water-fed pole window cleaning', 'commercial window cleaning North West',
      'pure water window cleaning',
    ],
  },
  'render-cleaning': {
    // 57 chars
    title: 'Render Cleaning North West | K-Rend & Monocouche',
    // 155 chars
    description:
      'Render cleaning for K-Rend, monocouche & sand/cement render using low-pressure soft wash & biocide. R.R.M covers the North West. Est. 2016. Free quote.',
    keywords: [
      'render cleaning near me', 'K-Rend cleaning North West',
      'monocouche render cleaning', 'render cleaning Warrington',
      'soft wash render cleaning', 'green render cleaning', 'render sealing North West',
    ],
  },
  'commercial-exterior-cleaning': {
    // 58 chars
    title: 'Commercial Exterior Cleaning North West | R.R.M',
    // 157 chars
    description:
      'Commercial exterior cleaning for car parks, industrial units, retail premises & facades. R.R.M — fully insured, method statements available. North West. Free quote.',
    keywords: [
      'commercial exterior cleaning North West', 'commercial pressure washing Warrington',
      'commercial jet washing Manchester', 'car park cleaning North West',
      'facade cleaning North West', 'industrial cleaning North West',
      'commercial soft washing North West',
    ],
  },
  'jet-washing': {
    // 52 chars
    title: 'Jet Washing North West | R.R.M Specialist',
    // 154 chars
    description:
      'Jet washing for driveways, patios, paths & hard surfaces across North West England. R.R.M — hot-water equipment, est. 2016, 47 five-star reviews. Free quote.',
    keywords: [
      'jet washing near me', 'jet washing North West',
      'jet washing Warrington', 'jet washing Newton-le-Willows',
      'jet washing Manchester', 'jet wash driveway North West',
      'professional jet washing North West', 'hot water jet washing',
    ],
  },
  'soft-washing': {
    // 57 chars
    title: 'Soft Washing North West | Low-Pressure Specialists',
    // 156 chars
    description:
      'Soft washing using biodegradable biocide at low pressure — safe for roofs, render, brickwork & delicate surfaces. R.R.M, North West. Est. 2016. Free quote.',
    keywords: [
      'soft washing North West', 'soft wash roof North West',
      'soft wash render North West', 'low pressure cleaning North West',
      'biocide soft wash', 'soft washing specialist North West',
    ],
  },
  'moss-removal': {
    // 56 chars
    title: 'Moss Removal North West | Biocide Treatment Experts',
    // 154 chars
    description:
      'Moss removal from roofs, driveways & paths using biocide treatment & soft wash. R.R.M covers Merseyside, Cheshire & Greater Manchester. Est. 2016. Free quote.',
    keywords: [
      'moss removal near me', 'moss removal North West',
      'roof moss removal', 'biocidal treatment North West',
      'moss removal driveway', 'moss removal patio North West',
    ],
  },
  'exterior-cleaning': {
    // 57 chars
    title: 'Exterior Cleaning North West | R.R.M Specialist',
    // 155 chars
    description:
      'Exterior cleaning for driveways, roofs, render, gutters & patios across North West England. R.R.M — 40 services, est. 2016, 47 five-star reviews. Free quote.',
    keywords: [
      'exterior cleaning North West', 'exterior cleaning near me',
      'exterior cleaning Warrington', 'exterior cleaning Newton-le-Willows',
      'exterior cleaning Manchester', 'professional exterior cleaning North West',
    ],
  },
};

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const serviceSlug = slug?.[0] || '';
  const locationSlug = slug?.[1];

  // Check for location-specific metadata first
  if (locationSlug && locationMeta[serviceSlug]?.[locationSlug]) {
    const meta = locationMeta[serviceSlug][locationSlug];
    const canonicalUrl = `https://rrmexternalcleaningspecialist.co.uk/services/${serviceSlug}/${locationSlug}`;
    return {
      title: meta.title,
      description: meta.description,
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: meta.title,
        description: meta.description,
        url: canonicalUrl,
        type: 'website',
        locale: 'en_GB',
        siteName: 'R.R.M External Cleaning Specialist',
      },
      twitter: {
        card: 'summary_large_image',
        title: meta.title,
        description: meta.description,
      },
    };
  }

  // Fall back to generic service metadata
  if (serviceMeta[serviceSlug]) {
    const meta = serviceMeta[serviceSlug];
    const canonicalUrl = `https://rrmexternalcleaningspecialist.co.uk/services/${serviceSlug}`;
    return {
      title: meta.title,
      description: meta.description,
      keywords: meta.keywords,
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: meta.title,
        description: meta.description,
        url: canonicalUrl,
        type: 'website',
        locale: 'en_GB',
        siteName: 'R.R.M External Cleaning Specialist',
      },
      twitter: {
        card: 'summary_large_image',
        title: meta.title,
        description: meta.description,
      },
    };
  }

  return {
    title: 'Exterior Cleaning Services | R.R.M Specialist',
    description: 'Professional exterior cleaning by R.R.M External Cleaning Specialist — driveways, roofs, render & gutters across North West England. Free quote: 07845 463877.',
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
    },
  };
}

export default async function ServiceDynamicPage({ params }: PageProps) {
  const { slug } = await params;
  const serviceSlug = slug?.[0] || '';
  const locationSlug = slug?.[1];

  const serviceName = serviceDisplayNames[serviceSlug] || serviceSlug;
  const locationName = locationSlug ? locationDisplayNames[locationSlug] : null;

  // Build page-level JSON-LD schemas (server-rendered)
  const schemas: object[] = [];

  if (locationName) {
    const pageUrl = `${BASE_URL}/services/${serviceSlug}/${locationSlug}`;

    // Service schema referencing root LocalBusiness via @id
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `${serviceName} ${locationName}`,
      description: locationMeta[serviceSlug]?.[locationSlug!]?.description || `Professional ${serviceName.toLowerCase()} service in ${locationName}.`,
      provider: {
        '@id': `${BASE_URL}/#localbusiness`,
      },
      areaServed: {
        '@type': 'City',
        name: locationName,
        containedInPlace: {
          '@type': 'Country',
          name: 'United Kingdom',
        },
      },
      serviceType: serviceName,
      url: pageUrl,
    });

    // BreadcrumbList schema
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: BASE_URL,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: serviceName,
          item: `${BASE_URL}/services/${serviceSlug}`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: locationName,
          item: pageUrl,
        },
      ],
    });

    // VideoObject schema for pages with embedded video
    if (serviceSlug === 'pressure-washing' && locationSlug === 'warrington') {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: 'Professional Pressure Washing and Exterior Cleaning in Warrington by R.R.M External Cleaning Specialist',
        description: 'Watch R.R.M External Cleaning Specialist carry out professional pressure washing and exterior cleaning work in Warrington, Cheshire. This video demonstrates our commercial-grade equipment, careful technique, and quality results on residential and commercial properties.',
        thumbnailUrl: 'https://img.youtube.com/vi/t8QfsOEQrgM/maxresdefault.jpg',
        uploadDate: '2024-01-15',
        embedUrl: 'https://www.youtube.com/embed/t8QfsOEQrgM',
        contentUrl: 'https://www.youtube.com/watch?v=t8QfsOEQrgM',
        publisher: {
          '@id': `${BASE_URL}/#localbusiness`,
        },
        potentialAction: {
          '@type': 'WatchAction',
          target: 'https://www.youtube.com/watch?v=t8QfsOEQrgM',
        },
      });

      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How much does pressure washing cost in Warrington?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Pricing depends on the area size, surface type, and contamination level. A typical residential driveway clean in Warrington starts from around £150, with larger or heavily contaminated areas costing more. We provide free, written quotes after assessing your property.',
            },
          },
          {
            '@type': 'Question',
            name: 'Will pressure washing damage my driveway or patio?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Not when carried out by experienced professionals. We assess every surface before cleaning and select the correct pressure, nozzle, and technique for the material. Block paving, natural stone, concrete, tarmac, and render each require a different approach.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the difference between pressure washing and soft washing?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Pressure washing uses high-pressure water to physically remove contamination from hard surfaces such as driveways, patios, and concrete. Soft washing applies specialist cleaning chemicals at low pressure to treat surfaces that high pressure would damage, such as render, roofing, and painted walls.',
            },
          },
          {
            '@type': 'Question',
            name: 'How often should I have my driveway pressure washed?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "In Warrington's climate, most driveways benefit from annual cleaning. Properties with heavy tree coverage, north-facing surfaces, or persistent shade may need cleaning every six to nine months. Applying a protective sealant after cleaning extends the interval between cleans significantly.",
            },
          },
          {
            '@type': 'Question',
            name: 'Do you re-sand block paving after cleaning?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Pressure washing block paving inevitably displaces some jointing sand. We carry kiln-dried sand and re-fill all joints after cleaning as standard. This is essential for maintaining the structural integrity of the paving.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you offer commercial pressure washing contracts in Warrington?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. We provide scheduled maintenance contracts for commercial properties across Warrington, including business parks, retail units, and industrial estates. Regular cleaning on a monthly, quarterly, or bi-annual schedule keeps premises consistently presentable.',
            },
          },
        ],
      });
    }

    if (serviceSlug === 'pressure-washing' && locationSlug === 'liverpool') {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: 'Professional Pressure Washing and Exterior Cleaning in Liverpool by R.R.M External Cleaning Specialist',
        description: 'Watch R.R.M External Cleaning Specialist carry out professional pressure washing and exterior cleaning work in Liverpool, Merseyside. This video demonstrates our commercial-grade equipment, careful technique, and quality results on residential and commercial properties.',
        thumbnailUrl: 'https://img.youtube.com/vi/t8QfsOEQrgM/maxresdefault.jpg',
        uploadDate: '2024-01-15',
        embedUrl: 'https://www.youtube.com/embed/t8QfsOEQrgM',
        contentUrl: 'https://www.youtube.com/watch?v=t8QfsOEQrgM',
        publisher: {
          '@id': `${BASE_URL}/#localbusiness`,
        },
        potentialAction: {
          '@type': 'WatchAction',
          target: 'https://www.youtube.com/watch?v=t8QfsOEQrgM',
        },
      });

      // FAQPage schema for pressure washing Liverpool
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How much does pressure washing cost in Liverpool?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Prices depend on the size of the area, the surface type, and the level of contamination. A typical residential driveway clean in Liverpool starts from around £150, while larger or heavily contaminated areas cost more. We provide free, written quotes after assessing your property.',
            },
          },
          {
            '@type': 'Question',
            name: 'Will pressure washing damage my driveway or patio?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Not when done professionally. We assess every surface before cleaning and select the correct pressure, nozzle, and technique for the material. Block paving, natural stone, concrete, tarmac, and render all require different approaches.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the difference between pressure washing and soft washing?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Pressure washing uses high-pressure water to physically remove contamination from hard surfaces like driveways, patios, and concrete. Soft washing uses low-pressure application of specialist cleaning chemicals to treat surfaces that high pressure would damage, such as render, roofing, and painted walls.',
            },
          },
          {
            '@type': 'Question',
            name: 'How often should I have my driveway pressure washed?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "In Liverpool's climate, most driveways benefit from annual cleaning. Properties with heavy tree coverage, north-facing surfaces, or persistent shade may need cleaning every six to nine months. Applying a sealant after cleaning extends the interval between cleans significantly.",
            },
          },
          {
            '@type': 'Question',
            name: 'Do you re-sand block paving after cleaning?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Pressure washing block paving inevitably removes some of the jointing sand. We carry kiln-dried sand and re-fill all joints after cleaning as standard. This is essential for maintaining the structural integrity of the paving.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you offer commercial pressure washing contracts in Liverpool?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. We provide scheduled maintenance contracts for commercial properties across Liverpool. Regular cleaning on a monthly, quarterly, or bi-annual basis keeps premises consistently clean and typically costs less per visit than one-off reactive cleans.',
            },
          },
        ],
      });
    }

    if (serviceSlug === 'gutter-cleaning' && locationSlug === 'skelmersdale') {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: 'Professional Gutter Cleaning and Exterior Cleaning in Skelmersdale by R.R.M External Cleaning Specialist',
        description: 'Watch R.R.M External Cleaning Specialist carry out professional gutter cleaning and exterior cleaning work in Skelmersdale, Lancashire. This video demonstrates our equipment, techniques, and the quality of results we deliver on residential and commercial properties.',
        thumbnailUrl: 'https://img.youtube.com/vi/i4B89TGkM5Y/maxresdefault.jpg',
        uploadDate: '2024-01-15',
        embedUrl: 'https://www.youtube.com/embed/i4B89TGkM5Y',
        contentUrl: 'https://www.youtube.com/watch?v=i4B89TGkM5Y',
        publisher: {
          '@id': `${BASE_URL}/#localbusiness`,
        },
        potentialAction: {
          '@type': 'WatchAction',
          target: 'https://www.youtube.com/watch?v=i4B89TGkM5Y',
        },
      });
    }
  } else {
    // Generic service page breadcrumb
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: BASE_URL,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Services',
          item: `${BASE_URL}/services`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: serviceName,
          item: `${BASE_URL}/services/${serviceSlug}`,
        },
      ],
    });
  }

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <ServiceDynamicClient />
    </>
  );
}
