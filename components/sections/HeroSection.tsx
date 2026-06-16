import Link from 'next/link'
import Button from '@/components/ui/Button'
import { HERO } from '@/lib/constants'

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
          <h1 className="text-display font-heading font-bold text-white mb-6 text-balance leading-[1.1]">
            {HERO.h1.main}{' '}
            <em className="text-green-300 not-italic">{HERO.h1.highlight}</em>
          </h1>

          <p className="text-body-lg text-white/80 mb-10 max-w-2xl mx-auto">
            {HERO.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/leistungen">
              <Button
                variant="secondary"
                size="lg"
                className="border-white text-white hover:bg-white/10 hover:text-white"
              >
                {HERO.cta1}
              </Button>
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
        </div>
      </div>

    </section>
  )
}
