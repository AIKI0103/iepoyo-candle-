'use client'

import { forwardRef } from 'react'

import { cn } from '@/lib/utils'
import { AnimationWrapper } from './animation-wrapper'

export interface CardProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
  id?: string
  // Size variants
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  // Visual variants
  variant?: 'default' | 'gradient' | 'glass' | 'border' | 'shadow'
  // Padding variants
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  // Animation props (lightweight by default)
  animated?: boolean
  hoverEffect?: boolean
  delay?: number
  // Force complex animation when needed
  useComplexAnimation?: boolean
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      className = '',
      style = {},
      onClick,
      id,
      size = 'md',
      variant = 'default',
      padding = 'md',
      animated = false,
      hoverEffect = false,
      delay = 0,
      useComplexAnimation = false,
    },
    ref
  ) => {
    // Size classes for border radius and overall sizing
    const sizeClasses = {
      xs: 'rounded-lg',
      sm: 'rounded-xl',
      md: 'rounded-2xl',
      lg: 'rounded-3xl',
      xl: 'rounded-3xl',
    }

    // Padding classes
    const paddingClasses = {
      none: 'p-0',
      sm: 'p-3',
      md: 'p-6',
      lg: 'p-8',
      xl: 'p-12',
    }

    // Variant classes (宮古島キャンドルテーマ対応)
    const variantClasses = {
      default: 'bg-white shadow-md border border-gray-100',
      gradient:
        'bg-gradient-to-br from-[#FFF7FA] to-[#FCE6F6] shadow-lg border-2 border-[#F4C2C1]/30',
      glass: 'bg-white/80 backdrop-blur-sm shadow-lg border border-white/20',
      border: 'bg-white border-2 border-[#4FC3E7] shadow-sm',
      shadow: 'bg-white shadow-xl border border-gray-50',
    }

    const baseStyles = {
      ...style,
    }

    const baseClassName = cn(
      'transition-all duration-300',
      sizeClasses[size],
      variantClasses[variant],
      paddingClasses[padding],
      // Enhanced hover effects with CSS
      hoverEffect && [
        'hover:shadow-xl hover:-translate-y-1 cursor-pointer',
        // Variant-specific hover effects
        variant === 'gradient' &&
          'hover:from-[#FFF7FA]/95 hover:to-[#FCE6F6]/95',
        variant === 'glass' && 'hover:bg-white/90',
        variant === 'border' &&
          'hover:border-[#4FC3E7]/80 hover:shadow-[#4FC3E7]/20',
      ],
      className
    )

    if (animated) {
      return (
        <AnimationWrapper
          ref={ref}
          id={id}
          className={baseClassName}
          style={baseStyles}
          onClick={onClick}
          fadeIn
          slideUp
          hoverLift={hoverEffect}
          delay={delay}
          useFramerMotion={useComplexAnimation}
          // Complex animation fallback props
          initial={useComplexAnimation ? { opacity: 0, y: 20 } : undefined}
          whileInView={useComplexAnimation ? { opacity: 1, y: 0 } : undefined}
          viewport={
            useComplexAnimation ? { once: true, margin: '-50px' } : undefined
          }
          transition={
            useComplexAnimation
              ? {
                  duration: 0.6,
                  delay,
                  ease: 'easeOut',
                }
              : undefined
          }
          whileHover={
            useComplexAnimation && hoverEffect
              ? {
                  y: -4,
                  boxShadow:
                    '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
                }
              : undefined
          }
        >
          {children}
        </AnimationWrapper>
      )
    }

    return (
      <div
        ref={ref}
        id={id}
        className={baseClassName}
        style={baseStyles}
        onClick={onClick}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'
