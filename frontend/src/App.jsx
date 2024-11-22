import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Home/>}></Route>
        <Route path={'/'} element={''}></Route>
      </Routes>
    </div>
  )
}

export default App
