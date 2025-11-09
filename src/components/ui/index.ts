/**
 * 統一されたUIコンポーネントライブラリ
 * 宮古島キャンドルサイトデザインシステム対応
 *
 * 重複コード削除・統一されたコンポーネントシステム
 */

// 基本UIコンポーネント
export { Card } from './card'
export { Button } from './button'
export { Input } from './input'
export { Badge } from './badge'
export { Separator } from './separator'

// 統合されたコンポーネント
export { GradientButton } from './gradient-button'

export { SectionHeading } from './section-heading'

export {
  CandleLoading,
  LoadingSpinner,
  FullScreenLoading,
  ButtonLoading,
} from './candle-loading'

// アニメーション
export { AnimationWrapper } from './animation-wrapper'

// 型定義のエクスポート
export type { CardProps } from './card'
export type { GradientButtonProps } from './gradient-button'
export type { SectionHeadingProps } from './section-heading'
export type {
  CandleLoadingProps,
  LoadingSpinnerProps,
  ButtonLoadingProps,
} from './candle-loading'
