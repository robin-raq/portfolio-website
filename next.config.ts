import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "iamraq.github.io",
        pathname: "/public/**",
      },
    ],
  },
};

export default nextConfig;
