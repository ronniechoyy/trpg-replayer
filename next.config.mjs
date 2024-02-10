/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/service-worker.js',
        headers: [{ key: 'Content-Type', value: 'application/javascript' }],
      },
    ];
  },
};

export default nextConfig;