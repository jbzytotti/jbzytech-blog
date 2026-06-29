import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts, getCategoryName } from "@/lib/posts";
import { CATEGORIES, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `خريطة الموقع - ${SITE_NAME}`,
  description: `خريطة موقع ${SITE_NAME} - جميع المقالات والأقسام`,
};

export default function SitemapPage() {
  const posts = getAllPosts();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">خريطة الموقع</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">الصفحات</h2>
            <ul className="space-y-2">
              <li><Link href="/" className="text-[#2563EB] hover:underline">الرئيسية</Link></li>
              <li><Link href="/about" className="text-[#2563EB] hover:underline">من نحن</Link></li>
              <li><Link href="/contact" className="text-[#2563EB] hover:underline">اتصل بنا</Link></li>
              <li><Link href="/privacy-policy" className="text-[#2563EB] hover:underline">سياسة الخصوصية</Link></li>
              <li><Link href="/terms" className="text-[#2563EB] hover:underline">شروط الاستخدام</Link></li>
              <li><Link href="/disclaimer" className="text-[#2563EB] hover:underline">إخلاء مسؤولية</Link></li>
              <li><Link href="/search" className="text-[#2563EB] hover:underline">بحث</Link></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">الأقسام</h2>
            <ul className="space-y-2">
              {Object.values(CATEGORIES).map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/category/${cat.slug}`} className="text-[#2563EB] hover:underline">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">جميع المقالات</h2>
            <ul className="space-y-2">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/${post.slug}`} className="text-[#2563EB] hover:underline">
                    {post.frontmatter.title}
                  </Link>
                  <span className="text-gray-500 dark:text-gray-400 text-sm mr-2">
                    - {getCategoryName(post.frontmatter.category)}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
