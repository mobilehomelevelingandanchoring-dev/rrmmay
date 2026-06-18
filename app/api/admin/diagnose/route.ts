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
  const prefixedUrl = process.env.rrmexternalcleaningspecialist_KV_REST_API_URL
  const prefixedToken = process.env.rrmexternalcleaningspecialist_KV_REST_API_TOKEN

  const redisUrl = upstashUrl ?? kvUrl ?? prefixedUrl ?? ''
  const redisToken = upstashToken ?? kvToken ?? prefixedToken ?? ''
  const useRedis = !!(redisUrl && redisToken)

  const info: Record<string, unknown> = {
    storage: useRedis ? 'redis' : 'local-file (EPHEMERAL on Vercel — bookings will be lost!)',
    env: {
      UPSTASH_REDIS_REST_URL: upstashUrl ? '✓ set' : '✗ missing',
      UPSTASH_REDIS_REST_TOKEN: upstashToken ? '✓ set' : '✗ missing',
      KV_REST_API_URL: kvUrl ? '✓ set' : '✗ missing',
      KV_REST_API_TOKEN: kvToken ? '✓ set' : '✗ missing',
      'rrmexternalcleaningspecialist_KV_REST_API_URL': prefixedUrl ? '✓ set' : '✗ missing',
      'rrmexternalcleaningspecialist_KV_REST_API_TOKEN': prefixedToken ? '✓ set' : '✗ missing',
    },
    active_url: redisUrl ? redisUrl.slice(0, 30) + '...' : 'none',
  }

  if (useRedis) {
    try {
      const headers = { Authorization: `Bearer ${redisToken}`, 'Content-Type': 'application/json' }

      // Test write
      const writeRes = await fetch(redisUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify(['SET', 'rrm:diagnose-test', `ping-${Date.now()}`]),
        cache: 'no-store',
      })
      const writeJson = await writeRes.json() as { result?: unknown; error?: string }
      info.write_test = writeRes.ok ? `OK (result: ${writeJson.result})` : `FAILED: ${JSON.stringify(writeJson)}`

      // Read bookings
      const readRes = await fetch(redisUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify(['GET', 'rrm:bookings']),
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
