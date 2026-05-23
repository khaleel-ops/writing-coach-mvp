import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Avoid wrong root when another lockfile exists on the machine (e.g. home directory).
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
