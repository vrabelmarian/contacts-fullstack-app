import { useEffect, useState } from 'react'
import './App.css'
import { getContacts } from './api/ContactApi'

function App() {
  const [data, setData] = useState({})
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

  return <div>Contacts List</div>
}

export default App
