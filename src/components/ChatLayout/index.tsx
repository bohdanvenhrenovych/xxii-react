import { Outlet } from 'react-router-dom'

import { useSetPageTitleFromParams } from '@/hooks/useSetPageTitleFromParams'

import Header from '../Header'
import { RightSidebar } from '../RightSidebar'
import { Sidebar } from '../Sidebar'

export function ChatLayout() {
  useSetPageTitleFromParams()

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
