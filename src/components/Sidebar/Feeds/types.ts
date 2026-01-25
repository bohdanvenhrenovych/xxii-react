import type { FeedIconId } from './feed-icon-registry'

export type FeedIconKey = FeedIconId

export interface Feed {
  id: string
  name: string
  icon: FeedIconKey
  unreadCount?: number
  lastActivity: string
}

export interface FeedItemProps {
  feed: Feed
  isActive?: boolean
}
