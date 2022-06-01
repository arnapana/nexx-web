/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'custom'
  },
  experimental: {
    outputStandalone: true
  }
}

module.exports = nextConfig
