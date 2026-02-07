import { Section } from '../Section'
import { Separator } from '../ui/separator'
import { InfoBlock } from './InfoBlock'
import { OutlineBlock } from './OutlineBlock'
import { StatsBlock } from './StatsBlock'
import { mockOutlineLinks, mockPost, mockStats } from './mock-data'

export function RightSidebar() {
  return (
    <aside className="w-full max-w-right-sidebar bg-bg h-full overflow-auto border-l border-border">
      <InfoBlock item={mockPost} />
      <Separator />
      <Section title="Stats" className="p-2 gap-1">
        <StatsBlock items={mockStats} />
      </Section>
      <Separator />
      <Section title="Outline" className="p-2 gap-1">
        <OutlineBlock items={mockOutlineLinks} />
      </Section>
      <Separator />
    </aside>
  )
}
