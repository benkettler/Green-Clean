import Link from 'next/link'
import { ChevronDown, Phone } from 'lucide-react'
import Button from '@/components/ui/Button'
import { SITE, HERO } from '@/lib/constants'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-garden.jpg')" }}
        aria-hidden="true"
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/50 to-charcoal/70"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="animate-fade-up max-w-4xl mx-auto">
          <span className="inline-block text-small font-heading font-semibold uppercase tracking-widest text-green-300 mb-4">
            {HERO.eyebrow}
          </span>
          <h1 className="text-display font-heading font-bold text-white mb-6 text-balance">
            {HERO.h1.main}{' '}
            <span className="text-green-300">{HERO.h1.highlight}</span>
          </h1>
          <p className="text-body-lg text-white/85 mb-10 max-w-2xl mx-auto text-balance">
            {HERO.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/leistungen">
              <Button size="lg">{HERO.cta1}</Button>
            </Link>
            <Link href="/kontakt">
              <Button variant="secondary" size="lg" className="border-white text-white hover:bg-white/10 hover:text-white">
                {HERO.cta2}
              </Button>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-2 mt-8 text-white/70">
            <Phone size={16} />
            <a
              href={`tel:${SITE.phone.replace(/\s/g, '')}`}
              className="text-body hover:text-white transition-colors"
            >
              {SITE.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce" aria-hidden="true">
        <ChevronDown size={32} className="text-white/60" />
      </div>
    </section>
  )
}
