"use client";

import { useState } from "react";
import type { TocItem } from "@/lib/types";

export default function TableOfContents({ items }: { items: TocItem[] }) {
  const [isOpen, setIsOpen] = useState(true);

  if (!items.length) return null;

  return (
    <div className="bg-gray-50 dark:bg-[#1e293b] rounded-xl p-6 mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-lg font-bold text-gray-900 dark:text-white mb-2"
      >
        <span>محتويات المقال</span>
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <nav>
          <ul className="space-y-1">
            {items.map((item) => (
              <li
                key={item.id}
                style={{ paddingRight: item.level === 3 ? "1rem" : "0" }}
              >
                <a
                  href={`#${item.id}`}
                  className="block text-sm text-gray-600 dark:text-gray-400 hover:text-[#2563EB] dark:hover:text-[#2563EB] transition-colors py-1"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
