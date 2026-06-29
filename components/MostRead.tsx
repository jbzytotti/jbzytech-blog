import type { Post } from "@/lib/types";
import Link from "next/link";
import { getCategoryName } from "@/lib/posts";

export default function MostRead({ posts }: { posts: Post[] }) {
  if (!posts.length) return null;

  return (
    <section className="bg-gray-50 dark:bg-[#1e293b] py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-8 bg-red-500 rounded-full" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">الأكثر قراءة</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {posts.slice(0, 4).map((post, i) => (
            <Link
              key={post.slug}
              href={`/${post.slug}`}
              className="flex items-center gap-4 bg-white dark:bg-[#0F172A] p-4 rounded-xl hover:shadow-md transition-shadow group"
            >
              <span className="text-3xl font-bold text-[#2563EB]/20 group-hover:text-[#2563EB]/40 transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-0">
                <span className="text-xs text-[#2563EB] font-medium">
                  {getCategoryName(post.frontmatter.category)}
                </span>
                <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-2 group-hover:text-[#2563EB] transition-colors">
                  {post.frontmatter.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
