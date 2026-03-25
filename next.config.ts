import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `
      @use "@/app/styles/base/breakpoints" as *;
      @use "@/app/styles/base/helpers" as *;
    `,
  },
  devIndicators: {
    buildActivity: false,
  } as NextConfig["devIndicators"] & { buildActivity: boolean },
};

export default nextConfig;
