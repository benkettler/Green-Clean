'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2, CheckCircle } from 'lucide-react'
import { contactSchema, type ContactFormData } from '@/lib/validators'
import Button from '@/components/ui/Button'
import SectionHeading from '@/components/ui/SectionHeading'
import { cn } from '@/components/ui/cn'
import { SITE, CONTACT_FORM } from '@/lib/constants'

const inputClass = cn(
  'w-full border border-border rounded-xl px-4 py-3 text-body text-charcoal bg-white',
  'focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200',
  'placeholder:text-muted/60'
)

const errorClass = 'text-small text-red-600 mt-1'

interface FieldErrorProps {
  id: string
  message?: string
}

function FieldError({ id, message }: FieldErrorProps) {
  if (!message) return null
  return (
    <p id={id} className={errorClass} role="alert">
      {message}
    </p>
  )
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  async function onSubmit(data: ContactFormData) {
    await new Promise((res) => setTimeout(res, 800))
    console.log('Kontaktformular:', data)
    setSubmitted(true)
  }

  return (
    <section id="kontakt" className="section-padding scroll-mt-20 bg-background">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div>
            <SectionHeading
              eyebrow={CONTACT_FORM.eyebrow}
              title={CONTACT_FORM.title}
              subtitle={CONTACT_FORM.subtitle}
              align="left"
            />
            <div className="mt-8 flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-small font-heading font-semibold text-green-500 uppercase tracking-wider">{CONTACT_FORM.infoLabels.telefon}</span>
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, '')}`}
                  className="text-body-lg font-heading font-semibold text-charcoal hover:text-green-500 transition-colors"
                >
                  {SITE.phone}
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-small font-heading font-semibold text-green-500 uppercase tracking-wider">{CONTACT_FORM.infoLabels.email}</span>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-body-lg font-heading font-semibold text-charcoal hover:text-green-500 transition-colors"
                >
                  {SITE.email}
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-small font-heading font-semibold text-green-500 uppercase tracking-wider">{CONTACT_FORM.infoLabels.region}</span>
                <p className="text-body-lg font-heading font-semibold text-charcoal">
                  {SITE.region}<br />
                  <span className="text-body font-normal text-muted">{SITE.cities}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-3xl shadow-card p-8 lg:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle size={32} className="text-green-500" />
                </div>
                <h3 className="text-h3 font-heading font-bold text-charcoal">
                  {CONTACT_FORM.success.title}
                </h3>
                <p className="text-body text-muted max-w-sm">
                  {CONTACT_FORM.success.subtitle}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
                {/* Name row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="vorname" className="block text-small font-heading font-semibold text-charcoal mb-1.5">
                      {CONTACT_FORM.form.vorname.label} <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="vorname"
                      type="text"
                      autoComplete="given-name"
                      placeholder={CONTACT_FORM.form.vorname.placeholder}
                      className={cn(inputClass, errors.vorname && 'border-red-400 focus:ring-red-400')}
                      aria-invalid={!!errors.vorname}
                      aria-describedby={errors.vorname ? 'vorname-error' : undefined}
                      {...register('vorname')}
                    />
                    <FieldError id="vorname-error" message={errors.vorname?.message} />
                  </div>
                  <div>
                    <label htmlFor="nachname" className="block text-small font-heading font-semibold text-charcoal mb-1.5">
                      {CONTACT_FORM.form.nachname.label} <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="nachname"
                      type="text"
                      autoComplete="family-name"
                      placeholder={CONTACT_FORM.form.nachname.placeholder}
                      className={cn(inputClass, errors.nachname && 'border-red-400 focus:ring-red-400')}
                      aria-invalid={!!errors.nachname}
                      aria-describedby={errors.nachname ? 'nachname-error' : undefined}
                      {...register('nachname')}
                    />
                    <FieldError id="nachname-error" message={errors.nachname?.message} />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-small font-heading font-semibold text-charcoal mb-1.5">
                    {CONTACT_FORM.form.email.label} <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder={CONTACT_FORM.form.email.placeholder}
                    className={cn(inputClass, errors.email && 'border-red-400 focus:ring-red-400')}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    {...register('email')}
                  />
                  <FieldError id="email-error" message={errors.email?.message} />
                </div>

                {/* Telefon */}
                <div>
                  <label htmlFor="telefon" className="block text-small font-heading font-semibold text-charcoal mb-1.5">
                    {CONTACT_FORM.form.telefon.label} <span className="text-muted font-normal">{CONTACT_FORM.form.telefon.optional}</span>
                  </label>
                  <input
                    id="telefon"
                    type="tel"
                    autoComplete="tel"
                    placeholder={CONTACT_FORM.form.telefon.placeholder}
                    className={inputClass}
                    {...register('telefon')}
                  />
                </div>

                {/* Leistung */}
                <div>
                  <label htmlFor="leistung" className="block text-small font-heading font-semibold text-charcoal mb-1.5">
                    {CONTACT_FORM.form.leistung.label} <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <select
                    id="leistung"
                    className={cn(inputClass, errors.leistung && 'border-red-400 focus:ring-red-400')}
                    aria-invalid={!!errors.leistung}
                    aria-describedby={errors.leistung ? 'leistung-error' : undefined}
                    {...register('leistung')}
                  >
                    <option value="">{CONTACT_FORM.form.leistung.placeholder}</option>
                    {CONTACT_FORM.form.leistung.options.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <FieldError id="leistung-error" message={errors.leistung?.message} />
                </div>

                {/* Nachricht */}
                <div>
                  <label htmlFor="nachricht" className="block text-small font-heading font-semibold text-charcoal mb-1.5">
                    {CONTACT_FORM.form.nachricht.label} <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="nachricht"
                    rows={5}
                    placeholder={CONTACT_FORM.form.nachricht.placeholder}
                    className={cn(inputClass, 'resize-none', errors.nachricht && 'border-red-400 focus:ring-red-400')}
                    aria-invalid={!!errors.nachricht}
                    aria-describedby={errors.nachricht ? 'nachricht-error' : undefined}
                    {...register('nachricht')}
                  />
                  <FieldError id="nachricht-error" message={errors.nachricht?.message} />
                </div>

                {/* Datenschutz */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      className="mt-1 w-4 h-4 accent-green-500 shrink-0"
                      aria-invalid={!!errors.datenschutz}
                      aria-describedby={errors.datenschutz ? 'datenschutz-error' : undefined}
                      {...register('datenschutz')}
                    />
                    <span className="text-small text-muted group-hover:text-charcoal transition-colors">
                      {CONTACT_FORM.form.datenschutz.prefix}{' '}
                      <a href="/datenschutz" className="text-green-500 underline hover:text-green-600">
                        {CONTACT_FORM.form.datenschutz.linkText}
                      </a>{' '}
                      {CONTACT_FORM.form.datenschutz.suffix} <span className="text-red-500" aria-hidden="true">*</span>
                    </span>
                  </label>
                  <FieldError id="datenschutz-error" message={errors.datenschutz?.message} />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full mt-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" aria-hidden="true" />
                      {CONTACT_FORM.submitting}
                    </>
                  ) : (
                    CONTACT_FORM.submit
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
