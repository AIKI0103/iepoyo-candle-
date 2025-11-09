import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { MainLayout } from '@/components/layout/main-layout'

// ISR設定: 1時間ごとに再生成
export const revalidate = 3600

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

// 作品データ（gallery/page.tsxと同じデータを使用）
const artworks: GalleryArtwork[] = [
  {
    id: 1,
    src: 'https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/4d30cab2-ea7c-47d7-78d1-e7b464406700/square500',
    title: 'ピンクの球体キャンドル',
    category: ['球体'],
    description:
      'ころんと可愛いピンクの球体キャンドル💕 優しいピンクの色合いが女性らしさを引き立て、手のひらにすっぽり収まるサイズ感も魅力的。インテリアとしてもお部屋を可愛く彩ってくれます✨',
    width: 400,
    height: 400,
  },
  {
    id: 2,
    src: 'https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/30e20b47-cd64-4b58-bd73-979921c89f00/square500',
    title: 'ゴールドラメの球体キャンドル',
    category: ['球体'],
    description:
      '神秘的な青と紫のグラデーションに、きらめく金のラメが美しく輝く特別な球体キャンドル✨ まるで夜空の星々のように煌めいて、見る角度によって表情を変える魔法のような美しさです💫',
    width: 400,
    height: 400,
  },
  // 他の作品データも同様に追加...（簡略化のため一部のみ表示）
  {
    id: 3,
    src: 'https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/cf918484-b1a0-44b3-8aac-692f393e5500/square500',
    title: 'ピンク&ブルーの貝殻キャンドル',
    category: ['貝殻'],
    description:
      '宮古島の美しい海をイメージしたシェルモチーフに、ピンクから青へと移りゆく幻想的なグラデーションが施された特別なシェルキャンドルです。3つのシェルそれぞれに異なる表情があり、海の夕焼けのような美しい色合いが魅力的✨',
    tags: ['グラデーション', 'ピンク', 'ブルー'],
    width: 400,
    height: 400,
  },
]

// 静的パス生成
export async function generateStaticParams() {
  return artworks.map((artwork) => ({
    id: artwork.id.toString(),
  }))
}

interface ArtworkPageProps {
  params: Promise<{ id: string }>
}

export default async function ArtworkPage({ params }: ArtworkPageProps) {
  const { id } = await params
  const artwork = artworks.find((item) => item.id.toString() === id)

  if (!artwork) {
    notFound()
  }

  return (
    <MainLayout>
      <div className="bg-cream-white min-h-screen">
        {/* 作品詳細セクション */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="grid items-start gap-8 md:grid-cols-2">
                {/* 画像セクション */}
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-white shadow-2xl">
                  <Image
                    src={artwork.src}
                    alt={artwork.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* 詳細情報セクション */}
                <div className="space-y-6">
                  <div>
                    <h1 className="mb-4 text-3xl font-bold text-gray-900">
                      {artwork.title}
                    </h1>
                    <div className="mb-6 flex flex-wrap gap-2">
                      {artwork.category.map((cat) => (
                        <span
                          key={cat}
                          className="bg-miyako-blue/10 text-miyako-blue rounded-full px-3 py-1 text-sm font-medium"
                        >
                          {cat}キャンドル
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="mb-3 text-xl font-semibold text-gray-800">
                      ✨ こんなキャンドルが作れます
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-700">
                      {artwork.description}
                    </p>
                  </div>

                  {artwork.tags && (
                    <div>
                      <h3 className="mb-3 text-lg font-semibold text-gray-800">
                        🏷️ タグ
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {artwork.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-soft-pink/20 rounded-full px-3 py-1 text-sm text-gray-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* アクションボタン */}
                  <div className="space-y-3 pt-6">
                    <Link
                      href="/reservation"
                      className="from-miyako-blue to-soft-pink block w-full rounded-lg bg-gradient-to-r px-6 py-4 text-center font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      🕯️ この体験を予約する
                    </Link>
                    <Link
                      href="/gallery"
                      className="hover:border-miyako-blue hover:text-miyako-blue block w-full rounded-lg border border-gray-300 px-6 py-3 text-center text-gray-700 transition-all duration-200 hover:bg-gray-50"
                    >
                      ← ギャラリーに戻る
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
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}
