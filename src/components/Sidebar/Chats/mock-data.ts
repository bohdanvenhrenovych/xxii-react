import { type Chat } from './types'

export const mockChats: Chat[] = [
  {
    id: 'engineering',
    name: 'engineering',
    icon: 'engineering',
    unreadCount: 15,
    lastActivity: '12:55',
  },
  {
    id: 'product',
    name: 'product',
    icon: 'product',
    unreadCount: 3,
    lastActivity: '12:30',
  },
  {
    id: 'general',
    name: 'general',
    icon: 'general',
    lastActivity: '11:20',
  },
]
