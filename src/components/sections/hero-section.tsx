'use client'

import { lazy, Suspense } from 'react'
import Link from 'next/link'

// 遅延ロードコンポーネント
const LazyGradientButton = lazy(() =>
  import('@/components/ui/gradient-button').then((module) => ({
    default: module.GradientButton,
  }))
)

const HeroSection = () => {
  return (
    <section className="bg-black">
       <div className="absolute inset-0 overflow-hidden">
        <div className="bg-cream-white/20 absolute -top-24 -right-24 h-96 w-96 rounded-full blur-3xl" />
        <div className="bg-pastel-coral/20 absolute -bottom-24 -left-24 h-80 w-80 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="mx-auto max-w-1xl text-center">
          {/* メインタイトル */}
          <h1 className="mb-6 text-1xl leading-tight font-bold text-white md:text-2xl">
            <span className="block">
              宮古島で、&ldquo;きゅんん&rdquo;とする想い出づくり
            </span>
            <span className="text-gold-highlight block">
              雨の日・台風でも安心の手作り体験で、
            </span>
            <span className="block">
              カップル・ファミリー・おひとりでも楽しめる特別な宮古島の思い出を&ldquo;カタチ&rdquo;に🕯️🌺💎
            </span>
          </h1>

          {/* サブタイトル */}
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
            宮古島観光の新定番！雨の日・台風の日でも安心の室内体験で、
            <br className="hidden sm:block" />
            キラキラの海をぎゅっと閉じ込めた宝物みたいなキャンドルを手作り。
            <br className="hidden sm:block" />
            初めてでも、不器用さんでも大丈夫！記念日デート・女子旅・ファミリー旅行にぴったりの90分体験😉
          </p>

          {/* CTAボタン */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/experience">
              <Suspense
                fallback={
                  <div className="from-miyako-blue to-soft-pink h-12 w-full max-w-xs min-w-48 animate-pulse rounded-full bg-gradient-to-r" />
                }
              >
                <LazyGradientButton
                  size="lg"
                  className="w-full max-w-xs min-w-48 sm:w-auto"
                >
                  👀 体験メニューを覗いてみる
                </LazyGradientButton>
              </Suspense>
            </Link>
            <Link href="/gallery">
              <Suspense
                fallback={
                  <div className="h-12 w-full max-w-xs min-w-44 animate-pulse rounded-full bg-white/20" />
                }
              >
                <LazyGradientButton
                  variant="secondary"
                  size="lg"
                  className="w-full max-w-xs min-w-44 sm:w-auto"
                >
                  🎨 何が作れるか見てみる
                </LazyGradientButton>
              </Suspense>
            </Link>
          </div>

          {/* 特徴ポイント */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <span className="text-gold-highlight">☔</span>
              <span className="text-sm">雨の日・台風OK!</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold-highlight">📸</span>
              <span className="text-sm">インスタ映え確実</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold-highlight">👥</span>
              <span className="text-sm">1〜5名まで・グループ歓迎</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold-highlight">🎨</span>
              <span className="text-sm">手作り体験・手ぶらOK</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { HeroSection }
