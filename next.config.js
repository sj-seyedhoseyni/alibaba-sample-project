/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    apiAddress: "https://restcountries.com/v3.1",
  },
  images: {
    domains: ["flagcdn.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com",
        port: "",
        pathname: "/*",
      },
    ],
  },
};

module.exports = nextConfig;
