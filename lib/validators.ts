import { z } from 'zod'

export const contactSchema = z.object({
  vorname: z.string().min(2, 'Bitte geben Sie Ihren Vornamen ein.'),
  nachname: z.string().min(2, 'Bitte geben Sie Ihren Nachnamen ein.'),
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein.'),
  telefon: z.string().optional(),
  leistung: z.enum(['gartenpflege', 'winterdienst', 'sonstiges'], {
    error: 'Bitte wählen Sie eine Leistung aus.',
  }),
  nachricht: z
    .string()
    .min(10, 'Bitte beschreiben Sie Ihr Anliegen (mindestens 10 Zeichen).')
    .max(1000, 'Ihre Nachricht ist zu lang (maximal 1000 Zeichen).'),
  datenschutz: z.literal(true, {
    error: 'Bitte stimmen Sie der Datenschutzerklärung zu.',
  }),
})

export type ContactFormData = z.infer<typeof contactSchema>

export const winterdienstAnfrageSchema = z.object({
  objektart: z.enum(['privat', 'verwaltung', 'gewerbe'], {
    error: 'Bitte wählen Sie eine Objektart aus.',
  }),
  flaechen: z.array(z.string()).min(1, 'Bitte wählen Sie mindestens eine Fläche aus.'),
  plzOrt: z.string().min(3, 'Bitte geben Sie PLZ und Ort ein.'),
  flaecheGroesse: z.string().optional(),
  zeitraum: z.string().optional(),
  name: z.string().min(2, 'Bitte geben Sie Ihren Namen ein.'),
  telefon: z.string().optional(),
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein.'),
  nachricht: z.string().optional(),
  datenschutz: z.literal(true, {
    error: 'Bitte stimmen Sie der Datenschutzerklärung zu.',
  }),
})

export type WinterdienstAnfrageData = z.infer<typeof winterdienstAnfrageSchema>

export const gartenpflegeAnfrageSchema = z.object({
  auftragsart: z.enum(['einmalig', 'regelmaessig', 'unklar']).optional(),
  arbeiten: z.array(z.string()).min(1, 'Bitte wählen Sie mindestens eine Leistung aus.'),
  plzOrt: z.string().min(3, 'Bitte geben Sie PLZ und Ort ein.'),
  beschreibung: z.string().optional(),
  name: z.string().min(2, 'Bitte geben Sie Ihren Vor- und Nachnamen ein.'),
  telefon: z.string().optional(),
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein.'),
  datenschutz: z.literal(true, {
    error: 'Bitte stimmen Sie der Datenschutzerklärung zu.',
  }),
})

export type GartenpflegeAnfrageData = z.infer<typeof gartenpflegeAnfrageSchema>
