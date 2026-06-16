import Link from 'next/link'
import { Phone, MapPin, Star } from 'lucide-react'
import Button from '@/components/ui/Button'
import { SITE, HERO } from '@/lib/constants'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-garden-preview.jpg')" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/70"
        aria-hidden="true"
      />

      <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 mb-8 border border-white/20">
            <span className="text-small font-body uppercase tracking-[0.18em] text-green-200">
              {HERO.eyebrow}
            </span>
          </div>

          <h1 className="text-display font-heading font-bold text-white mb-6 text-balance leading-[1.1]">
            {HERO.h1.main}{' '}
            <em className="text-green-300 not-italic">{HERO.h1.highlight}</em>
          </h1>

          <p className="text-body-lg text-white/80 mb-10 max-w-2xl mx-auto">
            {HERO.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Link href="/leistungen">
              <Button size="lg">{HERO.cta1}</Button>
            </Link>
            <Link href="/kontakt">
              <Button
                variant="secondary"
                size="lg"
                className="border-white text-white hover:bg-white/10 hover:text-white"
              >
                {HERO.cta2}
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-white/70 text-small">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5" aria-label="5 von 5 Sternen">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={14} className="fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <span>5,0 · 14 Google-Bewertungen</span>
            </div>
            <span className="hidden sm:block text-white/25" aria-hidden="true">|</span>
            <a
              href={`tel:${SITE.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone size={14} aria-hidden="true" />
              {SITE.phone}
            </a>
            <span className="hidden sm:block text-white/25" aria-hidden="true">|</span>
            <span className="flex items-center gap-1.5">
              <MapPin size={14} aria-hidden="true" />
              Mainz · Alzey · Bad Kreuznach
            </span>
          </div>
        </div>
      </div>

    </section>
  )
}
