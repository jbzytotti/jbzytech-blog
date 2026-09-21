import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { getAllPosts } from "@/lib/posts";

type Freq = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

export const dynamic = "force-static";

const staticPages: [string, number, Freq][] = [
  ["/", 1.0, "daily"],
  ["/about/", 0.8, "weekly"],
  ["/contact/", 0.8, "weekly"],
  ["/privacy-policy/", 0.8, "weekly"],
  ["/terms/", 0.8, "weekly"],
  ["/disclaimer/", 0.8, "weekly"],
  ["/sitemap-page/", 0.8, "weekly"],
  ["/search/", 0.8, "weekly"],
];

const categoryPages: [string, number, Freq][] = [
  ["/category/make-money-online/", 0.8, "weekly"],
  ["/category/seo/", 0.8, "weekly"],
  ["/category/blogger/", 0.8, "weekly"],
  ["/category/ai/", 0.8, "weekly"],
  ["/category/crypto/", 0.8, "weekly"],
  ["/category/technology/", 0.8, "weekly"],
];

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [
    ...staticPages.map(([path, priority, changeFrequency]) => ({
      url: `${SITE_URL}${path}`,
      changeFrequency,
      priority,
    })),
    ...categoryPages.map(([path, priority, changeFrequency]) => ({
      url: `${SITE_URL}${path}`,
      changeFrequency,
      priority,
    })),
    ...getAllPosts().map((post) => ({
      url: `${SITE_URL}/${encodeURIComponent(post.slug)}/`,
      lastModified: post.frontmatter.date,
      changeFrequency: "monthly" as Freq,
      priority: 0.9,
    })),
  ];
  return urls;
}