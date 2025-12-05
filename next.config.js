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
      {
        protocol: 'https',
        hostname: 'a.storyblok.com',
        port: '',
        pathname: '/**',
      }, {
        protocol: 'https',
        hostname: 'www.okta.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
  cssModules: true,
}

module.exports = nextConfig 