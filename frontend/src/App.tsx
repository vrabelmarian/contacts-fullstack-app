import { useEffect, useState } from 'react'
import './App.css'
import { getContacts } from './api/ContactApi'
import { ContactData } from './data'
import Header from './components/header'
import ContactList from './components/contactsList'
import AddContactModal from './components/addContactModal'
import { Route, Routes } from 'react-router-dom'
import ContactDetail from './components/contactDetail'

function App() {
  const [data, setData] = useState<ContactData | null>(null)
  const [currPage, setCurrPage] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const GetAllContacts = async (page = 0, size = 6) => {
    try {
      setCurrPage(page)
      const { data } = await getContacts(page, size)
      setData(data)
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  const refreshContacts = async () => {
    try {
      GetAllContacts()
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    GetAllContacts()
  }, [])

  const toggleModal = (show: boolean) => setIsModalOpen(show)

  return (
    <div className='bg-gray-700 min-h-screen w-full'>
      <Header contactsNum={data?.totalElements} toggleModal={toggleModal} />
      <Routes>
        <Route path='/' element={<ContactList data={data} currentPage={currPage} getAllContacts={GetAllContacts} />} />
        <Route path='/contact/:id' element={<ContactDetail />} />
      </Routes>
      {isModalOpen && <AddContactModal toggleModal={toggleModal} refreshContacts={refreshContacts} />}
    </div>
  )
}

export default App
