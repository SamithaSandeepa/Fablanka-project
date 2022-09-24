module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["assets.example.com"],
    loader: "akamai",
    path: "",
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.optimization.splitChunks.cacheGroups = {};
    config.optimization.minimize = true;
    return config;
  },
};
