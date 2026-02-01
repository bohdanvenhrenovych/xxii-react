import { ReactionButton } from '../ui/reaction-button'
import { Typography } from '../Typography'
import { REPLIES_SYMBOL } from './constants'
import type { Reaction } from './types'

export interface FeedPostEngagementProps {
  repliesCount: number
  reactions: Reaction[]
  onReactionClick?: (emoji: string) => void
}

export function FeedPostEngagement({
  repliesCount,
  reactions,
  onReactionClick,
}: FeedPostEngagementProps) {
  return (
    <div className="flex items-center gap-4 text-secondary">
      <span className="flex items-center gap-1">
        <span aria-hidden>{REPLIES_SYMBOL}</span>
        <Typography variant="timestamp" color="secondary">
          {repliesCount} replies
        </Typography>
      </span>
      {reactions.map((entry, index) => (
        <ReactionButton
          key={`${entry.emoji}-${index}`}
          emoji={entry.emoji}
          count={entry.count}
          variant="default"
          onClick={() => onReactionClick?.(entry.emoji)}
        />
      ))}
    </div>
  )
}
