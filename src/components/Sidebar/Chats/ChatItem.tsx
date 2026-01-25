import { classNames } from '@/lib/utils'

import { paths } from '@/routes/paths'
import { SidebarListItem } from '../list-item'
import { getChatIconSrc } from './chat-icon-registry'
import { type ChatItemProps } from './types'

export function ChatItem({ chat, isActive }: ChatItemProps) {
  return (
    <SidebarListItem
      to={paths.room(chat.id)}
      isActive={isActive}
      icon={
        <img
          src={getChatIconSrc(chat.icon)}
          alt=""
          className={classNames(
            'w-4 h-4 object-contain',
            !isActive && 'opacity-70'
          )}
          aria-hidden
        />
      }
      label={`!${chat.name}`}
      unreadCount={chat.unreadCount}
      timestamp={chat.lastActivity}
    />
  )
}
