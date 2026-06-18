'use client'

import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { CheckCircle2 } from 'lucide-react'
import { StepScope } from './StepScope'
import { StepSchedule } from './StepSchedule'
import { StepContact } from './StepContact'
import { BookingDrawer } from './BookingDrawer'
import { calculateEstimate } from '@/data/bookingServices'
import { submitBookingAction } from '@/lib/bookingActions'
import type { ContactFormData } from '@/lib/bookingSchema'
import type { ServiceId, PropertyType, WizardFormState } from '@/types/booking'

const STEPS = [
  { label: 'Scope', description: 'Services & property' },
  { label: 'Schedule', description: 'Date & time' },
  { label: 'Details', description: 'Your information' },
] as const

const INITIAL_STATE: WizardFormState = {
  services: [],
  propertyType: '',
  bedroomCount: 2,
  scheduledDate: '',
  scheduledTime: '',
  name: '',
  phone: '',
  email: '',
  postalCode: '',
  address: '',
  notes: '',
}

export function BookingWizard() {
  const router = useRouter()
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [form, setForm] = useState<WizardFormState>(INITIAL_STATE)
  const [contactValid, setContactValid] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { durationHours, estimatedPrice } = calculateEstimate(
    form.services,
    form.propertyType,
    form.propertyType !== 'commercial' ? form.bedroomCount : undefined
  )

  // Step 1 validation
  const step1Valid = form.services.length > 0 && form.propertyType !== ''

  // Step 2 validation
  const step2Valid = form.scheduledDate !== '' && form.scheduledTime !== ''

  const nextLabel =
    step === 1 ? 'Choose Date' : step === 2 ? 'Your Details' : 'Confirm Booking'

  const nextDisabled =
    (step === 1 && !step1Valid) ||
    (step === 2 && !step2Valid) ||
    (step === 3 && !contactValid)

  function goNext() {
    if (step < 3) {
      setStep((s) => (s + 1) as 1 | 2 | 3)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      handleSubmit()
    }
  }

  function goBack() {
    if (step > 1) {
      setStep((s) => (s - 1) as 1 | 2 | 3)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  async function handleSubmit() {
    setIsSubmitting(true)
    setError(null)
    try {
      const result = await submitBookingAction({
        services: form.services,
        propertyType: form.propertyType as PropertyType,
        bedroomCount: form.propertyType !== 'commercial' ? form.bedroomCount : undefined,
        scheduledDate: form.scheduledDate,
        scheduledTime: form.scheduledTime,
        customer: {
          name: form.name,
          phone: form.phone,
          email: form.email,
          postalCode: form.postalCode,
          address: form.address,
          notes: form.notes || undefined,
        },
      })
      if (result.success && result.bookingId) {
        router.push(`/book/success?id=${result.bookingId}`)
      } else {
        setError(result.error ?? 'Something went wrong. Please try again.')
      }
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleContactChange = useCallback(
    (data: Partial<ContactFormData>, isValid: boolean) => {
      setForm((f) => ({
        ...f,
        name: data.name ?? f.name,
        phone: data.phone ?? f.phone,
        email: data.email ?? f.email,
        postalCode: data.postalCode ?? f.postalCode,
        address: data.address ?? f.address,
        notes: data.notes ?? f.notes,
      }))
      setContactValid(isValid)
    },
    []
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground px-4 pt-12 pb-8">
        <p className="text-sm font-medium text-white/60 mb-1">RRM External Cleaning</p>
        <h1 className="text-2xl font-bold">Book a Clean</h1>
        <p className="text-white/70 text-sm mt-1">Get an instant estimate — no obligation</p>
      </header>

      {/* Step indicator */}
      <div className="bg-primary/5 border-b border-border px-4 py-3">
        <div className="flex items-center gap-0 max-w-sm">
          {STEPS.map((s, i) => {
            const stepNum = (i + 1) as 1 | 2 | 3
            const isActive = step === stepNum
            const isDone = step > stepNum
            return (
              <div key={s.label} className="flex items-center flex-1">
                <div className="flex items-center gap-2 min-w-0">
                  <div
                    className={cn(
                      'w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-all',
                      isDone
                        ? 'bg-accent text-accent-foreground'
                        : isActive
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    )}
                  >
                    {isDone ? <CheckCircle2 className="w-4 h-4" /> : stepNum}
                  </div>
                  <span
                    className={cn(
                      'text-xs font-medium truncate',
                      isActive ? 'text-foreground' : 'text-muted-foreground'
                    )}
                  >
                    {s.label}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    className={cn(
                      'h-px flex-1 mx-2 transition-colors',
                      isDone ? 'bg-accent' : 'bg-border'
                    )}
                  />
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Step content */}
      <main className="px-4 pt-6 pb-36">
        <div
          className="animate-in fade-in-0 duration-200"
          key={step}
        >
          {step === 1 && (
            <StepScope
              selectedServices={form.services}
              propertyType={form.propertyType}
              bedroomCount={form.bedroomCount}
              onServicesChange={(services) => setForm((f) => ({ ...f, services }))}
              onPropertyTypeChange={(propertyType) => setForm((f) => ({ ...f, propertyType }))}
              onBedroomCountChange={(bedroomCount) => setForm((f) => ({ ...f, bedroomCount }))}
            />
          )}
          {step === 2 && (
            <StepSchedule
              durationHours={durationHours}
              selectedDate={form.scheduledDate}
              selectedTime={form.scheduledTime}
              onDateChange={(scheduledDate) => setForm((f) => ({ ...f, scheduledDate }))}
              onTimeChange={(scheduledTime) => setForm((f) => ({ ...f, scheduledTime }))}
            />
          )}
          {step === 3 && (
            <StepContact
              defaultValues={{
                name: form.name,
                phone: form.phone,
                email: form.email,
                postalCode: form.postalCode,
                address: form.address,
                notes: form.notes,
              }}
              onChange={handleContactChange}
            />
          )}
        </div>

        {error && (
          <div className="mt-4 p-4 rounded-xl bg-destructive/10 border border-destructive/20">
            <p className="text-sm text-destructive font-medium">{error}</p>
          </div>
        )}
      </main>

      {/* Sticky bottom drawer */}
      <BookingDrawer
        step={step}
        services={form.services}
        propertyType={form.propertyType}
        bedroomCount={form.bedroomCount}
        durationHours={durationHours}
        estimatedPrice={estimatedPrice}
        scheduledDate={form.scheduledDate}
        scheduledTime={form.scheduledTime}
        onNext={goNext}
        onBack={goBack}
        nextLabel={nextLabel}
        nextDisabled={nextDisabled}
        isSubmitting={isSubmitting}
      />
    </div>
  )
}
