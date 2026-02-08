import { type Folder } from './types'

export const mockFolders: Folder[] = [
  {
    id: 'projects',
    name: 'Projects',
    icon: 'folder',
    children: [
      { id: 'project-alpha', name: 'project-alpha' },
      { id: 'project-beta', name: 'project-beta' },
    ],
  },
  {
    id: 'archive',
    name: 'Archive',
    icon: 'archive',
    children: [{ id: 'old-chats', name: 'old-chats' }],
  },
]

export function getFolderById(folderId: string): Folder | undefined {
  return mockFolders.find(f => f.id === folderId)
}

export function getFolderChildName(
  folderId: string,
  itemId: string
): string | undefined {
  const folder = getFolderById(folderId)
  return folder?.children.find(c => c.id === itemId)?.name
}
