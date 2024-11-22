import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='absolute bg-neutral-950 w-1/2 top-8 left-1/2 z-50 rounded-l-xl p-2'>
        <div className='flex justify-center text-white p-4'>
            <div className='text-xl'> 
                <Link className="p-4 m-4 hover:translate-x-4 hover:text-green-500 ease-in-out transition-all">Pocetna</Link>
                <Link className="p-4 m-4 hover:translate-x-4 hover:text-green-500 ease-in-out transition-all">Usluge</Link>
                <Link className="p-4 m-4 hover:translate-x-4 hover:text-green-500 ease-in-out transition-all">Cenovnik</Link>
                <Link className="p-4 m-4 hover:translate-x-4 hover:text-green-500 ease-in-out transition-all">Galerija</Link>
                <Link className="p-4 m-4 hover:translate-x-4 hover:text-green-500 ease-in-out transition-all">Kontakt</Link> 
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
