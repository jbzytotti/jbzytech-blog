import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllCategorySlugs, getPostsByCategory, getCategoryName, getCategoryDescription } from "@/lib/posts";
import { CATEGORIES } from "@/lib/constants";
import { generatePageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import ArticleCard from "@/components/ArticleCard";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = CATEGORIES[slug];
  if (!cat) return {};
  return generatePageMetadata(cat.name, cat.description, `/category/${slug}`);
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  if (!CATEGORIES[slug]) notFound();

  const posts = getPostsByCategory(slug);
  const name = getCategoryName(slug);
  const description = getCategoryDescription(slug);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/" className="text-sm text-[#2563EB] hover:underline mb-2 inline-block">
          ← الرجوع للرئيسية
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">{name}</h1>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{posts.length} مقال</p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-500 dark:text-gray-400">لا توجد مقالات في هذا القسم بعد</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
