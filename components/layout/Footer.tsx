import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { SITE, NAV_LINKS } from '@/lib/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-green-950 text-white">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <Link href="/" className="font-heading font-bold text-white text-h3">
              Green & Clean
            </Link>
            <p className="text-small text-white/50 max-w-xs leading-relaxed">
              {SITE.tagline}. Gartenpflege & Winterdienst in {SITE.region}.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-body mb-4 text-white">
              Schnelllinks
            </h3>
            <ul className="flex flex-col gap-2" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-small text-white/50 hover:text-green-300 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/kontakt" className="text-small text-white/50 hover:text-green-300 transition-colors duration-200">
                  Kontakt & Anfrage
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-small text-white/50 hover:text-green-300 transition-colors duration-200">
                  Datenschutzerklärung
                </Link>
              </li>
              <li>
                <Link href="/impressum" className="text-small text-white/50 hover:text-green-300 transition-colors duration-200">
                  Impressum
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-body mb-4 text-white">
              Kontakt
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              <li>
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-small text-white/50 hover:text-green-300 transition-colors duration-200"
                >
                  <Phone size={15} className="text-green-400 shrink-0" aria-hidden="true" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-3 text-small text-white/50 hover:text-green-300 transition-colors duration-200"
                >
                  <Mail size={15} className="text-green-400 shrink-0" aria-hidden="true" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-small text-white/50">
                <MapPin size={15} className="text-green-400 shrink-0 mt-0.5" aria-hidden="true" />
                {SITE.region} · {SITE.cities}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-small text-white/30">
            © {year} {SITE.name}. Alle Rechte vorbehalten.
          </p>
          <p className="text-small text-white/20">
            Gartenpflege & Winterdienst in {SITE.region}
          </p>
        </div>
      </div>
    </footer>
  )
}
