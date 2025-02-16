const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rules) =>
      rules.test?.test?.(".svg"),
    );
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: ["@svgr/webpack"],
      },
    );
    fileLoaderRule.exclude = /\.svg$/i;
    return config;
  },
  experimental: {
    appDir: true,
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    unoptimized: true,
  },
  extension: /\.mdx?$/,
  assetPrefix: isProd ? "" : "",
  basePath: isProd ? "" : "",
  trailingSlash: true,
  output: "export",
};

export default nextConfig;
