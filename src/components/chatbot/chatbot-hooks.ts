/**
 * チャットボット専用React Hooks
 * Single Responsibility Principleに準拠
 */

import { useCallback, useEffect, useRef } from 'react'

/**
 * スクロール制御専用Hook
 * DRY原則に従い、requestAnimationFrameパターンを統一
 */
export function useScrollControl() {
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const latestBotMessageRef = useRef<HTMLDivElement>(null)

  // 確実なスクロール実行（KISS原則）
  const safeAnimationFrame = useCallback((callback: () => void) => {
    requestAnimationFrame(() => {
      // 二重保護: コンポーネントがアンマウントされていないかチェック
      if (messagesContainerRef.current) {
        callback()
      }
    })
  }, [])

  // 最下部へのスクロール
  const scrollToBottom = useCallback(() => {
    const container = messagesContainerRef.current
    if (!container) return

    safeAnimationFrame(() => {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth',
      })
    })
  }, [safeAnimationFrame])

  // 最新ボットメッセージへのスクロール
  const scrollToLatestBotMessage = useCallback(() => {
    const container = messagesContainerRef.current
    const target = latestBotMessageRef.current

    if (!container || !target) return

    safeAnimationFrame(() => {
      const containerRect = container.getBoundingClientRect()
      const targetRect = target.getBoundingClientRect()
      const targetTop = targetRect.top - containerRect.top + container.scrollTop

      container.scrollTo({
        top: Math.max(0, targetTop),
        behavior: 'smooth',
      })
    })
  }, [safeAnimationFrame])

  return {
    messagesContainerRef,
    latestBotMessageRef,
    scrollToBottom,
    scrollToLatestBotMessage,
  }
}

/**
 * モーダルスクロール制御専用Hook
 * モバイル・PC共通のボディスクロール制御
 */
export function useModalScrollControl(isOpen: boolean) {
  useEffect(() => {
    if (!isOpen) return

    // Fail Fast: 即座にボディスクロールを完全停止
    const scrollY = window.scrollY
    const bodyStyle = document.body.style

    // 即座に適用（レンダリングタイミング問題を回避）
    bodyStyle.position = 'fixed'
    bodyStyle.top = `-${scrollY}px`
    bodyStyle.left = '0'
    bodyStyle.right = '0'
    bodyStyle.width = '100%'
    bodyStyle.height = '100%'
    bodyStyle.overflow = 'hidden'
    bodyStyle.touchAction = 'none' // タッチスクロール完全無効化

    // iOS Safari対策
    document.documentElement.style.overflow = 'hidden'

    return () => {
      // スクロール位置復元（確実な復元）
      bodyStyle.position = ''
      bodyStyle.top = ''
      bodyStyle.left = ''
      bodyStyle.right = ''
      bodyStyle.width = ''
      bodyStyle.height = ''
      bodyStyle.overflow = ''
      bodyStyle.touchAction = ''
      document.documentElement.style.overflow = ''

      // スクロール位置復元（確実に実行）
      requestAnimationFrame(() => {
        window.scrollTo(0, scrollY)
      })
    }
  }, [isOpen])
}

/**
 * タイピングアニメーション制御Hook
 * アニメーション状態を適切に管理
 */
export function useTypingAnimation() {
  const typingTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)

  const startTyping = useCallback(
    (callback: () => void, delay: number = 1000) => {
      // 既存のタイマーをクリア（重複実行防止）
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current)
      }

      typingTimeoutRef.current = setTimeout(callback, delay)
    },
    []
  )

  const stopTyping = useCallback(() => {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
      typingTimeoutRef.current = undefined
    }
  }, [])

  // クリーンアップ
  useEffect(() => {
    return stopTyping
  }, [stopTyping])

  return {
    startTyping,
    stopTyping,
  }
}
