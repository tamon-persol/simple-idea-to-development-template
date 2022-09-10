/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  experimental: {
    // REFER: https://github.com/vercel/next.js/issues/9474#issuecomment-810212174
    externalDir: true
  },
  webpack: (config) => {
    config.resolve.alias['~@'] = path.resolve(__dirname, '../common');
    return config;
  },
  reactStrictMode: true
};

module.exports = nextConfig;
