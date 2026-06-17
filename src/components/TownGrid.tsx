import type { Location } from '@/types';

interface TownGridProps {
  locations: Location[];
  serviceSlug: string;
  serviceName?: string;
}

export function TownGrid({ locations, serviceSlug, serviceName }: TownGridProps) {
  const tier1 = locations.filter((l) => l.tier === 1);
  const tier2 = locations.filter((l) => l.tier === 2);
  const tier3 = locations.filter((l) => l.tier === 3);

  return (
    <div className="space-y-8">
      {/* Tier 1 — Major Service Areas */}
      {tier1.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Major Service Areas
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tier1.map((location) => (
              <a
                key={location.slug}
                href={`/services/${serviceSlug}/${location.slug}/`}
                className="group relative flex flex-col gap-2 rounded-xl border-2 border-blue-200 bg-blue-50 p-5 shadow-sm transition-all hover:shadow-md hover:border-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-bold text-blue-800 group-hover:text-blue-900">
                    {location.name}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-blue-600 px-2.5 py-0.5 text-xs font-medium text-white">
                    Major Area
                  </span>
                </div>
                <p className="text-xs text-blue-700">
                  {serviceName ?? 'Exterior Cleaning'} in {location.name}, {location.county}
                </p>
                <p className="text-xs text-gray-500">{location.postcodes.join(', ')}</p>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Tier 2 — Secondary Areas */}
      {tier2.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Secondary Service Areas
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tier2.map((location) => (
              <a
                key={location.slug}
                href={`/services/${serviceSlug}/${location.slug}/`}
                className="group flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md hover:border-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <span className="text-sm font-semibold text-gray-900 group-hover:text-blue-700">
                  {location.name}
                </span>
                <p className="text-xs text-gray-500">
                  {location.county} · {location.postcodes.join(', ')}
                </p>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Tier 3 — Supporting Towns */}
      {tier3.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            All Covered Areas
          </h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {tier3.map((location) => (
              <li key={location.slug}>
                <a
                  href={`/services/${serviceSlug}/${location.slug}/`}
                  className="group flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <span
                    aria-hidden="true"
                    className="text-gray-300 group-hover:text-blue-400 transition-colors"
                  >
                    ›
                  </span>
                  {location.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TownGrid;
