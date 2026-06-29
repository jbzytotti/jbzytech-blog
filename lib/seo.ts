import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "./constants";
import type { Post } from "./types";
import type { Metadata } from "next";

export function generateArticleMetadata(post: Post): Metadata {
  const url = `${SITE_URL}/${post.slug}`;
  const images = post.frontmatter.featuredImage
    ? [{ url: post.frontmatter.featuredImage, width: 1200, height: 630 }]
    : [];

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    keywords: post.frontmatter.keywords.join(", "),
    authors: [{ name: post.frontmatter.author }],
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      url,
      siteName: SITE_NAME,
      images,
      locale: "ar_AR",
      type: "article",
      publishedTime: post.frontmatter.date,
      modifiedTime: post.frontmatter.updated || post.frontmatter.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      images: post.frontmatter.featuredImage ? [post.frontmatter.featuredImage] : [],
    },
    alternates: { canonical: url },
  };
}

export function generatePageMetadata(title: string, description: string, path: string): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title: `${title} - ${SITE_NAME}`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} - ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: "ar_AR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} - ${SITE_NAME}`,
      description,
    },
  };
}

export function generateHomeMetadata(): Metadata {
  return {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    alternates: { canonical: SITE_URL },
    openGraph: {
      title: SITE_NAME,
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      siteName: SITE_NAME,
      locale: "ar_AR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: SITE_NAME,
      description: SITE_DESCRIPTION,
    },
  };
}

export function generateArticleJsonLd(post: Post): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.frontmatter.title,
    description: post.frontmatter.description,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    datePublished: post.frontmatter.date,
    dateModified: post.frontmatter.updated || post.frontmatter.date,
    image: post.frontmatter.featuredImage,
    url: `${SITE_URL}/${post.slug}`,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/${post.slug}`,
    },
  });
}

export function generateBreadcrumbJsonLd(items: { name: string; item: string }[]): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.item,
    })),
  });
}

export function generateOrganizationJsonLd(): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    sameAs: [
      "https://twitter.com/jbzytech",
      "https://github.com/jbzytech",
    ],
  });
}

export function generateWebsiteJsonLd(): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: "ar",
  });
}
