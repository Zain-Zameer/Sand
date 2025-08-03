import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import CreateTrip from './create-trip'
import Header from './components/custom/Header'
import { Toaster } from "sonner"
import { GoogleOAuthProvider } from '@react-oauth/google'
import ViewTrip from "./view-trip/[tripID]/index.jsx"
import About from './about'
import Footer from './components/custom/Footer'
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:'create-trip',
    element:<CreateTrip/>
  },{
    path:"/view-trip/:tripID",
    element:<ViewTrip/>
  },{
    path:"/about",
    element:<About/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
    <Header/>
    <Toaster richColors position="top-right" />
    <RouterProvider router={router}/>
    <Footer/>
    </GoogleOAuthProvider>
  </StrictMode>,
)
