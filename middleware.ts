import { NextRequest, NextResponse } from 'next/server';
import { createHmac } from 'crypto';

const PRIMARY_DOMAIN = 'rrmexternalcleaningspecialist.co.uk';
const SESSION_COOKIE = 'rrm_admin_session';
const SECRET = process.env.SESSION_SECRET ?? 'rrm-session-secret-key';

function verifySessionToken(token: string): boolean {
  try {
    const decoded = Buffer.from(token, 'base64').toString('utf-8');
    const lastColon = decoded.lastIndexOf(':');
    const payload = decoded.slice(0, lastColon);
    const sig = decoded.slice(lastColon + 1);
    const expectedSig = createHmac('sha256', SECRET).update(payload).digest('hex');
    if (sig.length !== expectedSig.length) return false;
    let diff = 0;
    for (let i = 0; i < sig.length; i++) {
      diff |= sig.charCodeAt(i) ^ expectedSig.charCodeAt(i);
    }
    const tsStr = payload.split(':')[1];
    const age = Date.now() - parseInt(tsStr, 10);
    return diff === 0 && age < 24 * 60 * 60 * 1000;
  } catch {
    return false;
  }
}

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const { pathname, search } = request.nextUrl;

  // ── Admin route protection ──────────────────────────────────────────────
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    const token = request.cookies.get(SESSION_COOKIE)?.value;
    if (!token || !verifySessionToken(token)) {
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Skip www redirects for Vercel preview/deployment URLs to prevent loops
  if (
    hostname.endsWith('.vercel.app') ||
    hostname === 'localhost' ||
    hostname.startsWith('localhost:')
  ) {
    return NextResponse.next();
  }

  // ── Redirect www → non-www (301 permanent) ─────────────────────────────
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
