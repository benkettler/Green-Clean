// ─── Site Info ────────────────────────────────────────────────────────────────

export const SITE = {
  name: 'Green & Clean',
  tagline: 'Regional. Erreichbar. Verlässlich.',
  phone: '+49 151 70059839',
  email: 'info@greenundclean.com',
  region: 'Rheinhessen',
  cities: 'Mainz, Alzey & Bad Kreuznach',
  website: 'www.greenundclean.com',
}

// ─── Navigation ───────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: 'Startseite', href: '/' },
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Über uns',   href: '/ueber-uns' },
  { label: 'Kontakt',    href: '/kontakt' },
]

// ─── Hero Section (Startseite) ────────────────────────────────────────────────

export const HERO = {
  eyebrow: 'Gartenpflege & Winterdienst in Rheinhessen',
  h1: {
    main:      'Professionelle Gartenpflege &',
    highlight: 'zuverlässiger Winterdienst.',
  },
  subtitle: 'Green & Clean betreut Privatkunden, Hausverwaltungen und Gewerbebetriebe in Mainz, Alzey & Bad Kreuznach. Regional, erreichbar und verlässlich.',
  cta1: 'Leistungen entdecken',
  cta2: 'Jetzt anfragen',
}

// ─── Services Overview Section ────────────────────────────────────────────────

export const SERVICES_OVERVIEW = {
  eyebrow:  'Was wir bieten',
  title:    'Unsere Leistungen',
  subtitle: 'Für Privatkunden, Hausverwaltungen und Gewerbebetriebe in Rheinhessen. Zuverlässig und mit klaren Abläufen.',
  cardLink: 'Mehr erfahren',
}

// ─── CTA Banner ───────────────────────────────────────────────────────────────

export const CTA_SECTION = {
  title:    'Bereit für Ihren Traumgarten?',
  subtitle: 'Kontaktieren Sie uns noch heute für ein kostenloses Beratungsgespräch. Wir melden uns innerhalb von 24 Stunden.',
  button:   'Jetzt Kontakt aufnehmen',
}

// ─── Testimonials Section ─────────────────────────────────────────────────────

export const TESTIMONIALS_SECTION = {
  eyebrow:  'Kundenstimmen',
  title:    'Was unsere Kunden sagen',
  subtitle: 'Das sagen unsere Kunden auf Google. 5,0 Sterne aus 14 Bewertungen.',
}

// ─── Team Section ─────────────────────────────────────────────────────────────

export const TEAM_SECTION = {
  eyebrow:  'Das Team',
  title:    'Menschen, die Gärten lieben',
  subtitle: 'Hinter Green & Clean steht ein Team, das mit Herzblut und klaren Abläufen für Sie arbeitet.',
}

// ─── Contact Form ─────────────────────────────────────────────────────────────

export const CONTACT_FORM = {
  eyebrow:  'Kontakt',
  title:    'Schreiben Sie uns',
  subtitle: 'Wir antworten innerhalb von 24 Stunden. Oder rufen Sie uns einfach direkt an.',
  infoLabels: {
    telefon: 'Telefon',
    email:   'E-Mail',
    region:  'Region',
  },
  form: {
    vorname:  { label: 'Vorname',          placeholder: 'Max' },
    nachname: { label: 'Nachname',         placeholder: 'Mustermann' },
    email:    { label: 'E-Mail-Adresse',   placeholder: 'max@beispiel.de' },
    telefon:  { label: 'Telefon',          placeholder: '+49 89 ...', optional: '(optional)' },
    leistung: {
      label:       'Gewünschte Leistung',
      placeholder: 'Bitte auswählen …',
      options: [
        { value: 'gartenpflege', label: 'Gartenpflege' },
        { value: 'winterdienst', label: 'Winterdienst' },
        { value: 'gartenanlage', label: 'Gartenanlage' },
        { value: 'sonstiges',    label: 'Sonstiges' },
      ],
    },
    nachricht:   { label: 'Ihre Nachricht', placeholder: 'Beschreiben Sie kurz Ihr Anliegen …' },
    datenschutz: { prefix: 'Ich stimme der', linkText: 'Datenschutzerklärung', suffix: 'zu.' },
  },
  submit:     'Nachricht senden',
  submitting: 'Wird gesendet …',
  success: {
    title:    'Vielen Dank!',
    subtitle: 'Ihre Nachricht ist bei uns eingegangen. Wir melden uns innerhalb von 24 Stunden bei Ihnen.',
  },
}

// ─── Services ─────────────────────────────────────────────────────────────────

export const SERVICES = [
  {
    id: 'gartenpflege',
    icon: 'Scissors',
    title: 'Gartenpflege',
    summary:
      'Professionelle Pflege von Grün- und Außenanlagen für Privatkunden, Hausverwaltungen und Gewerbeflächen. Regelmäßig, saisonal oder individuell.',
    description:
      'Gepflegte Außenanlagen schaffen einen positiven ersten Eindruck und steigern die Lebensqualität. Wir arbeiten mit festen Terminen, professioneller Planung und persönlicher Kundenbetreuung. Zuverlässig und mit gleichbleibender Qualität.',
    features: [
      'Rasen- und Grünflächenpflege',
      'Hecken- und Strauchschnitt',
      'Saisonale Pflegearbeiten',
      'Allgemeine Gartenarbeiten',
      'Laubentfernung und Gartenreinigung',
      'Weitere Leistungen nach individueller Absprache',
    ],
    image:   '/images/gartenpflege.jpg',
    eyebrow: 'Regelmäßige Pflege',
  },
  {
    id: 'winterdienst',
    icon: 'Snowflake',
    title: 'Winterdienst',
    summary:
      'Zuverlässiger Winterdienst mit klaren Einsatzplänen und schneller Reaktion bei Schnee und Glätte. Für Privatkunden, Hausverwaltungen und Gewerbebetriebe.',
    description:
      'Im Winter zählt Verlässlichkeit, besonders bei Schnee und Glätte. Wir setzen auf feste Abläufe, eindeutige Zuständigkeiten und eine strukturierte Einsatzplanung, damit Ihre Flächen jederzeit sicher und passierbar bleiben.',
    features: [
      'Schneeräumung von Gehwegen und Einfahrten',
      'Glättebekämpfung mit streusicherem Material',
      'Betreuung privater, gewerblicher und verwalteter Flächen',
      'Witterungsabhängige Einsätze nach Einsatzplan',
      'Schnelle Reaktionszeit bei Schneefall',
      'Individuelle Vereinbarung von Art und Umfang',
    ],
    image:   '/images/winterdienst.jpg',
    eyebrow: 'Im Winter für Sie da',
  },
  {
    id: 'gartenanlage',
    icon: 'Shovel',
    title: 'Gartenanlage',
    summary:
      'Wir gestalten Ihren Außenbereich von Grund auf neu. Von der Planung über die Bepflanzung bis zur fertigen Anlage.',
    description:
      'Qualität entsteht nicht zufällig, sondern durch klare Abläufe und sorgfältige Planung. Wir entwickeln individuelle Konzepte, die zu Ihnen, Ihrem Grundstück und Ihrem Budget passen und setzen diese mit denselben Maßstäben um, die unsere Kunden in Rheinhessen kennen.',
    features: [
      'Individuelle Gartenplanung und Beratung',
      'Wegebau und Terrassengestaltung',
      'Bepflanzungskonzepte mit regionalen Pflanzen',
      'Neuanlage von Rasenflächen und Beeten',
      'Zaunbau und Sichtschutzlösungen',
      'Absprache und Umsetzung nach Ihren Wünschen',
    ],
    image:   '/images/gartenanlage.jpg',
    eyebrow: 'Planung & Umsetzung',
  },
]

// ─── Service Subpage Content ───────────────────────────────────────────────────

export const SERVICE_PAGES = {
  gartenpflege: {
    heroSubtitle: 'Gepflegte Außenanlagen für Privatkunden, Hausverwaltungen und Gewerbebetriebe. Professionell, termingerecht und persönlich betreut.',
    steps: [
      {
        title: 'Erstgespräch',
        text:  'Wir schauen uns Ihren Garten gemeinsam an und besprechen, was Sie sich wünschen. Kein Formular, kein Callcenter. Direkter Kontakt mit Jan Kettler.',
      },
      {
        title: 'Angebot',
        text:  'Sie erhalten ein klares Angebot mit genau den Leistungen, die wir besprochen haben. Kein verstecktes Kleingedrucktes, keine Überraschungen.',
      },
      {
        title: 'Regelmäßige Pflege',
        text:  'Wir übernehmen die Pflege nach vereinbartem Rhythmus. Feste Termine, verlässliche Ausführung und gleiche Qualität bei jedem Einsatz.',
      },
    ],
    einsatzgebiet: [
      'Green & Clean ist Ihr regionaler Partner für Gartenpflege in Rheinhessen. Wir betreuen Kunden in der gesamten Region, von Mainz bis Bad Kreuznach und von Alzey bis Bingen am Rhein. Kurze Wege, persönlicher Kontakt und verlässliche Termine sind für uns selbstverständlich.',
      'Ob ein kleiner Privatgarten, eine größere Wohnanlage oder ein Gewerbeobjekt: Wir erarbeiten gemeinsam mit Ihnen ein Pflegekonzept, das zu Ihren Flächen und Ihrem Budget passt. Auf Wunsch kommen wir wöchentlich, zweiwöchentlich oder in einem anderen Rhythmus, der für Sie Sinn ergibt.',
    ],
  },
  winterdienst: {
    heroSubtitle: 'Schneeräumung und Streuservice für Privatgrundstücke, Hausverwaltungen und Gewerbeflächen. Verlässlich, witterungsabhängig und mit klarem Einsatzplan.',
    steps: [
      {
        title: 'Bedarfsermittlung',
        text:  'Wir besprechen gemeinsam Ihre Flächen, die gewünschten Einsatzzeiten und Ihren individuellen Bedarf für die Wintersaison.',
      },
      {
        title: 'Einsatzplan',
        text:  'Sie erhalten einen festen Einsatzplan mit klaren Zuständigkeiten. So wissen Sie genau, wann und wie wir im Einsatz sind.',
      },
      {
        title: 'Winterbereit',
        text:  'Bei Schnee und Glätte sind wir pünktlich und zuverlässig auf Ihren Flächen. Schnelle Reaktionszeit und lückenlose Dokumentation auf Wunsch.',
      },
    ],
    einsatzgebiet: [
      'Unser Winterdienst deckt das gesamte Rheinhessen ab. Von Mainz über Alzey bis Bad Kreuznach sind wir bei Schnee und Glätte für Sie im Einsatz. Dank regionaler Nähe und strukturierter Einsatzplanung können wir schnell reagieren und sicherstellen, dass Ihre Flächen jederzeit sicher und passierbar sind.',
      'Winterdienst ist Vertrauenssache. Deshalb setzen wir auf feste Ansprechpartner, transparente Abläufe und eine klare Kommunikation vor und während der Wintersaison. Hausverwaltungen schätzen unsere zuverlässige Dokumentation und Erreichbarkeit auch außerhalb der regulären Bürozeiten.',
    ],
  },
  gartenanlage: {
    heroSubtitle: 'Wir gestalten Ihren Außenbereich von Grund auf neu. Individuell geplant, sorgfältig umgesetzt und perfekt auf Ihre Wünsche abgestimmt.',
    steps: [
      {
        title: 'Planung',
        text:  'Wir kommen zu Ihnen, schauen uns das Grundstück an und entwickeln gemeinsam ein Konzept, das zu Ihnen, Ihrem Stil und Ihrem Budget passt.',
      },
      {
        title: 'Angebot',
        text:  'Sie erhalten ein detailliertes Angebot mit Zeitplan, Materialien und Gesamtkosten. Erst wenn Sie zufrieden sind, fangen wir an.',
      },
      {
        title: 'Umsetzung',
        text:  'Wir setzen Ihr Gartenprojekt sorgfältig und termingerecht um. Nach Abschluss zeigen wir Ihnen, wie Sie Ihren neuen Garten am besten pflegen.',
      },
    ],
    einsatzgebiet: [
      'Von der Erstberatung bis zur fertigen Gartenanlage sind wir in ganz Rheinhessen für Sie tätig. Ob in Mainz, Alzey oder Bad Kreuznach: Wir kennen die Region, wissen welche Pflanzen hier gedeihen und gestalten Ihren Garten so, dass er langfristig Freude macht.',
      'Jedes Grundstück ist anders, daher gibt es bei uns keine Standardlösung von der Stange. Wir nehmen uns Zeit für eine sorgfältige Planung und entwickeln ein Konzept, das wirklich zu Ihnen passt. Dabei achten wir auf den Einsatz regionaler Pflanzen und Materialien, die zum Klima in Rheinhessen passen und pflegeleicht sind.',
    ],
  },
}

// Shared text used on all three service subpages
export const SERVICE_PAGE_SHARED = {
  stepsTitle:          'So läuft es ab',
  einsatzgebietTitle:  'Unser Einsatzgebiet',
  einsatzgebietNote:   'Ihr Ort ist nicht dabei? Sprechen Sie uns einfach an.',
  cities: [
    'Mainz', 'Alzey', 'Bad Kreuznach', 'Ingelheim', 'Nieder-Olm',
    'Bingen am Rhein', 'Wörrstadt', 'Ockenheim', 'Sprendlingen',
  ],
  breadcrumb: {
    home:     'Startseite',
    services: 'Leistungen',
  },
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

export const TESTIMONIALS = [
  {
    quote:
      'Die Jungs wissen, was sie tun. Alles lief reibungslos und das Ergebnis kann sich echt sehen lassen. Gerne wieder!',
    author:   'Ben',
    location: 'Google Rezension',
    stars: 5,
  },
  {
    quote:
      'Wir hatten 4 Heckenabschnitte zu schneiden und in Form zu bringen. Das Team hat sehr akkurat gearbeitet, Preis-Leistung hat gepasst, sehr freundlich waren die beiden auch noch, was will man mehr. Freuen uns auf den nächsten Einsatz.',
    author:   'Christian Wolf',
    location: 'Google Rezension',
    stars: 5,
  },
  {
    quote:
      'Was die Jungs leisten, ist einfach nur KLASSE und sie sind jeden Euro wert!!! Akkurat, sehr sauber und mit viel Engagement haben sie unseren Garten bearbeitet.',
    author:   'Thilo Schmitt',
    location: 'Google Rezension',
    stars: 5,
  },
]

// ─── Team ─────────────────────────────────────────────────────────────────────

export const TEAM = [
  {
    name:  'Jan Kettler',
    role:  'Ansprechpartner & Geschäftsführer',
    bio:   'Persönliche Betreuung, klare Kommunikation und zuverlässige Ausführung. Das sind die Versprechen, die wir jedem Kunden in Rheinhessen geben.',
    image: '/images/team/jan.jpg',
  },
]

// ─── Values ───────────────────────────────────────────────────────────────────

export const VALUES = [
  {
    icon:        'MapPin',
    title:       'Regional',
    description: 'Wir sind in Rheinhessen verwurzelt. In Mainz, Alzey, Bad Kreuznach und der gesamten Region.',
  },
  {
    icon:        'Phone',
    title:       'Erreichbar',
    description: 'Direkter Kontakt, kurze Wege und persönliche Betreuung. Kein anonymes Callcenter, keine Warteschleife.',
  },
  {
    icon:        'Shield',
    title:       'Verlässlich',
    description: 'Feste Termine, klare Abläufe und gleichbleibende Qualität. Darauf können Sie sich verlassen.',
  },
]

// ─── Page: Über uns ───────────────────────────────────────────────────────────

export const PAGE_UEBER_UNS = {
  hero: {
    eyebrow:  'Wer wir sind',
    title:    'Über uns',
    subtitle: 'Regional verwurzelt, persönlich erreichbar und verlässlich in der Ausführung. In Rheinhessen.',
  },
  story: {
    eyebrow: 'Unser Ansatz',
    title:   'Qualität durch klare Abläufe',
    paragraphs: [
      'Green & Clean steht für professionelle Garten- und Winterdienstleistungen in Rheinhessen. Für Privatkunden, Hausverwaltungen und Gewerbebetriebe in Mainz, Alzey, Bad Kreuznach und der gesamten Region.',
      'Unser Ansatz ist einfach: Qualität entsteht nicht zufällig, sondern durch klare Abläufe, feste Termine und persönliche Kundenbetreuung. Wer uns beauftragt, bekommt einen festen Ansprechpartner.',
      'Ob regelmäßige Gartenpflege, zuverlässiger Winterdienst oder die Neuanlage eines Außenbereichs: Wir stimmen Art und Umfang individuell mit Ihnen ab und liefern das, was wir versprechen.',
    ],
  },
  values: {
    eyebrow:  'Was uns auszeichnet',
    title:    '"Regional. Erreichbar. Verlässlich."',
    subtitle: 'Diese drei Grundsätze sind keine Marketingformel. Sie beschreiben, wie wir arbeiten.',
  },
}

// ─── Page: Leistungen ─────────────────────────────────────────────────────────

export const PAGE_LEISTUNGEN = {
  hero: {
    eyebrow:  'Was wir für Sie tun',
    title:    'Unsere Leistungen',
    subtitle: 'Vom ersten Schnitt bis zur vollständigen Neugestaltung. Wir begleiten Ihren Garten durch alle Jahreszeiten.',
  },
  cardLinkPrefix: 'Mehr zu',
}

// ─── Page: Kontakt ────────────────────────────────────────────────────────────

export const PAGE_KONTAKT = {
  hero: {
    eyebrow: 'Wir freuen uns auf Ihre Nachricht',
    title:   'Kontakt aufnehmen',
  },
}
