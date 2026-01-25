import { FeedItem } from './FeedItem'
import { mockFeeds } from './mock-data'

interface FeedsProps {
  activeFeedId?: string
}

export function Feeds({ activeFeedId }: FeedsProps) {
  return (
    <div className="flex flex-col">
      {mockFeeds.map(feed => (
        <FeedItem
          key={feed.id}
          feed={feed}
          isActive={activeFeedId === feed.id}
        />
      ))}
    </div>
  )
}

export type { Feed, FeedItemProps } from './types'
export { mockFeeds } from './mock-data'
export {
  FEED_ICONS,
  getFeedIconSrc,
  type FeedIconEntry,
  type FeedIconId,
} from './feed-icon-registry'
