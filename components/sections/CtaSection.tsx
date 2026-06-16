import Link from 'next/link'
import { Phone } from 'lucide-react'
import Button from '@/components/ui/Button'
import { SITE, CTA_SECTION } from '@/lib/constants'

export default function CtaSection() {
  return (
    <section className="bg-green-800 py-20">
      <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-h2 font-heading font-bold text-white mb-4">
          {CTA_SECTION.title}
        </h2>
        <p className="text-body-lg text-green-200 mb-10 max-w-xl mx-auto">
          {CTA_SECTION.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/kontakt">
            <Button variant="white" size="lg">{CTA_SECTION.button}</Button>
          </Link>
          <a
            href={`tel:${SITE.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-2 text-body-lg font-semibold text-white hover:text-green-200 transition-colors duration-200"
          >
            <Phone size={20} aria-hidden="true" />
            {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
