import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL('https://s2-techtudo.glbimg.com/**'),
      new URL('https://c4.wallpaperflare.com/**'),
      new URL('https://images.squarespace-cdn.com/content/v1/**'),
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
