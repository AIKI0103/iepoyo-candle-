import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const date = searchParams.get('date')

  if (!date) {
    return NextResponse.json(
      { error: '日付パラメータが必要です', success: false },
      { status: 400 }
    )
  }

  // 日付形式の検証
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/
  if (!dateRegex.test(date)) {
    return NextResponse.json(
      { error: '日付は YYYY-MM-DD 形式で指定してください', success: false },
      { status: 400 }
    )
  }

  return NextResponse.json(
    {
      date,
      availableTimeSlots: [],
      success: true,
    },
    {
      headers: {
        'cache-control': 'no-store',
      },
    }
  )
}

export async function POST() {
  return NextResponse.json({
    availableDates: [],
    success: true,
  })
}
