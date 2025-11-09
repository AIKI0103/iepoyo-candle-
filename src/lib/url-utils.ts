/**
 * ベースURLを取得（静的サイト用）
 */
export function getBaseUrl(): string {
  if (typeof window !== 'undefined') {
    return window.location.origin
  }
  return process.env.NEXT_PUBLIC_BASE_URL || 'https://candle.iepoyo.com'
}

/**
 * ホームページのURLを取得
 */
export function getHomeUrl(): string {
  return getBaseUrl()
}
