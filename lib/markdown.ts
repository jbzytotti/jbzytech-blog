import type { TocItem } from "./types";
import GithubSlugger from "github-slugger";

export interface FaqItem {
  question: string;
  answer: string;
}

export function extractToc(markdown: string): TocItem[] {
  const slugger = new GithubSlugger();
  const items: TocItem[] = [];
  const lines = markdown.split("\n");

  for (const line of lines) {
    const match = line.match(/^(#{2,3})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const text = match[2].trim();
      const id = slugger.slug(text);
      items.push({ id, text, level });
    }
  }

  return items;
}

export function extractFaq(content: string): FaqItem[] {
  const items: FaqItem[] = [];
  const faqRegex = /:::faq\n([\s\S]*?):::/g;
  let match;

  while ((match = faqRegex.exec(content)) !== null) {
    const blocks = match[1].trim().split("\n\n");
    for (const block of blocks) {
      const lines = block.split("\n");
      const question = lines[0].replace(/^\*\*(.*?)\*\*:?\s*/, "$1").trim();
      const answer = lines.slice(1).join(" ").trim();
      if (question && answer) {
        items.push({ question, answer });
      }
    }
  }

  return items;
}

export function processContent(content: string): string {
  return content
    .replace(/\[youtube\](.+?)\[\/youtube\]/g, (_, url) => {
      const videoId = extractYoutubeId(url.trim());
      if (!videoId) return _;
      return `<div class="aspect-video my-6"><iframe src="https://www.youtube.com/embed/${videoId}" title="YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
    })
    .replace(/:::callout\{([^}]*)\}\n([\s\S]*?):::/g, (_, type, content) => {
      const className = type.trim() || "info";
      return `<div class="callout callout-${className}">${content.trim()}</div>`;
    })
    .replace(/:::faq\n([\s\S]*?):::/g, "");
}

function extractYoutubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
    /^([a-zA-Z0-9_-]{11})$/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}
