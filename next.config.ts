import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  trailingSlash: true,
  ...(process.env.NODE_ENV === "production" ? { output: "export" as const } : {}),
  ...(isGithubActions ? { basePath: "/jbzytech-blog", assetPrefix: "/jbzytech-blog/" } : {}),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    unoptimized: true,
  },
};

export default nextConfig;
