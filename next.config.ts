import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
      },
    ],
  },
  webpack: (config) => {
    config.resolve ??= {};
    config.resolve.fallback = {
      ...(config.resolve.fallback ?? {}),
      fs: false,
    };

    return config;
  },
  turbopack: {},
};

export default nextConfig;
