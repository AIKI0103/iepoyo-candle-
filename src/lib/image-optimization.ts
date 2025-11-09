/**
 * 画像最適化ユーティリティ
 * Cloudflare Images連携とレスポンシブ対応
 */

export interface ImageVariant {
  width: number
  height?: number
  quality?: number
  format?: 'webp' | 'avif' | 'jpeg' | 'png'
}

export interface CloudflareImageOptions {
  width?: number
  height?: number
  quality?: number
  format?: 'webp' | 'avif' | 'jpeg' | 'png'
  fit?: 'scale-down' | 'contain' | 'cover' | 'crop' | 'pad'
  gravity?: 'auto' | 'center' | 'north' | 'south' | 'east' | 'west'
  blur?: number
  brightness?: number
  contrast?: number
  gamma?: number
  sharpen?: number
}

/**
 * Cloudflare Images URLを生成
 */
export function getCloudflareImageUrl(
  imageId: string,
  options: CloudflareImageOptions = {}
): string {
  // 既にフルURLの場合は、パラメータを追加
  if (imageId.startsWith('https://imagedelivery.net/')) {
    const url = new URL(imageId)
    const pathParts = url.pathname.split('/')
    if (pathParts.length >= 4) {
      // 既存のvariant（末尾）を置き換え
      pathParts.pop()
      const baseUrl = `${url.origin}${pathParts.join('/')}`
      return `${baseUrl}/${buildCloudflareVariant(options)}`
    }
  }

  // 新しいURL構築
  const accountHash = 'NvrRuadp8jbz6w1RVQvxOg' // 既存のアカウントハッシュ
  const variant = buildCloudflareVariant(options)
  return `https://imagedelivery.net/${accountHash}/${imageId}/${variant}`
}

/**
 * Cloudflareのvariant文字列を構築
 */
function buildCloudflareVariant(options: CloudflareImageOptions): string {
  const params: string[] = []

  if (options.width) params.push(`w=${options.width}`)
  if (options.height) params.push(`h=${options.height}`)
  if (options.quality) params.push(`q=${options.quality}`)
  if (options.format) params.push(`f=${options.format}`)
  if (options.fit) params.push(`fit=${options.fit}`)
  if (options.gravity) params.push(`gravity=${options.gravity}`)
  if (options.blur) params.push(`blur=${options.blur}`)
  if (options.brightness) params.push(`brightness=${options.brightness}`)
  if (options.contrast) params.push(`contrast=${options.contrast}`)
  if (options.gamma) params.push(`gamma=${options.gamma}`)
  if (options.sharpen) params.push(`sharpen=${options.sharpen}`)

  return params.length > 0 ? params.join(',') : 'public'
}

/**
 * レスポンシブ画像のsizes属性を生成
 */
export function getResponsiveSizes(breakpoints: {
  mobile?: string
  tablet?: string
  desktop?: string
  default: string
}): string {
  const sizes = []

  if (breakpoints.mobile) {
    sizes.push(`(max-width: 640px) ${breakpoints.mobile}`)
  }
  if (breakpoints.tablet) {
    sizes.push(`(max-width: 1024px) ${breakpoints.tablet}`)
  }
  if (breakpoints.desktop) {
    sizes.push(`(max-width: 1920px) ${breakpoints.desktop}`)
  }

  sizes.push(breakpoints.default)

  return sizes.join(', ')
}

/**
 * 画像の複数バリエーション生成（srcSet用）
 */
export function generateImageVariants(
  imageId: string,
  variants: ImageVariant[]
): { src: string; srcSet: string; sizes: string } {
  // デフォルト画像
  const defaultSrc = getCloudflareImageUrl(imageId, {
    width: variants[0]?.width || 800,
    quality: 85,
    format: 'webp',
    fit: 'cover',
  })

  // srcSet生成
  const srcSetEntries = variants.map((variant) => {
    const url = getCloudflareImageUrl(imageId, {
      width: variant.width,
      height: variant.height,
      quality: variant.quality || 85,
      format: variant.format || 'webp',
      fit: 'cover',
    })
    return `${url} ${variant.width}w`
  })

  // sizes生成（一般的なブレークポイント）
  const sizes = getResponsiveSizes({
    mobile: '100vw',
    tablet: '50vw',
    desktop: '33vw',
    default: '400px',
  })

  return {
    src: defaultSrc,
    srcSet: srcSetEntries.join(', '),
    sizes,
  }
}

/**
 * プリセット: ヒーロー画像用
 */
export function getHeroImageConfig(imageId: string) {
  return generateImageVariants(imageId, [
    { width: 375, quality: 80, format: 'webp' }, // Mobile
    { width: 768, quality: 85, format: 'webp' }, // Tablet
    { width: 1280, quality: 90, format: 'webp' }, // Desktop
    { width: 1920, quality: 95, format: 'webp' }, // Large Desktop
  ])
}

/**
 * プリセット: カード画像用
 */
export function getCardImageConfig(imageId: string) {
  return generateImageVariants(imageId, [
    { width: 300, quality: 80, format: 'webp' }, // Mobile
    { width: 400, quality: 85, format: 'webp' }, // Tablet
    { width: 500, quality: 90, format: 'webp' }, // Desktop
  ])
}

/**
 * プリセット: サムネイル用
 */
export function getThumbnailImageConfig(imageId: string) {
  return generateImageVariants(imageId, [
    { width: 64, quality: 75, format: 'webp' },
    { width: 128, quality: 80, format: 'webp' },
    { width: 256, quality: 85, format: 'webp' },
  ])
}

/**
 * プリセット: ロゴ・アイコン用（静的画像向け）
 */
export function getIconImageConfig(imagePath: string, size: number = 40) {
  return {
    src: imagePath,
    width: size,
    height: size,
    // 静的画像の場合はsrcSetなし
  }
}

/**
 * 画像の遅延読み込み設定
 */
export function getLazyLoadingConfig(priority: boolean = false) {
  return {
    loading: priority ? ('eager' as const) : ('lazy' as const),
    priority,
  }
}

/**
 * Core Web Vitals用のLCP最適化設定
 */
export function getLCPOptimizedConfig() {
  return {
    priority: true,
    loading: 'eager' as const,
    fetchPriority: 'high' as const,
  }
}
