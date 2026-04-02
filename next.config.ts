import type { NextConfig } from "next";

/**
 * GitHub project pages live at https://<user>.github.io/<repo>/
 * Set BASE_PATH=/<repo> when building for that URL (CI sets this automatically).
 * Omit BASE_PATH for local dev at http://localhost:3000/
 */
const rawBase = process.env.BASE_PATH?.trim() ?? "";
const basePath = rawBase.replace(/\/$/, "");

const nextConfig: NextConfig = {
  output: "export",
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  ...(basePath ? { basePath, assetPrefix: `${basePath}/` } : {}),
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
