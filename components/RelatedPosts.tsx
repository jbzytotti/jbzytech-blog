import type { Post } from "@/lib/types";
import ArticleCard from "./ArticleCard";

export default function RelatedPosts({ posts }: { posts: Post[] }) {
  if (!posts.length) return null;

  return (
    <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">مقالات ذات صلة</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {posts.slice(0, 4).map((post) => (
          <ArticleCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
