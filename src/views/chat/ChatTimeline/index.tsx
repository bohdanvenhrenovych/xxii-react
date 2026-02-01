import { useEffect, useRef, useState } from 'react'
import { MessageItem } from '@/views/chat/components'
import { Message } from '../types'

interface ChatTimelineProps {
  messages: Message[]
}

export function ChatTimeline({ messages }: ChatTimelineProps) {
  const [messageList, setMessageList] = useState<Message[]>(messages)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMessageList(messages)
  }, [messages])

  useEffect(() => {
    const el = scrollContainerRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messageList])

  const handleReactionClick = (messageId: string, emoji: string) => {
    setMessageList(prevMessages =>
      prevMessages.map(msg => {
        if (msg.id !== messageId || !msg.reactions) return msg

        const reactionIndex = msg.reactions.findIndex(r => r.emoji === emoji)
        if (reactionIndex === -1) return msg

        const updatedReactions = [...msg.reactions]
        updatedReactions[reactionIndex] = {
          ...updatedReactions[reactionIndex],
          count: updatedReactions[reactionIndex].count + 1,
        }

        return {
          ...msg,
          reactions: updatedReactions,
        }
      })
    )
  }

  return (
    <div
      ref={scrollContainerRef}
      className="flex flex-col flex-1 gap-1 overflow-y-auto scrollbar-hide"
    >
      {messageList.map(message => (
        <MessageItem
          key={message.id}
          message={message}
          onReactionClick={handleReactionClick}
        />
      ))}
    </div>
  )
}
