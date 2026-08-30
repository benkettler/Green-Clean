import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="section-padding bg-background flex items-center justify-center min-h-[60vh]">
      <div className="container-max max-w-lg text-center flex flex-col items-center gap-6">
        <p className="text-6xl font-heading font-bold text-green-800">404</p>
        <h1 className="text-2xl font-heading font-bold text-charcoal">
          Seite nicht gefunden
        </h1>
        <p className="text-muted leading-relaxed">
          Diese Seite existiert leider nicht. Vielleicht hilft dir einer der folgenden Links weiter.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/" className="btn-primary">Zur Startseite</Link>
          <Link href="/leistungen/" className="btn-secondary">Unsere Leistungen</Link>
          <Link href="/kontakt/" className="btn-secondary">Kontakt</Link>
        </div>
      </div>
    </section>
  )
}
