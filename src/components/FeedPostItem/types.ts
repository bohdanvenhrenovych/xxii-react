export interface Reaction {
  icon: string
  qty: number
}

export interface FeedPost {
  id: string
  feedId: string
  title: string
  author: string
  publishedAt: string
  content: string
  repliesCount: number
  /** reactionId → Reaction */
  reactions: Record<string, Reaction>
}

export interface FeedPostItemProps {
  post: FeedPost
  className?: string
}
