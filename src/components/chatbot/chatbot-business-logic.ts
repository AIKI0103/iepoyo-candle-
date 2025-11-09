/**
 * チャットボットビジネスロジック
 * 複雑な処理を純粋関数として分離
 */

import { ChatMessage, ChatOption } from './chatbot-data'
import {
  createBotMessage,
  createUserMessage,
  extractMessageIds,
  extractResponseKey,
  matchQuickResponseKeyword,
} from './chatbot-utils'

/**
 * オプションクリック処理結果の型定義
 */
export interface OptionClickResult {
  userMessage: ChatMessage
  botMessage: ChatMessage | null
  allIds: string[]
}

/**
 * オプションクリック処理のビジネスロジック
 * 純粋関数として実装（副作用なし）
 * @param option クリックされたオプション
 * @param currentMessages 現在のメッセージ配列
 * @returns 処理結果
 */
export function processOptionClick(
  option: ChatOption,
  currentMessages: ChatMessage[]
): OptionClickResult {
  // 現在のIDリストを取得
  const existingIds = extractMessageIds(currentMessages)

  // ユーザーメッセージを作成
  const userMessage = createUserMessage(option.text, existingIds)

  // 更新されたIDリスト（ユーザーメッセージ追加後）
  const updatedIds = [...existingIds, userMessage.id]

  // レスポンスキーを安全に抽出
  const responseKey = extractResponseKey(option)

  // ボットメッセージを作成（レスポンスキーが無効な場合はnull）
  const botMessage = responseKey
    ? createBotMessage(responseKey, updatedIds)
    : null

  // 全IDリスト（ボットメッセージ追加後）
  const allIds = botMessage ? [...updatedIds, botMessage.id] : updatedIds

  return {
    userMessage,
    botMessage,
    allIds,
  }
}

/**
 * クイックレスポンス処理結果の型定義
 */
export interface QuickResponseResult {
  option: ChatOption
  result: OptionClickResult
}

/**
 * クイックレスポンス処理のビジネスロジック
 * @param text 入力テキスト
 * @param currentMessages 現在のメッセージ配列
 * @returns 処理結果
 */
export function processQuickResponse(
  text: string,
  currentMessages: ChatMessage[]
): QuickResponseResult {
  // キーワードマッチングによるレスポンスキー決定
  const responseKey = matchQuickResponseKeyword(text)

  // オプションオブジェクトを作成
  const option: ChatOption = {
    id: responseKey,
    text: text,
    response: responseKey,
  }

  // オプションクリック処理を実行
  const result = processOptionClick(option, currentMessages)

  return {
    option,
    result,
  }
}

/**
 * メッセージ配列更新ユーティリティ
 * @param currentMessages 現在のメッセージ配列
 * @param userMessage 追加するユーザーメッセージ
 * @param botMessage 追加するボットメッセージ（optional）
 * @returns 更新されたメッセージ配列
 */
export function updateMessages(
  currentMessages: ChatMessage[],
  userMessage: ChatMessage,
  botMessage?: ChatMessage | null
): ChatMessage[] {
  const newMessages = [...currentMessages, userMessage]

  if (botMessage) {
    newMessages.push(botMessage)
  }

  return newMessages
}

/**
 * メッセージ処理エラーハンドリング
 * @param error エラーオブジェクト
 * @param context エラーコンテキスト
 */
export function handleMessageError(error: unknown, context: string): void {
  const errorMessage = error instanceof Error ? error.message : 'Unknown error'

  if (process.env.NODE_ENV === 'development') {
    console.error(`Chatbot error in ${context}:`, errorMessage)
  }

  // 本番環境では静的なエラー報告
  // 実際のエラー報告サービスに送信する場合はここで実装
}
