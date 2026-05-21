import { z } from 'zod'

export const contactSchema = z.object({
  vorname: z.string().min(2, 'Bitte geben Sie Ihren Vornamen ein.'),
  nachname: z.string().min(2, 'Bitte geben Sie Ihren Nachnamen ein.'),
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein.'),
  telefon: z.string().optional(),
  leistung: z.enum(['gartenpflege', 'winterdienst', 'gartenanlage', 'sonstiges'], {
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
