import { useContext, createContext, useState} from 'react';

//Create the Context
const UserContext = createContext();

//Create the UserProviderComponent that takes children
const UserProvider = ({ children }) => {
  const [user, setUser] = useState('');

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}

//Create the custom hook
const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new error('the useUser hook cant be called outside of the UserContext Provider')
  }
  //you also have the ability to return just context.user without the setUser, so when this hook is used, no write to State capabilities are accessible
  return context
}

//Export the provider component and the custom hook