'use client'

export function FAQContactButtons() {
  return (
    <div className="mx-auto grid max-w-md grid-cols-1 gap-4 sm:grid-cols-2">
      <button
        type="button"
        onClick={() => {
          window.open('https://lin.ee/k0N5obP', '_blank', 'noopener,noreferrer')
        }}
        className="rounded-full bg-green-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-600"
      >
        📱 LINE公式アカウント
      </button>

      <button
        type="button"
        onClick={() => {
          window.open(
            'https://www.instagram.com/iepoyo.miyako/',
            '_blank',
            'noopener,noreferrer'
          )
        }}
        className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 font-semibold text-white transition-colors hover:from-purple-600 hover:to-pink-600"
      >
        📸 Instagramでお問い合わせ
      </button>
    </div>
  )
}
