/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['source.unsplash.com'], // Tilføj dette domæne til at tillade billeder fra source.unsplash.com
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yielding-cooperative-tarsal.glitch.me",
      },
    ],
  },
};
export default nextConfig;
//