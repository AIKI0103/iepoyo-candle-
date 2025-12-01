'use client'

import { useState, useEffect, useRef } from 'react'
import { SectionHeading } from '@/components/ui/section-heading'

const TestimonialsSection = () => {
  const [activeTab, setActiveTab] = useState<'hashtags' | 'examples'>('hashtags')
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const images = ['/Anicandle2.png', '/Anicandle3.png', '/Anicandle4.png']

  const [leftIndex, setLeftIndex] = useState(0)
  const [rightIndex, setRightIndex] = useState(1) // 初期値は左と被らないように1に

  useEffect(() => {
    const interval = setInterval(() => {
      setLeftIndex((prev) => (prev + 1) % images.length)

      // 右側は左側と被らないようにランダムに
      let nextRight
      do {
        nextRight = Math.floor(Math.random() * images.length)
      } while (nextRight === leftIndex)
      setRightIndex(nextRight)
    }, 1000) // 0.5秒ごとに切り替え

    return () => clearInterval(interval)
  }, [leftIndex])

  // --- パーティクル背景 ---
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    type Particle = {
      x: number
      y: number
      r: number
      baseR: number
      dx: number
      dy: number
      alpha: number
      color: string
      phase: number
      shape: 'circle' | 'square' | 'triangle' | 'star'
    }

    const particles: Particle[] = []
    const numParticles = 15
    let lastScrollY = window.scrollY
    let scrollVelocity = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()

    // パステル系カラー
    const colors = ['#FFB6C1', '#B0E0E6', '#E6E6FA', '#FFDAB9', '#98FB98', '#FFFACD']
    const shapes: Particle['shape'][] = ['circle', 'square', 'triangle', 'star']

    for (let i = 0; i < numParticles; i++) {
      const baseR = Math.random() * 40 + 15
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: baseR,
        baseR,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.4 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        phase: Math.random() * Math.PI * 2,
        shape: shapes[Math.floor(Math.random() * shapes.length)],
      })
    }

    const handleScroll = () => {
      const currentScroll = window.scrollY
      scrollVelocity = currentScroll - lastScrollY
      lastScrollY = currentScroll
    }
    window.addEventListener('scroll', handleScroll)

    const drawStar = (ctx: CanvasRenderingContext2D, x: number, y: number, r: number) => {
      const spikes = 5
      const step = Math.PI / spikes
      ctx.beginPath()
      for (let i = 0; i < 2 * spikes; i++) {
        const radius = i % 2 === 0 ? r : r / 2
        const angle = i * step
        const px = x + radius * Math.sin(angle)
        const py = y - radius * Math.cos(angle)
        if (i === 0) ctx.moveTo(px, py)
        else ctx.lineTo(px, py)
      }
      ctx.closePath()
      ctx.fill()
    }

    let animationFrameId: number
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const time = Date.now() / 1000

      particles.forEach((p) => {
        p.r = p.baseR + Math.sin(time + p.phase) * 6
        p.x += p.dx + Math.sin(time + p.phase) * 0.5 + scrollVelocity * 0.02
        p.y += p.dy + Math.cos(time + p.phase) * 0.5 + scrollVelocity * 0.02

        if (p.x < 0) p.x = 0
        if (p.x > canvas.width) p.x = canvas.width
        if (p.y < 0) p.y = 0
        if (p.y > canvas.height) p.y = canvas.height

        ctx.fillStyle = p.color
        ctx.globalAlpha = p.alpha

        switch (p.shape) {
          case 'circle':
            ctx.beginPath()
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
            ctx.fill()
            break
          case 'square':
            ctx.fillRect(p.x - p.r / 2, p.y - p.r / 2, p.r, p.r)
            break
          case 'triangle':
            ctx.beginPath()
            ctx.moveTo(p.x, p.y - p.r)
            ctx.lineTo(p.x - p.r, p.y + p.r)
            ctx.lineTo(p.x + p.r, p.y + p.r)
            ctx.closePath()
            ctx.fill()
            break
          case 'star':
            drawStar(ctx, p.x, p.y, p.r)
            break
        }
      })

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

  // --- 体験談データ ---
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
    <section className="py-20 relative mask-clip">
      <div className="absolute bottom-1 left-0 z-10 w-32 h-32 overflow-hidden">
        <img src={images[leftIndex]} alt="左の切り替え画像" className="w-full h-full object-cover" />
      </div>

      <div className="absolute bottom-1 right-0 z-10 w-32 h-32 overflow-hidden">
        <img src={images[rightIndex]} alt="右の切り替え画像" className="w-full h-full object-cover" />
      </div>
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none"></canvas>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          title={
            <>
              体験された方の
              <br className="block md:hidden" />
              リアルな声をご紹介
            </>
          }
          subtitle="pick up Voice"
          gradient
        />

        <div className="mx-auto max-w-5xl flex flex-col md:flex-row md:gap-5 mb-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white w-full md:w-[18rem] shadow-md border border-gray-100 rounded-lg overflow-hidden mx-auto mb-6 transform transition-all duration-300 hover:scale-105"
            >
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

              {t.image && (
                <div className="w-full h-32 bg-gray-100">
                  <img src={t.image} alt={`${t.name}の投稿画像`} className="w-full h-full object-cover" />
                </div>
              )}

              <div className="px-4 mt-2 flex items-center text-yellow-400 text-sm">
                {'★'.repeat(t.rating)}
                {'☆'.repeat(5 - t.rating)}
                <span className="ml-2 text-gray-500">{t.rating}.0</span>
              </div>

              <p className="px-4 mt-2 text-gray-800 leading-relaxed text-[0.75rem]">{t.comment}</p>

              <div className="px-4 mt-2 flex flex-wrap gap-1">
                {t.experience.map((tag, idx) => (
                  <span key={idx} className="inline-block bg-gray-100 text-gray-700 text-xs py-1 px-2 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="border-t border-gray-100 px-4 py-2 mt-2 text-xs text-gray-500 flex justify-between">
                <span>❤️ {Math.floor(Math.random() * 300 + 50)} likes</span>
                <span>{t.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <div className="flex justify-center gap-4 mb-6 flex-wrap">
            {['hashtags', 'examples'].map((tab) => (
              <button
                key={tab}
                className={`px-6 py-2 font-semibold uppercase tracking-wider transition-all duration-200 border-b-4 ${
                  activeTab === tab
                    ? 'border-pink-400 text-pink-800 bg-gradient-to-r from-pink-50 via-pink-100 to-pink-50 shadow-lg'
                    : 'border-transparent text-pink-500 hover:border-pink-300 hover:text-pink-700'
                }`}
                onClick={() => setActiveTab(tab as any)}
              >
                {tab === 'hashtags' ? 'ハッシュタグ' : '作品ギャラリー'}
              </button>
            ))}
          </div>

          <div
            className="mx-auto max-w-full p-10 bg-gradient-to-b from-pink-50 via-pink-100 to-pink-50 text-center shadow-xl relative overflow-hidden h-auto md:h-[50rem]
"
          >
            <div className="absolute inset-0 bg-[url('/images/watercolor-pink.png')] bg-no-repeat bg-center bg-cover opacity-10 pointer-events-none"></div>

            {activeTab === 'hashtags' && (
              <div className="space-y-6 relative z-10">
                <h3 className="text-2xl font-bold text-pink-900 tracking-tight">あなたの作品を見せてね！</h3>
                <p className="text-pink-700 text-lg">
                  ハッシュタグ{' '}
                  <a
                    href="https://www.instagram.com/explore/tags/宮古島キャンドル/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline decoration-pink-300"
                  >
                    #宮古島キャンドル
                  </a>{' '}
                  をつけて投稿してください✨
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <span className="bg-gradient-to-r from-pink-200 to-pink-300 px-4 py-1 text-sm text-white font-medium border border-pink-100 shadow-sm">
                    #宮古島キャンドル
                  </span>
                  <span className="bg-gradient-to-r from-pink-200 to-pink-300 px-4 py-1 text-sm text-white font-medium border border-pink-100 shadow-sm">
                    #ゆめかわキャンドル
                  </span>
                  <span className="bg-gradient-to-r from-pink-200 to-pink-300 px-4 py-1 text-sm text-white font-medium border border-pink-100 shadow-sm">
                    #宮古島体験
                  </span>
                  <span className="bg-gradient-to-r from-pink-200 to-pink-300 px-4 py-1 text-sm text-white font-medium border border-pink-100 shadow-sm">
                    #インスタ映え
                  </span>
                </div>
              </div>
            )}

            {activeTab === 'examples' && (
              <div className="space-y-6 relative z-10">
                <h3 className="text-2xl font-bold text-pink-900 tracking-tight">作品ギャラリー</h3>
                <p className="text-pink-700 text-lg">お客様が作った素敵なキャンドル作品をご紹介✨</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
                  {testimonials.map((t) => (
                    <div key={t.id} className="relative group overflow-hidden shadow-md border border-pink-100">
                      <img
                        src={t.image}
                        alt={`${t.name}の作品`}
                        className="w-full h-36 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 w-full from-black/40 via-black/20 to-transparent text-white text-xs py-1 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {t.name} さんの作品
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export { TestimonialsSection }
