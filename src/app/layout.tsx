import type { Metadata } from 'next'
import { Inter, M_PLUS_Rounded_1c } from 'next/font/google'
import Script from 'next/script'

import './globals.css'

// フォント設定（font-display最適化）
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap', // FOIT回避
  preload: true,
})

const mPlusRounded = M_PLUS_Rounded_1c({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800', '900'],
  variable: '--font-m-plus-rounded',
  display: 'swap', // FOIT回避
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://candle.iepoyo.com'
      : 'http://localhost:8787'
  ),
  title:
    'iepoyo candle | 宮古島キャンドル手作り体験 - 雨の日・台風OK！カップル・恋人デートに人気',
  description:
    '宮古島で話題のキャンドル手作り体験！雨の日・台風でも安心の室内デート。カップル・恋人の記念日にぴったり。インスタ映え抜群の世界にひとつの作品を一緒に。90分の特別な体験を。',
  keywords:
    '宮古島体験,宮古島雨の日,宮古島カップル,宮古島デート,宮古島手作り体験,宮古島室内,宮古島恋人,宮古島女子旅,宮古島記念日,宮古島インスタ映え,宮古島台風,宮古島屋内,宮古島ものづくり,宮古島クラフト体験,宮古島観光',
  authors: [{ name: 'iepoyo candle' }],
  creator: 'iepoyo candle',
  publisher: 'iepoyo candle',
  category: '旅行・観光・体験',
  classification: '体験・アクティビティ',
  robots: {
    index: process.env.NODE_ENV === 'production',
    follow: process.env.NODE_ENV === 'production',
    googleBot: {
      index: process.env.NODE_ENV === 'production',
      follow: process.env.NODE_ENV === 'production',
      'max-video-preview': process.env.NODE_ENV === 'production' ? -1 : 0,
      'max-image-preview':
        process.env.NODE_ENV === 'production' ? 'large' : 'none',
      'max-snippet': process.env.NODE_ENV === 'production' ? -1 : 0,
    },
  },
  alternates: {
    canonical:
      process.env.NODE_ENV === 'production'
        ? 'https://candle.iepoyo.com'
        : 'http://localhost:8787',
  },
  icons: {
    icon: [
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  openGraph: {
    title:
      'iepoyo candle | 宮古島キャンドル手作り体験 - 雨の日・台風OK！カップル・恋人デートに人気',
    description:
      '宮古島で話題のキャンドル手作り体験！雨の日・台風でも安心の室内デート。カップル・恋人の記念日にぴったり。インスタ映え抜群の世界にひとつの作品を一緒に。90分の特別な体験を。',
    type: 'website',
    locale: 'ja_JP',
    url:
      process.env.NODE_ENV === 'production'
        ? 'https://candle.iepoyo.com'
        : 'http://localhost:8787',
    siteName: 'iepoyo candle',
    images: [
      {
        url: 'https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/5653da66-e4c5-41e4-3485-1d96f8b0e800/square500',
        width: 500,
        height: 500,
        alt: 'iepoyo candle - 宮古島キャンドル手作り体験 雨の日デート・カップル・恋人に人気',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@iepoyocandle',
    creator: '@iepoyocandle',
    title:
      'iepoyo candle | 宮古島キャンドル手作り体験 - 雨の日・台風OK！カップル・恋人デートに人気',
    description:
      '宮古島で話題のキャンドル手作り体験！雨の日・台風でも安心の室内デート。カップル・恋人の記念日にぴったり。インスタ映え抜群の世界にひとつの作品を一緒に。',
    images: [
      'https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/5653da66-e4c5-41e4-3485-1d96f8b0e800/square500',
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <head>
        {/* 条件付きプリロードシステム - ページごとに必要な画像のみプリロード */}
        {/* プリロードはPageコンポーネント側で実装 */}

        {/* フォント最適化 + Critical CSS */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            :root {
              ${inter.variable}: ${inter.style.fontFamily};
              ${mPlusRounded.variable}: ${mPlusRounded.style.fontFamily};
            }
            
            /* Critical CSS - Above the fold */
            * {
              box-sizing: border-box;
            }
            
            html {
              font-display: swap;
              scroll-behavior: smooth;
            }
            
            body {
              margin: 0;
              padding: 0;
              line-height: 1.6;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              font-family: var(${mPlusRounded.variable}), var(${inter.variable}), 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Meiryo', sans-serif;
              font-display: swap;
            }
            
            /* Font loading optimization */
            @font-face {
              font-family: 'Inter';
              font-display: swap;
            }
            
            @font-face {
              font-family: 'M PLUS Rounded 1c';
              font-display: swap;
            }
            
            /* LCP最適化 - Hero section */
            .hero-section {
              min-height: 100vh;
              background: linear-gradient(to bottom right, #FFF7FA, #FCE6F6);
            }
            
            /* CLS防止 - 画像プレースホルダー */
            img {
              display: block;
              max-width: 100%;
              height: auto;
            }
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${mPlusRounded.variable} font-sans antialiased`}
      >
        {/* Google Tag Manager (noscript) - 本番環境のみ */}
        {process.env.NODE_ENV === 'production' && (
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-MXQVMWTH"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        {/* End Google Tag Manager (noscript) */}

        {/* Google Tag Manager - 本番環境のみ */}
        {process.env.NODE_ENV === 'production' && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MXQVMWTH');`,
            }}
          />
        )}

        {/* Google Analytics 4 (GA4) - 本番環境のみ */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-ZGYKQYC3PX"
              strategy="afterInteractive"
            />
            <Script
              id="ga4-script"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-ZGYKQYC3PX');
                `,
              }}
            />
          </>
        )}

        {children}
      </body>
    </html>
  )
}
