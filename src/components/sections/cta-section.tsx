'use client'

import Link from 'next/link'

import { GradientButton } from '@/components/ui/gradient-button'

const CTASection = () => {
  return (
    <section className="bg-miyako-blue relative overflow-hidden py-20">
      {/* 背景装飾 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 h-32 w-32 animate-pulse rounded-full bg-white/10 blur-xl" />
        <div
          className="absolute bottom-10 left-10 h-24 w-24 animate-pulse rounded-full bg-white/10 blur-xl"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-in fade-in slide-in-from-bottom-4 mx-auto max-w-4xl duration-800">
          {/* メインメッセージ */}
          <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
            さあ、あなただけの特別な
            <br className="hidden sm:block" />
            <span className="text-gold-highlight">キャンドル作り体験</span>
            <br className="hidden sm:block" />
            をはじめよう
          </h2>

          <p className="animate-in fade-in slide-in-from-bottom-4 mb-8 text-lg leading-relaxed text-white/90 delay-200 duration-800 md:text-xl">
            宮古島の美しい自然に包まれた空間で、
            <br className="hidden sm:block" />
            世界にひとつの宝物を作る、心ときめく時間。
            <br className="hidden sm:block" />
            最高の思い出作りを、私たちが全力でサポートします！
          </p>

          {/* 特典情報 */}
          <div className="animate-in fade-in zoom-in-95 mx-auto mb-8 max-w-2xl rounded-2xl bg-white/15 p-6 backdrop-blur-sm delay-400 duration-600">
            <h3 className="mb-4 text-xl font-bold text-white">🎁 ご予約特典</h3>
            <div className="grid grid-cols-1 gap-4 text-white/90 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-2 text-2xl">🎁</div>
                <div className="text-sm">ギフトラッピング無料</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-2xl">📸</div>
                <div className="text-sm">記念フォトサービス</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-2xl">🌺</div>
                <div className="text-sm">プチギフトプレゼント</div>
              </div>
            </div>
          </div>

          {/* CTAボタン */}
          <div className="animate-in fade-in slide-in-from-bottom-4 flex flex-col items-center justify-center gap-4 delay-600 duration-800 sm:flex-row">
            <Link href="/reservation">
              <GradientButton
                size="md"
                variant="secondary"
                className="min-w-64"
              >
                🕯️ 今すぐ予約する
              </GradientButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export { CTASection }
