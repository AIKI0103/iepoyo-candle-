'use client'

import { useEffect, useState } from 'react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { SectionHeading } from '@/components/ui/section-heading'

interface GoogleReview {
  id: number
  name: string
  rating: number
  date: string
  comment: string
  avatar: string
}

const GoogleReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const reviews: GoogleReview[] = [
    {
      id: 1,
      name: '桑原崇',
      rating: 5,
      date: '',
      comment:
        '手作りのお土産を作れると聞いて参加してみました。あまり手先が器用じゃないので失敗してしまうかと思ったのですが、親切に作り方のコツを教えてくれたので満足の行くものを作れました。ありがとうございます。',
      avatar: '👨',
    },
    {
      id: 2,
      name: 'NAA',
      rating: 5,
      date: '2週間前',
      comment:
        '自分もうまくできるか心配でしたが、とても丁寧に教えてもらえてめちゃくちゃ可愛い仕上がりに大満足です！小さい子でも体験できるみたいで、家族での思い出作りにも良し、カップルや友達とお揃いで思い出残すのにも良し、とりあえず可愛すぎるのでオススメです！最高の思い出になりました！ありがとうございました。',
      avatar: '👤',
    },
    {
      id: 3,
      name: 'VIBES宮古島',
      rating: 5,
      date: '1週間前',
      comment:
        'ツアーに参加して下さったお客さんを連れて行きました。初めてのキャンドル作りということもあって初めは不安そうでしたが、丁寧な指導ということもあって大変楽しんでおられました。雨の日でも楽しめるアクティビティという事もあって、今後もお願いしようと思っています♪ありがとうございました😊',
      avatar: '🏢',
    },
    {
      id: 4,
      name: '中島俊輔',
      rating: 5,
      date: '2週間前',
      comment:
        'めちゃくちゃおしゃれなキャンドル作れました！ありがとうございました😊店員さんの対応もよかったです！！！',
      avatar: '👨',
    },
    {
      id: 5,
      name: '高橋 麻衣',
      rating: 5,
      date: '2024年2月',
      comment:
        '台風で外に出られない日でしたが、室内で楽しめる体験があって本当に助かりました。完成したキャンドルは今でも大切に使っています。',
      avatar: '👩‍🦱',
    },
  ]

  // 自動スライド
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(timer)
  }, [reviews.length])

  const nextSlide = () => {
    setCurrentIndex(currentIndex === reviews.length - 1 ? 0 : currentIndex + 1)
  }

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? reviews.length - 1 : currentIndex - 1)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="from-cream-white to-pastel-coral bg-gradient-to-br py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="お客様からの嬉しいお声"
          subtitle="Google Mapsでいただいた実際のレビューをご紹介"
          gradient
        />

        <div className="relative mx-auto max-w-4xl">
          {/* レビューカード */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="w-full flex-shrink-0">
                  <Card className="mx-2 border-0 bg-white/90 p-8 shadow-lg backdrop-blur-sm">
                    {/* 評価 */}
                    <div className="mb-6 flex items-center gap-3">
                      <div className="flex text-xl text-yellow-400">
                        {'★'.repeat(review.rating)}
                        {'☆'.repeat(5 - review.rating)}
                      </div>
                      <Badge variant="secondary">{review.rating}.0</Badge>
                    </div>

                    {/* コメント */}
                    <p className="mb-6 text-lg leading-relaxed text-gray-700">
                      &ldquo;{review.comment}&rdquo;
                    </p>

                    {/* ユーザー情報 */}
                    <div className="flex items-center gap-4">
                      <Avatar className="size-12">
                        <AvatarFallback className="text-2xl">
                          {review.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="text-lg font-semibold text-gray-900">
                          {review.name}
                        </div>
                        <Badge variant="outline" className="text-xs">
                          Google レビュー
                        </Badge>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* ナビゲーションボタン */}
          <button
            onClick={prevSlide}
            className="text-miyako-blue absolute top-1/2 left-0 flex h-12 w-12 -translate-x-4 -translate-y-1/2 transform items-center justify-center rounded-full bg-white/90 shadow-lg transition-all duration-200 hover:scale-110 hover:bg-white"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="text-miyako-blue absolute top-1/2 right-0 flex h-12 w-12 translate-x-4 -translate-y-1/2 transform items-center justify-center rounded-full bg-white/90 shadow-lg transition-all duration-200 hover:scale-110 hover:bg-white"
          >
            →
          </button>

          {/* インジケーター */}
          <div className="mt-8 flex justify-center space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 w-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-miyako-blue scale-125'
                    : 'bg-miyako-blue/30 hover:bg-miyako-blue/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Google Maps リンク */}
        <div className="animate-in fade-in slide-in-from-bottom-4 mt-12 text-center delay-400 duration-600">
          <p className="mb-4 text-gray-600">他のレビューもぜひご覧ください</p>
          <a
            href="https://maps.app.goo.gl/fpBhpQebtJxFKSyE6"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-miyako-blue hover:bg-miyako-blue/90 inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium text-white transition-colors duration-200"
          >
            <span>🗺️</span>
            Google Mapsでレビューを見る
          </a>
        </div>
      </div>
    </section>
  )
}

export { GoogleReviewsSection }
