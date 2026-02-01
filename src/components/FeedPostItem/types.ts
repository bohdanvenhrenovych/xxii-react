import type { Reaction } from '@/views/chat/types'

export type { Reaction }

export interface FeedPost {
  id: string
  feedId: string
  title: string
  author: string
  publishedAt: string
  content: string
  repliesCount: number
  reactions: Reaction[]
}

export interface FeedPostItemProps {
  post: FeedPost
  className?: string
}
