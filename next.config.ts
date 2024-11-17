import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    ppr: "incremental",
    dynamicIO: true,
    reactCompiler: true,
  },
};

export default nextConfig;
