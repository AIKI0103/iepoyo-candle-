'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'

export function NotFoundButtons() {
  return (
    <div className="space-y-4">
      <Link href="/">
        <Button className="w-full bg-[#4FC3E7] hover:bg-[#4FC3E7]/90">
          ホームに戻る
        </Button>
      </Link>

      <Link href="/experience">
        <Button variant="outline" className="w-full">
          体験メニューを見る
        </Button>
      </Link>

      <Link href="/reservation">
        <Button variant="outline" className="w-full">
          予約する
        </Button>
      </Link>
    </div>
  )
}
