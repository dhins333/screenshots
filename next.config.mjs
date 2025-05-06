/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [new URL(`${process.env.STRAPI_ASSET_URL}/**`)]
  }
};

export default nextConfig;
