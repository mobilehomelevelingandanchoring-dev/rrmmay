import fs from 'fs'
import path from 'path'
import type { Booking } from '@/types/booking'

// ─── Storage strategy ────────────────────────────────────────────────────────
// Production (Vercel + Upstash): UPSTASH_REDIS_REST_URL is set automatically
//   when you connect an Upstash Redis database in the Vercel marketplace.
//   All serverless instances share the same Redis — bookings persist correctly.
//
// Development / self-hosted (no env var): falls back to a local JSON file.
const USE_REDIS = !!(process.env.UPSTASH_REDIS_REST_URL)
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
  return new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL!,
    token: process.env.UPSTASH_REDIS_REST_TOKEN!,
  })
}

async function readFromRedis(): Promise<Booking[]> {
  try {
    const redis = await getRedis()
    return (await redis.get<Booking[]>(REDIS_KEY)) ?? []
  } catch {
    return []
  }
}

async function writeToRedis(bookings: Booking[]): Promise<void> {
  try {
    const redis = await getRedis()
    await redis.set(REDIS_KEY, bookings)
  } catch { /* ignore — log in production monitoring */ }
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
