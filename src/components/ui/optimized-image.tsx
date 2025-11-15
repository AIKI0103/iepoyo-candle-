/**
 * 最適化画像コンポーネント
 * Cloudflare Images対応・レスポンシブ・LCP最適化
 */

'use client'

import { forwardRef } from 'react'
import Image, { ImageProps } from 'next/image'

import {
  CloudflareImageOptions,
  getCardImageConfig,
  getCloudflareImageUrl,
  getHeroImageConfig,
  getIconImageConfig,
  getLazyLoadingConfig,
  getLCPOptimizedConfig,
  getThumbnailImageConfig,
} from '@/lib/image-optimization'
import { cn } from '@/lib/utils'

export interface OptimizedImageProps extends Omit<ImageProps, 'src'> {
  src: string
  alt: string
  preset?: 'hero' | 'card' | 'thumbnail' | 'icon'
  cloudflareOptions?: CloudflareImageOptions
  isLCPImage?: boolean // LCP（Largest Contentful Paint）最適化
  customSizes?: string
  className?: string
}

/**
 * 最適化画像コンポーネント
 */
const OptimizedImage = forwardRef<HTMLImageElement, OptimizedImageProps>(
  (
    {
      src,
      alt,
      preset = 'card',
      cloudflareOptions = {},
      isLCPImage = false,
      customSizes,
      className,
      width,
      height,
      ...props
    },
    ref
  ) => {
    // Cloudflare Images URLの場合の処理
    if (src.includes('imagedelivery.net')) {
      // プリセット別の設定適用
      let imageConfig

      switch (preset) {
        case 'hero':
          imageConfig = getHeroImageConfig(src)
          break
        case 'card':
          imageConfig = getCardImageConfig(src)
          break
        case 'thumbnail':
          imageConfig = getThumbnailImageConfig(src)
          break
        case 'icon':
          return (
            <Image
              ref={ref}
              src={src}
              alt={alt}
              width={width || 40}
              height={height || 40}
              className={cn('object-cover', className)}
              {...(isLCPImage
                ? getLCPOptimizedConfig()
                : getLazyLoadingConfig())}
              {...props}
            />
          )
        default:
          imageConfig = getCardImageConfig(src)
      }

      // カスタムオプションがある場合は適用
      const optimizedSrc =
        Object.keys(cloudflareOptions).length > 0
          ? getCloudflareImageUrl(src, cloudflareOptions)
          : imageConfig.src

      return (
        <Image
          ref={ref}
          src={optimizedSrc}
          alt={alt}
          width={width}
          height={height}
          sizes={customSizes || imageConfig.sizes}
          className={cn('object-cover', className)}
          {...(isLCPImage ? getLCPOptimizedConfig() : getLazyLoadingConfig())}
          {...props}
        />
      )
    }

    // 静的画像（ロゴなど）の場合
    if (src.startsWith('/') || src.startsWith('./')) {
      const iconConfig = getIconImageConfig(src, (width as number) || 40)

      return (
        <Image
          ref={ref}
          src={iconConfig.src}
          alt={alt}
          width={iconConfig.width}
          height={iconConfig.height}
          className={cn('object-cover', className)}
          {...(isLCPImage ? getLCPOptimizedConfig() : getLazyLoadingConfig())}
          {...props}
        />
      )
    }

    // その他の場合は通常のNext.js Imageコンポーネント
    return (
      <Image
        ref={ref}
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={customSizes}
        className={cn('object-cover', className)}
        {...(isLCPImage ? getLCPOptimizedConfig() : getLazyLoadingConfig())}
        {...props}
      />
    )
  }
)

OptimizedImage.displayName = 'OptimizedImage'

export { OptimizedImage }

/**
 * ヒーロー画像専用コンポーネント（LCP最適化済み）
 */
export const HeroImage = forwardRef<HTMLImageElement, OptimizedImageProps>(
  ({ className, ...props }, ref) => (
    <OptimizedImage
      ref={ref}
      preset="hero"
      isLCPImage={true}
      className={cn('h-full w-full', className)}
      {...props}
    />
  )
)

HeroImage.displayName = 'HeroImage'

/**
 * カード画像専用コンポーネント
 */
export const CardImage = forwardRef<HTMLImageElement, OptimizedImageProps>(
  ({ className, ...props }, ref) => (
    <OptimizedImage
      ref={ref}
      preset="card"
      className={cn('aspect-square', className)}
      {...props}
    />
  )
)

CardImage.displayName = 'CardImage'

/**
 * サムネイル画像専用コンポーネント
 */
export const ThumbnailImage = forwardRef<HTMLImageElement, OptimizedImageProps>(
  ({ className, ...props }, ref) => (
    <OptimizedImage
      ref={ref}
      preset="thumbnail"
      className={cn('h-16 w-16', className)}
      {...props}
    />
  )
)

ThumbnailImage.displayName = 'ThumbnailImage'

/**
 * ロゴ・アイコン画像専用コンポーネント
 */
export const IconImage = forwardRef<HTMLImageElement, OptimizedImageProps>(
  ({ className, ...props }, ref) => (
    <OptimizedImage
      ref={ref}
      preset="icon"
      className={cn('object-contain', className)}
      {...props}
    />
  )
)

IconImage.displayName = 'IconImage'
