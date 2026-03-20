import type { NextConfig } from "next";

const isGithubPagesDeploy = process.env.GITHUB_ACTIONS === "true";
const repoBasePath = "/victoria-roofing-demo";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPagesDeploy ? repoBasePath : undefined,
  assetPrefix: isGithubPagesDeploy ? `${repoBasePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
