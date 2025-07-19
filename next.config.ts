const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  // Turbopack configuration (valid keys only)
  turbopack: {
    resolveAlias: {
      "@svgr/webpack": require.resolve("@svgr/webpack"),
    },
    loaders: [
      {
        test: /\.svg$/i,
        resourceQuery: { not: [/url/] },
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              svgo: false,
            },
          },
        ],
      },
      {
        test: /\.svg$/i,
        resourceQuery: /url/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]",
            },
          },
        ],
      },
    ],
  },

  // Webpack fallback for production builds
  webpack(config) {
    config.cache = false;
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
        resourceQuery: {
          not: [...(fileLoaderRule.resourceQuery?.not || []), /url/],
        },
        use: ["@svgr/webpack"],
      },
    );
    fileLoaderRule.exclude = /\.svg$/i;

    // Path normalization for source maps
    config.output.devtoolModuleFilenameTemplate = (info) => {
      return `file:///${info.absoluteResourcePath
        .replace(/\\/g, "/")
        .replace(/^[a-z]:/i, "")}`;
    };

    return config;
  },
  appdir: true,
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
