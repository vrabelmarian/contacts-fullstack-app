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
    return <div className='text-gray-500 italic p-4'>Contacts List Unavailable</div>
  }

  const totalPages = data.totalPages || 1

  const handlePageChange = (page: number) => {
    if (page >= 0 && page < totalPages) {
      getAllContacts(page)
    }
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

        {data?.content?.length > 0 && totalPages > 1 && (
          <div className='pagination mt-6 flex justify-center space-x-4'>
            <a
              onClick={() => handlePageChange(currentPage - 1)}
              className={`${currentPage === 0 ? 'text-gray-500 cursor-not-allowed' : 'text-blue-600'}`}
            >
              &laquo;
            </a>

            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <a
                key={pageIndex}
                onClick={() => handlePageChange(pageIndex)}
                className={`${
                  currentPage === pageIndex ? 'bg-blue-600 text-white' : 'text-blue-600'
                } px-3 py-1 rounded`}
              >
                {pageIndex + 1}
              </a>
            ))}

            <a
              onClick={() => handlePageChange(currentPage + 1)}
              className={`${currentPage === totalPages - 1 ? 'text-gray-500 cursor-not-allowed' : 'text-blue-600'}`}
            >
              &raquo;
            </a>
          </div>
        )}
      </main>
    </div>
  )
}

export default ContactList
