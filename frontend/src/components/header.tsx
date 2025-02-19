type HeaderProps = {
  contactsNum?: number
  toggleModal: (show: boolean) => void
}

const Header = ({ contactsNum, toggleModal }: HeaderProps) => {
  return (
    <header className='bg-gray-900 text-white p-4 shadow-lg'>
      <div className='flex justify-between items-center max-w-4xl mx-auto'>
        <h3 className='text-xl font-semibold'>
          List of Contacts <span className='text-gray-400'>({contactsNum ?? 0})</span>
        </h3>
        <button
          onClick={() => toggleModal(true)}
          className='bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition'
        >
          Add Contact
        </button>
      </div>
    </header>
  )
}

export default Header
