'use client'

import { Card } from '@/components/ui/card'
import { SectionHeading } from '@/components/ui/section-heading'

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'kenta_ai_trip',
      age: 'カップル',
      location: '愛知県',
      rating: 5,
      comment:
        '台風で観光ができなくなったときに体験しました。室内で楽しめて本当に助かった！二人で作ったキャンドルは今も部屋に飾っています。',
      experience: ['#宮古島', '#カップル旅行', '#雨でも楽しめる', '#アロマキャンドル'],
      date: '2024年1月',
      avatar: '👫',
      image: '/insta-post__list/candle1.jpg',
    },

    {
      id: 2,
      name: 'miyako_love_couple',
      age: 'カップル',
      location: '東京都',
      rating: 4,
      comment:
        '以前からインスタで見てて気になって予約しました！ゆっくり座って作業できたのでリラックスできました！作ったキャンドルはおそろいで今も大事に飾っています。',
      experience: ['#宮古島旅行', '#手作り体験', '#思い出作り', '#カップル旅', '#おしゃれ'],
      date: '2024年2月',
      avatar: '💑',
      image: '/insta-post__list/candle1.jpg',
    },

    {
      id: 3,
      name: 'miyako_girls_trip',
      age: '女子旅',
      location: '大阪府',
      rating: 5,
      comment:
        '雨だったので参加しましたが、室内で楽しめました。色を選ぶのが想像以上に盛り上がって、旅のハイライトになりました！完成したキャンドルは今もお気に入りです。',
      experience: ['#宮古島女子旅', '#旅行好き', '#癒し時間', '#映えスポット', '#trip'],
      date: '2024年3月',
      avatar: '👭',
      image: '/insta-post__list/candle1.jpg',
    },
  ]

  return (
    <section className="bg-white py-30  opacity-0 relative mask-clip">
      <div className="container mx-auto px-4">
        <SectionHeading
         title={
         <>
         体験された方の<br className="block md:hidden" />リアルな声をご紹介
         </>
        }
        subtitle="pick up Voice" gradient />

        <div className="mx-auto max-w-5xl flex-col mb-[2rem] md:mb-[0rem] md:flex md:gap-x-5">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="
        bg-white w-[18rem]   /* 全体を小さく */
   shadow-md overflow-hidden border border-gray-100
        transform transition-all duration-1000
         raotate-0 md:rotate-[-2deg] hover:rotate-0 hover:scale-105
        mx-auto mb-[2rem] md:mb-0

      "
            >
              {/* --- Header --- */}
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="text-2xl mr-3">{t.avatar}</div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-gray-900 text-xs">{t.name}</span>
                    <span className="text-xs text-gray-500">{t.location}</span>
                  </div>
                </div>

                <div className="text-gray-400 text-xl cursor-pointer">⋯</div>
              </div>

              {/* --- 投稿画像（少し小さめ） --- */}
              {t.image && (
                <div className="w-full h-[8rem] bg-gray-100">
                  <img src={t.image} alt={`${t.name}の投稿画像`} className="w-full h-full object-cover" />
                </div>
              )}

              {/* --- Rating --- */}
              <div className="px-4 mt-3 flex items-center text-yellow-400 text-sm">
                {'★'.repeat(t.rating)}
                {'☆'.repeat(5 - t.rating)}
                <span className="ml-2 text-gray-500">{t.rating}.0</span>
              </div>

              {/* --- コメント --- */}
              <p className="px-4 mt-2 text-gray-800 leading-relaxed text-[0.7rem]">{t.comment}</p>

              {/* --- Tag --- */}
              <div className="px-4 mt-3">
                <span className="inline-block bg-gray-100 text-gray-700 text-xs py-1 px-3 rounded-full">
                  {t.experience}
                </span>
              </div>

              {/* --- Footer --- */}
              <div className="border-t border-gray-100 px-4 py-3 mt-3 text-xs text-gray-500 flex justify-between">
                <span>❤️ {Math.floor(Math.random() * 300 + 50)} likes</span>
                <span>{t.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram誘導 */}
        <div
          className="from-soft-pink/20 to-pastel-coral/20  mt-12 rounded-2xl bg-gradient-to-r p-8 text-center mask-clip"
          style={{ animationDelay: '800ms' }}
        >
          <div className="mb-4 text-4xl">📸</div>
          <h3 className="mb-4 text-1xl font-bold text-gray-900">あなたの素敵な作品も、<br className="block md:hidden" />ぜひシェアしてくださいね！</h3>
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
            <span className="rounded-full bg-white/80 px-3 py-1 text-sm text-gray-700">#ゆめかわキャンドル</span>
            <span className="rounded-full bg-white/80 px-3 py-1 text-sm text-gray-700">#宮古島体験</span>
            <span className="rounded-full bg-white/80 px-3 py-1 text-sm text-gray-700">#インスタ映え</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export { TestimonialsSection }
