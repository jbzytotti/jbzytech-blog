import { getAllPosts, getPopularPosts } from "@/lib/posts";
import { generateHomeMetadata } from "@/lib/seo";
import { generateOrganizationJsonLd, generateWebsiteJsonLd } from "@/lib/seo";
import HorizontalAd from "@/components/HorizontalAd";
import ArticleListItem from "@/components/ArticleListItem";
import Sidebar from "@/components/Sidebar";

export const metadata = generateHomeMetadata();

export default function HomePage() {
  const posts = getAllPosts();
  const popular = getPopularPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      JSON.parse(generateOrganizationJsonLd()),
      JSON.parse(generateWebsiteJsonLd()),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HorizontalAd className="py-4" />
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-8">
          <main className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-7 bg-[#2563EB] rounded-full" />
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">أحدث المقالات</h1>
            </div>
            <div>
              {posts.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400 text-center py-12">لا توجد مقالات بعد</p>
              ) : (
                posts.map((post) => (
                  <ArticleListItem key={post.slug} post={post} />
                ))
              )}
            </div>
          </main>
          <aside className="w-full lg:w-[320px] shrink-0">
            <Sidebar popularPosts={popular} />
          </aside>
        </div>
      </div>
    </>
  );
}
