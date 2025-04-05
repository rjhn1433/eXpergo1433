/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["placeholder.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
    ],
  },
}

module.exports = nextConfig

