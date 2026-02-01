import { Typography } from '@/components/Typography'
import { formatTimestamp } from '@/lib/utils'
import { Undo2Icon } from 'lucide-react'
import { ForwardedMessage } from '../types'

interface ForwardedMessageBlockProps {
  forwardedMessage?: ForwardedMessage
}

export function ForwardedMessageBlock({
  forwardedMessage,
}: ForwardedMessageBlockProps) {
  if (!forwardedMessage) return null

  return (
    <div className="border-l-2 border-accent-yellow bg-accent mx-2 px-1 py-1.5">
      <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
        <div className="size-6 flex items-center justify-center">
          <Undo2Icon className="size-4 rotate-180" />
        </div>
        <Typography className="text-sm text-secondary">
          {forwardedMessage.content}
        </Typography>
      </div>
      <div className="text-xs text-secondary px-2">
        from #{forwardedMessage.from} ({forwardedMessage.originalSender},{' '}
        {formatTimestamp(forwardedMessage.timestamp)})
      </div>
    </div>
  )
}
