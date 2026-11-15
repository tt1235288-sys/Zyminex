
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: false,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },

  // Permanent 301 redirect from old domain to new domain.
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'zyminex.stream',
          },
        ],
        destination: 'https://zyminex.plus/:path*',
        statusCode: 301,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.zyminex.stream',
          },
        ],
        destination: 'https://zyminex.plus/:path*',
        statusCode: 301,
      },
    ];
  },

  output: 'standalone',

  transpilePackages: ['motion'],

  webpack: (config, { dev }) => {
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }

    return config;
  },
};

export default nextConfig;
