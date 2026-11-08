'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Scissors, Snowflake } from 'lucide-react'

export default function HomeServiceBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`md:hidden fixed inset-x-0 bottom-0 z-40 bg-green-800 border-t border-green-700 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex items-center gap-3">
        <Link
          href="/leistungen/gartenpflege/"
          className="flex-1 inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold rounded-xl px-4 py-3 text-sm"
        >
          <Scissors size={16} aria-hidden="true" />
          Gartenpflege
        </Link>
        <Link
          href="/leistungen/winterdienst/"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-green-600 text-white font-semibold rounded-xl px-4 py-3 text-sm"
        >
          <Snowflake size={16} aria-hidden="true" />
          Winterdienst
        </Link>
      </div>
    </div>
  )
}
