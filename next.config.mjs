/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['news.ycombinator.com'],
  },
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;