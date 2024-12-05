import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignInPage from './auth/sign-in'
// import { Home } from 'lucide-react'
import Dashboard from './dashboard'
import Home from './Home'
import { ClerkProvider } from '@clerk/clerk-react'

//importing the publush key 
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
const router=createBrowserRouter([
 
  {
    element:<App/>,
    children:[
      {
        path:'/Home',
        element:<Home/>
      },
      
      {
        path:'/dashboard',
        element:<Dashboard/>
      }
    ]
  },

  {
    path: '/auth/sign-in',
    element:<SignInPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>,
)
