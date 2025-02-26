import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Contact } from '../data'

const ContactDetail = () => {
  const { id } = useParams<{ id: string }>()
  const [contact, setContact] = useState<Contact | null>(null)

  useEffect(() => {
    console.log('Contact ID:', id)
  }, [id])

  if (!contact) {
    return <div className='text-gray-500 italic p-4'>Loading contact details...</div>
  }

  return (
    <div className='bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto mt-10'>
      <h2 className='text-2xl font-bold'>{contact.name}</h2>
      <p className='text-gray-400'>{contact.title}</p>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>Address: {contact.address}</p>
      {contact.photo && <img src={contact.photo} alt={contact.name} className='mt-4 w-32 h-32 rounded-full' />}
    </div>
  )
}

export default ContactDetail
