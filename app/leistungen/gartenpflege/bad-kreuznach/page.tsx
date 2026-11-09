import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Check,
  Phone,
  Scissors,
  Sprout,
  Flower2,
  Shovel,
  Leaf,
  Repeat,
  Users,
  MapPin,
  ShieldCheck,
  ChevronDown,
} from 'lucide-react'
import Button from '@/components/ui/Button'
import { cn } from '@/components/ui/cn'
import GartenpflegeAnfrageForm from '@/components/sections/GartenpflegeAnfrageForm'
import MobileContactBar from '@/components/sections/MobileContactBar'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Gartenpflege Bad Kreuznach – Rasenpflege, Heckenschnitt & mehr',
  description:
    'Professionelle Gartenpflege in Bad Kreuznach: Rasenpflege, Heckenschnitt, Laubentfernung und Gartenreinigung. Regionaler Gartenservice – persönlich und zuverlässig. Jetzt anfragen!',
  alternates: { canonical: 'https://www.greenundclean.com/leistungen/gartenpflege/bad-kreuznach/' },
  robots: { index: true, follow: true },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Gartenpflege Bad Kreuznach',
  provider: { '@type': 'LocalBusiness', name: 'Green & Clean', url: 'https://www.greenundclean.com' },
  areaServed: { '@type': 'City', name: 'Bad Kreuznach' },
  description: 'Gartenpflege in Bad Kreuznach: Rasenpflege, Heckenschnitt und saisonale Pflegearbeiten, einmalig oder regelmäßig.',
  url: 'https://www.greenundclean.com/leistungen/gartenpflege/bad-kreuznach',
}

const LEISTUNGEN = [
  { icon: Scissors, title: 'Hecken- und Strauchschnitt', text: 'Fachgerechter Rückschnitt und Formschnitt von Hecken, Sträuchern und Gehölzen.' },
  { icon: Sprout, title: 'Rasenpflege', text: 'Rasenmähen, Vertikutieren und Pflege der Rasenkanten für einen gepflegten Rasen.' },
  { icon: Flower2, title: 'Beetpflege und Bepflanzung', text: 'Unkrautentfernung, Pflanzenrückschnitt, Neupflanzungen und Pflege bestehender Beete.' },
  { icon: Shovel, title: 'Allgemeine Gartenarbeiten', text: 'Entfernung unerwünschter Pflanzen, Rückschnitt und Aufbereitung verwilderter Gartenbereiche.' },
  { icon: Leaf, title: 'Saisonale Gartenpflege', text: 'Frühjahrs- und Herbstpflege, Laubentfernung und Vorbereitung des Gartens auf die nächste Saison.' },
  { icon: Repeat, title: 'Regelmäßige Grünflächenpflege', text: 'Laufende Pflege von Privatgärten, Wohnanlagen und gewerblichen Außenflächen.' },
]

const STEPS = [
  { title: 'Anfrage stellen', text: 'Beschreiben Sie uns kurz, welche Gartenarbeiten anstehen. Gerne können Sie auch Fotos Ihres Gartens mitsenden.' },
  { title: 'Individuelles Angebot erhalten', text: 'Wir besprechen den Arbeitsumfang, bei Bedarf auch vor Ort, und erstellen Ihnen ein unverbindliches Angebot.' },
  { title: 'Gartenpflege durchführen lassen', text: 'Nach gemeinsamer Terminvereinbarung übernehmen wir die Gartenarbeiten – einmalig oder regelmäßig.' },
]

const FAQS = [
  { q: 'Übernehmen Sie auch einmalige Gartenarbeiten?', a: 'Ja. Sie können uns sowohl für einzelne Arbeiten wie einen Heckenschnitt als auch für umfangreichere Pflegeeinsätze beauftragen.' },
  { q: 'Bieten Sie regelmäßige Gartenpflege an?', a: 'Ja. Auf Wunsch vereinbaren wir regelmäßige Pflegetermine, die auf den Bedarf Ihres Gartens abgestimmt sind.' },
  { q: 'Entsorgen Sie auch den Grünschnitt?', a: 'Auf Wunsch übernehmen wir den Abtransport und die fachgerechte Entsorgung des anfallenden Grünschnitts. Die Kosten berücksichtigen wir im Angebot.' },
  { q: 'Betreuen Sie auch Firmen und Hausverwaltungen?', a: 'Ja. Wir übernehmen Garten- und Grünflächenpflege auch für Wohnanlagen und gewerblich genutzte Grundstücke.' },
  { q: 'Was kostet die Gartenpflege?', a: 'Der Preis richtet sich nach Art und Umfang der Arbeiten. Gerne erstellen wir Ihnen nach Abstimmung ein individuelles Angebot.' },
  { q: 'Wie kann ich einen Termin vereinbaren?', a: 'Kontaktieren Sie uns telefonisch oder über das Anfrageformular. Wir klären die benötigten Arbeiten und stimmen einen passenden Termin mit Ihnen ab.' },
]

export default function GartenpflegeBadKreuznachPage() {
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
            Ihr Gartenservice in Bad Kreuznach
          </span>
          <h1 className="text-h1 font-heading font-bold text-charcoal mb-3">
            Gartenpflege in Bad Kreuznach
          </h1>
          <p className="text-body text-muted mb-5">
            Green &amp; Clean übernimmt die Gartenpflege in Bad Kreuznach für Privatkunden, Hausverwaltungen und Gewerbebetriebe – von der Rasenpflege im Sommer bis zur Laubentfernung im Herbst. Als regionaler Betrieb sind wir schnell vor Ort.
          </p>
          <div className="flex flex-col gap-3">
            <a href="#anfrage">
              <Button variant="primary" size="lg" className="w-full">
                Kostenloses Angebot anfragen
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
              { icon: Users, label: 'Persönlich' },
              { icon: MapPin, label: 'Regional' },
              { icon: ShieldCheck, label: 'Unverbindlich' },
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
        <div className="container-max max-w-4xl">
          <h2 className="text-2xl font-bold text-charcoal mb-10 text-center">
            Unsere Leistungen in der Gartenpflege
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {LEISTUNGEN.map(({ icon: Icon, title, text }) => (
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
        <div className="container-max max-w-2xl lg:max-w-4xl">
          <h2 className="text-2xl font-bold text-charcoal mb-10 lg:mb-14 text-center">
            In drei Schritten zur Gartenpflege
          </h2>
          <div className="relative flex flex-col lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="hidden lg:block absolute top-5 left-[16.67%] right-[16.67%] h-0.5 bg-green-200" aria-hidden="true" />
            {STEPS.map((step, i) => (
              <div key={i} className="flex gap-4 lg:flex-col lg:items-center lg:text-center lg:gap-3 relative">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center text-white font-bold shrink-0 z-10">
                    {i + 1}
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="w-0.5 flex-1 bg-green-200 my-1 lg:hidden" aria-hidden="true" />
                  )}
                </div>
                <div className={cn('flex flex-col gap-1', i < STEPS.length - 1 ? 'pb-8 lg:pb-0' : '')}>
                  <h3 className="font-semibold text-charcoal text-base sm:text-lg">{step.title}</h3>
                  <p className="text-muted text-sm sm:text-body leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Einsatzgebiet */}
      <section className="section-padding bg-green-50">
        <div className="container-max max-w-2xl">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin size={22} className="text-green-600 shrink-0" />
            <h2 className="text-xl font-bold text-charcoal">Auch in der Region tätig</h2>
          </div>
          <p className="text-muted leading-relaxed mb-6 text-center">
            Neben Bad Kreuznach sind wir in der gesamten Rheinhessen-Region für Sie tätig. Auf Wunsch kommen wir auch in umliegende Städte und Gemeinden.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Link
              href="/leistungen/gartenpflege/mainz/"
              className="inline-flex items-center gap-1.5 bg-white border border-green-200 text-green-800 text-sm font-medium px-4 py-2 rounded-full hover:bg-green-100 transition-colors"
            >
              <Check size={14} className="text-green-600 shrink-0" aria-hidden="true" />
              Mainz
            </Link>
            <Link
              href="/leistungen/gartenpflege/alzey/"
              className="inline-flex items-center gap-1.5 bg-white border border-green-200 text-green-800 text-sm font-medium px-4 py-2 rounded-full hover:bg-green-100 transition-colors"
            >
              <Check size={14} className="text-green-600 shrink-0" aria-hidden="true" />
              Alzey
            </Link>
            {['Ingelheim', 'Bingen', 'Nieder-Olm', 'Wörrstadt'].map((city) => (
              <span
                key={city}
                className="inline-flex items-center gap-1.5 bg-white border border-green-200 text-green-800 text-sm font-medium px-4 py-2 rounded-full"
              >
                <Check size={14} className="text-green-600 shrink-0" aria-hidden="true" />
                {city}
              </span>
            ))}
          </div>
          <p className="text-sm text-muted mt-4 text-center">Ihr Ort ist nicht dabei? Sprechen Sie uns einfach an.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-charcoal mb-6 text-center">
            Häufige Fragen zur Gartenpflege
          </h2>
          <div className="flex flex-col gap-3 max-w-2xl mx-auto">
            {FAQS.map(({ q, a }) => (
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

      <GartenpflegeAnfrageForm />

      <MobileContactBar />

      {/* Platzhalter, damit die fixierte Leiste auf Mobile nichts verdeckt */}
      <div className="md:hidden h-20 bg-white" aria-hidden="true" />
    </>
  )
}
