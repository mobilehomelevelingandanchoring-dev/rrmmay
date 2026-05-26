import { NextRequest, NextResponse } from 'next/server';

const PRIMARY_DOMAIN = 'rrmexternalcleaningspecialist.co.uk';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const { pathname, search } = request.nextUrl;

  // Skip redirects for Vercel preview/deployment URLs to prevent loops
  if (
    hostname.endsWith('.vercel.app') ||
    hostname === 'localhost' ||
    hostname.startsWith('localhost:')
  ) {
    return NextResponse.next();
  }

  // Redirect www → non-www (301 permanent)
  // Vercel should also be configured with non-www as primary domain
  if (hostname === `www.${PRIMARY_DOMAIN}` || hostname === `www.${PRIMARY_DOMAIN}:443`) {
    return NextResponse.redirect(
      new URL(`https://${PRIMARY_DOMAIN}${pathname}${search}`),
      301
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|logo.webp|.*\\.png$|.*\\.svg$|.*\\.webp$|.*\\.ico$|.*\\.xml$|.*\\.txt$|.*\\.webmanifest$).*)',
  ],
};
