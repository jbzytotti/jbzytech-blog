"use client";

export default function Newsletter() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="bg-gradient-to-r from-[#2563EB] to-[#22C55E] rounded-2xl p-8 md:p-12 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">اشترك في النشرة البريدية</h2>
        <p className="text-white/80 mb-6 max-w-lg mx-auto">
          احصل على أحدث المقالات والتحديثات التقنية مباشرة في بريدك الإلكتروني
        </p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="بريدك الإلكتروني"
            className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
            dir="ltr"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-[#0F172A] text-white rounded-xl font-medium hover:bg-[#0F172A]/90 transition-colors whitespace-nowrap"
          >
            اشتراك
          </button>
        </form>
      </div>
    </section>
  );
}
