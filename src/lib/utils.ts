import { type ClassValue, clsx } from 'clsx'

export function classNames(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function truncateText(text: string, maxLength: number): string {
  const trimmed = text.trim()
  if (trimmed.length <= maxLength) return trimmed
  return trimmed.slice(0, maxLength).trimEnd() + '…'
}
