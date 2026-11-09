'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/components/ui/cn'
import { NAV_LINKS } from '@/lib/constants'

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null)

  function normalize(path: string) {
    return path.endsWith('/') ? path : path + '/'
  }

  function isActive(href: string, hasSubLinks?: boolean) {
    const normPath = normalize(pathname)
    const normHref = normalize(href)
    if (hasSubLinks) return normPath === normHref || normPath.startsWith(normHref)
    return normPath === normHref
  }

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
            <li key={link.href} className={link.subLinks ? 'relative group' : undefined}>
              <Link
                href={link.href}
                className={cn(
                  'flex items-center gap-1 text-body font-body transition-colors duration-200',
                  isActive(link.href, !!link.subLinks)
                    ? 'text-green-600 font-semibold'
                    : 'text-charcoal hover:text-green-600'
                )}
              >
                {link.label}
                {link.subLinks && <ChevronDown size={15} aria-hidden="true" />}
              </Link>

              {link.subLinks && (
                <div
                  className={cn(
                    'absolute left-0 top-full pt-2 opacity-0 invisible translate-y-1',
                    'group-hover:opacity-100 group-hover:visible group-hover:translate-y-0',
                    'focus-within:opacity-100 focus-within:visible focus-within:translate-y-0',
                    'transition-all duration-150'
                  )}
                >
                  <ul className="bg-white rounded-xl shadow-card border border-border py-2 min-w-[180px]" role="list">
                    {link.subLinks.map((sub) => (
                      <li key={sub.href}>
                        <Link
                          href={sub.href}
                          className={cn(
                            'block px-4 py-2 text-small transition-colors duration-200',
                            normalize(pathname) === normalize(sub.href)
                              ? 'text-green-600 font-semibold'
                              : 'text-charcoal hover:bg-green-50 hover:text-green-700'
                          )}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
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
                {link.subLinks ? (
                  <>
                    <div
                      className={cn(
                        'flex items-center justify-between rounded-xl text-body font-body transition-colors duration-200',
                        isActive(link.href, true)
                          ? 'bg-green-800 text-white font-semibold'
                          : 'text-charcoal'
                      )}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="flex-1 px-4 py-3"
                      >
                        {link.label}
                      </Link>
                      <button
                        type="button"
                        aria-label={mobileSubOpen === link.href ? 'Städte einklappen' : 'Städte ausklappen'}
                        aria-expanded={mobileSubOpen === link.href}
                        onClick={() => setMobileSubOpen((v) => (v === link.href ? null : link.href))}
                        className="px-4 py-3"
                      >
                        <ChevronDown
                          size={18}
                          className={cn('transition-transform duration-200', mobileSubOpen === link.href && 'rotate-180')}
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                    {mobileSubOpen === link.href && (
                      <ul className="flex flex-col pl-4 mt-1 gap-1" role="list">
                        {link.subLinks.map((sub) => (
                          <li key={sub.href}>
                            <Link
                              href={sub.href}
                              onClick={() => setOpen(false)}
                              className={cn(
                                'block px-4 py-2.5 rounded-xl text-small transition-colors duration-200',
                                normalize(pathname) === normalize(sub.href)
                                  ? 'bg-green-50 text-green-700 font-semibold'
                                  : 'text-muted hover:bg-green-50 hover:text-green-700'
                              )}
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'block px-4 py-3 rounded-xl text-body font-body transition-colors duration-200',
                      isActive(link.href)
                        ? 'bg-green-800 text-white font-semibold'
                        : 'text-charcoal hover:bg-green-800 hover:text-white'
                    )}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
