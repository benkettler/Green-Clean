'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('gc-cookies-decision')) {
      setVisible(true)
    }
  }, [])

  function accept() {
    localStorage.setItem('gc-cookies-decision', 'accepted')
    setVisible(false)
  }

  function reject() {
    localStorage.setItem('gc-cookies-decision', 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie-Einstellungen"
      className="fixed bottom-0 left-0 right-0 z-50 bg-charcoal border-t border-gray-700 shadow-xl"
    >
      <div className="container-max px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-5 justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-small font-heading font-semibold text-white">
            Cookie-Einstellungen
          </p>
          <p className="text-small text-gray-400 leading-relaxed max-w-2xl">
            Wir verwenden technisch notwendige Cookies. Weitere Informationen finden Sie in
            unserer{' '}
            <Link
              href="/datenschutz"
              className="underline text-green-300 hover:text-green-200 transition-colors"
            >
              Datenschutzerklärung
            </Link>
            .
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={reject}
            className="px-5 py-2.5 border border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white text-small font-heading font-semibold rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-charcoal"
          >
            Ablehnen
          </button>
          <button
            onClick={accept}
            className="px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white text-small font-heading font-semibold rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-charcoal"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  )
}
