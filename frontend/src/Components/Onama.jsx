import React from 'react'

const Onama = () => {
  return (
    <div className='pt-20'>
        <div className='my-4'>
            <h1 className='sbold text-4xl text-center text-green-500'>Upoznajte nas,</h1>
        </div>
        <div className='my-4'>
            <h1 className='text-6xl text-center font-bold '>Saznajte više o nama</h1>
        </div>
      <div className='flex justify-center'>
        <div className='w-[25%] shadow-2xl p-4 rounded-lg m-4'>
            <p className='quote text-center text-2xl'>,,Kvalitet nije slučajnost – to je naš izbor svaki dan.''</p>
        </div>

        <div className='w-[25%] shadow-2xl p-4 rounded-lg m-4'>
            <p className='text-justify p-4'>Naša porodica se od 2017. godine posvećeno bavi selektiranjem žitarica, oslanjajući se na iskustvo i pažnju prema svakom detalju. Biramo samo najbolje kako bismo osigurali kvalitet i zadovoljstvo naših kupaca."</p>
        </div>
      </div>
    </div>
  )
}

export default Onama
