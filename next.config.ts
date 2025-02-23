import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  distDir: 'out',
  // Fix for CSS in GitHub Pages
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
