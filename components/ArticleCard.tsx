import Link from "next/link";
import type { Post } from "@/lib/types";
import { getCategoryName } from "@/lib/posts";

export default function ArticleCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  return (
    <article className={`group bg-white dark:bg-[#1e293b] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}>
      <Link href={`/${post.slug}`} className="block">
        <div className={`relative overflow-hidden ${featured ? 'h-64 md:h-96' : 'h-48'}`}>
          {post.frontmatter.featuredImage ? (
            <img
              src={post.frontmatter.featuredImage}
              alt={post.frontmatter.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#2563EB] to-[#22C55E] flex items-center justify-center">
              <span className="text-white text-4xl font-bold">{post.frontmatter.title.charAt(0)}</span>
            </div>
          )}
        </div>
        <div className="p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-medium text-[#2563EB] bg-[#2563EB]/10 px-2 py-1 rounded-full">
              {getCategoryName(post.frontmatter.category)}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {post.frontmatter.date}
            </span>
          </div>
          <h3 className={`font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-[#2563EB] transition-colors ${featured ? 'text-2xl' : 'text-lg'}`}>
            {post.frontmatter.title}
          </h3>
          {featured && (
            <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-3">
              {post.frontmatter.description}
            </p>
          )}
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
