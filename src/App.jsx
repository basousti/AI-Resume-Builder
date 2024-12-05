import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navigate, Outlet } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'

function App() {
  const [count, setCount] = useState(0)
  const {user,isLoaded,isSignedIn} = useUser();

  if (!isSignedIn){
    return <Navigate to='/auth/sign-in'/>
  }


  return (
    <>
      <Outlet/>{/* Child routes will render here */}
    </>
  )
}

export default App
