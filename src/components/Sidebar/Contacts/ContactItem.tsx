import { Circle } from 'lucide-react'

import { SidebarListItem } from '../list-item'
import { statusColors } from '../../Typography/text-styles'
import { paths } from '@/routes/paths'
import { type ContactItemProps } from './types'

export function ContactItem({ contact, isActive }: ContactItemProps) {
  const statusColor = statusColors[contact.status]

  return (
    <SidebarListItem
      to={paths.contact(contact.id)}
      isActive={isActive}
      icon={
        <>
          <span className="text-primary">👤</span>
          <Circle
            className="w-2 h-2 flex-shrink-0"
            style={{ color: statusColor, fill: statusColor }}
          />
        </>
      }
      label={contact.name}
      unreadCount={contact.unreadCount}
      timestamp={contact.lastSeen}
    />
  )
}
