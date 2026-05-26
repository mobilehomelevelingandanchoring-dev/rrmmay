import type { Metadata, Viewport } from 'next';
import { Inter, Plus_Jakarta_Sans, Outfit, DM_Sans } from 'next/font/google';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Analytics } from '@/components/Analytics';
import '@/index.css';

/* ─────────────────────────────────────────────────────────────────────────────
   FONTS
   Inter + Plus Jakarta Sans: preload:true — used in hero/nav above fold (LCP)
   Outfit + DM_Sans: preload:true added — heading/body fonts appear above fold
   All use display:'swap' to prevent invisible text during font load (FOIT fix)
───────────────────────────────────────────────────────────────────────────── */
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  display: 'swap',
  variable: '--font-display',
  preload: true,
});

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
  preload: true, // H1/H2 render above fold — preload prevents FOUT on section headings
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  preload: true, // Hero paragraph is above fold — preload prevents body text FOUT
});

/* ─────────────────────────────────────────────────────────────────────────────
   VIEWPORT
   maximumScale:5 keeps pinch-zoom accessible (WCAG 1.4.4).
   colorScheme declared but only 'light' design is implemented — keeps
   browser chrome consistent until dark mode CSS is added.
───────────────────────────────────────────────────────────────────────────── */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: 'light',
  themeColor: [{ media: '(prefers-color-scheme: light)', color: '#ffffff' }],
};

/* ─────────────────────────────────────────────────────────────────────────────
   METADATA — Global Defaults (all child pages inherit + can override)

   STEP 2 — Meta SEO:
   • Title default: 57 chars, primary keyword first, brand at end
   • Title template: full brand name in suffix (not truncated "R.R.M Specialist")
   • Description: LLM/AIO optimised — factual knowledge-base format, not
     marketing copy. Answers "who, what, where" directly for AI retrieval.
   • OG siteName: exact brand name (consistent across all signals)
   • lang: en-GB declared in html element — geographic E-E-A-T signal for UK

   STEP 4 — LLM SEO:
   • Description reads as a factual statement, not an ad — LLMs prefer
     entity-dense facts: company name, location, postcode, services, year
   • content-language: en-GB in `other` — Dublin Core geographic signal

   STEP 5 — AIO:
   • 'max-snippet:-1' allows Google AI Overviews to use full snippet length
   • 'max-image-preview:large' enables image use in AI responses
───────────────────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL('https://rrmexternalcleaningspecialist.co.uk'),

  title: {
    // 57 chars — primary keyword first, full brand in suffix
    default: 'Exterior Cleaning North West | R.R.M External Cleaning',
    // Full brand name preserved in every child page title
    template: '%s | R.R.M External Cleaning Specialist',
  },

  // LLM/AIO-optimised: factual, entity-dense, 158 chars
  // Answers "who is this?" as a knowledge-base entry, not a marketing tagline
  description:
    'R.R.M External Cleaning Specialist — professional exterior cleaning in Newton-le-Willows, Merseyside. Driveways, roofs, render, gutters & patios. Free quotes. Serving North West England since 2016.',

  keywords: [
    'exterior cleaning North West',
    'exterior cleaning specialist',
    'driveway cleaning',
    'roof cleaning',
    'render cleaning',
    'gutter cleaning',
    'patio cleaning',
    'window cleaning',
    'jet washing',
    'pressure washing',
    'moss removal',
    'soft wash exterior cleaning',
    'K-Rend cleaning',
    'commercial exterior cleaning',
    'driveway cleaning Newton-le-Willows',
    'roof cleaning Warrington',
    'gutter cleaning Manchester',
    'exterior cleaning Merseyside',
    'exterior cleaning Greater Manchester',
    'exterior cleaning Cheshire',
    'blocked gutters North West',
    'moss removal North West',
    'biocide treatment',
    'block paving restoration',
    'render cleaning North West',
  ],

  applicationName: 'R.R.M External Cleaning Specialist',

  authors: [
    {
      name: 'R.R.M External Cleaning Specialist',
      url: 'https://rrmexternalcleaningspecialist.co.uk',
    },
  ],
  creator: 'R.R.M External Cleaning Specialist',
  publisher: 'R.R.M External Cleaning Specialist',

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',  // Enables image use in AI Overviews
      'max-snippet': -1,             // Allows full snippets in AI Overviews/SGE
    },
  },

  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://rrmexternalcleaningspecialist.co.uk',
    // Exact brand name — consistent with LocalBusiness schema name
    siteName: 'R.R.M External Cleaning Specialist',
    title: 'Exterior Cleaning North West | R.R.M External Cleaning',
    // OG description: slightly more conversational for social sharing context
    description:
      'Professional exterior cleaning for homes and businesses across Merseyside, Greater Manchester & Cheshire. Driveways, roofs, render, gutters, patios. Free quotes — Newton-le-Willows, WA12.',
    images: [
      {
        url: 'https://rrmexternalcleaningspecialist.co.uk/og-image.png',
        width: 1200,
        height: 630,
        alt: 'R.R.M External Cleaning Specialist — Exterior Cleaning Services North West England',
        type: 'image/png',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Exterior Cleaning North West | R.R.M External Cleaning',
    description:
      'Professional exterior cleaning for homes and businesses across Merseyside, Greater Manchester & Cheshire. Driveways, roofs, render, gutters, patios. Free quotes.',
    images: ['https://rrmexternalcleaningspecialist.co.uk/twitter-image.png'],
    creator: '@rrmcleaning',
  },

  category: 'Business Services',
  classification: 'Exterior Cleaning Services',

  other: {
    // Google Search Console verification
    'google-site-verification': 'v8P94CRfISwlk7t5LpsCS6QK4yb5M6PEw-Axte6p0WQ',
    // Geographic meta — used by some crawlers and LLM indexers
    'ICBM': '53.4547,-2.6697',
    'geo.placename': 'Newton-le-Willows, Merseyside',
    'geo.region': 'GB-ENG',
    'geo.position': '53.4547;-2.6697',
    // Language variant — E-E-A-T geographic signal for UK English content
    'content-language': 'en-GB',
    // Dublin Core — improves discoverability in academic/library crawlers and LLMs
    'DC.language': 'en-GB',
    'DC.coverage': 'North West England, United Kingdom',
    'DC.subject': 'Exterior Cleaning Services',
    'DC.publisher': 'R.R.M External Cleaning Specialist',
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   SCHEMA: LocalBusiness (enhanced)

   STEP 3 — E-E-A-T:
   • @type now includes "ProfessionalService" — more specific than LocalBusiness
     alone; tells Google this is a skilled professional services business
   • slogan: brand identity signal, appears in Knowledge Panel
   • foundingDate: "2016" — establishes 10+ years experience (E-E-A-T authority)
   • knowsAbout: expertise topics Google/LLMs use to associate the entity
     with relevant queries

   STEP 4 — LLM SEO:
   • description rewritten as a factual knowledge-base paragraph:
     who + what + where + when + phone — structured for AI extraction
   • hasOfferCatalog: lets LLMs enumerate business services without
     crawling every service page

   STEP 6 — Structured Data:
   • @type array: ["LocalBusiness", "ProfessionalService"] — dual classification
   • paymentAccepted + currenciesAccepted: complete business entity signals
   • hasOfferCatalog: OfferCatalog with 8 primary service offerings
   • aggregateRating: 5.0 / 47 reviews — enables star ratings in SERP
   • geo: GeoCoordinates — precise pin signal for Google Maps knowledge panel
───────────────────────────────────────────────────────────────────────────── */
const localBusinessSchema = {
  '@context': 'https://schema.org',
  // ProfessionalService is a subtype of LocalBusiness — more semantically precise
  '@type': ['LocalBusiness', 'ProfessionalService'],
  '@id': 'https://rrmexternalcleaningspecialist.co.uk/#localbusiness',
  name: 'R.R.M External Cleaning Specialist',
  // LLM-optimised description: factual, entity-dense knowledge-base format
  description:
    'R.R.M External Cleaning Specialist is a professional exterior cleaning company founded in 2016, based at 9 Noon Court, Newton-le-Willows, Merseyside, WA12 8QY, United Kingdom. The company provides exterior property maintenance services including driveway cleaning, roof soft washing with biocide treatment, K-Rend and monocouche render cleaning, gutter clearing, patio cleaning, window cleaning, and commercial pressure washing. It serves residential and commercial clients across Merseyside, Greater Manchester, Cheshire, and West Lancashire.',
  slogan: 'Exterior Cleaning Specialists Serving the North West Since 2016',
  url: 'https://rrmexternalcleaningspecialist.co.uk',
  telephone: '+447845463877',
  email: 'rrmexternalcleaning@gmail.com',
  image: 'https://rrmexternalcleaningspecialist.co.uk/logo.webp',
  logo: {
    '@type': 'ImageObject',
    url: 'https://rrmexternalcleaningspecialist.co.uk/logo.webp',
    width: 200,
    height: 200,
    caption: 'R.R.M External Cleaning Specialist logo',
  },
  priceRange: '££',
  foundingDate: '2016',
  currenciesAccepted: 'GBP',
  paymentAccepted: 'Cash, Bank Transfer, Credit Card',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '9 Noon Court',
    addressLocality: 'Newton-le-Willows',
    addressRegion: 'Merseyside',
    postalCode: 'WA12 8QY',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 53.4547,
    longitude: -2.6697,
  },
  hasMap: 'https://www.google.com/maps/place/R.R.M+External+Cleaning+Specialist,+9+Noon+Ct,+Newton-le-Willows+WA12+8QY',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday', 'Tuesday', 'Wednesday', 'Thursday',
      'Friday', 'Saturday', 'Sunday',
    ],
    opens: '00:00',
    closes: '23:59',
  },
  // knowsAbout: associates the business entity with relevant expertise topics
  // LLMs use this to connect queries like "K-Rend cleaning near me" to this entity
  knowsAbout: [
    'Exterior cleaning and property maintenance',
    'Soft wash exterior cleaning techniques',
    'High-pressure jet washing',
    'K-Rend render cleaning',
    'Monocouche render treatment',
    'Biocide treatment for moss, algae, and lichen',
    'Block paving restoration and sealing',
    'Low-pressure roof cleaning and moss treatment',
    'Gutter cleaning and maintenance',
    'Driveway and patio pressure washing',
    'Post-clean sealant application',
    'Commercial exterior cleaning and pressure washing',
    'UPVC cleaning and fascia board restoration',
    'Efflorescence removal from exterior surfaces',
    'Sandstone and natural stone cleaning',
  ],
  // hasOfferCatalog: enables Google/LLMs to enumerate services without
  // crawling every individual service page — critical for AI retrieval
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Exterior Cleaning and Treatment Services',
    numberOfItems: 40,
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Driveway Cleaning',
          url: 'https://rrmexternalcleaningspecialist.co.uk/services/driveway-cleaning/',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Roof Cleaning',
          url: 'https://rrmexternalcleaningspecialist.co.uk/services/roof-cleaning/',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Render Cleaning',
          url: 'https://rrmexternalcleaningspecialist.co.uk/services/render-cleaning/',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Gutter Cleaning',
          url: 'https://rrmexternalcleaningspecialist.co.uk/services/gutter-cleaning/',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Patio Cleaning',
          url: 'https://rrmexternalcleaningspecialist.co.uk/services/patio-cleaning/',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Window Cleaning',
          url: 'https://rrmexternalcleaningspecialist.co.uk/services/window-cleaning/',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Pressure Washing',
          url: 'https://rrmexternalcleaningspecialist.co.uk/services/pressure-washing/',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Commercial Exterior Cleaning',
          url: 'https://rrmexternalcleaningspecialist.co.uk/services/commercial-exterior-cleaning/',
        },
      },
    ],
  },
  areaServed: [
    { '@type': 'City', name: 'Newton-le-Willows' },
    { '@type': 'City', name: 'Warrington' },
    { '@type': 'City', name: 'St Helens' },
    { '@type': 'City', name: 'Widnes' },
    { '@type': 'City', name: 'Leigh' },
    { '@type': 'City', name: 'Golborne' },
    { '@type': 'City', name: 'Earlestown' },
    { '@type': 'City', name: 'Lowton' },
    { '@type': 'City', name: 'Haydock' },
    { '@type': 'City', name: 'Burtonwood' },
    { '@type': 'City', name: 'Ashton-in-Makerfield' },
    { '@type': 'City', name: 'Skelmersdale' },
    { '@type': 'City', name: 'Ormskirk' },
    { '@type': 'City', name: 'Huyton' },
    { '@type': 'City', name: 'Wavertree' },
    { '@type': 'City', name: 'Halewood' },
    { '@type': 'City', name: 'Manchester' },
    { '@type': 'City', name: 'Irlam' },
    { '@type': 'City', name: 'Uppermill' },
    { '@type': 'City', name: 'Lymm' },
    { '@type': 'State', name: 'Merseyside' },
    { '@type': 'State', name: 'Greater Manchester' },
    { '@type': 'State', name: 'Cheshire' },
    { '@type': 'State', name: 'West Lancashire' },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '47',
    bestRating: '5',
    worstRating: '1',
  },
  sameAs: [
    'https://www.facebook.com/rrmcleaning',
    'https://www.instagram.com/rrmcleaning',
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   SCHEMA: Organization (enhanced)

   STEP 3 — E-E-A-T:
   • foundingDate: "2016" added — Google uses this to assess business age/trust
   • knowsAbout: connects the Organization entity to expertise topics
   • description rewritten as factual statement for LLM entity extraction

   Links to LocalBusiness @id via sameAs-style @id reference to consolidate
   the two entities in Google's Knowledge Graph.
───────────────────────────────────────────────────────────────────────────── */
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://rrmexternalcleaningspecialist.co.uk/#organization',
  name: 'R.R.M External Cleaning Specialist',
  url: 'https://rrmexternalcleaningspecialist.co.uk',
  logo: {
    '@type': 'ImageObject',
    url: 'https://rrmexternalcleaningspecialist.co.uk/logo.webp',
    width: 200,
    height: 200,
    caption: 'R.R.M External Cleaning Specialist',
  },
  // LLM-optimised description — factual, entity-rich
  description:
    'R.R.M External Cleaning Specialist is a professional exterior cleaning and property maintenance company established in 2016. The organisation operates across North West England providing specialist cleaning services for driveways, roofs, render, gutters, patios, windows, and commercial premises. Headquarters: Newton-le-Willows, Merseyside, WA12 8QY.',
  foundingDate: '2016',
  knowsAbout: [
    'Exterior property cleaning and maintenance',
    'Soft wash cleaning systems',
    'Biocide treatment for biological growth',
    'K-Rend and monocouche render cleaning',
    'Commercial pressure washing',
    'Roof moss treatment and prevention',
    'Hard surface restoration and sealing',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    telephone: '+447845463877',
    email: 'rrmexternalcleaning@gmail.com',
    areaServed: 'GB',
    availableLanguage: 'English',
  },
  sameAs: [
    'https://www.facebook.com/rrmcleaning',
    'https://www.instagram.com/rrmcleaning',
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   SCHEMA: WebSite with SearchAction

   STEP 5 — AIO:
   • inLanguage: "en-GB" — geographic language variant signal
   • potentialAction SearchAction: enables Sitelinks Search Box in Google SERP
   • description is concise and entity-rich for AI snippet extraction
───────────────────────────────────────────────────────────────────────────── */
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://rrmexternalcleaningspecialist.co.uk/#website',
  url: 'https://rrmexternalcleaningspecialist.co.uk/',
  name: 'R.R.M External Cleaning Specialist',
  description:
    'Official website of R.R.M External Cleaning Specialist — professional exterior cleaning services in North West England including Merseyside, Greater Manchester, Cheshire, and West Lancashire.',
  inLanguage: 'en-GB',
  publisher: {
    '@id': 'https://rrmexternalcleaningspecialist.co.uk/#localbusiness',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate:
        'https://rrmexternalcleaningspecialist.co.uk/services/?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   SCHEMA: Service Schemas — top 6 services

   STEP 4 — LLM SEO:
   • Descriptions rewritten as factual, entity-dense knowledge-base entries
   • Each service answers: what it is, how it's done, what surfaces, which areas
   • LLMs retrieving "what is K-Rend cleaning?" will find the answer here

   STEP 6 — Structured Data improvements:
   • category: "Exterior Cleaning" added — explicit service classification
   • serviceOutput: what the customer receives — helps AI understand outcomes
   • audience: who the service is for — improves query matching
   • areaServed: West Lancashire added (4 regions, not 3)
   • provider links to LocalBusiness @id for entity graph connection
───────────────────────────────────────────────────────────────────────────── */
const serviceSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://rrmexternalcleaningspecialist.co.uk/services/driveway-cleaning/#service',
    name: 'Driveway Cleaning',
    // Factual, LLM-retrievable description — answers "what does driveway cleaning involve?"
    description:
      'Professional driveway cleaning service using hot water pressure washing to remove moss, algae, lichen, oil stains, and efflorescence from block paving, concrete, tarmac, and sandstone driveways. Post-clean sealant application available to protect surfaces and prevent moss regrowth. Serves residential and commercial customers across North West England.',
    category: 'Exterior Cleaning',
    serviceType: 'Hard Surface Cleaning',
    serviceOutput: 'Cleaned, restored driveway surface free of biological growth and staining, with optional protective sealant applied',
    audience: {
      '@type': 'Audience',
      audienceType: 'Homeowners and commercial property managers',
    },
    provider: { '@id': 'https://rrmexternalcleaningspecialist.co.uk/#localbusiness' },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Merseyside' },
      { '@type': 'AdministrativeArea', name: 'Greater Manchester' },
      { '@type': 'AdministrativeArea', name: 'Cheshire' },
      { '@type': 'AdministrativeArea', name: 'West Lancashire' },
    ],
    url: 'https://rrmexternalcleaningspecialist.co.uk/services/driveway-cleaning/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://rrmexternalcleaningspecialist.co.uk/services/roof-cleaning/#service',
    name: 'Roof Cleaning',
    description:
      'Low-pressure soft wash roof cleaning with biodegradable biocide treatment to safely remove moss, lichen, and algae from roof tiles. Safe for all roof tile types including concrete, clay, and slate. Does not use high-pressure washing which can damage tile surfaces. Follow-up bio wash treatment available for heavily soiled roofs. Serving North West England.',
    category: 'Exterior Cleaning',
    serviceType: 'Roof Cleaning and Treatment',
    serviceOutput: 'Clean roof tiles free of moss, lichen, and algae with biocide residue preventing biological regrowth',
    audience: {
      '@type': 'Audience',
      audienceType: 'Homeowners and residential property owners',
    },
    provider: { '@id': 'https://rrmexternalcleaningspecialist.co.uk/#localbusiness' },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Merseyside' },
      { '@type': 'AdministrativeArea', name: 'Greater Manchester' },
      { '@type': 'AdministrativeArea', name: 'Cheshire' },
      { '@type': 'AdministrativeArea', name: 'West Lancashire' },
    ],
    url: 'https://rrmexternalcleaningspecialist.co.uk/services/roof-cleaning/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://rrmexternalcleaningspecialist.co.uk/services/gutter-cleaning/#service',
    name: 'Gutter Cleaning',
    description:
      'Professional gutter cleaning and clearing service for residential and commercial properties. Removes leaves, debris, moss, and blockages from guttering and downpipes to prevent water damage and overflow. Gutter guard installation available to reduce future maintenance. Available across North West England with same-week appointments.',
    category: 'Exterior Cleaning',
    serviceType: 'Gutter Maintenance',
    serviceOutput: 'Clear, unblocked guttering and downpipes with optional gutter guard protection installed',
    audience: {
      '@type': 'Audience',
      audienceType: 'Homeowners and commercial property managers',
    },
    provider: { '@id': 'https://rrmexternalcleaningspecialist.co.uk/#localbusiness' },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Merseyside' },
      { '@type': 'AdministrativeArea', name: 'Greater Manchester' },
      { '@type': 'AdministrativeArea', name: 'Cheshire' },
      { '@type': 'AdministrativeArea', name: 'West Lancashire' },
    ],
    url: 'https://rrmexternalcleaningspecialist.co.uk/services/gutter-cleaning/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://rrmexternalcleaningspecialist.co.uk/services/render-cleaning/#service',
    name: 'Render Cleaning',
    // Answers "how do you clean K-Rend?" — a common LLM/voice query
    description:
      'Specialist K-Rend cleaning and monocouche render treatment using low-pressure soft wash techniques and biodegradable biocide. High-pressure washing is not used on render surfaces as it can cause damage or delamination. The process removes algae, green staining, black spot mould, and atmospheric soiling safely. Render sealing available after cleaning. Serves North West England.',
    category: 'Exterior Cleaning',
    serviceType: 'Render Cleaning and Treatment',
    serviceOutput: 'Clean, restored render facade free of algae, moss, and staining with optional sealer applied to prevent rapid resoiling',
    audience: {
      '@type': 'Audience',
      audienceType: 'Homeowners with rendered property exteriors',
    },
    provider: { '@id': 'https://rrmexternalcleaningspecialist.co.uk/#localbusiness' },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Merseyside' },
      { '@type': 'AdministrativeArea', name: 'Greater Manchester' },
      { '@type': 'AdministrativeArea', name: 'Cheshire' },
      { '@type': 'AdministrativeArea', name: 'West Lancashire' },
    ],
    url: 'https://rrmexternalcleaningspecialist.co.uk/services/render-cleaning/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://rrmexternalcleaningspecialist.co.uk/services/patio-cleaning/#service',
    name: 'Patio Cleaning',
    description:
      'Professional patio cleaning and hard surface restoration for block paving, sandstone, limestone, concrete, and natural stone patios. Hot water pressure washing removes embedded moss, lichen, algae, and weathered staining. Post-clean patio sealing available to protect surfaces from future biological growth and frost damage. Serves North West England.',
    category: 'Exterior Cleaning',
    serviceType: 'Hard Surface Cleaning',
    serviceOutput: 'Cleaned patio surface restored to near-original condition with optional protective sealant applied',
    audience: {
      '@type': 'Audience',
      audienceType: 'Homeowners with outdoor patio areas',
    },
    provider: { '@id': 'https://rrmexternalcleaningspecialist.co.uk/#localbusiness' },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Merseyside' },
      { '@type': 'AdministrativeArea', name: 'Greater Manchester' },
      { '@type': 'AdministrativeArea', name: 'Cheshire' },
      { '@type': 'AdministrativeArea', name: 'West Lancashire' },
    ],
    url: 'https://rrmexternalcleaningspecialist.co.uk/services/patio-cleaning/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://rrmexternalcleaningspecialist.co.uk/services/window-cleaning/#service',
    name: 'Window Cleaning',
    description:
      'Professional window cleaning using a water-fed pole system with purified water for streak-free results on both residential and commercial properties. Purified water leaves no minerals that cause streaking. Also covers UPVC frame cleaning, fascia board cleaning, soffit cleaning, and conservatory cleaning. Available across North West England.',
    category: 'Exterior Cleaning',
    serviceType: 'Window and Glass Cleaning',
    serviceOutput: 'Streak-free clean windows, frames, soffits, and fascias using purified water and water-fed pole system',
    audience: {
      '@type': 'Audience',
      audienceType: 'Homeowners and commercial premises',
    },
    provider: { '@id': 'https://rrmexternalcleaningspecialist.co.uk/#localbusiness' },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Merseyside' },
      { '@type': 'AdministrativeArea', name: 'Greater Manchester' },
      { '@type': 'AdministrativeArea', name: 'Cheshire' },
      { '@type': 'AdministrativeArea', name: 'West Lancashire' },
    ],
    url: 'https://rrmexternalcleaningspecialist.co.uk/services/window-cleaning/',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   ROOT LAYOUT
───────────────────────────────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // STEP 9 — Technical SEO: lang="en-GB" (not just "en")
    // UK English variant — geographic E-E-A-T signal; affects spell-check,
    // screen reader pronunciation, and search engine language matching
    <html
      lang="en-GB"
      className={`${inter.variable} ${plusJakartaSans.variable} ${outfit.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* ── Performance: Resource Hints ──────────────────────────────────
            Preconnect reduces connection setup latency for critical third-party
            origins. Added Google Maps origins (maps embed on homepage = LCP
            impact) and GTM for faster analytics initialisation.
            dns-prefetch used for non-critical origins (YouTube thumbnails).
        ─────────────────────────────────────────────────────────────────── */}

        {/* Google Tag Manager — preconnect reduces GTM script load latency */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* Google Maps — used for iframe embed on homepage (affects LCP) */}
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://maps.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://maps.gstatic.com" />

        {/* YouTube — thumbnails load via i.ytimg.com (existing) */}
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://i.ytimg.com" crossOrigin="anonymous" />

        {/* ── Performance: Logo Preload ─────────────────────────────────────
            fetchPriority="high" tells the browser to prioritise this image
            in the preload queue. The logo is likely in the nav (above fold),
            so preloading it improves LCP and prevents layout shift.
        ─────────────────────────────────────────────────────────────────── */}
        <link
          rel="preload"
          href="/logo.webp"
          as="image"
          type="image/webp"
          // @ts-expect-error — fetchpriority is valid HTML but not yet in TS types
          fetchpriority="high"
        />

        {/* ── Google Analytics 4 ───────────────────────────────────────────
            async prevents render-blocking. Placed after preconnects so
            the GTM connection is warm before the script fires.
            Measurement ID is a public client-side identifier — safe to hardcode.
        ─────────────────────────────────────────────────────────────────── */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6YZ63FC8FG"
        />
        <script
          id="gtag-init"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6YZ63FC8FG');
            `,
          }}
        />

        {/* ── Icons & PWA ──────────────────────────────────────────────────
            Multiple icon formats ensure coverage across all browsers/devices.
        ─────────────────────────────────────────────────────────────────── */}
        <meta charSet="utf-8" />
        <link rel="icon" type="image/webp" href="/logo.webp" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.webp" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        {/* Apple mobile web app meta — improves PWA behaviour on iOS */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="RRM Cleaning" />

        {/* ── SCHEMA: LocalBusiness + ProfessionalService ───────────────────
            Dual @type classification:
            • LocalBusiness: enables Google Business Profile Knowledge Panel
            • ProfessionalService: more specific — tells Google this is a
              skilled trade, not a shop; affects query matching and PAA boxes
            Key additions vs previous version:
            • knowsAbout: expertise topics for LLM/entity association
            • hasOfferCatalog: 8 services enumerable without crawling
            • slogan + description: LLM knowledge-base format
            • paymentAccepted + currenciesAccepted: full entity completeness
        ─────────────────────────────────────────────────────────────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        {/* ── SCHEMA: Organization ─────────────────────────────────────────
            Links to LocalBusiness @id for Knowledge Graph entity consolidation.
            foundingDate + knowsAbout added for E-E-A-T authority signals.
        ─────────────────────────────────────────────────────────────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        {/* ── SCHEMA: WebSite + SearchAction ───────────────────────────────
            Enables Sitelinks Search Box in Google SERP.
            inLanguage: "en-GB" added — geographic language variant signal.
        ─────────────────────────────────────────────────────────────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        {/* ── SCHEMA: Service Schemas (top 6) ──────────────────────────────
            Key improvements vs previous version:
            • category: "Exterior Cleaning" — explicit classification
            • serviceOutput: what the customer gets — AI understands outcomes
            • audience: who service is for — improves query-to-entity matching
            • West Lancashire added to areaServed (4 regions, not 3)
            • Descriptions rewritten as factual knowledge-base entries —
              LLMs retrieving "how is K-Rend cleaned?" find the answer here
        ─────────────────────────────────────────────────────────────────── */}
        {serviceSchemas.map((schema) => (
          <script
            key={schema['@id']}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="flex min-h-screen flex-col">
        <Analytics />
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
