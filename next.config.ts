import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.0.11'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.rawg.io',
        port: '',
        pathname: '/**',
      }
    ]
  }
};

export default nextConfig;
