import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Powered-By',
            value: '',
          },
          {
            key: 'Server',
            value: '',
          },
        ],
      },
    ];
  },
  poweredByHeader: false,
};

export default nextConfig;
