'use client'

import { useEffect, useState } from 'react'
import { Phone, Send } from 'lucide-react'
import { SITE } from '@/lib/constants'

export default function MobileContactBar() {
  const [scrolled, setScrolled] = useState(false)
  const [formInView, setFormInView] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 400)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const target = document.getElementById('anfrage')
    if (!target) return
    const observer = new IntersectionObserver(
      ([entry]) => setFormInView(entry.isIntersecting),
      { rootMargin: '0px 0px -10% 0px' }
    )
    observer.observe(target)
    return () => observer.disconnect()
  }, [])

  const visible = scrolled && !formInView

  return (
    <div
      className={`md:hidden fixed inset-x-0 bottom-0 z-40 bg-green-800 border-t border-green-700 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex items-center gap-3">
        <a
          href={`tel:${SITE.phone.replace(/\s/g, '')}`}
          className="flex-1 inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold rounded-xl px-4 py-3 text-sm"
        >
          <Phone size={16} aria-hidden="true" />
          Anrufen
        </a>
        <a
          href="#anfrage"
          className="flex-[1.4] inline-flex items-center justify-center gap-2 bg-green-600 text-white font-semibold rounded-xl px-4 py-3 text-sm"
        >
          <Send size={16} aria-hidden="true" />
          Anfrage
        </a>
      </div>
    </div>
  )
}
