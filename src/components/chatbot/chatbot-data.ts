import {
  ADDITIONAL_OPTIONS,
  EXPERIENCE_MENUS,
  formatPrice,
} from '@/data/master'

export interface ChatMessage {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
  type?: 'text' | 'options' | 'link'
  options?: ChatOption[]
  link?: {
    url: string
    text: string
    external?: boolean
  }
}

export interface ChatOption {
  id: string
  text: string
  response: string | ChatResponse
}

export interface ChatResponse {
  text: string
  type?: 'text' | 'options' | 'link'
  options?: ChatOption[]
  link?: {
    url: string
    text: string
    external?: boolean
  }
}

export const chatbotDatabase: Record<string, ChatResponse> = {
  greeting: {
    text: 'こんにちは！iepoyo candleへようこそ😊 どんなことをお聞きになりたいですか？',
    type: 'options',
    options: [
      {
        id: 'experience_info',
        text: '体験について知りたい',
        response: 'experience_info',
      },
      {
        id: 'price_info',
        text: '料金を教えて',
        response: 'price_info',
      },
      {
        id: 'access_info',
        text: 'アクセス方法',
        response: 'access_info',
      },
      {
        id: 'reservation_info',
        text: '予約について',
        response: 'reservation_info',
      },
      {
        id: 'weather_info',
        text: '雨の日でも大丈夫？',
        response: 'weather_info',
      },
      {
        id: 'flow_info',
        text: '当日の流れを知りたい',
        response: 'flow_info',
      },
    ],
  },

  experience_info: {
    text: 'キャンドル作り体験について詳しくご説明しますね😊\n\n🕯️ **体験内容**\n・所要時間：約90分\n・対象年齢：6歳以上\n・定員：1〜5名\n・当日お持ち帰りOK\n\n✨ 初心者の方でも安心してお楽しみいただけるよう、スタッフがしっかりサポートします！',
    type: 'options',
    options: [
      {
        id: 'candle_types',
        text: 'どんなキャンドルが作れる？',
        response: 'candle_types',
      },
      {
        id: 'options_info',
        text: 'オプションはある？',
        response: 'options_info',
      },
      {
        id: 'reservation_link',
        text: '予約したい',
        response: 'reservation_link',
      },
      {
        id: 'back_to_menu',
        text: 'メニューに戻る',
        response: 'greeting',
      },
    ],
  },

  candle_types: {
    text: (() => {
      const menuTexts = EXPERIENCE_MENUS.map((menu) => {
        const emoji =
          menu.id === 'marble' ? '🌊' : menu.id === 'shell' ? '🐚' : '⭕'
        return `${emoji} **${menu.name}** - ${formatPrice(menu.price)}\n${menu.description.split('。')[0]}`
      }).join('\n\n')
      return `作れるキャンドルの種類をご紹介します😍\n\n${menuTexts}`
    })(),
    type: 'options',
    options: [
      {
        id: 'options_info',
        text: 'オプションも知りたい',
        response: 'options_info',
      },
      {
        id: 'reservation_link',
        text: '体験を予約する',
        response: 'reservation_link',
      },
      {
        id: 'back_to_menu',
        text: 'メニューに戻る',
        response: 'greeting',
      },
    ],
  },

  options_info: {
    text: (() => {
      const optionTexts = ADDITIONAL_OPTIONS.map((option) => {
        const emoji = option.id === 'glitter' ? '✨' : '🌸'
        return `${emoji} **${option.name}** - +${formatPrice(option.price)}\n${option.description}`
      }).join('\n\n')
      return `オプションで更にかわいくできます💫\n\n${optionTexts}\n\nどちらも人気のオプションです！`
    })(),
    type: 'options',
    options: [
      {
        id: 'reservation_link',
        text: '予約したい',
        response: 'reservation_link',
      },
      {
        id: 'price_info',
        text: '全体の料金を確認',
        response: 'price_info',
      },
      {
        id: 'back_to_menu',
        text: 'メニューに戻る',
        response: 'greeting',
      },
    ],
  },

  price_info: {
    text: (() => {
      const menuPrices = EXPERIENCE_MENUS.map((menu) => {
        const emoji =
          menu.id === 'marble' ? '🌊' : menu.id === 'shell' ? '🐚' : '⭕'
        return `${emoji} ${menu.name}：${formatPrice(menu.price)}`
      }).join('\n')

      const optionPrices = ADDITIONAL_OPTIONS.map((option) => {
        const emoji = option.id === 'glitter' ? '✨' : '🌸'
        return `${emoji} ${option.name}：+${formatPrice(option.price)}`
      }).join('\n')

      return `料金表をご案内します☺️\n\n**基本料金**\n${menuPrices}\n\n**オプション**\n${optionPrices}`
    })(),
    type: 'options',
    options: [
      {
        id: 'reservation_link',
        text: '予約する',
        response: 'reservation_link',
      },
      {
        id: 'experience_info',
        text: '体験詳細を知りたい',
        response: 'experience_info',
      },
      {
        id: 'back_to_menu',
        text: 'メニューに戻る',
        response: 'greeting',
      },
    ],
  },

  access_info: {
    text: 'アクセス情報をご案内します😊\n\n📍 **住所**\n〒906-0008 沖縄県宮古島市平良荷川取206-3\n\n🚗 **お車で**\n・宮古空港から約15分\n・平良市街地から約10分\n・無料駐車場5台完備\n\n🚐 **送迎サービス**\n平良市街地のホテルから無料送迎あり（要事前予約）',
    type: 'options',
    options: [
      {
        id: 'map_link',
        text: '地図を見る',
        response: 'map_link',
      },
      {
        id: 'reservation_info',
        text: '予約について',
        response: 'reservation_info',
      },
      {
        id: 'back_to_menu',
        text: 'メニューに戻る',
        response: 'greeting',
      },
    ],
  },

  map_link: {
    text: '詳しい場所はこちらから確認できます！',
    type: 'link',
    link: {
      url: '/access',
      text: 'アクセス詳細ページを見る',
    },
  },

  reservation_info: {
    text: 'ご予約について詳しくご説明します😉\n\n⏰ **営業時間**\n10:00〜18:00（最終受付16:30）\n\n📅 **予約方法**\n事前予約制となっております\n予約ページからご予約をお願いします\n\n🎯 **所要時間**\n約90分\n\n👥 **定員**\n1〜5名',
    type: 'options',
    options: [
      {
        id: 'reservation_link',
        text: '予約ページで予約する',
        response: 'reservation_link',
      },
      {
        id: 'weather_info',
        text: '雨の日でも大丈夫？',
        response: 'weather_info',
      },
      {
        id: 'back_to_menu',
        text: 'メニューに戻る',
        response: 'greeting',
      },
    ],
  },

  reservation_link: {
    text: '公式LINEから予約が可能です！ https://lin.ee/PhCo4lv',
    type: 'link',
    link: {
      url: '/reservation',
      text: '予約ページを開く',
      external: false,
    },
  },

  weather_info: {
    text: '雨の日でも安心です😌\n\n🏠 **室内体験**\n屋内での体験のため、雨でも台風でも安心してお楽しみいただけます\n\n🌈 **むしろおすすめ**\n雨の日こそ、ゆっくりとキャンドル作りを楽しむ絶好のチャンス！\n\n📸 **インスタ映え**\n天気に関係なく、素敵な写真が撮れます',
    type: 'options',
    options: [
      {
        id: 'reservation_link',
        text: '予約したい',
        response: 'reservation_link',
      },
      {
        id: 'experience_info',
        text: '体験について詳しく',
        response: 'experience_info',
      },
      {
        id: 'back_to_menu',
        text: 'メニューに戻る',
        response: 'greeting',
      },
    ],
  },

  flow_info: {
    text: '当日の流れをご説明します😄\n\n**1️⃣ 受付（5分）**\n店舗に到着後、受付でお名前をお伝えください\n\n**2️⃣ 説明（10分）**\n作り方とキャンドルの種類を説明します\n\n**3️⃣ 制作（60分）**\nお好きなデザインでキャンドル作り\n\n**4️⃣ 仕上げ（10分）**\nスタッフが最終仕上げをお手伝い\n\n**5️⃣ ラッピング（5分）**\nギフトボックスに入れてお渡し\n\n📸 制作中の写真撮影もOK！',
    type: 'options',
    options: [
      {
        id: 'reservation_link',
        text: '予約したい',
        response: 'reservation_link',
      },
      {
        id: 'access_info',
        text: '場所を確認',
        response: 'access_info',
      },
      {
        id: 'back_to_menu',
        text: 'メニューに戻る',
        response: 'greeting',
      },
    ],
  },

  help: {
    text: '他にもお聞きになりたいことがありましたら、お気軽にお声がけください！\n\n💡 よくあるご質問も準備しておりますので、ぜひご活用ください。',
    type: 'options',
    options: [
      {
        id: 'faq',
        text: 'よくある質問を見る',
        response: 'faq',
      },
      {
        id: 'contact',
        text: '直接お問い合わせ',
        response: 'contact',
      },
      {
        id: 'back_to_menu',
        text: '最初に戻る',
        response: 'greeting',
      },
    ],
  },

  faq: {
    text: 'よくあるご質問をまとめました❓\n\n**Q: 初心者でも大丈夫？**\nA: はい！スタッフがしっかりサポートします\n\n**Q: 体験時間は？**\nA: 約90分です\n\n**Q: 何歳から体験できる？**\nA: 小学生以上から体験いただけます\n\n**Q: 作ったキャンドルはいつ持ち帰れる？**\nA: 体験当日にお持ち帰りいただけます\n\n**Q: 雨の日でも大丈夫？**\nA: はい、屋内体験なので雨天でも安心です\n\n**Q: 予約のキャンセルはできる？**\nA: キャンセルの場合は予約ページ、もしくはreservation@iepoyo.comまでお問い合わせください',
    type: 'options',
    options: [
      {
        id: 'reservation_link',
        text: '予約する',
        response: 'reservation_link',
      },
      {
        id: 'faq_page',
        text: '詳しいFAQを見る',
        response: 'faq_page',
      },
      {
        id: 'back_to_menu',
        text: 'メニューに戻る',
        response: 'greeting',
      },
    ],
  },

  contact: {
    text: 'お問い合わせ方法について💕\n\n私たちとの連絡は、LINEやInstagramからお気軽にどうぞ😊\n**予約ページ**からのご予約も承っております。\n\nお待ちしております✨',
    type: 'options',
    options: [
      {
        id: 'reservation_link',
        text: '予約ページで問い合わせ',
        response: 'reservation_link',
      },
      {
        id: 'back_to_menu',
        text: 'メニューに戻る',
        response: 'greeting',
      },
    ],
  },

  faq_page: {
    text: '詳しいよくある質問ページで、より多くの質問にお答えしています！',
    type: 'link',
    link: {
      url: '/faq',
      text: 'よくある質問ページを見る',
    },
  },
}

export const quickResponses = [
  '体験について',
  '料金を知りたい',
  '予約方法',
  '雨の日OK？',
  'アクセス',
]

export const welcomeMessage: ChatMessage = {
  id: 'welcome',
  text: 'こんにちは！iepoyo candleへようこそ😊 どんなことをお聞きになりたいですか？',
  isBot: true,
  timestamp: new Date(),
  type: 'options',
  options: [
    {
      id: 'experience_info',
      text: '体験について知りたい',
      response: 'experience_info',
    },
    {
      id: 'price_info',
      text: '料金を教えて',
      response: 'price_info',
    },
    {
      id: 'access_info',
      text: 'アクセス方法',
      response: 'access_info',
    },
    {
      id: 'reservation_info',
      text: '予約について',
      response: 'reservation_info',
    },
    {
      id: 'weather_info',
      text: '雨の日でも大丈夫？',
      response: 'weather_info',
    },
  ],
}
