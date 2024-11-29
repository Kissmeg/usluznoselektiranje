import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { Context } from '../Context/JSContext'

const Hero = () => {
  const {handleScrollLink} = useContext(Context);
  return (
    <div className='' id='pocetna'>
      <div className=''>
        <div className='absolute z-40 top-[30%] left-1/2 lg:top-1/2 lg:left-1/2 -translate-x-1/2'>
          <button onClick={()=> handleScrollLink('usluge')} className='font-light lg:text-6xl text-white border-2 p-2 lg:p-4 rounded-xl border-white  hover:border-transparent hover:bg-green-500 transition-all ease-in-out hover:scale-105'>Ponude</button>
        </div>
      </div>
     <div className='bg-neutral-800'>
      <img src={assets.hero} alt="" className='w-full mix-blend-overlay h-[40vh] lg:h-[80vh] shadow-xl'/>
     </div>
    </div>
  )
}

export default Hero
