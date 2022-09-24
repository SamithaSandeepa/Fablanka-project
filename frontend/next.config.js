module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["assets.example.com"],
    loader: "akamai",
    path: "",
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.optimization.splitChunks.cacheGroups = { }
    config.optimization.minimize = true;
    return config
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL
  }
};
