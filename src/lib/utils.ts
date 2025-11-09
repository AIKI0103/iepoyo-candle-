import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Tailwind CSS クラス名結合ユーティリティ
 * パフォーマンス最適化版（条件分岐による早期リターン）
 */
export function cn(...inputs: ClassValue[]) {
  // 引数が1つで文字列の場合は最適化パスを使用
  if (inputs.length === 1 && typeof inputs[0] === 'string') {
    return inputs[0]
  }

  // 複数の引数または複雑な型の場合は通常のマージ処理
  return twMerge(clsx(inputs))
}
