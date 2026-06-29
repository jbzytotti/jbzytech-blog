import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `شروط الاستخدام - ${SITE_NAME}`,
  description: `شروط استخدام مدونة ${SITE_NAME}`,
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">شروط الاستخدام</h1>
        <div className="prose-custom">
          <p>باستخدامك لمدونة {SITE_NAME}، فإنك توافق على شروط الاستخدام التالية:</p>
          <h2>المحتوى</h2>
          <p>جميع المقالات والمحتوى المقدم على هذه المدونة هو لأغراض إعلامية وتعليمية فقط. نبذل قصارى جهدنا لضمان دقة المعلومات، لكننا لا نضمن اكتمالها أو تحديثها.</p>
          <h2>الملكية الفكرية</h2>
          <p>جميع الحقوق الفكرية للمحتوى المنشور على هذه المدونة محفوظة لـ {SITE_NAME}. لا يجوز نسخ أو إعادة نشر المحتوى دون إذن كتابي صريح.</p>
          <h2>الروابط الخارجية</h2>
          <p>قد تحتوي المدونة على روابط لمواقع خارجية. نحن غير مسؤولين عن محتوى هذه المواقع أو سياسات الخصوصية الخاصة بها.</p>
          <h2>التعليقات</h2>
          <p>نرحب بتعليقاتكم وملاحظاتكم. نحتفظ بالحق في حذف أي تعليق غير لائق أو مخالف للقوانين.</p>
          <h2>التعديلات</h2>
          <p>نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم نشر التحديثات على هذه الصفحة.</p>
        </div>
      </div>
    </div>
  );
}
