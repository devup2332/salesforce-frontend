import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "oechsle.vteximg.com.br",
      },
    ],
  },
  devIndicators: false,
};

export default nextConfig;
