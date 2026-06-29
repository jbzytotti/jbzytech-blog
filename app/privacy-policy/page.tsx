import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `سياسة الخصوصية - ${SITE_NAME}`,
  description: `سياسة الخصوصية لمدونة ${SITE_NAME}`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">سياسة الخصوصية</h1>
        <div className="prose-custom">
          <p>نحن في {SITE_NAME} نأخذ خصوصيتك على محمل الجد. توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية معلوماتك الشخصية.</p>
          <h2>المعلومات التي نجمعها</h2>
          <p>نجمع المعلومات التالية:</p>
          <ul>
            <li>معلومات التصفح مثل عنوان IP ونوع المتصفح</li>
            <li>ملفات تعريف الارتباط (Cookies) لتحسين تجربة التصفح</li>
            <li>معلومات الاتصال التي تقدمها طواعية عبر نماذج الاتصال</li>
          </ul>
          <h2>كيف نستخدم معلوماتك</h2>
          <p>نستخدم المعلومات التي نجمعها من أجل:</p>
          <ul>
            <li>تحسين محتوى المدونة وتجربة المستخدم</li>
            <li>تحليل حركة المرور باستخدام Google Analytics</li>
            <li>عرض إعلانات Google AdSense المناسبة</li>
            <li>الرد على استفساراتك ورسائلك</li>
          </ul>
          <h2>ملفات تعريف الارتباط (Cookies)</h2>
          <p>نستخدم ملفات تعريف الارتباط لتحسين تجربتك على الموقع. يمكنك التحكم في إعدادات cookies من خلال متصفحك.</p>
          <h2>Google AdSense</h2>
          <p>نستخدم Google AdSense لعرض الإعلانات. يستخدم Google ملفات تعريف الارتباط لعرض إعلانات مخصصة بناءً على زياراتك السابقة.</p>
          <h2>حقوقك</h2>
          <p>لديك الحق في:</p>
          <ul>
            <li>طلب الوصول إلى معلوماتك الشخصية</li>
            <li>طلب تصحيح أو حذف معلوماتك</li>
            <li>الاعتراض على معالجة بياناتك</li>
          </ul>
          <h2>التواصل معنا</h2>
          <p>إذا كانت لديك أي أسئلة حول سياسة الخصوصية، يرجى التواصل معنا عبر صفحة اتصل بنا.</p>
        </div>
      </div>
    </div>
  );
}
