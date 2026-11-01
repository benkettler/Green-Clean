import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung von Green & Clean.',
  robots: { index: false, follow: false },
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-heading font-bold text-charcoal mt-2">{children}</h2>
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="font-heading font-semibold text-charcoal mt-1">{children}</h3>
}

function H4({ children }: { children: React.ReactNode }) {
  return <h4 className="font-semibold text-charcoal">{children}</h4>
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-body text-muted leading-relaxed">{children}</p>
}

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors break-all">
      {children}
    </a>
  )
}

export default function DatenschutzPage() {
  return (
    <>
      <section className="bg-green-800 py-16">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-small font-heading font-semibold uppercase tracking-widest text-green-200 block mb-3">
            Rechtliche Hinweise
          </span>
          <h1 className="text-h1 font-heading font-bold text-white">Datenschutzerklärung</h1>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max max-w-3xl">
          <div className="bg-white rounded-2xl shadow-card p-8 lg:p-12 flex flex-col gap-6">

            <p className="text-small text-muted">Stand: November 2026</p>

            <H2>1. Datenschutz auf einen Blick</H2>

            <H3>Allgemeine Hinweise</H3>
            <P>Die folgenden Hinweise geben einen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen.</P>
            <P>Personenbezogene Daten sind alle Informationen, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Datenschutz finden Sie in den nachfolgenden Abschnitten dieser Datenschutzerklärung.</P>

            <H3>Datenerfassung auf dieser Website</H3>
            <H4>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</H4>
            <P>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber Green &amp; Clean, Inhaber Jan Kettler. Die vollständigen Kontaktdaten finden Sie im Abschnitt &bdquo;Verantwortliche Stelle&ldquo;.</P>

            <H4>Wie erfassen wir Ihre Daten?</H4>
            <P>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich beispielsweise um Informationen handeln, die Sie über unser Kontaktformular, per E-Mail oder telefonisch übermitteln.</P>
            <P>Andere Daten werden automatisch beim Besuch unserer Website durch die eingesetzten IT-Systeme erfasst. Dabei handelt es sich insbesondere um technische Daten wie den verwendeten Internetbrowser, das Betriebssystem, die IP-Adresse oder den Zeitpunkt des Seitenaufrufs.</P>
            <P>Soweit für bestimmte Datenverarbeitungen eine Einwilligung erforderlich ist, erfolgt die Verarbeitung erst nach Erteilung dieser Einwilligung.</P>

            <H4>Wofür nutzen wir Ihre Daten?</H4>
            <P>Ein Teil der Daten wird erhoben, um eine sichere, zuverlässige und fehlerfreie Bereitstellung unserer Website zu gewährleisten.</P>
            <P>Andere Daten können zur statistischen Auswertung der Websitezugriffe und zur Verbesserung unseres Internetauftritts verwendet werden.</P>
            <P>Sofern Sie uns kontaktieren, verarbeiten wir die übermittelten Daten zur Bearbeitung Ihrer Anfrage, zur Erstellung von Angeboten und gegebenenfalls zur Durchführung eines Auftrags.</P>

            <H4>Welche Rechte haben Sie bezüglich Ihrer Daten?</H4>
            <P>Sie haben jederzeit im Rahmen der gesetzlichen Bestimmungen das Recht, unentgeltlich Auskunft über die zu Ihrer Person gespeicherten Daten sowie deren Herkunft, Empfänger und Verarbeitungszwecke zu erhalten.</P>
            <P>Sie haben außerdem unter den gesetzlichen Voraussetzungen das Recht auf Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer personenbezogenen Daten.</P>
            <P>Eine bereits erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen.</P>
            <P>Darüber hinaus stehen Ihnen gegebenenfalls ein Recht auf Datenübertragbarkeit, ein Widerspruchsrecht sowie ein Beschwerderecht bei einer zuständigen Datenschutzaufsichtsbehörde zu.</P>

            <H3>Analyse-Tools und Werbung</H3>
            <P>Unsere Website nutzt IONOS WebAnalytics zur statistischen Auswertung der Websitezugriffe.</P>
            <P>Darüber hinaus verwenden wir Google Ads, um auf unsere Dienstleistungen aufmerksam zu machen. Nach dem derzeitigen technischen Stand unserer Website setzen wir hierfür keine eigenen Google-Ads-Conversion-Tracking- oder Remarketing-Tags und kein Google Analytics ein.</P>
            <P>Weitere Informationen zu den eingesetzten Diensten finden Sie in den nachfolgenden Abschnitten.</P>

            <hr className="border-border" />

            <H2>2. Hosting</H2>

            <H3>IONOS</H3>
            <P>Unsere Website wird bei folgendem Anbieter gehostet:</P>
            <p className="text-body text-charcoal leading-relaxed">
              IONOS SE<br />
              Elgendorfer Straße 57<br />
              56410 Montabaur<br />
              Deutschland
            </p>
            <P>Wenn Sie unsere Website besuchen, verarbeitet IONOS verschiedene technische Daten und Server-Logfiles.</P>
            <P>Hierzu können insbesondere gehören:</P>
            <ul className="list-disc list-inside flex flex-col gap-1 pl-2 text-body text-muted leading-relaxed">
              <li>IP-Adresse des zugreifenden Geräts</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Aufgerufene Webseiten und Dateien</li>
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer-URL (zuvor besuchte Website)</li>
              <li>Technische Verbindungsinformationen</li>
            </ul>
            <P>Die Verarbeitung dieser Daten erfolgt zur technischen Bereitstellung unserer Website, zur Gewährleistung der Systemsicherheit, zur Fehlererkennung sowie zum Schutz vor missbräuchlichen Zugriffen.</P>

            <H4>Rechtsgrundlage</H4>
            <P>Die Verwendung von IONOS erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.</P>
            <P>Unser berechtigtes Interesse besteht in einer möglichst zuverlässigen, sicheren und technisch fehlerfreien Bereitstellung unserer Website.</P>
            <P>Soweit im Zusammenhang mit bestimmten Funktionen eine Einwilligung erforderlich ist, erfolgt die entsprechende Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO sowie gegebenenfalls § 25 Abs. 1 TDDDG.</P>
            <P>Eine erteilte Einwilligung ist jederzeit mit Wirkung für die Zukunft widerrufbar.</P>

            <H4>Speicherdauer</H4>
            <P>Die Speicherung der Server-Logfiles erfolgt entsprechend den technischen Vorgaben und geltenden Aufbewahrungsfristen des Hosting-Anbieters. Die Daten werden gelöscht, sobald sie für die jeweiligen Zwecke nicht mehr erforderlich sind, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</P>
            <P>Weitere Informationen zur Datenverarbeitung durch IONOS finden Sie unter: <ExternalLink href="https://www.ionos.de/terms-gtc/datenschutzerklaerung/">www.ionos.de/terms-gtc/datenschutzerklaerung/</ExternalLink></P>

            <H4>Auftragsverarbeitung</H4>
            <P>Mit IONOS besteht ein Vertrag zur Auftragsverarbeitung gemäß Art. 28 DSGVO, soweit IONOS personenbezogene Daten in unserem Auftrag verarbeitet.</P>
            <P>Dieser Vertrag stellt sicher, dass die personenbezogenen Daten unserer Websitebesucher ausschließlich im Rahmen der vereinbarten Weisungen und unter Einhaltung der geltenden Datenschutzvorschriften verarbeitet werden.</P>

            <hr className="border-border" />

            <H2>3. Allgemeine Hinweise und Pflichtinformationen</H2>

            <H3>Datenschutz</H3>
            <P>Wir nehmen den Schutz Ihrer personenbezogenen Daten sehr ernst.</P>
            <P>Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den geltenden gesetzlichen Datenschutzvorschriften, insbesondere der Datenschutz-Grundverordnung (DSGVO), sowie dieser Datenschutzerklärung.</P>
            <P>Wenn Sie unsere Website nutzen, können verschiedene personenbezogene Daten erhoben und verarbeitet werden.</P>
            <P>Diese Datenschutzerklärung erläutert, welche Daten wir erheben, zu welchen Zwecken diese verarbeitet werden, auf welchen Rechtsgrundlagen die Verarbeitung beruht und welche Rechte Ihnen als betroffene Person zustehen.</P>
            <P>Wir weisen darauf hin, dass die Datenübertragung im Internet, beispielsweise bei der Kommunikation per E-Mail, Sicherheitslücken aufweisen kann. Ein vollständiger Schutz der Daten vor dem Zugriff durch unbefugte Dritte kann nicht garantiert werden.</P>

            <H3>Verantwortliche Stelle</H3>
            <P>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</P>
            <p className="text-body text-charcoal leading-relaxed">
              Green &amp; Clean<br />
              Inhaber: Jan Kettler<br />
              Emsdettener Straße 10<br />
              c/o Postflex #10122<br />
              48268 Greven<br />
              <br />
              Telefon: 0151 70059839<br />
              E-Mail: <a href="mailto:info@greenundclean.com" className="text-green-600 hover:text-green-700 transition-colors">info@greenundclean.com</a><br />
              Website: www.greenundclean.com
            </p>
            <P>Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung personenbezogener Daten entscheidet.</P>

            <H3>Allgemeine Rechtsgrundlagen der Datenverarbeitung</H3>
            <P>Sofern Sie in die Verarbeitung Ihrer personenbezogenen Daten eingewilligt haben, erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO.</P>
            <P>Soweit besondere Kategorien personenbezogener Daten im Sinne des Art. 9 Abs. 1 DSGVO verarbeitet werden und eine ausdrückliche Einwilligung vorliegt, kann Art. 9 Abs. 2 lit. a DSGVO einschlägig sein.</P>
            <P>Sofern Ihre personenbezogenen Daten zur Erfüllung eines Vertrags oder zur Durchführung vorvertraglicher Maßnahmen erforderlich sind, erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.</P>
            <P>Soweit eine gesetzliche Verpflichtung besteht, verarbeiten wir personenbezogene Daten auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO.</P>
            <P>Darüber hinaus kann eine Verarbeitung auf Grundlage unseres berechtigten Interesses gemäß Art. 6 Abs. 1 lit. f DSGVO erfolgen, soweit die gesetzlichen Voraussetzungen hierfür vorliegen.</P>
            <P>Soweit wir Cookies oder vergleichbare Technologien einsetzen, die Informationen auf Ihrem Endgerät speichern oder auf bereits gespeicherte Informationen zugreifen, gelten ergänzend die Vorschriften des § 25 TDDDG.</P>
            <P>Eine erforderliche Einwilligung erfolgt auf Grundlage von § 25 Abs. 1 TDDDG. Für unbedingt erforderliche Technologien kann die Ausnahme nach § 25 Abs. 2 TDDDG gelten.</P>
            <P>Im Falle einer ausdrücklich erteilten Einwilligung in eine bestimmte Drittlandübermittlung kann unter den gesetzlichen Voraussetzungen Art. 49 Abs. 1 lit. a DSGVO einschlägig sein.</P>
            <P>Die jeweils maßgeblichen Rechtsgrundlagen werden in den einzelnen Abschnitten dieser Datenschutzerklärung erläutert.</P>

            <H3>Speicherdauer</H3>
            <P>Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wird, verbleiben Ihre personenbezogenen Daten bei uns, solange dies zur Erfüllung des jeweiligen Verarbeitungszwecks erforderlich ist.</P>
            <P>Wenn Sie ein berechtigtes Löschungsersuchen stellen oder eine erteilte Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern keine anderen rechtlich zulässigen Gründe für eine weitere Speicherung bestehen.</P>
            <P>Hierzu zählen insbesondere gesetzliche steuer- oder handelsrechtliche Aufbewahrungspflichten.</P>
            <P>Nach Fortfall der jeweiligen Aufbewahrungsgründe werden die Daten gelöscht.</P>

            <H3>Empfänger personenbezogener Daten</H3>
            <P>Im Rahmen unserer Geschäftstätigkeit arbeiten wir gegebenenfalls mit externen Dienstleistern zusammen.</P>
            <P>Eine Übermittlung personenbezogener Daten an diese Stellen erfolgt ausschließlich, soweit dies für die Vertragserfüllung erforderlich ist, eine gesetzliche Verpflichtung besteht, ein berechtigtes Interesse gemäß Art. 6 Abs. 1 lit. f DSGVO vorliegt oder eine andere Rechtsgrundlage die Weitergabe erlaubt.</P>
            <P>Hierzu können beispielsweise Hosting-Anbieter, technische Dienstleister oder steuerliche und buchhalterische Dienstleister gehören.</P>
            <P>Soweit externe Dienstleister personenbezogene Daten in unserem Auftrag verarbeiten, erfolgt dies auf Grundlage eines Vertrags zur Auftragsverarbeitung gemäß Art. 28 DSGVO, sofern ein solcher gesetzlich erforderlich ist.</P>
            <P>Im Falle einer gemeinsamen Verantwortlichkeit werden die entsprechenden gesetzlichen Anforderungen, insbesondere Art. 26 DSGVO, beachtet.</P>

            <H3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</H3>
            <P>Verschiedene Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung zulässig.</P>
            <P>Sie können eine bereits erteilte Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.</P>
            <P>Die Rechtmäßigkeit der bis zum Zeitpunkt des Widerrufs erfolgten Datenverarbeitung bleibt hiervon unberührt.</P>

            <H3>Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</H3>

            <H4>Widerspruch im Einzelfall</H4>
            <P>Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen. Dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling.</P>
            <P>Wenn Sie Widerspruch einlegen, werden wir Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</P>

            <H4>Widerspruch gegen Direktwerbung</H4>
            <P>Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen.</P>
            <P>Dies gilt auch für Profiling, soweit es mit solcher Direktwerbung in Verbindung steht.</P>
            <P>Wenn Sie widersprechen, werden Ihre personenbezogenen Daten anschließend nicht mehr für Zwecke der Direktwerbung verwendet.</P>

            <H3>Beschwerderecht bei der zuständigen Aufsichtsbehörde</H3>
            <P>Im Falle datenschutzrechtlicher Verstöße steht betroffenen Personen ein Beschwerderecht bei einer zuständigen Datenschutzaufsichtsbehörde zu.</P>
            <P>Das Beschwerderecht kann insbesondere bei einer Aufsichtsbehörde des Mitgliedstaats des gewöhnlichen Aufenthalts, des Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes ausgeübt werden.</P>
            <P>Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</P>
            <P>Für Rheinland-Pfalz ist folgende Aufsichtsbehörde zuständig:</P>
            <p className="text-body text-charcoal leading-relaxed">
              Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Rheinland-Pfalz<br />
              <br />
              Besucheradresse:<br />
              Hintere Bleiche 34<br />
              55116 Mainz<br />
              <br />
              Postanschrift:<br />
              Postfach 30 40<br />
              55020 Mainz<br />
              <br />
              Website: <ExternalLink href="https://www.datenschutz.rlp.de">www.datenschutz.rlp.de</ExternalLink>
            </p>

            <H3>Recht auf Datenübertragbarkeit</H3>
            <P>Sie haben das Recht, personenbezogene Daten, die wir auf Grundlage Ihrer Einwilligung oder zur Erfüllung eines Vertrags automatisiert verarbeiten, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.</P>
            <P>Sie haben außerdem das Recht, diese Daten einem anderen Verantwortlichen zu übermitteln.</P>
            <P>Soweit Sie die direkte Übertragung an einen anderen Verantwortlichen verlangen, erfolgt diese nur, soweit dies technisch machbar ist.</P>

            <H3>Auskunft, Berichtigung und Löschung</H3>
            <P>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen das Recht auf unentgeltliche Auskunft über die von uns verarbeiteten personenbezogenen Daten, deren Herkunft, Empfänger und Verarbeitungszwecke.</P>
            <P>Darüber hinaus haben Sie unter den gesetzlichen Voraussetzungen das Recht auf Berichtigung unrichtiger personenbezogener Daten sowie auf Löschung Ihrer personenbezogenen Daten.</P>
            <P>Hierzu sowie zu weiteren Fragen zum Datenschutz können Sie sich jederzeit an uns wenden.</P>

            <H3>Recht auf Einschränkung der Verarbeitung</H3>
            <P>Sie haben das Recht, unter den gesetzlichen Voraussetzungen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</P>
            <P>Dieses Recht besteht insbesondere in folgenden Fällen:</P>
            <ul className="list-disc list-inside flex flex-col gap-2 pl-2 text-body text-muted leading-relaxed">
              <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, können Sie für die Dauer der Überprüfung eine Einschränkung der Verarbeitung verlangen.</li>
              <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig erfolgt, können Sie anstelle der Löschung die Einschränkung der Verarbeitung verlangen.</li>
              <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie diese jedoch zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigen, können Sie anstelle der Löschung eine Einschränkung verlangen.</li>
              <li>Wenn Sie Widerspruch gemäß Art. 21 Abs. 1 DSGVO eingelegt haben, können Sie für die Dauer der Prüfung, ob unsere berechtigten Gründe Ihre Interessen überwiegen, die Einschränkung der Verarbeitung verlangen.</li>
            </ul>
            <P>Wurde die Verarbeitung eingeschränkt, dürfen die betreffenden Daten, abgesehen von ihrer Speicherung, nur mit Ihrer Einwilligung, zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen, zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.</P>

            <H3>SSL- beziehungsweise TLS-Verschlüsselung</H3>
            <P>Unsere Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, beispielsweise bei Kontaktanfragen, eine SSL- beziehungsweise TLS-Verschlüsselung.</P>
            <P>Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile Ihres Browsers mit &bdquo;https://&ldquo; beginnt.</P>
            <P>Die Verschlüsselung schützt die Übertragung der Daten zwischen Ihrem Browser und unserem Webserver vor dem unbefugten Mitlesen während der Übertragung.</P>

            <hr className="border-border" />

            <H2>4. Datenerfassung und Kontaktaufnahme</H2>

            <H3>Kontaktformular</H3>
            <P>Wenn Sie uns über das auf unserer Website bereitgestellte Kontaktformular kontaktieren, werden die von Ihnen eingegebenen Daten zur Bearbeitung Ihrer Anfrage verarbeitet.</P>
            <P>Hierzu können insbesondere gehören:</P>
            <ul className="list-disc list-inside flex flex-col gap-1 pl-2 text-body text-muted leading-relaxed">
              <li>Vor- und Nachname</li>
              <li>E-Mail-Adresse</li>
              <li>Telefonnummer</li>
              <li>Gewünschte Dienstleistung</li>
              <li>Inhalt Ihrer Nachricht</li>
              <li>Weitere von Ihnen freiwillig übermittelte Informationen</li>
            </ul>
            <P>Die Daten werden zur Beantwortung Ihrer Anfrage, zur Erstellung eines Angebots und gegebenenfalls zur Durchführung eines Auftrags verarbeitet.</P>

            <H4>Rechtsgrundlage</H4>
            <P>Soweit Ihre Anfrage der Anbahnung oder Durchführung eines Vertrags dient, erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.</P>
            <P>In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung eingehender Anfragen gemäß Art. 6 Abs. 1 lit. f DSGVO.</P>
            <P>Sofern im Einzelfall eine Einwilligung eingeholt wird, erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO.</P>

            <H4>Speicherdauer</H4>
            <P>Die im Kontaktformular übermittelten Daten werden gelöscht, sobald sie für die Bearbeitung Ihrer Anfrage nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten oder sonstigen rechtlichen Gründe für eine weitere Speicherung bestehen.</P>

            <H3>Anfrage per E-Mail, Telefon oder Telefax</H3>
            <P>Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage einschließlich der daraus hervorgehenden personenbezogenen Daten zum Zweck der Bearbeitung Ihres Anliegens gespeichert und verarbeitet.</P>
            <P>Hierzu können insbesondere Ihr Name, Ihre Kontaktdaten, die gewünschte Dienstleistung und der Inhalt Ihrer Anfrage gehören.</P>
            <P>Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit einem bestehenden Vertrag zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.</P>
            <P>In allen übrigen Fällen erfolgt die Verarbeitung auf Grundlage unseres berechtigten Interesses an der effektiven Bearbeitung eingehender Anfragen gemäß Art. 6 Abs. 1 lit. f DSGVO.</P>
            <P>Sofern eine Einwilligung eingeholt wurde, kann die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO erfolgen. Eine erteilte Einwilligung ist jederzeit widerrufbar.</P>
            <P>Ihre Daten verbleiben bei uns, bis der Zweck für die Verarbeitung entfällt, Sie ein berechtigtes Löschungsersuchen stellen oder Sie eine erteilte Einwilligung widerrufen.</P>
            <P>Zwingende gesetzliche Aufbewahrungsfristen und sonstige rechtliche Aufbewahrungsgründe bleiben unberührt.</P>

            <hr className="border-border" />

            <H2>5. Analyse-Tools und Werbung</H2>

            <H3>IONOS WebAnalytics</H3>
            <P>Unsere Website nutzt die statistischen Auswertungsfunktionen von IONOS WebAnalytics.</P>
            <P>Anbieter ist:</P>
            <p className="text-body text-charcoal leading-relaxed">
              IONOS SE<br />
              Elgendorfer Straße 57<br />
              56410 Montabaur<br />
              Deutschland
            </p>
            <P>Im Rahmen der Nutzung von IONOS WebAnalytics können unter anderem Besucherzahlen, Seitenaufrufe, Besucherquellen, technische Informationen sowie statistische Angaben zur Nutzung unserer Website ausgewertet werden.</P>
            <P>Dabei werden insbesondere folgende Daten erfasst:</P>
            <ul className="list-disc list-inside flex flex-col gap-1 pl-2 text-body text-muted leading-relaxed">
              <li>Referrer (zuvor besuchte Website)</li>
              <li>Angeforderte Webseite oder Datei</li>
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Verwendeter Gerätetyp</li>
              <li>Uhrzeit des Zugriffs</li>
              <li>IP-Adresse in anonymisierter Form</li>
            </ul>
            <P>Nach Angaben von IONOS wird die IP-Adresse unmittelbar nach der Übermittlung anonymisiert und anschließend ohne Personenbezug verarbeitet.</P>
            <P>IONOS WebAnalytics verwendet keine Cookies.</P>
            <P>Die statistischen Auswertungen dienen der technischen Optimierung unserer Website, der Verbesserung unseres Internetauftritts und der Analyse seiner Nutzung.</P>

            <H4>Rechtsgrundlage</H4>
            <P>Soweit im Rahmen dieses Dienstes personenbezogene Daten verarbeitet werden, erfolgt dies auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.</P>
            <P>Unser berechtigtes Interesse liegt in der statistischen Auswertung sowie der technischen und inhaltlichen Verbesserung unserer Website.</P>
            <P>Soweit für eine konkrete Datenverarbeitung eine Einwilligung erforderlich sein sollte, erfolgt diese Verarbeitung ausschließlich nach Erteilung der entsprechenden Einwilligung.</P>

            <H4>Weitere Informationen</H4>
            <P>Informationen zur Datenverarbeitung durch IONOS WebAnalytics finden Sie unter: <ExternalLink href="https://www.ionos.de/hilfe/datenschutz/datenverarbeitung-durch-ihr-ionos-produktes/webanalytics/">www.ionos.de/hilfe/datenschutz/datenverarbeitung-durch-ihr-ionos-produktes/webanalytics/</ExternalLink></P>

            <H3>Google Ads</H3>
            <P>Wir nutzen Google Ads, einen Online-Werbedienst der:</P>
            <p className="text-body text-charcoal leading-relaxed">
              Google Ireland Limited<br />
              Gordon House<br />
              Barrow Street<br />
              Dublin 4<br />
              Irland
            </p>
            <P>Mit Google Ads schalten wir Werbeanzeigen in der Google-Suche und gegebenenfalls weiteren Werbeangeboten von Google, um auf unsere Dienstleistungen im Bereich Garten- und Grundstückspflege sowie Winterdienst aufmerksam zu machen.</P>
            <P>Wenn Sie auf eine unserer Werbeanzeigen klicken, werden Sie auf unsere Website weitergeleitet.</P>
            <P>Im Zusammenhang mit der Ausspielung und dem Anklicken von Werbeanzeigen kann Google personenbezogene Daten im Rahmen seiner eigenen Dienste verarbeiten. Hierzu können insbesondere technische Informationen, IP-Adressen und Informationen über die Interaktion mit Anzeigen gehören.</P>
            <P>Beim Aufruf unserer Website über eine Google-Anzeige können zusätzlich Informationen zum Anzeigenklick in Form von URL-Parametern, beispielsweise einer Google Click ID (GCLID), übermittelt werden.</P>
            <P>Diese Informationen können im Rahmen des technischen Websitebetriebs in Server-Logfiles erscheinen.</P>

            <H4>Kein eigenes Google-Ads-Conversion-Tracking</H4>
            <P>Auf unserer Website verwenden wir nach dem derzeitigen technischen Stand kein Google-Ads-Conversion-Tracking, keine Google-Ads-Remarketing-Tags und kein Google Analytics.</P>
            <P>Wir setzen somit keine entsprechenden Google-Tracking-Tags zur eigenständigen Auswertung des Nutzerverhaltens auf unserer Website ein.</P>
            <P>Die statistische Auswertung der Websitezugriffe erfolgt über den zuvor beschriebenen Dienst IONOS WebAnalytics.</P>
            <P>Die Verarbeitung personenbezogener Daten durch Google im Rahmen seiner eigenen Werbedienste bleibt hiervon unberührt.</P>

            <H4>Rechtsgrundlage</H4>
            <P>Soweit wir im Zusammenhang mit der Bewerbung unserer Dienstleistungen selbst personenbezogene Daten verarbeiten, erfolgt dies, soweit einschlägig, auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.</P>
            <P>Unser berechtigtes Interesse besteht darin, unsere Dienstleistungen bekannt zu machen und potenzielle Kunden zu erreichen.</P>
            <P>Soweit für einzelne Datenverarbeitungen eine Einwilligung gesetzlich erforderlich ist, gelten Art. 6 Abs. 1 lit. a DSGVO und gegebenenfalls § 25 Abs. 1 TDDDG.</P>

            <H4>Weitere Informationen</H4>
            <P>Weitere Informationen über die Datenverarbeitung durch Google finden Sie in der Datenschutzerklärung von Google: <ExternalLink href="https://policies.google.com/privacy?hl=de">policies.google.com/privacy?hl=de</ExternalLink></P>

            <hr className="border-border" />

            <H2>6. Cookies und ähnliche Technologien</H2>
            <P>Unsere Website kann technisch notwendige Cookies oder vergleichbare Technologien verwenden, die zur Bereitstellung bestimmter Funktionen sowie zur Gewährleistung eines sicheren und zuverlässigen Websitebetriebs erforderlich sind.</P>
            <P>Cookies sind kleine Informationseinheiten, die auf Ihrem Endgerät gespeichert werden können. Vergleichbare Technologien können ebenfalls Informationen auf Ihrem Endgerät speichern oder auf bereits gespeicherte Informationen zugreifen.</P>

            <H4>Technisch notwendige Technologien</H4>
            <P>Soweit die Speicherung von Informationen auf Ihrem Endgerät oder der Zugriff auf bereits gespeicherte Informationen unbedingt erforderlich ist, um einen von Ihnen ausdrücklich gewünschten digitalen Dienst bereitzustellen, ist gemäß § 25 Abs. 2 TDDDG keine Einwilligung erforderlich.</P>
            <P>Die damit verbundene Verarbeitung personenbezogener Daten erfolgt, soweit einschlägig, auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO oder Art. 6 Abs. 1 lit. b DSGVO.</P>

            <H4>Technisch nicht notwendige Technologien</H4>
            <P>Soweit auf unserer Website technisch nicht notwendige Cookies oder vergleichbare Technologien eingesetzt werden, holen wir vor deren Verwendung eine Einwilligung ein, sofern dies gesetzlich erforderlich ist.</P>
            <P>Die Rechtsgrundlagen sind in diesem Fall § 25 Abs. 1 TDDDG sowie Art. 6 Abs. 1 lit. a DSGVO.</P>
            <P>Eine erteilte Einwilligung kann jederzeit mit Wirkung für die Zukunft widerrufen werden.</P>
            <P>Die konkreten eingesetzten Technologien, deren Zwecke sowie gegebenenfalls Speicherdauern und Anbieter werden, soweit erforderlich, über die entsprechenden Datenschutz- beziehungsweise Einwilligungsinformationen auf unserer Website erläutert.</P>
            <P>IONOS WebAnalytics verwendet nach Angaben des Anbieters keine Cookies.</P>
            <P>Allein durch den Einsatz von Google Ads zur Schaltung von Werbeanzeigen werden auf unserer Website keine eigenen Google-Ads-Conversion-Tracking- oder Remarketing-Tags eingesetzt.</P>

            <hr className="border-border" />

            <H2>7. Weitergabe personenbezogener Daten</H2>
            <P>Eine Weitergabe personenbezogener Daten an Dritte erfolgt nur, soweit dies für die Durchführung eines Vertrags erforderlich ist, eine gesetzliche Verpflichtung besteht oder eine andere rechtliche Grundlage die Weitergabe erlaubt.</P>
            <P>Eine Weitergabe kann insbesondere im Zusammenhang mit der Bearbeitung von Kundenanfragen, der Auftragsdurchführung, der Erfüllung gesetzlicher Pflichten oder dem technischen Betrieb unserer Website erfolgen.</P>
            <P>Soweit externe Dienstleister personenbezogene Daten in unserem Auftrag verarbeiten, erfolgt dies unter Beachtung der gesetzlichen Datenschutzanforderungen.</P>
            <P>Sofern gesetzlich erforderlich, schließen wir mit diesen Dienstleistern Verträge zur Auftragsverarbeitung gemäß Art. 28 DSGVO.</P>

            <hr className="border-border" />

            <H2>8. Änderungen dieser Datenschutzerklärung</H2>
            <P>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, sofern rechtliche Anforderungen, technische Veränderungen, Änderungen der eingesetzten Dienstleister oder neue Funktionen unserer Website dies erforderlich machen.</P>
            <P>Es gilt die jeweils auf unserer Website veröffentlichte Fassung.</P>

          </div>
        </div>
      </section>
    </>
  )
}
