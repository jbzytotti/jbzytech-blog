import type { Post } from "@/lib/types";
import Link from "next/link";
import { getCategoryName } from "@/lib/posts";
import AdSense from "./AdSense";

export default function Sidebar({ popularPosts }: { popularPosts: Post[] }) {
  return (
    <aside className="space-y-6">
      <div className="space-y-4">
        <AdSense slot="sidebar-ad-1" className="w-full min-h-[250px]" />
        <AdSense slot="sidebar-ad-2" className="w-full min-h-[250px]" />
        <AdSense slot="sidebar-ad-3" className="w-full min-h-[250px]" />
      </div>

      <div className="bg-white dark:bg-[#1e293b] rounded-xl p-5 shadow-sm">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-1 h-6 bg-red-500 rounded-full" />
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">الأكثر قراءة</h3>
        </div>
        <div className="space-y-4">
          {popularPosts.slice(0, 5).map((post, i) => (
            <Link
              key={post.slug}
              href={`/${post.slug}`}
              className="flex items-start gap-3 group"
            >
              <span className="text-2xl font-bold text-[#2563EB]/20 group-hover:text-[#2563EB]/40 transition-colors leading-none mt-0.5 min-w-[28px]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-0">
                <span className="text-[11px] text-[#2563EB] font-medium">
                  {getCategoryName(post.frontmatter.category)}
                </span>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-2 group-hover:text-[#2563EB] transition-colors">
                  {post.frontmatter.title}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-[#1e293b] rounded-xl p-5 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-6 bg-[#2563EB] rounded-full" />
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">تابعنا</h3>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <a href="https://www.facebook.com/jbzytech" target="_blank" rel="noopener noreferrer" aria-label="فيسبوك" className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 hover:bg-[#1877F2] hover:text-white text-gray-600 dark:text-gray-300 px-3 py-2.5 rounded-lg text-sm font-medium transition-all">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            فيسبوك
          </a>
          <a href="https://www.youtube.com/@jbzytech" target="_blank" rel="noopener noreferrer" aria-label="يوتيوب" className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 hover:bg-[#FF0000] hover:text-white text-gray-600 dark:text-gray-300 px-3 py-2.5 rounded-lg text-sm font-medium transition-all">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            يوتيوب
          </a>
          <a href="https://www.instagram.com/janjacoup" target="_blank" rel="noopener noreferrer" aria-label="انستغرام" className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 hover:bg-[#E4405F] hover:text-white text-gray-600 dark:text-gray-300 px-3 py-2.5 rounded-lg text-sm font-medium transition-all">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            انستغرام
          </a>
          <a href="https://x.com/jbzy2tech" target="_blank" rel="noopener noreferrer" aria-label="إكس" className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 hover:bg-black dark:hover:bg-white dark:hover:text-black hover:text-white text-gray-600 dark:text-gray-300 px-3 py-2.5 rounded-lg text-sm font-medium transition-all">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            إكس
          </a>
        </div>
      </div>
    </aside>
  );
}
