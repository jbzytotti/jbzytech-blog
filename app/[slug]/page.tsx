import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllSlugs, getPostBySlug, getRelatedPosts, getAdjacentPosts, getCategoryName, getPopularPosts } from "@/lib/posts";
import { generateArticleMetadata, generateArticleJsonLd, generateBreadcrumbJsonLd } from "@/lib/seo";
import { extractToc, extractFaq, processContent } from "@/lib/markdown";
import { SITE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import ShareButtons from "@/components/ShareButtons";
import RelatedPosts from "@/components/RelatedPosts";
import Comments from "@/components/Comments";
import AdSense from "@/components/AdSense";
import HorizontalAd from "@/components/HorizontalAd";
import Sidebar from "@/components/Sidebar";
import MarkdownContent from "./markdown";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return generateArticleMetadata(post);
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);
  const { prev, next } = getAdjacentPosts(post);
  const toc = extractToc(post.content);
  const faq = extractFaq(post.content);
  const content = processContent(post.content);
  const categoryName = getCategoryName(post.frontmatter.category);
  const categorySlug = post.frontmatter.category;
  const popular = getPopularPosts();

  const graph = [
    JSON.parse(generateArticleJsonLd(post)),
    JSON.parse(
      generateBreadcrumbJsonLd([
        { name: "الرئيسية", item: SITE_URL },
        { name: categoryName, item: `${SITE_URL}/category/${categorySlug}` },
        { name: post.frontmatter.title, item: `${SITE_URL}/${post.slug}` },
      ])
    ),
  ];

  if (faq.length > 0) {
    graph.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  const jsonLd = { "@context": "https://schema.org", "@graph": graph };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HorizontalAd className="py-4" />
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-8">
          <article className="flex-1 min-w-0">
            <Breadcrumbs
              items={[
                { label: "الرئيسية", href: "/" },
                { label: categoryName, href: `/category/${categorySlug}` },
                { label: post.frontmatter.title, href: `/${post.slug}` },
              ]}
            />

            <div className="mb-8">
              <Link
                href={`/category/${categorySlug}`}
                className="inline-block text-xs font-medium text-[#2563EB] bg-[#2563EB]/10 px-3 py-1 rounded-full mb-4"
              >
                {categoryName}
              </Link>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                {post.frontmatter.title}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                {post.frontmatter.description}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-8">
                <span>{post.frontmatter.author}</span>
                <span>·</span>
                <span>تاريخ النشر: {post.frontmatter.date}</span>
                {post.frontmatter.updated && (
                  <>
                    <span>·</span>
                    <span>آخر تحديث: {post.frontmatter.updated}</span>
                  </>
                )}
                <span>·</span>
                <span>{post.readingTime} دقيقة قراءة</span>
              </div>
            </div>

            {post.frontmatter.featuredImage && (
              <div className="relative h-[300px] md:h-[450px] rounded-2xl overflow-hidden mb-8">
                <img
                  src={post.frontmatter.featuredImage}
                  alt={post.frontmatter.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            )}

            <AdSense slot="in-article-ad" className="my-8" />

            <TableOfContents items={toc} />

            <div className="prose-custom">
              <MarkdownContent content={content} />
            </div>

            <AdSense slot="in-article-ad" className="my-8" />

            <div className="flex flex-wrap items-center gap-2 mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
              <span className="text-sm text-gray-500 dark:text-gray-400">الكلمات المفتاحية:</span>
              {post.frontmatter.keywords.map((kw) => (
                <span
                  key={kw}
                  className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full"
                >
                  {kw}
                </span>
              ))}
            </div>

            <div className="mt-6">
              <ShareButtons slug={post.slug} title={post.frontmatter.title} />
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              {prev && (
                <Link
                  href={`/${prev.slug}`}
                  className="flex-1 p-4 bg-gray-50 dark:bg-[#1e293b] rounded-xl hover:shadow-md transition-shadow group"
                >
                  <span className="text-xs text-gray-500 dark:text-gray-400">← المقال السابق</span>
                  <p className="font-semibold text-gray-900 dark:text-white group-hover:text-[#2563EB] transition-colors line-clamp-1">
                    {prev.frontmatter.title}
                  </p>
                </Link>
              )}
              {next && (
                <Link
                  href={`/${next.slug}`}
                  className="flex-1 p-4 bg-gray-50 dark:bg-[#1e293b] rounded-xl hover:shadow-md transition-shadow group text-right"
                >
                  <span className="text-xs text-gray-500 dark:text-gray-400">المقال التالي →</span>
                  <p className="font-semibold text-gray-900 dark:text-white group-hover:text-[#2563EB] transition-colors line-clamp-1">
                    {next.frontmatter.title}
                  </p>
                </Link>
              )}
            </div>

            <RelatedPosts posts={related} />
            <Comments />
          </article>
          <aside className="w-full lg:w-[320px] shrink-0">
            <Sidebar popularPosts={popular} />
          </aside>
        </div>
      </div>
    </>
  );
}
