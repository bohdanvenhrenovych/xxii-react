export const CHAT_ICONS = [
  { id: 'engineering', label: 'Engineering', src: '/icons/⚙️.png' },
  { id: 'product', label: 'Product', src: '/icons/📦.png' },
  { id: 'general', label: 'General', src: '/icons/💬.png' },
] as const

export type ChatIconId = (typeof CHAT_ICONS)[number]['id']

export interface ChatIconEntry {
  id: ChatIconId
  label: string
  src: string
}

const srcById = new Map<ChatIconId, string>(
  CHAT_ICONS.map(({ id, src }) => [id, src])
)

export function getChatIconSrc(id: ChatIconId): string {
  const src = srcById.get(id)
  if (!src) throw new Error(`Unknown chat icon: ${id}`)
  return src
}
