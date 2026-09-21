"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setIsOpen(false);
      setQuery("");
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 dark:text-gray-300 hover:text-[#2563EB] transition-colors"
        aria-label="بحث"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-72 bg-white dark:bg-[#1e293b] rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-3">
          <form onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ابحث في المدونة..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#0F172A] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] text-sm"
            />
          </form>
        </div>
      )}
    </div>
  );
}
