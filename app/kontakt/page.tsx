import type { Metadata } from 'next'
import ContactForm from '@/components/sections/ContactForm'
import { PAGE_KONTAKT } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Kontakt & Anfrage – Gartenpflege Mainz',
  description:
    'Kostenloses Angebot anfragen für Gartenpflege, Winterdienst oder Gartenanlage in Mainz, Alzey und Bad Kreuznach. Antwort innerhalb von 24 Stunden.',
  alternates: { canonical: '/kontakt' },
  openGraph: {
    title: 'Kontakt & Anfrage – Gartenpflege Mainz',
    description:
      'Kostenloses Angebot anfragen für Gartenpflege, Winterdienst oder Gartenanlage. Antwort innerhalb von 24 Stunden.',
    url: '/kontakt',
  },
}

export default function KontaktPage() {
  return (
    <>
      <section className="bg-green-500 py-16">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-small font-heading font-semibold uppercase tracking-widest text-green-200 block mb-3">
            {PAGE_KONTAKT.hero.eyebrow}
          </span>
          <h1 className="text-h1 font-heading font-bold text-white">{PAGE_KONTAKT.hero.title}</h1>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max">
          <ContactForm />
        </div>
      </section>
    </>
  )
}
