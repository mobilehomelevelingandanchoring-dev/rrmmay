/**
 * GA4 helper module.
 *
 * All functions are safe to import in server components — they guard with
 * `typeof window === 'undefined'` and never reference browser globals at
 * module-evaluation time.
 */

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? '';

// ─── Window type augmentation ────────────────────────────────────────────────

declare global {
  interface Window {
    // gtag is defined by our inline init script before the GA library loads.
    // Pushes to window.dataLayer; the library processes the queue on load.
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

// ─── Internal dispatcher ─────────────────────────────────────────────────────

function dispatch(...args: unknown[]): void {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag === 'function') {
    window.gtag(...args);
  }
}

// ─── Page view ───────────────────────────────────────────────────────────────

/**
 * Send a GA4 page_view. Called on every route change (including the first
 * mount) by <AnalyticsInner />.
 */
export function pageview(url: string): void {
  dispatch('config', GA_MEASUREMENT_ID, {
    page_path: url,
    transport_type: 'beacon',
  });
}

// ─── Custom event ────────────────────────────────────────────────────────────

export interface GtagEvent {
  /** GA4 event name (snake_case recommended). */
  action: string;
  /** Maps to event_category dimension. */
  category: string;
  /** Maps to event_label dimension. */
  label?: string;
  /** Numeric value associated with the event. */
  value?: number;
  /** Any additional GA4 parameters. */
  [key: string]: unknown;
}

/**
 * Deduplication window in ms. Two identical events fired within this window
 * are collapsed into one (guards against double-click / React StrictMode
 * double-invocation in dev).
 */
const DEDUP_WINDOW_MS = 500;
const recentEvents = new Map<string, number>();

/**
 * Fire a custom GA4 event with built-in deduplication.
 *
 * @example
 * event({ action: 'click', category: 'Button', label: 'Get a Quote' });
 */
export function event({ action, category, label, value, ...rest }: GtagEvent): void {
  const key = `${action}:${category}:${label ?? ''}`;
  const now = Date.now();

  if ((recentEvents.get(key) ?? 0) + DEDUP_WINDOW_MS > now) return;
  recentEvents.set(key, now);

  dispatch('event', action, {
    event_category: category,
    event_label: label,
    value,
    ...rest,
  });
}

// ─── Convenience helpers ─────────────────────────────────────────────────────

/**
 * Track a button click.
 *
 * @example
 * <button onClick={() => trackButtonClick('Get a Quote', 'hero')}>…</button>
 */
export function trackButtonClick(label: string, location = 'unknown'): void {
  event({ action: 'click', category: 'Button', label, page_location: location });
}

/**
 * Track a form submission.
 *
 * @example
 * trackFormSubmit('contact-form');           // success
 * trackFormSubmit('contact-form', false);    // error
 */
export function trackFormSubmit(formName: string, success = true): void {
  event({
    action: success ? 'form_submit_success' : 'form_submit_error',
    category: 'Form',
    label: formName,
  });
}

/**
 * Track a phone number click (tel: link).
 *
 * @example
 * <a href="tel:+447845463877" onClick={() => trackPhoneClick('header')}>…</a>
 */
export function trackPhoneClick(location = 'unknown'): void {
  event({ action: 'phone_click', category: 'Contact', label: location });
}

/**
 * Track when a user requests a quote for a specific service.
 *
 * @example
 * trackQuoteRequest('driveway-cleaning');
 */
export function trackQuoteRequest(service = 'general'): void {
  event({ action: 'quote_request', category: 'Lead', label: service });
}
