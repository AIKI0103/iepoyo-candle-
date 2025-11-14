import Image from 'next/image'
import { FloatingSocialBar } from '../social/floating-social-bar'
import { Footer } from './footer'
import { Header } from './header'
import GSAPFadeIn from '../GSAPFadeIn' // ✅ 追加

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      {/* ✅ GSAPアニメーションの起動 */}
      <GSAPFadeIn />

      <div className="relative min-h-screen flex flex-col items-center justify-center">
        {/* 背景画像（固定） */}
        <div className="fixed bottom-0 left-0 fade-in opacity-0 ">
          <Image src="/candle1.jpg" alt="" width={300} height={200} />
        </div>

        {/* 前景コンテンツ */}
        <div className="relative flex flex-col w-full">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingSocialBar />
        </div>
      </div>
    </>
  )
}

export { MainLayout }
