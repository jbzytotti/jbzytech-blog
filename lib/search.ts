import type { SearchResult } from "./types";
import matter from "gray-matter";
import fs from "fs";
import path from "path";

export function generateSearchIndex(): SearchResult[] {
  const dir = path.join(process.cwd(), "content", "posts");
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf-8");
      const { data } = matter(raw);
      return {
        slug: data.slug || file.replace(/\.md$/, ""),
        title: data.title || "",
        description: data.description || "",
        category: data.category || "",
        date: data.date || "",
        featuredImage: data.featuredImage || "",
      } as SearchResult;
    })
    .filter((item) => item.title);
}

export function searchPosts(
  query: string,
  index: SearchResult[]
): SearchResult[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  return index
    .filter((post) => {
      const title = post.title.toLowerCase();
      const description = post.description.toLowerCase();
      return title.includes(q) || description.includes(q);
    })
    .slice(0, 10);
}
