import { useEffect } from 'react'
import { Outlet, useParams } from 'react-router-dom'

import { getChatById } from '@/components/Sidebar/Chats'
import { getContactById } from '@/components/Sidebar/Contacts'
import { getFeedById } from '@/components/Sidebar/Feeds'
import { getFolderById, getFolderChildName } from '@/components/Sidebar/Folders'
import { useSetPageTitle, type PageTitleState } from '@/stores/page-title'

import Header from '../Header'
import { RightSidebar } from '../RightSidebar'
import { Sidebar } from '../Sidebar'

type RouteParams = {
  feedId?: string
  chatId?: string
  contactId?: string
  folderId?: string
  itemId?: string
}

function getPageTitleFromParams(
  params: Record<string, string | undefined>
): PageTitleState {
  const { feedId, chatId, contactId, folderId, itemId } = params as RouteParams
  if (feedId) {
    const feed = getFeedById(feedId)
    return feed
      ? { label: `#${feed.name}`, topic: feed.topic }
      : { label: 'general' }
  }
  if (chatId) {
    return {
      label: `#${getChatById(chatId)?.name ?? chatId}`,
      topic: '',
    }
  }
  if (contactId) {
    return {
      label: `#${getContactById(contactId)?.name ?? contactId ?? ''}`,
      topic: '',
    }
  }
  if (folderId && itemId) {
    return {
      label: `#${getFolderChildName(folderId, itemId) ?? getFolderById(folderId)?.name ?? itemId ?? ''}`,
      topic: '',
    }
  }
  return { label: 'general' }
}

export function ChatLayout() {
  const params = useParams()
  const setPageTitle = useSetPageTitle()

  useEffect(() => {
    setPageTitle(getPageTitleFromParams(params))
  }, [
    params.feedId,
    params.chatId,
    params.contactId,
    params.folderId,
    params.itemId,
  ])

  return (
    <div className="flex h-screen bg-bg text-white">
      <Sidebar />
      <main className="flex flex-1 flex-col min-h-0">
        <Header />
        <div className="flex-1 flex flex-col min-h-0">
          <Outlet />
        </div>
      </main>
      <RightSidebar />
    </div>
  )
}
