// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true, // Add this line to disable optimization for static export
  },
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
}

module.exports = nextConfig