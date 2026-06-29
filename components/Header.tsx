"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_ITEMS, SITE_NAME } from "@/lib/constants";
import MobileMenu from "./MobileMenu";
import SearchBox from "./SearchBox";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-[#0F172A]/95 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-[#0F172A] dark:text-white">
            {SITE_NAME}
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-gray-600 dark:text-gray-300 hover:text-[#2563EB] dark:hover:text-[#2563EB] transition-colors whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <SearchBox />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-[#2563EB]"
              aria-label="القائمة"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && <MobileMenu onClose={() => setIsOpen(false)} />}
    </header>
  );
}
