'use client'

import { useState } from 'react'

import { Card } from '@/components/ui/card'

interface FAQItem {
  id: number
  question: string
  answer: string
  category: 'reservation' | 'experience' | 'access' | 'payment' | 'other'
}

const categories = [
  { key: 'all', label: 'すべて', icon: '📝' },
  { key: 'reservation', label: '予約について', icon: '📅' },
  { key: 'experience', label: '体験について', icon: '🕯️' },
  { key: 'payment', label: 'お支払いについて', icon: '💰' },
  { key: 'access', label: 'アクセスについて', icon: '🚗' },
  { key: 'other', label: 'その他', icon: '❓' },
]

interface FAQClientProps {
  faqData: FAQItem[]
}

export function FAQClient({ faqData }: FAQClientProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [openItems, setOpenItems] = useState<number[]>([])

  const filteredFAQs =
    activeCategory === 'all'
      ? faqData
      : faqData.filter((item) => item.category === activeCategory)

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  return (
    <>
      {/* カテゴリータブ */}
      <div style={{ marginBottom: '2rem' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.5rem',
          }}
        >
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              style={{
                borderRadius: '9999px',
                padding: '0.5rem 1rem',
                fontSize: '0.875rem',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                border: 'none',
                cursor: 'pointer',
                ...(activeCategory === category.key
                  ? {
                      background: 'linear-gradient(to right, #4FC3E7, #F4C2C1)',
                      color: 'white',
                      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                    }
                  : {
                      background: 'rgba(255, 255, 255, 0.8)',
                      color: '#374151',
                    }),
              }}
              onMouseOver={(e) => {
                if (activeCategory !== category.key) {
                  e.currentTarget.style.background = 'white'
                  e.currentTarget.style.transform = 'scale(1.05)'
                }
              }}
              onMouseOut={(e) => {
                if (activeCategory !== category.key) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)'
                  e.currentTarget.style.transform = 'scale(1)'
                }
              }}
            >
              {category.icon} {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ一覧 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {filteredFAQs.map((faq) => (
          <Card
            key={faq.id}
            style={{
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              background: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(8px)',
            }}
            className="faq-card"
          >
            <button
              onClick={() => toggleItem(faq.id)}
              style={{
                width: '100%',
                padding: '1.5rem',
                textAlign: 'left',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      marginBottom: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <span
                      style={{
                        borderRadius: '9999px',
                        background: '#F4C2C1',
                        padding: '0.25rem 0.5rem',
                        fontSize: '0.75rem',
                        fontWeight: '500',
                        color: '#4FC3E7',
                      }}
                    >
                      {
                        categories.find((cat) => cat.key === faq.category)
                          ?.label
                      }
                    </span>
                  </div>
                  <h3
                    style={{
                      paddingRight: '1rem',
                      fontSize: '1.125rem',
                      fontWeight: '600',
                      color: '#1F2937',
                    }}
                  >
                    {faq.question}
                  </h3>
                </div>
                <div style={{ flexShrink: 0 }}>
                  <span
                    style={{
                      fontSize: '1.25rem',
                      color: openItems.includes(faq.id) ? '#4FC3E7' : '#9CA3AF',
                    }}
                  >
                    {openItems.includes(faq.id) ? '▲' : '▼'}
                  </span>
                </div>
              </div>
            </button>

            {openItems.includes(faq.id) && (
              <div
                style={{
                  padding: '0 1.5rem 1.5rem',
                }}
              >
                <div style={{ paddingTop: '1rem' }}>
                  <p
                    style={{
                      lineHeight: 1.6,
                      whiteSpace: 'pre-line',
                      color: '#374151',
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>

      {/* ホバーエフェクト用CSS */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .faq-card:hover {
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15) !important;
          }
        `,
        }}
      />
    </>
  )
}
