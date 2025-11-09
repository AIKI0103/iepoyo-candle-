import { FloatingSocialBar } from '../social/floating-social-bar'
import { Footer } from './footer'
import { Header } from './header'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col max-w-2xl mx-auto ">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingSocialBar />
    </div>
  )
}

export { MainLayout }
