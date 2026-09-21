import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "./constants";
import type { Post } from "./types";

export function generateRssXml(posts: Post[]): string {
  const items = posts
    .map(
      (post) => `
    <item>
      <title>${escapeXml(post.frontmatter.title)}</title>
      <description>${escapeXml(post.frontmatter.description)}</description>
      <link>${SITE_URL}/${post.slug}</link>
      <guid>${SITE_URL}/${post.slug}</guid>
      <pubDate>${new Date(post.frontmatter.date).toUTCString()}</pubDate>
      <category>${escapeXml(post.frontmatter.category)}</category>
    </item>
  `
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_NAME}</title>
    <description>${SITE_DESCRIPTION}</description>
    <link>${SITE_URL}</link>
    <language>ar</language>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
