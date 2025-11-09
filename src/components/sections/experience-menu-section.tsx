'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  ADDITIONAL_OPTIONS,
  EXPERIENCE_MENUS,
  formatPrice,
} from '@/data/master'

import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { LinkButton } from '@/components/ui/link-button'
import { CardImage } from '@/components/ui/optimized-image'

const ExperienceMenuSection = () => {
  return (
    <section className="bg-cream-white py-20">
      <div className="container mx-auto px-4">
        {/* 特別デザインのセクションタイトル */}
        <div className="animate-in fade-in slide-in-from-top-6 mb-16 text-center duration-800">
          <h1
            className="animate-in fade-in zoom-in-95 relative mb-6 text-4xl font-bold delay-200 duration-600 md:text-5xl lg:text-6xl"
            style={{ color: 'oklch(.753 .124 212.53)' }}
          >
            宮古島キャンドル手作り体験メニュー✨
          </h1>

          <p className="animate-in fade-in mx-auto max-w-2xl text-lg leading-relaxed font-medium text-gray-700 delay-400 duration-600 md:text-xl">
            宮古島観光の新定番！雨の日・台風でも安心の室内手作り体験。
            <br className="hidden sm:block" />
            記念日にぴったりの宮古島体験です。
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <Card className="border-none bg-white/90 p-4 shadow-xl backdrop-blur-sm sm:p-6 md:p-8">
            <h3
              className="mb-6 text-center text-2xl font-bold md:text-3xl"
              style={{ color: 'oklch(.753 .124 212.53)' }}
            >
              体験メニュー
            </h3>

            {/* 画像セクション - オーバーフロー防止とアスペクト比固定 */}
            <div className="mb-6 md:mb-8">
              <div className="relative w-full overflow-hidden rounded-xl">
                <div className="aspect-[4/3] sm:aspect-video">
                  <Image
                    src="https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/386e5c1f-7841-495b-a15d-72b68c84ed00/public"
                    alt="キャンドル作り体験の様子"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
                  />
                </div>
              </div>
            </div>

            {/* 詳細情報 - モバイルファーストのレスポンシブグリッド */}
            <div className="space-y-6 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
              {/* 基本情報 */}
              <div className="space-y-4">
                <h4
                  className="mb-4 text-lg font-bold"
                  style={{ color: 'oklch(.753 .124 212.53)' }}
                >
                  基本情報
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                    <span className="text-sm text-gray-600 sm:text-base">
                      所要時間
                    </span>
                    <span className="text-sm font-semibold sm:text-base">
                      約90分
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                    <span className="text-sm text-gray-600 sm:text-base">
                      定員
                    </span>
                    <span className="text-sm font-semibold sm:text-base">
                      1〜5名
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                    <span className="text-sm text-gray-600 sm:text-base">
                      対象年齢
                    </span>
                    <span className="text-sm font-semibold sm:text-base">
                      6歳以上
                    </span>
                  </div>
                </div>
              </div>

              {/* 特徴・注意点 */}
              <div className="space-y-4">
                <h4
                  className="mb-4 text-lg font-bold"
                  style={{ color: 'oklch(.753 .124 212.53)' }}
                >
                  特徴・注意点
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-soft-pink mt-2 h-2 w-2 flex-shrink-0 rounded-full"></div>
                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                      作品は翌日お受け取り、または郵送（送料はお客様負担）
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-soft-pink mt-2 h-2 w-2 flex-shrink-0 rounded-full"></div>
                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                      雨の日でも安心の屋内アクティビティ
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-soft-pink mt-2 h-2 w-2 flex-shrink-0 rounded-full"></div>
                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                      初心者の方でも安心してお楽しみいただけます
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {EXPERIENCE_MENUS.map((menu, index) => (
            <Card
              key={menu.id}
              animated
              hoverEffect
              delay={index * 0.15}
              className="group hover:border-soft-pink/50 relative cursor-default overflow-hidden border-2 border-transparent p-6 transition-all duration-300"
            >
              {/* 背景色 */}
              <div className="bg-miyako-blue/5 absolute inset-0 opacity-50" />

              {/* メニュー画像 */}
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <CardImage
                  src={menu.image}
                  alt={`${menu.name} - 宮古島キャンドル体験メニュー`}
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
                  customSizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* バッジ */}
                {menu.badge && (
                  <Badge className="bg-gold-highlight absolute top-3 left-3 text-gray-900 shadow-lg">
                    {menu.badge}
                  </Badge>
                )}

                {/* 人気度表示 */}
                <div className="bg-cream-white/95 text-soft-pink absolute top-3 right-3 flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium shadow-lg backdrop-blur-sm">
                  <span className="text-pastel-coral">⭐</span>
                  <span>{menu.popularity}%</span>
                </div>

                {/* ホバーオーバーレイ */}
                <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/10" />
              </div>

              {/* メニュー情報 */}
              <div className="relative space-y-4 p-6">
                {/* タイトルと価格 */}
                <div className="space-y-2">
                  <h3
                    className="text-xl font-bold"
                    style={{ color: 'oklch(.753 .124 212.53)' }}
                  >
                    {menu.name}
                  </h3>
                  <div className="text-left">
                    <span className="text-soft-pink text-2xl font-bold">
                      {formatPrice(menu.price)}
                    </span>
                  </div>
                </div>

                {/* 説明 */}
                <p className="text-sm leading-relaxed text-gray-700">
                  {menu.description}
                </p>

                {/* 特徴タグ */}
                <div className="flex flex-wrap gap-2">
                  {menu.features.map((feature) => (
                    <span
                      key={feature}
                      className="bg-pastel-coral/20 rounded-full px-3 py-1 text-xs text-gray-600"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* 詳細ボタン */}
                <div className="text-center">
                  <Link
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
                    className="cursor-pointer"
                  >
                    <button className="border-miyako-blue text-miyako-blue hover:bg-miyako-blue w-full cursor-pointer rounded-full border px-6 py-2 text-sm font-medium transition-all duration-200 hover:scale-102 hover:text-white active:scale-98">
                      詳細を見る
                    </button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* オプションカードセクション */}
        <div className="animate-in fade-in slide-in-from-bottom-4 mt-16 delay-800 duration-600">
          <div className="mb-12 text-center">
            <h3
              className="mb-4 text-3xl font-extrabold"
              style={{ color: 'oklch(.753 .124 212.53)' }}
            >
              オプションでさらに特別に✨
            </h3>
            <p className="mx-auto max-w-3xl text-gray-600">
              どのキャンドルにも追加できる特別なオプションです。あなただけの特別な作品を作りましょう。
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
            {ADDITIONAL_OPTIONS.map((option, index) => (
              <Card
                key={option.id}
                animated
                hoverEffect
                delay={index * 0.2}
                className="group hover:border-soft-pink/50 relative cursor-default overflow-hidden border-2 border-transparent bg-white/90 p-6 backdrop-blur-sm transition-all duration-300"
              >
                {/* 背景色 */}
                <div className="bg-miyako-blue/5 absolute inset-0 opacity-50" />

                {/* オプション情報 */}
                <div className="relative space-y-4 p-4">
                  {/* アイコンとタイトル */}
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-400 text-2xl text-white shadow-lg">
                      {option.icon}
                    </div>
                    <div className="text-left">
                      <h4
                        className="text-xl font-bold transition-all duration-200"
                        style={{ color: 'oklch(.753 .124 212.53)' }}
                      >
                        {option.name}
                      </h4>
                      <div className="text-soft-pink text-lg font-bold">
                        {formatPrice(option.price)}
                      </div>
                    </div>
                  </div>

                  {/* 説明 */}
                  <p className="mb-4 text-sm leading-relaxed text-gray-700">
                    {option.description}
                  </p>

                  {/* 詳細説明 */}
                  {option.detailDescription && (
                    <p className="text-xs leading-relaxed text-gray-600">
                      {option.detailDescription}
                    </p>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-md text-center">
          {/* ご予約について */}
          <Card className="border-miyako-blue/30 bg-miyako-blue/10 p-4 text-left sm:p-6">
            <h4
              className="mb-3 text-center text-lg font-bold"
              style={{ color: 'oklch(.753 .124 212.53)' }}
            >
              予約は当日2時間前までOK!!
            </h4>

            {/* 予約ボタン */}
            <div className="text-center">
              <LinkButton
                href="/reservation"
                className="bg-miyako-blue w-full cursor-pointer rounded-full px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                予約はこちら
              </LinkButton>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

export { ExperienceMenuSection }
