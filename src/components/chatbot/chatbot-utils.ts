/**
 * チャットボット関連ユーティリティ関数
 * ビジネスロジックと純粋関数を分離
 */

import { chatbotDatabase, ChatMessage, ChatOption } from './chatbot-data'

// シンプルなID生成関数
function generateId(prefix: string, existingIds: string[]): string {
  let id: string
  let attempts = 0
  do {
    id = `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    attempts++
  } while (existingIds.includes(id) && attempts < 10)

  if (existingIds.includes(id)) {
    throw new Error('Failed to generate unique ID')
  }

  return id
}

/**
 * 型安全なチャットレスポンス取得
 * @param responseKey レスポンスキー
 * @returns チャットレスポンスまたはnull
 */
export function getChatResponse(responseKey: string) {
  // Fail Fast: 無効なキーの場合は即座にnull返却
  if (!responseKey || typeof responseKey !== 'string') {
    return null
  }

  return chatbotDatabase[responseKey] || null
}

/**
 * ユーザーメッセージ作成
 * @param text メッセージテキスト
 * @param existingIds 既存ID配列（衝突回避）
 * @returns ChatMessage
 */
export function createUserMessage(
  text: string,
  existingIds: string[]
): ChatMessage {
  return {
    id: generateId('user', existingIds),
    text,
    isBot: false,
    timestamp: new Date(),
    type: 'text',
  }
}

/**
 * ボットメッセージ作成
 * @param responseKey レスポンスキー
 * @param existingIds 既存ID配列（衝突回避）
 * @returns ChatMessageまたはnull
 */
export function createBotMessage(
  responseKey: string,
  existingIds: string[]
): ChatMessage | null {
  const responseData = getChatResponse(responseKey)

  if (!responseData) {
    return null
  }

  return {
    id: generateId('bot', existingIds),
    text: responseData.text,
    isBot: true,
    timestamp: new Date(),
    type: responseData.type || 'text',
    options: responseData.options,
    link: responseData.link,
  }
}

/**
 * 安全なオプションレスポンス抽出
 * 型安全性を完全に保証
 * @param option ChatOption
 * @returns string | null
 */
export function extractResponseKey(option: ChatOption): string | null {
  // 型ガードによる厳密な型チェック
  if (typeof option.response === 'string') {
    return option.response
  }

  // ChatResponse型の場合は処理しない（設計上想定外）
  if (typeof option.response === 'object' && option.response !== null) {
    console.warn('ChatResponse type not supported in extractResponseKey')
    return null
  }

  return null
}

/**
 * クイックレスポンス用キーワードマッチング
 * @param text 入力テキスト
 * @returns マッチしたレスポンスキー
 */
export function matchQuickResponseKeyword(text: string): string {
  // Fail Fast: 無効な入力の場合はヘルプを返却
  if (!text || typeof text !== 'string') {
    return 'help'
  }

  const normalizedText = text.toLowerCase().trim()

  // キーワードマッピング（保守性重視）
  const keywordMap: Record<string, string> = {
    体験: 'experience_info',
    料金: 'price_info',
    予約: 'reservation_info',
    雨: 'weather_info',
    アクセス: 'access_info',
    場所: 'access_info',
    時間: 'flow_info',
    流れ: 'flow_info',
  }

  // 完全一致を優先
  if (keywordMap[normalizedText]) {
    return keywordMap[normalizedText]
  }

  // 部分一致検索
  for (const [keyword, responseKey] of Object.entries(keywordMap)) {
    if (normalizedText.includes(keyword)) {
      return responseKey
    }
  }

  return 'help'
}

/**
 * メッセージIDリスト抽出
 * ID衝突回避のために使用
 * @param messages メッセージ配列
 * @returns ID配列
 */
export function extractMessageIds(messages: ChatMessage[]): string[] {
  return messages.map((message) => message.id)
}

/**
 * 最新ボットメッセージ判定
 * @param message 対象メッセージ
 * @param index メッセージインデックス
 * @param messages 全メッセージ配列
 * @returns 最新ボットメッセージかどうか
 */
export function isLatestBotMessage(
  message: ChatMessage,
  index: number,
  messages: ChatMessage[]
): boolean {
  return (
    message.isBot &&
    index === messages.length - 1 &&
    messages[messages.length - 1]?.isBot
  )
}
