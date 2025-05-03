/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static exports for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio-nextjs' : '',
  images: {
    unoptimized: true, // For static export on GitHub Pages
  },
  reactStrictMode: true,
};

module.exports = nextConfig; 