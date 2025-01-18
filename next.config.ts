import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? "" : "",
  basePath: isProd ? "" : "",
  trailingSlash: true,
  output: "export",
};
export default nextConfig;
