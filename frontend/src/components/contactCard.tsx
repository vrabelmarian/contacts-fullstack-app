import { EnvelopeIcon, MapIcon, PhoneIcon } from '@heroicons/react/16/solid'
import { Contact } from '../data'

type ContactProps = {
  contact?: Contact
}

const ContactCard = ({ contact }: ContactProps) => {
  if (!contact) {
    return <div className='text-gray-500 italic p-4'> Contact unavailable</div>
  }
  return (
    <div className='bg-gray-800 text-white p-4 flex flex-col gap-2'>
      <div className='flex items-center gap-4'>
        <div className='w-16 h-16 rounded-full overflow-hidden'>
          <img
            src={
              contact.photo ||
              'https://fastly.picsum.photos/id/830/200/200.jpg?hmac=3ce7zNUn5yg_XKy7dHgIHta7t_0vghPQnAGUSGJuBZE'
            }
            alt={contact.name}
            className='w-full h-full object-cover'
          />
        </div>
        <div>
          <p className='text-lg font-semibold'>
            {contact.name.length > 20 ? contact.name.substring(0, 20) + '...' : contact.name}
          </p>
          <p className='text-gray-400 text-md'>{contact.title}</p>
        </div>
      </div>
      <div className='text-sm text-gray-300'>
        <p>
          <EnvelopeIcon className='w-4 h-4 inline-block mr-2' />
          {contact.email.length > 20 ? contact.email.substring(0, 20) + '...' : contact.email}
        </p>
        <p>
          <MapIcon className='w-4 h-4 inline-block mr-1' /> {contact.address}
        </p>
        <p>
          <PhoneIcon className='w-4 h-4 inline-block mr-1' /> {contact.phone}
        </p>
      </div>
    </div>
  )
}

export default ContactCard
