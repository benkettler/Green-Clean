import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { contactSchema } from '@/lib/validators'

const leistungLabels: Record<string, string> = {
  gartenpflege: 'Gartenpflege',
  winterdienst:  'Winterdienst',
  sonstiges:     'Sonstiges',
}

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const body = await request.json()
    const data = contactSchema.parse(body)

    await resend.emails.send({
      from: 'Kontaktformular Green & Clean <noreply@greenundclean.com>',
      to:   'info@greenundclean.com',
      replyTo: data.email,
      subject: `Neue Anfrage: ${leistungLabels[data.leistung] ?? data.leistung} – ${data.vorname} ${data.nachname}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #1a1a1a;">
          <h2 style="color: #2D6A4F;">Neue Kontaktanfrage</h2>
          <table style="width:100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666; width: 140px;">Name</td><td style="padding: 8px 0;"><strong>${data.vorname} ${data.nachname}</strong></td></tr>
            <tr><td style="padding: 8px 0; color: #666;">E-Mail</td><td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
            ${data.telefon ? `<tr><td style="padding: 8px 0; color: #666;">Telefon</td><td style="padding: 8px 0;"><a href="tel:${data.telefon}">${data.telefon}</a></td></tr>` : ''}
            <tr><td style="padding: 8px 0; color: #666;">Leistung</td><td style="padding: 8px 0;">${leistungLabels[data.leistung] ?? data.leistung}</td></tr>
          </table>
          <hr style="border: none; border-top: 1px solid #E5E0D9; margin: 16px 0;" />
          <p style="color: #666; margin-bottom: 4px;">Nachricht:</p>
          <p style="white-space: pre-wrap;">${data.nachricht}</p>
          <hr style="border: none; border-top: 1px solid #E5E0D9; margin: 16px 0;" />
          <p style="font-size: 12px; color: #999;">Gesendet über das Kontaktformular auf greenundclean.com</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Fehler beim Senden der E-Mail.' }, { status: 500 })
  }
}
