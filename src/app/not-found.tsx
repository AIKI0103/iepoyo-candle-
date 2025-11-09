/**
 * 404 Not Found ページ
 * Next.js 13+ App Router対応
 */

import { Card } from '@/components/ui/card'
import { NotFoundButtons } from '@/components/not-found/not-found-buttons'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#FFF7FA] to-[#FCE6F6] p-4">
      <Card className="w-full max-w-md p-8 text-center">
        <div className="mb-6">
          <div className="mb-4 text-6xl">🕯️</div>
          <h1 className="mb-2 text-3xl font-bold text-gray-800">404</h1>
          <h2 className="mb-4 text-xl font-semibold text-gray-700">
            ページが見つかりません
          </h2>
          <p className="mb-4 text-gray-600">
            お探しのページは存在しないか、移動された可能性があります。
          </p>
        </div>

        <NotFoundButtons />

        <div className="mt-6 text-xs text-gray-500">
          <p>宮古島キャンドル体験・販売サイト</p>
        </div>
      </Card>
    </div>
  )
}
