/** @type {import('next').NextConfig} */
import {findUpSync}  from 'find-up';
import dotenv  from 'dotenv';
import NodePolyfillPlugin from "node-polyfill-webpack-plugin";
// const find = require('find-up');

const findEnv = () => {
  const envPath = findUpSync(process.env.ENV_FILE || '.env');
  if (envPath) {
    dotenv.config({ path: envPath });
  }
};
findEnv();

const nextConfig = {
  experimental: {
    // REFER: https://github.com/vercel/next.js/issues/9474#issuecomment-810212174
    externalDir: true,
    serverComponents: true

  },
  env: {
    API_KEY: process.env.API_KEY,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    PROJECT_ID: process.env.PROJECT_ID,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
    APP_ID: process.env.APP_ID,
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  reactStrictMode: true,
};

export default nextConfig;
