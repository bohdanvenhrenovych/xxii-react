import { MessagePanel } from '@/components/MessagePanel'

export default function Chat() {
  const onSubmit = (data: { message: string }) => {
    // eslint-disable-next-line no-console -- placeholder until API wired
    console.log('submit', data)
  }
  return (
    <div className="flex flex-1 flex-col min-h-0 p-4">
      <div className="flex-1 overflow-auto min-h-0">
        <p className="text-muted">Messages</p>
      </div>
      <MessagePanel onSubmit={onSubmit} />
    </div>
  )
}
