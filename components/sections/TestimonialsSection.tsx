import { Quote, Star } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { TESTIMONIALS, TESTIMONIALS_SECTION } from '@/lib/constants'

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-green-50">
      <div className="container-max">
        <SectionHeading
          eyebrow={TESTIMONIALS_SECTION.eyebrow}
          title={TESTIMONIALS_SECTION.title}
          subtitle={TESTIMONIALS_SECTION.subtitle}
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-card p-8 flex flex-col gap-5"
            >
              <Quote size={28} className="text-green-500 shrink-0" aria-hidden="true" />

              <blockquote className="text-body text-charcoal leading-relaxed flex-1">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <div
                  className="flex gap-1"
                  aria-label={`${testimonial.stars} von 5 Sternen`}
                  role="img"
                >
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-amber-400 fill-amber-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-body font-heading font-semibold text-charcoal">
                    {testimonial.author}
                  </p>
                  <p className="text-small text-muted">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
