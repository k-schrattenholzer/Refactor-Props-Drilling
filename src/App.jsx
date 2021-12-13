import './App.css'
import Layout from './views/Layout/Layout'
import Home from './views/Home/Home'
import { useUser } from './context/UserContext'

function App() {
  // inital value should match the data type of end value
  // will replace with useUser and update the setUser to match the custom hook we create

  const { user } = useUser();


  return (
    <Layout user={user}>
      <Home user={user} />
    </Layout>
  )
}

export default App
