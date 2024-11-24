import React from 'react'
import { assets } from '../assets/assets'

const Onama = () => {
  return (
    <div className='pt-20' id='onama'>
        <div className='my-4'>
            <h1 className='sbold text-4xl text-center text-green-500'>Upoznajte nas,</h1>
        </div>
        <div className='my-4'>
            <h1 className='text-6xl text-center font-bold '>Saznajte više o nama</h1>
        </div>
      <div className='flex justify-center'>
        <div className='w-[25%] shadow-2xl p-4 rounded-lg m-4'>
            <img src={assets.logo} alt="" />
            <p className='quote text-center text-2xl'>,,Kvalitet nije slučajnost – to je naš izbor svaki dan.''</p>
        </div>

        <div className='w-[25%] shadow-2xl p-4 rounded-lg m-4'>
            <h1 className='text-2xl font-bold text-center p-4 header'>Usluzno selektiranje</h1>
            
            <p className='text-justify p-4 font-medium m-4 text-lg rounded-lg shadow-inner'>Naša porodica se od 2017. godine posvećeno bavi selektiranjem žitarica, oslanjajući se na iskustvo i pažnju prema svakom detalju. Biramo samo najbolje kako bismo osigurali kvalitet i zadovoljstvo naših kupaca. Kroz godine rada, razvili smo duboko razumevanje potreba tržišta i značaj održivog pristupa. Naša posvećenost svakom zrnu i svakom kupcu garantuje vrhunski kvalitet proizvoda koji dolaze iz naše firme. Verujemo da strast i trud čine razliku, a naš cilj je da postanemo vaš pouzdan partner u odabiru i distribuciji najkvalitetnijih žitarica.</p>
            
            <div className='flex justify-center'>
              
              <div className='flex-col group'>
                <button className='p-1 hover:scale-105 mb-1 text-center border-2 rounded-2xl border-green-500 hover:bg-green-500 text-xl font-semibold group-hover: ease-out transition-all'>Pogledajte ponude</button>
                  {/*<div className='flex justify-center'>
                  <hr className='absolute group-hover:w-12 border-white w-0 group-hover:border-green-500 transition-all ease-in-out border-b-2'/>  
                  </div> */}
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Onama
