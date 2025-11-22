'use client'
import { useEffect, useRef } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const HeroSection = () => {
  const slidesRef = useRef<HTMLDivElement[]>([])
  const tweenRef = useRef<gsap.core.Tween | null>(null)
  const heroRef = useRef<HTMLDivElement | null>(null)

  // ↓↓↓ これが重なり演出のメイン処理 ↓↓↓
  useEffect(() => {
    gsap.to(heroRef.current, {
      opacity: 0,
      y: -100, // ← 少し上にフェードアウトすると“重なっていく”感が増える
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })
  }, [])
  // ↑↑↑===============================↑↑↑
  // 　この一塊が「下のセクションが上に重なる演出」を作る

  useEffect(() => {
    if (!heroRef.current) return

    gsap.to(heroRef.current, {
      opacity: 0,
      y: -100,
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })
  }, [])

  const handleMove = (splide: any) => {
    tweenRef.current?.kill()

    slidesRef.current.forEach((slide) => {
      const img = slide.querySelector('img')
      if (img) gsap.set(img, { scale: 1 })
    })

    const currentSlide = slidesRef.current[splide.index]?.querySelector('img')
    if (currentSlide) {
      tweenRef.current = gsap.fromTo(
        currentSlide,
        { scale: 1 },
        { scale: 1.1, duration: 6, ease: 'power1.inOut', yoyo: true, repeat: -1 },
      )
    }
  }

  const slideImages = ['/slider-item1.png', '/slider-item2.png', '/slider-item3.png']

  return (
    <section className="hero-section sticky top-0 h-screen z-20 bg-[url('/slider-item1.png')] bg-cover bg-center flex items-center justify-center">
      <div className="hero-wrapper sticky top-0 w-full h-screen">
        <Splide
          options={{
            type: 'loop',
            autoplay: true,
            interval: 5000,
            pauseOnHover: false,
            arrows: false,
            pagination: true,
          }}
          onMoved={handleMove}
        >
          {slideImages.map((src, idx) => (
            <SplideSlide key={idx} ref={(el) => el && (slidesRef.current[idx] = el)}>
              <img src={src} alt={`Slide ${idx + 1}`} className="w-full h-screen object-cover" />
            </SplideSlide>
          ))}
        </Splide>

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">iepoyo candle</h1>
          <h2 className="mt-4 text-xl md:text-2xl text-white/90">Concept</h2>
          <p className="mt-4 max-w-2xl text-white/80">
            煌めく空、広がる海。宮古島の美しい思い出を自分だけのキャンドルに込めて。
          </p>
        </div>
      </div>
    </section>
  )
}

export { HeroSection }
