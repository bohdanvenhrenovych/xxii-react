import { Outlet } from 'react-router-dom'

import { RightSidebar } from '../RightSidebar'
import { Sidebar } from '../Sidebar'

export function ChatLayout() {
  return (
    <div className="flex h-screen bg-bg text-white">
      <Sidebar />
      <main className="flex flex-1 flex-col min-h-0">
        <div className="flex-1 flex flex-col min-h-0">
          <Outlet />
        </div>
      </main>
      <RightSidebar />
    </div>
  )
}
