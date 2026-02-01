import { ReactionButton } from './reaction-button'
import { Reaction } from '@/views/chat/types'

interface MessageReactionsProps {
  reactions?: Reaction[]
  messageId: string
  variant?: 'default' | 'ghost'
  onReactionClick: (messageId: string, emoji: string) => void
}

export function MessageReactions({
  reactions,
  messageId,
  onReactionClick,
  variant = 'default',
}: MessageReactionsProps) {
  if (!reactions?.length) return null

  return (
    <div className="flex items-center gap-2">
      {reactions.map((reaction, index) => (
        <ReactionButton
          key={index}
          emoji={reaction.emoji}
          count={reaction.count}
          variant={variant}
          onClick={() => onReactionClick(messageId, reaction.emoji)}
        />
      ))}
    </div>
  )
}
