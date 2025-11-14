'use client'

import Link from 'next/link'
import { EXPERIENCE_MENUS, formatPrice } from '@/data/master'

import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { GradientButton } from '@/components/ui/gradient-button'
import { CardImage } from '@/components/ui/optimized-image'
import { SectionHeading } from '@/components/ui/section-heading'

const PopularProductsSection = () => {
  // 人気度順でソートして表示
  const popularMenus = [...EXPERIENCE_MENUS].sort(
    (a, b) => b.popularity - a.popularity
  )

  return (
    <section className="from-pastel-coral/10 to-pale-lavender/10 bg-gradient-to-br py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="人気の体験メニューをご紹介✨"
          subtitle="どんな素敵なキャンドルが作れるか、人気のメニューをチェック！"
          gradient
        />

        <div className="mx-auto grid max-w-sm grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          {popularMenus.map((menu, index) => (
            <Link
              key={menu.id}
              href={`/experience/${
                menu.id === 'cylinder'
                  ? 'enkei'
                  : menu.id === 'shell'
                    ? 'kaigara'
                    : menu.id === 'sphere'
                      ? 'kyutai'
                      : menu.id === 'sphere-big'
                        ? 'kyutai-big'
                        : 'enkei'
              }`}
            >
              <Card
                animated
                hoverEffect
                delay={index * 0.1}
                className="group cursor-pointer p-3 transition-transform duration-200 hover:scale-105"
              >
                {/* メニュー画像エリア */}
                <div className="from-miyako-blue/20 to-soft-pink/20 relative mb-4 overflow-hidden rounded-lg bg-gradient-to-br">
                  <CardImage
                    src={menu.image}
                    alt={`${menu.name} - 宮古島で人気のキャンドル体験`}
                    width={400}
                    height={400}
                    className="aspect-square h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    cloudflareOptions={{
                      width: 400,
                      height: 400,
                      quality: 85,
                      format: 'webp',
                      fit: 'cover',
                    }}
                    customSizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* バッジ */}
                  {menu.badge && (
                    <Badge className="bg-gold-highlight absolute top-2 left-2 text-gray-900">
                      {menu.badge}
                    </Badge>
                  )}

                  {/* 人気度表示 */}
                  <div className="absolute top-2 right-2 flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-xs font-medium backdrop-blur-sm">
                    <span className="text-gold-highlight">⭐</span>
                    <span>{menu.popularity}%</span>
                  </div>

                  {/* ホバー効果 */}
                  <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/10" />
                </div>

                {/* メニュー情報 */}
                <div className="space-y-3">
                  <h3 className="group-hover:text-miyako-blue text-gray-900 transition-colors duration-200 text-xs">
                    {menu.name}
                  </h3>

                  <p className="line-clamp-3 text-xs text-gray-600">
                    {menu.description}
                  </p>

                  {/* 特徴タグ */}
                  {/* <div className="flex flex-wrap gap-1">
                    {menu.features.slice(0, 2).map((feature) => (
                      <span
                        key={feature}
                        className="bg-pale-lavender/30 rounded px-2 py-1 text-xs text-gray-600"
                      >
                        {feature}
                      </span>
                    ))}
                  </div> */}

                  {/* 価格と詳細ボタン */}
                  <div className="flex items-center justify-between">
                    <span className="text-miyako-blue text-xl font-bold">
                      {formatPrice(menu.price)}
                    </span>
                    <span className="text-miyako-blue text-xs">
                      詳細を見る →
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* セクション下部CTA */}
        <div
          className="animate-in fade-in slide-in-from-bottom-4 mt-12 text-center duration-600"
          style={{ animationDelay: '800ms' }}
        >
          <p className="mb-6 text-gray-600">
            もちろん、体験でご自身で作ることも、完成品をご購入いただくことも可能です。
          </p>
          <Link href="/gallery">
            <GradientButton size="lg" variant="secondary">
              🎨 何が作れるか見てみる
            </GradientButton>
          </Link>
        </div>
      </div>
    </section>
  )
}

export { PopularProductsSection }
