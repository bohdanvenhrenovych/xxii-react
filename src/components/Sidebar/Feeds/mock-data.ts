import { type Feed } from './types'

export const mockFeeds: Feed[] = [
  {
    id: 'announcements',
    name: 'announcements',
    icon: 'megaphone',
    topic: 'team announcements and updates',
    unreadCount: 3,
    lastActivity: '13:05',
  },
  {
    id: 'dev',
    name: 'dev',
    icon: 'laptop',
    topic: 'dev discussions and tech',
    unreadCount: 12,
    lastActivity: '12:50',
  },
  {
    id: 'design',
    name: 'design',
    icon: 'palette',
    topic: 'design system and UI',
    lastActivity: '12:10',
  },
  {
    id: 'random',
    name: 'random',
    icon: 'dice',
    topic: 'team announcements and updates',
    unreadCount: 8,
    lastActivity: '11:45',
  },
]

export function getFeedById(feedId: string): Feed | undefined {
  return mockFeeds.find(f => f.id === feedId)
}
