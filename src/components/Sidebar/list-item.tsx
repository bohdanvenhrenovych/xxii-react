import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { classNames } from '@/lib/utils'

import { Typography } from '../Typography'

export interface SidebarListItemProps {
  icon: ReactNode
  label: ReactNode
  unreadCount?: number
  timestamp: string
  isActive?: boolean
  to?: string
}

const rowClassName = (isActive: boolean) =>
  classNames(
    'flex items-center gap-2 border-l-2 cursor-pointer transition-colors pl-2 block no-underline text-inherit',
    'hover:bg-card-hover',
    isActive ? 'border-accent-orange bg-card-hover' : 'border-transparent'
  )

export function SidebarListItem({
  icon,
  label,
  unreadCount,
  timestamp,
  isActive = false,
  to,
}: SidebarListItemProps) {
  const content = (
    <>
      <div className="flex-shrink-0 flex items-center gap-1">{icon}</div>
      <Typography variant="itemName" wrap={false} className="flex-1">
        {label}
      </Typography>
      <div className="flex items-center gap-2 ml-auto">
        {unreadCount != null && unreadCount > 0 && (
          <span className="bg-primary/20 text-primary px-1.5 py-0.5 rounded text-xs font-medium">
            {unreadCount}
          </span>
        )}
        <Typography variant="timestamp">{timestamp}</Typography>
      </div>
    </>
  )

  if (to) {
    return (
      <Link to={to} className={rowClassName(isActive)}>
        {content}
      </Link>
    )
  }

  return <div className={rowClassName(isActive)}>{content}</div>
}
