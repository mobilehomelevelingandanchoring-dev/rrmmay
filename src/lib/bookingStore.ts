import fs from 'fs'
import path from 'path'
import type { Booking } from '@/types/booking'

// ─── Storage strategy ────────────────────────────────────────────────────────
// Production (Vercel): use Vercel KV (Redis) — persistent, shared across all
//   serverless function instances. Requires KV_REST_API_URL env var.
// Development / self-hosted: fall back to local JSON file.
const USE_KV = !!(process.env.KV_REST_API_URL)
const KV_KEY = 'rrm:bookings'

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

// ─── KV helpers ─────────────────────────────────────────────────────────────
async function readFromKv(): Promise<Booking[]> {
  const { kv } = await import('@vercel/kv')
  return (await kv.get<Booking[]>(KV_KEY)) ?? []
}

async function writeToKv(bookings: Booking[]): Promise<void> {
  const { kv } = await import('@vercel/kv')
  await kv.set(KV_KEY, bookings)
}

// ─── Shared helpers ──────────────────────────────────────────────────────────
async function readBookings(): Promise<Booking[]> {
  return USE_KV ? readFromKv() : readFromFile()
}

async function writeBookings(bookings: Booking[]): Promise<void> {
  if (USE_KV) {
    await writeToKv(bookings)
  } else {
    writeToFile(bookings)
  }
}

function generateId(): string {
  const ts = Date.now().toString(36).toUpperCase()
  const rand = Math.random().toString(36).slice(2, 5).toUpperCase()
  return `BK-${ts}-${rand}`
}

// ─── Public API (all async) ──────────────────────────────────────────────────

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
