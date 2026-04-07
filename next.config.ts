import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Only set turbopack root locally (multi lockfile warning). Omit on Vercel so
  // production builds use the default project root.
  ...(!process.env.VERCEL && {
    turbopack: {
      root: path.join(__dirname),
    },
  }),
};

export default nextConfig;
