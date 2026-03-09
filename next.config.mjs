/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images-na.ssl-images-amazon.com" },
      { protocol: "https", hostname: "m.media-amazon.com" },
      { protocol: "https", hostname: "via.placeholder.com" },
      { protocol: "https", hostname: "www.svgrepo.com" },
    ],
  },
};

export default nextConfig;