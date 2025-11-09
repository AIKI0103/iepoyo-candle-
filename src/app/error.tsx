'use client'

/**
 * グローバルエラーページ
 * Next.js 13+ App Router対応
 */
import { useEffect } from 'react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // アプリケーションエラーはサーバーサイドログで記録される
  }, [error])

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#FFF7FA] to-[#FCE6F6] p-4">
      <Card className="w-full max-w-md p-8 text-center">
        <div className="mb-6">
          <div className="mb-4 text-6xl">😔</div>
          <h1 className="mb-2 text-2xl font-bold text-gray-800">
            エラーが発生しました
          </h1>
          <p className="mb-4 text-gray-600">
            申し訳ございません。予期しないエラーが発生しました。
          </p>
        </div>

        <div className="space-y-4">
          <Button
            onClick={reset}
            className="w-full bg-[#4FC3E7] hover:bg-[#4FC3E7]/90"
          >
            もう一度試す
          </Button>

          <Link
            href="/"
            className="inline-block w-full rounded-lg border border-gray-300 px-6 py-3 text-center font-semibold text-gray-700 transition-colors hover:bg-gray-50"
            style={{ textDecoration: 'none' }}
          >
            ホームに戻る
          </Link>
        </div>

        <div className="mt-6 text-xs text-gray-500">
          <p>エラーが続く場合は、お手数ですがお問い合わせください。</p>
          {error.digest && (
            <p className="mt-2 font-mono">エラーID: {error.digest}</p>
          )}
        </div>
      </Card>
    </div>
  )
}
