import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/victoria-roofing-demo",
  assetPrefix: "/victoria-roofing-demo/",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
