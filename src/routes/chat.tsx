import { MessagePanel } from '@/components/MessagePanel'
import { ChatTimeline, mockMessages } from '@/views/chat/components'

export default function Chat() {
  const onSubmit = (data: { message: string }) => {
    // eslint-disable-next-line no-console -- placeholder until API wired
    console.log('submit', data)
  }
  return (
    <div className="flex flex-1 flex-col min-h-0 p-4">
      <ChatTimeline messages={mockMessages} />
      <MessagePanel onSubmit={onSubmit} />
    </div>
  )
}
