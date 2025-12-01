'use client'

import Link from 'next/link'
import { FaInstagram, FaLine } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'サービス',
      links: [
        { href: '/experience', label: 'キャンドル体験' },
        { href: '/gallery', label: 'ギャラリー' },
        { href: '/reservation', label: 'ご予約' },
      ],
    },
    {
      title: '店舗情報',
      links: [
        { href: '/access', label: 'アクセス' },
        { href: '/access#contact', label: 'お問い合わせ' },
        { href: '/access#hours', label: '営業時間' },
        { href: '/faq', label: 'よくある質問' },
      ],
    },
    {
      title: 'SNS',
      links: [
        { href: 'https://www.instagram.com/iepoyo.miyako/', label: 'Instagram', icon: <FaInstagram /> },
        { href: 'https://lin.ee/PhCo4lv', label: 'LINE', icon: <FaLine /> },
      ],
    },
  ]

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-pink-50 via-purple-50 to-cyan-50 text-gray-800 mt-auto shadow-inner">
      {/* 可愛い雲やキラキラ背景 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-20 w-24 h-12 bg-pink-200 rounded-full opacity-40 blur-3xl animate-float-slow"></div>
        <div className="absolute top-32 left-60 w-32 h-16 bg-purple-200 rounded-full opacity-30 blur-3xl animate-float-slower"></div>
        <div className="absolute top-48 left-10 w-16 h-8 bg-cyan-200 rounded-full opacity-30 blur-2xl animate-float"></div>
        <div className="absolute top-64 left-80 w-24 h-12 bg-pink-300 rounded-full opacity-25 blur-3xl animate-float-slow"></div>
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* ロゴ＆ブランド紹介 */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2 flex items-center gap-2">
              iepoyo candle ✨<span className="animate-ping inline-block w-2 h-2 bg-yellow-300 rounded-full"></span>
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              宮古島の美しい海をイメージしたゆめかわキャンドル作り体験で、特別な思い出を作りませんか。
            </p>
            <address className="not-italic text-gray-500 text-sm">
              📍 〒906-0008
              <br />
              沖縄県宮古島市平良荷川取206-3
            </address>
          </div>

          {/* フッターリンク */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-gray-800 mb-4">{section.title}</h3>
              <ul className="flex flex-col gap-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    {link.href.startsWith('http') ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-500 text-sm hover:text-pink-500 transition-all hover:scale-110"
                      >
                        {link.icon && <span className="text-lg">{link.icon}</span>}
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="flex items-center gap-2 text-gray-500 text-sm hover:text-pink-500 transition-all hover:scale-110"
                      >
                        {link.icon && <span className="text-lg">{link.icon}</span>}
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 区切り線 */}
        <div className="border-t border-pink-200 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© {currentYear} iepoyo candle. All rights reserved.</p>
            <div className="flex flex-wrap gap-4 text-pink-300 text-sm font-medium">
              <span className="hover:text-pink-500 transition-colors cursor-pointer">#宮古島キャンドル</span>
              <span className="hover:text-pink-500 transition-colors cursor-pointer">#miyakocandle</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float 10s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float 14s ease-in-out infinite;
        }
      `}</style>
    </footer>
  )
}

export { Footer }
