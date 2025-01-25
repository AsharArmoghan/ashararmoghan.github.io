const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? "" : "",
  basePath: isProd ? "" : "",
  trailingSlash: true,
  output: "export",
};

export default nextConfig;
