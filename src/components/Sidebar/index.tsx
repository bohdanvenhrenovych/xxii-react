import { useParams } from 'react-router-dom'

import { Section } from './Section'
import { Chats } from './Chats'
import { Contacts } from './Contacts'
import { Feeds } from './Feeds'
import { Folders } from './Folders'
import { Separator } from '../ui/separator'

export function Sidebar() {
  const { contactId, feedId, chatId, folderId, itemId } = useParams<{
    contactId?: string
    feedId?: string
    chatId?: string
    folderId?: string
    itemId?: string
  }>()

  return (
    <aside className="flex flex-col gap-1 w-sidebar bg-card">
      <Section title="CONTACTS">
        <Contacts activeContactId={contactId} />
      </Section>
      <Separator className="my-1" />

      <Section title="FEEDS">
        <Feeds activeFeedId={feedId} />
      </Section>

      <Separator className="my-1" />

      <Section title="CHATS">
        <Chats activeChatId={chatId} />
      </Section>
      <Separator className="my-1" />

      <Section title="FOLDERS">
        <Folders activeFolderId={folderId} activeItemId={itemId} />
      </Section>
      <Separator className="my-1" />
    </aside>
  )
}
