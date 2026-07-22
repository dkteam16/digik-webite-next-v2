import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // The Figma export uses locally-hosted SVG icons/logos under /public/images.
    // They're all first-party, trusted assets, so it's safe to let next/image serve them.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
