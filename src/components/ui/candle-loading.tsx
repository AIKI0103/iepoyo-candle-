import { cn } from '@/lib/utils'
import { Card } from './card'

export interface CandleLoadingProps {
  message: string
  subtitle?: string
  className?: string
  fullScreen?: boolean
}

export interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  message?: string
}

export interface ButtonLoadingProps {
  className?: string
}

/**
 * 統一されたローディングシステム
 * キャンドルテーマのローディングアニメーション
 * 従来のLoading Spinnerと統合
 */
export function CandleLoading({
  message,
  subtitle,
  className = '',
  fullScreen = true,
}: CandleLoadingProps) {
  const containerClass = fullScreen
    ? 'fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm'
    : 'flex items-center justify-center'

  return (
    <div className={containerClass}>
      <Card
        className={cn(
          'bg-opacity-95 mx-4 max-w-sm border-2 border-[#F4C2C1] bg-gradient-to-br from-[#FFF7FA] to-[#FCE6F6] p-8 shadow-2xl',
          className
        )}
      >
        <div className="text-center">
          {/* キャンドルアニメーション */}
          <div className="relative mx-auto mb-6 h-20 w-16">
            {/* キャンドル本体 */}
            <div className="absolute bottom-0 left-1/2 h-16 w-8 -translate-x-1/2 transform rounded-t-lg bg-gradient-to-t from-[#F4C2C1] to-[#FCE6F6] shadow-md"></div>

            {/* 芯 */}
            <div className="absolute bottom-16 left-1/2 h-2 w-0.5 -translate-x-1/2 transform bg-gray-800"></div>

            {/* ゆらゆらする炎 */}
            <div
              className="absolute left-1/2 -translate-x-1/2 transform"
              style={{ bottom: '68px' }}
            >
              <div className="relative">
                {/* 炎の本体 */}
                <div className="relative h-6 w-3 animate-pulse rounded-full bg-gradient-to-t from-[#FFD700] via-[#FF6B47] to-[#FF4757]">
                  <div className="absolute inset-0 animate-bounce rounded-full bg-gradient-to-t from-transparent via-[#FFA726] to-[#FFEB3B] opacity-80"></div>
                  {/* ゆらめき効果 */}
                  <div
                    className="absolute inset-0 animate-spin rounded-full bg-gradient-to-t from-[#FFD700] to-[#FF4757]"
                    style={{ animationDuration: '3s' }}
                  ></div>
                </div>

                {/* 炎の光 */}
                <div className="absolute -inset-2 animate-pulse rounded-full bg-[#FFD700] opacity-30 blur-md"></div>
              </div>
            </div>

            {/* ロウの滴り */}
            <div className="absolute bottom-2 left-1/2 h-3 w-1 -translate-x-1/2 transform animate-pulse rounded-full bg-[#F4C2C1] opacity-70"></div>
          </div>

          {/* メッセージ */}
          <div className="space-y-2">
            <p className="text-lg font-semibold text-[#4FC3E7]">🕯️ {message}</p>
            {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
            <div className="mt-3 flex justify-center space-x-1">
              <div className="h-2 w-2 animate-bounce rounded-full bg-[#F4C2C1]"></div>
              <div className="h-2 w-2 animate-bounce rounded-full bg-[#D9D9FF] delay-100"></div>
              <div className="h-2 w-2 animate-bounce rounded-full bg-[#98FB98] delay-200"></div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

/**
 * シンプルなローディングスピナー（キャンドルテーマ）
 */
export function LoadingSpinner({
  size = 'md',
  className,
  message = '読み込み中...',
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  }

  return (
    <div className={cn('flex items-center justify-center', className)}>
      <div className="text-center">
        {/* キャンドル風スピナー */}
        <div className="relative">
          <div
            className={cn(
              'animate-spin rounded-full border-2 border-[#F4C2C1]/30 border-t-[#4FC3E7]',
              sizeClasses[size]
            )}
          />
          {/* 中央のキャンドル */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-pulse text-xs">🕯️</div>
          </div>
        </div>
        {message && <p className="mt-2 text-sm text-gray-600">{message}</p>}
      </div>
    </div>
  )
}

/**
 * フルスクリーンローディング（キャンドルテーマ）
 */
export function FullScreenLoading({ message }: { message?: string }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="text-center">
        <div className="relative mb-4">
          <div className="animate-pulse text-4xl">🕯️</div>
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 transform">
            <div className="h-4 w-1 animate-bounce rounded-full bg-gradient-to-t from-orange-400 to-yellow-300"></div>
          </div>
        </div>
        <LoadingSpinner size="lg" message={message} />
      </div>
    </div>
  )
}

/**
 * ボタン内ローディング（キャンドルテーマ対応）
 */
export function ButtonLoading({ className }: ButtonLoadingProps = {}) {
  return (
    <div
      className={cn(
        'h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white',
        className
      )}
    />
  )
}
