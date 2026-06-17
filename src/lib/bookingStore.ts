import fs from 'fs'
import path from 'path'
import type { Booking } from '@/types/booking'

const DATA_DIR = path.join(process.cwd(), 'data')
const BOOKINGS_FILE = path.join(DATA_DIR, 'bookings.json')

function ensureDataDir(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true })
  }
}

function readBookings(): Booking[] {
  ensureDataDir()
  if (!fs.existsSync(BOOKINGS_FILE)) return []
  try {
    const raw = fs.readFileSync(BOOKINGS_FILE, 'utf-8')
    return JSON.parse(raw) as Booking[]
  } catch {
    return []
  }
}

function writeBookings(bookings: Booking[]): void {
  ensureDataDir()
  fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(bookings, null, 2), 'utf-8')
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
