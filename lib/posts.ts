import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { Post, PostFrontmatter } from "./types";
import { CATEGORIES } from "./constants";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

function isPostFrontmatter(data: unknown): data is PostFrontmatter {
  if (typeof data !== "object" || data === null) return false;
  const d = data as Record<string, unknown>;
  return (
    typeof d.title === "string" &&
    typeof d.description === "string" &&
    typeof d.slug === "string" &&
    typeof d.date === "string" &&
    typeof d.author === "string" &&
    typeof d.category === "string" &&
    Array.isArray(d.keywords) &&
    typeof d.featuredImage === "string"
  );
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));

  const posts = files
    .map((file) => {
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf-8");
      const { data, content } = matter(raw);

      if (!isPostFrontmatter(data)) return null;

      const slug = data.slug || file.replace(/\.md$/, "");
      const stats = readingTime(content);

      return {
        frontmatter: { ...data, slug } as PostFrontmatter,
        content,
        slug,
        readingTime: Math.ceil(stats.minutes),
      } as Post;
    })
    .filter((p): p is Post => p !== null)
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());

  return posts;
}

export function getPostBySlug(slug: string): Post | null {
  const posts = getAllPosts();
  return posts.find((p) => p.slug === slug || p.slug === decodeURIComponent(slug)) || null;
}

export function getFeaturedPosts(): Post[] {
  return getAllPosts().filter((p) => p.frontmatter.featured);
}

export function getPopularPosts(): Post[] {
  return getAllPosts().filter((p) => p.frontmatter.popular);
}

export function getPostsByCategory(categorySlug: string): Post[] {
  return getAllPosts().filter((p) => p.frontmatter.category === categorySlug);
}

export function getRelatedPosts(current: Post, limit = 4): Post[] {
  return getAllPosts()
    .filter((p) => p.slug !== current.slug)
    .sort((a, b) => {
      const aMatch = a.frontmatter.category === current.frontmatter.category ? 1 : 0;
      const bMatch = b.frontmatter.category === current.frontmatter.category ? 1 : 0;
      return bMatch - aMatch;
    })
    .slice(0, limit);
}

export function getAdjacentPosts(current: Post): { prev: Post | null; next: Post | null } {
  const posts = getAllPosts();
  const idx = posts.findIndex((p) => p.slug === current.slug);
  return {
    prev: idx < posts.length - 1 ? posts[idx + 1] : null,
    next: idx > 0 ? posts[idx - 1] : null,
  };
}

export function getCategoryName(slug: string): string {
  return CATEGORIES[slug]?.name || slug;
}

export function getCategoryDescription(slug: string): string {
  return CATEGORIES[slug]?.description || "";
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}

export function getAllCategorySlugs(): string[] {
  return Object.keys(CATEGORIES);
}

export function getRecentPosts(limit = 6): Post[] {
  return getAllPosts().slice(0, limit);
}
