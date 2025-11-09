'use client'

import Link from 'next/link'

import { Card } from '@/components/ui/card'

const benefits = [
  {
    id: 'photo-main',
    icon: '📸',
    title: '記念写真撮影サービス',
    description:
      '作品完成の瞬間を美しく撮影。宮古島の思い出を素敵なお写真に残します',
    gradient: 'from-blue-500 to-purple-600',
  },
  {
    id: 'instagram-spot',
    icon: '✨',
    title: 'インスタ映えスポット',
    description:
      '可愛い背景でのフォト撮影。SNSに投稿したくなる映える写真をお撮りします',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    id: 'process-photo',
    icon: '🎨',
    title: '制作過程も記録',
    description:
      'キャンドル作りの楽しい過程も撮影。完成までのストーリーを写真で残せます',
    gradient: 'from-emerald-500 to-teal-500',
  },
]

const ReservationBenefitsSection = () => {
  return (
    <section className="from-cream-white to-pale-lavender/20 bg-gradient-to-br py-16">
      <div className="container mx-auto px-4">
        {/* セクションタイトル */}
        <div className="animate-in fade-in slide-in-from-bottom-8 mb-12 text-center duration-800">
          <h2
            className="animate-in zoom-in-95 relative mb-4 text-3xl font-bold duration-600 md:text-4xl"
            style={{ animationDelay: '200ms' }}
          >
            <span className="font-extrabold text-pink-500">
              📸 思い出づくりサービス
            </span>

            {/* 装飾的な背景エフェクト */}
            <div className="from-gold-highlight/10 via-pastel-coral/10 to-soft-pink/10 absolute -inset-2 -z-10 rounded-full bg-gradient-to-r blur-xl" />
          </h2>

          <p
            className="animate-in fade-in mx-auto max-w-2xl text-lg font-medium text-gray-700 duration-600"
            style={{ animationDelay: '400ms' }}
          >
            宮古島でのキャンドル作り体験を素敵な写真で残しませんか？
            <br />
            大切な思い出を形に残すお手伝いをいたします
          </p>
        </div>

        {/* 特典カード */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card
              key={benefit.id}
              animated
              hoverEffect
              delay={index * 0.2}
              className="group relative overflow-hidden p-6"
            >
              {/* カード背景 */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-15 transition-opacity duration-300 group-hover:opacity-25`}
              />

              <div className="relative p-8 text-center">
                {/* アイコン */}
                <div className="mb-6 text-6xl transition-transform duration-300 hover:scale-110">
                  {benefit.icon}
                </div>

                {/* タイトル */}
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  {benefit.title}
                </h3>

                {/* 説明 */}
                <p className="text-sm leading-relaxed text-gray-700">
                  {benefit.description}
                </p>

                {/* 装飾的なライン */}
                <div
                  className={`mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r ${benefit.gradient}`}
                />
              </div>
            </Card>
          ))}
        </div>

        {/* 予約ボタン */}
        <div
          className="animate-in fade-in slide-in-from-bottom-4 mt-12 text-center duration-600"
          style={{ animationDelay: '800ms' }}
        >
          <Link href="/reservation">
            <button className="rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-8 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:from-pink-600 hover:to-rose-600 hover:shadow-2xl active:scale-95">
              🕯️ 今すぐ予約する
            </button>
          </Link>
        </div>

        {/* 注意事項 */}
        <div
          className="animate-in fade-in mt-8 text-center duration-600"
          style={{ animationDelay: '1000ms' }}
        >
          <p className="text-sm text-gray-500">
            ※撮影サービスは体験料金に含まれています。お客様のプライバシーに配慮し、撮影は任意です。
          </p>
        </div>
      </div>
    </section>
  )
}

export { ReservationBenefitsSection }
