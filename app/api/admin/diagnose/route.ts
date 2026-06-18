import { NextResponse } from 'next/server'
import { isAdminAuthenticated } from '@/lib/adminAuth'

export const dynamic = 'force-dynamic'

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const upstashUrl = process.env.UPSTASH_REDIS_REST_URL
  const upstashToken = process.env.UPSTASH_REDIS_REST_TOKEN
  const kvUrl = process.env.KV_REST_API_URL
  const kvToken = process.env.KV_REST_API_TOKEN

  const redisUrl = upstashUrl ?? kvUrl ?? ''
  const redisToken = upstashToken ?? kvToken ?? ''
  const useRedis = !!(redisUrl && redisToken)

  const info: Record<string, unknown> = {
    storage: useRedis ? 'redis' : 'local-file (EPHEMERAL on Vercel — bookings will be lost!)',
    env: {
      UPSTASH_REDIS_REST_URL: upstashUrl ? '✓ set' : '✗ missing',
      UPSTASH_REDIS_REST_TOKEN: upstashToken ? '✓ set' : '✗ missing',
      KV_REST_API_URL: kvUrl ? '✓ set' : '✗ missing',
      KV_REST_API_TOKEN: kvToken ? '✓ set' : '✗ missing',
    },
  }

  if (useRedis) {
    try {
      // Test write via direct REST
      const writeRes = await fetch(`${redisUrl}/set/rrm:diagnose-test`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${redisToken}`, 'Content-Type': 'application/json' },
        body: JSON.stringify([`ping-${Date.now()}`]),
        cache: 'no-store',
      })
      const writeJson = await writeRes.json() as { result?: unknown; error?: string }
      info.write_test = writeRes.ok ? `OK (result: ${writeJson.result})` : `FAILED: ${writeJson.error}`

      // Read bookings
      const readRes = await fetch(`${redisUrl}/get/rrm:bookings`, {
        headers: { Authorization: `Bearer ${redisToken}` },
        cache: 'no-store',
      })
      const readJson = await readRes.json() as { result?: string | null }
      const raw = readJson.result
      const parsed = raw ? JSON.parse(raw) : null
      info.booking_count = Array.isArray(parsed) ? parsed.length : 0
      info.bookings_raw_type = Array.isArray(parsed) ? 'array' : typeof parsed
    } catch (err) {
      info.redis_test = 'FAILED'
      info.redis_error = String(err)
    }
  } else {
    info.redis_test = 'skipped — no env vars found'
  }

  return NextResponse.json(info, { status: 200 })
}
