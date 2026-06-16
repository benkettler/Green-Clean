import Link from 'next/link'
import { Phone } from 'lucide-react'
import Button from '@/components/ui/Button'
import { SITE, CTA_SECTION } from '@/lib/constants'

export default function CtaSection() {
  return (
    <section className="bg-background py-20">
      <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-h2 font-heading font-bold text-charcoal mb-4">
          {CTA_SECTION.title}
        </h2>
        <p className="text-body-lg text-muted mb-10 max-w-xl mx-auto">
          {CTA_SECTION.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/kontakt">
            <Button size="lg">{CTA_SECTION.button}</Button>
          </Link>
          <a
            href={`tel:${SITE.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-2 text-body-lg font-semibold text-charcoal hover:text-green-800 transition-colors duration-200"
          >
            <Phone size={20} aria-hidden="true" />
            {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
