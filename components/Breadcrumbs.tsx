import Link from "next/link";
import type { BreadcrumbItem } from "@/lib/types";

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
        {items.map((item, i) => (
          <li key={item.href} className="flex items-center gap-2">
            {i > 0 && <span>/</span>}
            {i === items.length - 1 ? (
              <span className="text-gray-900 dark:text-white font-medium">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-[#2563EB] transition-colors">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
