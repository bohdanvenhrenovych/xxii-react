import { type Feed } from './types'

export const mockFeeds: Feed[] = [
  {
    id: 'announcements',
    name: 'announcements',
    icon: 'megaphone',
    unreadCount: 3,
    lastActivity: '13:05',
  },
  {
    id: 'dev',
    name: 'dev',
    icon: 'laptop',
    unreadCount: 12,
    lastActivity: '12:50',
  },
  {
    id: 'design',
    name: 'design',
    icon: 'palette',
    lastActivity: '12:10',
  },
  {
    id: 'random',
    name: 'random',
    icon: 'dice',
    unreadCount: 8,
    lastActivity: '11:45',
  },
]
