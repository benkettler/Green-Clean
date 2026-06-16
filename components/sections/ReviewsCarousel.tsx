import { Star, Quote } from 'lucide-react'
import { TESTIMONIALS, TESTIMONIALS_SECTION } from '@/lib/constants'

export default function ReviewsCarousel() {
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS]

  return (
    <section className="py-16 md:py-24 bg-green-800 overflow-hidden">
      <div className="container-max px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-h2 font-heading font-bold text-white mb-3">
          {TESTIMONIALS_SECTION.title}
        </h2>
        <p className="text-lg text-green-200 max-w-2xl mx-auto">
          {TESTIMONIALS_SECTION.subtitle}
        </p>
      </div>

      <div className="group relative carousel-fade">
        <div
          className="flex gap-6 animate-marquee w-max group-hover:[animation-play-state:paused]"
          style={{ animationDuration: '80s' }}
        >
          {doubled.map((review, i) => (
            <div
              key={i}
              className="w-[340px] sm:w-[380px] bg-white/95 rounded-2xl p-7 flex flex-col gap-4 shrink-0"
            >
              <div className="flex items-start justify-between">
                <div
                  className="flex gap-0.5"
                  aria-label={`${review.stars} von 5 Sternen`}
                  role="img"
                >
                  {Array.from({ length: review.stars }).map((_, j) => (
                    <Star key={j} size={16} className="fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                </div>
                <Quote size={20} className="text-green-400 shrink-0" aria-hidden="true" />
              </div>

              <blockquote className="text-body text-charcoal leading-relaxed flex-1">
                &ldquo;{review.quote}&rdquo;
              </blockquote>

              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-charcoal">
                  {review.author}
                </p>
                <p className="text-small text-muted">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container-max px-4 mt-10 flex items-center justify-center gap-3 text-green-300">
        <div className="flex gap-0.5" aria-hidden="true">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
          ))}
        </div>
        <span className="text-sm">
          5,0 von 5 · 14 Google-Bewertungen
        </span>
      </div>
    </section>
  )
}
