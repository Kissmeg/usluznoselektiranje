import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='bg-neutral-800'>
      <img src={assets.hero} alt="" className=' w-full mix-blend-overlay h-[100vh]'/>
    </div>
  )
}

export default Hero
