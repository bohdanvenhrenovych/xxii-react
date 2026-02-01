import { Typography } from '../Typography'
import { REPLIES_SYMBOL } from './constants'
import type { Reaction } from './types'

export interface FeedPostEngagementProps {
  repliesCount: number
  reactions: Record<string, Reaction>
  onReactionClick?: (reactionId: string) => void
}

export function FeedPostEngagement({
  repliesCount,
  reactions,
  onReactionClick,
}: FeedPostEngagementProps) {
  const reactionEntries = Object.entries(reactions)

  return (
    <div className="flex items-center gap-4 text-secondary">
      <span className="flex items-center gap-1">
        <span aria-hidden>{REPLIES_SYMBOL}</span>
        <Typography variant="timestamp" color="secondary">
          {repliesCount} replies
        </Typography>
      </span>
      {reactionEntries.map(([reactionId, entry]) => (
        <button
          type="button"
          key={reactionId}
          className="flex items-center gap-1 bg-transparent border-none cursor-pointer p-0 text-inherit text-secondary hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          onClick={() => onReactionClick?.(reactionId)}
          aria-label={`${entry.icon} ${entry.qty}`}
        >
          <span aria-hidden>{entry.icon}</span>
          <Typography variant="timestamp" color="secondary">
            {entry.qty}
          </Typography>
        </button>
      ))}
    </div>
  )
}
