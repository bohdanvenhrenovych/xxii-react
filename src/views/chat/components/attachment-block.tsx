import { Typography } from '@/components/Typography'
import { Button } from '@/components/ui'
import { DownloadIcon, FileIcon } from 'lucide-react'
import { Message } from '../types'

interface AttachmentBlockProps {
  attachment: Message['attachment']
}

export function AttachmentBlock({ attachment }: AttachmentBlockProps) {
  if (!attachment) return null

  return (
    <div className="w-fit bg-card p-1 inline-flex items-center gap-4">
      <FileIcon className="size-5" />
      <Typography wrap={false} className="text-sm text-primary">
        {attachment.name}
      </Typography>
      <span className="text-xs text-secondary">({attachment.size})</span>
      <Button size="icon" variant="ghost" isBracketed={false}>
        <DownloadIcon className="size-4" />
      </Button>
    </div>
  )
}
