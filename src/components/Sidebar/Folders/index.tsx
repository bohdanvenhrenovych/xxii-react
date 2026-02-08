import { useState } from 'react'

import { paths } from '@/routes/paths'

import { FolderChildRow } from './FolderChildRow'
import { FolderRow } from './FolderRow'
import { mockFolders } from './mock-data'

interface FoldersProps {
  activeFolderId?: string
  activeItemId?: string
}

export function Folders({ activeFolderId, activeItemId }: FoldersProps) {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(
    () => new Set(mockFolders.map(f => f.id))
  )

  function toggle(folderId: string) {
    setExpandedIds(prev => {
      const next = new Set(prev)
      if (next.has(folderId)) next.delete(folderId)
      else next.add(folderId)
      return next
    })
  }

  return (
    <div className="flex flex-col">
      {mockFolders.map(folder => (
        <div key={folder.id}>
          <FolderRow
            folder={folder}
            isExpanded={expandedIds.has(folder.id)}
            onToggle={() => toggle(folder.id)}
          />
          {expandedIds.has(folder.id) &&
            folder.children.map(child => (
              <FolderChildRow
                key={child.id}
                child={child}
                isActive={
                  activeFolderId === folder.id && activeItemId === child.id
                }
                to={paths.folderItem(folder.id, child.id)}
              />
            ))}
        </div>
      ))}
    </div>
  )
}

export type { Folder, FolderChild, FolderIconId } from './types'
export { getFolderById, getFolderChildName, mockFolders } from './mock-data'
export {
  FOLDER_ICONS,
  FOLDER_CHILD_ICON_SRC,
  getFolderIconSrc,
} from './folder-icon-registry'
