import { Circle } from 'lucide-react'
import { Typography } from '../../Typography'
import { statusColors } from '../../Typography/text-styles'
import { type ContactItemProps } from './types'

export function ContactItem({ contact }: ContactItemProps) {
  const statusColor = statusColors[contact.status]

  return (
    <div className="flex items-center gap-2 hover:bg-card-hover cursor-pointer transition-colors">
      <span className="text-primary flex-shrink-0">👤</span>
      <Circle
        className="w-2 h-2 flex-shrink-0"
        style={{ color: statusColor, fill: statusColor }}
      />
      <Typography variant="itemName" wrap={false} className="flex-1">
        {contact.name}
      </Typography>
      <div className="flex items-center gap-2 ml-auto">
        {contact.unreadCount && (
          <span className="bg-primary/20 text-primary px-1.5 py-0.5 rounded text-xs font-medium">
            {contact.unreadCount}
          </span>
        )}
        <Typography variant="timestamp">{contact.lastSeen}</Typography>
      </div>
    </div>
  )
}
