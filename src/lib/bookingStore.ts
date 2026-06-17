import fs from 'fs'
import path from 'path'
import type { Booking } from '@/types/booking'

// Vercel serverless: /var/task is read-only → use /tmp (writable, ephemeral).
// Self-hosted Node.js: use <project>/data/ (persistent).
const DATA_DIR = process.env.VERCEL
  ? '/tmp/rrm-data'
  : path.join(process.cwd(), 'data')

const BOOKINGS_FILE = path.join(DATA_DIR, 'bookings.json')

function ensureDataDir(): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true })
    }
  } catch {
    // Silently skip — reads will return [] and writes below handle their own errors
  }
}

function readBookings(): Booking[] {
  try {
    ensureDataDir()
    if (!fs.existsSync(BOOKINGS_FILE)) return []
    const raw = fs.readFileSync(BOOKINGS_FILE, 'utf-8')
    return JSON.parse(raw) as Booking[]
  } catch {
    return []
  }
}

function writeBookings(bookings: Booking[]): void {
  try {
    ensureDataDir()
    fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(bookings, null, 2), 'utf-8')
  } catch {
    // Write failed (e.g. read-only filesystem). Data is not persisted this call.
  }
}

function generateId(): string {
  const ts = Date.now().toString(36).toUpperCase()
  const rand = Math.random().toString(36).slice(2, 5).toUpperCase()
  return `BK-${ts}-${rand}`
}

export function getAllBookings(): Booking[] {
  return readBookings().sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )
}

export function getBookingById(id: string): Booking | null {
  return readBookings().find((b) => b.id === id) ?? null
}

export function createBooking(
  data: Omit<Booking, 'id' | 'createdAt' | 'updatedAt' | 'status'>
): Booking {
  const bookings = readBookings()
  const now = new Date().toISOString()
  const booking: Booking = {
    ...data,
    id: generateId(),
    createdAt: now,
    updatedAt: now,
    status: 'pending_quote',
  }
  bookings.push(booking)
  writeBookings(bookings)
  return booking
}

export function updateBooking(
  id: string,
  updates: Partial<Pick<Booking, 'status' | 'confirmedPrice'>>
): Booking | null {
  const bookings = readBookings()
  const index = bookings.findIndex((b) => b.id === id)
  if (index === -1) return null
  bookings[index] = { ...bookings[index], ...updates, updatedAt: new Date().toISOString() }
  writeBookings(bookings)
  return bookings[index]
}

export function getBookedTimeSlotsForDate(dateStr: string): string[] {
  return readBookings()
    .filter((b) => b.scheduledDate === dateStr && b.status !== 'cancelled')
    .map((b) => b.scheduledTime)
}
