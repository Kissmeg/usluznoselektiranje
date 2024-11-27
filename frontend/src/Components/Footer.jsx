import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { Context } from '../Context/JSContext'

const Footer = () => {
  const {handleScrollLink} = useContext(Context)
  return (
    <div className='mt-20 bg-neutral-950 '>
      <div className='lg:flex justify-around p-4 mx-20'>
        <div className='flex justify-center'>
          <Link to={'/'}>
            <div className='flex justify-center my-4'>
              <img onClick={() => handleScrollLink('pocetna')} src={assets.logo} alt='' className='w-1/3 scale-150 hover:scale-[1.6] ease-in-out transition-all ' />
            </div>
          </Link>
        </div>
        
        <div className='flex-col'>
            <div className='flex'>
                <img src={assets.phone} alt="" className='w-8 h-8 my-4' />
                <div className='flex-col'>
                    <p className='text-xs lg:text-base text-white pt-4 pl-4'>David - 060 5857 087</p>
                    <p className='text-xs lg:text-base text-white pl-4'>Robert - 063 7783 452</p>
                </div>
            </div>
            <div className='flex'>
                <img src={assets.email} alt=""     className='w-8 h-8 my-4' />
                <p className='text-xs lg:text-base text-white m-4'>kontrash297@gmail.com</p>
            </div>
            <div className='flex'>
                <img src={assets.location} alt= "" className='lg:w-8 h-8 my-4' />
                <p className='text-xs lg:text-base text-white m-4'>Milošev Put 2A, Novi Bečej</p>
            </div>
        </div>
        
      </div>
      <hr className='mx-20 border-green-500'/>
        <p className='text-white text-center mt-4'>Designed & Developed - <Link to={'https://www.linkedin.com/in/david-kish03/'} className='text-green-500'>David</Link></p>
      <div className='flex justify-center text-white'>
        <p className='my-4'>Uslužno Selektiranje - All Rights Reserved, 2024.</p>
      </div>

    </div>
  )
}

export default Footer
