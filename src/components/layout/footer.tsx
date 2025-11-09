'use client'

import Link from 'next/link'

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
        {
          href: 'https://www.instagram.com/iepoyo.miyako/',
          label: 'Instagram',
        },
        { href: 'https://lin.ee/PhCo4lv', label: 'LINE' },
      ],
    },
  ]

  return (
    <footer
      style={{
        background: 'linear-gradient(to right, #D9D9FF, #FCE6F6)',
        color: '#1F2937',
        marginTop: 'auto',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '3rem 1rem',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', // iPhoneX対応
            gap: '2rem',
          }}
        >
          {/* ロゴとブランド情報 */}
          <div>
            <div
              style={{
                background: 'linear-gradient(to right, #4FC3E7, #F4C2C1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
              }}
            >
              iepoyo candle
            </div>
            <p
              style={{
                fontSize: '0.875rem',
                lineHeight: '1.6',
                color: '#6B7280',
                marginBottom: '1rem',
              }}
            >
              宮古島の美しい海をイメージしたゆめかわいキャンドル作り体験で、
              特別な思い出を作りませんか。
            </p>
            <div
              style={{
                fontSize: '0.875rem',
                color: '#6B7280',
              }}
            >
              <p>
                📍 〒906-0008
                <br />
                沖縄県宮古島市平良荷川取206-3
              </p>
            </div>
          </div>

          {/* フッターリンク */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3
                style={{
                  fontWeight: '600',
                  color: '#1F2937',
                  marginBottom: '1rem',
                }}
              >
                {section.title}
              </h3>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                }}
              >
                {section.links.map((link) => (
                  <li key={link.href}>
                    {link.href.startsWith('http') ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: '0.875rem',
                          color: '#6B7280',
                          textDecoration: 'none',
                          transition: 'color 0.2s',
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.color = '#4FC3E7'
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.color = '#6B7280'
                        }}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        style={{
                          fontSize: '0.875rem',
                          color: '#6B7280',
                          textDecoration: 'none',
                          transition: 'color 0.2s',
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.color = '#4FC3E7'
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.color = '#6B7280'
                        }}
                      >
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
        <div
          style={{
            marginTop: '2rem',
            borderTop: '1px solid rgba(156, 163, 175, 0.3)',
            paddingTop: '2rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
            }}
            className="footer-bottom"
          >
            <p
              style={{
                fontSize: '0.875rem',
                color: '#6B7280',
                margin: 0,
              }}
            >
              © {currentYear} iepoyo candle. All rights reserved.
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
              }}
            >
              <span
                style={{
                  fontSize: '0.875rem',
                  color: '#9CA3AF',
                }}
              >
                #宮古島キャンドル #miyakocandle
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* レスポンシブ用CSS */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @media (min-width: 768px) {
            .footer-bottom {
              flex-direction: row !important;
            }
          }
        `,
        }}
      />
    </footer>
  )
}

export { Footer }
