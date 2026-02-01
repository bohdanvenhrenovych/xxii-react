import { emojify } from '@/lib/emoji'
import { classNames, truncateText } from '@/lib/utils'

import { Typography } from '../Typography'
import { CONTENT_MAX_LENGTH } from './constants'
import { FeedPostEngagement } from './FeedPostEngagement'
import type { FeedPostItemProps, Reaction } from './types'

export function FeedPostItem({ post, className }: FeedPostItemProps) {
  const raw: string = post?.content ?? ''
  const content: string = truncateText(raw, CONTENT_MAX_LENGTH)
  const reactions = post?.reactions ?? {}

  return (
    <div
      className={classNames(
        'flex flex-col gap-2 rounded-sm  bg-card p-1.5 text-left',
        className
      )}
    >
      <Typography as="h2" variant="heading2" className="" color="primary">
        {emojify(post.title)}
      </Typography>
      <Typography
        variant="timestamp"
        color="secondary"
        className="flex items-center gap-1"
        size="sm"
      >
        <Typography variant="timestamp" size="sm" color="primary">
          {post.author}
        </Typography>
        · {post.publishedAt}
      </Typography>

      <Typography variant="timestamp" color="secondary" size="sm">
        {content}
      </Typography>
      <FeedPostEngagement
        repliesCount={post.repliesCount}
        reactions={reactions}
      />
    </div>
  )
}
