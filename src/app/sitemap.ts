/**
 * 動的サイトマップ生成 - SEO最適化版
 * Next.js 15 App Router + 2024-2025 SEOベストプラクティス対応
 * 宮古島キャンドル体験サイト - Google Search Console最適化
 */

import { MetadataRoute } from 'next'

import { getBaseUrl } from '@/lib/url-utils'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl()

  const now = new Date()
  const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
  const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)

  // 静的ページ一覧 - ビジネス重要度順
  const staticPages = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/experience`,
      lastModified: oneWeekAgo,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/reservation`,
      lastModified: now,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: oneWeekAgo,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/access`,
      lastModified: oneMonthAgo,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: oneMonthAgo,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  // 体験カテゴリー動的ページ（SEO重要）
  const experienceCategories = ['cylinder', 'shell', 'sphere']

  const experiencePages = experienceCategories.map((category) => ({
    url: `${baseUrl}/experience/${category}`,
    lastModified: oneWeekAgo,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))

  // ギャラリー詳細動的ページ（Instagram連携SEO）
  const galleryIds = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

  const galleryPages = galleryIds.map((id) => ({
    url: `${baseUrl}/gallery/${id}`,
    lastModified: oneWeekAgo,
    changeFrequency: 'weekly' as const,
    priority: 0.75,
  }))

  return [...staticPages, ...experiencePages, ...galleryPages]
}
