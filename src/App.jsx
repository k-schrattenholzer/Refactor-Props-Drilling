import { useEffect, useState } from 'react'
import './App.css'
import Layout from './views/Layout/Layout'
import Home from './views/Home/Home'
import { fetchUser } from './services/user'

function App() {
  // inital value should match the data type of end value
  //will replace with useUser and update the setUser to match the custom hook we create
  f
  const [user, setUser] = useState({})

  useEffect(() => {
    fetchUser()
      .then((fetchedUser) => {
        setUser(fetchedUser)
      })
      .catch((error) => {
        throw new Error(`Error: ${error}`)
      })
  }, [])

  return (
    <Layout user={user}>
      <Home user={user} />
    </Layout>
  )
}

export default App
