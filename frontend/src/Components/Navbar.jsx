import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='absolute bg-neutral-950 w-1/2 top-8 left-1/2'>
        <div className='flex justify-center text-white p-4'>
            <div className='text-xl'> 
                <Link className="p-4 m-4">Pocetna</Link>
                <Link className="p-4 m-4">Usluge</Link>
                <Link className="p-4 m-4">Cenovnik</Link>
                <Link className="p-4 m-4">Galerija</Link>
                <Link className="p-4 m-4">Kontakt</Link>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
