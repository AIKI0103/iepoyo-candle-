'use client'

import { useState } from 'react'

import { Chatbot } from '../chatbot/chatbot'
import { IconInstagram } from '../icons/icon-instagram'
import { IconLine } from '../icons/icon-line'

interface SocialLink {
  id: string
  name: string
  icon: React.ComponentType<{
    size?: number
    className?: string
    color?: string
  }>
  url: string
  color: string
  gradient?: string
  message: string
}

const socialLinks: SocialLink[] = [
  {
    id: 'instagram',
    name: 'Instagram',
    icon: IconInstagram,
    url: 'https://www.instagram.com/iepoyo.miyako/',
    gradient: 'from-purple-500 via-pink-500 to-orange-500',
    color: 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500',
    message: 'フォローで最新情報をチェック！',
  },
  {
    id: 'line',
    name: 'LINE',
    icon: IconLine,
    url: 'https://lin.ee/PhCo4lv',
    color: 'bg-green-500',
    message: 'LINE公式アカウントでお問い合わせ',
  },
]

export function FloatingSocialBar() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <>
      {/* デスクトップ版 - 右下固定、縦並び */}
      <div className="fixed right-6 bottom-6 z-40 hidden space-y-4 md:block">
        {socialLinks.map((social) => (
          <div
            key={social.id}
            className="group relative"
            onMouseEnter={() => setHoveredId(social.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* ツールチップ */}
            {hoveredId === social.id && (
              <div className="animate-in fade-in slide-in-from-right-2 absolute top-1/2 right-full mr-4 -translate-y-1/2 whitespace-nowrap duration-200">
                <div className="rounded-lg bg-gray-900 px-4 py-2 text-sm text-white shadow-lg">
                  <p className="font-bold">{social.name}</p>
                  <p className="text-xs opacity-90">{social.message}</p>
                  <div className="absolute top-1/2 right-0 h-0 w-0 translate-x-1/2 -translate-y-1/2 border-t-[6px] border-b-[6px] border-l-[6px] border-t-transparent border-b-transparent border-l-gray-900"></div>
                </div>
              </div>
            )}

            {/* パルスアニメーション */}
            <div
              className={`absolute inset-0 rounded-full ${social.color} pointer-events-none animate-pulse opacity-30`}
            />

            {/* ソーシャルボタン */}
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative block h-14 w-14 rounded-full ${social.color} z-10 flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110 active:scale-95`}
            >
              <social.icon size={28} color="white" />
            </a>
          </div>
        ))}

        {/* チャットボタンを最下部に追加 */}
        <div className="mt-4">
          <Chatbot />
        </div>
      </div>

      {/* モバイル版 - 右下固定、縦並び */}
      <div className="fixed right-4 bottom-6 z-40 space-y-4 md:hidden">
        {socialLinks.map((social, index) => (
          <div
            key={social.id}
            className="animate-in fade-in slide-in-from-right-8 relative duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* パルスアニメーション */}
            <div
              className={`absolute inset-0 rounded-full ${social.color} pointer-events-none animate-pulse opacity-30`}
            />

            {/* ソーシャルボタン */}
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative block h-12 w-12 rounded-full ${social.color} z-10 flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110 active:scale-95`}
            >
              <social.icon size={24} color="white" />
            </a>
          </div>
        ))}

        {/* チャットボタンをモバイル版にも追加 */}
        <div className="mt-4">
          <Chatbot />
        </div>
      </div>
    </>
  )
}
