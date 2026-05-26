import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

const FAQ = dynamic(() => import('@/pageComponents/FAQ'), {
  loading: () => <div aria-busy="true" className="p-8 text-gray-400">Loading FAQ…</div>,
});

const BASE_URL = 'https://rrmexternalcleaningspecialist.co.uk';
const SITE_NAME = 'R.R.M External Cleaning Specialist';

export const metadata: Metadata = {
  title: {
    absolute: 'FAQs — Exterior Cleaning North West | R.R.M Specialist',
  },
  description:
    'Answers to common questions about pressure washing, driveway cleaning, roof cleaning, gutter clearing, render cleaning & soft washing across the North West. R.R.M — est. 2016, fully insured.',
  keywords: [
    'exterior cleaning FAQ North West',
    'pressure washing questions',
    'driveway cleaning FAQ',
    'roof cleaning questions North West',
    'gutter cleaning FAQ Warrington',
    'render cleaning questions',
    'soft washing FAQ North West',
    'exterior cleaning near me FAQ',
    'how much does pressure washing cost',
  ],
  alternates: { canonical: `${BASE_URL}/faq/` },
  openGraph: {
    title: 'FAQs — Exterior Cleaning North West | R.R.M Specialist',
    description:
      'Common questions about pressure washing, driveway cleaning, roof cleaning, gutter clearing, render cleaning & more. R.R.M External Cleaning Specialist — North West.',
    url: `${BASE_URL}/faq/`,
    type: 'website',
    siteName: SITE_NAME,
    locale: 'en_GB',
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Frequently Asked Questions — R.R.M External Cleaning Specialist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQs — Exterior Cleaning North West | R.R.M',
    description:
      'Questions about pressure washing, driveway cleaning, roof cleaning & gutters. R.R.M External Cleaning Specialist — est. 2016, North West.',
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

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What areas do you cover for exterior cleaning?', acceptedAnswer: { '@type': 'Answer', text: 'R.R.M External Cleaning Specialist covers Newton-le-Willows, Warrington, St Helens, Liverpool, Manchester, Widnes, Wigan, Skelmersdale, Golborne, Leigh, Huyton, Lymm, and the wider Merseyside and Greater Manchester areas. If you\'re searching for exterior cleaning near me and you\'re in the North West, contact us — we may still be able to help.' } },
    { '@type': 'Question', name: 'Are you fully insured for exterior cleaning work?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. R.R.M External Cleaning Specialist carries comprehensive public liability insurance covering all residential and commercial exterior cleaning work. We are happy to provide proof of insurance on request — essential for commercial clients and property managers.' } },
    { '@type': 'Question', name: 'How do I get a free exterior cleaning quote near me?', acceptedAnswer: { '@type': 'Answer', text: 'Call us on 07845 463877 or email rrmexternalcleaning@gmail.com. We provide free, no-obligation quotes after assessing your property. The price we quote is the price you pay — no hidden charges. We serve the full North West and can typically arrange a same-week assessment.' } },
    { '@type': 'Question', name: 'Do you work on commercial properties?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We provide exterior cleaning for both residential and commercial properties including offices, retail units, warehouses, schools, car parks, and industrial premises across the North West. We provide method statements and risk assessments for all commercial work.' } },
    { '@type': 'Question', name: 'How much does pressure washing cost near me?', acceptedAnswer: { '@type': 'Answer', text: 'Pricing depends on the area size, surface type, and contamination level. A typical residential driveway clean starts from around £150. We provide free written quotes so you know the exact cost before work begins. Contact us for a same-week no-obligation assessment.' } },
    { '@type': 'Question', name: 'What is the difference between pressure washing and soft washing?', acceptedAnswer: { '@type': 'Answer', text: 'Pressure washing uses high-pressure water to clean hard surfaces like driveways, patios, and concrete. Soft washing uses low-pressure application of specialist biocidal chemicals to treat delicate surfaces like render, roofing, and painted walls without causing damage. We assess each surface and use the appropriate method.' } },
    { '@type': 'Question', name: 'Will pressure washing damage my driveway or patio?', acceptedAnswer: { '@type': 'Answer', text: 'Not when done professionally. We assess every surface before cleaning and select the correct pressure, nozzle, and technique. Block paving, natural stone, concrete, tarmac, and render all require different approaches. Professional exterior cleaning uses calibrated equipment matched to each surface.' } },
    { '@type': 'Question', name: 'Do you re-sand block paving after driveway cleaning?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Pressure washing block paving displaces some jointing sand. We carry kiln-dried sand and re-fill all joints after cleaning as standard. This maintains structural integrity and prevents weed regrowth in the joints.' } },
    { '@type': 'Question', name: 'How often should I have my driveway cleaned?', acceptedAnswer: { '@type': 'Answer', text: 'In the North West climate, most driveways benefit from annual cleaning. Properties with heavy tree coverage, north-facing surfaces, or persistent shade may need cleaning every 6–9 months. Sealant application extends the interval significantly.' } },
    { '@type': 'Question', name: 'Is roof cleaning safe for my tiles?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We never use high-pressure water on roofs. We use low-pressure soft washing and biocide treatments that safely remove moss and algae without damaging tiles, pointing, or forcing water under the tile line.' } },
    { '@type': 'Question', name: 'How often should gutters be cleaned?', acceptedAnswer: { '@type': 'Answer', text: 'At minimum once per year in late autumn after leaves have fallen. Properties with overhanging trees or in high-leaf areas should have gutters cleaned twice yearly. Blocked gutters cause damp, fascia damage, and foundation issues — regular clearing is essential.' } },
    { '@type': 'Question', name: 'Do you offer gutter cleaning near Warrington?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We provide professional gutter vacuum clearing across all Warrington areas including Stockton Heath, Appleton, Grappenhall, Birchwood, Great Sankey, Padgate, and the town centre (WA1, WA2, WA4 postcodes).' } },
    { '@type': 'Question', name: 'How do you clean rendered walls without causing damage?', acceptedAnswer: { '@type': 'Answer', text: 'We use soft washing — low-pressure application of specialist biocidal solutions that kill algae, mould, and lichen at the cellular level. The surface is then gently rinsed. This is safe for K-Rend, monocouche, silicone render, and painted surfaces.' } },
    { '@type': 'Question', name: 'Are your cleaning products safe for gardens and pets?', acceptedAnswer: { '@type': 'Answer', text: 'All cleaning agents we use are biodegradable and formulated for outdoor use. We manage runoff carefully and avoid direct contact with planted borders. We advise keeping pets off treated surfaces until dry — typically 2–4 hours.' } },
    { '@type': 'Question', name: 'What if it rains on the day of my booking?', acceptedAnswer: { '@type': 'Answer', text: 'Light rain does not affect our work. Heavy rain may require rescheduling for safety and quality reasons. We monitor weather forecasts and will contact you promptly if we need to adjust timing — at no extra cost to you.' } },
    { '@type': 'Question', name: 'Do you offer exterior cleaning near me on weekends?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — R.R.M External Cleaning Specialist is available 24 hours a day, 7 days a week, including weekends and bank holidays. There is no premium for out-of-hours work across our North West service area.' } },
  ],
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'FAQ', item: `${BASE_URL}/faq/` },
  ],
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <FAQ />
    </>
  );
}
