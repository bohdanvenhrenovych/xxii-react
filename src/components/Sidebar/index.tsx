import { Section } from './Section'
import { Contacts } from './Contacts'
import { Divider } from '../ui/divider'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-1  w-sidebar bg-card">
      <Section title="CONTACTS">
        <Contacts />
      </Section>

      <Divider />
    </aside>
  )
}
