import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `من نحن - ${SITE_NAME}`,
  description: `تعرف على ${SITE_NAME}، مدونة تقنية عربية متخصصة في الربح من الإنترنت، السيو، بلوجر، الذكاء الاصطناعي، العملات الرقمية، والتقنية`,
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">من نحن</h1>
        <div className="prose-custom">
          <p>
            {SITE_NAME} هي مدونة تقنية عربية تهدف إلى تقديم محتوى عالي الجودة في مجالات
            الربح من الإنترنت، تحسين محركات البحث (السيو)، بلوجر، الذكاء الاصطناعي،
            العملات الرقمية، والتقنية بشكل عام.
          </p>
          <p>
            نؤمن بأن المعرفة التقنية يجب أن تكون متاحة للجميع باللغة العربية،
            ونسعى جاهدين لتقديم شروحات مبسطة وعميقة في نفس الوقت.
          </p>
          <h2>رؤيتنا</h2>
          <p>
            أن نكون المصدر العربي الأول للمحتوى التقني الموثوق، ونساعد المستخدمين
            العرب على تطوير مهاراتهم التقنية وزيادة دخلهم من الإنترنت.
          </p>
          <h2>رسالتنا</h2>
          <p>
            تقديم محتوى تقني عربي أصيل، دقيق، ومفيد، يساعد القارئ على فهم التقنيات
            الحديثة وتطبيقها في حياته اليومية والعملية.
          </p>
        </div>
      </div>
    </div>
  );
}
