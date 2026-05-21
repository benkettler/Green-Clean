'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import GreenUndCleanLogo from '@/components/icons/GreenUndCleanLogo'
import Button from '@/components/ui/Button'
import { cn } from '@/components/ui/cn'
import { NAV_LINKS } from '@/lib/constants'

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav
        className="container-max flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8"
        aria-label="Hauptnavigation"
      >
        <Link href="/" onClick={() => setOpen(false)}>
          <GreenUndCleanLogo />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  'text-body font-body transition-colors duration-200',
                  pathname === link.href
                    ? 'text-green-500 font-semibold'
                    : 'text-charcoal hover:text-green-500'
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link href="/kontakt">
            <Button size="sm">Kontakt aufnehmen</Button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-xl text-charcoal hover:bg-green-50 transition-colors"
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-border bg-background"
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
                      ? 'bg-green-50 text-green-500 font-semibold'
                      : 'text-charcoal hover:bg-green-50 hover:text-green-500'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link href="/kontakt" onClick={() => setOpen(false)}>
                <Button className="w-full" size="md">
                  Kontakt aufnehmen
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
