import { ContactItem } from './ContactItem'
import { mockContacts } from './mock-data'

export function Contacts() {
  return (
    <div className="flex flex-col">
      {mockContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </div>
  )
}

export type { Contact, ContactItemProps } from './types'
export { mockContacts } from './mock-data'
