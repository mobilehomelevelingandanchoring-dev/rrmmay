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
    storage: useRedis ? 'redis' : 'local-file (ephemeral on Vercel!)',
    env: {
      UPSTASH_REDIS_REST_URL: upstashUrl ? '✓ set' : '✗ missing',
      UPSTASH_REDIS_REST_TOKEN: upstashToken ? '✓ set' : '✗ missing',
      KV_REST_API_URL: kvUrl ? '✓ set' : '✗ missing',
      KV_REST_API_TOKEN: kvToken ? '✓ set' : '✗ missing',
    },
  }

  if (useRedis) {
    try {
      const { Redis } = await import('@upstash/redis')
      const redis = new Redis({ url: redisUrl, token: redisToken })
      const bookings = await redis.get<unknown[]>('rrm:bookings')
      info.redis_test = 'connection OK'
      info.booking_count = Array.isArray(bookings) ? bookings.length : 0
      info.raw_type = typeof bookings
    } catch (err) {
      info.redis_test = 'FAILED'
      info.redis_error = String(err)
    }
  } else {
    info.redis_test = 'skipped — no env vars found'
  }

  return NextResponse.json(info, { status: 200 })
}
