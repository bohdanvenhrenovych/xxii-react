export const paths = {
  chat: () => '/chat',
  contact: (id: string) => `/chat/contacts/${id}`,
  feed: (id: string) => `/chat/feeds/${id}`,
  room: (id: string) => `/chat/chats/${id}`,
  folderItem: (folderId: string, itemId: string) =>
    `/chat/folders/${folderId}/${itemId}`,
} as const
