import { type InfoBlockItem, type StatItem } from './types'

export const mockPost: InfoBlockItem = {
  title: 'Q4 Development Roadmap',
  author: 'sarah',
  dateTime: '2025-12-14 15:30',
  textPost:
    'Here is our planned roadmap for the next quarter. Key focuses: performance improvements, new collaboration features, and enhanced search capabilities …',
}

export const mockStats: StatItem[] = [
  { label: 'Replies', value: 15 },
  {
    label: 'Reactions',
    reactions: [
      { emoji: '👍', count: 8 },
      { emoji: '📌', count: 3 },
    ],
  },
]
