import fs from 'fs'
import path from 'path'
import type { Booking } from '@/types/booking'

// ─── Storage strategy ────────────────────────────────────────────────────────
// Production (Vercel + Upstash): env vars are injected automatically when you
//   connect an Upstash database via the Vercel marketplace. Two naming
//   conventions exist depending on how the integration was created:
//     • New Upstash integration: UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN
//     • Vercel KV (legacy):      KV_REST_API_URL / KV_REST_API_TOKEN
//   We support both.
//
// Development / self-hosted (no env var): falls back to a local JSON file.
const REDIS_URL =
  process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL ?? ''
const REDIS_TOKEN =
  process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN ?? ''
const USE_REDIS = !!(REDIS_URL && REDIS_TOKEN)
const REDIS_KEY = 'rrm:bookings'

// ─── File-system fallback (local dev) ───────────────────────────────────────
const DATA_DIR = path.join(process.cwd(), 'data')
const BOOKINGS_FILE = path.join(DATA_DIR, 'bookings.json')

function ensureDataDir(): void {
  try {
    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true })
  } catch { /* ignore */ }
}

function readFromFile(): Booking[] {
  try {
    ensureDataDir()
    if (!fs.existsSync(BOOKINGS_FILE)) return []
    return JSON.parse(fs.readFileSync(BOOKINGS_FILE, 'utf-8')) as Booking[]
  } catch {
    return []
  }
}

function writeToFile(bookings: Booking[]): void {
  try {
    ensureDataDir()
    fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(bookings, null, 2), 'utf-8')
  } catch { /* ignore */ }
}

// ─── Redis helpers (Upstash) ─────────────────────────────────────────────────
async function getRedis() {
  const { Redis } = await import('@upstash/redis')
  return new Redis({ url: REDIS_URL, token: REDIS_TOKEN })
}

async function readFromRedis(): Promise<Booking[]> {
  try {
    const redis = await getRedis()
    const raw = await redis.get<string>(REDIS_KEY)
    if (!raw) return []
    const parsed = typeof raw === 'string' ? JSON.parse(raw) : raw
    return Array.isArray(parsed) ? parsed : []
  } catch (err) {
    console.error('[bookingStore] Redis read error:', err)
    return []
  }
}

async function writeToRedis(bookings: Booking[]): Promise<void> {
  try {
    const redis = await getRedis()
    await redis.set(REDIS_KEY, JSON.stringify(bookings))
  } catch (err) {
    console.error('[bookingStore] Redis write error:', err)
  }
}

// ─── Internal read/write ─────────────────────────────────────────────────────
async function readBookings(): Promise<Booking[]> {
  return USE_REDIS ? readFromRedis() : readFromFile()
}

async function writeBookings(bookings: Booking[]): Promise<void> {
  if (USE_REDIS) {
    await writeToRedis(bookings)
  } else {
    writeToFile(bookings)
  }
}

function generateId(): string {
  const ts = Date.now().toString(36).toUpperCase()
  const rand = Math.random().toString(36).slice(2, 5).toUpperCase()
  return `BK-${ts}-${rand}`
}

// ─── Public API ───────────────────────────────────────────────────────────────

export async function getAllBookings(): Promise<Booking[]> {
  const bookings = await readBookings()
  return bookings.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )
}

export async function getBookingById(id: string): Promise<Booking | null> {
  const bookings = await readBookings()
  return bookings.find((b) => b.id === id) ?? null
}

export async function createBooking(
  data: Omit<Booking, 'id' | 'createdAt' | 'updatedAt' | 'status'>
): Promise<Booking> {
  const bookings = await readBookings()
  const now = new Date().toISOString()
  const booking: Booking = {
    ...data,
    id: generateId(),
    createdAt: now,
    updatedAt: now,
    status: 'pending_quote',
  }
  bookings.push(booking)
  await writeBookings(bookings)
  return booking
}

export async function updateBooking(
  id: string,
  updates: Partial<Pick<Booking, 'status' | 'confirmedPrice'>>
): Promise<Booking | null> {
  const bookings = await readBookings()
  const index = bookings.findIndex((b) => b.id === id)
  if (index === -1) return null
  bookings[index] = { ...bookings[index], ...updates, updatedAt: new Date().toISOString() }
  await writeBookings(bookings)
  return bookings[index]
}

export async function getBookedTimeSlotsForDate(dateStr: string): Promise<string[]> {
  const bookings = await readBookings()
  return bookings
    .filter((b) => b.scheduledDate === dateStr && b.status !== 'cancelled')
    .map((b) => b.scheduledTime ?? '')
    .filter(Boolean)
}
