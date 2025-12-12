/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Turbo should be an object, not boolean
    turbo: {
      // You can configure turbo options here if needed
    },
  },
};

module.exports = nextConfig;
