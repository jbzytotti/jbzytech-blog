import Link from "next/link";
import Image from "next/image";
import { CATEGORIES } from "@/lib/constants";
import { getPostsByCategory } from "@/lib/posts";

const categoryImages: Record<string, string> = {
  "make-money-online": "/images/category-money.jpg",
  seo: "/images/category-seo.jpg",
  blogger: "/images/category-blogger.jpg",
  ai: "/images/category-ai.jpg",
  crypto: "/images/category-crypto.jpg",
  technology: "/images/category-tech.jpg",
};

export default function CategoriesGrid() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1 h-8 bg-[#22C55E] rounded-full" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">التصنيفات</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {Object.values(CATEGORIES).map((cat) => {
          const count = getPostsByCategory(cat.slug).length;
          return (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="group relative h-40 rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] to-[#2563EB] opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="relative h-full flex flex-col items-center justify-center p-4 text-center">
                <h3 className="text-white font-bold text-sm mb-1">{cat.name}</h3>
                <span className="text-gray-300 text-xs">{count} مقال</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
