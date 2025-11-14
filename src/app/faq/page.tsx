import { Card } from '@/components/ui/card'
import { FAQClient } from '@/components/faq/faq-client'
import { FAQContactButtons } from '@/components/faq/faq-contact-buttons'
import { MainLayout } from '@/components/layout/main-layout'

// ISR設定: 1時間ごとに再生成
export const revalidate = 3600

interface FAQItem {
  id: number
  question: string
  answer: string
  category: 'reservation' | 'experience' | 'access' | 'payment' | 'other'
}

const faqData: FAQItem[] = [
  {
    id: 1,
    category: 'reservation',
    question: '予約はいつから可能ですか？',
    answer:
      '予約は翌日以降であればいつでもお取りいただけます。お早めのご予約をお待ちしております！',
  },
  {
    id: 2,
    category: 'reservation',
    question: '予約のキャンセルはできますか？',
    answer:
      'キャンセルの場合は公式LINE、もしくはreservation@iepoyo.comまでお問い合わせください。お早めにご連絡いただけますと幸いです。',
  },
  {
    id: 3,
    category: 'reservation',
    question: '当日の予約は可能ですか？',
    answer:
      '申し訳ございませんが、当日の予約は承っておりません。前日までにご予約をお取りください。',
  },
  {
    id: 4,
    category: 'experience',
    question: '体験時間はどのくらいですか？',
    answer:
      'キャンドル作り体験は約90分です。ゆっくりと楽しみながらオリジナルキャンドルをお作りいただけます。',
  },
  {
    id: 5,
    category: 'experience',
    question: '何歳から体験できますか？',
    answer:
      '小学生以上のお子様から体験いただけます。中学生以下のお子様は保護者の同伴をお願いいたします。',
  },
  {
    id: 6,
    category: 'experience',
    question: '作ったキャンドルはいつ持ち帰れますか？',
    answer:
      '体験当日にお持ち帰りいただけます。完成したキャンドルは約30分で固まりますので、体験終了後すぐにお渡しできます。',
  },
  {
    id: 7,
    category: 'experience',
    question: '持参するものはありますか？',
    answer:
      'エプロンは無料で貸し出しておりますので、手ぶらでお越しください。汚れても良い服装でのご参加をおすすめします。',
  },
  {
    id: 8,
    category: 'payment',
    question: '支払い方法を教えてください',
    answer:
      'お支払いは当日現地にて現金でお願いいたします。クレジットカードやQRコード決済には対応しておりません。',
  },
  {
    id: 9,
    category: 'payment',
    question: '料金に含まれるものは何ですか？',
    answer:
      '体験料金には材料費、道具使用料、エプロン貸出料が全て含まれています。追加料金は選択されたオプション分のみです。',
  },
  {
    id: 10,
    category: 'access',
    question: '駐車場はありますか？',
    answer:
      '専用駐車場をご用意しております。詳細な場所はアクセスページをご確認ください。',
  },
  {
    id: 11,
    category: 'access',
    question: '雨の日でも体験できますか？',
    answer:
      'はい、屋内での体験となりますので雨天でも安心してお楽しみいただけます。宮古島の雨の日の過ごし方としてもおすすめです。',
  },
  {
    id: 12,
    category: 'other',
    question: 'プレゼント用のラッピングはできますか？',
    answer:
      '申し訳ございませんが、現在ラッピングサービスは行っておりません。ご希望の場合はお客様でご準備をお願いいたします。',
  },
]

export default function FAQPage() {
  return (
    <MainLayout>
      <div

      >
        <div
          style={{
            margin: '0 auto',
            maxWidth: '1024px',
            padding: '0 1.5rem',
          }}
        >
          <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <h1
              className="mb-3 text-4xl font-bold md:text-5xl lg:text-6xl"
              style={{ color: 'oklch(.753 .124 212.53)' }}
            >
              よくある質問
            </h1>
            <p className="text-gray-600">
              iepoyo candleに寄せられるよくあるご質問にお答えします
            </p>
          </div>

          {/* FAQ インタラクティブ部分 */}
          <FAQClient faqData={faqData} />

          {/* お問い合わせセクション */}
          <Card
            style={{
              marginTop: '3rem',
              border: '2px solid #4FC3E7',
              background: 'linear-gradient(to bottom right, #D9D9FF, #98FB98)',
              padding: '2rem',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <h3
                className="mb-4 text-2xl font-extrabold"
                style={{ color: 'oklch(.753 .124 212.53)' }}
              >
                🤔 他にご質問がございますか？
              </h3>
              <p
                style={{
                  marginBottom: '1.5rem',
                  color: '#374151',
                }}
              >
                上記で解決しないご質問やご不明な点がございましたら、
                <br />
                お気軽にお問い合わせください。
              </p>

              <FAQContactButtons />

              <p
                style={{
                  marginTop: '1rem',
                  fontSize: '0.875rem',
                  color: '#6B7280',
                }}
              >
                お返事までに少しお時間をいただく場合がございます。
                <br />
                お急ぎの場合は公式LINEをご利用ください。
              </p>
            </div>
          </Card>
        </div>
      </div>
    </MainLayout>
  )
}
