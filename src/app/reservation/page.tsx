import type { Metadata } from 'next'
import Image from 'next/image'
import {
  ADDITIONAL_OPTIONS,
  EXPERIENCE_MENUS,
  formatPrice,
} from '@/data/master'

import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { CardImage } from '@/components/ui/optimized-image'
import { MainLayout } from '@/components/layout/main-layout'

// 軽量メタデータ（CPU制限対応）
export const metadata: Metadata = {
  title: '予約 | iepoyo candle - 宮古島キャンドル体験',
  description: '宮古島キャンドル体験のオンライン予約',
  robots: 'index,follow',
}

export default function ReservationPage() {
  const email = 'candle@iepoyo.com'
  const emailSubject = '【iepoyo candle】予約希望'
  const emailBody = `以下の内容で予約希望です。
【体験メニュー】（例：円柱キャンドル）
【追加オプション】（例：金箔、ラメ）※任意
【ご希望日時】（例：10/25 14:00）
【参加人数】（例：2名）
【代表者名】
【ご連絡先】（電話番号または返信用メールアドレス）
【その他ご要望】`

  const mailtoHref = `mailto:${email}?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(emailBody)}`

  return (
    <MainLayout>
      <div className="min-h-screen bg-[#FFF7FA] py-8">
        <div className="container mx-auto px-4">
          {/* ご予約タイトル */}
          <div className="mb-8 text-center">
            <h1
              className="animate-in fade-in zoom-in-95 relative mb-6 text-4xl font-bold delay-200 duration-600 md:text-5xl lg:text-6xl"
              style={{ color: 'oklch(.753 .124 212.53)' }}
            >
              ご予約✨
            </h1>
          </div>

          {/* 予約案内セクション */}
          <div className="mx-auto max-w-2xl">
            <div className="rounded-2xl bg-white/80 p-6 shadow-sm backdrop-blur">
              <h2
                className="mb-3 text-center text-2xl font-bold"
                style={{ color: 'oklch(.753 .124 212.53)' }}
              >
                ご予約は公式LINEよりお願いします
              </h2>
              <p className="mb-6 text-center text-gray-600">
                友だち追加のうえ、「ご予約はこちら」を押してください
              </p>

              <div className="mb-6 flex justify-center">
                <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                  <Image
                    src="/line-qr.png"
                    alt="iepoyo candle 公式LINE QRコード"
                    width={320}
                    height={320}
                    className="h-64 w-64"
                  />
                </div>
              </div>

              <div className="text-center">
                <a
                  href="https://lin.ee/PhCo4lv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-miyako-blue mb-2 inline-block rounded-full px-12 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  公式LINEで予約する
                </a>
              </div>
            </div>
          </div>

          {/* LINEが使えない方向けメール案内セクション */}
          <div className="mx-auto mt-8 mb-8 max-w-2xl">
            <h2
              className="mb-3 text-center text-2xl font-bold"
              style={{ color: 'oklch(.753 .124 212.53)' }}
            >
              公式LINE以外のご予約
            </h2>

            <Card className="rounded-2xl bg-white/80 p-6 shadow-sm backdrop-blur">
              <p className="mb-4 text-center text-gray-700">
                LINEアカウントがない場合は、メールでご予約内容をお送りください。
              </p>

              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <p className="mb-2 text-sm font-semibold text-gray-800">
                  メールに記載していただきたい内容
                </p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                  <li>体験メニュー（例：円柱キャンドル）</li>
                  <li>
                    追加オプション（任意：金箔、ラメ、エッセンシャルオイル等）
                  </li>
                  <li>ご希望日時</li>
                  <li>参加人数</li>
                  <li>代表者名</li>
                  <li>ご連絡先（電話番号または返信用メールアドレス）</li>
                  <li>その他ご要望</li>
                </ul>
              </div>
            </Card>
          </div>

          {/* 体験メニューセクション */}
          <div className="mb-8">
            <div className="mb-6 text-center">
              <h2
                className="mb-2 text-2xl font-bold"
                style={{ color: 'oklch(.753 .124 212.53)' }}
              >
                体験メニュー
              </h2>
              <p className="text-gray-600">お好みのメニューをお選びください</p>
            </div>

            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {EXPERIENCE_MENUS.map((menu) => (
                <Card
                  key={menu.id}
                  className="group hover:border-soft-pink/50 relative cursor-default overflow-hidden border-2 border-transparent p-4 shadow-lg transition-all duration-300"
                >
                  {/* 背景色 */}
                  <div className="bg-miyako-blue/5 absolute inset-0 opacity-50" />

                  {/* メニュー画像 */}
                  <div className="relative mb-4 overflow-hidden rounded-xl">
                    <CardImage
                      src={menu.image}
                      alt={`${menu.name} - 宮古島キャンドル体験メニュー`}
                      width={300}
                      height={300}
                      className="aspect-square h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      cloudflareOptions={{
                        width: 300,
                        height: 300,
                        quality: 85,
                        format: 'webp',
                        fit: 'cover',
                      }}
                      customSizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />

                    {/* バッジ */}
                    {menu.badge && (
                      <Badge className="bg-gold-highlight absolute top-2 left-2 text-gray-900 shadow-lg">
                        {menu.badge}
                      </Badge>
                    )}

                    {/* 人気度表示 */}
                    <div className="bg-cream-white/95 text-soft-pink absolute top-2 right-2 flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium shadow-lg backdrop-blur-sm">
                      <span className="text-pastel-coral">⭐</span>
                      <span>{menu.popularity}%</span>
                    </div>
                  </div>

                  {/* メニュー情報 */}
                  <div className="relative space-y-3">
                    {/* タイトルと価格 */}
                    <div className="space-y-1">
                      <h3
                        className="text-lg font-bold"
                        style={{ color: 'oklch(.753 .124 212.53)' }}
                      >
                        {menu.name}
                      </h3>
                      <div className="text-left">
                        <span className="text-soft-pink text-xl font-bold">
                          {formatPrice(menu.price)}
                        </span>
                      </div>
                    </div>

                    {/* 説明 */}
                    <p className="text-xs leading-relaxed text-gray-700">
                      {menu.description}
                    </p>

                    {/* 特徴タグ */}
                    <div className="flex flex-wrap gap-1">
                      {menu.features.slice(0, 2).map((feature) => (
                        <span
                          key={feature}
                          className="bg-pastel-coral/20 rounded-full px-2 py-1 text-xs text-gray-600"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* 追加オプションセクション */}
          <div className="mb-10">
            <div className="mb-4 text-center">
              <h2
                className="mb-2 text-2xl font-bold"
                style={{ color: 'oklch(.753 .124 212.53)' }}
              >
                追加オプション（任意）
              </h2>
              <p className="text-sm text-gray-600">
                お好みでアレンジできます。メニュー料金にプラスされます
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {ADDITIONAL_OPTIONS.map((option) => (
                <Card
                  key={option.id}
                  className="hover:border-soft-pink/50 border-2 border-transparent p-4 shadow-md transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="text-2xl" aria-hidden>
                      {option.icon}
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h3
                          className="text-base font-bold"
                          style={{ color: 'oklch(.753 .124 212.53)' }}
                        >
                          {option.name}
                        </h3>
                        <span className="text-soft-pink text-sm font-bold">
                          {formatPrice(option.price)}
                        </span>
                      </div>
                      <p className="text-xs text-gray-700">
                        {option.description}
                      </p>
                      {option.detailDescription && (
                        <p className="mt-1 text-[11px] leading-relaxed text-gray-500">
                          {option.detailDescription}
                        </p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* メール予約ボタンセクション */}
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <a
              href={mailtoHref}
              className="bg-miyako-blue mb-2 inline-block rounded-full px-10 py-3 text-base font-semibold text-white shadow transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              メールで予約内容を送る
            </a>
            <p className="text-xs text-gray-600">
              宛先:{' '}
              <a className="underline" href={`mailto:${email}`}>
                {email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
