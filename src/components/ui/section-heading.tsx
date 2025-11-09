'use client'

import { forwardRef, type ReactNode } from 'react'

import { cn } from '@/lib/utils'

export interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  gradient?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
  icon?: ReactNode
  iconPosition?: 'left' | 'right' | 'top'
  badge?: ReactNode
  className?: string
  titleClassName?: string
  subtitleClassName?: string
}

const SectionHeading = forwardRef<HTMLDivElement, SectionHeadingProps>(
  (
    {
      className,
      title,
      subtitle,
      align = 'center',
      gradient = false,
      size = 'md',
      icon,
      iconPosition = 'left',
      badge,
      titleClassName,
      subtitleClassName,
    },
    ref
  ) => {
    const alignClasses = {
      left: 'text-left items-start',
      center: 'text-center items-center',
      right: 'text-right items-end',
    }

    const titleClasses = gradient ? 'text-miyako-blue' : 'text-gray-900'

    const sizeClasses = {
      sm: 'text-xl md:text-2xl',
      md: 'text-2xl md:text-3xl lg:text-4xl',
      lg: 'text-3xl md:text-4xl lg:text-5xl',
      xl: 'text-4xl md:text-5xl lg:text-6xl',
    }

    const subtitleSizeClasses = {
      sm: 'text-sm md:text-base',
      md: 'text-base md:text-lg',
      lg: 'text-lg md:text-xl',
      xl: 'text-xl md:text-2xl',
    }

    const renderTitleWithIcon = () => {
      const titleElement = (
        <h2
          className={cn(
            'font-bold',
            sizeClasses[size],
            titleClasses,
            titleClassName
          )}
        >
          {title}
        </h2>
      )

      if (!icon) return titleElement

      const iconElement = <span className="inline-flex shrink-0">{icon}</span>

      if (iconPosition === 'top') {
        return (
          <div className="flex flex-col gap-2">
            {iconElement}
            {titleElement}
          </div>
        )
      }

      return (
        <div className="flex items-center gap-3">
          {iconPosition === 'left' && iconElement}
          {titleElement}
          {iconPosition === 'right' && iconElement}
        </div>
      )
    }

    return (
      <div
        ref={ref}
        className={cn(
          'animate-in fade-in slide-in-from-bottom-4 mb-8 flex flex-col gap-4 duration-600',
          alignClasses[align],
          className
        )}
      >
        <div className="flex flex-col gap-2">
          {/* バッジ */}
          {badge && (
            <div className="animate-in fade-in duration-600">{badge}</div>
          )}

          {/* タイトル */}
          <div className="animate-in fade-in duration-600">
            {renderTitleWithIcon()}
          </div>
        </div>

        {/* サブタイトル */}
        {subtitle && (
          <p
            className={cn(
              'animate-in fade-in text-gray-600 duration-600',
              subtitleSizeClasses[size],
              subtitleClassName
            )}
            style={{ animationDelay: '200ms' }}
          >
            {subtitle}
          </p>
        )}
      </div>
    )
  }
)

SectionHeading.displayName = 'SectionHeading'

export { SectionHeading }
