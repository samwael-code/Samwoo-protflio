import React from 'react'
import Navbar from './components/layout/Navbar.jsx'
import Hero from './components/sections/Hero.jsx'

const App = () => {
  return (
    <div className='min-h-screen bg-black pb-[100vh]'>
      <Navbar/>
      <main>
        <Hero/>
      </main>
    </div>
  )
}

export default App