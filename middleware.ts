import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const user = process.env.AUTH_USER
  const password = process.env.AUTH_PASSWORD

  if (!user || !password) return NextResponse.next()

  const basicAuth = req.headers.get('authorization')
  if (basicAuth) {
    const [u, p] = atob(basicAuth.split(' ')[1]).split(':')
    if (u === user && p === password) return NextResponse.next()
  }

  return new NextResponse('Authentifizierung erforderlich', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Green & Clean Vorschau"' },
  })
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
