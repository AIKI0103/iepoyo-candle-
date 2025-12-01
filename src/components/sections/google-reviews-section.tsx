'use client'

import { useEffect, useRef, useState } from 'react'
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
  const canvasRef = useRef<HTMLCanvasElement>(null)

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
      comment: 'めちゃくちゃおしゃれなキャンドル作れました！ありがとうございました😊店員さんの対応もよかったです！！！',
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
      setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1))
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

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const particles: {
      x: number
      y: number
      r: number
      baseR: number
      dx: number
      dy: number
      alpha: number
      color: string
      phase: number
    }[] = []

    const numParticles = 8
    let lastScrollY = window.scrollY

    // キャンバスサイズ調整
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()

    // パーティクル初期化
    for (let i = 0; i < numParticles; i++) {
      const isBlue = Math.random() > 0.5
      const baseR = Math.random() * 40 + 30
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: baseR,
        baseR,
        dx: (Math.random() - 0.5) * 0.2,
        dy: (Math.random() - 0.5) * 0.2,
        alpha: Math.random() * 0.3 + 0.4,
        color: isBlue ? 'var(--miyako-blue)' : 'rgba(255,192,203,0.8)',
        phase: Math.random() * Math.PI * 2,
      })
    }

    // スクロール連動の加速度
    let scrollVelocity = 0
    const handleScroll = () => {
      const currentScroll = window.scrollY
      scrollVelocity = currentScroll - lastScrollY
      lastScrollY = currentScroll
    }
    window.addEventListener('scroll', handleScroll)

    let animationFrameId: number
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const time = Date.now() / 1000

      particles.forEach((p) => {
        // 大きさをふわっと変化
        p.r = p.baseR + Math.sin(time + p.phase) * 10

        // ゆらぎ＋スクロールで軽く揺れる
        p.x += p.dx + Math.sin(time + p.phase) * 0.3 + scrollVelocity * 0.05
        p.y += p.dy + Math.cos(time + p.phase) * 0.3 + scrollVelocity * 0.05

        // 画面端で反射
        if (p.x < 0) p.x = 0
        if (p.x > canvas.width) p.x = canvas.width
        if (p.y < 0) p.y = 0
        if (p.y > canvas.height) p.y = canvas.height

        // 描画
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.alpha
        ctx.fill()
      })

      // スクロールの減衰
      scrollVelocity *= 0.9

      ctx.globalAlpha = 1
      animationFrameId = requestAnimationFrame(drawParticles)
    }

    drawParticles()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-cream-white via-pink-50 to-pastel-coral py-20 overflow-hidden">
      {/* パーティクル用キャンバス */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none"></canvas>

      {/* 背景の水彩風装飾 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-72 h-72 bg-pink-200 rounded-full opacity-15 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-pink-300 rounded-full opacity-15 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-pink-100 rounded-full opacity-10 blur-2xl -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          title="お客様からの嬉しいお声"
          subtitle="Google Mapsでいただいた実際のレビューをご紹介"
          gradient
        />

        <div className="relative mx-auto max-w-2xl mt-10 h-[400px] md:h-[300px]">
          {/* レビューカード */}
          <div className="overflow-hidden h-full">
            <div
              className="flex h-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="w-full flex-shrink-0 px-2 h-full">
                  <Card className="relative h-full overflow-hidden bg-white/80 backdrop-blur-sm p-6 shadow-xl border border-white/20">
                    {/* 評価 */}
                    <div className="mb-3 flex items-center gap-2">
                      <div className="flex text-base text-yellow-400">
                        {'★'.repeat(review.rating)}
                        {'☆'.repeat(5 - review.rating)}
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {review.rating}.0
                      </Badge>
                    </div>

                    {/* コメント */}
                    <p className="mb-4 text-md text-gray-700 italic leading-snug">&ldquo;{review.comment}&rdquo;</p>

                    {/* ユーザー情報 */}
                    <div className="flex items-end gap-3 mr-auto ml-auto">
                      <Avatar className="size-10">
                        <AvatarFallback className="text-xl">{review.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-pink-800">{review.name}</div>
                        <Badge variant="outline" className="text-[10px] text-pink-500">
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
            className="absolute top-1/2 left-0 -translate-x-3 -translate-y-1/2 rounded-full w-10 h-10 bg-gradient-to-br from-pink-200 to-pink-300 shadow-md flex items-center justify-center text-white hover:scale-110 transition-transform"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 translate-x-3 -translate-y-1/2 rounded-full w-10 h-10 bg-gradient-to-br from-pink-200 to-pink-300 shadow-md flex items-center justify-center text-white hover:scale-110 transition-transform"
          >
            →
          </button>

          {/* インジケーター */}
          <div className="mt-6 flex justify-center space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-pink-400 scale-110 shadow-sm' : 'bg-pink-300/50 hover:bg-pink-400/70'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Google Maps リンク */}
        <div className="mt-10 text-center">
          <p className="mb-3 text-gray-600 text-sm">他のレビューもぜひご覧ください</p>
          <a
            href="https://maps.app.goo.gl/fpBhpQebtJxFKSyE6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-br from-pink-400 to-pink-500 text-white text-sm font-medium shadow hover:scale-105 transition-transform"
          >
            Google Mapsでレビューを見る
          </a>
        </div>
      </div>
    </section>
  )
}

export { GoogleReviewsSection }
