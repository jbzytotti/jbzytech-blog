"use client";

import Link from "next/link";
import { NAV_ITEMS } from "@/lib/constants";

export default function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="lg:hidden bg-white dark:bg-[#0F172A] border-b border-gray-200 dark:border-gray-800">
      <nav className="container mx-auto px-4 py-4">
        <ul className="space-y-3">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                className="block text-gray-600 dark:text-gray-300 hover:text-[#2563EB] transition-colors py-2"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
