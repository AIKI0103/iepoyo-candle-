/**
 * グローバルローディングページ
 * Next.js 13+ App Router対応
 */

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#FFF7FA] to-[#FCE6F6]">
      <div className="text-center">
        {/* キャンドルアニメーション */}
        <div className="relative mb-8">
          <div className="animate-pulse text-6xl">🕯️</div>
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 transform">
            <div className="h-6 w-2 animate-bounce rounded-full bg-gradient-to-t from-orange-400 to-yellow-300"></div>
          </div>
        </div>

        <h2 className="mb-4 text-xl font-semibold text-gray-700">
          読み込み中...
        </h2>

        {/* プログレスバー */}
        <div className="h-2 w-64 overflow-hidden rounded-full bg-gray-200">
          <div className="h-full animate-pulse rounded-full bg-gradient-to-r from-[#4FC3E7] to-[#F4C2C1]"></div>
        </div>

        <p className="mt-4 text-sm text-gray-500">
          宮古島キャンドル体験をお楽しみください
        </p>
      </div>
    </div>
  )
}
