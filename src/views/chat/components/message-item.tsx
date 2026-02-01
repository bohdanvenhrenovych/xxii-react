import { Typography } from '@/components/Typography'
import { MessageReactions } from '@/components/ui/message-reactions'
import { AttachmentBlock } from './attachment-block'
import { ForwardedMessageBlock } from './forwarded-message-block'
import { MessageReplies } from './message-replies'
import { Message } from '../types'

interface MessageItemProps {
  message: Message
  onReactionClick: (messageId: string, emoji: string) => void
}

export function MessageItem({ message, onReactionClick }: MessageItemProps) {
  return (
    <div className="p-1 hover:bg-card/30">
      <div className="flex gap-2">
        <div className="w-15">
          <Typography variant="timestamp">{message.timestamp}</Typography>
        </div>
        <div className="flex-1 min-w-0 flex flex-col gap-1">
          <div className="flex gap-3">
            <Typography as="span" className="text-primary">
              {message.sender}:
            </Typography>{' '}
            <Typography className="text-primary">{message.content}</Typography>
          </div>
          <ForwardedMessageBlock forwardedMessage={message.forwardedMessage} />
          <AttachmentBlock attachment={message.attachment} />
          <div className="flex flex-col gap-1">
            <MessageReactions
              reactions={message.reactions}
              messageId={message.id}
              onReactionClick={onReactionClick}
            />
            {message.replyCount && (
              <MessageReplies count={message.replyCount} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
