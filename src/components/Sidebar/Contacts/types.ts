import { type StatusColor } from '../../Typography/text-styles'

export interface Contact {
  id: string
  name: string
  status: StatusColor
  unreadCount?: number
  lastSeen: string
}

export interface ContactItemProps {
  contact: Contact
}
