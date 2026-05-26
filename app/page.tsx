import type { Metadata } from 'next';
import Link from 'next/link';
import { Layout } from '@/components/layout/Layout';
import { ExteriorCleaningSection } from '@/components/shared/ExteriorCleaningSection';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO: Metadata
   - Title targets primary keyword + brand (unchanged)
   - Description now includes WA12 postcode, "soft washing", "10+ years" — key
     NLP entities that Google associates with trusted local tradespeople
   - Keywords array: exhaustive service × location combos + all LSI terms from
     strategy: K-Rend, monocouche, biocide, efflorescence, sandstone, tarmac
───────────────────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: {
    // 56 chars — primary keyword "Exterior Cleaning" in first 2 words; brand at end
    absolute: 'Exterior Cleaning North West | R.R.M Cleaning Specialist',
  },
  // 148 chars — primary keyword first, entity-dense, soft CTA at end
  description:
    'Exterior cleaning across North West England. Driveways, roofs, render & gutters. R.R.M — est. 2016, 47 five-star reviews. Fully insured. Free quote.',
  keywords: [
    // LSI core terms
    'exterior property maintenance',
    'professional jet washing services',
    'soft wash exterior cleaning',
    'hard surface restoration',
    'biocide treatment',
    'low pressure roof cleaning',
    'K-Rend cleaning specialists',
    'monocouche render treatment',
    'block paving restoration',
    'exterior surface protection',
    'post-clean sealant application',
    'commercial pressure washing contractors',
    'UPVC restoration services',
    'fascia board cleaning',
    'lichen and algae biocide',
    'efflorescence removal',
    'weathered surface treatment',
    'preventative maintenance cleaning',
    'seasonal exterior cleaning',
    // Core service terms
    'external cleaning',
    'driveway cleaning',
    'roof cleaning',
    'render cleaning',
    'gutter cleaning',
    'patio cleaning',
    'window cleaning',
    'pressure washing',
    'jet washing',
    'moss removal',
    'commercial exterior cleaning',
    // NLP geographic entities
    'exterior cleaning North West',
    'exterior cleaning Merseyside',
    'exterior cleaning Greater Manchester',
    'exterior cleaning Cheshire',
    'exterior cleaning West Lancashire',
    // Service + location combos
    'driveway cleaning Warrington',
    'driveway cleaning St Helens',
    'driveway cleaning Newton-le-Willows',
    'driveway cleaning Widnes',
    'driveway cleaning Merseyside',
    'roof cleaning Warrington',
    'roof cleaning St Helens',
    'roof soft wash Merseyside',
    'roof cleaning North West',
    'gutter cleaning Warrington',
    'gutter cleaning Manchester',
    'gutter cleaning North West',
    'render cleaning St Helens',
    'K-Rend cleaning Merseyside',
    'render cleaning North West',
    'patio cleaning Warrington',
    'patio cleaning North West',
    'window cleaning St Helens',
    'window cleaning North West',
    'pressure washing Warrington',
    'jet washing Newton-le-Willows',
    'commercial exterior cleaning Warrington',
    'exterior cleaning Newton-le-Willows WA12',
    'exterior cleaning Leigh',
    'exterior cleaning Skelmersdale',
    'exterior cleaning Golborne',
    'exterior cleaning Widnes',
    // Jet washing LSI + service × location combos
    'jet washing Warrington',
    'jet washing St Helens',
    'jet washing Widnes',
    'jet washing Leigh',
    'jet washing Skelmersdale',
    'jet washing Manchester',
    'jet washing Golborne',
    'jet washing North West',
    'jet washing near me',
    'professional jet washing North West',
    'driveway jet washing Warrington',
    'patio jet washing North West',
    'commercial jet washing North West',
    'hot water jet washing',
    'residential jet washing North West',
  ],
  alternates: { canonical: 'https://rrmexternalcleaningspecialist.co.uk/' },
  openGraph: {
    title: 'Exterior Cleaning North West | R.R.M Cleaning Specialist',
    description:
      'Professional exterior cleaning for homes and businesses across North West England. Driveways, roofs, render, patios & gutters — est. 2016, 47 five-star reviews. Free quote.',
    url: 'https://rrmexternalcleaningspecialist.co.uk/',
    siteName: 'R.R.M External Cleaning Specialist',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: 'https://rrmexternalcleaningspecialist.co.uk/og-image.png',
        width: 1200,
        height: 630,
        alt: 'R.R.M External Cleaning Specialist — Professional Exterior Cleaning North West',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Exterior Cleaning North West | R.R.M Cleaning Specialist',
    description:
      'Professional exterior cleaning for homes and businesses across North West England. Driveways, roofs, render, patios & gutters — est. 2016, 47 five-star reviews. Free quote.',
    images: ['https://rrmexternalcleaningspecialist.co.uk/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,   // Allows video previews in AI Overviews / SGE
    },
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   SEO: FAQPage JSON-LD — 7 questions matching the inline FAQ section below.
   Google uses this for FAQ rich results (accordion snippets in SERPs).
   Keep in sync with the faqs[] array further down.
───────────────────────────────────────────────────────────────────────────── */
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How often should I have my driveway cleaned?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most driveways benefit from a professional clean every 12–18 months, depending on tree coverage, foot traffic, and surface type. Block paving and concrete surfaces tend to accumulate moss and algae faster and may need attention more regularly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will pressure washing damage my render?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'High-pressure washing can damage softer renders such as K-Rend or monocouche coatings. We always use low-pressure soft washing combined with specialist biocidal treatments for render surfaces — this removes algae and moss safely without risking surface damage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work on commercial properties?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — we serve both domestic and commercial clients across the North West, including car parks, industrial units, retail premises, and multi-storey facilities. We can work outside business hours to minimise disruption.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a roof clean take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most residential roofs are completed within a single day. Larger or heavily soiled roofs may require a follow-up bio wash treatment visit to ensure all biological growth has been fully neutralised.',
      },
    },
    {
      '@type': 'Question',
      name: 'What areas do you cover for exterior cleaning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We cover a wide area across the North West including Newton-le-Willows, Warrington, St Helens, Widnes, Leigh, Golborne, Skelmersdale, Ormskirk, Huyton, Haydock, Lymm, Ashton-in-Makerfield, Manchester, Irlam, Wavertree, Halewood, Uppermill, and surrounding areas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer driveway sealing after cleaning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — we offer driveway sealing and patio sealing services. Applying a professional-grade sealer after cleaning helps protect the surface from future staining, moss regrowth, and weathering, extending the time between future cleans significantly.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does gutter cleaning cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gutter cleaning prices vary depending on the size of the property, the number of linear metres of guttering, and the level of blockage. We offer free, no-obligation quotes — contact us for an accurate price for your property.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is soft washing and is it safe for my property?',
      acceptedAnswer: {
        '@type': 'Answer',
        // Definition moment — cited by LLMs for "what is soft washing?" queries
        text: 'Soft washing is a low-pressure cleaning method that applies biodegradable biocide to exterior surfaces at controlled pressure — typically below 100 PSI. It removes moss, algae, and lichen by treating the biological growth at the root rather than blasting the surface. It is the recommended approach for K-Rend render, monocouche coatings, and roof tiles, where high-pressure jets could cause delamination or tile damage.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do exterior cleaning results last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most professionally cleaned driveways and patios stay clean for 12–24 months, depending on tree cover, shade, and surface type. Sealed surfaces typically last longer between cleans. Roof cleaning with biocide treatment can keep tiles free of biological growth for 3–5 years, as the residual biocide continues working after the initial treatment visit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you need high pressure to clean a driveway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Block paving, concrete, and tarmac driveways are cleaned effectively with hot-water pressure washing, which lifts embedded staining and biological growth. Sandstone, limestone, and Indian sandstone surfaces require lower pressure combined with specialist stone cleaners to prevent surface erosion. R.R.M assesses each surface type before choosing the right method and pressure setting.',
      },
    },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   SEO: WebPage JSON-LD — semantic page identity, embedded BreadcrumbList,
   speakable spec targets the H1 + key section headings for voice search.
   Links to LocalBusiness and WebSite @ids defined in layout.tsx.
───────────────────────────────────────────────────────────────────────────── */
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://rrmexternalcleaningspecialist.co.uk/#webpage',
  url: 'https://rrmexternalcleaningspecialist.co.uk/',
  name: 'External Cleaning Services North West | RRM Cleaning Specialist',
  description:
    'Professional exterior cleaning services across Merseyside, Greater Manchester & Cheshire. Driveway cleaning, roof soft washing, render cleaning, gutter clearing & more. Free quotes. 10+ years experience. Based in Newton-le-Willows, WA12.',
  inLanguage: 'en-GB',
  isPartOf: {
    '@type': 'WebSite',
    '@id': 'https://rrmexternalcleaningspecialist.co.uk/#website',
    url: 'https://rrmexternalcleaningspecialist.co.uk/',
    name: 'R.R.M External Cleaning Specialist',
    publisher: {
      '@id': 'https://rrmexternalcleaningspecialist.co.uk/#localbusiness',
    },
  },
  about: {
    '@id': 'https://rrmexternalcleaningspecialist.co.uk/#localbusiness',
  },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: 'https://rrmexternalcleaningspecialist.co.uk/og-image.png',
    width: 1200,
    height: 630,
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://rrmexternalcleaningspecialist.co.uk/',
      },
    ],
  },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['#hero h1', '#services-heading', '#locations-heading', '#faq-heading'],
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   SEO: Standalone BreadcrumbList — reinforces site hierarchy for Google.
   Homepage is position 1; child pages extend this in their own schemas.
───────────────────────────────────────────────────────────────────────────── */
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://rrmexternalcleaningspecialist.co.uk/',
    },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   DATA: FAQ questions — mirrors faqSchema above.
   Rendered as native <details>/<summary> (no JS) with schema.org microdata.
───────────────────────────────────────────────────────────────────────────── */
const faqs = [
  {
    question: 'How often should I have my driveway cleaned?',
    answer:
      'Most driveways benefit from a professional clean every 12–18 months, depending on tree coverage, foot traffic, and surface type. Block paving and concrete surfaces tend to accumulate moss and algae faster and may need attention more regularly.',
  },
  {
    question: 'Will pressure washing damage my render?',
    answer:
      'High-pressure washing can damage softer renders such as K-Rend or monocouche coatings. We always use low-pressure soft washing combined with specialist biocidal treatments for render surfaces — this removes algae and moss safely without risking surface damage.',
  },
  {
    question: 'Do you work on commercial properties?',
    answer:
      'Yes — we serve both domestic and commercial clients across the North West, including car parks, industrial units, retail premises, and multi-storey facilities. We can work outside business hours to minimise disruption.',
  },
  {
    question: 'How long does a roof clean take?',
    answer:
      'Most residential roofs are completed within a single day. Larger or heavily soiled roofs may require a follow-up bio wash treatment visit to ensure all biological growth has been fully neutralised.',
  },
  {
    question: 'What areas do you cover for exterior cleaning?',
    answer:
      'We cover a wide area across the North West including Newton-le-Willows, Warrington, St Helens, Widnes, Leigh, Golborne, Skelmersdale, Ormskirk, Huyton, Haydock, Lymm, Ashton-in-Makerfield, Manchester, Irlam, Wavertree, Halewood, Uppermill, and surrounding areas.',
  },
  {
    question: 'Do you offer driveway sealing after cleaning?',
    answer:
      'Yes — we offer driveway sealing and patio sealing services. Applying a professional-grade sealer after cleaning helps protect the surface from future staining, moss regrowth, and weathering, extending the time between future cleans significantly.',
  },
  {
    question: 'How much does gutter cleaning cost?',
    answer:
      'Gutter cleaning prices vary depending on the size of the property, the number of linear metres of guttering, and the level of blockage. We offer free, no-obligation quotes — contact us for an accurate price for your property.',
  },
  {
    question: 'What is soft washing and is it safe for my property?',
    answer:
      'Soft washing is a low-pressure cleaning method that applies biodegradable biocide to exterior surfaces at controlled pressure — typically below 100 PSI. It removes moss, algae, and lichen by treating the biological growth at the root rather than blasting the surface. It is the recommended approach for K-Rend render, monocouche coatings, and roof tiles, where high-pressure jets could cause delamination or tile damage.',
  },
  {
    question: 'How long do exterior cleaning results last?',
    answer:
      'Most professionally cleaned driveways and patios stay clean for 12–24 months, depending on tree cover, shade, and surface type. Sealed surfaces typically last longer between cleans. Roof cleaning with biocide treatment can keep tiles free of biological growth for 3–5 years, as the residual biocide continues working after the initial treatment visit.',
  },
  {
    question: 'Do you need high pressure to clean a driveway?',
    answer:
      'Block paving, concrete, and tarmac driveways are cleaned effectively with hot-water pressure washing, which lifts embedded staining and biological growth. Sandstone, limestone, and Indian sandstone surfaces require lower pressure combined with specialist stone cleaners to prevent surface erosion. R.R.M assesses each surface type before choosing the right method and pressure setting.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   DATA: Service Groups — 40 services in 6 semantic categories.
   Each group carries an lsiContext string used in the sr-only description
   rendered below, injecting LSI terms without affecting visible copy.
───────────────────────────────────────────────────────────────────────────── */
const serviceGroups = [
  {
    title: 'Ground-Level Surfaces',
    lsiContext:
      'hard surface restoration including block paving restoration, tarmac cleaning, and post-clean sealant application',
    services: [
      { label: 'Driveway Cleaning',     href: '/services/driveway-cleaning/' },
      { label: 'Driveway Sealing',      href: '/services/driveway-sealing/' },
      { label: 'Patio Cleaning',        href: '/services/patio-cleaning/' },
      { label: 'Patio Sealing',         href: '/services/patio-sealing/' },
      { label: 'Concrete Cleaning',     href: '/services/concrete-cleaning/' },
      { label: 'Tarmac Cleaning',       href: '/services/tarmac-cleaning/' },
      { label: 'Tarmac Sealing',        href: '/services/tarmac-sealing/' },
      { label: 'Hard Surface Cleaning', href: '/services/hard-surface-cleaning/' },
      { label: 'Steps & Path Cleaning', href: '/services/steps-path-cleaning/' },
      { label: 'Car Park Cleaning',     href: '/services/car-park-cleaning/' },
    ],
  },
  {
    title: 'Property Exterior Walls',
    lsiContext:
      'K-Rend cleaning specialists and monocouche render treatment using soft wash exterior cleaning techniques, sandstone and brick restoration',
    services: [
      { label: 'Render Cleaning',    href: '/services/render-cleaning/' },
      { label: 'Render Sealing',     href: '/services/render-sealing/' },
      { label: 'Wall Cleaning',      href: '/services/wall-cleaning/' },
      { label: 'Brick Cleaning',     href: '/services/brick-cleaning/' },
      { label: 'Cladding Cleaning',  href: '/services/cladding-cleaning/' },
      { label: 'Pointing Cleaning',  href: '/services/pointing-cleaning/' },
      { label: 'Stone Cleaning',     href: '/services/stone-cleaning/' },
      { label: 'Sandstone Cleaning', href: '/services/sandstone-cleaning/' },
    ],
  },
  {
    title: 'Roof & Gutters',
    lsiContext:
      'low pressure roof cleaning with lichen and algae biocide treatment, moss removal, and preventative maintenance cleaning',
    services: [
      { label: 'Roof Cleaning',             href: '/services/roof-cleaning/' },
      { label: 'Roof Moss Treatment',       href: '/services/roof-moss-treatment/' },
      { label: 'Roof Sealing',              href: '/services/roof-sealing/' },
      { label: 'Gutter Cleaning',           href: '/services/gutter-cleaning/' },
      { label: 'Gutter Guard Installation', href: '/services/gutter-guard-installation/' },
      { label: 'Moss Removal',              href: '/services/moss-removal/' },
    ],
  },
  {
    title: 'Windows, uPVC & Glass',
    lsiContext:
      'UPVC restoration services, fascia board cleaning, conservatory and window cleaning across North West England',
    services: [
      { label: 'Window Cleaning',          href: '/services/window-cleaning/' },
      { label: 'uPVC Cleaning',            href: '/services/uPVC-cleaning/' },
      { label: 'Fascia & Soffit Cleaning', href: '/services/fascia-soffit-cleaning/' },
      { label: 'Conservatory Cleaning',    href: '/services/conservatory-cleaning/' },
      { label: 'Water Fed Pole Cleaning',  href: '/services/water-fed-pole-cleaning/' },
    ],
  },
  {
    title: 'Biological & Stain Treatments',
    lsiContext:
      'biocide treatment for algae, lichen, and moss; efflorescence removal and oil stain treatment on weathered surfaces',
    services: [
      { label: 'Algae Removal',      href: '/services/algae-removal/' },
      { label: 'Bio Wash Treatment', href: '/services/bio-wash-treatment/' },
      { label: 'Weed Treatment',     href: '/services/weed-treatment/' },
      { label: 'Oil Stain Removal',  href: '/services/oil-stain-removal/' },
    ],
  },
  {
    title: 'Specialist & Commercial',
    lsiContext:
      'commercial pressure washing contractors for car parks, high-rise exteriors, and industrial premises across the North West',
    services: [
      { label: 'Commercial Exterior Cleaning', href: '/services/commercial-exterior-cleaning/' },
      { label: 'High Rise Cleaning',           href: '/services/high-rise-cleaning/' },
      { label: 'Solar Panel Cleaning',         href: '/services/solar-panel-cleaning/' },
      { label: 'Fence Cleaning',               href: '/services/fence-cleaning/' },
      { label: 'Bin Store Cleaning',           href: '/services/bin-store-cleaning/' },
      { label: 'Jet Washing',                  href: '/services/jet-washing/' },
      { label: 'Pressure Washing',             href: '/services/pressure-washing/' },
    ],
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   DATA: Location Groups — 21 location hub pages across 5 regional groups.
   Region labels reference NLP entities: Merseyside, Greater Manchester,
   West Lancashire, Cheshire. Rendered with areaServed microdata below.
───────────────────────────────────────────────────────────────────────────── */
const locationGroups = [
  {
    region: 'Core Service Areas',
    regionContext: 'Warrington, Cheshire',
    locations: [
      { label: 'Newton-le-Willows', href: '/locations/newton-le-willows/', postcode: 'WA12' },
      { label: 'Warrington',        href: '/locations/warrington/',        postcode: 'WA1–WA5' },
      { label: 'St Helens',         href: '/locations/st-helens/',         postcode: 'WA9–WA11' },
      { label: 'Widnes',            href: '/locations/widnes/',            postcode: 'WA8' },
    ],
  },
  {
    region: 'Merseyside & West Lancashire',
    regionContext: 'Merseyside, West Lancashire',
    locations: [
      { label: 'Skelmersdale', href: '/locations/skelmersdale/', postcode: 'WN8' },
      { label: 'Ormskirk',     href: '/locations/ormskirk/',     postcode: 'L39' },
      { label: 'Huyton',       href: '/locations/huyton/',       postcode: 'L36' },
      { label: 'Wavertree',    href: '/locations/wavertree/',    postcode: 'L15' },
      { label: 'Halewood',     href: '/locations/halewood/',     postcode: 'L26' },
    ],
  },
  {
    region: 'Wigan Borough & Leigh Corridor',
    regionContext: 'Wigan, Greater Manchester',
    locations: [
      { label: 'Leigh',                href: '/locations/leigh/',                postcode: 'WN7' },
      { label: 'Golborne',             href: '/locations/golborne/',             postcode: 'WA3' },
      { label: 'Earlestown',           href: '/locations/earlestown/',           postcode: 'WA12' },
      { label: 'Lowton',               href: '/locations/lowton/',               postcode: 'WA3' },
      { label: 'Ashton-in-Makerfield', href: '/locations/ashton-in-makerfield/', postcode: 'WN4' },
    ],
  },
  {
    region: 'Warrington Villages',
    regionContext: 'Warrington, Cheshire',
    locations: [
      { label: 'Great Sankey', href: '/locations/great-sankey/', postcode: 'WA5' },
      { label: 'Burtonwood',   href: '/locations/burtonwood/',   postcode: 'WA5' },
      { label: 'Haydock',      href: '/locations/haydock/',      postcode: 'WA11' },
      { label: 'Lymm',         href: '/locations/lymm/',         postcode: 'WA13' },
    ],
  },
  {
    region: 'Greater Manchester',
    regionContext: 'Greater Manchester',
    locations: [
      { label: 'Manchester', href: '/locations/manchester/', postcode: 'M1–M90' },
      { label: 'Irlam',      href: '/locations/irlam/',      postcode: 'M44' },
      { label: 'Uppermill',  href: '/locations/uppermill/',  postcode: 'OL3' },
    ],
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   DATA: Local Service Highlights — 32 service × location internal links.
   Varied anchor text format: "[Service] in [Location]"
───────────────────────────────────────────────────────────────────────────── */
const localServiceHighlights = [
  {
    location: 'Warrington',
    locationHref: '/locations/warrington/',
    services: [
      { label: 'Pressure washing in Warrington',          href: '/services/pressure-washing/warrington/' },
      { label: 'Driveway cleaning in Warrington',         href: '/services/driveway-cleaning/warrington/' },
      { label: 'Jet washing in Warrington',               href: '/services/jet-washing/warrington/' },
      { label: 'Gutter clearing in Warrington',           href: '/services/gutter-cleaning/warrington/' },
      { label: 'Commercial exterior cleaning Warrington', href: '/services/commercial-exterior-cleaning/warrington/' },
    ],
  },
  {
    location: 'St Helens',
    locationHref: '/locations/st-helens/',
    services: [
      { label: 'Gutter cleaning in St Helens', href: '/services/gutter-cleaning/st-helens/' },
      { label: 'Jet washing in St Helens',     href: '/services/jet-washing/st-helens/' },
      { label: 'Render cleaning in St Helens', href: '/services/render-cleaning/st-helens/' },
      { label: 'Roof soft wash in St Helens',  href: '/services/roof-cleaning/st-helens/' },
      { label: 'Render sealing in St Helens',  href: '/services/render-sealing/st-helens/' },
    ],
  },
  {
    location: 'Newton-le-Willows',
    locationHref: '/locations/newton-le-willows/',
    services: [
      { label: 'Roof cleaning Newton-le-Willows',  href: '/services/roof-cleaning/newton-le-willows/' },
      { label: 'Moss removal Newton-le-Willows',   href: '/services/moss-removal/newton-le-willows/' },
      { label: 'Patio cleaning Newton-le-Willows', href: '/services/patio-cleaning/newton-le-willows/' },
      { label: 'Jet washing Newton-le-Willows',    href: '/services/jet-washing/newton-le-willows/' },
    ],
  },
  {
    location: 'Widnes',
    locationHref: '/locations/widnes/',
    services: [
      { label: 'Driveway sealing in Widnes',      href: '/services/driveway-sealing/widnes/' },
      { label: 'Jet washing in Widnes',           href: '/services/jet-washing/widnes/' },
      { label: 'Window cleaning in Widnes',       href: '/services/window-cleaning/widnes/' },
      { label: 'Conservatory cleaning in Widnes', href: '/services/conservatory-cleaning/widnes/' },
      { label: 'Concrete cleaning in Widnes',     href: '/services/concrete-cleaning/widnes/' },
    ],
  },
  {
    location: 'Leigh',
    locationHref: '/locations/leigh/',
    services: [
      { label: 'Bio wash treatment in Leigh', href: '/services/bio-wash-treatment/leigh/' },
      { label: 'Jet washing in Leigh',        href: '/services/jet-washing/leigh/' },
      { label: 'Tarmac cleaning in Leigh',    href: '/services/tarmac-cleaning/leigh/' },
      { label: 'Fence cleaning in Leigh',     href: '/services/fence-cleaning/leigh/' },
      { label: 'Algae removal in Leigh',      href: '/services/algae-removal/leigh/' },
    ],
  },
  {
    location: 'Skelmersdale',
    locationHref: '/locations/skelmersdale/',
    services: [
      { label: 'Patio cleaning in Skelmersdale',        href: '/services/patio-cleaning/skelmersdale/' },
      { label: 'Jet washing in Skelmersdale',           href: '/services/jet-washing/skelmersdale/' },
      { label: 'Weed treatment in Skelmersdale',        href: '/services/weed-treatment/skelmersdale/' },
      { label: 'Hard surface cleaning Skelmersdale',    href: '/services/hard-surface-cleaning/skelmersdale/' },
      { label: 'Fascia & soffit cleaning Skelmersdale', href: '/services/fascia-soffit-cleaning/skelmersdale/' },
    ],
  },
  {
    location: 'Manchester',
    locationHref: '/locations/manchester/',
    services: [
      { label: 'Solar panel cleaning Manchester',        href: '/services/solar-panel-cleaning/manchester/' },
      { label: 'Jet washing in Manchester',              href: '/services/jet-washing/manchester/' },
      { label: 'Car park cleaning in Manchester',        href: '/services/car-park-cleaning/manchester/' },
      { label: 'High rise exterior cleaning Manchester', href: '/services/high-rise-cleaning/manchester/' },
      { label: 'Cladding cleaning in Manchester',        href: '/services/cladding-cleaning/manchester/' },
    ],
  },
  {
    location: 'Golborne',
    locationHref: '/locations/golborne/',
    services: [
      { label: 'Moss removal in Golborne',        href: '/services/moss-removal/golborne/' },
      { label: 'Jet washing in Golborne',         href: '/services/jet-washing/golborne/' },
      { label: 'uPVC cleaning in Golborne',       href: '/services/uPVC-cleaning/golborne/' },
      { label: 'Roof moss treatment in Golborne', href: '/services/roof-moss-treatment/golborne/' },
      { label: 'Oil stain removal in Golborne',   href: '/services/oil-stain-removal/golborne/' },
    ],
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   DATA: Problems — 7 problem-type pages with sr-only biocide context below.
───────────────────────────────────────────────────────────────────────────── */
const problems = [
  {
    emoji: '🌿',
    title: 'Moss Growth',
    href: '/problems/moss-growth/',
    desc: 'Damp climates make moss a persistent problem on roofs, paths, and patios.',
    srContext: 'Moss growth on roof tiles, block paving and sandstone treated with biocide application and low-pressure soft wash removal techniques.',
  },
  {
    emoji: '🟢',
    title: 'Algae Discolouration',
    href: '/problems/algae-discoloration/',
    desc: 'Green and black algae streaks across render, walls, and driveways.',
    srContext: 'Green and black algae on K-Rend and monocouche render surfaces treated with specialist biocidal wash to prevent weathered surface damage.',
  },
  {
    emoji: '🪨',
    title: 'Lichen Growth',
    href: '/problems/lichen-growth/',
    desc: 'Stubborn lichen on stone, roof tiles, and block paving surfaces.',
    srContext: 'Lichen growth on sandstone, tarmac and roof tiles requiring lichen and algae biocide treatment and hard surface restoration.',
  },
  {
    emoji: '⚫',
    title: 'Black Spot Mould',
    href: '/problems/black-spot-mold/',
    desc: 'Deep-rooted black spot that standard cleaning products cannot shift.',
    srContext: 'Deep-rooted black spot mould on exterior surfaces treated with professional biocide treatment and hot water pressure washing.',
  },
  {
    emoji: '🏭',
    title: 'Pollution Staining',
    href: '/problems/pollution-staining/',
    desc: 'Urban grime, exhaust deposits, and environmental discolouration.',
    srContext: 'Urban pollution and exhaust deposit staining on exterior walls and hard surfaces — efflorescence removal and seasonal exterior cleaning.',
  },
  {
    emoji: '💧',
    title: 'Grime & Dirt Build-Up',
    href: '/problems/grime-dirt-accumulation/',
    desc: 'General dirt accumulation on any outdoor surface over time.',
    srContext: 'General grime and dirt build-up on exterior property surfaces — preventative maintenance cleaning using professional jet washing services.',
  },
  {
    emoji: '🛢️',
    title: 'Oil Stains',
    href: '/problems/oil-stains/',
    desc: 'Vehicle oil and fluid stains on driveways and car parks.',
    srContext: 'Vehicle oil and fluid stains on tarmac, block paving and concrete driveways — specialist post-clean sealant application to prevent reabsorption.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   DATA: Surface Types — 8 surface pages.
───────────────────────────────────────────────────────────────────────────── */
const surfaces = [
  { emoji: '🏗️', label: 'Concrete',            href: '/surfaces/concrete/' },
  { emoji: '🧱', label: 'Block Paving',         href: '/surfaces/block-paving/' },
  { emoji: '🛣️', label: 'Tarmac',              href: '/surfaces/tarmac/' },
  { emoji: '🪨', label: 'Brick & Stone',        href: '/surfaces/brick-stone/' },
  { emoji: '🌲', label: 'Timber & Wood',        href: '/surfaces/timber-wood/' },
  { emoji: '🏠', label: 'Roof Tiles & Gutters', href: '/surfaces/roof-tiles-gutters/' },
  { emoji: '🪟', label: 'uPVC & Plastic',       href: '/surfaces/upvc-plastic/' },
  { emoji: '✨', label: 'Glass & Glazing',      href: '/surfaces/glass-glazing/' },
];

/* ─────────────────────────────────────────────────────────────────────────────
   DATA: Trust bar items and stats strip.
───────────────────────────────────────────────────────────────────────────── */
const trustItems = [
  'Residential & Commercial',
  'North West Based & Operated',
  'Free No-Obligation Quotes',
];

const stats = [
  {
    stat: '10+ Years Experience',
    detail: 'Serving North West homeowners and businesses since 2016.',
    detailWithTime: (
      <>
        Serving North West homeowners and businesses since{' '}
        <time dateTime="2016">2016</time>.
      </>
    ),
  },
  {
    stat: 'Residential & Commercial',
    detail: 'From single driveways to large commercial contracts.',
    detailWithTime: null,
  },
  {
    stat: 'Free Quotes',
    detail: 'No-obligation assessments with honest, transparent pricing.',
    detailWithTime: null,
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <Layout>
      {/* SEO: WebPage JSON-LD — semantic page identity, breadcrumb, speakable */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* SEO: Standalone BreadcrumbList — reinforces site hierarchy */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* SEO: FAQPage JSON-LD — 7 questions for rich result snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ══════════════════════════════════════════════════
          SECTION 1 — HERO
          SEO: sr-only span injects NLP entity text (Merseyside, Greater
          Manchester, Cheshire, soft wash, pressure washing) into page body
          without altering visible copy. CTA aria-labels add keyword context
          to anchor elements for screen readers and crawlers.
      ══════════════════════════════════════════════════ */}
      <section
        id="hero"
        aria-label="Introduction — RRM External Cleaning Specialist"
        className="relative overflow-hidden bg-slate-900 py-16 md:py-24"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_60%_30%,rgba(30,41,59,0.5)_0%,rgba(15,23,42,0.95)_65%)]"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* SEO: Visually hidden context paragraph — NLP entity injection.
              Includes: Merseyside, Greater Manchester, Cheshire region entities;
              soft wash, pressure washing, biocide LSI terms. */}
          <span className="sr-only">
            RRM External Cleaning Specialist provides professional exterior cleaning, pressure
            washing, and soft wash treatments for residential and commercial properties throughout
            the North West of England including Merseyside, Greater Manchester, and Cheshire.
            Services include exterior property maintenance, professional jet washing, biocide
            treatment, K-Rend and monocouche render cleaning, and hard surface restoration.
          </span>

          {/* H1 — one per page; primary keyword "Exterior Cleaning" in first 2 words */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-4xl">
            Exterior Cleaning Services Across the North West
          </h1>

          {/* Opening paragraph: "you/your" language, power-word hook, stat anchor, primary keyword in first 20 words */}
          <p className="font-body text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl mb-4">
            There&apos;s a reason 47 North West homeowners gave R.R.M External Cleaning Specialist
            five stars. We&apos;ve delivered professional exterior cleaning since 2016 — driveways,
            roofs, render, gutters, patios, and more across Merseyside, Greater Manchester, and
            Cheshire.
          </p>
          <p className="font-body text-base text-slate-400 leading-relaxed max-w-3xl mb-8">
            Your property could look brand new by end of the week. Fully insured. Free
            no-obligation quote. No hidden costs — ever.
          </p>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 mb-10" aria-label="Key service benefits">
            {trustItems.map((item) => (
              <li key={item} className="flex items-center gap-2 text-slate-200">
                <svg
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-amber-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact/"
              aria-label="Get a free exterior cleaning quote from RRM External Cleaning Specialist"
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/services/"
              aria-label="Browse all 40 exterior cleaning and treatment services by RRM Specialist"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold px-6 py-3 rounded-lg transition-colors text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 2 — SERVICES CLUSTER
          SEO: 40 service links in 6 semantic <article> groups.
          Each service link has a title attribute with LSI context
          (e.g. "block paving restoration", "monocouche render treatment").
          Each group has a sr-only description injecting the lsiContext string.
          aria-label on each article ties the group to a descriptive label.
      ══════════════════════════════════════════════════ */}
      <section
        id="services"
        aria-labelledby="services-heading"
        className="py-16 md:py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              id="services-heading"
              className="font-heading text-2xl md:text-3xl font-bold text-slate-900 mb-4"
            >
              What Exterior Cleaning Services Does R.R.M Cover?
            </h2>
            <p className="font-body text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              From a single jet wash to a full exterior restoration — we cover 40 services across
              every surface type. Select your service to see exactly how we can help your property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {serviceGroups.map((group) => (
              <article
                key={group.title}
                className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow"
                aria-label={`${group.title} — exterior cleaning and treatment services`}
              >
                <h3 className="font-heading text-lg md:text-xl font-semibold text-slate-800 mb-4">
                  {group.title}
                </h3>
                {/* SEO: sr-only injects lsiContext for this service category */}
                <p className="sr-only">{group.lsiContext}</p>
                <div className="flex flex-wrap gap-2">
                  {group.services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      title={`${service.label} in North West England — RRM External Cleaning Specialist`}
                      aria-label={`${service.label} — professional exterior cleaning service`}
                      className="inline-block text-sm bg-slate-100 hover:bg-amber-50 hover:text-amber-700 text-slate-700 px-3 py-1.5 rounded-full border border-slate-200 hover:border-amber-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services/"
              aria-label="Browse the full list of 40 exterior cleaning and treatment services"
              className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 hover:underline underline-offset-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
            >
              Browse all 40 cleaning &amp; treatment services →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION: LATEST PROJECT — VIDEO + SERVICES GRID
          SEO: VideoObject + Service schema. Showcases 12 pressure
          washing services with keyword-rich descriptions. YouTube
          embed lazy-loaded with full allow attributes.
      ══════════════════════════════════════════════════ */}
      <ExteriorCleaningSection />

      {/* ══════════════════════════════════════════════════
          SECTION 3 — LOCAL SERVICE HIGHLIGHTS
          SEO: 32 service × location combo links across 8 hubs.
          Varied anchor text: "[Service] in [Location]".
          article elements use aria-label combining location + service context.
      ══════════════════════════════════════════════════ */}
      <section
        id="local-services"
        aria-labelledby="local-services-heading"
        className="py-16 md:py-20 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              id="local-services-heading"
              className="font-heading text-2xl md:text-3xl font-bold text-slate-900 mb-4"
            >
              Exterior Cleaning Services — Find Your Area
            </h2>
            <p className="font-body text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              From{' '}
              <Link
                href="/services/driveway-cleaning/warrington/"
                className="text-amber-600 hover:text-amber-700 underline-offset-2 hover:underline transition-colors"
              >
                driveway cleaning in Warrington
              </Link>{' '}
              and{' '}
              <Link
                href="/services/jet-washing/warrington/"
                className="text-amber-600 hover:text-amber-700 underline-offset-2 hover:underline transition-colors"
              >
                jet washing across the North West
              </Link>{' '}
              to{' '}
              <Link
                href="/services/roof-cleaning/st-helens/"
                className="text-amber-600 hover:text-amber-700 underline-offset-2 hover:underline transition-colors"
              >
                roof cleaning in St Helens
              </Link>
              , we bring specialist equipment and genuine local knowledge to every job. Find your
              area below.
            </p>
            {/* SEO: sr-only LSI/NLP entity injection — jet washing + service × location signals */}
            <span className="sr-only">
              Professional jet washing services across Warrington, St Helens, Newton-le-Willows,
              Widnes, Leigh, Skelmersdale, Manchester, and Golborne. Jet washing for driveways,
              patios, paths, block paving, tarmac, concrete, and commercial hard surfaces.
              High-pressure jet washing, hot-water jet washing, and low-pressure soft-wash
              alternatives for delicate surfaces. Exterior jet washing specialists — fully insured,
              established 2016, available 24/7 across Merseyside, Greater Manchester, West
              Lancashire, and Cheshire. Professional pressure washing, driveway jet washing,
              patio jet washing, commercial jet washing, and residential jet washing services.
              Jet washing near me — North West England.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {localServiceHighlights.map((hub) => (
              <article
                key={hub.locationHref}
                aria-label={`Exterior cleaning services available in ${hub.location}`}
                className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-heading text-base font-semibold text-slate-800 mb-3 border-b border-slate-100 pb-2">
                  <Link
                    href={hub.locationHref}
                    title={`Exterior cleaning services in ${hub.location} — RRM External Cleaning Specialist`}
                    className="hover:text-amber-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
                  >
                    {hub.location}
                  </Link>
                </h3>
                <ul className="space-y-2" role="list">
                  {hub.services.map((svc) => (
                    <li key={svc.href}>
                      <Link
                        href={svc.href}
                        className="text-sm text-slate-600 hover:text-amber-600 hover:underline underline-offset-2 transition-colors leading-snug block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
                      >
                        {svc.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 4 — AREAS WE COVER
          SEO: 21 location hubs in 5 regional groups.
          Each location <li> uses itemProp="areaServed" + itemScope/itemType
          so Google can extract areaServed entities from the HTML.
          sr-only per location adds postcode + service context as NLP signal.
          Region labels reference Merseyside, Greater Manchester, West
          Lancashire, Cheshire as geographic NLP entities.
      ══════════════════════════════════════════════════ */}
      <section
        id="locations"
        aria-labelledby="locations-heading"
        className="py-16 md:py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              id="locations-heading"
              className="font-heading text-2xl md:text-3xl font-bold text-slate-900 mb-4"
            >
              Areas We Cover
            </h2>
            <p className="font-body text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Based in Newton-le-Willows, we serve residential and commercial customers across
              Merseyside, Greater Manchester, West Lancashire, and Cheshire. Click your area to
              explore local services and availability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {locationGroups.map((group) => (
              <article
                key={group.region}
                className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow"
                aria-label={`Exterior cleaning locations in ${group.regionContext}`}
              >
                <h3 className="font-heading text-lg font-semibold text-slate-800 mb-3">
                  {group.region}
                </h3>
                <ul className="space-y-1.5" role="list">
                  {group.locations.map((location) => (
                    <li
                      key={location.href}
                      itemScope
                      itemType="https://schema.org/City"
                      itemProp="areaServed"
                    >
                      <Link
                        href={location.href}
                        aria-label={`Exterior cleaning services in ${location.label}, ${group.regionContext} — book a free quote`}
                        title={`${location.label} exterior cleaning — RRM External Cleaning Specialist`}
                        className="text-amber-600 hover:text-amber-700 hover:underline underline-offset-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 rounded"
                      >
                        <span itemProp="name">{location.label}</span>
                      </Link>
                      {/* SEO: sr-only injects postcode + service context per location */}
                      <span className="sr-only">
                        {location.label} ({location.postcode}) — exterior property maintenance
                        including driveway cleaning, roof soft washing, render treatment, and
                        gutter clearing. Serving {location.label} and surrounding areas.
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 5 — PROBLEMS WE SOLVE
          SEO: each problem card has a sr-only srContext string that adds
          biocide, soft wash, and surface-specific LSI terms per problem type
          without altering visible copy.
      ══════════════════════════════════════════════════ */}
      <section
        id="problems"
        aria-labelledby="problems-heading"
        className="py-16 md:py-20 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              id="problems-heading"
              className="font-heading text-2xl md:text-3xl font-bold text-slate-900 mb-4"
            >
              Common Problems We Solve
            </h2>
            <p className="font-body text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Exterior surfaces take a constant battering from the UK climate. Here are the most
              common issues our customers contact us about — click any problem to read about the
              right treatment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {problems.map((problem) => (
              <Link
                key={problem.href}
                href={problem.href}
                title={`${problem.title} — exterior cleaning solutions in North West England`}
                className="group flex flex-col bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-amber-200 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
              >
                <span className="text-4xl mb-3" aria-hidden="true">
                  {problem.emoji}
                </span>
                <h3 className="font-heading text-lg font-semibold text-slate-800 group-hover:text-amber-600 transition-colors mb-2">
                  {problem.title}
                  <span
                    className="ml-2 text-slate-400 group-hover:text-amber-500 transition-colors"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </h3>
                <p className="font-body text-sm text-slate-600 leading-relaxed flex-1">
                  {problem.desc}
                </p>
                {/* SEO: sr-only biocide/treatment context per problem type */}
                <span className="sr-only">{problem.srContext}</span>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/problems/"
              aria-label="View all exterior surface problems and the right cleaning treatments"
              className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 hover:underline underline-offset-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
            >
              View all exterior problems &amp; solutions →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 6 — SURFACES WE WORK ON
          SEO: surface links have title attributes naming the specific
          material (tarmac, sandstone, block paving) as NLP surface entities.
      ══════════════════════════════════════════════════ */}
      <section
        id="surfaces"
        aria-labelledby="surfaces-heading"
        className="py-16 md:py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              id="surfaces-heading"
              className="font-heading text-2xl md:text-3xl font-bold text-slate-900 mb-4"
            >
              Surfaces We Work On
            </h2>
            <p className="font-body text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Every surface requires a different approach. Our equipment and treatments are
              carefully matched to deliver the best result without causing damage to the material.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {surfaces.map((surface) => (
              <Link
                key={surface.href}
                href={surface.href}
                title={`${surface.label} cleaning and restoration — specialist exterior surface treatment by RRM`}
                aria-label={`${surface.label} exterior cleaning services`}
                className="flex flex-col items-center gap-2 bg-white border border-slate-200 rounded-xl p-4 text-center hover:border-amber-400 hover:shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
              >
                <span className="text-3xl" aria-hidden="true">
                  {surface.emoji}
                </span>
                <span className="font-body text-sm font-medium text-slate-700">
                  {surface.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 7 — WHY CHOOSE US
          SEO: sr-only paragraph injects full NLP entity text including:
          "since 2016" (<time> tag), soft wash systems, hot water pressure
          washers, biodegradable biocide treatments, North West England.
          <time dateTime="2016"> in the stats strip provides structured
          temporal data for crawlers.
      ══════════════════════════════════════════════════ */}
      <section
        id="why-us"
        aria-labelledby="why-us-heading"
        className="py-16 md:py-20 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="why-us-heading"
            className="font-heading text-2xl md:text-3xl font-bold text-slate-900 mb-4"
          >
            Why North West Homeowners Choose R.R.M for Exterior Cleaning
          </h2>

          {/* SEO: sr-only NLP entity paragraph — specialist equipment, founding
              year, service scope. Visible to crawlers, invisible to users. */}
          <p className="sr-only">
            RRM External Cleaning Specialist has provided professional exterior surface cleaning
            and treatment services across North West England since{' '}
            <time dateTime="2016">2016</time>, serving homeowners and commercial property managers
            with specialist equipment including soft wash systems, hot water pressure washers, and
            biodegradable biocide treatments. Operating from Newton-le-Willows, WA12, in
            Merseyside, the company covers Warrington, St Helens, Widnes, Leigh, Skelmersdale,
            Manchester, Wigan, and Golborne across Merseyside, Greater Manchester, Cheshire, and
            West Lancashire.
          </p>

          {/* Para 1 — home base, Warrington, Manchester, gutter cleaning */}
          <p className="font-body text-base text-slate-600 leading-relaxed mb-5 max-w-4xl">
            When your property needs attention, you want someone who shows up on time, uses the
            right equipment, and tells you the truth about what your surface actually needs.
            That&apos;s what R.R.M has delivered since <time dateTime="2016">2016</time>. Based in{' '}
            <Link
              href="/locations/newton-le-willows/"
              title="Exterior cleaning services in Newton-le-Willows, WA12 — RRM Specialist"
              className="text-amber-600 hover:text-amber-700 underline-offset-2 hover:underline transition-colors"
            >
              Newton-le-Willows
            </Link>
            , our team regularly works throughout{' '}
            <Link
              href="/locations/warrington/"
              title="Exterior cleaning services in Warrington, Cheshire — RRM Specialist"
              className="text-amber-600 hover:text-amber-700 underline-offset-2 hover:underline transition-colors"
            >
              Warrington
            </Link>{' '}
            and across to{' '}
            <Link
              href="/locations/manchester/"
              title="Exterior cleaning services in Manchester, Greater Manchester — RRM Specialist"
              className="text-amber-600 hover:text-amber-700 underline-offset-2 hover:underline transition-colors"
            >
              Manchester
            </Link>{' '}
            — covering everything from routine{' '}
            <Link
              href="/services/gutter-cleaning/"
              title="Gutter cleaning service in North West England — RRM External Cleaning"
              className="text-amber-600 hover:text-amber-700 underline-offset-2 hover:underline transition-colors"
            >
              gutter cleaning
            </Link>{' '}
            to complete exterior restorations, always matching the right method to your specific
            surface and situation.
          </p>

          {/* Definition moment — standalone sentence LLMs love to cite for "what is soft washing?" */}
          <p className="font-body text-base text-slate-700 font-medium leading-relaxed mb-5 max-w-4xl border-l-4 border-amber-400 pl-4">
            <strong>Soft washing</strong> is a low-pressure cleaning method that uses biodegradable
            biocidal solutions to kill moss, algae, and lichen at the root — not just blast them
            off the surface. It&apos;s the only safe approach for K-Rend render, monocouche
            coatings, and roof tiles.
          </p>

          {/* Para 2 — bio wash, render cleaning, problems guide, contact */}
          <p className="font-body text-base text-slate-600 leading-relaxed mb-5 max-w-4xl">
            We invest in specialist equipment and treatments — from{' '}
            <Link
              href="/services/bio-wash-treatment/"
              title="Bio wash treatment — soft wash biocide cleaning for K-Rend and monocouche render"
              className="text-amber-600 hover:text-amber-700 underline-offset-2 hover:underline transition-colors"
            >
              bio wash treatments
            </Link>{' '}
            for delicate surfaces like K-Rend and monocouche render, through to high-pressure
            cleaning for heavily contaminated hard standing. Our{' '}
            <Link
              href="/services/render-cleaning/"
              title="Render cleaning — K-Rend and monocouche render treatment across Merseyside"
              className="text-amber-600 hover:text-amber-700 underline-offset-2 hover:underline transition-colors"
            >
              render cleaning
            </Link>{' '}
            process is calibrated for your specific coating — we never use a pressure that could
            damage your render or tiles. Not sure what&apos;s affecting your property? Browse{' '}
            <Link
              href="/problems/"
              className="text-amber-600 hover:text-amber-700 underline-offset-2 hover:underline transition-colors"
            >
              our common problems guide
            </Link>{' '}
            for practical advice, or{' '}
            <Link
              href="/contact/"
              className="text-amber-600 hover:text-amber-700 underline-offset-2 hover:underline transition-colors"
            >
              get in touch for a free quote
            </Link>
            .
          </p>

          {/* Para 3 — service+location combos; commercial */}
          <p className="font-body text-base text-slate-600 leading-relaxed mb-10 max-w-4xl">
            Whether you need{' '}
            <Link
              href="/services/patio-sealing/widnes/"
              title="Patio sealing in Widnes — post-clean sealant application by RRM Specialist"
              className="text-amber-600 hover:text-amber-700 underline-offset-2 hover:underline transition-colors"
            >
              patio sealing in Widnes
            </Link>{' '}
            to protect against winter frost,{' '}
            <Link
              href="/services/moss-removal/skelmersdale/"
              title="Moss removal in Skelmersdale, West Lancashire — biocide treatment by RRM"
              className="text-amber-600 hover:text-amber-700 underline-offset-2 hover:underline transition-colors"
            >
              moss removal in Skelmersdale
            </Link>
            , or{' '}
            <Link
              href="/services/window-cleaning/st-helens/"
              title="Window cleaning in St Helens, Merseyside — RRM External Cleaning Specialist"
              className="text-amber-600 hover:text-amber-700 underline-offset-2 hover:underline transition-colors"
            >
              window cleaning in St Helens
            </Link>
            , our flexible scheduling means we can typically be with you within the week. We are
            equally experienced with commercial contracts — from{' '}
            <Link
              href="/services/car-park-cleaning/"
              title="Car park cleaning — commercial pressure washing for retail parks and industrial sites"
              className="text-amber-600 hover:text-amber-700 underline-offset-2 hover:underline transition-colors"
            >
              car park cleaning
            </Link>{' '}
            for retail parks to{' '}
            <Link
              href="/services/high-rise-cleaning/"
              title="High-rise exterior cleaning — commercial pressure washing contractors North West"
              className="text-amber-600 hover:text-amber-700 underline-offset-2 hover:underline transition-colors"
            >
              high-rise exterior cleaning
            </Link>{' '}
            for larger commercial premises across the region.
          </p>

          {/* Stat strip — <time> tag on founding year for structured temporal data */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-slate-200 pt-8">
            {stats.map((item) => (
              <div key={item.stat} className="text-center sm:text-left">
                <p className="font-heading text-xl font-bold text-slate-900 mb-1">{item.stat}</p>
                <p className="font-body text-sm text-slate-500">
                  {item.detailWithTime ?? item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 8 — FAQ
          SEO: Native <details>/<summary> (no JS dependency) with dual schema:
          1. JSON-LD FAQPage above (for Google rich results)
          2. HTML microdata (itemScope/itemType/itemProp) for entity extraction
          Wrapper has itemScope itemType FAQPage. Each <details> is a Question.
          <summary> carries itemProp="name". Answer div carries itemProp +
          itemType Answer. The group-open Tailwind variant rotates the chevron
          when the details element is in the [open] state — no JS needed.
      ══════════════════════════════════════════════════ */}
      <section
        id="faq"
        aria-labelledby="faq-heading"
        className="py-16 md:py-20 bg-white"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2
              id="faq-heading"
              className="font-heading text-2xl md:text-3xl font-bold text-slate-900 mb-4"
            >
              Common Questions About Exterior Cleaning in the North West
            </h2>
            <p className="font-body text-base text-slate-500 leading-relaxed max-w-xl mx-auto">
              Straightforward answers to what homeowners and businesses ask most about exterior
              cleaning, soft washing, and surface treatments across Merseyside and Greater Manchester.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-xl border border-slate-200 overflow-hidden"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <summary
                  className="cursor-pointer flex items-center justify-between gap-4 px-6 py-4 text-left font-heading font-semibold text-slate-800 hover:text-amber-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-amber-500 list-none [&::-webkit-details-marker]:hidden"
                  itemProp="name"
                >
                  <span>{faq.question}</span>
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p
                    className="px-6 pb-5 font-body text-base text-slate-600 leading-relaxed"
                    itemProp="text"
                  >
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/faq/"
              aria-label="Read all frequently asked questions about our exterior cleaning services"
              className="text-amber-600 font-semibold hover:text-amber-700 underline-offset-2 hover:underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 rounded"
            >
              Read all frequently asked questions →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 9 — WHERE WE'RE BASED (GOOGLE MAP)
          SEO: <address> wraps all contact details per schema best practice.
          Directions link has explicit aria-label. Map iframe has descriptive
          title attribute including full address for accessibility + crawlers.
      ══════════════════════════════════════════════════ */}
      <section
        id="find-us"
        aria-labelledby="map-heading"
        className="py-16 md:py-20 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* Info column */}
            <div>
              <h2
                id="map-heading"
                className="font-heading text-2xl md:text-3xl font-bold text-slate-900 mb-4"
              >
                Based in Newton-le-Willows — Serving the Whole North West
              </h2>
              <p className="font-body text-base text-slate-600 leading-relaxed mb-6">
                Our team operates from Newton-le-Willows, WA12, placing us within easy reach of{' '}
                <Link
                  href="/locations/warrington/"
                  title="Exterior cleaning in Warrington, Cheshire — RRM Specialist"
                  className="text-amber-600 hover:text-amber-700 underline-offset-2 hover:underline transition-colors"
                >
                  Warrington
                </Link>
                ,{' '}
                <Link
                  href="/locations/st-helens/"
                  title="Exterior cleaning in St Helens, Merseyside — RRM Specialist"
                  className="text-amber-600 hover:text-amber-700 underline-offset-2 hover:underline transition-colors"
                >
                  St Helens
                </Link>
                ,{' '}
                <Link
                  href="/locations/leigh/"
                  title="Exterior cleaning in Leigh, Greater Manchester — RRM Specialist"
                  className="text-amber-600 hover:text-amber-700 underline-offset-2 hover:underline transition-colors"
                >
                  Leigh
                </Link>
                ,{' '}
                <Link
                  href="/locations/widnes/"
                  title="Exterior cleaning in Widnes, Cheshire — RRM Specialist"
                  className="text-amber-600 hover:text-amber-700 underline-offset-2 hover:underline transition-colors"
                >
                  Widnes
                </Link>
                , and{' '}
                <Link
                  href="/locations/manchester/"
                  title="Exterior cleaning in Manchester, Greater Manchester — RRM Specialist"
                  className="text-amber-600 hover:text-amber-700 underline-offset-2 hover:underline transition-colors"
                >
                  Manchester
                </Link>
                . We cover a 40-mile radius — most customers receive a same-week or next-day
                appointment.
              </p>

              <address className="not-italic font-body text-sm text-slate-700 space-y-1 mb-6 bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
                <p className="font-heading font-semibold text-slate-900 text-base mb-2">
                  R.R.M External Cleaning Specialist
                </p>
                <p>9 Noon Court, Newton-le-Willows</p>
                <p>Merseyside, WA12 8QY</p>
                <p className="pt-2">
                  <a
                    href="tel:+447845463877"
                    aria-label="Call RRM External Cleaning Specialist on 07845 463877"
                    className="text-amber-600 hover:text-amber-700 hover:underline underline-offset-2 transition-colors font-medium"
                  >
                    07845 463877
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:rrmexternalcleaning@gmail.com"
                    aria-label="Email RRM External Cleaning Specialist"
                    className="text-amber-600 hover:text-amber-700 hover:underline underline-offset-2 transition-colors"
                  >
                    rrmexternalcleaning@gmail.com
                  </a>
                </p>
              </address>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact/"
                  aria-label="Book a free exterior cleaning survey with RRM External Cleaning Specialist"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-5 py-3 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2"
                >
                  Book a Free Survey →
                </Link>
                <a
                  href="https://www.google.com/maps/dir//R.R.M+External+Cleaning+Specialist,+9+Noon+Ct,+Newton-le-Willows+WA12+8QY,+United+Kingdom"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get directions to R.R.M External Cleaning Specialist on Google Maps (opens in new tab)"
                  className="inline-flex items-center gap-2 border border-slate-300 hover:border-amber-400 bg-white hover:bg-amber-50 text-slate-700 hover:text-amber-700 font-semibold px-5 py-3 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                >
                  <svg aria-hidden="true" className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Get Directions
                </a>
              </div>
            </div>

            {/* Google Map column */}
            <figure className="rounded-xl overflow-hidden border border-slate-200 shadow-sm min-h-[360px] lg:min-h-[440px]">
              <iframe
                title="R.R.M External Cleaning Specialist location — 9 Noon Court, Newton-le-Willows, Merseyside WA12 8QY"
                src="https://maps.google.com/maps?q=9+Noon+Court,+Newton-le-Willows,+WA12+8QY,+United+Kingdom&t=m&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '360px', display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <figcaption className="sr-only">
                Map showing the location of R.R.M External Cleaning Specialist at 9 Noon Court,
                Newton-le-Willows, Merseyside, WA12 8QY — exterior cleaning specialists serving
                the North West of England.
              </figcaption>
            </figure>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 10 — FINAL CTA
          SEO: aria-labels on both CTA buttons provide keyword context.
      ══════════════════════════════════════════════════ */}
      <section
        aria-label="Call to action — get a free exterior cleaning quote"
        className="py-16 md:py-20 bg-amber-500"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">
                Ready to Transform Your Property?
              </h2>
              <p className="font-body text-base text-amber-100 leading-relaxed max-w-xl">
                Get a free, no-obligation quote from our North West cleaning specialists.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                href="/contact/"
                aria-label="Get a free exterior cleaning quote — contact RRM External Cleaning Specialist"
                className="bg-white text-amber-600 hover:bg-amber-50 font-semibold px-6 py-3 rounded-lg transition-colors text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-amber-500"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:+447845463877"
                aria-label="Call us on 07845 463877"
                className="border-2 border-white text-white hover:bg-white hover:text-amber-600 font-semibold px-6 py-3 rounded-lg transition-colors text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-amber-500"
              >
                Call 07845 463877
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
