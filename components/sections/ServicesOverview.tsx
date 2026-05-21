import Link from 'next/link'
import { Scissors, Snowflake, Shovel, ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { SERVICES, SERVICES_OVERVIEW } from '@/lib/constants'
import { cn } from '@/components/ui/cn'

const iconMap = {
  Scissors: Scissors,
  Snowflake: Snowflake,
  Shovel: Shovel,
}

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        <SectionHeading
          eyebrow={SERVICES_OVERVIEW.eyebrow}
          title={SERVICES_OVERVIEW.title}
          subtitle={SERVICES_OVERVIEW.subtitle}
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]
            return (
              <div
                key={service.id}
                className={cn(
                  'group bg-white rounded-2xl shadow-card p-8 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300',
                  'flex flex-col gap-5'
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300">
                  {Icon && (
                    <Icon
                      size={26}
                      className="text-green-500 group-hover:text-white transition-colors duration-300"
                    />
                  )}
                </div>
                <div>
                  <h3 className="text-h3 font-heading font-bold text-charcoal mb-2">
                    {service.title}
                  </h3>
                  <p className="text-body text-muted leading-relaxed">
                    {service.summary}
                  </p>
                </div>
                <Link
                  href={`/leistungen/${service.id}`}
                  className="inline-flex items-center gap-2 text-small font-heading font-semibold text-green-500 hover:gap-3 transition-all duration-200 mt-auto"
                >
                  {SERVICES_OVERVIEW.cardLink}
                  <ArrowRight size={16} />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
