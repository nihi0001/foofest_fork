/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yielding-cooperative-tarsal.glitch.me",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
