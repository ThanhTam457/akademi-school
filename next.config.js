/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard",
        statusCode: 301,
      },
    ];
  },
}

module.exports = nextConfig
