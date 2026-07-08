import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './assets/components/layout.jsx'
import Home from './assets/components/home.jsx'
import About from './assets/components/AboutUs.jsx'
import Contact from './assets/components/contactus.jsx'
import User from './assets/components/user/User.jsx'
import Github, {githubInfoLoader} from './assets/components/Github.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
    <Route path='' element={<Home />}/> 
    <Route path='about' element={<About />}/> 
    <Route path='contact' element={<Contact />}/> 
    <Route path='user' element={<User/>}>
    <Route path=':userid' element={<User/>}/> 
    </Route>
    <Route 
    loader={githubInfoLoader}
    path='github' element={<Github/>}/> 
    <Route path='*' element={<div>Not Found</div>}></Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)