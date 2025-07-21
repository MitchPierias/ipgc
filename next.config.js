/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ipgc.com.au',
        port: '',
        pathname: '/**',
      },
    ],
  },
  cssModules: true,
}

module.exports = nextConfig 