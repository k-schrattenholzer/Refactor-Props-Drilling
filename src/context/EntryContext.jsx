import { useContext, createContext, useState} from 'react';

//Create the Context
const EntryContext = createContext();

//Create the EntryProviderComponent
const EntryProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);

  return (
    <EntryContext.Provider value={{ entries, setEntries }}>{children}</EntryContext.Provider>
  )
}

//Create the custom hook
const useEntries = () => {
  //use of useContext is what makes this a custom hook
  //if we attempt to use this outside of the provider, context will be undefined
  const context = useContext(EntryContext);
  if (context === undefined) {
    throw newError('No, no, no. You are trying to use useEntries outside of an EntryContext Provider')
  }
  return context
}

//Export the provider component and the custom hook
export { EntryProvider, useEntries }