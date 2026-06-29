import type { CategoryMap } from "./types";

export const SITE_NAME = "JBZY TECH";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://jbzytechblog.cc.cd";
export const SITE_DESCRIPTION = "مدونة تقنية عربية متخصصة في الربح من الإنترنت، السيو، بلوجر، الذكاء الاصطناعي، العملات الرقمية، والتقنية";
export const SITE_LANG = "ar";
export const SITE_DIR = "rtl";
export const AUTHOR_NAME = "JBZY TECH";
export const SITE_KEYWORDS = ["ربح من الإنترنت", "سيو", "بلوجر", "ذكاء اصطناعي", "عملات رقمية", "تقنية"];

export const CATEGORIES: CategoryMap = {
  "make-money-online": {
    name: "الربح من الإنترنت",
    slug: "make-money-online",
    description: "كل ما يخص الربح من الإنترنت، العمل الحر، التسويق بالعمولة، والتجارة الإلكترونية",
  },
  seo: {
    name: "السيو",
    slug: "seo",
    description: "دروس وشروحات تحسين محركات البحث لتصدر نتائج جوجل",
  },
  blogger: {
    name: "بلوجر",
    slug: "blogger",
    description: "شروحات وقوالب بلوجر، تطوير المدونات، وتحسين الأداء",
  },
  ai: {
    name: "الذكاء الاصطناعي",
    slug: "ai",
    description: "أخبار وتطبيقات الذكاء الاصطناعي، أدوات وتقنيات المستقبل",
  },
  crypto: {
    name: "العملات الرقمية",
    slug: "crypto",
    description: "دليل العملات الرقمية، البيتكوين، البلوكشين، والتداول",
  },
  technology: {
    name: "التقنية",
    slug: "technology",
    description: "أحدث الأخبار التقنية، مراجعات الأجهزة، وتطبيقات الهواتف",
  },
};

export const NAV_ITEMS = [
  { label: "الرئيسية", href: "/" },
  { label: "الربح من الإنترنت", href: "/category/make-money-online" },
  { label: "السيو", href: "/category/seo" },
  { label: "بلوجر", href: "/category/blogger" },
  { label: "الذكاء الاصطناعي", href: "/category/ai" },
  { label: "العملات الرقمية", href: "/category/crypto" },
  { label: "التقنية", href: "/category/technology" },
  { label: "من نحن", href: "/about" },
  { label: "اتصل بنا", href: "/contact" },
];

export const AD_SLOTS = {
  header: "header-ad",
  inArticle: "in-article-ad",
  sidebar: "sidebar-ad",
  footer: "footer-ad",
};

export const GITHUB_DISCUSSION_REPO = "jbzytech/jbzytech-blog";
export const GITHUB_DISCUSSION_CATEGORY = "General";
