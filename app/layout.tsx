import type { Metadata, Viewport } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CookieBanner from '@/components/CookieBanner'

// next/font/google lädt Schriften beim Build lokal herunter → DSGVO-konform, kein Google-Request im Browser
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

// ─── Viewport ─────────────────────────────────────────────────────────────────
export const viewport: Viewport = {
  themeColor: '#2D6A4F',
}

// ─── Base Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL('https://www.greenundclean.com'), // [DOMAIN]
  title: {
    default: 'Gartenpflege Mainz & Rheinhessen | Green & Clean',
    template: '%s | Green & Clean',
  },
  description:
    'Professionelle Gartenpflege und Winterdienst in Mainz, Alzey und Bad Kreuznach. Für Privatkunden, Hausverwaltungen und Gewerbebetriebe. Jetzt anfragen!',
  keywords: [
    'Gartenpflege Rheinhessen',
    'Winterdienst Mainz',
    'Gartenpflege Mainz',
    'Gartenanlage Rheinhessen',
    'Landschaftspflege Mainz',
    'Winterdienst Alzey',
  ],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'Green & Clean',
    title: 'Gartenpflege & Winterdienst Rheinhessen | Green & Clean',
    description:
      'Professionelle Gartenpflege und Winterdienst in Mainz, Alzey und Bad Kreuznach. Für Privatkunden, Hausverwaltungen und Gewerbebetriebe.',
    images: [
      {
        url: '/images/logo-original.png',
        width: 911,
        height: 911,
        alt: 'Green & Clean – Gartenpflege und Winterdienst Rheinhessen',
      },
    ],
  },
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
}

// ─── LocalBusiness Schema (JSON-LD) ──────────────────────────────────────────
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Green & Clean',                          // [Firmenname]
  description:
    'Professionelle Gartenpflege, Winterdienst und Gartenanlage in Rheinhessen.',
  url: 'https://www.greenundclean.com',           // [DOMAIN]
  telephone: '+49 151 70059839',                  // [TELEFON]
  email: 'info@greenundclean.com',                // [EMAIL]
  image: 'https://www.greenundclean.com/images/logo-original.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Emsdettener Str. 10, c/o Postflex #10122', // [ADRESSE]
    addressLocality: 'Greven',
    postalCode: '48268',
    addressCountry: 'DE',
  },
  areaServed: [
    { '@type': 'City', name: 'Mainz' },
    { '@type': 'City', name: 'Bad Kreuznach' },
    { '@type': 'City', name: 'Alzey' },
    { '@type': 'City', name: 'Ingelheim' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  priceRange: '€€',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        {/* Preload hero image → schnellerer LCP-Wert */}
        <link rel="preload" as="image" href="/images/hero-garden.jpg" />
        {/* LocalBusiness structured data für Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
