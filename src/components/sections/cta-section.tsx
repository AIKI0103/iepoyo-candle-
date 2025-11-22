'use client'

import Link from 'next/link'
import { GradientButton } from '@/components/ui/gradient-button'

const CTASection = () => {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-pink-200 via-purple-200 to-blue-200">
      {/* 背景のふんわり丸 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/4 h-72 w-72 rounded-full bg-pink-300 opacity-50 blur-2xl" />
        <div className="absolute bottom-20 right-1/4 h-64 w-64 rounded-full bg-purple-300 opacity-40 blur-2xl" />
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300 opacity-30 blur-3xl" />

        {/* 小さいキラキラ */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-70 blur-sm"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center py-24">
        <h2 className="text-2xl md:text-3xl font-extrabold leading-snug drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] mb-6 text-white">
          <span className="text-white">宮古島で過ごす</span>
          <br className="hidden sm:block" />
          ふんわりキャンドル体験
        </h2>

        <p
          className="max-w-2xl mx-auto text-gray-800 text-base md:text-lg leading-relaxed
              bg-white/70 backdrop-blur-xl rounded-3xl px-8 py-6 shadow-lg border border-white/50 mb-12"
        >
          パステルの光に包まれて、世界にひとつだけのキャンドルを作る時間。
          <br />
          香りや色を自由に選べて、初めての方も安心です。
        </p>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {['ギフトラッピング', '思い出フォト', 'ちょっとしたお土産'].map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-gradient-to-r from-[#d2f3ff] via-[#cae0e4] to-pink-300 rounded-3xl backdrop-blur-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 text-white font-semibold"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/reservation">
            <GradientButton className="min-w-64 px-12 py-5 text-lg font-black rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-pink-300 hover:scale-105 hover:shadow-2xl transition-transform">
              体験を予約する
            </GradientButton>
          </Link>
        </div>
      </div>
    </section>
  )
}

export { CTASection }
