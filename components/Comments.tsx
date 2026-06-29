"use client";

import { useEffect, useRef } from "react";

const GISCUS_CONFIG = {
  repo: "jbzytech/jbzytech-blog",
  repoId: "",
  category: "General",
  categoryId: "",
};

const isConfigured = GISCUS_CONFIG.repoId && GISCUS_CONFIG.categoryId;

export default function Comments() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isConfigured) return;

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", GISCUS_CONFIG.repo);
    script.setAttribute("data-repo-id", GISCUS_CONFIG.repoId);
    script.setAttribute("data-category", GISCUS_CONFIG.category);
    script.setAttribute("data-category-id", GISCUS_CONFIG.categoryId);
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-theme", "preferred_color_scheme");
    script.setAttribute("data-lang", "ar");
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;

    if (ref.current) {
      ref.current.innerHTML = "";
      ref.current.appendChild(script);
    }

    return () => {
      if (ref.current) ref.current.innerHTML = "";
    };
  }, []);

  return (
    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">التعليقات</h3>
      {!isConfigured ? (
        <p className="text-gray-500 dark:text-gray-400 text-sm py-4 text-center">
          قسم التعليقات غير مفعل حالياً
        </p>
      ) : (
        <div ref={ref} />
      )}
    </div>
  );
}
