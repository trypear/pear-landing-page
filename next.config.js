/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    remotePatterns: [
      { protocol: "https", hostname: "pbs.twimg.com" },
      { protocol: "https", hostname: "abs.twimg.com" },
      { protocol: "https", hostname: "pearai.b-cdn.net" },
    ],
  },
};

// next.config.js
const nextConfiguration = {
  ...nextConfig,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  async headers() {
    const longCache = "public, max-age=31536000, immutable";
    const mediaCache =
      "public, max-age=2592000, stale-while-revalidate=604800";

    return [
      {
        source: "/_next/static/:path*",
        headers: [{ key: "Cache-Control", value: longCache }],
      },
      {
        source: "/:all*(svg|jpg|jpeg|png|gif|webp|ico)",
        headers: [{ key: "Cache-Control", value: longCache }],
      },
      {
        source: "/:all*(mp4|webm|mov)",
        headers: [{ key: "Cache-Control", value: mediaCache }],
      },
      {
        source: "/:all*(woff|woff2|ttf|otf)",
        headers: [{ key: "Cache-Control", value: longCache }],
      },
    ];
  },
  async redirects() {
    // remove this redirect in next pearapp release
    return [
      {
        source: "/features/tab-autocomplete",
        destination: "/docs/tab-autocomplete",
        permanent: true,
      },
      {
        source: "/download",
        destination: "/pricing",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfiguration;
