import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Contact } from '../data'
import { getContact } from '../api/ContactApi'

const ContactDetail = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [contact, setContact] = useState<Contact | null>(null)

  useEffect(() => {
    console.log('Contact ID:', id)

    const fetchContact = async () => {
      try {
        const { data } = await getContact(id!)
        setContact(data)
        console.log(data)
      } catch (error) {
        console.error('Error fetching contact:', error)
      }
    }

    fetchContact()
  }, [id])

  if (!contact) {
    return <div className='text-gray-500 italic p-4 text-center'>Loading contact details...</div>
  }

  return (
    <div className='bg-gray-900 min-h-screen p-6 text-white'>
      <button
        onClick={() => navigate(-1)}
        className='bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition mb-6'
      >
        ← Go Back
      </button>

      <div className='bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg mx-auto'>
        <div className='flex flex-col items-center'>
          <img
            src={
              contact.photo ||
              'https://fastly.picsum.photos/id/830/200/200.jpg?hmac=3ce7zNUn5yg_XKy7dHgIHta7t_0vghPQnAGUSGJuBZE'
            }
            alt={contact.name}
            className='w-32 h-32 rounded-full shadow-lg mb-4 object-cover'
          />
          <button
            onClick={() => console.log('Change photo clicked')}
            className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition'
          >
            Change Photo
          </button>
        </div>

        <div className='mt-6 text-center'>
          <h2 className='text-2xl font-bold'>{contact.name}</h2>
          <p className='text-gray-400 text-lg'>{contact.title}</p>
        </div>

        <div className='mt-6 border-t border-gray-600 pt-4'>
          <p className='text-md'>
            <span className='font-semibold text-gray-300'>Email:</span> {contact.email}
          </p>
          <p className='text-md'>
            <span className='font-semibold text-gray-300'>Phone:</span> {contact.phone}
          </p>
          <p className='text-md'>
            <span className='font-semibold text-gray-300'>Address:</span> {contact.address}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactDetail
