/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: '',
  trailingSlash: true,
  reactStrictMode: true,
  output: 'standalone',
  experimental: {
    urlImports: ['https://cdn.skypack.dev', 'http://localhost:7100', 'http://localhost:7200'],
  },
};

module.exports = nextConfig;

