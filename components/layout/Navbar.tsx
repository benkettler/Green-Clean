'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/components/ui/cn'
import { NAV_LINKS } from '@/lib/constants'

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <nav
        className="container-max flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8"
        aria-label="Hauptnavigation"
      >
        <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
          <Image
            src="/images/logo-original.png"
            alt="Green & Clean"
            width={40}
            height={40}
            className="h-10 w-auto"
            style={{ mixBlendMode: 'multiply' }}
            priority
          />
          <span className="hidden sm:block font-heading font-bold text-green-700 text-body">
            Green & Clean
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  'text-body font-body transition-colors duration-200',
                  pathname === link.href
                    ? 'text-green-600 font-semibold'
                    : 'text-charcoal hover:text-green-600'
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden p-2 rounded-xl text-charcoal hover:bg-green-800 hover:text-white transition-colors"
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-border bg-white"
        >
          <ul className="flex flex-col px-4 py-4 gap-1" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'block px-4 py-3 rounded-xl text-body font-body transition-colors duration-200',
                    pathname === link.href
                      ? 'bg-green-800 text-white font-semibold'
                      : 'text-charcoal hover:bg-green-800 hover:text-white'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
