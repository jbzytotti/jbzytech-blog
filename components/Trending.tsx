import type { Post } from "@/lib/types";
import Link from "next/link";

export default function Trending({ posts }: { posts: Post[] }) {
  if (!posts.length) return null;

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1 h-8 bg-orange-500 rounded-full" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">ترند</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {posts.slice(0, 4).map((post, i) => (
          <Link
            key={post.slug}
            href={`/${post.slug}`}
            className="bg-white dark:bg-[#1e293b] p-4 rounded-xl hover:shadow-md transition-shadow group border border-gray-100 dark:border-gray-800"
          >
            <span className="text-4xl font-bold text-[#2563EB]/10 block mb-2">0{i + 1}</span>
            <h3 className="font-semibold text-sm text-gray-900 dark:text-white line-clamp-3 group-hover:text-[#2563EB] transition-colors">
              {post.frontmatter.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
