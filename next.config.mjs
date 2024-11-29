import withBundleAnalyzer from '@next/bundle-analyzer';
/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true', // Enable only when the ANALYZE environment variable is set
  })({
    // Add other Next.js configurations here if needed
  });

export default nextConfig;
