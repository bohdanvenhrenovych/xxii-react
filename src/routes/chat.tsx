import { useState } from 'react'
import { MessagePanel } from '@/components/MessagePanel'
import { ChatTimeline, mockMessages } from '@/views/chat/components'

export default function Chat() {
  const [messages, setMessages] = useState(mockMessages)

  const onSubmit = (data: { message: string }) => {
    // eslint-disable-next-line no-console -- placeholder until API wired
    console.log('submit', data)
  }

  const handleReactionClick = (messageId: string, emoji: string) => {
    setMessages(prev =>
      prev.map(msg => {
        if (msg.id !== messageId) return msg
        const reactions = msg.reactions ?? []
        const existing = reactions.find(r => r.emoji === emoji)
        const nextReactions = existing
          ? reactions.map(r =>
              r.emoji === emoji ? { ...r, count: r.count + 1 } : r
            )
          : [...reactions, { emoji, count: 1 }]
        return { ...msg, reactions: nextReactions }
      })
    )
  }

  return (
    <div className="flex flex-1 flex-col min-h-0 p-4">
      <ChatTimeline messages={messages} onReactionClick={handleReactionClick} />
      <MessagePanel onSubmit={onSubmit} />
    </div>
  )
}
