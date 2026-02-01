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
