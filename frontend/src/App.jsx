import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Galery from './Pages/Galery'

function App() {

  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Home/>}></Route>
        <Route path={'/galerija'} element={<Galery/>}></Route>
      </Routes>
    </div>
  )
}

export default App
