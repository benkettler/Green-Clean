import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ServiceDetail from '@/components/sections/ServiceDetail'
import CtaSection from '@/components/sections/CtaSection'
import { SERVICES, PAGE_LEISTUNGEN } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Leistungen: Gartenpflege & Winterdienst Rheinhessen',
  description:
    'Gartenpflege und Winterdienst in Mainz, Alzey und Bad Kreuznach. Professionell, termingerecht und persönlich betreut. Jetzt anfragen!',
  alternates: { canonical: '/leistungen' },
  openGraph: {
    title: 'Leistungen: Gartenpflege & Winterdienst Rheinhessen',
    description:
      'Gartenpflege und Winterdienst in Mainz, Alzey und Bad Kreuznach. Professionell, termingerecht und persönlich betreut.',
    url: '/leistungen',
  },
}

export default function LeistungenPage() {
  return (
    <>
      <section className="bg-green-800 py-20">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-h1 font-heading font-bold text-white">
            {PAGE_LEISTUNGEN.hero.title}
          </h1>
          <p className="text-lg text-green-200 mt-4 max-w-xl mx-auto">
            {PAGE_LEISTUNGEN.hero.subtitle}
          </p>
        </div>
      </section>

      <div>
        {SERVICES.map((service, index) => (
          <div key={service.id} className={index < SERVICES.length - 1 ? 'border-b border-border' : ''}>
            <ServiceDetail
              id={service.id}
              eyebrow={service.eyebrow}
              title={service.title}
              description={service.description}
              features={service.features}
              image={service.image}
              reverse={index % 2 !== 0}
            />
            <div className="container-max px-4 sm:px-6 lg:px-8 pb-12 flex justify-center">
              <Link
                href={`/leistungen/${service.id}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-green-700 text-green-700 font-semibold hover:bg-green-800 hover:text-white hover:border-green-800 transition-all duration-200 group"
              >
                {PAGE_LEISTUNGEN.cardLinkPrefix} {service.title}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <CtaSection />
    </>
  )
}
