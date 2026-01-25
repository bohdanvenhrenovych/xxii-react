import { ChevronDown, ChevronRight } from 'lucide-react'

import { classNames } from '@/lib/utils'

import { Typography } from '../../Typography'
import { getFolderIconSrc } from './folder-icon-registry'
import { type Folder } from './types'

interface FolderRowProps {
  folder: Folder
  isExpanded: boolean
  onToggle: () => void
}

export function FolderRow({ folder, isExpanded, onToggle }: FolderRowProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={classNames(
        'flex items-center gap-2 w-full cursor-pointer transition-colors pl-2 py-1',
        'hover:bg-card-hover text-left border-none bg-transparent text-inherit font-inherit'
      )}
      aria-expanded={isExpanded}
    >
      <span className="flex-shrink-0 text-secondary">
        {isExpanded ? (
          <ChevronDown className="w-4 h-4" aria-hidden />
        ) : (
          <ChevronRight className="w-4 h-4" aria-hidden />
        )}
      </span>
      <img
        src={getFolderIconSrc(folder.icon)}
        alt=""
        className="w-4 h-4 flex-shrink-0 object-contain opacity-90"
        aria-hidden
      />
      <Typography
        variant="itemName"
        wrap={false}
        className="flex-1 text-secondary"
      >
        {folder.name}
      </Typography>
    </button>
  )
}
