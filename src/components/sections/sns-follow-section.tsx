'use client'

import { IconInstagram } from '@/components/icons/icon-instagram'
import { IconLine } from '@/components/icons/icon-line'

const SnsFollowSection = () => {
  return (
    <section className="from-soft-pink via-pale-lavender to-miyako-blue bg-gradient-to-br py-16">
      <div className="container mx-auto px-4">
        <div className="animate-in fade-in slide-in-from-bottom-6 mx-auto max-w-2xl text-center duration-800">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            📱 最新情報をSNSでチェック！
          </h2>
          <p className="mb-8 text-lg text-white/90">
            キャンドル作りのコツや新作情報、
            <br />
            お得なキャンペーンをいち早くお届け ✨
          </p>

          <div className="mb-8 flex flex-col justify-center gap-6 sm:flex-row">
            <a
              href="https://www.instagram.com/iepoyo.miyako/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 px-8 py-4 text-white shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <IconInstagram size={24} color="white" />
              <span className="font-medium">Instagram をフォロー</span>
            </a>
            <a
              href="https://lin.ee/PhCo4lv"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-full bg-green-500 px-8 py-4 text-white shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <IconLine size={24} color="white" />
              <span className="font-medium">LINE で友だち追加</span>
            </a>
          </div>

          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
            <h3 className="mb-4 text-lg font-bold text-white">フォロー特典</h3>
            <div className="grid gap-3 text-sm text-white/90">
              <div className="flex items-center justify-center gap-2">
                <span className="text-gold-highlight">🎁</span>
                <span>限定キャンペーン情報</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-gold-highlight">📚</span>
                <span>キャンドル作りのコツ</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-gold-highlight">⭐</span>
                <span>新作デザインの先行公開</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { SnsFollowSection }
