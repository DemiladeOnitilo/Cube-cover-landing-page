import React from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './components/Home'
import Subscriptions from './components/Subscriptions'
import PartnerUs from './components/PartnerUs'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route  path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='subscriptions' element={<Subscriptions />} />
        <Route path='partner-us' element={<PartnerUs />} />
      </Route>
      
    )
  )

  return(
    <div>
      <RouterProvider router={router} />
    </div>
  )  
}

export default App
