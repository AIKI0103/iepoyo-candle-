'use client'

import { Card } from '@/components/ui/card'
import { SectionHeading } from '@/components/ui/section-heading'

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'あやか',
      age: '22歳',
      location: '東京都',
      rating: 5,
      comment:
        '雨で予定が変更になったけど、キャンドル体験で最高の思い出ができました！インスタにあげたら友達からたくさん「いいね」もらえて嬉しい✨',
      experience: 'ユニコーンキャンドル',
      date: '2024年3月',
      avatar: '👩',
    },
    {
      id: 2,
      name: 'たかし & みゆき',
      age: 'カップル',
      location: '大阪府',
      rating: 5,
      comment:
        '彼女との宮古島旅行で体験しました。一緒に作る時間がとても楽しくて、完成したキャンドルは今でも大切に使っています。記念日におすすめ！',
      experience: 'ペアキャンドル',
      date: '2024年2月',
      avatar: '💑',
    },
    {
      id: 3,
      name: 'まりな',
      age: '28歳',
      location: '沖縄県',
      rating: 5,
      comment:
        '友達と一緒に参加。先生がとても優しくて、不器用な私でも可愛いキャンドルが作れました。宮古島の素材を使えるのも特別感があって良かった！',
      experience: 'ジェルキャンドル',
      date: '2024年1月',
      avatar: '👱‍♀️',
    },
    {
      id: 4,
      name: 'ゆうき',
      age: '19歳',
      location: '神奈川県',
      rating: 4,
      comment:
        '初めてのキャンドル作りでしたが、思ったより簡単で楽しかったです。アロマの香りも選べるし、宮古島の思い出として最高のお土産になりました。',
      experience: 'アロマキャンドル',
      date: '2024年3月',
      avatar: '🧑',
    },
    {
      id: 5,
      name: 'さくら',
      age: '25歳',
      location: '福岡県',
      rating: 5,
      comment:
        '一人旅で参加しました。他の参加者の方とも仲良くなれて、とても楽しい時間を過ごせました。完成したキャンドルを見るたび宮古島を思い出します💕',
      experience: 'アニマルキャンドル',
      date: '2024年2月',
      avatar: '👩‍🦱',
    },
    {
      id: 6,
      name: 'けんた & あい',
      age: 'カップル',
      location: '愛知県',
      rating: 5,
      comment:
        '台風で観光ができなくなったときに体験しました。室内で楽しめて本当に助かった！二人で作ったキャンドルは今も部屋に飾っています。',
      experience: 'アロマキャンドル',
      date: '2024年1月',
      avatar: '👫',
    },
  ]

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="体験された方のリアルな声をご紹介"
          subtitle="「楽しかった！」「また来たい！」たくさんの嬉しいお言葉、ありがとうございます！"
          gradient
        />

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              animated
              hoverEffect
              delay={index * 0.1}
              className="relative p-6"
            >
              {/* 引用符装飾 */}
              <div className="text-pale-lavender/30 absolute top-4 right-4 text-4xl">
                &ldquo;
              </div>

              {/* 評価 */}
              <div className="mb-4 flex items-center">
                <div className="flex text-yellow-400">
                  {'★'.repeat(testimonial.rating)}
                  {'☆'.repeat(5 - testimonial.rating)}
                </div>
                <span className="ml-2 text-sm text-gray-500">
                  {testimonial.rating}.0
                </span>
              </div>

              {/* コメント */}
              <p className="mb-6 leading-relaxed text-gray-700">
                {testimonial.comment}
              </p>

              {/* 体験コース */}
              <div className="mb-4">
                <span className="bg-miyako-blue/10 text-miyako-blue inline-block rounded-full px-3 py-1 text-sm">
                  {testimonial.experience}
                </span>
              </div>

              {/* お客様情報 */}
              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <div className="flex items-center">
                  <div className="mr-3 text-2xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.age} · {testimonial.location}
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-400">{testimonial.date}</div>
              </div>
            </Card>
          ))}
        </div>

        {/* Instagram誘導 */}
        <div
          className="from-soft-pink/20 to-pastel-coral/20 animate-in fade-in slide-in-from-bottom-4 mt-12 rounded-2xl bg-gradient-to-r p-8 text-center duration-700"
          style={{ animationDelay: '800ms' }}
        >
          <div className="mb-4 text-4xl">📸</div>
          <h3 className="mb-4 text-2xl font-bold text-gray-900">
            あなたの素敵な作品も、ぜひシェアしてくださいね！
          </h3>
          <p className="mb-6 text-gray-600">
            ハッシュタグ{' '}
            <a
              href="https://www.instagram.com/explore/tags/宮古島キャンドル/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-miyako-blue font-semibold hover:underline"
            >
              #宮古島キャンドル
            </a>{' '}
            をつけて投稿していただくと、
            <br className="hidden sm:block" />
            こちらのサイトでご紹介させていただくことも✨
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <a
              href="https://www.instagram.com/explore/tags/宮古島キャンドル/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <span className="cursor-pointer rounded-full bg-white/80 px-3 py-1 text-sm text-gray-700 transition-colors hover:bg-white">
                #宮古島キャンドル
              </span>
            </a>
            <span className="rounded-full bg-white/80 px-3 py-1 text-sm text-gray-700">
              #ゆめかわキャンドル
            </span>
            <span className="rounded-full bg-white/80 px-3 py-1 text-sm text-gray-700">
              #宮古島体験
            </span>
            <span className="rounded-full bg-white/80 px-3 py-1 text-sm text-gray-700">
              #インスタ映え
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export { TestimonialsSection }
