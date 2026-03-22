import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `
      @use "@/app/styles/base/breakpoints" as *;
      @use "@/app/styles/base/helpers" as *;
    `
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
