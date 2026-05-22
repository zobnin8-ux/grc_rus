import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.1grc.ru",
        pathname: "/wp-content/**",
      },
    ],
  },
};

export default nextConfig;
