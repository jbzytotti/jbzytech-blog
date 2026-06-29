import type { Post } from "@/lib/types";
import ArticleCard from "./ArticleCard";

export default function LatestArticles({ posts }: { posts: Post[] }) {
  if (!posts.length) return null;

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1 h-8 bg-[#22C55E] rounded-full" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">أحدث المقالات</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.slice(0, 6).map((post) => (
          <ArticleCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
