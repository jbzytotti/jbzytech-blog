import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/lib/types";
import { getCategoryName } from "@/lib/posts";

export default function Hero({ posts }: { posts: Post[] }) {
  const main = posts[0];
  const secondary = posts.slice(1, 3);

  if (!main) return null;

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Link href={`/${main.slug}`} className="group relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
          {main.frontmatter.featuredImage ? (
            <Image
              src={main.frontmatter.featuredImage}
              alt={main.frontmatter.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#2563EB] to-[#22C55E]" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-0 p-6 lg:p-8">
            <span className="text-xs font-medium text-white bg-[#2563EB] px-3 py-1 rounded-full mb-3 inline-block">
              {getCategoryName(main.frontmatter.category)}
            </span>
            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-3 line-clamp-3">
              {main.frontmatter.title}
            </h2>
            <p className="text-gray-200 text-sm lg:text-base line-clamp-2 mb-4">
              {main.frontmatter.description}
            </p>
            <div className="flex items-center gap-3 text-gray-300 text-sm">
              <span>{main.frontmatter.date}</span>
              <span>·</span>
              <span>{main.readingTime} دقيقة قراءة</span>
            </div>
          </div>
        </Link>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {secondary.map((post) => (
            <Link key={post.slug} href={`/${post.slug}`} className="group relative h-[190px] lg:h-[240px] rounded-xl overflow-hidden">
              {post.frontmatter.featuredImage ? (
                <Image
                  src={post.frontmatter.featuredImage}
                  alt={post.frontmatter.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#0F172A] to-[#2563EB]" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-4">
                <span className="text-[10px] font-medium text-white bg-[#22C55E]/80 px-2 py-0.5 rounded-full mb-2 inline-block">
                  {getCategoryName(post.frontmatter.category)}
                </span>
                <h3 className="text-sm lg:text-base font-bold text-white line-clamp-2">
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
