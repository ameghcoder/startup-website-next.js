/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'tailus.io',
                port: '',
                pathname: '/sources/**',
            },
            {
                protocol: 'https',
                hostname: 'tailwindui.com',
                port: '',
                pathname: '/plus/img/**'
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**'
            }
        ],
    },
};
// https://tailus.io/sources/blocks/tech-startup/preview/images/slack.png
export default nextConfig;
