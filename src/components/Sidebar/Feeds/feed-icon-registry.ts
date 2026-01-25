/**
 * Single source of truth for feed icons. Icons are custom PNGs in public/icons/.
 * To add an icon: add a row to FEED_ICONS and put the file in public/icons/.
 * For an icon picker: map over FEED_ICONS and show each label + img.
 */

export const FEED_ICONS = [
  { id: 'megaphone', label: 'Megaphone', src: '/icons/📢.png' },
  { id: 'laptop', label: 'Laptop', src: '/icons/💻.png' },
  { id: 'palette', label: 'Palette', src: '/icons/🎨.png' },
  { id: 'dice', label: 'Dice', src: '/icons/🎲.png' },
] as const

export type FeedIconId = (typeof FEED_ICONS)[number]['id']

export interface FeedIconEntry {
  id: FeedIconId
  label: string
  src: string
}

const srcById = new Map<FeedIconId, string>(
  FEED_ICONS.map(({ id, src }) => [id, src])
)

export function getFeedIconSrc(id: FeedIconId): string {
  const src = srcById.get(id)
  if (!src) throw new Error(`Unknown feed icon: ${id}`)
  return src
}
