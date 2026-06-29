import Link from "next/link";
import { SITE_NAME, NAV_ITEMS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{SITE_NAME}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              مدونة تقنية عربية متخصصة في الربح من الإنترنت، السيو، بلوجر، الذكاء الاصطناعي، العملات الرقمية، والتقنية.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">الأقسام</h4>
            <ul className="space-y-2">
              {NAV_ITEMS.slice(0, 7).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">روابط مهمة</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">من نحن</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">اتصل بنا</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">سياسة الخصوصية</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">شروط الاستخدام</Link></li>
              <li><Link href="/disclaimer" className="text-gray-400 hover:text-white text-sm transition-colors">إخلاء مسؤولية</Link></li>
              <li><Link href="/sitemap-page" className="text-gray-400 hover:text-white text-sm transition-colors">خريطة الموقع</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">تابعنا</h4>
            <div className="flex gap-4">
              <a href="https://twitter.com/jbzytech" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="تويتر">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://github.com/jbzytech" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="جيت هاب">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} {SITE_NAME}. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
