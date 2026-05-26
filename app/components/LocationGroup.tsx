import Link from 'next/link';

interface LocationLink {
  label: string;
  href: string;
}

interface LocationGroupProps {
  region: string;
  locations: LocationLink[];
}

export function LocationGroup({ region, locations }: LocationGroupProps) {
  return (
    <article className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="font-heading text-lg font-semibold text-slate-800 mb-3">
        {region}
      </h3>
      <ul className="space-y-1.5" role="list">
        {locations.map((location) => (
          <li key={location.href}>
            <Link
              href={location.href}
              className="text-amber-600 hover:text-amber-700 hover:underline underline-offset-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 rounded"
            >
              {location.label}
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
