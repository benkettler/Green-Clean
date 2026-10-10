import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import HeroSection from '@/components/sections/HeroSection'
import ServicesOverview from '@/components/sections/ServicesOverview'
import ReviewsCarousel from '@/components/sections/ReviewsCarousel'
import CtaSection from '@/components/sections/CtaSection'

export const metadata: Metadata = {
  title: { absolute: 'Gartenpflege Mainz & Rheinhessen | Green & Clean' },
  description:
    'Professionelle Gartenpflege in Mainz, Alzey und Bad Kreuznach. Rasenpflege, Heckenschnitt, Winterdienst und Gartenanlage. Regional, persönlich und zuverlässig. Jetzt anfragen!',
  alternates: { canonical: 'https://www.greenundclean.com/' },
  openGraph: {
    title: 'Gartenpflege Mainz & Rheinhessen | Green & Clean',
    description:
      'Professionelle Gartenpflege in Mainz, Alzey und Bad Kreuznach. Rasenpflege, Heckenschnitt, Winterdienst und Gartenanlage. Regional, persönlich und zuverlässig.',
    url: '/',
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="section-padding bg-green-800">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-body font-semibold uppercase tracking-widest text-green-300 block mb-3">
              Einsatzgebiet
            </span>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
              Gartenpflege in Ihrer Stadt
            </h2>
            <p className="text-body-lg text-green-200 max-w-2xl mx-auto">
              Wir sind in Mainz, Alzey und Bad Kreuznach sowie der gesamten Rheinhessen-Region für Sie tätig.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                city: 'Mainz',
                text: 'Gartenpflege für Privatkunden, Hausverwaltungen und Gewerbebetriebe in ganz Mainz.',
                href: '/leistungen/gartenpflege/mainz/',
              },
              {
                city: 'Alzey',
                text: 'Zuverlässige Gartenpflege für Privatkunden, Hausverwaltungen und Gewerbebetriebe in Alzey.',
                href: '/leistungen/gartenpflege/alzey/',
              },
              {
                city: 'Bad Kreuznach',
                text: 'Professionelle Gartenpflege in Bad Kreuznach und der Nahe-Region. Für private und gewerbliche Außenanlagen.',
                href: '/leistungen/gartenpflege/bad-kreuznach/',
              },
            ].map(({ city, text, href }) => (
              <Link
                key={city}
                href={href}
                className="group bg-white rounded-3xl shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 p-7 flex flex-col gap-4"
              >
                <div className="w-11 h-11 bg-green-100 rounded-xl flex items-center justify-center">
                  <MapPin size={20} className="text-green-700" />
                </div>
                <h3 className="text-xl font-bold text-charcoal">Gartenpflege {city}</h3>
                <p className="text-body text-muted leading-relaxed flex-1">{text}</p>
                <span className="inline-flex items-center gap-2 text-small font-semibold text-green-600 group-hover:gap-3 transition-all duration-200">
                  Mehr erfahren <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServicesOverview />
      <ReviewsCarousel />
      <CtaSection />
    </>
  )
}
