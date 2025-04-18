/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // Temporarily disable type checking
    ignoreBuildErrors: true,
  },
  eslint: {
    // Temporarily disable eslint
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig