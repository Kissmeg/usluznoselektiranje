import React from 'react'
import { assets } from '../assets/assets'

const Onama = () => {
  return (
    <div className='pt-20' id='usluge'>
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
            <p className='text-justify p-4 font-semibold m-4 text-lg'>Naša porodica se od 2017. godine posvećeno bavi selektiranjem žitarica, oslanjajući se na iskustvo i pažnju prema svakom detalju. Biramo samo najbolje kako bismo osigurali kvalitet i zadovoljstvo naših kupaca. Kroz godine rada, razvili smo duboko razumevanje potreba tržišta i značaj održivog pristupa. Naša posvećenost svakom zrnu i svakom kupcu garantuje vrhunski kvalitet proizvoda koji dolaze iz naše firme. Verujemo da strast i trud čine razliku, a naš cilj je da postanemo vaš pouzdan partner u odabiru i distribuciji najkvalitetnijih žitarica.</p>
            
        </div>
      </div>
    </div>
  )
}

export default Onama
