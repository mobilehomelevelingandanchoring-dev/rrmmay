import type { BreadcrumbItem } from '@/types';

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4">
      <ol
        className="flex flex-wrap items-center gap-1 text-sm text-gray-500"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li
              key={item.href}
              className="flex items-center gap-1"
              itemScope
              itemType="https://schema.org/ListItem"
              itemProp="itemListElement"
            >
              <meta itemProp="position" content={String(index + 1)} />
              {isLast ? (
                <span
                  aria-current="page"
                  className="text-gray-900 font-medium truncate max-w-[200px]"
                  itemProp="name"
                >
                  {item.label}
                </span>
              ) : (
                <>
                  <a
                    href={item.href}
                    className="hover:text-blue-600 hover:underline transition-colors truncate max-w-[200px]"
                    itemProp="item"
                  >
                    <span itemProp="name">{item.label}</span>
                  </a>
                  <span aria-hidden="true" className="text-gray-400 select-none">
                    ›
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
