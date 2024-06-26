const path = require('path');

const withRemoteRefresh = require('next-remote-refresh')({
    paths: [path.resolve(__dirname, 'src', 'contents')]
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    experimental: {
        outputStandalone: true
    },
    i18n: {
        locales: ['en', 'zh'],
        defaultLocale: 'en'
    },
    domains: [
        {

            domain: 'www.robin.mobi',
            defaultLocale: 'en'
        },
        {
            domain: 'robin.mobi',
            defaultLocale: 'zh'
        }
    ],
    eslint: {
        dirs: ['src']
    },
    images: {
        domains: [
            'res.cloudinary.com',

            // Spotify Album
            'i.scdn.co'
        ]
    },
    async redirects() {
        return [
            {
                source: '/library/absolute-import',
                destination: '/shorts/react/absolute-import',
                permanent: true
            },
            {
                source: '/library',
                destination: '/shorts',
                permanent: true
            },
            {
                source: '/library/:slug',
                destination: '/shorts/:slug',
                permanent: true
            }
        ];
    }
};

module.exports = withRemoteRefresh(nextConfig);
