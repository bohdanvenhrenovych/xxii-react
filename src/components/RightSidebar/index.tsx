import { Section } from '../Sidebar/Section'
import { Separator } from '../ui/separator'
import { InfoBlock } from './InfoBlock'
import { StatsBlock } from './StatsBlock'
import { mockPost, mockStats } from './mock-data'

export function RightSidebar() {
  return (
    <aside className="w-full max-w-right-sidebar bg-bg h-full overflow-auto border-l border-border">
      <InfoBlock item={mockPost} />
      <Separator />
      <Section title="Stats" className="p-2 gap-1">
        <StatsBlock items={mockStats} />
      </Section>
      <Separator />
    </aside>
  )
}
