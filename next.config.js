/** @type {import('next').NextConfig} */
const nextConfig = {}

// next.config.js
const nextConfiguration = {
    ...nextConfig,
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      });
  
      return config;
    },
    images: {
      domains: ["s3-alpha-sig.figma.com"]
    }
  };
  
  module.exports = nextConfiguration;
  