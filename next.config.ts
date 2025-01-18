import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
//   output: "export",
//   basePath: "/portfolio",
//   trailingSlash: true,
// };
const isProd = process.env.NODE_ENV === "production";
const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? "/portfolio/" : "",
  basePath: isProd ? "/portfolio" : "",
  trailingSlash: true,
  output: "export",
};
export default nextConfig;
