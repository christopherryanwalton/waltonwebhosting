/** @type {import('next').NextConfig} */
const nextConfig = {
  // For Dockerfile deployment (Option B)
  output: 'standalone',
  
  // Your domain configuration
  images: {
    domains: ['waltonwebhosting.com'],
  },
  
  // Environment variables that are safe to expose
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://hosting.waltontech.work',
  }
}

module.exports = nextConfig
