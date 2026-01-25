export type FolderIconId = 'folder' | 'archive'

export interface FolderChild {
  id: string
  name: string
}

export interface Folder {
  id: string
  name: string
  icon: FolderIconId
  children: FolderChild[]
}
