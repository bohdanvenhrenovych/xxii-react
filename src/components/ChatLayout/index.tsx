import { Outlet } from 'react-router-dom'

import { RightSidebar } from '../RightSidebar'
import { Sidebar } from '../Sidebar'

export function ChatLayout() {
  return (
    <div className="flex h-screen bg-bg text-white">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
      <RightSidebar />
    </div>
  )
}
