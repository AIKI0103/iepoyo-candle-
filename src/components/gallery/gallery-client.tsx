'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { AnimationWrapper } from '@/components/ui/animation-wrapper'

// 作品データの型定義
interface GalleryArtwork {
  id: number
  src: string
  title: string
  category: ('円柱' | '貝殻' | '球体' | '球体Big')[]
  description: string
  width: number
  height: number
  tags?: string[]
  process?: string[]
}

interface GalleryClientProps {
  artworks: GalleryArtwork[]
}

export function GalleryClient({ artworks }: GalleryClientProps) {
  const [selectedArtwork, setSelectedArtwork] = useState<GalleryArtwork | null>(
    null
  )

  return (
    <>
      {/* ヒーローセクション - 体験予約ページスタイル */}
      <section className="bg-cream-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="animate-in fade-in slide-in-from-top-6 mb-8 text-center duration-800 md:mb-12">
            <h1
              className="animate-in fade-in zoom-in-95 relative mb-6 text-4xl font-bold delay-200 duration-600 md:text-5xl lg:text-6xl"
              style={{ color: 'oklch(.753 .124 212.53)' }}
            >
              ギャラリー✨
            </h1>

            <p className="animate-in fade-in mx-auto max-w-2xl text-lg leading-relaxed font-medium text-gray-700 delay-400 duration-600 md:text-xl">
              宮古島の美しい海をイメージした4つのオリジナルキャンドル作品。
              <br className="hidden sm:block" />
              気になる作品をタップして、作り方をチェックしてみてください。
            </p>
          </div>
        </div>
      </section>

      {/* 高級アートサロン風ギャラリーグリッド */}
      <AnimationWrapper useFramerMotion={true}>
        <section
          className="px-4"
          style={{
            marginTop: '8px',
            paddingBottom: 'clamp(4rem, 5vw, 6rem)',
          }}
        >
          <div className="animate-in fade-in grid grid-cols-2 gap-4 duration-800 md:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5">
            {artworks.map((artwork, index) => (
              <div
                key={artwork.id}
                className="group animate-in fade-in zoom-in-95 aspect-square duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div
                  className="relative block h-full w-full cursor-pointer"
                  onClick={() => setSelectedArtwork(artwork)}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-105 group-hover:shadow-2xl">
                    <Image
                      src={artwork.src}
                      alt={artwork.title}
                      width={400}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-500"
                    />

                    {/* エレガントなオーバーレイ */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />

                    {/* ホバー時の枠線 */}
                    <div className="group-hover:border-soft-pink/50 absolute inset-0 rounded-xl border-2 border-transparent transition-all duration-300" />

                    {/* 作品情報のプレビュー */}
                    <div className="absolute right-0 bottom-0 left-0 translate-y-full transform bg-gradient-to-t from-black/60 to-transparent p-3 transition-transform duration-300 group-hover:translate-y-0">
                      <p className="truncate text-sm font-medium text-white">
                        {artwork.title}
                      </p>
                      <p className="text-xs text-white/80">
                        {artwork.category.join('・')}体験
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </AnimationWrapper>

      {/* シンプル作品詳細モーダル */}
      <AnimationWrapper useFramerMotion={true}>
        {selectedArtwork && (
          <div
            className="animate-in fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-2 duration-200 md:p-4"
            data-testid="artwork-modal"
            onClick={() => setSelectedArtwork(null)}
          >
            <div
              className="shadow-3xl animate-in fade-in zoom-in-95 relative w-full max-w-7xl overflow-hidden rounded-2xl bg-white duration-300"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <div className="flex max-h-[95vh] flex-col md:max-h-[90vh] md:flex-row">
                {/* 左ページ: 画像部分（縦写真対応） */}
                <div className="bg-miyako-blue/20 relative h-[50vh] w-full overflow-hidden md:h-[600px] md:w-[400px]">
                  <Image
                    src={selectedArtwork.src}
                    alt={selectedArtwork.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* 右ページ: 詳細説明部分 */}
                <div className="bg-cream-white/50 flex-1 space-y-4 overflow-y-auto p-4 md:space-y-6 md:p-8">
                  {/* ページ装飾 */}
                  <div className="bg-gold-highlight absolute top-4 left-4 h-2 w-2 rounded-full opacity-30"></div>
                  <div className="bg-gold-highlight absolute top-6 left-6 h-1 w-1 rounded-full opacity-20"></div>
                  <div>
                    <h2
                      className="mb-2 text-2xl font-bold"
                      style={{ color: 'oklch(.753 .124 212.53)' }}
                    >
                      {selectedArtwork.title}
                    </h2>
                    <div className="text-miyako-blue mb-4 text-lg font-medium">
                      {selectedArtwork.category.join('・')}キャンドル
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3
                        className="mb-3 text-lg font-semibold"
                        style={{ color: 'oklch(.753 .124 212.53)' }}
                      >
                        ✨ こんなキャンドルが作れます
                      </h3>
                      <p className="text-base leading-relaxed text-gray-700">
                        {selectedArtwork.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 border-t border-gray-200/50 pt-6">
                    <Link
                      href="/reservation"
                      className="bg-miyako-blue block w-full transform rounded-lg px-6 py-4 text-center font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg"
                    >
                      🕯️ この体験を予約する
                    </Link>
                    <Link
                      href="/experience"
                      className="hover:border-miyako-blue hover:text-miyako-blue block w-full rounded-lg border border-gray-300 px-6 py-3 text-center text-gray-700 transition-all duration-200 hover:bg-gray-50"
                    >
                      📋 全ての体験メニューを見る
                    </Link>
                  </div>
                </div>
              </div>

              {/* 閉じるボタン */}
              <button
                className="absolute top-4 right-4 z-30 flex h-10 w-10 transform items-center justify-center rounded-full bg-white/90 text-gray-600 backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-white hover:text-gray-900 hover:shadow-lg"
                onClick={() => setSelectedArtwork(null)}
                aria-label="モーダルを閉じる"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </AnimationWrapper>
    </>
  )
}
