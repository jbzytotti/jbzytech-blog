import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const SITE_URL = process.env.SITE_URL || "https://jbzytech.pages.dev";
const postsDir = path.join(root, "content", "posts");
const publicDir = path.join(root, "public");

function getAllSlugs() {
  if (!fs.existsSync(postsDir)) return [];
  return fs.readdirSync(postsDir)
    .filter(f => f.endsWith(".md"))
    .map(f => {
      const raw = fs.readFileSync(path.join(postsDir, f), "utf-8");
      const match = raw.match(/^slug:\s*["']?([^"'\n]+)["']?/m);
      return match ? match[1].trim() : f.replace(/\.md$/, "");
    });
}

function generateSitemap() {
  const slugs = getAllSlugs();
  const staticPages = ["", "/about/", "/contact/", "/privacy-policy/", "/terms/", "/disclaimer/", "/sitemap-page/", "/search/"];
  const categoryPages = ["/category/make-money-online/", "/category/seo/", "/category/blogger/", "/category/ai/", "/category/crypto/", "/category/technology/"];
  const urls = [];

  for (const page of [...staticPages, ...categoryPages]) {
    urls.push(`<url><loc>${SITE_URL}${page}</loc><changefreq>${page === "" ? "daily" : "weekly"}</changefreq><priority>${page === "" ? "1.0" : "0.8"}</priority></url>`);
  }

  for (const slug of slugs) {
    urls.push(`<url><loc>${SITE_URL}/${encodeURIComponent(slug)}/</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>`);
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join("")}</urlset>`;
}

function generateRobots() {
  return `User-agent: *
Allow: /
Sitemap: ${SITE_URL}/sitemap.xml

Disallow: /api/
Disallow: /search?
`;
}

const outDir = path.join(root, "out");

[publicDir, outDir].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "sitemap.xml"), generateSitemap(), "utf-8");
  fs.writeFileSync(path.join(dir, "robots.txt"), generateRobots(), "utf-8");
});

console.log("✓ Generated static sitemap.xml and robots.txt");
