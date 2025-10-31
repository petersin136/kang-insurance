import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopack 설정 (Next.js 16 기본값)
  turbopack: {},
  // 이미지 최적화
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bfvrunxorsxgmeykvfru.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
