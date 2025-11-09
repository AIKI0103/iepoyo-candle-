'use client'

/**
 * グローバルエラーハンドラー
 * ルートレイアウトエラーもキャッチ
 */
import { useEffect } from 'react'

import { getHomeUrl } from '@/lib/url-utils'

interface GlobalErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    // グローバルエラーはサーバーサイドログで記録される
  }, [error])

  return (
    <html>
      <body>
        <div className="flex min-h-screen items-center justify-center bg-red-50 p-4">
          <div className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow-lg">
            <div className="mb-6">
              <div className="mb-4 text-6xl">⚠️</div>
              <h1 className="mb-2 text-2xl font-bold text-red-800">
                重大なエラーが発生しました
              </h1>
              <p className="mb-4 text-red-600">
                システムエラーが発生しました。しばらく時間をおいてから再度お試しください。
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={reset}
                className="w-full rounded bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700"
              >
                再読み込み
              </button>

              <button
                onClick={() => (window.location.href = getHomeUrl())}
                className="w-full rounded border border-red-600 px-4 py-2 text-red-600 transition-colors hover:bg-red-50"
              >
                ホームページに戻る
              </button>
            </div>

            <div className="mt-6 text-xs text-gray-500">
              <p>エラーが続く場合は、ブラウザを再起動してください。</p>
              {error.digest && (
                <p className="mt-2 font-mono">エラーID: {error.digest}</p>
              )}
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
