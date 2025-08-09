import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["static.thangduong.info"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.thangduong.info",
        pathname: "/public/**",
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });
    config.externals.push("pino-pretty", "lokijs", "encoding");

    return config;
  },
};

export default nextConfig;
