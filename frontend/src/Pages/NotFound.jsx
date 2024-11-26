import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className=''>
      <div className='pt-40 pb-24'>
        <div className=''>
            
            <h1 className='text-6xl text-center'>Stranicu koju tražite ne postoji.</h1>

           <div className='flex justify-center'>
           <h1 className='text-4xl h-1/2 text-green-500 pt-4 animate-pulse pb-40'><Link to={'/'}> Nazad ka početnoj</Link></h1>
           </div>
        </div>
      </div>    
    </div>
  )
}

export default NotFound
