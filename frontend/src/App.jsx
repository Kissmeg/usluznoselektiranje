import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Galery from './Pages/Galery'
import NotFound from './Pages/NotFound'
import Footer from './Components/Footer'

function App() {

  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Home/>}></Route>
        <Route path={'/galerija'} element={<Galery/>}></Route>
        <Route path={'*'} element={<NotFound/>}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
