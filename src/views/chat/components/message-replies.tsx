import { Button } from '@/components/ui'
import { CornerDownRightIcon } from 'lucide-react'

interface MessageRepliesProps {
  count: number
}

export function MessageReplies({ count }: MessageRepliesProps) {
  return (
    <div className="px-2">
      <Button variant="ghost" isBracketed={false} size="icon">
        <CornerDownRightIcon className="size-4" />
        <span>{count} replies</span>
      </Button>
    </div>
  )
}
