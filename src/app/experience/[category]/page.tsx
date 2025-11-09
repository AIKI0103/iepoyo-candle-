import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Card } from '@/components/ui/card'
import { MainLayout } from '@/components/layout/main-layout'

// ISR設定: 1時間ごとに再生成
export const revalidate = 3600

// カテゴリー定義
const categories = [
  {
    slug: 'enkei',
    name: '円柱',
    title: '円柱キャンドル体験',
    description:
      'シンプルで美しい円柱型のキャンドルを作成。マーブル模様やグラデーションなど、様々なテクニックが楽しめます。',
    features: ['初心者におすすめ', 'マーブル模様', 'グラデーション'],
    duration: '約90分',
    capacity: '1〜5名',
    ageLimit: '6歳以上',
    image:
      'https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/c9757b37-882f-4c32-5e36-58cc3a7fd300/square500',
  },
  {
    slug: 'kaigara',
    name: '貝殻',
    title: '貝殻キャンドル体験',
    description:
      '宮古島の美しい海をイメージしたシェルモチーフの特別なキャンドル作り。海の思い出を美しいキャンドルに込めて。',
    features: ['シェルモチーフ', '宮古島限定', 'カラフル可能'],
    duration: '約90分',
    capacity: '1〜5名',
    ageLimit: '6歳以上',
    image:
      'https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/cf918484-b1a0-44b3-8aac-692f393e5500/square500',
  },
  {
    slug: 'kyutai',
    name: '球体',
    title: '球体キャンドル体験',
    description:
      'ころんと可愛い球体キャンドル。グラデーションや金箔ラメなどの特別な装飾も楽しめます。',
    features: ['Instagram映え', 'グラデーション', '金箔オプション'],
    duration: '約90分',
    capacity: '1〜5名',
    ageLimit: '6歳以上',
    image:
      'https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/4d30cab2-ea7c-47d7-78d1-e7b464406700/square500',
  },
  {
    slug: 'kyutai-big',
    name: '球体Big',
    title: '球体Bigキャンドル体験',
    description:
      '通常の球体より大きなサイズの特別な球体キャンドル。存在感抜群の作品を作成できます。',
    features: ['存在感抜群', '上級者向け', '特別サイズ'],
    duration: '約90分',
    capacity: '1〜5名',
    ageLimit: '6歳以上',
    image:
      'https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/ddd1c12c-b0e3-488e-c472-5fda9d005e00/square500',
  },
]

// 静的パス生成
export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }))
}

interface ExperienceCategoryPageProps {
  params: Promise<{ category: string }>
}

export default async function ExperienceCategoryPage({
  params,
}: ExperienceCategoryPageProps) {
  const { category: categorySlug } = await params
  const category = categories.find((cat) => cat.slug === categorySlug)

  if (!category) {
    notFound()
  }

  return (
    <MainLayout>
      <div
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(to bottom right, #FFF7FA, #FCE6F6)',
          paddingTop: '4rem',
          paddingBottom: '4rem',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 1rem',
          }}
        >
          {/* ヘッダーセクション */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1
              className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl"
              style={{ color: 'oklch(.753 .124 212.53)' }}
            >
              {category.title}
            </h1>
            <p
              style={{
                fontSize: '1.25rem',
                color: '#374151',
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: '1.6',
              }}
            >
              {category.description}
            </p>
          </div>

          <div style={{ maxWidth: '1536px', margin: '0 auto' }}>
            <Card
              style={{
                border: 'none',
                background: 'rgba(255, 255, 255, 0.9)',
                padding: '3rem',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(8px)',
                borderRadius: '1rem',
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gap: '2rem',
                  gridTemplateColumns:
                    'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
                }}
              >
                {/* 画像セクション */}
                <div>
                  <div
                    style={{
                      position: 'relative',
                      aspectRatio: '1',
                      overflow: 'hidden',
                      borderRadius: '12px',
                      marginBottom: '2rem',
                    }}
                  >
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      priority
                    />
                  </div>
                </div>

                {/* 詳細情報セクション */}
                <div>
                  <h2
                    className="mb-6 text-2xl font-extrabold"
                    style={{ color: 'oklch(.753 .124 212.53)' }}
                  >
                    体験詳細
                  </h2>

                  {/* 基本情報 */}
                  <div style={{ marginBottom: '2rem' }}>
                    <div style={{ display: 'grid', gap: '1rem' }}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <span style={{ color: '#6B7280' }}>所要時間</span>
                        <span style={{ fontWeight: '600' }}>
                          {category.duration}
                        </span>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <span style={{ color: '#6B7280' }}>定員</span>
                        <span style={{ fontWeight: '600' }}>
                          {category.capacity}
                        </span>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <span style={{ color: '#6B7280' }}>対象年齢</span>
                        <span style={{ fontWeight: '600' }}>
                          {category.ageLimit}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 特徴 */}
                  <div style={{ marginBottom: '2rem' }}>
                    <h3
                      className="mb-4 text-xl font-extrabold"
                      style={{ color: 'oklch(.753 .124 212.53)' }}
                    >
                      ✨ この体験の特徴
                    </h3>
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.5rem',
                      }}
                    >
                      {category.features.map((feature) => (
                        <span
                          key={feature}
                          style={{
                            background: '#4FC3E7',
                            color: 'white',
                            padding: '0.5rem 1rem',
                            borderRadius: '9999px',
                            fontSize: '0.875rem',
                            fontWeight: '500',
                          }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 注意事項 */}
                  <div style={{ marginBottom: '2rem' }}>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.75rem',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.75rem',
                        }}
                      >
                        <div
                          style={{
                            background: '#F4C2C1',
                            marginTop: '0.5rem',
                            height: '0.5rem',
                            width: '0.5rem',
                            borderRadius: '50%',
                          }}
                        ></div>
                        <p
                          style={{
                            fontSize: '0.875rem',
                            color: '#374151',
                            margin: 0,
                          }}
                        >
                          作品は翌日お受け取り、または郵送（送料はお客様負担）
                        </p>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.75rem',
                        }}
                      >
                        <div
                          style={{
                            background: '#F4C2C1',
                            marginTop: '0.5rem',
                            height: '0.5rem',
                            width: '0.5rem',
                            borderRadius: '50%',
                          }}
                        ></div>
                        <p
                          style={{
                            fontSize: '0.875rem',
                            color: '#374151',
                            margin: 0,
                          }}
                        >
                          雨の日でも安心の屋内アクティビティ
                        </p>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.75rem',
                        }}
                      >
                        <div
                          style={{
                            background: '#F4C2C1',
                            marginTop: '0.5rem',
                            height: '0.5rem',
                            width: '0.5rem',
                            borderRadius: '50%',
                          }}
                        ></div>
                        <p
                          style={{
                            fontSize: '0.875rem',
                            color: '#374151',
                            margin: 0,
                          }}
                        >
                          初心者の方でも安心してお楽しみいただけます
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 予約ボタン */}
              <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                <Link
                  href="/reservation"
                  className="mb-4 inline-block rounded-full bg-gradient-to-r from-[#4FC3E7] to-[#F4C2C1] px-12 py-4 text-lg text-white shadow-lg transition-all hover:scale-105"
                  style={{ textDecoration: 'none' }}
                >
                  {category.name}キャンドル体験を予約する
                </Link>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1rem',
                    flexWrap: 'wrap',
                  }}
                >
                  <Link
                    href="/experience"
                    style={{
                      color: '#4FC3E7',
                      textDecoration: 'none',
                      fontWeight: '500',
                      padding: '0.5rem 1rem',
                      border: '1px solid #4FC3E7',
                      borderRadius: '9999px',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    ← 全ての体験メニューを見る
                  </Link>
                  <Link
                    href="/gallery"
                    style={{
                      color: '#4FC3E7',
                      textDecoration: 'none',
                      fontWeight: '500',
                      padding: '0.5rem 1rem',
                      border: '1px solid #4FC3E7',
                      borderRadius: '9999px',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    作品ギャラリーを見る
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
