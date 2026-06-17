'use server'

import { cookies } from 'next/headers'
import { createHmac } from 'crypto'

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? 'rrm2026.com'
const SESSION_COOKIE = 'rrm_admin_session'
const SECRET = process.env.SESSION_SECRET ?? 'rrm-session-secret-key'

function signToken(payload: string): string {
  return createHmac('sha256', SECRET).update(payload).digest('hex')
}

function buildSessionToken(): string {
  const payload = `admin:${Date.now()}`
  const sig = signToken(payload)
  return Buffer.from(`${payload}:${sig}`).toString('base64')
}

function verifySessionToken(token: string): boolean {
  try {
    const decoded = Buffer.from(token, 'base64').toString('utf-8')
    const lastColon = decoded.lastIndexOf(':')
    const payload = decoded.slice(0, lastColon)
    const sig = decoded.slice(lastColon + 1)
    const expectedSig = signToken(payload)
    // Constant-time comparison
    if (sig.length !== expectedSig.length) return false
    let diff = 0
    for (let i = 0; i < sig.length; i++) {
      diff |= sig.charCodeAt(i) ^ expectedSig.charCodeAt(i)
    }
    // Sessions expire after 24 hours
    const tsStr = payload.split(':')[1]
    const age = Date.now() - parseInt(tsStr, 10)
    return diff === 0 && age < 24 * 60 * 60 * 1000
  } catch {
    return false
  }
}

export async function loginAction(
  password: string
): Promise<{ success: boolean; error?: string }> {
  if (password !== ADMIN_PASSWORD) {
    return { success: false, error: 'Incorrect password' }
  }
  const token = buildSessionToken()
  const cookieStore = await cookies()
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24, // 24 hours
    path: '/',
  })
  return { success: true }
}

export async function logoutAction(): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.delete(SESSION_COOKIE)
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies()
  const token = cookieStore.get(SESSION_COOKIE)?.value
  return !!token && verifySessionToken(token)
}
