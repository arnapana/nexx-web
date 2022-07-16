/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'custom'
  },
  experimental: {
    outputStandalone: true
  },
  rewrites: async () => {
    return [
      {
        source: '/healthz',
        destination: '/api/health'
      }
    ]
  }
}

module.exports = nextConfig
