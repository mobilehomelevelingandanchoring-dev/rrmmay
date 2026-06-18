const TZ = 'Europe/London'

function ukDateStr(d: Date): string {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit',
  }).format(d)
}

function ukTime12(d: Date): string {
  return d.toLocaleTimeString('en-GB', {
    timeZone: TZ, hour: 'numeric', minute: '2-digit', hour12: true,
  })
}

/** Pretty-prints when a booking was received (uses relative time for recent ones). */
export function formatReceivedAt(isoString: string): string {
  const d = new Date(isoString)
  const now = new Date()
  const diffMs = now.getTime() - d.getTime()
  const diffMins = Math.floor(diffMs / 60_000)

  if (diffMins < 2) return 'Just now'
  if (diffMins < 60) return `${diffMins} min ago`

  const today = ukDateStr(now)
  const yesterday = ukDateStr(new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1))
  const bookingDay = ukDateStr(d)

  if (bookingDay === today) return `Today at ${ukTime12(d)}`
  if (bookingDay === yesterday) return `Yesterday at ${ukTime12(d)}`

  const diffDays = Math.floor(diffMs / 86_400_000)
  if (diffDays < 7) {
    const weekDay = d.toLocaleDateString('en-GB', { timeZone: TZ, weekday: 'short', day: 'numeric', month: 'short' })
    return `${weekDay} at ${ukTime12(d)}`
  }

  return d.toLocaleDateString('en-GB', { timeZone: TZ, day: 'numeric', month: 'short', year: 'numeric' })
}

/** Full datetime string — used in tooltips and copy text. */
export function formatFullDateTime(isoString: string): string {
  const d = new Date(isoString)
  return d.toLocaleString('en-GB', {
    timeZone: TZ,
    day: 'numeric', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit', hour12: true,
  })
}

/** Formats a scheduled date (YYYY-MM-DD). Parsed as local time to avoid day-shift. */
export function formatScheduledDate(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-GB', {
    weekday: 'short', day: 'numeric', month: 'short', year: 'numeric',
  })
}

/** Formats a 24h time string to 12h (e.g. "14:30" → "2:30pm"). */
export function formatTime12(timeStr: string): string {
  const [h, m] = timeStr.split(':').map(Number)
  const period = h < 12 ? 'am' : 'pm'
  const h12 = h === 0 ? 12 : h > 12 ? h - 12 : h
  return `${h12}:${String(m).padStart(2, '0')}${period}`
}
