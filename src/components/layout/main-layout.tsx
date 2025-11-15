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

        {/* 前景コンテンツ */}
        <div className="relative flex flex-col w-full">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingSocialBar />
        </div>
</>

)}
export { MainLayout }
