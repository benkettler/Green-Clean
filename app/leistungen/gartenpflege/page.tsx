import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, MapPin, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import CtaSection from '@/components/sections/CtaSection'
import { SERVICES, SERVICE_PAGES, SERVICE_PAGE_SHARED } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Gartenpflege Mainz & Rheinhessen – Rasenpflege, Heckenschnitt',
  description:
    'Professionelle Gartenpflege in Mainz, Alzey und Bad Kreuznach. Rasenpflege, Heckenschnitt, saisonale Arbeiten. Termingerecht und persönlich betreut. Jetzt anfragen!',
  keywords: [
    'Gartenpflege Mainz',
    'Gartenpflege Alzey',
    'Gartenpflege Rheinhessen',
    'Rasenpflege Mainz',
    'Heckenschnitt Rheinhessen',
    'Gartenservice Mainz',
    'Grünpflege Rheinhessen',
  ],
  alternates: { canonical: '/leistungen/gartenpflege' },
  openGraph: {
    title: 'Gartenpflege Mainz & Rheinhessen | Green & Clean',
    description:
      'Professionelle Gartenpflege in Mainz, Alzey und Bad Kreuznach. Rasenpflege, Heckenschnitt, saisonale Arbeiten. Jetzt anfragen!',
    url: '/leistungen/gartenpflege',
    images: [{ url: '/images/gartenpflege.jpg', width: 1618, height: 1080, alt: 'Gartenpflege Rheinhessen – Green & Clean' }],
  },
}

const service = SERVICES.find((s) => s.id === 'gartenpflege')!
const page = SERVICE_PAGES.gartenpflege

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Gartenpflege',
  provider: { '@type': 'LocalBusiness', name: 'Green & Clean', url: 'https://www.greenundclean.com' },
  areaServed: [
    { '@type': 'City', name: 'Mainz' },
    { '@type': 'City', name: 'Bad Kreuznach' },
    { '@type': 'City', name: 'Alzey' },
    { '@type': 'City', name: 'Ingelheim' },
  ],
  description: 'Professionelle Gartenpflege in Rheinhessen: Rasenpflege, Heckenschnitt, saisonale Arbeiten und allgemeine Gartenarbeiten.',
  url: 'https://www.greenundclean.com/leistungen/gartenpflege',
}

export default function GartenpflegePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Header */}
      <section className="bg-green-800 py-16">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-green-300 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">{SERVICE_PAGE_SHARED.breadcrumb.home}</Link>
            <ChevronRight size={14} />
            <Link href="/leistungen" className="hover:text-white transition-colors">{SERVICE_PAGE_SHARED.breadcrumb.services}</Link>
            <ChevronRight size={14} />
            <span className="text-white">{service.title}</span>
          </nav>
          <h1 className="text-h1 font-heading font-bold text-white">
            {service.title} in Rheinhessen
          </h1>
          <p className="text-lg text-green-200 mt-4 max-w-xl">
            {page.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Detail */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-card">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold text-charcoal">{service.title}</h2>
              <p className="text-lg text-muted leading-relaxed">{service.description}</p>
              <ul className="flex flex-col gap-3" role="list">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-charcoal">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="section-padding bg-green-800">
        <div className="container-max max-w-4xl">
          <h2 className="text-2xl font-bold text-white mb-12 text-center">
            {SERVICE_PAGE_SHARED.stepsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {page.steps.map((step, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-green-800 font-bold shrink-0">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-white text-lg">{step.title}</h3>
                <p className="text-green-200 leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Einsatzgebiet */}
      <section className="section-padding bg-background border-t border-border">
        <div className="container-max max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <MapPin size={22} className="text-green-600 shrink-0" />
            <h2 className="text-xl font-bold text-charcoal">
              {SERVICE_PAGE_SHARED.einsatzgebietTitle}
            </h2>
          </div>
          {page.einsatzgebiet.map((para, i) => (
            <p key={i} className="text-muted leading-relaxed mb-4">{para}</p>
          ))}
          <div className="flex flex-wrap gap-2 mt-4">
            {SERVICE_PAGE_SHARED.cities.map((city) => (
              <span
                key={city}
                className="px-3 py-1.5 bg-sand border border-border rounded-full text-sm text-charcoal font-medium"
              >
                {city}
              </span>
            ))}
          </div>
          <p className="text-sm text-muted mt-4">{SERVICE_PAGE_SHARED.einsatzgebietNote}</p>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
