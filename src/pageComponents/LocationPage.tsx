import Link from 'next/link';
import { notFound } from 'next/navigation';
import { locations } from '@/data/locations';
import { services } from '@/data/services';
import { ContactInfo } from '@/components/ContactInfo';
import VideoEmbed from '@/components/VideoEmbed';
import { Layout } from '@/components/layout/Layout';

const BASE_URL = 'https://rrmexternalcleaningspecialist.co.uk';
const PHONE = '+447845463877';
const BUSINESS_NAME = 'R.R.M External Cleaning Specialist';

interface LocationPageProps {
  params: { locationSlug: string };
}

function buildDefaultFaqs(locationName: string, county: string, postcodes: string[]) {
  return [
    {
      question: `What exterior cleaning services do you offer in ${locationName}?`,
      answer: `R.R.M External Cleaning Specialist offers 40 professional exterior cleaning services in ${locationName}, including pressure washing, driveway cleaning, roof cleaning, gutter clearing, render cleaning, patio cleaning, window cleaning, and commercial exterior maintenance. All services are fully insured and available 24 hours a day, seven days a week.`,
    },
    {
      question: `How much does exterior cleaning cost in ${locationName}?`,
      answer: `Pricing depends on the surface area, service type, and condition of the property. We provide free no-obligation quotations for all ${locationName} enquiries — call +44 7845 463877 or email rrmexternalcleaning@gmail.com for a same-week assessment with no obligation.`,
    },
    {
      question: `Are you fully insured to work in ${locationName}?`,
      answer: `Yes — R.R.M External Cleaning Specialist carries full public liability insurance covering all residential and commercial work in ${locationName} and across ${county}. Insurance certificates are available on request for commercial clients, property managers, and estate agents.`,
    },
    {
      question: `What postcodes do you cover in ${locationName}?`,
      answer: `We cover ${postcodes.join(', ')} and all surrounding areas in ${county}. Based in Newton-le-Willows (WA12), we typically reach ${locationName} within the same week. Contact us if you are unsure whether your address falls within our coverage area.`,
    },
    {
      question: `Do you offer commercial exterior cleaning contracts in ${locationName}?`,
      answer: `Yes — R.R.M provides scheduled commercial exterior cleaning contracts across ${locationName}. We carry full commercial public liability insurance, provide method statements and risk assessments on request, and accommodate early-morning or out-of-hours scheduling to minimise disruption to your business operations.`,
    },
    {
      question: `How often should ${locationName} properties be professionally cleaned?`,
      answer: `Most ${locationName} properties benefit from exterior cleaning every 12–24 months, depending on aspect, local foliage, and property type. Properties in shaded or north-facing positions, or those near high-traffic roads, typically require more frequent treatment. We advise on appropriate maintenance intervals at the quotation stage.`,
    },
  ];
}

export default function LocationPageContent({ params }: LocationPageProps) {
  const { locationSlug } = params;
  const location = locations.find((l) => l.slug === locationSlug);

  if (!location) {
    notFound();
  }

  const nearbySlugs = [...(location.nearbyHubs ?? []), ...(location.spokeLocations ?? [])];
  const nearbyLocationsList = nearbySlugs
    .map((slug) => locations.find((l) => l.slug === slug))
    .filter((l): l is (typeof locations)[number] => l !== undefined);

  const defaultFaqs = buildDefaultFaqs(location.name, location.county, location.postcodes);
  const faqItems =
    location.faqOverrides && location.faqOverrides.length > 0
      ? [...location.faqOverrides, ...defaultFaqs].slice(0, 7)
      : defaultFaqs;

  // Server-rendered structured data — fully crawlable by Google and LLM indexers
  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService', 'HomeAndConstructionBusiness'],
    '@id': `${BASE_URL}/#localbusiness`,
    name: BUSINESS_NAME,
    description: `Professional exterior cleaning services in ${location.name}, ${location.county}. Pressure washing, driveway cleaning, roof cleaning, gutter clearing, render cleaning, patio cleaning, window cleaning and 33 additional exterior services. Fully insured, established 2016, available 24 hours a day, 7 days a week.`,
    url: BASE_URL,
    telephone: PHONE,
    email: 'rrmexternalcleaning@gmail.com',
    foundingDate: '2016',
    priceRange: '££',
    currenciesAccepted: 'GBP',
    paymentAccepted: 'Cash, Bank Transfer, Card',
    slogan: 'Professional Exterior Cleaning — North West England',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '9 Noon Ct',
      addressLocality: 'Newton-le-Willows',
      addressRegion: 'Merseyside',
      postalCode: 'WA12 8QY',
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 53.4575,
      longitude: -2.6729,
    },
    areaServed: [
      {
        '@type': 'City',
        name: location.name,
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: location.county,
        },
      },
      ...location.postcodes.map((p) => ({
        '@type': 'PostalAddress',
        postalCode: p,
        addressCountry: 'GB',
      })),
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '47',
      bestRating: '5',
      worstRating: '1',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Exterior Cleaning Services in ${location.name}`,
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.name,
          description: s.description,
          url: `${BASE_URL}/services/${s.slug}/${location.slug}/`,
        },
      })),
    },
    knowsAbout: [
      'Pressure Washing', 'Soft Wash Cleaning', 'Driveway Cleaning', 'Roof Cleaning',
      'Gutter Clearing', 'Render Cleaning', 'Patio Cleaning', 'Window Cleaning',
      'Exterior Property Maintenance', 'Biocide Treatment', 'Moss Removal', 'Algae Removal',
    ],
    sameAs: [
      'https://www.facebook.com/rrmcleaning',
      'https://www.instagram.com/rrmcleaning',
    ],
    image: {
      '@type': 'ImageObject',
      url: `${BASE_URL}/logo.webp`,
      width: 400,
      height: 400,
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: `${BASE_URL}/locations/` },
      {
        '@type': 'ListItem',
        position: 3,
        name: `Exterior Cleaning ${location.name}`,
        item: `${BASE_URL}/locations/${location.slug}/`,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <Layout>
      {/* JSON-LD Schemas — server-rendered, fully crawlable */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([locationSchema, breadcrumbSchema, faqSchema]),
        }}
      />

      <main itemScope itemType="https://schema.org/WebPage" className="min-h-screen">

        {/* HERO */}
        <section
          id="hero"
          aria-labelledby="hero-h1"
          className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-16 px-4"
        >
          <div className="max-w-5xl mx-auto">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap gap-1.5 text-blue-200 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
                <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                  <Link href="/" itemProp="item" className="hover:text-white transition-colors">
                    <span itemProp="name">Home</span>
                  </Link>
                  <meta itemProp="position" content="1" />
                </li>
                <li aria-hidden="true" className="text-blue-400">/</li>
                <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                  <Link href="/locations/" itemProp="item" className="hover:text-white transition-colors">
                    <span itemProp="name">Locations</span>
                  </Link>
                  <meta itemProp="position" content="2" />
                </li>
                <li aria-hidden="true" className="text-blue-400">/</li>
                <li
                  itemScope
                  itemType="https://schema.org/ListItem"
                  itemProp="itemListElement"
                  aria-current="page"
                  className="text-white"
                >
                  <span itemProp="name">{location.name}</span>
                  <meta itemProp="position" content="3" />
                </li>
              </ol>
            </nav>

            <h1
              id="hero-h1"
              itemProp="name"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight"
            >
              Exterior Cleaning in {location.name}
            </h1>
            <p className="text-blue-100 text-lg sm:text-xl mb-6 max-w-2xl leading-relaxed">
              {location.description}
            </p>

            {/* NLP/LLM entity injection — machine-readable, invisible to users */}
            <span className="sr-only">
              Professional exterior cleaning specialists serving {location.name}, {location.county}.
              Postcodes covered: {location.postcodes.join(', ')}. Services include pressure washing,
              driveway cleaning, roof cleaning, gutter clearing, render cleaning, patio cleaning,
              window cleaning, moss removal, algae treatment, bio-wash, driveway sealing, patio
              sealing, and 28 additional exterior cleaning services. R.R.M External Cleaning
              Specialist — established 2016, fully insured, 5-star rated, available 24 hours a day.
            </span>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a
                href="tel:+447845463877"
                aria-label={`Call R.R.M External Cleaning for a free quote in ${location.name}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-white px-7 py-4 text-base font-bold transition-colors min-h-[56px]"
              >
                Get Free Quote — 07845 463877
              </a>
              <a
                href="mailto:rrmexternalcleaning@gmail.com"
                aria-label={`Email R.R.M External Cleaning for exterior cleaning in ${location.name}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white text-white px-7 py-4 text-base font-semibold hover:bg-white hover:text-blue-700 transition-colors min-h-[56px]"
              >
                Email Us
              </a>
            </div>

            <p className="text-blue-200 text-sm flex flex-wrap gap-3" aria-label="Trust signals">
              <span>Fully Insured</span>
              <span aria-hidden="true">|</span>
              <span>Est. <time dateTime="2016">2016</time></span>
              <span aria-hidden="true">|</span>
              <span>47 Five-Star Reviews</span>
              <span aria-hidden="true">|</span>
              <span>24/7 Available</span>
              <span aria-hidden="true">|</span>
              <span>Free Quotes</span>
              <span aria-hidden="true">|</span>
              <span>No Subcontracting</span>
            </p>
          </div>
        </section>

        {/* LOCAL CHALLENGES & CLIMATE */}
        <section
          id="local-context"
          aria-labelledby="local-h2"
          className="py-12 px-4 bg-white"
        >
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <h2
                id="local-h2"
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"
              >
                Why {location.name} Properties Need Professional Cleaning
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">{location.localChallenges}</p>
              <p className="text-gray-700 leading-relaxed">{location.uniqueAngle}</p>
            </div>
            <aside
              aria-label={`Climate and property context for ${location.name}`}
              className="bg-slate-50 border border-slate-200 p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Local Climate — {location.name}
              </h3>
              <p className="text-gray-700 leading-relaxed">{location.climateNotes}</p>
              <div className="mt-4 pt-4 border-t border-slate-200">
                <p className="text-sm font-medium text-gray-500 mb-1">Postcodes covered:</p>
                <p
                  className="text-sm font-semibold text-gray-800"
                  itemScope
                  itemType="https://schema.org/PostalAddress"
                >
                  <span itemProp="postalCode">{location.postcodes.join(' · ')}</span>
                  <span className="sr-only">, {location.county}, England</span>
                </p>
              </div>
              {location.commercialZones && (
                <div className="mt-3">
                  <p className="text-sm font-medium text-gray-500 mb-1">Commercial zones:</p>
                  <p className="text-sm text-gray-700">{location.commercialZones}</p>
                </div>
              )}
            </aside>
          </div>
        </section>

        {/* ALL 40 SERVICES */}
        <section
          id="services"
          aria-labelledby="services-h2"
          className="py-12 px-4 bg-gray-50"
          itemScope
          itemType="https://schema.org/OfferCatalog"
        >
          <div className="max-w-5xl mx-auto">
            <h2
              id="services-h2"
              itemProp="name"
              className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3"
            >
              All Exterior Cleaning Services in {location.name}
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl leading-relaxed">
              We provide 40 professional exterior cleaning services across {location.name} and the
              wider {location.county} area. Every service is carried out by R.R.M directly —
              no subcontracting. Click any service for {location.name}-specific details and a
              free no-obligation quote.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}/${location.slug}/`}
                  aria-label={`${service.name} in ${location.name} — click for pricing and details`}
                  className="group bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all"
                  itemScope
                  itemType="https://schema.org/Service"
                  itemProp="itemListElement"
                >
                  <h3
                    itemProp="name"
                    className="text-base font-bold text-blue-700 group-hover:text-blue-800 mb-2"
                  >
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                  <span
                    itemProp="areaServed"
                    itemScope
                    itemType="https://schema.org/City"
                    className="sr-only"
                  >
                    <span itemProp="name">{location.name}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* VIDEO */}
        <section id="video" aria-labelledby="video-h2" className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 id="video-h2" className="text-2xl font-bold text-gray-900 mb-6 text-center">
              See Our Work in {location.name}
            </h2>
            <VideoEmbed
              title={`Professional Exterior Cleaning Services in ${location.name}`}
              description={`See our expert cleaning techniques in action in ${location.name}. Watch us deliver professional exterior cleaning results using specialised equipment and proven methods. This video demonstrates the quality and care we bring to every project in ${location.name} and across ${location.county}.`}
              relatedPageUrl={`/locations/${location.slug}/`}
              relatedPageLabel={`More about cleaning services in ${location.name}`}
              location={location.name}
            />
          </div>
        </section>

        {/* NEARBY LOCATIONS */}
        {nearbyLocationsList.length > 0 && (
          <section
            id="nearby"
            aria-labelledby="nearby-h2"
            className="py-12 px-4 bg-gray-50"
          >
            <div className="max-w-5xl mx-auto">
              <h2
                id="nearby-h2"
                className="text-2xl font-bold text-gray-900 mb-6"
              >
                We Also Serve Areas Near {location.name}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {nearbyLocationsList.map((nearby) => (
                  <Link
                    key={nearby.slug}
                    href={`/locations/${nearby.slug}/`}
                    aria-label={`Exterior cleaning services in ${nearby.name}, ${nearby.county}`}
                    className="p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all"
                    itemScope
                    itemType="https://schema.org/City"
                  >
                    <p itemProp="name" className="font-semibold text-blue-700">{nearby.name}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{nearby.county}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ — always shown with default or override questions */}
        <section
          id="faq"
          aria-labelledby="faq-h2"
          className="py-12 px-4 bg-white"
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          <div className="max-w-3xl mx-auto">
            <h2
              id="faq-h2"
              className="text-2xl font-bold text-gray-900 mb-6"
            >
              Frequently Asked Questions — Exterior Cleaning in {location.name}
            </h2>
            <div className="space-y-2">
              {faqItems.map((faq, idx) => (
                <details
                  key={idx}
                  className="group rounded-xl border border-gray-200 bg-gray-50 open:bg-white open:border-blue-300 open:shadow-sm transition-all"
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <summary
                    className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer font-semibold text-gray-900 text-sm leading-snug list-none [&::-webkit-details-marker]:hidden"
                    itemProp="name"
                  >
                    {faq.question}
                    <span
                      aria-hidden="true"
                      className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-700 text-xs flex items-center justify-center group-open:rotate-180 transition-transform"
                    >
                      v
                    </span>
                  </summary>
                  <div
                    className="px-5 pb-4"
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <p itemProp="text" className="text-gray-700 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="cta"
          aria-labelledby="cta-h2"
          className="bg-blue-700 text-white py-14 px-4"
        >
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2
              id="cta-h2"
              className="text-2xl sm:text-3xl font-bold"
            >
              Get Your Free Exterior Cleaning Quote in {location.name}
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed">
              Tell us what your {location.name} property needs — we&apos;ll give you an honest
              price and clear advice, with no pressure. R.R.M has served {location.county}
              since <time dateTime="2016">2016</time> with 47 five-star reviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+447845463877"
                aria-label={`Call R.R.M to book exterior cleaning in ${location.name}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-white px-8 py-4 text-base font-bold transition-colors min-h-[56px]"
              >
                Call Now — 07845 463877
              </a>
              <a
                href="mailto:rrmexternalcleaning@gmail.com"
                aria-label="Email R.R.M External Cleaning for a free quote"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white text-white px-8 py-4 text-base font-semibold hover:bg-white hover:text-blue-700 transition-colors min-h-[56px]"
              >
                Email Free Quote
              </a>
            </div>
            <p className="text-blue-200 text-sm">
              Available 24 hours a day, 7 days a week — no call-out charge for assessments across{' '}
              {location.postcodes.join(', ')}
            </p>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          aria-labelledby="contact-h2"
          className="py-12 px-4 bg-slate-50"
        >
          <div className="max-w-5xl mx-auto">
            <h2
              id="contact-h2"
              className="text-2xl font-bold text-center text-gray-900 mb-2"
            >
              Book Exterior Cleaning in {location.name} — Free Quote
            </h2>
            <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
              Call 07845 463877 or email us — we respond the same day and carry full public
              liability insurance on every job in {location.name} and across {location.county}.
            </p>
            <ContactInfo variant="default" />
          </div>
        </section>

      </main>
    </Layout>
  );
}
