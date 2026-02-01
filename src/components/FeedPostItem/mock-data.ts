import type { FeedPost } from './types'

export const mockFeedPosts: FeedPost[] = [
  {
    id: 'q4-roadmap',
    feedId: 'announcements',
    title: 'Q4 Development Roadmap',
    author: 'sarah',
    publishedAt: '2025-12-14 15:30',
    content:
      'Here is our planned roadmap for the next quarter. Key focuses: 🚀 performance improvements, new collaboration features, and 🔍 enhanced search capabilities ...',
    repliesCount: 15,
    reactions: [
      { emoji: '👍', count: 8 },
      { emoji: '📌', count: 3 },
    ],
  },
  {
    id: 'design-system-update',
    feedId: 'design',
    title: 'Design system v2 rollout',
    author: 'alex',
    publishedAt: '2025-12-14 12:10',
    content:
      '🎨 New component library and tokens are ready. We will migrate screens incrementally over the next two sprints ...',
    repliesCount: 7,
    reactions: [
      { emoji: '👍', count: 12 },
      { emoji: '📌', count: 2 },
    ],
  },
  {
    id: 'api-migration',
    feedId: 'dev',
    title: 'API migration to GraphQL',
    author: 'mike',
    publishedAt: '2025-12-13 18:00',
    content:
      'Backend team has finished the new GraphQL layer. 📡 Frontend can start integrating from next week. Docs are in Confluence ...',
    repliesCount: 22,
    reactions: [
      { emoji: '👍', count: 5 },
      { emoji: '📌', count: 4 },
    ],
  },
  {
    id: 'weekend-hack',
    feedId: 'random',
    title: 'Weekend hack: CLI for deploy previews',
    author: 'jordan',
    publishedAt: '2025-12-13 11:45',
    content:
      '✨ Built a small script that spins up a preview URL for every PR. Sharing in case anyone wants to try it ...',
    repliesCount: 3,
    reactions: [{ emoji: '👍', count: 14 }],
  },
]

export function getFeedPostsByFeedId(feedId: string): FeedPost[] {
  return mockFeedPosts.filter(post => post.feedId === feedId)
}
