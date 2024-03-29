/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false,
  experimental: {
    outputStandalone: true,
  },
  env: {
    SERVER_API: "http://103.175.216.72/api/moocare",
  },
};

module.exports = nextConfig;
