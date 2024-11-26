import React, { useState } from 'react'
import { assets, gallery } from '../assets/assets';

const Galery = () => {
  return (
    <div id='galerija'>
      <div className='pt-20'>
        <div className=''>
        {gallery.length > 0 &&(
            <div className='pt-20'>
                <div className='grid grid-cols-4 grid-rows-2 gap-4'>
                {gallery.map((images, index)=>(
                    <div key={index} className='flex justify-center'>
                        <img src={images.image} alt="" className='rounded-xl'/>
                    </div>
                ))}
                </div>
            </div>
        )}
        </div>
      </div>
    </div>
  )
}

export default Galery
