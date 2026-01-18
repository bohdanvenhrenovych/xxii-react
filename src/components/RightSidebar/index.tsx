import { Typography } from '../Typography'

export function RightSidebar() {
  return (
    <aside className="w-full max-w-right-sidebar bg-bg h-full overflow-auto border border-secondary">
      <div className="p-4">
        <Typography variant="heading3" size="xl">
          Right Sidebar
        </Typography>
      </div>
    </aside>
  )
}
