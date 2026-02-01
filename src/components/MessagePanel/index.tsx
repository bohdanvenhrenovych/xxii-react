import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Form, TextareaField } from '../forms'
import { Button } from '../ui'

const messageSchema = z.object({
  message: z.string().min(1, 'Message is required'),
})

type MessageFormValues = z.infer<typeof messageSchema>

interface MessagePanelProps {
  onSubmit: (data: MessageFormValues) => void
  placeholder?: string
  onAttach?: () => void
  onEmoji?: () => void
  onPoll?: () => void
}

export function MessagePanel({
  onSubmit,
  placeholder = '> new post to #random',
  onAttach,
  onEmoji,
  onPoll,
}: MessagePanelProps) {
  const formMethods = useForm<MessageFormValues>({
    resolver: zodResolver(messageSchema),
    defaultValues: { message: '' },
  })

  return (
    <Form
      formMethods={formMethods}
      onSubmit={onSubmit}
      className="flex flex-col bg-card p-1 gap-2"
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
  )
}
