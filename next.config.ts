import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/projects/ai-dealer",
        destination: "/projects/ai-manager",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
