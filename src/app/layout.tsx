import type { Metadata } from 'next'
import { Inter, M_PLUS_Rounded_1c, Shippori_Mincho } from 'next/font/google'

import Script from 'next/script'

import './globals.css'

// フォント設定（font-display最適化）
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap', // FOIT回避
  preload: true,
})

const shippori = Shippori_Mincho({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-shippori',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://candle.iepoyo.com' : 'http://localhost:8787'),
  title: 'iepoyo candle | 宮古島キャンドル手作り体験 - 雨の日・台風OK！カップル・恋人デートに人気',
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
      'max-image-preview': process.env.NODE_ENV === 'production' ? 'large' : 'none',
      'max-snippet': process.env.NODE_ENV === 'production' ? -1 : 0,
    },
  },
  alternates: {
    canonical: process.env.NODE_ENV === 'production' ? 'https://candle.iepoyo.com' : 'http://localhost:8787',
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
    title: 'iepoyo candle | 宮古島キャンドル手作り体験 - 雨の日・台風OK！カップル・恋人デートに人気',
    description:
      '宮古島で話題のキャンドル手作り体験！雨の日・台風でも安心の室内デート。カップル・恋人の記念日にぴったり。インスタ映え抜群の世界にひとつの作品を一緒に。90分の特別な体験を。',
    type: 'website',
    locale: 'ja_JP',
    url: process.env.NODE_ENV === 'production' ? 'https://candle.iepoyo.com' : 'http://localhost:8787',
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
    title: 'iepoyo candle | 宮古島キャンドル手作り体験 - 雨の日・台風OK！カップル・恋人デートに人気',
    description:
      '宮古島で話題のキャンドル手作り体験！雨の日・台風でも安心の室内デート。カップル・恋人の記念日にぴったり。インスタ映え抜群の世界にひとつの作品を一緒に。',
    images: ['https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/5653da66-e4c5-41e4-3485-1d96f8b0e800/square500'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">


      <body className={`font-serif antialiased`}>
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
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-ZGYKQYC3PX" strategy="afterInteractive" />
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
