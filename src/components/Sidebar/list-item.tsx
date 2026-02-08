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
    'flex items-center gap-3 border-l-2 cursor-pointer transition-colors pl-2 no-underline text-inherit',
    'hover:bg-card-hover',
    isActive ? 'border-accent-orange bg-card-hover' : 'border-transparent'
  )

const Content = ({
  icon,
  label,
  unreadCount,
  timestamp,
}: SidebarListItemProps) => {
  return (
    <>
      <div className="shrink-0 flex items-center gap-3">{icon}</div>
      <Typography variant="itemName" wrap={false} className="flex-1">
        {label}
      </Typography>
      <div className="flex items-center gap-3 ml-auto">
        {unreadCount != null && unreadCount > 0 && (
          <span className="bg-primary/20 text-primary px-1.5 py-0.5 rounded text-xs font-medium">
            {unreadCount}
          </span>
        )}
        <Typography variant="timestamp">{timestamp}</Typography>
      </div>
    </>
  )
}

export function SidebarListItem({
  icon,
  label,
  unreadCount,
  timestamp,
  isActive = false,
  to,
}: SidebarListItemProps) {
  if (to) {
    return (
      <Link to={to} className={rowClassName(isActive)}>
        <Content
          icon={icon}
          label={label}
          unreadCount={unreadCount}
          timestamp={timestamp}
        />
      </Link>
    )
  }

  return (
    <div className={rowClassName(isActive)}>
      <Content
        icon={icon}
        label={label}
        unreadCount={unreadCount}
        timestamp={timestamp}
      />
    </div>
  )
}
