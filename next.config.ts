import type { NextConfig } from 'next'

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig: NextConfig = {
  // Core Web Vitals最適化設定
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-separator', '@radix-ui/react-slot'],
    optimizeServerReact: true,
  },

  // 画像最適化設定（Cloudflare Workers + Cloudflare Images最適化）
  images: {
    unoptimized: true, // Cloudflare Workers環境では画像最適化を無効化
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imagedelivery.net',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920, 2048], // iPhoneサイズ追加
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512], // 512追加
    dangerouslyAllowSVG: false, // セキュリティ向上
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // ビルド最適化（Core Web Vitals対応）
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,

  // ESLint設定（厳密なコードチェック）
  eslint: {
    ignoreDuringBuilds: false,
  },

  // TypeScript設定（厳密な型チェック）
  typescript: {
    ignoreBuildErrors: false,
  },

  // Cloudflare Workers最適化設定

  // 環境変数設定
  env: {
    // Next.jsビルド時に利用可能な環境変数
    NEXT_TELEMETRY_DISABLED: '1',
  },

  // 出力設定（静的エクスポート用）
  // output: process.env.CF_PAGES === '1' ? 'export' : undefined,

  // トレイリングスラッシュ設定
  trailingSlash: false,

  // Turbopack設定（開発環境用）
  turbopack: {
    // ファイル拡張子設定
    resolveExtensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.mjs'],
  },

  // Webpackカスタマイズ（本番ビルド用フォールバック）
  webpack: (config, { isServer }) => {
    // Cloudflare Workers環境でのNode.js互換性向上
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

  // ヘッダー設定
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          // CORS設定（環境変数が未設定の場合は'*'を使用）
          {
            key: 'Access-Control-Allow-Origin',
            value: process.env.ALLOWED_ORIGINS || '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization',
          },
          // セキュリティヘッダー
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          // キャッシュ設定
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=86400',
          },
        ],
      },
    ]
  },
}

export default withBundleAnalyzer(nextConfig)
