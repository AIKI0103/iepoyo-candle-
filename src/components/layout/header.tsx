'use client'

import { useState } from 'react'
import Link from 'next/link'

import { IconImage } from '@/components/ui/optimized-image'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'ホーム' },
    { href: '/experience', label: '体験メニュー' },
    { href: '/gallery', label: 'ギャラリー' },
    { href: '/access', label: 'アクセス' },
    { href: '/faq', label: 'よくある質問' },
  ]

  return (
    <header
      style={{
        backgroundColor: 'rgba(255, 247, 250, 0.95)',
        borderBottom: '1px solid rgba(244, 194, 193, 0.2)',
        backdropFilter: 'blur(10px)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: '400px',
          margin: '0 auto',
          padding: '0 16px',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            height: '4rem',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* ロゴ */}
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none',
            }}
          >
            <div
              style={{
                transition: 'transform 0.2s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              <IconImage
                src="/logo-sm.png"
                alt="iepoyo candle ロゴ"
                width={40}
                height={40}
              />
            </div>
            <div
              style={{
                background: 'linear-gradient(to right, #4FC3E7, #F4C2C1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontSize: '1.25rem', // iPhoneX対応でフォントサイズを縮小
                fontWeight: 'bold',
                transition: 'transform 0.2s',
                whiteSpace: 'nowrap', // テキストの改行を防止
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              iepoyo candle
            </div>
          </Link>

          {/* デスクトップナビゲーション */}
          <nav
            style={{
              display: 'block',
              alignItems: 'center',
              gap: '2rem',
            }}
            className="desktop-nav"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  fontWeight: '500',
                  color: '#374151',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = '#4FC3E7'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = '#374151'
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA ボタン */}
          {/* <div style={{ display: 'none' }} className="desktop-cta">
            <Link
              href="/reservation"
              style={{
                background: 'linear-gradient(to right, #4FC3E7, #F4C2C1)',
                color: 'white',
                padding: '0.5rem 1.5rem',
                borderRadius: '16px',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: '600',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                transition: 'all 0.2s',
                display: 'inline-block',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)'
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)'
              }}
            >
              今すぐ予約
            </Link>
          </div> */}

          {/* モバイルメニューボタン */}
          <button
            style={{
              display: 'block',
              background: 'transparent',
              border: 'none',
              padding: '0.5rem',
              cursor: 'pointer',
              minWidth: '44px',
              minHeight: '44px',
            }}
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニューを開く"
          >
            <svg
              style={{ width: '24px', height: '24px' }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* モバイルメニュー */}
        <div
          style={{
            maxHeight: isMenuOpen ? '100vh' : '0',
            overflow: isMenuOpen ? 'auto' : 'hidden',
            transition: 'max-height 1.3s ease-in-out',
            backgroundColor: 'rgba(255, 247, 250, 0.98)',
            borderTop: '1px solid rgba(244, 194, 193, 0.3)',
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            zIndex: 40,
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
          }}
          className="mobile-menu"
        >
          <nav
            style={{
              padding: '16px 0',
              minHeight: 'fit-content',
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: 'block',
                  padding: '14px 20px',
                  color: '#374151',
                  textDecoration: 'none',
                  fontSize: '16px',
                  borderBottom: '1px solid rgba(244, 194, 193, 0.1)',
                  transition: 'background-color 0.2s',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor =
                    'rgba(79, 195, 231, 0.05)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {/* 予約ボタン */}
            <div style={{ padding: '16px 20px' }}>
              <Link
                href="/reservation"
                style={{
                  background: 'linear-gradient(to right, #4FC3E7, #F4C2C1)',
                  color: 'white',
                  padding: '14px 24px',
                  borderRadius: '25px',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: '600',
                  display: 'block',
                  textAlign: 'center',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                  transition: 'all 0.2s',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)'
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.boxShadow =
                    '0 4px 15px rgba(0,0,0,0.15)'
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                今すぐ予約
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* レスポンシブ用CSS */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          /* デスクトップ: 768px以上 */
          @media (min-width: 768px) {
            .desktop-nav {
              display: none !important;
            }
            .desktop-cta {
              display: block !important;
            }
            .mobile-menu-button {
              display: block !important;
            }
            .mobile-menu {
              display: block !important;
            }
          }

          /* モバイル: 767px以下 */
          @media (max-width: 767px) {
            .desktop-nav {
              display: none !important;
            }
            .desktop-cta {
              display: none !important;
            }
            .mobile-menu-button {
              display: block !important;
            }
            .mobile-menu {
              display: block !important;
            }
          }
        `,
        }}
      />
    </header>
  )
}

export { Header }
