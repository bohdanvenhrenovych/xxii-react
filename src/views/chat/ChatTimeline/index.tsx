import { useEffect, useRef } from 'react'
import { MessageItem } from '@/views/chat/components'
import type { Message } from '../types'

interface ChatTimelineProps {
  messages: Message[]
  onReactionClick?: (messageId: string, emoji: string) => void
}

export function ChatTimeline({ messages, onReactionClick }: ChatTimelineProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollContainerRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages])

  return (
    <div
      ref={scrollContainerRef}
      className="flex flex-col flex-1 gap-1 overflow-y-auto scrollbar-hide"
    >
      {messages.map(message => (
        <MessageItem
          key={message.id}
          message={message}
          onReactionClick={onReactionClick ?? (() => {})}
        />
      ))}
    </div>
  )
}
