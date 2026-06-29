"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import Link from "next/link";

export default function MarkdownContent({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw, rehypeHighlight]}
      components={{
        a: ({ href, children, ...props }) => {
          if (href?.startsWith("http") || href?.startsWith("https")) {
            return (
              <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
                {children}
              </a>
            );
          }
          if (href?.startsWith("/")) {
            return (
              <Link href={href} {...props}>
                {children}
              </Link>
            );
          }
          return <a href={href} {...props}>{children}</a>;
        },
        img: ({ src, alt }) => {
          if (!src) return null;
          return (
            <div className="w-full h-[300px] md:h-[400px] my-8">
              <img
                src={src as string}
                alt={alt || ""}
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
          );
        },
        h2: ({ children, ...props }) => {
          const id = String(children).toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
          return <h2 id={id} {...props}>{children}</h2>;
        },
        h3: ({ children, ...props }) => {
          const id = String(children).toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
          return <h3 id={id} {...props}>{children}</h3>;
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
