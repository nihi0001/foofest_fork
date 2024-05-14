/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
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