import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { MapButton } from '@/components/access/map-button'
import { MainLayout } from '@/components/layout/main-layout'

export default function AccessPage() {
  return (
    <MainLayout>

        <div
          style={{
            maxWidth: '1280px',
            padding: '0 1rem',
          }}
        >
          <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <h1
              className="mb-3 text-4xl font-bold md:text-5xl lg:text-6xl"
              style={{ color: 'oklch(.753 .124 212.53)' }}
            >
              アクセス
            </h1>
            <p className="text-gray-600">iepoyo candleへのご案内</p>
          </div>

          <div
            style={{
              margin: '0 auto',
              display: 'grid',
              maxWidth: '1024px',
              gap: '2rem',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            }}
          >
            <Card
              style={{
                border: 'none',
                background: 'rgba(255, 255, 255, 0.9)',
                padding: '2rem',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <h3
                className="mb-6 text-2xl font-extrabold"
                style={{ color: 'oklch(.753 .124 212.53)' }}
              >
                店舗情報
              </h3>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                  }}
                >
                  <div
                    style={{
                      background: '#F4C2C1',
                      marginTop: '0.25rem',
                      display: 'flex',
                      height: '1.5rem',
                      width: '1.5rem',
                      flexShrink: 0,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%',
                    }}
                  >
                    <span style={{ fontSize: '0.75rem', color: 'white' }}>
                      📍
                    </span>
                  </div>
                  <div>
                    <h4
                      style={{
                        color: '#4FC3E7',
                        marginBottom: '0.25rem',
                        fontWeight: 'bold',
                      }}
                    >
                      住所
                    </h4>
                    <p style={{ color: '#374151' }}>
                      〒906-0008
                      <br />
                      沖縄県宮古島市平良荷川取206-3
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                  }}
                >
                  <div
                    style={{
                      background: '#F4C2C1',
                      marginTop: '0.25rem',
                      display: 'flex',
                      height: '1.5rem',
                      width: '1.5rem',
                      flexShrink: 0,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%',
                    }}
                  >
                    <span style={{ fontSize: '0.75rem', color: 'white' }}>
                      📞
                    </span>
                  </div>
                  <div>
                    <h4
                      style={{
                        color: '#4FC3E7',
                        marginBottom: '0.25rem',
                        fontWeight: 'bold',
                      }}
                    >
                      お問い合わせ
                    </h4>
                    <p style={{ color: '#374151' }}>インスタと公式LINE</p>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                  }}
                >
                  <div
                    style={{
                      background: '#F4C2C1',
                      marginTop: '0.25rem',
                      display: 'flex',
                      height: '1.5rem',
                      width: '1.5rem',
                      flexShrink: 0,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%',
                    }}
                  >
                    <span style={{ fontSize: '0.75rem', color: 'white' }}>
                      ⏰
                    </span>
                  </div>
                  <div>
                    <h4
                      style={{
                        color: '#4FC3E7',
                        marginBottom: '0.25rem',
                        fontWeight: 'bold',
                      }}
                    >
                      営業時間
                    </h4>
                    <p style={{ color: '#374151' }}>11:00 - 22:00</p>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                  }}
                >
                  <div
                    style={{
                      background: '#F4C2C1',
                      marginTop: '0.25rem',
                      display: 'flex',
                      height: '1.5rem',
                      width: '1.5rem',
                      flexShrink: 0,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%',
                    }}
                  >
                    <span style={{ fontSize: '0.75rem', color: 'white' }}>
                      📅
                    </span>
                  </div>
                  <div>
                    <h4
                      style={{
                        color: '#4FC3E7',
                        marginBottom: '0.25rem',
                        fontWeight: 'bold',
                      }}
                    >
                      定休日
                    </h4>
                    <p style={{ color: '#374151' }}>
                      不定休
                      <br />
                      （事前予約制）
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card
              style={{
                border: 'none',
                background: 'rgba(255, 255, 255, 0.9)',
                padding: '2rem',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <h3
                className="mb-6 text-2xl font-extrabold"
                style={{ color: 'oklch(.753 .124 212.53)' }}
              >
                アクセス方法
              </h3>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                }}
              >
                <div>
                  <h4
                    style={{
                      color: '#4FC3E7',
                      marginBottom: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontWeight: 'bold',
                    }}
                  >
                    <span
                      style={{
                        background:
                          'linear-gradient(to bottom right, #4FC3E7, #F4C2C1)',
                        display: 'flex',
                        height: '2rem',
                        width: '2rem',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '50%',
                        fontSize: '0.875rem',
                        color: 'white',
                      }}
                    >
                      🚗
                    </span>
                    お車でお越しの場合
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: '#374151' }}>
                    宮古空港から約15分
                    <br />
                    平良市街地から約10分
                    <br />
                    無料駐車場完備（5台）
                  </p>
                </div>
                <div>
                  <h4
                    style={{
                      color: '#4FC3E7',
                      marginBottom: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontWeight: 'bold',
                    }}
                  >
                    <span
                      style={{
                        background:
                          'linear-gradient(to bottom right, #F4C2C1, #D9D9FF)',
                        display: 'flex',
                        height: '2rem',
                        width: '2rem',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '50%',
                        fontSize: '0.875rem',
                        color: 'white',
                      }}
                    >
                      🚌
                    </span>
                    バスでお越しの場合
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: '#374151' }}>
                    路線バス「下里」バス停下車徒歩3分
                    <br />
                    ※本数が少ないためお車でのお越しをおすすめします
                  </p>
                </div>
                <div>
                  <h4
                    style={{
                      color: '#4FC3E7',
                      marginBottom: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontWeight: 'bold',
                    }}
                  >
                    <span
                      style={{
                        background:
                          'linear-gradient(to bottom right, #D9D9FF, #98FB98)',
                        display: 'flex',
                        height: '2rem',
                        width: '2rem',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '50%',
                        fontSize: '0.875rem',
                        color: 'white',
                      }}
                    >
                      🚐
                    </span>
                    送迎サービス
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: '#374151' }}>
                    平良市街地のホテルから無料送迎あり
                    <br />
                    ※要事前予約（前日まで）
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <Card
            style={{
              margin: '2rem auto 0',
              maxWidth: '1024px',
              border: 'none',
              background: 'rgba(255, 255, 255, 0.9)',
              padding: '2rem',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <h3
              className="mb-6 text-center text-2xl font-extrabold"
              style={{ color: 'oklch(.753 .124 212.53)' }}
            >
              地図
            </h3>
            <div
              style={{
                height: '16rem',
                overflow: 'hidden',
                borderRadius: '12px',
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.123456789!2d125.281234!3d24.805678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ4JzIwLjQiTiAxMjXCsDE2JzUyLjQiRQ!5e0!3m2!1sja!2sjp!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="iepoyo candle の場所"
              ></iframe>
            </div>
            <div style={{ marginTop: '1rem', textAlign: 'center' }}>
              <MapButton href="https://maps.app.goo.gl/fpBhpQebtJxFKSyE6">
                <span>🗺️</span>
                Googleマップで開く
              </MapButton>
            </div>
          </Card>

          <div
            style={{
              margin: '2rem auto 0',
              display: 'grid',
              maxWidth: '1024px',
              gap: '1.5rem',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            }}
          >
            <Card
              style={{
                border: 'none',
                background: 'rgba(255, 255, 255, 0.9)',
                padding: '1.5rem',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <h3
                style={{
                  color: '#4FC3E7',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                }}
              >
                <span style={{ fontSize: '2rem' }}>🌧️</span>
                雨天時のご案内
              </h3>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  fontSize: '0.875rem',
                  color: '#374151',
                }}
              >
                <p>• 屋内での体験のため雨でも安心してお楽しみいただけます</p>
                <p>• 台風などの悪天候時は事前にご連絡いたします</p>
                <p>• 雨の日こそ室内アクティビティをお楽しみください</p>
              </div>
              <Badge
                style={{
                  background: 'rgba(79, 195, 231, 0.2)',
                  color: '#4FC3E7',
                  borderColor: 'rgba(79, 195, 231, 0.3)',
                  marginTop: '1rem',
                }}
              >
                雨の日歓迎
              </Badge>
            </Card>

            <Card
              style={{
                border: 'none',
                background: 'rgba(255, 255, 255, 0.9)',
                padding: '1.5rem',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <h3
                style={{
                  color: '#4FC3E7',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                }}
              >
                <span style={{ fontSize: '2rem' }}>🏝️</span>
                周辺観光スポット
              </h3>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  fontSize: '0.875rem',
                  color: '#374151',
                }}
              >
                <p>• 砂山ビーチ（車で20分）</p>
                <p>• 前浜ビーチ（車で25分）</p>
                <p>• 宮古島海中公園（車で30分）</p>
                <p>• 平良市街地（車で10分）</p>
              </div>
              <Badge
                style={{
                  background: 'rgba(244, 194, 193, 0.2)',
                  color: '#F4C2C1',
                  borderColor: 'rgba(244, 194, 193, 0.3)',
                  marginTop: '1rem',
                }}
              >
                観光と合わせて
              </Badge>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
