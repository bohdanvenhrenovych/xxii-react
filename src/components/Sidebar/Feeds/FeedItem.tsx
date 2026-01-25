import { classNames } from '@/lib/utils'

import { paths } from '@/routes/paths'
import { SidebarListItem } from '../list-item'
import { getFeedIconSrc } from './feed-icon-registry'
import { type FeedItemProps } from './types'

export function FeedItem({ feed, isActive }: FeedItemProps) {
  return (
    <SidebarListItem
      to={paths.feed(feed.id)}
      isActive={isActive}
      icon={
        <img
          src={getFeedIconSrc(feed.icon)}
          alt=""
          className={classNames(
            'w-4 h-4 object-contain',
            !isActive && 'opacity-70'
          )}
          aria-hidden
        />
      }
      label={`#${feed.name}`}
      unreadCount={feed.unreadCount}
      timestamp={feed.lastActivity}
    />
  )
}
