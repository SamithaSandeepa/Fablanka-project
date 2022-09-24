module.exports = {
  reactStrictMode: true,
  output: "standalone",
  target: "serverless",
  target: "experimental-serverless-trace",
  images: {
    domains: ["assets.example.com"],
    loader: "akamai",
    path: "",
  },
};
