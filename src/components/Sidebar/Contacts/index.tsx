import { ContactItem } from './ContactItem'
import { mockContacts } from './mock-data'

interface ContactsProps {
  activeContactId?: string
}

export function Contacts({ activeContactId }: ContactsProps) {
  return (
    <div className="flex flex-col gap-1">
      {mockContacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          isActive={activeContactId === contact.id}
        />
      ))}
    </div>
  )
}

export type { Contact, ContactItemProps } from './types'
export { getContactById, mockContacts } from './mock-data'
