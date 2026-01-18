import { createBrowserRouter, Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { ChatLayout } from './components/ChatLayout'
import Chat from './routes/chat'

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
      <Link
        to="/chat"
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
        element: <Navigate to="/chat" replace />,
      },
      {
        path: 'chat',
        element: <Chat />,
      },
    ],
  },
])
