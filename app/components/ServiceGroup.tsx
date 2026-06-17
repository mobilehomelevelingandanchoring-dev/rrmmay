import Link from 'next/link';

interface ServiceLink {
  label: string;
  href: string;
}

interface ServiceGroupProps {
  title: string;
  services: ServiceLink[];
}

export function ServiceGroup({ title, services }: ServiceGroupProps) {
  return (
    <article className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="font-heading text-lg md:text-xl font-semibold text-slate-800 mb-4">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {services.map((service) => (
          <Link
            key={service.href}
            href={service.href}
            className="inline-block text-sm bg-slate-100 hover:bg-amber-50 hover:text-amber-700 text-slate-700 px-3 py-1.5 rounded-full border border-slate-200 hover:border-amber-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
          >
            {service.label}
          </Link>
        ))}
      </div>
    </article>
  );
}
