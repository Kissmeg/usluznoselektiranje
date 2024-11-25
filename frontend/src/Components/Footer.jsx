import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='mt-20 bg-neutral-950'>
      <div className='lg:flex justify-around p-4 mx-20'>
        <div className='flex justify-center'>
            <img src={assets.logo} className='w-16 h-16' alt="" />
        </div>
        
        <div className='flex-col'>
            <div className='flex'>
                <img src={assets.phone} alt=""     className='w-8 h-8 my-4' />
                <div className='flex-col'>
                    <p className='text-xs lg:text-base text-white pt-4 pl-4'>David - 060 5857 087</p>
                    <p className='text-xs lg:text-base text-white pl-4'>Robert - 063 7783 452</p>
                </div>
            </div>
            <div className='flex'>
                <img src={assets.email} alt=""     className='w-8 h-8 my-4' />
                <p className='text-xs text-white m-4'>kontrash297@gmail.com</p>
            </div>
            <div className='flex'>
                <img src={assets.location} alt= "" className='lg:w-8 h-8 my-4' />
                <p className='text-xs text-white m-4'>Milosev Put 2A, Novi Bečej</p>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Footer
