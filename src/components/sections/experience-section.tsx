'use client'

import Link from 'next/link'

import { Card } from '@/components/ui/card'
import { GradientButton } from '@/components/ui/gradient-button'
import { SectionHeading } from '@/components/ui/section-heading'

const ExperienceSection = () => {
  const experienceInfo = {
    highlights: [
      '雨の日でも安心♪',
      '市街地から車で5分',
      '駐車場完備',
      '6歳以上参加OK',
    ],
    details: {
      duration: '1時間30分',
      ageRange: '6歳以上',
      location: '〒906-0008 沖縄県宮古島市平良荷川取206-3',
      features: [
        { label: '当日持ち帰り', value: 'あり' },
        { label: 'レクチャー', value: 'スタッフがサポート' },
        { label: '写真サービス', value: 'プラン料金込み' },
      ],
    },
  }

  return (
    <section className="bg-cream-white py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="キャンドル体験プラン"
          subtitle="宮古島の美しい思い出を、世界にひとつのキャンドルに込めてみませんか？初めての方でも安心して楽しめるよう、スタッフがしっかりサポートします✨"
        />

        {/* おすすめポイント */}
        <Card animated hoverEffect className="mx-auto mb-12 max-w-4xl p-6">
          <div className="mb-8 text-center">
            <h3 className="mb-6 text-2xl font-bold text-gray-900">
              おすすめポイント
            </h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                '雨の日も楽しめるインドア体験☔',
                '市街地から好アクセス🚗',
                '無料駐車場を完備',
                'お子様から大人まで大歓迎！',
              ].map((point, index) => (
                <div
                  key={index}
                  className="bg-soft-pink/10 flex items-center justify-center rounded-lg p-3"
                >
                  <span className="text-center text-sm font-medium text-gray-700">
                    <span className="text-yellow-400">★</span> {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* 体験詳細 */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
          {/* 基本情報 */}
          <Card animated hoverEffect className="p-6">
            <h3 className="mb-6 text-xl font-bold text-gray-900">体験詳細</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-gray-100 py-2">
                <span className="text-gray-600">所要時間</span>
                <span className="font-semibold text-gray-900">
                  {experienceInfo.details.duration}
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-gray-100 py-2">
                <span className="text-gray-600">対象年齢</span>
                <span className="font-semibold text-gray-900">
                  {experienceInfo.details.ageRange}
                </span>
              </div>
              <div className="py-2">
                <span className="mb-2 block text-gray-600">集合・体験場所</span>
                <span className="text-sm text-gray-900">
                  {experienceInfo.details.location}
                </span>
              </div>
            </div>
          </Card>

          {/* プランの特徴 */}
          <Card animated hoverEffect delay={0.2} className="p-6">
            <h3 className="mb-6 text-xl font-bold text-gray-900">
              プランの特徴
            </h3>
            <div className="space-y-4">
              {experienceInfo.details.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start justify-between border-b border-gray-100 py-2"
                >
                  <span className="text-gray-600">{feature.label}</span>
                  <span className="max-w-xs text-right text-sm text-gray-900">
                    {feature.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="bg-pastel-coral/10 mt-6 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>写真撮影：</strong>
                作業中の撮影はスタッフにお声がけください
                <br />
                <strong>追加制作：</strong>
                当日追加で制作も可能です（型により料金が異なります）
              </p>
            </div>
          </Card>
        </div>

        {/* 予約CTA */}
        <div
          className="animate-in fade-in slide-in-from-bottom-4 mt-12 text-center duration-600"
          style={{ animationDelay: '800ms' }}
        >
          <p className="mb-6 text-gray-600">
            手ぶらでOK！スタッフがしっかりサポートするので、初めての方でも安心です。
          </p>
          <Link href="/experience">
            <GradientButton size="lg" variant="accent">
              体験プランの詳細を見る
            </GradientButton>
          </Link>
        </div>
      </div>
    </section>
  )
}

export { ExperienceSection }
