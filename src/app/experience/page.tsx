import { MainLayout } from '@/components/layout/main-layout'
import { ExperienceMenuSection } from '@/components/sections/experience-menu-section'

// ISR設定: 1時間ごとに再生成
export const revalidate = 3600

export default function ExperiencePage() {
  return (
    <MainLayout>
      {/* 体験メニューセクション - ページトップ */}
      <ExperienceMenuSection />
    </MainLayout>
  )
}
