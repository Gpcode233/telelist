import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'telegram.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 't.me',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
