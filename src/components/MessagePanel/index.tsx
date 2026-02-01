import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Form, TextareaField } from '../forms'
import { Button } from '../ui'
import { useState, useEffect } from 'react'

const messageSchema = z.object({
  message: z.string().min(1),
})

type MessageFormValues = z.infer<typeof messageSchema>

interface MessagePanelProps {
  onSubmit: (data: MessageFormValues) => void
  placeholder?: string
  onAttach?: () => void
  onEmoji?: () => void
  onPoll?: () => void
}

function isMobilePlatform() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
}

export function MessagePanel({
  onSubmit,
  placeholder = '> new post to #random',
  onAttach,
  onEmoji,
  onPoll,
}: MessagePanelProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(isMobilePlatform())
  }, [])

  const formMethods = useForm<MessageFormValues>({
    resolver: zodResolver(messageSchema),
    defaultValues: { message: '' },
  })

  return (
    <div className="flex flex-col gap-2 items-center">
      {!isMobile && (
        <div className="flex items-center text-xs text-secondary bg-card p-1 border border-border rounded-sm gap-1">
          <span>Ctrl+F:</span>
          <span>search</span>
          <span>|</span>
          <span>Ctrl+P:</span>
          <span>pinned</span>
          <span>|</span>
          <span>Esc:</span>
          <span>close</span>
        </div>
      )}

      <Form
        formMethods={formMethods}
        onSubmit={onSubmit}
        className="flex flex-col bg-card p-1 gap-2 w-full"
      >
        <div className="min-h-0">
          <TextareaField
            id="message"
            control={formMethods.control}
            name="message"
            placeholder={placeholder}
            className="min-h-[56px] rounded-sm"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Button variant="ghost" type="button" onClick={onAttach}>
              attach
            </Button>
            <Button variant="ghost" type="button" onClick={onEmoji}>
              emoji
            </Button>
            <Button variant="ghost" type="button" onClick={onPoll}>
              poll
            </Button>
          </div>
          <Button type="submit">send</Button>
        </div>
      </Form>
    </div>
  )
}
