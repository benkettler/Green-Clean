import { CheckCircle } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { cn } from '@/components/ui/cn'

interface ServiceDetailProps {
  id: string
  eyebrow: string
  title: string
  description: string
  features: string[]
  image: string
  reverse?: boolean
}

export default function ServiceDetail({
  id,
  eyebrow,
  title,
  description,
  features,
  image,
  reverse = false,
}: ServiceDetailProps) {
  return (
    <section
      id={id}
      className="section-padding scroll-mt-20"
    >
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className={cn(
            'relative rounded-3xl overflow-hidden aspect-[4/3] bg-green-100 shadow-card',
            reverse && 'lg:order-last'
          )}>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${image}')` }}
              role="img"
              aria-label={title}
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <SectionHeading
              eyebrow={eyebrow}
              title={title}
              align="left"
            />
            <p className="text-body-lg text-muted leading-relaxed">
              {description}
            </p>
            <ul className="flex flex-col gap-3" role="list">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    className="text-green-500 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-body text-charcoal">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
