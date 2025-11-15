'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function GSAPAnimations() {
  useEffect(() => {
    // 既存のフェードイン
    const fadeElements = document.querySelectorAll<HTMLElement>('.fade-in')
    fadeElements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    })

    // 左からスライドイン
    const slideElements = document.querySelectorAll<HTMLElement>('.slide-in-left')
    slideElements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    })

    // マスク的に左から表示（clip-pathを使用）
    const maskElements = document.querySelectorAll<HTMLElement>('.mask-clip')
    maskElements.forEach((el) => {
      gsap.fromTo(
        el,
        { clipPath: 'inset(0 100% 0 0)', opacity: 1 }, // 右側で隠れている状態
        {
          clipPath: 'inset(0 0% 0 0)', // 完全に表示
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 50%',
            toggleActions: 'play none none none',
          },
        }
      )
    })
  }, [])

  return null
}
