'use client'
import { useEffect, useRef } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/css'
import gsap from 'gsap'

const HeroSection = () => {
  const slidesRef = useRef<HTMLDivElement[]>([])
  const tweenRef = useRef<gsap.core.Tween | null>(null)

  useEffect(() => {
    // 初期スライドのみズーム
    const firstImg = slidesRef.current[0]?.querySelector('img')
    if (firstImg) {
      tweenRef.current = gsap.fromTo(
        firstImg,
        { scale: 1 },
        { scale: 1.1, duration: 6, ease: 'power1.inOut', yoyo: true, repeat: -1 },
      )
    }
  }, [])

  const handleMove = (splide: any) => {
    // すべてのアニメーションを止める
    tweenRef.current?.kill()
    slidesRef.current.forEach((slide) => {
      const img = slide.querySelector('img')
      if (img) gsap.set(img, { scale: 1 })
    })

    // 現在のスライドだけズーム
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
    <section className="hero-section">
<div className="hero-wrapper relative w-full h-[40rem]">
  <Splide
    options={{
      type: 'loop',
      autoplay: true,
      interval: 5000,
      pauseOnHover: false,
      arrows: false,
      pagination: true,
    }}
    onMoved={handleMove} // スライド切り替わり
  >
    {slideImages.map((src, idx) => (
      <SplideSlide key={idx} ref={(el) => el && (slidesRef.current[idx] = el)}>
        <img src={src} alt={`Slide ${idx + 1}`} className="h-[40rem] w-full object-cover" />
      </SplideSlide>
    ))}
  </Splide>

  {/* テキストを縦横中央に */}
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
