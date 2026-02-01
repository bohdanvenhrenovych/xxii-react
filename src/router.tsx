import { createBrowserRouter, Link, Navigate } from 'react-router-dom'

import { ChatLayout } from './components/ChatLayout'
import { paths } from './routes/paths'
import Chat from './routes/chat'
import Feed from './routes/feed'

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
      <Link
        to={paths.chat()}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Go to Chat
      </Link>
    </div>
  )
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ChatLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Navigate to={paths.chat()} replace />,
      },
      {
        path: 'chat',
        element: <Chat />,
      },
      {
        path: 'chat/contacts/:contactId',
        element: <Chat />,
      },
      {
        path: 'chat/feeds/:feedId',
        element: <Feed />,
      },
      {
        path: 'chat/chats/:chatId',
        element: <Chat />,
      },
      {
        path: 'chat/folders/:folderId/:itemId',
        element: <Chat />,
      },
    ],
  },
])
