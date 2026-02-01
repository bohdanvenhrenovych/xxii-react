import { emojify } from '@/lib/emoji'
import { classNames, truncateText } from '@/lib/utils'

import { Typography } from '../Typography'
import type { FeedPostItemProps, Reaction } from './types'

const contentMaxLength = 120
const repliesSymbol = '💬'

export function FeedPostItem({ post, className }: FeedPostItemProps) {
  const raw: string = post?.content ?? ''
  const content: string = truncateText(raw, contentMaxLength)
  const reactions = post?.reactions ?? ({} as Record<string, Reaction>)
  const reactionEntries = Object.entries(reactions)

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
        className="flex items-center gap-2"
      >
        <Typography variant="timestamp" color="primary">
          {post.author}
        </Typography>
        · {post.publishedAt}
      </Typography>

      <Typography variant="timestamp" color="secondary" size="sm">
        {content}
      </Typography>
      <div className="flex items-center gap-4 text-secondary">
        <span className="flex items-center gap-1">
          <span aria-hidden>{repliesSymbol}</span>
          <Typography variant="timestamp" color="secondary">
            {post.repliesCount} replies
          </Typography>
        </span>

        {reactionEntries.map(([reactionId, entry]: [string, Reaction]) => (
          <span key={reactionId} className="flex items-center gap-1">
            <span aria-hidden>{entry.icon}</span>
            <Typography variant="timestamp" color="secondary">
              {entry.qty}
            </Typography>
          </span>
        ))}
      </div>
    </div>
  )
}
