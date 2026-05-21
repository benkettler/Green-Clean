import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, MapPin } from 'lucide-react'
import ServiceDetail from '@/components/sections/ServiceDetail'
import CtaSection from '@/components/sections/CtaSection'
import { SERVICES, SERVICE_PAGES, SERVICE_PAGE_SHARED } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Gartenanlage Mainz & Rheinhessen – Planung & Gestaltung',
  description:
    'Gartengestaltung und Neuanlage in Mainz, Alzey und Bad Kreuznach. Von der individuellen Planung bis zur fertigen Anlage. Regionale Pflanzen, Wegebau, Terrassen.',
  keywords: [
    'Gartenanlage Mainz',
    'Gartengestaltung Rheinhessen',
    'Gartenanlage Alzey',
    'Gartengestaltung Mainz',
    'Terrassengestaltung Rheinhessen',
    'Gartenbau Rheinhessen',
    'Gartenneuanlage Mainz',
  ],
  alternates: { canonical: '/leistungen/gartenanlage' },
  openGraph: {
    title: 'Gartenanlage Mainz & Rheinhessen | Green & Clean',
    description:
      'Gartengestaltung und Neuanlage in Mainz, Alzey und Bad Kreuznach. Von der individuellen Planung bis zur fertigen Anlage.',
    url: '/leistungen/gartenanlage',
    images: [{ url: '/images/gartenanlage.jpg', width: 918, height: 1080, alt: 'Gartenanlage Rheinhessen – Green & Clean' }],
  },
}

const service = SERVICES.find((s) => s.id === 'gartenanlage')!
const page = SERVICE_PAGES.gartenanlage

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Gartenanlage',
  provider: { '@type': 'LocalBusiness', name: 'Green & Clean', url: 'https://www.greenundclean.com' },
  areaServed: [
    { '@type': 'City', name: 'Mainz' },
    { '@type': 'City', name: 'Bad Kreuznach' },
    { '@type': 'City', name: 'Alzey' },
    { '@type': 'City', name: 'Ingelheim' },
  ],
  description:
    'Gartengestaltung und Neuanlage in Rheinhessen: individuelle Planung, Wegebau, Terrassengestaltung, Bepflanzung mit regionalen Pflanzen.',
  url: 'https://www.greenundclean.com/leistungen/gartenanlage',
}

export default function GartenanlagePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <section className="bg-green-500 py-16">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap items-center gap-2 text-small text-green-200 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">{SERVICE_PAGE_SHARED.breadcrumb.home}</Link>
            <ChevronRight size={14} />
            <Link href="/leistungen" className="hover:text-white transition-colors">{SERVICE_PAGE_SHARED.breadcrumb.services}</Link>
            <ChevronRight size={14} />
            <span className="text-white">{service.title}</span>
          </nav>
          <span className="text-small font-heading font-semibold uppercase tracking-widest text-green-200 block mb-3">
            {service.eyebrow}
          </span>
          <h1 className="text-h1 font-heading font-bold text-white">
            {service.title} in Rheinhessen
          </h1>
          <p className="text-body-lg text-green-100 mt-4 max-w-xl">
            {page.heroSubtitle}
          </p>
        </div>
      </section>

      <ServiceDetail
        id={service.id}
        eyebrow={service.eyebrow}
        title={service.title}
        description={service.description}
        features={service.features}
        image={service.image}
      />

      <section className="section-padding bg-white border-t border-border">
        <div className="container-max max-w-4xl">
          <h2 className="text-h3 font-heading font-bold text-charcoal mb-10 text-center">
            {SERVICE_PAGE_SHARED.stepsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {page.steps.map((step, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="w-11 h-11 bg-green-500 rounded-full flex items-center justify-center text-white font-heading font-bold text-body shrink-0">
                  {i + 1}
                </div>
                <h3 className="font-heading font-semibold text-charcoal text-body-lg">{step.title}</h3>
                <p className="text-body text-muted leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-green-50 border-t border-border">
        <div className="container-max max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <MapPin size={22} className="text-green-500 shrink-0" />
            <h2 className="text-h3 font-heading font-bold text-charcoal">
              {SERVICE_PAGE_SHARED.einsatzgebietTitle}
            </h2>
          </div>
          {page.einsatzgebiet.map((para, i) => (
            <p key={i} className="text-body text-muted leading-relaxed mb-4">{para}</p>
          ))}
          <div className="flex flex-wrap gap-2 mt-4">
            {SERVICE_PAGE_SHARED.cities.map((city) => (
              <span
                key={city}
                className="px-3 py-1.5 bg-white border border-border rounded-full text-small text-charcoal font-heading font-medium"
              >
                {city}
              </span>
            ))}
          </div>
          <p className="text-small text-muted mt-4">
            {SERVICE_PAGE_SHARED.einsatzgebietNote}
          </p>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
