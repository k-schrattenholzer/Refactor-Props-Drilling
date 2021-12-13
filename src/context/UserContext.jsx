import { useContext, createContext, useState, useEffect } from 'react'
import { fetchUser } from '../services/user'

// Create the Context
const UserContext = createContext()

// Create the UserProviderComponent that takes children
const UserProvider = ({ children }) => {
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

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}

// Create the custom hook
const useUser = () => {
  const context = useContext(UserContext)

  if (context === undefined) {
    throw new Error('the useUser hook cant be called outside of the UserContext Provider')
  }
  // you also have the ability to return just context.user without the setUser, so when this hook is used, no write to State capabilities are accessible
  return context
}

// Export the provider component and the custom hook

export { UserProvider, UserContext, useUser }
