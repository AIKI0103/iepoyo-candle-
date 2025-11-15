'use client'

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'

import { cn } from '@/lib/utils'

export interface GradientButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning'| 'pink'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  children: ReactNode
  className?: string
  loading?: boolean
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
}

const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      children,
      loading = false,
      icon,
      iconPosition = 'left',
      fullWidth = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading

    const baseClasses =
      'group relative inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:scale-105 active:scale-95 overflow-hidden'

    const variantClasses = {
      primary:
        'bg-miyako-blue text-white shadow-lg hover:shadow-xl hover:bg-miyako-blue/90',
      pink:
        'bg-soft-pink text-white shadow-lg hover:shadow-xl hover:bg-soft-pink/90',
      secondary:
        'bg-pale-lavender text-gray-800 shadow-md hover:shadow-lg hover:bg-pale-lavender/90',
      accent:
        'bg-gold-highlight text-gray-900 shadow-md hover:shadow-lg hover:bg-gold-highlight/90',
      success:
        'bg-green-400 text-white shadow-md hover:shadow-lg hover:bg-green-500',
      warning:
        'bg-yellow-400 text-white shadow-md hover:shadow-lg hover:bg-yellow-500',
    }

    const sizeClasses = {
      xs: 'h-8 px-3 text-xs gap-1.5',
      sm: 'h-9 px-4 text-sm gap-2',
      md: 'h-12 px-6 text-base gap-2.5',
      lg: 'h-14 px-8 text-lg gap-3',
      xl: 'h-16 px-10 text-xl gap-3.5',
    }

    return (
      <button
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          fullWidth && 'w-full',
          className
        )}
        disabled={isDisabled}
        {...props}
      >
        {/* ローディングオーバーレイ */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/10">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
          </div>
        )}

        {/* アイコンとテキスト */}
        <div className="gap-inherit flex items-center">
          {icon && iconPosition === 'left' && !loading && (
            <span className="shrink-0">{icon}</span>
          )}

          <span className={loading ? 'opacity-50' : ''}>{children}</span>

          {icon && iconPosition === 'right' && !loading && (
            <span className="shrink-0">{icon}</span>
          )}
        </div>

        {/* ホバー効果のオーバーレイ */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 transition-transform duration-500 group-hover:translate-x-full" />
      </button>
    )
  }
)

GradientButton.displayName = 'GradientButton'

export { GradientButton }
