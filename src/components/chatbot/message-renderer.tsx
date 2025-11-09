/**
 * メッセージレンダリング専用コンポーネント
 * Single Responsibility Principleに準拠
 */

import Link from 'next/link'

import { ChatMessage, ChatOption } from './chatbot-data'

interface MessageRendererProps {
  message: ChatMessage
  isLatest?: boolean // 将来の拡張用に保持
  onOptionClick: (option: ChatOption) => void
  onLinkClick: () => void
}

interface MessageContentProps {
  message: ChatMessage
  onOptionClick: (option: ChatOption) => void
  onLinkClick: () => void
}

interface MessageOptionsProps {
  options: ChatOption[]
  onOptionClick: (option: ChatOption) => void
}

interface MessageLinkProps {
  link: NonNullable<ChatMessage['link']>
  onLinkClick: () => void
}

/**
 * メッセージオプションボタン群
 */
function MessageOptions({ options, onOptionClick }: MessageOptionsProps) {
  return (
    <div className="mt-3 space-y-2">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => onOptionClick(option)}
          className="block w-full rounded-md bg-white/20 px-3 py-2 text-left text-xs transition-colors duration-200 hover:bg-white/30"
        >
          {option.text}
        </button>
      ))}
    </div>
  )
}

/**
 * メッセージリンクボタン
 */
function MessageLink({ link, onLinkClick }: MessageLinkProps) {
  const linkClass =
    'inline-block rounded-md bg-white/20 px-3 py-2 text-xs transition-colors duration-200 hover:bg-white/30'

  return (
    <div className="mt-3">
      {link.external ? (
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          {link.text} 🔗
        </a>
      ) : (
        <Link href={link.url} className={linkClass} onClick={onLinkClick}>
          {link.text}
        </Link>
      )}
    </div>
  )
}

/**
 * メッセージコンテンツ
 */
function MessageContent({
  message,
  onOptionClick,
  onLinkClick,
}: MessageContentProps) {
  return (
    <div
      className={`max-w-xs rounded-lg px-4 py-2 lg:max-w-md ${
        message.isBot
          ? 'bg-miyako-blue text-white'
          : 'bg-soft-pink text-gray-800'
      }`}
    >
      <p className="text-sm whitespace-pre-line">{message.text}</p>

      {/* オプションボタン */}
      {message.options && (
        <MessageOptions
          options={message.options}
          onOptionClick={onOptionClick}
        />
      )}

      {/* リンクボタン */}
      {message.link && (
        <MessageLink link={message.link} onLinkClick={onLinkClick} />
      )}

      {/* タイムスタンプ */}
      <p className="mt-2 text-xs opacity-70">
        {message.timestamp.toLocaleTimeString('ja-JP', {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </p>
    </div>
  )
}

/**
 * メッセージレンダラー
 * 複雑な条件分岐をコンポーネントレベルで分離
 */
export function MessageRenderer({
  message,
  onOptionClick,
  onLinkClick,
}: MessageRendererProps) {
  return (
    <div
      className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} mb-4`}
    >
      <MessageContent
        message={message}
        onOptionClick={onOptionClick}
        onLinkClick={onLinkClick}
      />
    </div>
  )
}
