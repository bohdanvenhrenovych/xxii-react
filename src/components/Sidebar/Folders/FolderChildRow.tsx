import { Link } from 'react-router-dom'

import { classNames } from '@/lib/utils'

import { Typography } from '../../Typography'
import { FOLDER_CHILD_ICON_SRC } from './folder-icon-registry'
import { type FolderChild } from './types'

interface FolderChildRowProps {
  child: FolderChild
  isActive?: boolean
  to?: string
}

export function FolderChildRow({
  child,
  isActive = false,
  to,
}: FolderChildRowProps) {
  const content = (
    <>
      <img
        src={FOLDER_CHILD_ICON_SRC}
        alt=""
        className="w-4 h-4 flex-shrink-0 object-contain opacity-90"
        aria-hidden
      />
      <Typography
        variant="itemName"
        wrap={false}
        className="flex-1 text-primary"
      >
        {child.name}
      </Typography>
    </>
  )

  const rowClass = classNames(
    'flex items-center gap-2 border-l-2 cursor-pointer transition-colors pl-6 pr-2 py-0.5 min-h-[1.5rem]',
    'hover:bg-card-hover',
    isActive ? 'border-accent-orange bg-card-hover' : 'border-transparent'
  )

  if (to) {
    return (
      <Link
        to={to}
        className={classNames(rowClass, 'block no-underline text-inherit')}
      >
        {content}
      </Link>
    )
  }

  return <div className={rowClass}>{content}</div>
}
