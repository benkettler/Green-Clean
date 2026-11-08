import type { Metadata } from 'next'
import { MapPin, CheckCircle, Check, Phone, Users, ClipboardCheck, Footprints, Car, ParkingSquare, Snowflake, ChevronDown, Calendar } from 'lucide-react'
import Button from '@/components/ui/Button'
import { cn } from '@/components/ui/cn'
import WinterdienstAnfrageForm from '@/components/sections/WinterdienstAnfrageForm'
import MobileContactBar from '@/components/sections/MobileContactBar'
import { SITE, SERVICE_PAGES, SERVICE_PAGE_SHARED } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Winterdienst Mainz & Rheinhessen – Schneeräumung & Streuservice',
  description:
    'Sicher durch den Winter, ohne selbst zu räumen. Schneeräumung und Streuservice in Mainz, Alzey und Bad Kreuznach, schnell und zuverlässig.',
  keywords: [
    'Winterdienst Mainz',
    'Winterdienst Alzey',
    'Winterdienst Rheinhessen',
    'Schneeräumung Mainz',
    'Räumdienst Rheinhessen',
    'Streudienst Mainz',
    'Winterservice Rheinhessen',
  ],
  alternates: { canonical: 'https://www.greenundclean.com/leistungen/winterdienst/' },
  openGraph: {
    title: 'Winterdienst Mainz & Rheinhessen | Green & Clean',
    description:
      'Sicher durch den Winter, ohne selbst zu räumen. Schneeräumung und Streuservice in Mainz, Alzey und Bad Kreuznach, schnell und zuverlässig.',
    url: '/leistungen/winterdienst',
    images: [{ url: '/images/winterdienst.webp', width: 1200, height: 800, alt: 'Winterdienst Rheinhessen – Green & Clean' }],
  },
}

const page = SERVICE_PAGES.winterdienst

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Winterdienst',
  provider: { '@type': 'LocalBusiness', name: 'Green & Clean', url: 'https://www.greenundclean.com' },
  areaServed: [
    { '@type': 'City', name: 'Mainz' },
    { '@type': 'City', name: 'Nieder-Olm' },
    { '@type': 'City', name: 'Essenheim' },
    { '@type': 'City', name: 'Ober-Olm' },
  ],
  description: 'Zuverlässiger Winterdienst in Mainz und ausgewählten Orten in Rheinhessen: Schneeräumung und Streuservice für Privatgrundstücke, Hausverwaltungen und Gewerbeflächen.',
  url: 'https://www.greenundclean.com/leistungen/winterdienst',
}

export default function WinterdienstPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className="bg-green-50 py-8 sm:py-14">
        <div className="container-max px-4 sm:px-6 lg:px-8 max-w-2xl sm:text-center sm:mx-auto">
          <span className="text-small font-heading font-semibold uppercase tracking-widest text-green-600 block mb-2">
            Ihr regionaler Winterdienst
          </span>
          <h1 className="text-h1 font-heading font-bold text-charcoal mb-3">
            Winterdienst in Mainz &amp; Rheinhessen
          </h1>
          <p className="text-body text-muted mb-5">
            Schneeräumung und Streudienst für Privatkunden, Hausverwaltungen und Gewerbe. Regional, persönlich und zuverlässig organisiert.
          </p>
          <ul className="flex flex-col gap-2 mb-6 sm:items-center" role="list">
            <li className="flex items-center gap-3">
              <CheckCircle size={20} className="text-green-600 shrink-0" aria-hidden="true" />
              <span className="text-charcoal">Gehwege, Einfahrten und Hauszugänge</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle size={20} className="text-green-600 shrink-0" aria-hidden="true" />
              <span className="text-charcoal">Individuelle Angebote</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle size={20} className="text-green-600 shrink-0" aria-hidden="true" />
              <span className="text-charcoal">Persönliche Betreuung</span>
            </li>
          </ul>
          <div className="flex flex-col gap-3">
            <a href="#anfrage">
              <Button variant="primary" size="lg" className="w-full">
                Kostenloses Angebot anfordern
              </Button>
            </a>
            <a href={`tel:${SITE.phone.replace(/\s/g, '')}`}>
              <Button variant="secondary" size="lg" className="w-full gap-2">
                <Phone size={18} aria-hidden="true" />
                Jetzt anrufen
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Vertrauensbereich */}
      <section className="bg-white py-6 px-4 sm:px-6 lg:px-8">
        <div className="container-max">
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: MapPin, label: 'Regional vor Ort' },
              { icon: Users, label: 'Persönlicher Kontakt' },
              { icon: ClipboardCheck, label: 'Klare Absprachen' },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="bg-green-800 rounded-2xl px-2 py-4 flex flex-col items-center gap-2 text-center"
              >
                <Icon size={22} className="text-green-300" aria-hidden="true" />
                <span className="text-small font-medium text-white leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-charcoal mb-8 text-center">
            Unsere Winterdienst-Leistungen
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto">
            {[
              { icon: Footprints, title: 'Gehwege & Hauszugänge', text: 'Schneeräumung und Streudienst' },
              { icon: Car, title: 'Einfahrten & Zufahrten', text: 'Private Zufahrten nach Vereinbarung' },
              { icon: ParkingSquare, title: 'Höfe & Parkflächen', text: 'Geeignete Privat- und Gewerbeflächen' },
              { icon: Snowflake, title: 'Streudienst bei Glätte', text: 'Geeignete Streumittel nach örtlichen Vorgaben' },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-green-800 rounded-2xl p-4 sm:p-6 flex flex-col items-center text-center gap-2"
              >
                <Icon size={24} className="text-green-300" aria-hidden="true" />
                <h3 className="font-semibold text-white text-sm sm:text-base leading-tight">{title}</h3>
                <p className="text-xs sm:text-small text-green-200 leading-snug">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-2xl">
          <h2 className="text-2xl font-bold text-charcoal mb-10 text-center">
            In 3 Schritten zu Ihrem Winterdienst
          </h2>
          <div className="flex flex-col">
            {page.steps.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center text-white font-bold shrink-0">
                    {i + 1}
                  </div>
                  {i < page.steps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-green-200 my-1" aria-hidden="true" />
                  )}
                </div>
                <div className={cn('flex flex-col gap-1', i < page.steps.length - 1 ? 'pb-8' : '')}>
                  <h3 className="font-semibold text-charcoal text-base sm:text-lg">{step.title}</h3>
                  <p className="text-muted text-sm sm:text-body leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preis-Infobox */}
      <section className="section-padding bg-green-50">
        <div className="container-max max-w-2xl">
          <h2 className="text-2xl font-bold text-charcoal mb-3 text-center">
            Was kostet ein Winterdienst?
          </h2>
          <p className="text-muted leading-relaxed mb-8 text-center">
            Die Kosten hängen von der Größe der Flächen, dem Standort und dem vereinbarten Leistungsumfang ab.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center gap-3 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Calendar size={22} className="text-green-700" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-charcoal">Monatliche Bereitschaftspauschale</h3>
              <p className="text-sm text-muted leading-relaxed">Für die vereinbarte Vorhaltung und Organisation des Winterdienstes.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center gap-3 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Snowflake size={22} className="text-green-700" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-charcoal">Kosten pro Einsatz</h3>
              <p className="text-sm text-muted leading-relaxed">Für tatsächlich durchgeführte Räum- und Streueinsätze.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Einsatzgebiet */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-2xl">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin size={22} className="text-green-600 shrink-0" />
            <h2 className="text-xl font-bold text-charcoal">
              {SERVICE_PAGE_SHARED.einsatzgebietTitle}
            </h2>
          </div>
          {page.einsatzgebiet.map((para, i) => (
            <p key={i} className="text-muted leading-relaxed mb-6 text-center">{para}</p>
          ))}
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'Mainz',
              'Nieder-Olm',
              'Mainz-Finthen',
              'Essenheim',
              'Ober-Olm',
              'Weitere Orte auf Anfrage',
            ].map((city) => (
              <span
                key={city}
                className="inline-flex items-center gap-1.5 bg-green-50 border border-green-200 text-green-800 text-sm font-medium px-4 py-2 rounded-full"
              >
                <Check size={14} className="text-green-600 shrink-0" aria-hidden="true" />
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white pt-0">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-charcoal mb-6 text-center">
            Häufige Fragen zum Winterdienst
          </h2>
          <div className="flex flex-col gap-3 max-w-2xl mx-auto">
            {[
              {
                q: 'Wann erfolgt der Winterdienst?',
                a: 'Die Einsätze erfolgen witterungsabhängig innerhalb der vertraglich vereinbarten Einsatzzeiten.',
              },
              {
                q: 'Übernehmen Sie auch private Einfahrten?',
                a: 'Ja, geeignete Einfahrten und Zufahrten können nach individueller Vereinbarung betreut werden.',
              },
              {
                q: 'Welche Streumittel verwenden Sie?',
                a: 'Wir verwenden geeignete Streumittel unter Berücksichtigung der örtlichen Vorschriften.',
              },
              {
                q: 'Wie werden die Einsätze abgerechnet?',
                a: 'In der Regel mit einer monatlichen Bereitschaftspauschale und den vereinbarten Kosten pro durchgeführtem Einsatz.',
              },
              {
                q: 'Kann ich den Winterdienst nur für bestimmte Tage buchen?',
                a: 'Das ist je nach verfügbarer Kapazität und Lage des Objekts nach Absprache möglich.',
              },
              {
                q: 'Wie erhalte ich ein Angebot?',
                a: 'Senden Sie uns die Anschrift und ungefähre Größe Ihrer Flächen über das Anfrageformular.',
              },
            ].map(({ q, a }) => (
              <details key={q} className="group bg-green-800 rounded-2xl px-5 py-4">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-semibold text-white">
                  {q}
                  <ChevronDown size={20} className="text-green-300 shrink-0 transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="text-green-200 text-sm leading-relaxed mt-3">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <WinterdienstAnfrageForm />

      <MobileContactBar />

      {/* Platzhalter, damit die fixierte Leiste auf Mobile nichts verdeckt */}
      <div className="md:hidden h-20 bg-white" aria-hidden="true" />
    </>
  )
}
