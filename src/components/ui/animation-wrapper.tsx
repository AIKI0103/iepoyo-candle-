'use client'

import { forwardRef, lazy, Suspense } from 'react'
import type {
  TargetAndTransition,
  Transition,
  VariantLabels,
} from 'framer-motion'

import { cn } from '@/lib/utils'

// framer-motionを動的インポートして初期バンドルサイズを削減
const MotionDiv = lazy(() =>
  import('framer-motion').then((module) => ({
    default: module.motion.div,
  }))
)

interface AnimationWrapperProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
  id?: string
  // Lightweight CSS animations
  fadeIn?: boolean
  slideUp?: boolean
  hoverScale?: boolean
  hoverLift?: boolean
  delay?: number
  // Complex animations (uses framer-motion)
  useFramerMotion?: boolean
  initial?: TargetAndTransition
  whileInView?: TargetAndTransition | VariantLabels
  whileHover?: TargetAndTransition | VariantLabels
  transition?: Transition
  viewport?: { once?: boolean; margin?: string }
}

export const AnimationWrapper = forwardRef<
  HTMLDivElement,
  AnimationWrapperProps
>(
  (
    {
      children,
      className = '',
      style = {},
      onClick,
      id,
      fadeIn = false,
      slideUp = false,
      hoverScale = false,
      hoverLift = false,
      delay = 0,
      useFramerMotion = false,
      initial,
      whileInView,
      whileHover,
      transition,
      viewport,
    },
    ref
  ) => {
    // CSS-only animations (lightweight)
    if (!useFramerMotion) {
      const animationClasses = cn(
        // Base transitions
        'transition-all duration-500 ease-out',

        // Fade in animation
        fadeIn && 'animate-in fade-in duration-700',

        // Slide up animation
        slideUp && 'animate-in slide-in-from-bottom-4 duration-700',

        // Hover effects
        hoverScale && 'hover:scale-105',
        hoverLift && 'hover:-translate-y-1 hover:shadow-lg',

        className
      )

      const animationStyle = {
        animationDelay: delay ? `${delay * 100}ms` : undefined,
        ...style,
      }

      return (
        <div
          ref={ref}
          id={id}
          className={animationClasses}
          style={animationStyle}
          onClick={onClick}
        >
          {children}
        </div>
      )
    }

    // Complex animations using framer-motion (heavy - use sparingly)
    return (
      <Suspense
        fallback={
          <div
            ref={ref}
            id={id}
            className={cn('transition-all duration-300', className)}
            style={style}
            onClick={onClick}
          >
            {children}
          </div>
        }
      >
        <MotionDiv
          ref={ref}
          id={id}
          className={className}
          style={style}
          onClick={onClick}
          initial={initial}
          whileInView={whileInView}
          whileHover={whileHover}
          transition={transition}
          viewport={viewport}
        >
          {children}
        </MotionDiv>
      </Suspense>
    )
  }
)

AnimationWrapper.displayName = 'AnimationWrapper'
