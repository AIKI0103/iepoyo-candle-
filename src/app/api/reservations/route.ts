import { NextResponse } from 'next/server'

export async function POST() {
  return NextResponse.json(
    {
      success: false,
      error: '予約機能は利用できません',
      message: '予約機能が無効化されています',
    },
    { status: 503 }
  )
}

export async function GET() {
  return NextResponse.json({
    message: 'Reservation API is running',
    timestamp: new Date().toISOString(),
  })
}
