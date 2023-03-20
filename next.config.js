const { get } = require('@vercel/edge-config');
const { withContentlayer } = require('next-contentlayer');
// const path = require('path');
// const glob = require('glob');

/** @type {import('next').NextConfig} */
const nextConfig = {
	// lessLoaderOptions: {
	// 	javascriptEnabled: true
	// },
	transpilePackages: ['antd'],
	images: {
		formats: ['image/avif', 'image/webp'],
		// Twitter Profile Picture
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'pbs.twimg.com',
				pathname: '/**'
			}
		]
	},
	experimental: {
		appDir: true,
		swcFileReading: true,
		swcPlugins: ['plugin', {}]
	},
	webpack5: true,
	webpack: (config) => {
		config.module.rules.push({
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: [
						[
							'@babel/env',
							{
								useBuiltIns: 'entry',
								corejs: 3,
								targets: {
									browsers: ['last 3 versions', 'ie >= 11'],
									node: 'current'
								}
							}
						]
					],
					plugins: []
				}
			}
		});

		return config;
	},
	redirects() {
		try {
			return get('redirects');
		} catch {
			return [];
		}
	},
	headers() {
		return [
			{
				source: '/(.*)',
				headers: securityHeaders
			}
		];
	}
};

// https://nextjs.org/docs/advanced-features/security-headers
const ContentSecurityPolicy = `
    default-src 'self' vercel.live;
    script-src 'self' 'unsafe-eval' 'unsafe-inline' cdn.vercel-insights.com vercel.live;
    style-src 'self' 'unsafe-inline';
    img-src * blob: data:;
    media-src 'none';
    connect-src *;
    font-src 'self';
`;

const securityHeaders = [
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
	{
		key: 'Content-Security-Policy',
		value: ContentSecurityPolicy.replace(/\n/g, '')
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
	{
		key: 'Referrer-Policy',
		value: 'origin-when-cross-origin'
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
	{
		key: 'X-Frame-Options',
		value: 'DENY'
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
	{
		key: 'X-Content-Type-Options',
		value: 'nosniff'
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
	{
		key: 'X-DNS-Prefetch-Control',
		value: 'on'
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
	{
		key: 'Strict-Transport-Security',
		value: 'max-age=31536000; includeSubDomains; preload'
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
	{
		key: 'Permissions-Policy',
		value: 'camera=(), microphone=(), geolocation=()'
	}
];

module.exports = withContentlayer(nextConfig);
