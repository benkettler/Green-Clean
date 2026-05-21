import type { Metadata } from 'next'
import { Shield, Phone, MapPin } from 'lucide-react'
import TeamSection from '@/components/sections/TeamSection'
import ContactForm from '@/components/sections/ContactForm'
import SectionHeading from '@/components/ui/SectionHeading'
import { VALUES, SITE, PAGE_UEBER_UNS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Über uns – Gartenpflege & Winterdienst Rheinhessen',
  description:
    'Green & Clean: regional verwurzelt, persönlich erreichbar und verlässlich. Gartenpflege und Winterdienst in Mainz, Alzey und Bad Kreuznach.',
  alternates: { canonical: '/ueber-uns' },
  openGraph: {
    title: 'Über uns – Gartenpflege & Winterdienst Rheinhessen',
    description:
      'Green & Clean: regional verwurzelt, persönlich erreichbar und verlässlich. Gartenpflege und Winterdienst in Mainz, Alzey und Bad Kreuznach.',
    url: '/ueber-uns',
  },
}

const iconMap = { Shield, Phone, MapPin }

export default function UeberUnsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-green-500 py-20">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-small font-heading font-semibold uppercase tracking-widest text-green-200 block mb-3">
            {PAGE_UEBER_UNS.hero.eyebrow}
          </span>
          <h1 className="text-h1 font-heading font-bold text-white">
            {PAGE_UEBER_UNS.hero.title}
          </h1>
          <p className="text-body-lg text-green-100 mt-4 max-w-xl mx-auto">
            {PAGE_UEBER_UNS.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div className="flex flex-col gap-6">
              <SectionHeading
                eyebrow={PAGE_UEBER_UNS.story.eyebrow}
                title={PAGE_UEBER_UNS.story.title}
                align="left"
              />
              <div className="flex flex-col gap-4 text-body-lg text-muted leading-relaxed">
                {PAGE_UEBER_UNS.story.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-green-100 to-green-200 shadow-card flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-display font-heading font-bold text-green-500/30 leading-none">
                  {SITE.region}
                </div>
                <p className="text-h3 font-heading font-semibold text-green-600/60 mt-3">
                  {SITE.cities}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <TeamSection />

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <SectionHeading
            eyebrow={PAGE_UEBER_UNS.values.eyebrow}
            title={PAGE_UEBER_UNS.values.title}
            subtitle={PAGE_UEBER_UNS.values.subtitle}
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((value) => {
              const Icon = iconMap[value.icon as keyof typeof iconMap]
              return (
                <div key={value.title} className="flex flex-col items-center text-center gap-4 p-8">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                    {Icon && <Icon size={28} className="text-green-500" aria-hidden="true" />}
                  </div>
                  <h3 className="text-h3 font-heading font-bold text-charcoal">
                    {value.title}
                  </h3>
                  <p className="text-body text-muted">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </>
  )
}
