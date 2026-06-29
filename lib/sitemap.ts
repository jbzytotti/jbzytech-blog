import { SITE_URL } from "./constants";
import type { Post } from "./types";

const staticPages = [
  "",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms",
  "/disclaimer",
  "/sitemap-page",
  "/search",
];

const categoryPages = [
  "/category/make-money-online",
  "/category/seo",
  "/category/blogger",
  "/category/ai",
  "/category/crypto",
  "/category/technology",
];

export function generateSitemapXml(posts: Post[]): string {
  const urls = [...staticPages, ...categoryPages]
    .map(
      (page) => `
    <url>
      <loc>${SITE_URL}${page}</loc>
      <changefreq>${page === "" ? "daily" : "weekly"}</changefreq>
      <priority>${page === "" ? "1.0" : "0.8"}</priority>
    </url>
  `
    )
    .join("");

  const postUrls = posts
    .map(
      (post) => `
    <url>
      <loc>${SITE_URL}/${post.slug}</loc>
      <lastmod>${post.frontmatter.date}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.9</priority>
    </url>
  `
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
  ${postUrls}
</urlset>`;
}
