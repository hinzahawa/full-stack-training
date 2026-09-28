/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8080/api/:path*', // ชี้ไปที่ Go Backend ในเครื่อง
      },
    ];
  }
};

export default nextConfig;