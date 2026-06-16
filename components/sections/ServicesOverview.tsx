import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Scissors, Snowflake } from 'lucide-react'
import { SERVICES, SERVICES_OVERVIEW } from '@/lib/constants'
import { cn } from '@/components/ui/cn'

const iconMap = {
  Scissors: Scissors,
  Snowflake: Snowflake,
}

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="text-body font-semibold uppercase tracking-widest text-green-600 block mb-3">
            {SERVICES_OVERVIEW.eyebrow}
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-charcoal mb-4">
            {SERVICES_OVERVIEW.title}
          </h2>
          {SERVICES_OVERVIEW.subtitle && (
            <p className="text-body-lg text-muted max-w-2xl mx-auto">
              {SERVICES_OVERVIEW.subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]
            return (
              <div
                key={service.id}
                className={cn(
                  'group bg-white rounded-3xl shadow-card hover:shadow-card-hover hover:-translate-y-1.5',
                  'transition-all duration-300 overflow-hidden flex flex-col'
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#1a0f07]/30 to-transparent"
                    aria-hidden="true"
                  />
                  {Icon && (
                    <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-sm">
                      <Icon size={18} className="text-green-600" aria-hidden="true" />
                    </div>
                  )}
                </div>

                <div className="p-7 flex flex-col gap-4 flex-1">
                  <h3 className="text-h3 font-heading font-bold text-charcoal">
                    {service.title}
                  </h3>
                  <p className="text-body text-muted leading-relaxed flex-1">
                    {service.summary}
                  </p>
                  <Link
                    href={`/leistungen/${service.id}`}
                    className="inline-flex items-center gap-2 text-small font-body font-semibold text-green-600 hover:gap-3 transition-all duration-200 mt-auto"
                  >
                    {SERVICES_OVERVIEW.cardLink}
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
