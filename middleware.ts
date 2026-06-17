import { NextRequest, NextResponse } from 'next/server';

const PRIMARY_DOMAIN = 'rrmexternalcleaningspecialist.co.uk';
const SESSION_COOKIE = 'rrm_admin_session';
const SECRET = process.env.SESSION_SECRET ?? 'rrm-session-secret-key';

// Uses Web Crypto API (Edge Runtime compatible — no Node.js 'crypto' import)
async function verifySessionToken(token: string): Promise<boolean> {
  try {
    const decoded = atob(token);
    const lastColon = decoded.lastIndexOf(':');
    const payload = decoded.slice(0, lastColon);
    const sig = decoded.slice(lastColon + 1);

    const enc = new TextEncoder();
    const key = await crypto.subtle.importKey(
      'raw',
      enc.encode(SECRET),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['sign']
    );
    const sigBuffer = await crypto.subtle.sign('HMAC', key, enc.encode(payload));
    const expectedSig = Array.from(new Uint8Array(sigBuffer))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');

    if (sig !== expectedSig) return false;
    const tsStr = payload.split(':')[1];
    const age = Date.now() - parseInt(tsStr, 10);
    return age < 24 * 60 * 60 * 1000;
  } catch {
    return false;
  }
}

export async function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const { pathname, search } = request.nextUrl;

  // ── Admin route protection ──────────────────────────────────────────────
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    const token = request.cookies.get(SESSION_COOKIE)?.value;
    const valid = token ? await verifySessionToken(token) : false;
    if (!valid) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
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
