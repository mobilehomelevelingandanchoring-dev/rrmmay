import type { Service, Location } from '@/types';

interface ServiceCardProps {
  service: Service;
  location: Location;
}

export function ServiceCard({ service, location }: ServiceCardProps) {
  const href = `/services/${service.slug}/${location.slug}/`;

  return (
    <a
      href={href}
      className="group flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 leading-snug">
          {service.name}
        </h3>
        <span className="flex-shrink-0 text-blue-400 group-hover:text-blue-600 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
      <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">{service.description}</p>
      <p className="text-xs font-medium text-blue-600 mt-auto">{location.name}</p>
    </a>
  );
}

export default ServiceCard;
