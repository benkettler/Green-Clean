import SectionHeading from '@/components/ui/SectionHeading'
import { TEAM, TEAM_SECTION } from '@/lib/constants'

export default function TeamSection() {
  return (
    <section className="section-padding bg-green-50">
      <div className="container-max">
        <SectionHeading
          eyebrow={TEAM_SECTION.eyebrow}
          title={TEAM_SECTION.title}
          subtitle={TEAM_SECTION.subtitle}
          className="mb-16"
        />

        <div className="flex flex-wrap justify-center gap-8">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl shadow-card overflow-hidden group w-full max-w-sm"
            >
              {/* Avatar placeholder */}
              <div className="h-56 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-green-500/20 border-4 border-green-500/30 flex items-center justify-center">
                  <span className="text-h2 font-heading font-bold text-green-600">
                    {member.name.charAt(0)}
                  </span>
                </div>
              </div>
              {/* Content */}
              <div className="p-6 border-t-4 border-green-500">
                <h3 className="text-h3 font-heading font-bold text-charcoal mb-1">
                  {member.name}
                </h3>
                <p className="text-small font-heading font-semibold text-green-500 mb-3 uppercase tracking-wide">
                  {member.role}
                </p>
                <p className="text-body text-muted">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
