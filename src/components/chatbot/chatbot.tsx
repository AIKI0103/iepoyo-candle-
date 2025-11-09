'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { Card } from '@/components/ui/card'
import {
  handleMessageError,
  processOptionClick,
  processQuickResponse,
  updateMessages,
} from './chatbot-business-logic'
import { ChatMessage, ChatOption, welcomeMessage } from './chatbot-data'
import {
  useModalScrollControl,
  useScrollControl,
  useTypingAnimation,
} from './chatbot-hooks'
import { isLatestBotMessage } from './chatbot-utils'
import { MessageRenderer } from './message-renderer'

/**
 * チャットボットメインコンポーネント
 * SOLID原則・Clean Architectureに完全準拠
 */
export function Chatbot() {
  // === State Management ===
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isTyping, setIsTyping] = useState(false)

  // === Custom Hooks（関心の分離）===
  const {
    messagesContainerRef,
    latestBotMessageRef,
    scrollToBottom,
    scrollToLatestBotMessage,
  } = useScrollControl()

  useModalScrollControl(isOpen)

  const { startTyping, stopTyping } = useTypingAnimation()

  // === Event Handlers（ビジネスロジック分離）===

  /**
   * チャットモーダルを閉じる
   * 単一責任: モーダル状態管理のみ
   */
  const handleCloseChat = () => {
    setIsOpen(false)
    stopTyping() // タイピングアニメーション停止
  }

  /**
   * オプションクリック処理
   * ビジネスロジックは別モジュールに委譲
   */
  const handleOptionClick = async (option: ChatOption) => {
    try {
      // ビジネスロジック実行
      const { userMessage, botMessage } = processOptionClick(option, messages)

      // ユーザーメッセージを即座に追加
      const updatedMessages = updateMessages(messages, userMessage)
      setMessages(updatedMessages)

      // ボットメッセージがある場合の処理
      if (botMessage) {
        setIsTyping(true)

        // タイピングアニメーション（1秒後にボットメッセージ表示）
        startTyping(() => {
          const finalMessages = updateMessages(updatedMessages, botMessage)
          setMessages(finalMessages)
          setIsTyping(false)

          // ボットメッセージ追加後、少し遅れてスクロール調整
          setTimeout(() => {
            scrollToLatestBotMessage()
          }, 100)
        })
      }

      // 即座にスクロール（ユーザーメッセージ表示後）
      setTimeout(scrollToBottom, 50)
    } catch (error) {
      handleMessageError(error, 'handleOptionClick')
      setIsTyping(false)
    }
  }

  /**
   * クイックレスポンス処理
   * キーワードベースの自動応答
   */
  const handleQuickResponse = async (text: string) => {
    try {
      // ビジネスロジック実行
      const { result } = processQuickResponse(text, messages)
      const { userMessage, botMessage } = result

      // ユーザーメッセージを即座に追加
      const updatedMessages = updateMessages(messages, userMessage)
      setMessages(updatedMessages)

      // ボットメッセージがある場合の処理
      if (botMessage) {
        setIsTyping(true)

        startTyping(() => {
          const finalMessages = updateMessages(updatedMessages, botMessage)
          setMessages(finalMessages)
          setIsTyping(false)

          setTimeout(() => {
            scrollToLatestBotMessage()
          }, 100)
        })
      }

      setTimeout(scrollToBottom, 50)
    } catch (error) {
      handleMessageError(error, 'handleQuickResponse')
      setIsTyping(false)
    }
  }

  // === メッセージレンダリング関数 ===

  /**
   * 個別メッセージレンダリング
   * 複雑性を専用コンポーネントに委譲
   */
  const renderMessage = (message: ChatMessage, index: number) => {
    const isLatest = isLatestBotMessage(message, index, messages)

    return (
      <div key={message.id} ref={isLatest ? latestBotMessageRef : undefined}>
        <MessageRenderer
          message={message}
          onOptionClick={handleOptionClick}
          onLinkClick={handleCloseChat}
        />
      </div>
    )
  }

  // === JSX Return（レンダリング責任のみ）===

  // メッセージ変更時の自動スクロール
  // useScrollControlで管理されるため、ここでは利用のみ
  useEffect(() => {
    scrollToBottom()
  }, [messages, scrollToBottom])

  return (
    <>
      {/* チャットボットトグルボタン - SNSアイコンと統一スタイル */}
      <motion.div className="relative">
        {/* パルスアニメーション */}
        <div className="from-miyako-blue to-soft-pink pointer-events-none absolute inset-0 animate-pulse rounded-full bg-gradient-to-r opacity-30" />

        {/* チャットボタン */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="from-miyako-blue to-soft-pink relative z-10 block flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r text-white shadow-lg transition-transform duration-300 hover:scale-110 md:h-14 md:w-14"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-xl">💬</span>
        </motion.button>
      </motion.div>

      {/* チャットウィンドウ */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* オーバーレイ（背景クリックで閉じる） */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9998] bg-black/20 backdrop-blur-sm"
              onClick={handleCloseChat}
            />

            {/* チャットモーダル本体 */}
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-x-4 top-16 bottom-4 z-[9999] md:top-1/2 md:left-1/2 md:h-[600px] md:w-96 md:-translate-x-1/2 md:-translate-y-1/2"
              onClick={(e) => e.stopPropagation()}
            >
              <Card className="flex h-full w-full flex-col overflow-hidden border-0 bg-white/95 shadow-xl backdrop-blur-sm">
                {/* ヘッダー - 固定高さ */}
                <div className="from-miyako-blue to-soft-pink shrink-0 bg-gradient-to-r p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                        <span className="text-sm">🕯️</span>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold">iepoyo candle</h3>
                        <p className="text-xs opacity-90">
                          お気軽にお聞きください！
                        </p>
                      </div>
                    </div>

                    {/* 閉じるボタン */}
                    <button
                      onClick={handleCloseChat}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-colors duration-200 hover:bg-white/30"
                      aria-label="チャットを閉じる"
                    >
                      <svg
                        className="h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* メッセージエリア - 確実にスクロール可能に設定 */}
                <div
                  ref={messagesContainerRef}
                  className="min-h-0 flex-1 space-y-2 overflow-y-auto overscroll-contain p-4"
                  style={{
                    // 確実なスクロール制御（iOS Safari対策）
                    WebkitOverflowScrolling: 'touch',
                    touchAction: 'pan-y',
                    overscrollBehavior: 'contain',
                    scrollbarWidth: 'thin',
                  }}
                >
                  {/* 初期メッセージ */}
                  {messages.length === 0 && (
                    <div className="space-y-4">
                      <div className="mb-4 flex justify-start">
                        <div className="bg-miyako-blue max-w-xs rounded-lg px-4 py-2 text-white lg:max-w-md">
                          <p className="text-sm whitespace-pre-line">
                            {welcomeMessage.text}
                          </p>
                        </div>
                      </div>

                      {/* 質問ボタンを事前表示 */}
                      <div className="space-y-2">
                        <p className="mb-3 text-center text-sm text-gray-600">
                          よくあるご質問はこちら👇
                        </p>
                        {welcomeMessage.options?.map((option) => (
                          <button
                            key={option.id}
                            onClick={() => handleOptionClick(option)}
                            className="from-miyako-blue/10 to-soft-pink/10 hover:from-miyako-blue/20 hover:to-soft-pink/20 border-miyako-blue/20 block w-full rounded-lg border bg-gradient-to-r px-4 py-3 text-left text-sm font-medium text-gray-700 transition-all duration-200"
                          >
                            {option.text}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {messages.map(renderMessage)}

                  {/* タイピングインジケーター */}
                  {isTyping && (
                    <div className="mb-4 flex justify-start">
                      <div className="bg-miyako-blue max-w-xs rounded-lg px-4 py-2 text-white">
                        <div className="flex space-x-1">
                          <div
                            className="h-2 w-2 animate-bounce rounded-full bg-white"
                            style={{ animationDelay: '0ms' }}
                          ></div>
                          <div
                            className="h-2 w-2 animate-bounce rounded-full bg-white"
                            style={{ animationDelay: '150ms' }}
                          ></div>
                          <div
                            className="h-2 w-2 animate-bounce rounded-full bg-white"
                            style={{ animationDelay: '300ms' }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* スクロール制御はuseScrollControlで管理 */}
                </div>

                {/* クイック返答 - 固定高さ */}
                <div className="shrink-0 border-t border-gray-200 p-3">
                  <div className="flex flex-wrap gap-2">
                    {['体験について', '料金', '予約方法', '雨の日OK？'].map(
                      (text) => (
                        <button
                          key={text}
                          onClick={() => handleQuickResponse(text)}
                          className="rounded-full bg-gray-100 px-3 py-1 text-xs transition-colors duration-200 hover:bg-gray-200"
                        >
                          {text}
                        </button>
                      )
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
