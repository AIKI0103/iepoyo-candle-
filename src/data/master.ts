/**
 * マスタデータ管理ファイル
 * 全体で使用される共通データをここで一元管理します
 */

// ==================== 体験メニュー ====================

export interface MenuOption {
  id: string
  name: string
  price: number
  description: string
  features: string[]
  popularity: number
  image: string
  badge?: string
}

export interface AdditionalOption {
  id: string
  name: string
  price: number
  description: string
  icon: string
  detailDescription?: string
}

/**
 * 体験メニューマスタデータ
 */
export const EXPERIENCE_MENUS: MenuOption[] = [
  {
    id: 'cylinder',
    name: '円柱キャンドル',
    price: 4000,
    description:
      '色とりどりのワックスを重ねて美しいマーブル模様を作ります。初心者の方にもおすすめです。',
    features: ['カラフル', 'Instagram映え', '手作り感'],
    popularity: 85,
    image:
      'https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/c9757b37-882f-4c32-5e36-58cc3a7fd300/square500',
    badge: '人気No.1',
  },
  {
    id: 'shell',
    name: '貝殻キャンドル',
    price: 3000,
    description:
      '宮古島の美しい海をイメージしたシェルモチーフの特別なキャンドル。南国の思い出を形に残しませんか？',
    features: ['宮古島限定', 'シェルモチーフ', '記念品向け'],
    popularity: 92,
    image:
      'https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/23aea446-aa19-4e5a-96e7-25c40e991300/square500',
    badge: 'ベストセラー',
  },
  {
    id: 'sphere',
    name: '球体キャンドル',
    price: 3500,
    description:
      'ころんと可愛い球体型のキャンドル。宮古島の海や空をイメージしたグラデーションが人気です。',
    features: ['球体デザイン', 'グラデーション', 'インテリア向け'],
    popularity: 88,
    image:
      'https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/ae9e5e34-1a81-4b5d-0c4c-2c55c8a87000/square500',
    badge: 'Instagram人気',
  },
  {
    id: 'sphere-big',
    name: '球体キャンドル(Big)',
    price: 5000,
    description:
      '特大サイズの球体キャンドル。じっくり時間をかけて自分だけの世界観を表現できます。',
    features: ['大サイズ', '特別体験', '世界観表現'],
    popularity: 76,
    image:
      'https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/c7c04e12-24ea-4c22-457d-5f5e7fb01b00/square500',
    badge: '限定メニュー',
  },
]

/**
 * 追加オプションマスタデータ
 */
export const ADDITIONAL_OPTIONS: AdditionalOption[] = [
  {
    id: 'gold-leaf',
    name: '金箔',
    price: 500,
    description: '高級感あふれる金箔で特別な輝きを',
    icon: '🌟',
    detailDescription:
      'キャンドルに贅沢な金箔をあしらい、特別な一品に。記念日やギフトにもおすすめです',
  },
  {
    id: 'glitter',
    name: 'ラメ',
    price: 500,
    description: 'カラフルなラメでキラキラデコレーション',
    icon: '✨',
    detailDescription:
      'シルバー、レインボー、パステルカラーなど多彩なラメで、あなただけのキラキラキャンドルに',
  },
  {
    id: 'essential-oil',
    name: 'エッセンシャルオイル',
    price: 500,
    description: 'お好みの香りをプラス',
    icon: '🌸',
    detailDescription:
      'ラベンダー、ローズ、オレンジなど人気の香りをセレクト。リラックス効果も期待できます',
  },
]

// ==================== ビジネス情報 ====================

export interface BusinessInfo {
  name: string
  address: string
  postalCode: string
  phone?: string
  email: string
  reservationEmail: string
  adminEmail: string
  hours: {
    open: string
    close: string
    lastEntry: string
  }
  holidays?: string[]
  location: {
    lat: number
    lng: number
  }
  // SEO・構造化データ用拡張情報
  seo: {
    description: string
    region: string
    locality: string
    streetAddress: string
    businessHours: {
      dayOfWeek: string[]
      opens: string
      closes: string
    }
    paymentMethods: string[]
    priceRange: string
    serviceArea: string
  }
}

/**
 * ビジネス情報マスタデータ
 */
export const BUSINESS_INFO: BusinessInfo = {
  name: 'iepoyo candle',
  address: '沖縄県宮古島市平良荷川取206-3',
  postalCode: '906-0008',
  phone: '+81-90-1234-5678', // 実際の電話番号に要変更
  email: 'candle@iepoyo.com',
  reservationEmail: 'reservation@iepoyo.com',
  adminEmail: 'candle@iepoyo.com',
  hours: {
    open: '10:00',
    close: '18:00',
    lastEntry: '16:30',
  },
  location: {
    lat: 24.795652,
    lng: 125.281194,
  },
  // SEO・構造化データ用拡張情報
  seo: {
    description: '宮古島キャンドル手作り体験工房',
    region: '沖縄県',
    locality: '宮古島市',
    streetAddress: '平良荷川取206-3',
    businessHours: {
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '10:00',
      closes: '18:00',
    },
    paymentMethods: ['Cash', 'Credit Card'],
    priceRange: '¥¥',
    serviceArea: '宮古島市',
  },
}

// ==================== ソーシャルメディア ====================

export interface SocialMedia {
  platform: 'instagram' | 'line' | 'twitter' | 'facebook'
  url: string
  handle?: string
}

/**
 * ソーシャルメディアマスタデータ
 */
export const SOCIAL_MEDIA: SocialMedia[] = [
  {
    platform: 'instagram',
    url: 'https://www.instagram.com/iepoyo.miyako/',
    handle: '@iepoyo.miyako',
  },
  {
    platform: 'line',
    url: 'https://lin.ee/PhCo4lv',
    handle: '@iepoyo_candle',
  },
]

// ==================== その他の設定 ====================

/**
 * 予約関連の設定
 */
export const RESERVATION_CONFIG = {
  maxParticipants: 8,
  minParticipants: 1,
  experienceDuration: 90, // 分
  advanceBookingDays: 30, // 何日先まで予約可能か
  minBookingHours: 24, // 最低何時間前に予約が必要か
}

/**
 * Google関連の設定
 */
export const GOOGLE_CONFIG = {
  mapUrl: 'https://maps.app.goo.gl/WcGx1VcsxKFMzXb38',
  reviewsUrl: 'https://g.page/r/CVj7NUGhcTKnEBM/review',
  businessProfileUrl: 'https://g.page/r/CVj7NUGhcTKnEBM',
}

// ==================== ヘルパー関数 ====================

/**
 * メニューIDから情報を取得
 */
export const getMenuById = (id: string): MenuOption | undefined => {
  return EXPERIENCE_MENUS.find((menu) => menu.id === id)
}

/**
 * オプションIDから情報を取得
 */
export const getOptionById = (id: string): AdditionalOption | undefined => {
  return ADDITIONAL_OPTIONS.find((option) => option.id === id)
}

/**
 * 価格をフォーマット（例: 2500 → "¥2,500"）
 */
export const formatPrice = (price: number): string => {
  return `¥${price.toLocaleString()}`
}

/**
 * 合計金額を計算
 */
export const calculateTotalPrice = (
  menuId: string,
  optionIds: string[] = []
): number => {
  const menu = getMenuById(menuId)
  if (!menu) return 0

  const optionsPrice = optionIds.reduce((total, optionId) => {
    const option = getOptionById(optionId)
    return total + (option?.price || 0)
  }, 0)

  return menu.price + optionsPrice
}
