import { Contact } from '../data'
import ContactCard from './contactCard'

type ContactListProps = {
  data?: {
    content: Contact[]
    totalPages: number
  } | null
  currentPage: number
  getAllContacts: (page: number) => void
}

const ContactList = ({ data, currentPage, getAllContacts }: ContactListProps) => {
  if (!data) {
    return <div className='text-gray-500 italic p-4'> Contacts List Unavailable</div>
  }
  return (
    <div className='bg-gray-700 w-full'>
      <main className='max-w-6xl w-full mx-auto p-4'>
        {data?.content?.length === 0 && (
          <div className='text-center text-gray-500 italic'>No Contacts. Please add a new contact.</div>
        )}
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
          {data?.content?.length > 0 &&
            data.content.map(contact => (
              <li key={contact.id} className='w-full'>
                <ContactCard contact={contact} />
              </li>
            ))}
        </ul>
      </main>
    </div>
  )
}

export default ContactList
