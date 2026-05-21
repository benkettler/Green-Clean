import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import ServicesOverview from '@/components/sections/ServicesOverview'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CtaSection from '@/components/sections/CtaSection'

export const metadata: Metadata = {
  title: { absolute: 'Gartenpflege Mainz & Rheinhessen | Green & Clean' },
  description:
    'Professionelle Gartenpflege in Mainz, Alzey und Bad Kreuznach. Rasenpflege, Heckenschnitt, Winterdienst und Gartenanlage. Regional, persönlich und zuverlässig. Jetzt anfragen!',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Gartenpflege Mainz & Rheinhessen | Green & Clean',
    description:
      'Professionelle Gartenpflege in Mainz, Alzey und Bad Kreuznach. Rasenpflege, Heckenschnitt, Winterdienst und Gartenanlage. Regional, persönlich und zuverlässig.',
    url: '/',
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <TestimonialsSection />
      <CtaSection />
    </>
  )
}
