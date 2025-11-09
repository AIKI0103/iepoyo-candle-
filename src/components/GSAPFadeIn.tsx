'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function GSAPFadeIn() {
  useEffect(() => {
    // .fade-in クラスを持つすべての要素を対象にする
    const elements = document.querySelectorAll<HTMLElement>('.fade-in')

    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',   // 要素上部が画面の80%に来たら発動
            toggleActions: 'play none none none',
          },
        }
      )
    })
  }, [])

  return null
}
