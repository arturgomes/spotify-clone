/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['picsum.photos','via.placeholder.com']
  }
}

module.exports = nextConfig
