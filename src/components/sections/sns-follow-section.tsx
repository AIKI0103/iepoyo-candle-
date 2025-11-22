'use client'
import { useEffect, useRef } from 'react'
import { IconInstagram } from '@/components/icons/icon-instagram'
import { IconLine } from '@/components/icons/icon-line'
import { SectionHeading } from '@/components/ui/section-heading'
const SnsFollowSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

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

    const numParticles = 15
    let lastScrollY = window.scrollY
    let scrollVelocity = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()

    // パステル系でふわふわカラフル
    const colors = ['#FFB6C1', '#B0E0E6', '#E6E6FA', '#FFDAB9', '#98FB98', '#FFFACD']
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
      })
    }

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
        p.r = p.baseR + Math.sin(time + p.phase) * 6
        p.x += p.dx + Math.sin(time + p.phase) * 0.5 + scrollVelocity * 0.02
        p.y += p.dy + Math.cos(time + p.phase) * 0.5 + scrollVelocity * 0.02

        if (p.x < 0) p.x = 0
        if (p.x > canvas.width) p.x = canvas.width
        if (p.y < 0) p.y = 0
        if (p.y > canvas.height) p.y = canvas.height

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.alpha
        ctx.fill()
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

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-pink-100 via-purple-100 to-green-100">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none"></canvas>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-2xl text-center space-y-8">
          <SectionHeading
            title="最新情報をSNSでチェック"
            subtitle="キャンドル作りのコツや新作情報、お得なキャンペーンをいち早くお届け"
            gradient
          />
          <div className="flex flex-col justify-center gap-6 sm:flex-row mb-12">
            <a
              href="https://www.instagram.com/iepoyo.miyako/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-pink-300 via-purple-300 to-yellow-300 px-10 py-4 text-white shadow-lg transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              <IconInstagram size={24} color="white" />
              <span className="font-semibold">Instagram をフォロー</span>
            </a>
            <a
              href="https://lin.ee/PhCo4lv"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-green-300 via-lime-300 to-cyan-300 px-10 py-4 text-white shadow-lg transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              <IconLine size={24} color="white" />
              <span className="font-semibold">LINE で友だち追加</span>
            </a>
          </div>

          <div className="rounded-3xl bg-white/30 p-8 backdrop-blur-lg shadow-xl">
            <h3 className="mb-5 text-xl font-bold text-gray-900 drop-shadow-sm">フォロー特典</h3>
            <div className="grid gap-4 text-sm text-gray-800/90">
              <div className="flex items-center justify-center gap-3">
                <span className="font-medium">限定キャンペーン情報</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <span className="font-medium">キャンドル作りのコツ</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <span className="font-medium">新作デザインの先行公開</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { SnsFollowSection }
