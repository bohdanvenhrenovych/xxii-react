import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function classNames(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function truncateText(text: string, maxLength: number): string {
  const trimmed = text.trim()
  if (trimmed.length <= maxLength) return trimmed
  return trimmed.slice(0, maxLength).trimEnd() + '…'
}

/** Format ISO 8601 timestamp for display (e.g. "12:41"). */
export function formatTimestamp(iso: string): string {
  const d = new Date(iso)
  return d.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })
}
