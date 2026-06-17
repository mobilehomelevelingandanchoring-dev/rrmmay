import Link from 'next/link';
import {
  Car,
  Leaf,
  Home,
  Layers,
  CloudRain,
  Droplets,
  TreePine,
  Building2,
  Grid3X3,
  Sparkles,
  Square,
  Eraser,
  Zap,
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────────────────────────
   SERVICE DATA
   12 pressure washing / exterior cleaning services, each with:
   - lucide-react icon
   - SEO-friendly name + description
   - href to the relevant service page
───────────────────────────────────────────────────────────────────────────── */
const pressureWashingServices = [
  {
    icon: Zap,
    name: 'Jet Washing',
    description:
      'Fast, effective jet washing for driveways, patios, paths, and hard surfaces using professional 150–200 bar equipment — delivering thorough results in a fraction of the time.',
    href: '/services/jet-washing/',
  },
  {
    icon: Car,
    name: 'Driveway Pressure Washing',
    description:
      'Restore your driveway with professional high-pressure washing that removes deep-set moss, oil stains, and algae from block paving, concrete, and tarmac.',
    href: '/services/driveway-cleaning/',
  },
  {
    icon: Leaf,
    name: 'Patio & Decking Cleaning',
    description:
      'Revive outdoor living spaces with thorough pressure washing that eliminates green algae, black spot, and weathered grime from stone patios and timber decking.',
    href: '/services/patio-cleaning/',
  },
  {
    icon: Home,
    name: 'House Exterior Washing (Softwash)',
    description:
      'Safe low-pressure softwash treatments remove algae, mould, and atmospheric soiling from rendered, brick, and painted exterior walls without surface damage.',
    href: '/services/exterior-cleaning/',
  },
  {
    icon: Layers,
    name: 'Render & Cladding Cleaning',
    description:
      'Specialist K-Rend and monocouche render cleaning using biodegradable biocide treatments that safely restore colour and prevent rapid algae regrowth.',
    href: '/services/render-cleaning/',
  },
  {
    icon: CloudRain,
    name: 'Roof Cleaning & Treatment',
    description:
      'Low-pressure soft wash roof cleaning removes moss, lichen, and algae from all tile types — safer than pressure washing and longer-lasting results.',
    href: '/services/roof-cleaning/',
  },
  {
    icon: Droplets,
    name: 'Gutter Cleaning & Brightening',
    description:
      'Thorough gutter clearing and brightening removes blockages, debris, and discolouration to keep rainwater flowing freely and protect your fascias.',
    href: '/services/gutter-cleaning/',
  },
  {
    icon: TreePine,
    name: 'Fence & Garden Wall Washing',
    description:
      'Pressure washing for timber fences, brick garden walls, and boundary structures removes lichen, algae, and weathering to restore their original appearance.',
    href: '/services/pressure-washing/',
  },
  {
    icon: Building2,
    name: 'Commercial Pressure Washing',
    description:
      'High-capacity pressure washing for commercial premises, car parks, retail forecourts, and industrial sites — fast, professional, and fully insured.',
    href: '/services/commercial-exterior-cleaning/',
  },
  {
    icon: Grid3X3,
    name: 'Block Paving Cleaning & Sealing',
    description:
      'Complete block paving restoration including pressure washing, re-sanding, and sealing to revive colour and protect against future weed growth and staining.',
    href: '/services/driveway-cleaning/',
  },
  {
    icon: Sparkles,
    name: 'Conservatory & Fascia Cleaning',
    description:
      'Pure water cleaning for uPVC conservatories, fascias, soffits, and guttering delivers a streak-free finish that makes plastic surfaces look factory-fresh.',
    href: '/services/window-cleaning/',
  },
  {
    icon: Square,
    name: 'Tarmac & Concrete Cleaning',
    description:
      'Specialist tarmac and concrete cleaning removes oil, fuel, and organic staining from hard surfaces using hot water pressure washing for a deep, lasting clean.',
    href: '/services/pressure-washing/',
  },
  {
    icon: Eraser,
    name: 'Graffiti & Stain Removal',
    description:
      'Professional graffiti removal and surface stain treatment for masonry, render, and hard surfaces — restoring your property without damage to the substrate.',
    href: '/services/pressure-washing/',
  },
] as const;

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD: VideoObject schema for the YouTube embed
───────────────────────────────────────────────────────────────────────────── */
const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'Professional Exterior Cleaning & Pressure Washing — Latest Project',
  description:
    'Watch R.R.M External Cleaning Specialist in action — professional exterior cleaning and pressure washing transforming a property in the North West. Driveway cleaning, render washing, and surface restoration by RRM External Cleaning Specialist, Newton-le-Willows.',
  thumbnailUrl: 'https://img.youtube.com/vi/i4B89TGkM5Y/maxresdefault.jpg',
  uploadDate: '2024-12-01',
  embedUrl: 'https://www.youtube.com/embed/i4B89TGkM5Y',
  contentUrl: 'https://www.youtube.com/watch?v=i4B89TGkM5Y',
  publisher: {
    '@type': 'Organization',
    name: 'R.R.M External Cleaning Specialist',
    url: 'https://rrmexternalcleaningspecialist.co.uk',
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD: Service catalog schema
───────────────────────────────────────────────────────────────────────────── */
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Pressure Washing & Exterior Cleaning',
  provider: {
    '@type': 'LocalBusiness',
    name: 'R.R.M External Cleaning Specialist',
    url: 'https://rrmexternalcleaningspecialist.co.uk',
    '@id': 'https://rrmexternalcleaningspecialist.co.uk/#localbusiness',
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Merseyside' },
    { '@type': 'AdministrativeArea', name: 'Greater Manchester' },
    { '@type': 'AdministrativeArea', name: 'Cheshire' },
    { '@type': 'AdministrativeArea', name: 'West Lancashire' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Exterior Cleaning Services',
    itemListElement: pressureWashingServices.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name: s.name,
        description: s.description,
        url: `https://rrmexternalcleaningspecialist.co.uk${s.href}`,
        provider: { '@id': 'https://rrmexternalcleaningspecialist.co.uk/#localbusiness' },
      },
    })),
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────────────────────────────────── */
export function ExteriorCleaningSection() {
  return (
    <section
      id="exterior-cleaning-services"
      aria-labelledby="exterior-services-heading"
      className="py-16 md:py-20 bg-slate-50 border-t border-slate-100"
    >
      {/* JSON-LD: VideoObject */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      {/* JSON-LD: Service catalog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ─────────────────────────────────────────────── */}
        <div className="text-center mb-12">
          <h2
            id="exterior-services-heading"
            className="font-heading text-2xl md:text-3xl font-bold text-slate-900 mb-4"
          >
            Professional Exterior Cleaning & Pressure Washing Services
          </h2>
          <p className="font-body text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            From driveways and patios to roofs and rendered walls, our professional pressure
            washing and exterior cleaning services restore and protect your property. Using
            industry-leading equipment and eco-friendly treatments, we deliver outstanding results
            for residential and commercial customers.
          </p>
        </div>

        {/* ── YouTube video embed ────────────────────────────────────────── */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="font-heading text-xl md:text-2xl font-semibold text-slate-900 mb-6 text-center">
            Watch Our Latest Exterior Cleaning Project
          </h3>

          {/* VideoObject microdata wrapper */}
          <div
            className="rounded-xl overflow-hidden shadow-xl"
            itemScope
            itemType="https://schema.org/VideoObject"
          >
            {/* VideoObject meta properties (machine-readable) */}
            <meta
              itemProp="name"
              content="Professional Exterior Cleaning & Pressure Washing — Latest Project"
            />
            <meta
              itemProp="description"
              content="Watch R.R.M External Cleaning Specialist in action — professional exterior cleaning and pressure washing transforming a property in the North West."
            />
            <meta
              itemProp="thumbnailUrl"
              content="https://img.youtube.com/vi/i4B89TGkM5Y/maxresdefault.jpg"
            />
            <meta itemProp="uploadDate" content="2024-12-01" />
            <meta
              itemProp="embedUrl"
              content="https://www.youtube.com/embed/i4B89TGkM5Y"
            />
            <meta
              itemProp="contentUrl"
              content="https://www.youtube.com/watch?v=i4B89TGkM5Y"
            />

            {/* 16:9 responsive wrapper */}
            <div className="relative w-full aspect-video bg-slate-900">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/i4B89TGkM5Y?si=oCCJlD7OuiUNVnX9"
                title="Professional Exterior Cleaning & Pressure Washing — Latest Project"
                aria-label="YouTube video: Professional Exterior Cleaning and Pressure Washing — latest project by R.R.M External Cleaning Specialist, North West England"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
                style={{ border: 0 }}
              />
            </div>
          </div>

          {/* Video caption */}
          <p className="font-body text-sm text-slate-500 leading-relaxed mt-4 text-center max-w-2xl mx-auto">
            Watch our team in action — see the difference professional exterior cleaning makes.
            From a dirty, stained surface to a spotless finish, our pressure washing experts
            deliver remarkable transformations every time.
          </p>
        </div>

        {/* ── Services grid intro ────────────────────────────────────────── */}
        <div className="text-center mb-10">
          <p className="font-body text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Our full range of exterior cleaning services covers every surface of your property.
            Whether you need a one-off driveway clean or a complete exterior refresh, we have
            the expertise and equipment to get the job done right.
          </p>
        </div>

        {/* ── 12-service grid ────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {pressureWashingServices.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.name}
                href={service.href}
                className="group bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-amber-200 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-200 shrink-0">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-slate-800 group-hover:text-amber-700 transition-colors duration-200 leading-snug">
                    {service.name}
                  </h3>
                </div>
                <p className="font-body text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </Link>
            );
          })}
        </div>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <div className="text-center">
          <Link
            href="/contact/"
            aria-label="Get a free exterior cleaning and pressure washing quote from R.R.M External Cleaning Specialist"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2"
          >
            Get a Free Quote
          </Link>
        </div>

      </div>
    </section>
  );
}
