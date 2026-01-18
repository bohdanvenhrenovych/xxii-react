import { type Contact } from './types'

export const mockContacts: Contact[] = [
  {
    id: '1',
    name: 'timur',
    status: 'online',
    unreadCount: 2,
    lastSeen: '12:41',
  },
  {
    id: '2',
    name: 'alex',
    status: 'dnd',
    lastSeen: '11:23',
  },
  {
    id: '3',
    name: 'sarah',
    status: 'away',
    unreadCount: 5,
    lastSeen: '10:15',
  },
  {
    id: '4',
    name: 'mike',
    status: 'offline',
    lastSeen: 'yesterday',
  },
]
