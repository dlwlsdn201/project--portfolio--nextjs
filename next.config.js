const { get } = require('@vercel/edge-config');
const { withContentlayer } = require('next-contentlayer');
const isProduction = process.env.NODE_ENV === 'production';
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
        pathname: '/**',
      },
    ],
  },
  experimental: {
    appDir: true,
    swcFileReading: true,
    swcPlugins: ['plugin', {}],
  },
  webpack5: true,
  webpack: (config) => {
    (config.resolve.fallback = { fs: false }),
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
                    node: 'current',
                  },
                },
              ],
            ],
            plugins: [],
          },
        },
      });

    config.mode = isProduction ? 'production' : 'development';
    config.optimization = {
      ...config.optimization,
      minimize: isProduction ? true : false, // Development Mode일 때, Optimization 비활성화 (개발 모드 fash refresh 속도 느리기 때문)
      minimizer: [
        new TerserPlugin({
          test: /\.(js|jsx|ts|tsx)$/,
          parallel: true,
          terserOptions: {
            format: {
              comments: false, // 빌드 시, comment 제거 (주석 제거)
            },
            compress: {
              drop_console: true, // 빌드 시, console.* 구문 코드 제거
            },
          },
          extractComments: false, // 주석을 별도의 파일로 추출할 지 여부
        }),
      ],
    };

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
        headers: securityHeaders,
      },
    ];
  },
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
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
];

module.exports = withContentlayer(nextConfig);
