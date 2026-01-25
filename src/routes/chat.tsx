import { useParams } from 'react-router-dom'

export default function Chat() {
  const { contactId, feedId, chatId, folderId, itemId } = useParams<{
    contactId?: string
    feedId?: string
    chatId?: string
    folderId?: string
    itemId?: string
  }>()

  const roomType = contactId
    ? 'contact'
    : feedId
      ? 'feed'
      : chatId
        ? 'chat'
        : folderId && itemId
          ? 'folder'
          : null
  const roomId =
    contactId ??
    feedId ??
    chatId ??
    (folderId && itemId ? `${folderId}/${itemId}` : null)

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-auto p-lg">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">
            {roomId ? `${roomType}: ${roomId}` : 'Chat'}
          </h1>
          <div className="space-y-4 text-gray-300">
            {roomId ? (
              <p>Chat with {roomId} — coming soon.</p>
            ) : (
              <p>Select a contact, feed, or chat from the sidebar.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
