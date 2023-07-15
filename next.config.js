/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["encrypted-tbn0.gstatic.com", "images.pexels.com"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
