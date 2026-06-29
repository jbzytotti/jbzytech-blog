import Link from "next/link";
import type { Post } from "@/lib/types";
import { getCategoryName } from "@/lib/posts";

export default function ArticleListItem({ post }: { post: Post }) {
  return (
    <article className="group border-b border-gray-100 dark:border-gray-800 pb-6 mb-6 last:border-0 last:pb-0 last:mb-0">
      <Link href={`/${post.slug}`} className="flex gap-5">
        <div className="relative w-[120px] h-[90px] sm:w-[180px] sm:h-[120px] shrink-0 rounded-lg overflow-hidden">
          {post.frontmatter.featuredImage ? (
            <img
              src={post.frontmatter.featuredImage}
              alt={post.frontmatter.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#2563EB] to-[#22C55E] flex items-center justify-center">
              <span className="text-white text-xl font-bold">{post.frontmatter.title.charAt(0)}</span>
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[11px] font-medium text-[#2563EB] bg-[#2563EB]/10 px-2 py-0.5 rounded-full">
              {getCategoryName(post.frontmatter.category)}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">{post.frontmatter.date}</span>
          </div>
          <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white line-clamp-2 group-hover:text-[#2563EB] transition-colors mb-1.5">
            {post.frontmatter.title}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-2">
            {post.frontmatter.description}
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <span>{post.frontmatter.author}</span>
            <span>·</span>
            <span>{post.readingTime} دقيقة قراءة</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
