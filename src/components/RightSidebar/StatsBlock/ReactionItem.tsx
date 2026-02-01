import { Typography } from '../../Typography'
import { type StatReaction } from '../types'

interface ReactionItemProps {
  reaction: StatReaction
}

export function ReactionItem({ reaction }: ReactionItemProps) {
  return (
    <div className="flex items-center gap-1">
      <span className="text-xs">{reaction.emoji}</span>
      <Typography size="xs" className="text-primary font-medium">
        {reaction.count}
      </Typography>
    </div>
  )
}
