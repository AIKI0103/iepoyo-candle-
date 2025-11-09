import Image from 'next/image'
import { FloatingSocialBar } from '../social/floating-social-bar'
import { Footer } from './footer'
import { Header } from './header'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">

      {/* 背景画像を固定 */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <Image
          src="/bg-01.jpg"
          alt="背景画像"
          fill               // 親に合わせて自動リサイズ
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      {/* 前景コンテンツ */}
      <div className="relative z-10 flex flex-col max-w-2xl w-full">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingSocialBar />
      </div>
    </div>
  )
}

export { MainLayout }
