import type { ChatIconId } from './chat-icon-registry'

export interface Chat {
  id: string
  name: string
  icon: ChatIconId
  unreadCount?: number
  lastActivity: string
}

export interface ChatItemProps {
  chat: Chat
  isActive?: boolean
}
