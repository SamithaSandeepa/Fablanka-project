module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["assets.example.com"],
    loader: "akamai",
    path: "",
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
};
