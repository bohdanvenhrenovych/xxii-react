import { ChatItem } from './ChatItem'
import { mockChats } from './mock-data'

interface ChatsProps {
  activeChatId?: string
}

export function Chats({ activeChatId }: ChatsProps) {
  return (
    <div className="flex flex-col gap-1">
      {mockChats.map(chat => (
        <ChatItem
          key={chat.id}
          chat={chat}
          isActive={activeChatId === chat.id}
        />
      ))}
    </div>
  )
}

export type { Chat, ChatItemProps } from './types'
export { getChatById, mockChats } from './mock-data'
export {
  CHAT_ICONS,
  getChatIconSrc,
  type ChatIconEntry,
  type ChatIconId,
} from './chat-icon-registry'
