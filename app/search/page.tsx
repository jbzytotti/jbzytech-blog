import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";
import SearchClient from "@/components/SearchClient";

export const metadata: Metadata = {
  title: `بحث - ${SITE_NAME}`,
  description: `ابحث في مقالات ${SITE_NAME}`,
};

export default function SearchPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">بحث</h1>
        <SearchClient />
      </div>
    </div>
  );
}
