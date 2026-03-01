import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getChatById } from '@/components/Sidebar/Chats'
import { getContactById } from '@/components/Sidebar/Contacts'
import { getFeedById } from '@/components/Sidebar/Feeds'
import { getFolderById, getFolderChildName } from '@/components/Sidebar/Folders'
import { useSetPageTitle, type PageTitleState } from '@/stores/page-title'

interface RouteParams {
  feedId?: string
  chatId?: string
  contactId?: string
  folderId?: string
  itemId?: string
}

function getPageTitleFromParams(params: RouteParams): PageTitleState {
  const { feedId, chatId, contactId, folderId, itemId } = params

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

export function useSetPageTitleFromParams() {
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
    setPageTitle,
  ])
}
