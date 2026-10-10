import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, CheckCircle, MapPin } from 'lucide-react'
import CtaSection from '@/components/sections/CtaSection'
import { SERVICES, SERVICE_PAGES, SERVICE_PAGE_SHARED } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Gartenpflege Mainz – Rasenpflege, Heckenschnitt & mehr',
  description:
    'Professionelle Gartenpflege in Mainz: Rasenpflege, Heckenschnitt, Laubentfernung und saisonale Pflegearbeiten. Regionaler Gartenservice – persönlich und zuverlässig. Jetzt anfragen!',
  alternates: { canonical: 'https://www.greenundclean.com/leistungen/gartenpflege/mainz/' },
  robots: { index: true, follow: true },
}

const service = SERVICES.find((s) => s.id === 'gartenpflege')!
const page = SERVICE_PAGES.gartenpflege

const weitereStaedte = [
  { name: 'Alzey',          href: '/leistungen/gartenpflege/alzey/' },
  { name: 'Bad Kreuznach',  href: '/leistungen/gartenpflege/bad-kreuznach/' },
  { name: 'Ingelheim',      href: '/leistungen/gartenpflege/' },
  { name: 'Nieder-Olm',     href: '/leistungen/gartenpflege/' },
  { name: 'Bingen am Rhein', href: '/leistungen/gartenpflege/' },
  { name: 'Wörrstadt',      href: '/leistungen/gartenpflege/' },
  { name: 'Ockenheim',      href: '/leistungen/gartenpflege/' },
  { name: 'Sprendlingen',   href: '/leistungen/gartenpflege/' },
  { name: 'Nierstein',      href: '/leistungen/gartenpflege/' },
  { name: 'Oppenheim',      href: '/leistungen/gartenpflege/' },
]

export default function GartenpflegeMainzPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-green-800 py-16">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-green-300 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">{SERVICE_PAGE_SHARED.breadcrumb.home}</Link>
            <ChevronRight size={14} />
            <Link href="/leistungen" className="hover:text-white transition-colors">{SERVICE_PAGE_SHARED.breadcrumb.services}</Link>
            <ChevronRight size={14} />
            <Link href="/leistungen/gartenpflege" className="hover:text-white transition-colors">Gartenpflege</Link>
            <ChevronRight size={14} />
            <span className="text-white">Mainz</span>
          </nav>
          <h1 className="text-h1 font-heading font-bold text-white">
            Gartenpflege in Mainz
          </h1>
          <p className="text-lg text-green-200 mt-4 max-w-xl">
            {page.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Intro + Leistungen */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-card">
              <Image
                src={service.image}
                alt="Gartenpflege Mainz – Green & Clean"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold text-charcoal">Ihr Gartenservice in Mainz</h2>
              <p className="text-lg text-muted leading-relaxed">
                Green & Clean ist Ihr Gartenservice in Mainz für Rasenpflege, Heckenschnitt und saisonale Gartenarbeiten. Wir übernehmen die Grünflächenpflege für Privatkunden, Hausverwaltungen und Gewerbebetriebe in der gesamten Stadt. Von regelmäßiger Rasenpflege im Sommer bis zur Laubentfernung im Herbst sorgen wir mit festen Terminen für ein gepflegtes Erscheinungsbild Ihres Gartens.
              </p>
              <p className="text-muted leading-relaxed">
                Als regionaler Betrieb sind wir in Mainz schnell vor Ort und sprechen direkt mit Ihnen. Ob Heckenschnitt, Unkrautbekämpfung oder allgemeine Gartenarbeiten: Sie erhalten verlässliche Termine und gleichbleibende Qualität bei jedem Einsatz, ohne Callcenter und ohne lange Wartezeiten.
              </p>
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
            <h2 className="text-xl font-bold text-charcoal">Auch in der Region tätig</h2>
          </div>
          <p className="text-muted leading-relaxed mb-6">
            Neben Mainz sind wir in der gesamten Rheinhessen-Region für Sie tätig. Auf Wunsch kommen wir auch in umliegende Städte und Gemeinden.
          </p>
          <div className="flex flex-wrap gap-3">
            {weitereStaedte.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className="inline-flex items-center gap-1.5 bg-sand border border-border text-charcoal text-sm font-medium px-3 py-1.5 rounded-full"
              >
                <MapPin size={13} aria-hidden="true" />
                {name}
              </Link>
            ))}
          </div>
          <p className="text-sm text-muted mt-4">{SERVICE_PAGE_SHARED.einsatzgebietNote}</p>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
