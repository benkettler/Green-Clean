import type { Metadata, Viewport } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CookieBanner from '@/components/CookieBanner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#2D6A4F',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.greenundclean.com'),
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
    'Landschaftspflege Mainz',
    'Winterdienst Alzey',
    'Gartenpflege Bad Kreuznach',
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

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Green & Clean',
  description:
    'Professionelle Gartenpflege, Winterdienst und Gartenanlage in Rheinhessen.',
  url: 'https://www.greenundclean.com',
  telephone: '+49 151 70059839',
  email: 'info@greenundclean.com',
  image: 'https://www.greenundclean.com/images/logo-original.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Emsdettener Str. 10, c/o Postflex #10122',
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
    <html lang="de" className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        <link rel="preload" as="image" href="/images/hero-garden.jpg" />
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
