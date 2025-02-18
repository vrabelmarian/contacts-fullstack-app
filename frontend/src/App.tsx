import { useEffect, useState } from 'react'
import './App.css'
import { getContacts } from './api/ContactApi'
import { ContactData } from './data'
import Header from './components/header'
import ContactCard from './components/contactCard'

function App() {
  const [data, setData] = useState<ContactData | null>(null)
  const [currPage, setCurrPage] = useState(0)

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

  useEffect(() => {
    GetAllContacts()
  }, [])

  return (
    <>
      <Header contactsNum={data?.totalElements} />
      <ContactCard contact={data?.content[0]} />
      <ContactCard contact={data?.content[1]} />
      <ContactCard contact={data?.content[2]} />{' '}
    </>
  )
}

export default App
