import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `اتصل بنا - ${SITE_NAME}`,
  description: `تواصل مع فريق ${SITE_NAME} للاستفسارات والاقتراحات`,
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">اتصل بنا</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          يسعدنا تواصلك معنا. يمكنك مراسلتنا عبر البريد الإلكتروني أو عبر نماذج التواصل أدناه.
        </p>
        <div className="bg-gray-50 dark:bg-[#1e293b] rounded-2xl p-8">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                الاسم
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#0F172A] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                id="email"
                dir="ltr"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#0F172A] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                الرسالة
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#0F172A] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-3 bg-[#2563EB] text-white rounded-xl font-medium hover:bg-[#2563EB]/90 transition-colors"
            >
              إرسال
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
