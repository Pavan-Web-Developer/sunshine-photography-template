/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
      },
    ],
  },
  experimental: {
    turbo: {
      resolveAlias: {
        underscore: "lodash",
      },
      resolveExtensions: [".mdx", ".tsx", ".ts", ".jsx", ".js", ".json"],
    },
  },
};

export default nextConfig;
