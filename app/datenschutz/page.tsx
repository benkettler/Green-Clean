import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung von Green & Clean.',
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-h3 font-heading font-bold text-charcoal mb-4">{title}</h2>
      <div className="flex flex-col gap-3 text-body text-muted leading-relaxed">{children}</div>
    </div>
  )
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-heading font-semibold text-charcoal mb-2">{title}</h3>
      <div className="flex flex-col gap-3 text-body text-muted leading-relaxed">{children}</div>
    </div>
  )
}

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-green-500 hover:text-green-600 transition-colors break-all"
    >
      {children}
    </a>
  )
}

export default function DatenschutzPage() {
  return (
    <>
      <section className="bg-green-500 py-16">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-small font-heading font-semibold uppercase tracking-widest text-green-200 block mb-3">
            Rechtliche Hinweise
          </span>
          <h1 className="text-h1 font-heading font-bold text-white">Datenschutzerklärung</h1>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max max-w-3xl">
          <div className="bg-white rounded-2xl shadow-card p-8 lg:p-12 flex flex-col gap-10">

            <p className="text-body text-muted leading-relaxed">
              Personenbezogene Daten (nachfolgend zumeist nur &bdquo;Daten&rdquo; genannt) werden von uns nur im
              Rahmen der Erforderlichkeit sowie zum Zwecke der Bereitstellung eines funktionsfähigen
              und nutzerfreundlichen Internetauftritts, inklusive seiner Inhalte und der dort
              angebotenen Leistungen, verarbeitet.
            </p>
            <p className="text-body text-muted leading-relaxed -mt-6">
              Gemäß Art. 4 Ziffer 1. der Verordnung (EU) 2016/679, also der
              Datenschutz-Grundverordnung (nachfolgend nur &bdquo;DSGVO&rdquo; genannt), gilt als
              &bdquo;Verarbeitung&rdquo; jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführter
              Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten,
              wie das Erheben, das Erfassen, die Organisation, das Ordnen, die Speicherung, die
              Anpassung oder Veränderung, das Auslesen, das Abfragen, die Verwendung, die
              Offenlegung durch Übermittlung, Verbreitung oder eine andere Form der Bereitstellung,
              den Abgleich oder die Verknüpfung, die Einschränkung, das Löschen oder die
              Vernichtung.
            </p>

            <div className="border border-border rounded-xl p-5 text-body text-muted">
              <p className="font-heading font-semibold text-charcoal mb-2">Gliederung</p>
              <ol className="list-decimal list-inside flex flex-col gap-1">
                <li>Informationen über uns als Verantwortliche</li>
                <li>Rechte der Nutzer und Betroffenen</li>
                <li>Informationen zur Datenverarbeitung</li>
              </ol>
            </div>

            <Section title="I. Informationen über uns als Verantwortliche">
              <p>Verantwortlicher Anbieter dieses Internetauftritts im datenschutzrechtlichen Sinne ist:</p>
              <p className="text-charcoal">
                Green &amp; Clean<br />
                Jan Kettler<br />
                c/o Postflex #10122 Emsdettener Str. 10<br />
                48268 Greven<br />
                Telefon: 0151 70059839<br />
                E-Mail:{' '}
                <a href="mailto:info@greenundclean.com" className="text-green-500 hover:text-green-600 transition-colors">
                  info@greenundclean.com
                </a>
              </p>
            </Section>

            <Section title="II. Rechte der Nutzer und Betroffenen">
              <p>
                Mit Blick auf die nachfolgend noch näher beschriebene Datenverarbeitung haben die
                Nutzer und Betroffenen das Recht:
              </p>
              <ul className="list-disc list-inside flex flex-col gap-2 pl-2">
                <li>auf Bestätigung, ob sie betreffende Daten verarbeitet werden, auf Auskunft über die verarbeiteten Daten, auf weitere Informationen über die Datenverarbeitung sowie auf Kopien der Daten (vgl. auch Art. 15 DSGVO);</li>
                <li>auf Berichtigung oder Vervollständigung unrichtiger bzw. unvollständiger Daten (vgl. auch Art. 16 DSGVO);</li>
                <li>auf unverzügliche Löschung der sie betreffenden Daten (vgl. auch Art. 17 DSGVO), oder, alternativ, soweit eine weitere Verarbeitung gemäß Art. 17 Abs. 3 DSGVO erforderlich ist, auf Einschränkung der Verarbeitung nach Maßgabe von Art. 18 DSGVO;</li>
                <li>auf Erhalt der sie betreffenden und von ihnen bereitgestellten Daten und auf Übermittlung dieser Daten an andere Anbieter/Verantwortliche (vgl. auch Art. 20 DSGVO);</li>
                <li>auf Beschwerde gegenüber der Aufsichtsbehörde, sofern sie der Ansicht sind, dass die sie betreffenden Daten durch den Anbieter unter Verstoß gegen datenschutzrechtliche Bestimmungen verarbeitet werden (vgl. auch Art. 77 DSGVO).</li>
              </ul>
              <p>
                Darüber hinaus ist der Anbieter dazu verpflichtet, alle Empfänger, denen gegenüber
                Daten durch den Anbieter offengelegt worden sind, über jedwede Berichtigung oder
                Löschung von Daten oder die Einschränkung der Verarbeitung, die aufgrund der
                Artikel 16, 17 Abs. 1, 18 DSGVO erfolgt, zu unterrichten.
              </p>
              <p>
                Ebenfalls haben die Nutzer und Betroffenen nach Art. 21 DSGVO das Recht auf
                Widerspruch gegen die künftige Verarbeitung der sie betreffenden Daten, sofern die
                Daten durch den Anbieter nach Maßgabe von Art. 6 Abs. 1 lit. f) DSGVO verarbeitet
                werden. Insbesondere ist ein Widerspruch gegen die Datenverarbeitung zum Zwecke der
                Direktwerbung statthaft.
              </p>
            </Section>

            <Section title="III. Informationen zur Datenverarbeitung">
              <p>
                Ihre bei Nutzung unseres Internetauftritts verarbeiteten Daten werden gelöscht oder
                gesperrt, sobald der Zweck der Speicherung entfällt, der Löschung der Daten keine
                gesetzlichen Aufbewahrungspflichten entgegenstehen und nachfolgend keine
                anderslautenden Angaben zu einzelnen Verarbeitungsverfahren gemacht werden.
              </p>

              <SubSection title="Cookie Manager">
                <p>
                  Zur Einholung einer Einwilligung zum Einsatz von technisch nicht notwendigen
                  Cookies auf der Website setzt der Anbieter einen Cookie-Manager ein. Bei dem
                  Aufruf der Website wird ein Cookie mit den Einstellungsinformationen auf dem
                  Endgerät des Nutzers abgelegt, sodass bei einem weiteren Besuch die Abfrage
                  nicht erfolgen muss. Das Cookie ist erforderlich um eine rechtskonforme
                  Einwilligung des Nutzers einzuholen. Die Installation der Cookies kann der
                  Nutzer durch Einstellungen seines Browsers verhindern bzw. beenden.
                </p>
              </SubSection>

              <SubSection title="Cookies">
                <p><strong>a) Sitzungs-Cookies/Session-Cookies</strong></p>
                <p>
                  Wir verwenden mit unserem Internetauftritt sog. Cookies. Cookies sind kleine
                  Textdateien oder andere Speichertechnologien, die durch den von Ihnen eingesetzten
                  Internet-Browser auf Ihrem Endgerät abgelegt und gespeichert werden. Durch diese
                  Cookies werden im individuellen Umfang bestimmte Informationen von Ihnen, wie
                  beispielsweise Ihre Browser- oder Standortdaten oder Ihre IP-Adresse, verarbeitet.
                </p>
                <p>
                  Rechtsgrundlage dieser Verarbeitung ist Art. 6 Abs. 1 lit b.) DSGVO, sofern diese
                  Cookies Daten zur Vertragsanbahnung oder Vertragsabwicklung verarbeitet werden.
                  Falls die Verarbeitung nicht der Vertragsanbahnung oder Vertragsabwicklung dient,
                  liegt unser berechtigtes Interesse in der Verbesserung der Funktionalität unseres
                  Internetauftritts. Rechtsgrundlage ist dann Art. 6 Abs. 1 lit. f) DSGVO. Mit
                  Schließen Ihres Internet-Browsers werden diese Session-Cookies gelöscht.
                </p>
                <p><strong>b) Drittanbieter-Cookies</strong></p>
                <p>
                  Gegebenenfalls werden mit unserem Internetauftritt auch Cookies von
                  Partnerunternehmen, mit denen wir zum Zwecke der Werbung, der Analyse oder der
                  Funktionalitäten unseres Internetauftritts zusammenarbeiten, verwendet.
                </p>
                <p><strong>c) Beseitigungsmöglichkeit</strong></p>
                <p>
                  Sie können die Installation der Cookies durch eine Einstellung Ihres
                  Internet-Browsers verhindern oder einschränken. Ebenfalls können Sie bereits
                  gespeicherte Cookies jederzeit löschen. Die hierfür erforderlichen Schritte und
                  Maßnahmen hängen jedoch von Ihrem konkret genutzten Internet-Browser ab.
                </p>
              </SubSection>

              <SubSection title="Kontaktanfragen / Kontaktmöglichkeit">
                <p>
                  Sofern Sie per Kontaktformular oder E-Mail mit uns in Kontakt treten, werden die
                  dabei von Ihnen angegebenen Daten zur Bearbeitung Ihrer Anfrage genutzt. Die
                  Angabe der Daten ist zur Bearbeitung und Beantwortung Ihrer Anfrage erforderlich.
                  Rechtsgrundlage für diese Verarbeitung ist Art. 6 Abs. 1 lit. b) DSGVO. Ihre
                  Daten werden gelöscht, sofern Ihre Anfrage abschließend beantwortet worden ist und
                  der Löschung keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
                </p>
              </SubSection>

              <SubSection title="Serverdaten">
                <p>
                  Aus technischen Gründen, insbesondere zur Gewährleistung eines sicheren und
                  stabilen Internetauftritts, werden Daten durch Ihren Internet-Browser an uns bzw.
                  an unseren Webspace-Provider übermittelt. Mit diesen sog. Server-Logfiles werden
                  u.a. Typ und Version Ihres Internetbrowsers, das Betriebssystem, die Website, von
                  der aus Sie auf unseren Internetauftritt gewechselt haben (Referrer URL), die
                  Website(s) unseres Internetauftritts, die Sie besuchen, Datum und Uhrzeit des
                  jeweiligen Zugriffs sowie die IP-Adresse des Internetanschlusses erhoben.
                </p>
                <p>
                  Diese Speicherung erfolgt auf der Rechtsgrundlage von Art. 6 Abs. 1 lit. f)
                  DSGVO. Unser berechtigtes Interesse liegt in der Verbesserung, Stabilität,
                  Funktionalität und Sicherheit unseres Internetauftritts. Die Daten werden
                  spätestens nach sieben Tagen wieder gelöscht, soweit keine weitere Aufbewahrung
                  zu Beweiszwecken erforderlich ist.
                </p>
              </SubSection>

              <SubSection title="Google Analytics">
                <p>
                  Wir nutzen auf unserer Webseite Google Analytics, einen Webanalysedienst der
                  Firma Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
                  Rechtsgrundlage ist hierbei Art. 6 Abs. 1 lit. a DSGVO. Der Nutzer kann seine
                  Einwilligung jederzeit über die Cookie-Einstellungen widerrufen. Google LLC ist
                  Teil des &bdquo;Data Privacy Framework&rdquo;:{' '}
                  <ExternalLink href="https://www.dataprivacyframework.gov/list">
                    dataprivacyframework.gov/list
                  </ExternalLink>
                </p>
                <p>
                  Wir setzen Google Analytics mit einer Anonymisierungsfunktion ein. Dadurch wird
                  die IP-Adresse des Nutzers von Google innerhalb der EU-Mitgliedstaaten oder in
                  anderen Vertragsstaaten des EWR-Abkommens gekürzt. Weiterführende Informationen
                  bietet Google unter:{' '}
                  <ExternalLink href="https://www.google.com/intl/de/policies/privacy/partners">
                    google.com/intl/de/policies/privacy/partners
                  </ExternalLink>
                </p>
              </SubSection>

              <SubSection title="Google Fonts">
                <p>
                  In unserem Internetauftritt setzen wir Google Fonts zur Darstellung externer
                  Schriftarten ein. Es handelt sich hierbei um einen Dienst der Google Ireland
                  Limited, Gordon House, Barrow Street, Dublin 4, Irland. Rechtsgrundlage ist
                  Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes Interesse liegt in der
                  Optimierung und dem wirtschaftlichen Betrieb unseres Internetauftritts. Weitere
                  Informationen:{' '}
                  <ExternalLink href="https://policies.google.com/privacy">
                    policies.google.com/privacy
                  </ExternalLink>
                </p>
              </SubSection>

              <SubSection title="Google reCAPTCHA">
                <p>
                  In unserem Internetauftritt setzen wir Google reCAPTCHA zur Überprüfung und
                  Vermeidung von Interaktionen durch automatisierte Zugriffe ein. Rechtsgrundlage
                  ist Art. 6 Abs. 1 lit. f) DSGVO. Weitere Informationen:{' '}
                  <ExternalLink href="https://policies.google.com/privacy">
                    policies.google.com/privacy
                  </ExternalLink>
                </p>
              </SubSection>

              <SubSection title="WhatsApp Kontaktaufnahme">
                <p>
                  Zur Kontaktaufnahme ermöglicht der Anbieter dem Kunden unter anderem die
                  Kontaktmöglichkeit über den Messenger-Dienst WhatsApp (WhatsApp Ireland Limited,
                  4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland). Durch die
                  Kommunikation über WhatsApp erhält sowohl der Anbieter als auch WhatsApp die
                  Mobilrufnummer des Nutzers. Rechtsgrundlage ist Art. 6 Abs. 1 S. 1 b. DSGVO
                  bzw. Art. 6 Abs. 1 lit. f DSGVO. Weitere Informationen:{' '}
                  <ExternalLink href="https://www.whatsapp.com/legal/#privacy-policy">
                    whatsapp.com/legal/#privacy-policy
                  </ExternalLink>
                </p>
              </SubSection>
            </Section>

            <p className="text-small text-muted border-t border-border pt-6">
              Muster-Datenschutzerklärung der Anwaltskanzlei Weiß &amp; Partner
            </p>

          </div>
        </div>
      </section>
    </>
  )
}
