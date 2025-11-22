'use client'

import Link from 'next/link'
import { EXPERIENCE_MENUS, formatPrice } from '@/data/master'
import { GradientButton } from '@/components/ui/gradient-button'
import { CardImage } from '@/components/ui/optimized-image'
import { SectionHeading } from '@/components/ui/section-heading'

import GSAPFadeIn from '@/components/GSAPFadeIn' // 追加

const PopularProductsSection = () => {
  const popularMenus = [...EXPERIENCE_MENUS].sort((a, b) => b.popularity - a.popularity)

  return (
    <section className="relative z-30 py-20 bg-gradient-to-br from-pink-400/60 via-white/60 to-blue-400/60">
      {/* 背景画像用の絶対配置 div */}
      <div className="absolute inset-0 bg-[url('/bg-star.jpg')] bg-cover bg-center opacity-20 z-0" />
      <div className="absolute inset-0 bg-[url('/yuruhuwa-bg.jpg')] bg-cover bg-center opacity-70 z-0 my-[3rem] mx-[1rem] md:mx-[5rem] rounded-2xl" />
      <GSAPFadeIn />

      <SectionHeading
        title={
          <>
            宮古島の海を感じる
            <br className="block md:hidden" />
            キャンドル体験
          </>
        }
        subtitle="Candle Making Experience"
        gradient
      />

      <div className="max-w-6xl mx-auto mt-12 flex flex-col lg:flex-row gap-8 justify-center items-center md:items-start relative">
        {/* 左: 大きな画像と下に文章 */}
        <div className="flex flex-col md:items-start w-[327.67px] mask-clip ">
          <CardImage
            src={popularMenus[0].image}
            alt={`${popularMenus[0].name} - 宮古島で人気のキャンドル体験`}
            width={300.67}
            height={300.67}
            className="object-cover w-[327.67px] h-[327.67px]"
          />
          <h2 className="text-1xl font-bold text-gray-900 mt-2">{popularMenus[0].name}</h2>
          <p className="text-gray-600 text-[1rem]">{popularMenus[0].description}</p>
          <div className="flex items-center justify-between mr-4 w-[327.67px]">
            <span className="text-miyako-blue text-[1rem] justify-between">{formatPrice(popularMenus[0].price)}</span>
            <Link href={`/experience/${popularMenus[0].id}`}>
              <span className="text-miyako-blue text-sm cursor-pointer">詳細を見る →</span>
            </Link>
          </div>
        </div>

        {/* 右: 小さいカード2つ */}
        <div className="flex flex-col gap-6">
          {popularMenus.slice(1, 3).map((menu) => (
            <div key={menu.id} className="flex flex-col sm:flex-row gap-4 fade-in">
              <CardImage
                src={menu.image}
                alt={`${menu.name} - 宮古島で人気のキャンドル体験`}
                width={203.67}
                height={203.67}
                className="object-cover w-[203.67px] h-[203.67px]"
              />
              <div className="flex flex-col justify-between w-[203.67px]">
                <div>
                  <h3 className="text-1xl font-bold text-gray-900 mt-2">{menu.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{menu.description}</p>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-miyako-blue text-sm font-bold">{formatPrice(menu.price)}</span>
                  <Link href={`/experience/${menu.id}`}>
                    <span className="text-miyako-blue text-xs cursor-pointer">詳細を見る →</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 下部CTA */}
      <div className="mask-clip  mt-12 text-center">
        <p className="mb-6 text-gray-600">
          もちろん、体験でご自身で作ることも、
          <br className="block md:hidden" />
          完成品をご購入いただくことも可能です。
        </p>
        <div className="flex-col md:flex justify-center md:gap-4">
          <Link href="/gallery">
            <GradientButton size="lg" variant="pink" className="w-[243px] mb-[2rem] md:mb-0">
              体験メニューを見る
            </GradientButton>
          </Link>
          <Link href="/gallery">
            <GradientButton size="lg" variant="pink">
              何が作れるか見てみる
            </GradientButton>
          </Link>
        </div>
      </div>
      <div className="relative w-full h-24 overflow-hidden opacity-20">
        <div
          className="absolute whitespace-nowrap font-bold text-6xl flex"
          style={{
            background: 'linear-gradient(to right, #4FC3E7, #F4C2C1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'slideText 40s linear infinite',
          }}
        >
          {/* 文字列を2回だけでOK */}
          <span className="mr-[1rem]">iepoyo&nbsp;candle&nbsp;iepoyo&nbsp;candle</span>
          <span className="mr-[1rem]">iepoyo&nbsp;candle&nbsp;iepoyo&nbsp;candle</span>
        </div>

        <style jsx>{`
          @keyframes slideText {
            0% {
              transform: translateX(100%); /* 右からスタート */
            }
            100% {
              transform: translateX(-100%); /* 左に全部流れる */
            }
          }
        `}</style>
      </div>
    </section>
  )
}

export { PopularProductsSection }
