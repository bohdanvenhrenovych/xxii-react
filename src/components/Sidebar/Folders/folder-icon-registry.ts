import type { FolderIconId } from './types'

export const FOLDER_ICONS = [
  { id: 'folder' as const, label: 'Folder', src: '/icons/📁.png' },
  { id: 'archive' as const, label: 'Archive', src: '/icons/📦.png' },
] as const

export const FOLDER_CHILD_ICON_SRC = '/icons/📄.png'

const srcById = new Map<FolderIconId, string>(
  FOLDER_ICONS.map(({ id, src }) => [id, src])
)

export function getFolderIconSrc(id: FolderIconId): string {
  const src = srcById.get(id)
  if (!src) throw new Error(`Unknown folder icon: ${id}`)
  return src
}
