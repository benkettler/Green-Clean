'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2, CheckCircle, ChevronDown } from 'lucide-react'
import { winterdienstAnfrageSchema, type WinterdienstAnfrageData } from '@/lib/validators'
import Button from '@/components/ui/Button'
import { cn } from '@/components/ui/cn'

const inputClass = cn(
  'w-full border border-border rounded-xl px-4 py-3 text-charcoal bg-white',
  'focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200',
  'placeholder:text-muted/60'
)

const labelClass = 'block text-sm font-semibold text-charcoal mb-1.5'
const errorClass = 'text-sm text-red-600 mt-1'

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} className={errorClass} role="alert">
      {message}
    </p>
  )
}

const OBJEKTART_OPTIONS = [
  { value: 'privat', label: 'Privat' },
  { value: 'verwaltung', label: 'Verwaltung' },
  { value: 'gewerbe', label: 'Gewerbe' },
] as const

const FLAECHEN_OPTIONS = [
  'Gehwege & Hauszugänge',
  'Einfahrten & Zufahrten',
  'Höfe & Parkflächen',
  'Streudienst bei Glätte',
]

export default function WinterdienstAnfrageForm() {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)
  const [fileError, setFileError] = useState<string | null>(null)
  const [fileName, setFileName] = useState<string | null>(null)

  useEffect(() => {
    function checkHash() {
      if (window.location.hash === '#anfrage') setOpen(true)
    }
    checkHash()
    window.addEventListener('hashchange', checkHash)
    return () => window.removeEventListener('hashchange', checkHash)
  }, [])

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<WinterdienstAnfrageData>({
    resolver: zodResolver(winterdienstAnfrageSchema),
    defaultValues: { flaechen: [] },
  })

  const selectedObjektart = watch('objektart')

  function validateFile(file: File | undefined): boolean {
    setFileError(null)
    if (!file) return true
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp']
    const maxSize = 5 * 1024 * 1024
    if (!allowedTypes.includes(file.type)) {
      setFileError('Bitte nur JPG, PNG oder WebP hochladen.')
      return false
    }
    if (file.size > maxSize) {
      setFileError('Die Datei darf maximal 5 MB groß sein.')
      return false
    }
    setFileName(file.name)
    return true
  }

  async function onSubmit(data: WinterdienstAnfrageData) {
    setServerError(null)
    const fileInput = document.getElementById('foto') as HTMLInputElement | null
    const file = fileInput?.files?.[0]
    if (file && !validateFile(file)) return

    const formData = new FormData()
    formData.append('objektart', data.objektart)
    data.flaechen.forEach((f) => formData.append('flaechen[]', f))
    formData.append('plzOrt', data.plzOrt)
    formData.append('flaecheGroesse', data.flaecheGroesse ?? '')
    formData.append('zeitraum', data.zeitraum ?? '')
    formData.append('name', data.name)
    formData.append('telefon', data.telefon ?? '')
    formData.append('email', data.email ?? '')
    formData.append('nachricht', data.nachricht ?? '')
    if (file) formData.append('foto', file)

    const res = await fetch('/winterdienst-anfrage.php', {
      method: 'POST',
      body: formData,
    })
    if (res.ok) {
      setSubmitted(true)
    } else {
      setServerError('Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder rufen Sie uns direkt an.')
    }
  }

  return (
    <section id="anfrage" className="section-padding scroll-mt-20 bg-white">
      <div className="container-max max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-charcoal mb-2 text-center">
          Jetzt kostenloses Winterdienst-Angebot anfordern
        </h2>
        <p className="text-muted leading-relaxed mb-8 text-center">
          Teilen Sie uns einfach die wichtigsten Informationen zu Ihrem Objekt mit. Wir prüfen Ihre Anfrage und melden uns persönlich bei Ihnen.
        </p>

        {!open ? (
          <div className="flex justify-center">
            <Button type="button" size="lg" onClick={() => setOpen(true)} className="gap-2">
              Kostenloses Winterdienst-Angebot anfordern
              <ChevronDown size={18} aria-hidden="true" />
            </Button>
          </div>
        ) : (
        <div className="bg-white rounded-3xl shadow-card border border-border p-6 sm:p-10">
          {!submitted && (
            <div className="flex justify-end mb-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-charcoal transition-colors"
              >
                Formular schließen
                <ChevronDown size={16} className="rotate-180" aria-hidden="true" />
              </button>
            </div>
          )}
          {submitted ? (
            <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-charcoal">Vielen Dank!</h3>
              <p className="text-muted max-w-sm">
                Ihre Anfrage ist bei uns eingegangen. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
              {/* Objektart */}
              <div>
                <label className={labelClass}>
                  Objektart <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {OBJEKTART_OPTIONS.map((opt) => (
                    <label
                      key={opt.value}
                      className={cn(
                        'flex items-center justify-center text-center px-3 py-2.5 rounded-xl border cursor-pointer text-sm font-medium transition-colors',
                        selectedObjektart === opt.value
                          ? 'bg-green-800 border-green-800 text-white'
                          : 'border-border text-charcoal hover:border-green-400'
                      )}
                    >
                      <input type="radio" value={opt.value} className="sr-only" {...register('objektart')} />
                      {opt.label}
                    </label>
                  ))}
                </div>
                <FieldError id="objektart-error" message={errors.objektart?.message} />
              </div>

              {/* Flächen */}
              <div>
                <label className={labelClass}>
                  Zu räumende Flächen <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <div className="flex flex-col gap-2">
                  {FLAECHEN_OPTIONS.map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        value={option}
                        className="w-4 h-4 accent-green-600 shrink-0"
                        {...register('flaechen')}
                      />
                      <span className="text-charcoal text-sm">{option}</span>
                    </label>
                  ))}
                </div>
                <FieldError id="flaechen-error" message={errors.flaechen?.message} />
              </div>

              {/* PLZ und Ort */}
              <div>
                <label htmlFor="plzOrt" className={labelClass}>
                  PLZ und Ort <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  id="plzOrt"
                  type="text"
                  placeholder="z. B. 55116 Mainz"
                  className={cn(inputClass, errors.plzOrt && 'border-red-400 focus:ring-red-400')}
                  aria-invalid={!!errors.plzOrt}
                  aria-describedby={errors.plzOrt ? 'plzOrt-error' : undefined}
                  {...register('plzOrt')}
                />
                <FieldError id="plzOrt-error" message={errors.plzOrt?.message} />
              </div>

              {/* Größe + Zeitraum */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="flaecheGroesse" className={labelClass}>
                    Länge oder Quadratmeterzahl <span className="text-muted font-normal">(optional)</span>
                  </label>
                  <input
                    id="flaecheGroesse"
                    type="text"
                    placeholder="z. B. 50 m²"
                    className={inputClass}
                    {...register('flaecheGroesse')}
                  />
                </div>
                <div>
                  <label htmlFor="zeitraum" className={labelClass}>
                    Gewünschter Zeitraum <span className="text-muted font-normal">(optional)</span>
                  </label>
                  <input
                    id="zeitraum"
                    type="text"
                    placeholder="z. B. ab sofort"
                    className={inputClass}
                    {...register('zeitraum')}
                  />
                </div>
              </div>

              {/* Name */}
              <div>
                <label htmlFor="name" className={labelClass}>
                  Name <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Max Mustermann"
                  className={cn(inputClass, errors.name && 'border-red-400 focus:ring-red-400')}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  {...register('name')}
                />
                <FieldError id="name-error" message={errors.name?.message} />
              </div>

              {/* Telefon + E-Mail */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="telefon" className={labelClass}>
                    Telefonnummer
                  </label>
                  <input
                    id="telefon"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+49 ..."
                    className={cn(inputClass, errors.telefon && 'border-red-400 focus:ring-red-400')}
                    {...register('telefon')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>
                    E-Mail-Adresse
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="max@beispiel.de"
                    className={inputClass}
                    {...register('email')}
                  />
                </div>
              </div>
              <FieldError id="telefon-error" message={errors.telefon?.message} />

              {/* Nachricht */}
              <div>
                <label htmlFor="nachricht" className={labelClass}>
                  Zusätzliche Nachricht <span className="text-muted font-normal">(optional)</span>
                </label>
                <textarea
                  id="nachricht"
                  rows={4}
                  placeholder="Weitere Details zu Ihrem Anliegen …"
                  className={cn(inputClass, 'resize-none')}
                  {...register('nachricht')}
                />
              </div>

              {/* Foto-Upload */}
              <div>
                <label htmlFor="foto" className={labelClass}>
                  Foto <span className="text-muted font-normal">(optional)</span>
                </label>
                <input
                  id="foto"
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={(e) => validateFile(e.target.files?.[0])}
                  className="w-full text-sm text-muted file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-green-50 file:text-green-700 file:font-semibold hover:file:bg-green-100"
                />
                {fileName && !fileError && <p className="text-sm text-muted mt-1">{fileName}</p>}
                {fileError && <p className={errorClass} role="alert">{fileError}</p>}
              </div>

              {/* Datenschutz */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 accent-green-600 shrink-0"
                    aria-invalid={!!errors.datenschutz}
                    aria-describedby={errors.datenschutz ? 'datenschutz-error' : undefined}
                    {...register('datenschutz')}
                  />
                  <span className="text-sm text-muted group-hover:text-charcoal transition-colors">
                    Ich stimme der{' '}
                    <a href="/datenschutz" className="text-green-700 underline hover:text-green-800">
                      Datenschutzerklärung
                    </a>{' '}
                    zu. <span className="text-red-500" aria-hidden="true">*</span>
                  </span>
                </label>
                <FieldError id="datenschutz-error" message={errors.datenschutz?.message} />
              </div>

              {serverError && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3" role="alert">
                  {serverError}
                </p>
              )}

              <Button type="submit" size="lg" disabled={isSubmitting} className="w-full mt-2">
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" aria-hidden="true" />
                    Wird gesendet …
                  </>
                ) : (
                  'Kostenloses Winterdienst-Angebot anfordern'
                )}
              </Button>
            </form>
          )}
        </div>
        )}
      </div>
    </section>
  )
}
