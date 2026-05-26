import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { generateServiceIndexMetadata } from '@/lib/metadataEngine';
import { generateServiceIndexSchema } from '@/lib/schemaEngine';
import { Breadcrumb } from '@/components/Breadcrumb';
import { CTAButton } from '@/components/CTAButton';
import { TownGrid } from '@/components/TownGrid';

interface PageParams {
  service: string;
}

// ─── Static params: all 40 service slugs ─────────────────────────────────────

export function generateStaticParams(): PageParams[] {
  return services.map((s) => ({ service: s.slug }));
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { service: serviceSlug } = await params;
  const service = services.find((s) => s.slug === serviceSlug);
  if (!service) return {};
  return generateServiceIndexMetadata(service);
}

// ─── Related services from same group ────────────────────────────────────────

function getGroupSiblings(service: (typeof services)[number]) {
  const siblingSlugs = new Set<string>();
  for (const s of services) {
    if (s.slug === service.slug) continue;
    const sharesGroup = s.group.some((g) => service.group.includes(g));
    if (sharesGroup) siblingSlugs.add(s.slug);
  }
  return services
    .filter((s) => siblingSlugs.has(s.slug))
    .slice(0, 4);
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function ServiceIndexPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { service: serviceSlug } = await params;
  const service = services.find((s) => s.slug === serviceSlug);
  if (!service) notFound();

  const schemaString = generateServiceIndexSchema(service);
  const relatedServices = getGroupSiblings(service);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services/' },
    { label: service.name, href: `/services/${service.slug}/` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaString }}
      />

      <main className="min-h-screen">

        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-100">
          <div className="max-w-5xl mx-auto">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        </div>

        {/* Hero */}
        <section className="bg-blue-700 text-white py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              {service.name} Across the North West
            </h1>
            <p className="text-blue-100 text-base sm:text-lg mb-4 max-w-2xl">
              R.R.M External Cleaning Specialist provides professional {service.name.toLowerCase()}
              across 21 towns and cities in the North West — from Liverpool and Manchester to
              Newton-le-Willows, Warrington, and every community in between. Established 2016.
              Fully insured. Available 24/7.
            </p>
            <CTAButton phone="+44 7845 463877" label="Get a Free Quote" />
          </div>
        </section>

        {/* About service */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed text-base">
                {service.description} Our North West service area covers a wide range of property
                types — from Victorian terraces in Liverpool and St Helens to modern executive
                estates in Warrington and Lymm — each requiring the specialist knowledge and
                professional equipment that R.R.M has developed over eight years of continuous
                operation.
              </p>
              <p className="text-gray-700 leading-relaxed text-base mt-4">
                The North West climate creates specific challenges for exterior surfaces:
                persistent Atlantic rainfall, elevated humidity across the Mersey basin, and
                biological growth that colonises unprotected render, tiles, and paving within a
                single season. Our {service.name.toLowerCase()} service addresses these conditions
                using {service.equipment.split(',')[0]} and industry-approved methods, delivering
                results that last rather than simply masking surface contamination. {service.seasonalNote}
              </p>
            </div>
          </div>
        </section>

        {/* Related services from same group */}
        {relatedServices.length > 0 && (
          <section className="py-10 px-4 bg-gray-50 border-t border-gray-100">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                Related Services — {service.group[0]?.replace(/_/g, ' ')} Family
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {relatedServices.map((s) => (
                  <li key={s.slug}>
                    <a
                      href={`/services/${s.slug}/`}
                      className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-700 transition-colors"
                    >
                      <span className="text-blue-400">›</span>
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Town grid */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              {service.shortName} — All 21 Service Locations
            </h2>
            <p className="text-gray-500 text-sm mb-8">
              Select your town to see local pricing, local challenges, and book your free quote.
            </p>
            <TownGrid
              locations={locations}
              serviceSlug={service.slug}
              serviceName={service.name}
            />
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-12 px-4 bg-blue-700 text-white">
          <div className="max-w-5xl mx-auto text-center space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold">
              Book Your {service.shortName} Today — Free Quote
            </h2>
            <p className="text-blue-100 max-w-xl mx-auto text-sm sm:text-base">
              Available 24 hours a day, 7 days a week across the North West. Fully insured.
              No subcontracting. Call now or email for a same-week appointment.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <CTAButton phone="+44 7845 463877" label="Call Now — Free Quote" />
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
