import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum und rechtliche Hinweise von Green & Clean.',
}

export default function ImpressumPage() {
  return (
    <>
      <section className="bg-green-500 py-16">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-small font-heading font-semibold uppercase tracking-widest text-green-200 block mb-3">
            Rechtliche Hinweise
          </span>
          <h1 className="text-h1 font-heading font-bold text-white">Impressum</h1>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max max-w-3xl">
          <div className="bg-white rounded-2xl shadow-card p-8 lg:p-12 flex flex-col gap-10 text-body text-charcoal leading-relaxed">

            <div>
              <h2 className="text-h3 font-heading font-bold text-charcoal mb-4">
                Angaben gemäß § 5 TMG
              </h2>
              <p>
                Green &amp; Clean Inh. Jan Kettler<br />
                Emsdettener Straße 10<br />
                c/o Postflex #10122<br />
                48268 Greven
              </p>
            </div>

            <div>
              <h2 className="text-h3 font-heading font-bold text-charcoal mb-4">Kontakt</h2>
              <p>
                Telefon:{' '}
                <a href="tel:+4915170059839" className="text-green-500 hover:text-green-600 transition-colors">
                  015170059839
                </a>
                <br />
                E-Mail:{' '}
                <a href="mailto:info@greenundclean.com" className="text-green-500 hover:text-green-600 transition-colors">
                  info@greenundclean.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-h3 font-heading font-bold text-charcoal mb-4">
                Umsatzsteuer-ID
              </h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                DE458823353
              </p>
            </div>

            <div>
              <h2 className="text-h3 font-heading font-bold text-charcoal mb-4">
                Verbraucherstreitbeilegung / Universalschlichtungsstelle
              </h2>
              <p>
                Wir nehmen an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                teil. Zuständig ist die Universalschlichtungsstelle des Zentrums für Schlichtung e.V.,
                Straßburger Straße 8, 77694 Kehl am Rhein (
                <a
                  href="https://www.verbraucher-schlichter.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-600 transition-colors"
                >
                  www.verbraucher-schlichter.de
                </a>
                ).
              </p>
            </div>

            <div>
              <h2 className="text-h3 font-heading font-bold text-charcoal mb-4">
                Zentrale Kontaktstelle nach dem Digital Services Act (DSA)
              </h2>
              <p className="mb-3">
                Unsere zentrale Kontaktstelle für Nutzer und Behörden nach Art. 11, 12 DSA
                erreichen Sie wie folgt:
              </p>
              <p>
                E-Mail:{' '}
                <a href="mailto:info@greenundclean.com" className="text-green-500 hover:text-green-600 transition-colors">
                  info@greenundclean.com
                </a>
                <br />
                Telefon:{' '}
                <a href="tel:+4915170059839" className="text-green-500 hover:text-green-600 transition-colors">
                  015170059839
                </a>
              </p>
              <p className="mt-3">
                Die für den Kontakt zur Verfügung stehenden Sprachen sind: Deutsch, Englisch.
              </p>
            </div>

            <div>
              <h2 className="text-h3 font-heading font-bold text-charcoal mb-4">
                Haftungsausschluss
              </h2>
              <h3 className="font-heading font-semibold text-charcoal mb-2">Haftung für Inhalte</h3>
              <p className="mb-4">
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen
                Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
                als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
                rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="mb-6">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
                allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
                jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
                Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte
                umgehend entfernen.
              </p>
              <h3 className="font-heading font-semibold text-charcoal mb-2">Haftung für Links</h3>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
                keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
                Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
                Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum
                Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
                Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
            </div>

            <div>
              <h2 className="text-h3 font-heading font-bold text-charcoal mb-4">Urheberrecht</h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts
                bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen
                Gebrauch gestattet.
              </p>
            </div>

            <p className="text-small text-muted border-t border-border pt-6">
              Quelle: e-recht24.de
            </p>

          </div>
        </div>
      </section>
    </>
  )
}
