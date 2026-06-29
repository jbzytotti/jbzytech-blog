export interface PostFrontmatter {
  title: string;
  description: string;
  slug: string;
  date: string;
  updated?: string;
  author: string;
  category: string;
  keywords: string[];
  featuredImage: string;
  featured: boolean;
  popular: boolean;
}

export interface Post {
  frontmatter: PostFrontmatter;
  content: string;
  slug: string;
  readingTime: number;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  count: number;
}

export interface SearchResult {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  featuredImage: string;
}

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export type CategoryMap = Record<string, { name: string; slug: string; description: string }>;
