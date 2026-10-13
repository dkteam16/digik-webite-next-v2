import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "digitalkangaroos.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "www.digitalkangaroos.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
