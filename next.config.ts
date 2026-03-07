import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false, // Prevents double-mount that breaks GSAP ScrollTrigger
};

export default nextConfig;
