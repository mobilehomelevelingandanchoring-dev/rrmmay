'use client'

import React, { useState, useTransition } from 'react'
import {
  Building2, Phone, Mail, MapPin, Clock,
  Lock, Eye, EyeOff, Loader2,
  CheckCircle2, AlertCircle, Download,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { changePasswordAction } from '@/lib/adminAuth'
import { formatReceivedAt, formatFullDateTime } from '@/lib/dateUtils'

export interface SettingsStats {
  total: number
  pending: number
  confirmed: number
  completed: number
  revenue: number
  lastReceivedAt: string | null
}

const BUSINESS_INFO: { icon: React.ElementType; label: string; value: string; href?: string }[] = [
  { icon: Building2, label: 'Business', value: 'R.R.M External Cleaning Specialist' },
  { icon: Phone, label: 'Phone', value: '07845 463877', href: 'tel:+447845463877' },
  { icon: Mail, label: 'Email', value: 'rrmexternalcleaning@gmail.com', href: 'mailto:rrmexternalcleaning@gmail.com' },
  { icon: MapPin, label: 'Service Area', value: 'Newton-le-Willows, Warrington & Greater Manchester' },
  { icon: Clock, label: 'Hours', value: 'Mon–Sat: 8am–6pm · Sunday: Closed' },
]

export function SettingsClient({ stats }: { stats: SettingsStats }) {
  return (
    <div className="flex-1 p-4 md:p-6 space-y-6 max-w-2xl">
      <div>
        <h1 className="text-xl font-bold text-foreground">Settings</h1>
        <p className="text-sm text-muted-foreground mt-0.5">
          Manage your admin account and review business configuration.
        </p>
      </div>

      {/* System Status */}
      <SettingsCard
        title="System Status"
        description="Live snapshot of your booking data and storage health."
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
          <StatChip label="Total" value={stats.total} />
          <StatChip label="Pending" value={stats.pending} color="amber" />
          <StatChip label="Confirmed" value={stats.confirmed} color="blue" />
          <StatChip label="Revenue" value={`£${stats.revenue.toFixed(0)}`} color="teal" isText />
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
            Storage connected
          </span>
          {stats.lastReceivedAt && (
            <span
              title={formatFullDateTime(stats.lastReceivedAt)}
              suppressHydrationWarning
            >
              Last booking: <span className="font-medium text-foreground">{formatReceivedAt(stats.lastReceivedAt)}</span>
            </span>
          )}
        </div>
      </SettingsCard>

      {/* Business Information */}
      <SettingsCard
        title="Business Information"
        description="Public-facing contact details displayed on your website."
      >
        <dl className="divide-y divide-border -my-1">
          {BUSINESS_INFO.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="flex items-center gap-3 py-3">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4 text-accent" aria-hidden />
              </div>
              <div className="min-w-0 flex-1">
                <dt className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide">{label}</dt>
                {href ? (
                  <dd>
                    <a href={href} className="text-sm font-medium text-foreground hover:text-accent transition-colors truncate">
                      {value}
                    </a>
                  </dd>
                ) : (
                  <dd className="text-sm font-medium text-foreground">{value}</dd>
                )}
              </div>
            </div>
          ))}
        </dl>
      </SettingsCard>

      {/* Admin Password */}
      <PasswordCard />

      {/* Data Export */}
      <SettingsCard
        title="Export Data"
        description="Download all booking records as a CSV file — open in Excel or Google Sheets."
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-foreground">
              {stats.total} booking{stats.total !== 1 ? 's' : ''} available
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Includes customer details, services, status, and pricing.
            </p>
          </div>
          <a href="/api/admin/export" download>
            <Button variant="outline" className="gap-2 shrink-0">
              <Download className="w-4 h-4" />
              Export CSV
            </Button>
          </a>
        </div>
      </SettingsCard>
    </div>
  )
}

function PasswordCard() {
  const [currentPw, setCurrentPw] = useState('')
  const [newPw, setNewPw] = useState('')
  const [confirmPw, setConfirmPw] = useState('')
  const [showCurrent, setShowCurrent] = useState(false)
  const [showNew, setShowNew] = useState(false)
  const [feedback, setFeedback] = useState<{ ok: boolean; msg: string } | null>(null)
  const [isPending, startTransition] = useTransition()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setFeedback(null)
    if (newPw.length < 8) {
      setFeedback({ ok: false, msg: 'New password must be at least 8 characters.' })
      return
    }
    if (newPw !== confirmPw) {
      setFeedback({ ok: false, msg: 'New passwords do not match.' })
      return
    }
    startTransition(async () => {
      const res = await changePasswordAction(currentPw, newPw)
      if (res.success) {
        setCurrentPw('')
        setNewPw('')
        setConfirmPw('')
        setFeedback({ ok: true, msg: 'Password updated successfully.' })
      } else {
        setFeedback({ ok: false, msg: res.error ?? 'Failed to update password.' })
      }
    })
  }

  return (
    <SettingsCard
      title="Admin Password"
      description="Change the password used to access this admin panel."
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <PasswordField
          id="current-pw"
          label="Current password"
          value={currentPw}
          onChange={setCurrentPw}
          show={showCurrent}
          onToggleShow={() => setShowCurrent((v) => !v)}
          placeholder="Enter current password"
        />
        <PasswordField
          id="new-pw"
          label="New password"
          value={newPw}
          onChange={setNewPw}
          show={showNew}
          onToggleShow={() => setShowNew((v) => !v)}
          placeholder="Minimum 8 characters"
          minLength={8}
        />
        <div className="space-y-1.5">
          <Label htmlFor="confirm-pw">Confirm new password</Label>
          <Input
            id="confirm-pw"
            type="password"
            value={confirmPw}
            onChange={(e) => setConfirmPw(e.target.value)}
            placeholder="Re-enter new password"
            required
            minLength={8}
          />
        </div>

        {feedback && (
          <div
            className={`flex items-center gap-2 p-3 rounded-lg text-sm border ${
              feedback.ok
                ? 'bg-green-50 text-green-700 border-green-100'
                : 'bg-destructive/10 text-destructive border-destructive/20'
            }`}
          >
            {feedback.ok
              ? <CheckCircle2 className="w-4 h-4 shrink-0" />
              : <AlertCircle className="w-4 h-4 shrink-0" />}
            {feedback.msg}
          </div>
        )}

        <Button type="submit" disabled={isPending} className="gap-2">
          {isPending
            ? <><Loader2 className="w-4 h-4 animate-spin" /> Updating…</>
            : <><Lock className="w-4 h-4" /> Update Password</>}
        </Button>
      </form>
    </SettingsCard>
  )
}

function PasswordField({
  id, label, value, onChange, show, onToggleShow, placeholder, minLength,
}: {
  id: string
  label: string
  value: string
  onChange: (v: string) => void
  show: boolean
  onToggleShow: () => void
  placeholder?: string
  minLength?: number
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <Input
          id={id}
          type={show ? 'text' : 'password'}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required
          minLength={minLength}
          className="pr-10"
        />
        <button
          type="button"
          onClick={onToggleShow}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          tabIndex={-1}
          aria-label={show ? 'Hide password' : 'Show password'}
        >
          {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </button>
      </div>
    </div>
  )
}

function SettingsCard({
  title, description, children,
}: {
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <Card className="border-border/60 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-bold">{title}</CardTitle>
        <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}

const CHIP_COLORS: Record<string, string> = {
  default: 'bg-muted border-border text-foreground',
  amber: 'bg-amber-50 border-amber-100 text-amber-700',
  blue: 'bg-blue-50 border-blue-100 text-blue-700',
  teal: 'bg-accent/10 border-accent/20 text-accent',
}

function StatChip({
  label, value, color = 'default', isText,
}: {
  label: string
  value: number | string
  color?: string
  isText?: boolean
}) {
  return (
    <div className={`rounded-lg border p-3 ${CHIP_COLORS[color]}`}>
      <p className="text-[10px] font-semibold uppercase tracking-wide opacity-60">{label}</p>
      <p className={`font-bold mt-0.5 ${isText ? 'text-xl' : 'text-2xl'}`}>{value}</p>
    </div>
  )
}
