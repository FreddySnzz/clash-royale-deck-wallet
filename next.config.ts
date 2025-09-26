import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL('https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/**'),
      new URL('https://s2-techtudo.glbimg.com/**'),
      new URL('https://c4.wallpaperflare.com/**'),
      new URL('https://images.squarespace-cdn.com/content/v1/**'),
      new URL('https://clashroyale.fandom.com/wiki/**'),
      new URL('https://static.wikia.nocookie.net/clashroyale/images/**'),
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
