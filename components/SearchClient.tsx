"use client";

export default function SearchClient() {
  return (
    <div>
      <form id="search-form" className="mb-8" onSubmit={(e) => e.preventDefault()}>
        <div className="relative">
          <input
            id="search-input"
            type="text"
            placeholder="ابحث عن مقالات..."
            className="w-full px-6 py-4 pr-14 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1e293b] text-gray-900 dark:text-white text-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
          />
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </form>
      <div id="search-results" className="space-y-4" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (async function() {
              const input = document.getElementById('search-input');
              const results = document.getElementById('search-results');
              let index = [];

              try {
                const res = await fetch('/api/search');
                index = await res.json();
              } catch(e) {}

              function search(q) {
                const query = q.toLowerCase().trim();
                if (!query) { results.innerHTML = ''; return; }
                const matches = index.filter(p =>
                  p.title.toLowerCase().includes(query) ||
                  p.description.toLowerCase().includes(query)
                ).slice(0, 10);
                if (!matches.length) {
                  results.innerHTML = '<p class="text-center text-gray-500 py-8">لا توجد نتائج</p>';
                  return;
                }
                results.innerHTML = matches.map(p => {
                  const categoryName = {
                    'make-money-online': 'الربح من الإنترنت',
                    'seo': 'السيو',
                    'blogger': 'بلوجر',
                    'ai': 'الذكاء الاصطناعي',
                    'crypto': 'العملات الرقمية',
                    'technology': 'التقنية'
                  }[p.category] || p.category;
                  return '<a href="/' + p.slug + '" class="block bg-white dark:bg-[#1e293b] p-4 rounded-xl hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-800">' +
                    '<span class="text-xs text-[#2563EB] font-medium">' + categoryName + '</span>' +
                    '<h3 class="font-bold text-gray-900 dark:text-white mt-1">' + p.title + '</h3>' +
                    '<p class="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">' + p.description + '</p>' +
                    '</a>';
                }).join('');
              }

              input.addEventListener('input', function() { search(this.value); });
              const params = new URLSearchParams(window.location.search);
              const q = params.get('q');
              if (q) { input.value = q; search(q); }
            })();
          `,
        }}
      />
    </div>
  );
}
