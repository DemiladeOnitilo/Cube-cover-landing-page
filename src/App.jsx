import React from 'react'
import Home from './components/Home'
import Subscriptions from './components/Subscriptions'
import PartnerUs from './components/PartnerUs'
import Navbar from './components/Navbar'

const App = () => {
  return(
    <div className='flex flex-col gap-10'>
      <Navbar />
      <Home />
      <PartnerUs />
      <Subscriptions />
    </div>
  )  
}

export default App
