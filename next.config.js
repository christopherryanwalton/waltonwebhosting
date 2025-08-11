// ============================================
// FILE: next.config.js
// Path: /next.config.js (at root level)
// ============================================

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output configuration for deployment
  output: 'standalone',
  
  // Ensure proper image handling
  images: {
    unoptimized: true,
    domains: ['hosting.waltontech.work', 'localhost'],
  },
  
  // Environment variables accessible in the browser
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://hosting.waltontech.work',
  },
  
  // Disable telemetry
  telemetry: {
    disabled: true,
  },
  
  // Performance optimizations
  swcMinify: true,
  
  // Ensures CSS works properly
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
  
  // Redirects (if needed)
  async redirects() {
    return [
      // Example: redirect /home to /
      // {
      //   source: '/home',
      //   destination: '/',
      //   permanent: true,
      // },
    ]
  },
  
  // Webpack configuration (if needed)
  webpack: (config, { isServer }) => {
    // Fix for potential issues with server-side modules
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      }
    }
    return config
  },
  
  // Experimental features (use with caution)
  experimental: {
    // Optimize CSS
    optimizeCss: false,
    // Server components
    serverActions: true,
  },
}

module.exports = nextConfig
