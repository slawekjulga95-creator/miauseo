import type { NextConfig } from "next";
import path from "path";
import redirects from "./redirects.json" with { type: "json" };

const nextConfig: NextConfig = {
  /** Jedno źródło prawdy dla przekierowań: redirects.json. */
  async redirects() {
    return redirects.map(({ from, to }) => ({
      source: from,
      destination: to,
      permanent: true, // 308 — dla SEO równoważne 301, zachowuje metodę
    }));
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "img.youtube.com" },
    ],
  },
};

export default nextConfig;
