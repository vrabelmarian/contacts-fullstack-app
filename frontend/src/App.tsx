import { useEffect, useState } from 'react'
import './App.css'
import { getContacts } from './api/ContactApi'
import { ContactData } from './data'
import Header from './components/header'
import ContactList from './components/contactsList'
import AddContactModal from './components/addContactModal'

function App() {
  const [data, setData] = useState<ContactData | null>(null)
  const [currPage, setCurrPage] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const GetAllContacts = async (page = 0, size = 10) => {
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
    <>
      <Header contactsNum={data?.totalElements} toggleModal={toggleModal} />
      <ContactList data={data} currentPage={currPage} getAllContacts={GetAllContacts} />
      {isModalOpen && <AddContactModal toggleModal={toggleModal} refreshContacts={refreshContacts} />}
    </>
  )
}

export default App
