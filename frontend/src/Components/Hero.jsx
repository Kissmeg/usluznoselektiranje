import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='bg-neutral-800' id='pocetna'>
      <img src={assets.hero} alt="" className=' w-full mix-blend-overlay h-[80vh] shadow-xl'/>
    </div>
  )
}

export default Hero
