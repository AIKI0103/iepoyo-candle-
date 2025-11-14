'use client'

import { lazy, Suspense } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import './slider.scss'

const LazyGradientButton = lazy(() =>
  import('@/components/ui/gradient-button').then((mod) => ({ default: mod.GradientButton }))
);

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-wrapper relative w-full h-[40rem]">
        {/* スライダー */}
        <div className="hero-slider relative inset-0 h-full w-full">
          <Splide
            options={{
              type: 'loop',
              autoplay: true,
              interval: 5000,
              pauseOnHover: false,
              arrows: false,    // 矢印非表示
              pagination: true, // ページネーション表示
            }}
            className="h-full w-full"
          >
            {['/slider-item1.png','/slider-item2.png','/slider-item3.png'].map((src, idx) => (
              <SplideSlide key={idx}>
                <img src={src} alt={`Slide ${idx + 1}`} className="h-[40rem] w-full object-cover" />
              </SplideSlide>
            ))}
          </Splide>
        </div>

        {/* テキスト */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center">
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
