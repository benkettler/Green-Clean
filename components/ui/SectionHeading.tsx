import { cn } from '@/components/ui/cn'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
  className?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'text-small font-heading font-semibold uppercase tracking-widest',
            light ? 'text-green-200' : 'text-green-500'
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'text-h2 font-heading font-bold',
          light ? 'text-white' : 'text-charcoal'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'text-body-lg max-w-2xl',
            light ? 'text-green-100' : 'text-muted'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
