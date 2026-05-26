import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { generateContent } from '@/lib/contentEngine';
import { generatePageMetadata } from '@/lib/metadataEngine';
import { generateSchema } from '@/lib/schemaEngine';
import { FAQ } from '@/components/FAQ';
import { Breadcrumb } from '@/components/Breadcrumb';
import { CTAButton } from '@/components/CTAButton';

interface PageParams {
  service: string;
  town: string;
}

// ─── Static params: 40 services × 21 locations = 840 pages ───────────────────

export function generateStaticParams(): PageParams[] {
  const params: PageParams[] = [];
  for (const service of services) {
    for (const location of locations) {
      params.push({ service: service.slug, town: location.slug });
    }
  }
  return params;
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { service: serviceSlug, town: townSlug } = await params;
  const service = services.find((s) => s.slug === serviceSlug);
  const location = locations.find((l) => l.slug === townSlug);
  if (!service || !location) return {};
  return generatePageMetadata(service, location);
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function renderParagraphs(text: string): React.ReactNode {
  return text
    .split('\n\n')
    .filter(Boolean)
    .map((para, i) => (
      <p
        key={i}
        className="text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: para }}
      />
    ));
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function ServiceTownPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { service: serviceSlug, town: townSlug } = await params;

  const service = services.find((s) => s.slug === serviceSlug);
  const location = locations.find((l) => l.slug === townSlug);

  if (!service || !location) {
    notFound();
  }

  const content = generateContent(service, location);
  const schemaString = generateSchema(service, location, content);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services/' },
    { label: service.name, href: `/services/${service.slug}/` },
    { label: location.name, href: `/services/${service.slug}/${location.slug}/` },
  ];

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaString }}
      />

      <main itemScope itemType="https://schema.org/Service" className="min-h-screen">

        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-100">
          <div className="max-w-5xl mx-auto">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        </div>

        {/* HERO */}
        <section
          id="hero"
          className="bg-gradient-to-b from-blue-700 to-blue-800 text-white py-14 px-4"
        >
          <div className="max-w-5xl mx-auto">
            <h1
              itemProp="name"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight mb-4"
            >
              {content.h1}
            </h1>
            <p className="text-blue-100 text-base sm:text-lg mb-6 max-w-2xl">
              R.R.M External Cleaning Specialist — serving {location.name} and the wider{' '}
              {location.county} area since 2016. Fully insured. Available 24 hours a day.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <CTAButton phone="+44 7845 463877" label="Get a Free Quote" variant="primary" />
              <a
                href="mailto:rrmexternalcleaning@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white text-white px-6 py-4 text-base font-semibold hover:bg-white hover:text-blue-700 transition-colors min-h-[56px]"
              >
                ✉ Email Us
              </a>
            </div>
            <p className="text-blue-200 text-sm flex flex-wrap gap-3">
              <span>✓ Fully Insured</span>
              <span>|</span>
              <span>✓ Est. 2016</span>
              <span>|</span>
              <span>✓ 24/7 Available</span>
              <span>|</span>
              <span>✓ Free Quotes</span>
              <span>|</span>
              <span>✓ No Subcontracting</span>
            </p>
          </div>
        </section>

        {/* ABOUT TOWN */}
        <section
          id="about-town"
          aria-labelledby="about-h2"
          className="py-12 px-4 bg-white"
        >
          <div className="max-w-5xl mx-auto space-y-4">
            <h2
              id="about-h2"
              className="text-xl sm:text-2xl font-bold text-gray-900 mb-4"
            >
              {content.introSection.h2}
            </h2>
            {renderParagraphs(content.introSection.body)}
          </div>
        </section>

        {/* SERVICE DETAIL */}
        <section
          id="service-detail"
          aria-labelledby="service-h2"
          className="py-12 px-4 bg-gray-50"
        >
          <div className="max-w-5xl mx-auto">
            <h2
              id="service-h2"
              className="text-xl sm:text-2xl font-bold text-gray-900 mb-8"
            >
              {content.serviceSection.h2}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.serviceSection.subsections.map((sub) => (
                <article
                  key={sub.h3}
                  className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm"
                >
                  <h3 className="text-base font-bold text-gray-900 mb-3">{sub.h3}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{sub.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED SERVICES */}
        <section
          id="related-services"
          aria-labelledby="related-h2"
          className="py-12 px-4 bg-white"
        >
          <div className="max-w-5xl mx-auto">
            <h2
              id="related-h2"
              className="text-xl sm:text-2xl font-bold text-gray-900 mb-6"
            >
              {content.relatedServicesSection.h2}
            </h2>
            <ul className="space-y-3">
              {content.relatedServicesSection.items.map((item) => (
                <li
                  key={item.href}
                  className="flex items-start gap-3 rounded-lg border border-gray-100 bg-gray-50 p-4"
                >
                  <span className="text-blue-500 mt-0.5 flex-shrink-0">›</span>
                  <div>
                    <a
                      href={item.href}
                      className="font-semibold text-blue-700 hover:underline text-sm"
                    >
                      {item.name}
                    </a>
                    <span className="text-gray-500 text-sm"> — {item.blurb}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* TRUST */}
        <section
          id="why-rrm"
          aria-labelledby="trust-h2"
          className="py-12 px-4 bg-blue-50"
        >
          <div className="max-w-5xl mx-auto space-y-4">
            <h2
              id="trust-h2"
              className="text-xl sm:text-2xl font-bold text-gray-900 mb-4"
            >
              {content.trustSection.h2}
            </h2>
            {renderParagraphs(content.trustSection.body)}
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          aria-labelledby="faq-h2"
          className="py-12 px-4 bg-white"
        >
          <div className="max-w-5xl mx-auto">
            <h2
              id="faq-h2"
              className="text-xl sm:text-2xl font-bold text-gray-900 mb-6"
            >
              Frequently Asked Questions — {service.shortName} in {location.name}
            </h2>
            <FAQ items={content.faqItems} />
          </div>
        </section>

        {/* NEARBY AREAS */}
        <section
          id="nearby"
          aria-labelledby="nearby-h2"
          className="py-12 px-4 bg-gray-50"
        >
          <div className="max-w-5xl mx-auto">
            <h2
              id="nearby-h2"
              className="text-xl sm:text-2xl font-bold text-gray-900 mb-4"
            >
              {service.shortName} Near {location.name} — Areas We Cover
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {content.nearbyAreas.text}{' '}
              {content.nearbyAreas.links.map((link, i) => (
                <span key={link.href}>
                  <a href={link.href} className="text-blue-600 hover:underline font-medium">
                    {link.label}
                  </a>
                  {i < content.nearbyAreas.links.length - 1 ? ', ' : '.'}
                </span>
              ))}
            </p>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section
          id="cta-bottom"
          aria-labelledby="cta-h2"
          className="py-14 px-4 bg-blue-700 text-white"
        >
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h2
              id="cta-h2"
              className="text-xl sm:text-2xl font-bold"
            >
              {content.ctaSection.h2}
            </h2>
            <div
              className="text-blue-100 leading-relaxed space-y-3 text-sm sm:text-base max-w-2xl mx-auto"
              dangerouslySetInnerHTML={{
                __html: content.ctaSection.body.replace(
                  /rrmexternalcleaning@gmail\.com/g,
                  '<a href="mailto:rrmexternalcleaning@gmail.com" class="underline text-white">rrmexternalcleaning@gmail.com</a>',
                ),
              }}
            />
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <CTAButton phone="+44 7845 463877" label="Call Now — Free Quote" variant="primary" />
            </div>
            <p className="text-blue-200 text-sm">
              Email:{' '}
              <a
                href="mailto:rrmexternalcleaning@gmail.com"
                className="underline text-white hover:text-blue-100"
              >
                rrmexternalcleaning@gmail.com
              </a>
            </p>
          </div>
        </section>

      </main>
    </>
  );
}
