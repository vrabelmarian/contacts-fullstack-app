import { useRef, useState } from 'react'
import { Contact, UploadContact } from '../data'
import { saveContact } from '../api/ContactApi'

type AddContactModalProps = {
  toggleModal: (show: boolean) => void
  addNewContact: (contact: UploadContact) => Promise<Contact>
  updatePhoto: (formData: FormData) => Promise<{ data: string }>
}

const AddContactModal = ({ toggleModal, addNewContact }: AddContactModalProps) => {
  const fileRef = useRef<HTMLInputElement | null>(null)
  const [values, setValues] = useState<UploadContact>({
    name: '',
    email: '',
    phone: '',
    address: '',
    title: '',
    photo: '',
  })
  const [file, setFile] = useState<File | null>(null)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    try {
      const savedContact = await saveContact(values)

      toggleModal(false)
      setValues({ name: '', email: '', phone: '', address: '', title: '', photo: '' })
    } catch (error) {
      console.error('Error adding contact:', error)
    }
  }
  return (
    <dialog className='fixed inset-0 bg-gray-900/75 bg-opacity-10 flex justify-center items-center w-full h-full' open>
      <div className='bg-white p-6 rounded-lg shadow-xl w-96'>
        <div className='flex justify-between items-center mb-4'>
          <h3 className='text-xl font-semibold'>New Contact</h3>
          <button className='text-gray-600' onClick={() => toggleModal(false)}>
            ✕
          </button>
        </div>
        <form onSubmit={handleSubmit} className='space-y-3'>
          <input
            type='text'
            name='name'
            value={values.name}
            onChange={onChange}
            placeholder='Name'
            className='border p-2 w-full rounded'
            required
          />
          <input
            type='text'
            name='title'
            value={values.title}
            onChange={onChange}
            placeholder='Title'
            className='border p-2 w-full rounded'
            required
          />
          <input
            type='email'
            name='email'
            value={values.email}
            onChange={onChange}
            placeholder='Email'
            className='border p-2 w-full rounded'
            required
          />
          <input
            type='text'
            name='phone'
            value={values.phone}
            onChange={onChange}
            placeholder='Phone'
            className='border p-2 w-full rounded'
            required
          />
          <input
            type='text'
            name='address'
            value={values.address}
            onChange={onChange}
            placeholder='Address'
            className='border p-2 w-full rounded'
            required
          />
          <input
            type='file'
            ref={fileRef}
            onChange={e => setFile(e.target.files?.[0] || null)}
            className='border p-2 w-full rounded'
          />
          <div className='flex justify-end space-x-3 mt-4'>
            <button
              type='button'
              onClick={() => toggleModal(false)}
              className='px-4 py-2 bg-red-500 text-white rounded'
            >
              Cancel
            </button>
            <button type='submit' className='px-4 py-2 bg-blue-600 text-white rounded'>
              Save
            </button>
          </div>
        </form>
      </div>
    </dialog>
  )
}

export default AddContactModal
