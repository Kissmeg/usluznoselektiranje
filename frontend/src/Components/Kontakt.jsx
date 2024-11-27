import React, { useContext } from 'react'
import { Context } from '../Context/JSContext'

const Kontakt = () => {
  return (
    <div className='pt-20 pb-20' id='zakazivanje'>
      <div className='my-4'>
            <h1 className='sbold text-4xl text-center text-green-500'>Kontaktirajte nas</h1>
        </div>
        <div className='my-4'>
            <h1 className='text-6xl text-center font-bold '>Pošaljite nam poruku</h1>
        </div>
        <div className='flex justify-center pt-12'>
            <form action="https://api.web3forms.com/submit" method="POST" className='p-14 '>
            
                <div className='lg:flex gap-8'>
                    
                    <div>
                        <input type="hidden" name="access_key" value={'8a939d91-ebe8-44ca-a856-f6003e6e9602'}/>
                        <p className='mb-2 text-2xl header text-left'>Ime</p>
                        <input type="text" name='name' id=''  className='w-full border-b-2 border-black '/>
                        
                    </div>
                    <div>
                        <p className='mb-2 text-2xl header text-left'>Br. telefona</p>
                        <input type="tel" name='telephone' id=''  className='w-full border-b-2 border-black'/>
                    </div>
                </div>
                <div>
                    <p className='mt-4 mb-2 text-2xl header'>Email</p>
                    <input type="email" name='email' id=''  className='border-b-2 w-full border-black'/>
                </div>
                <div>
                    <p className='mt-4 mb-2 text-2xl header'>Poruka</p>
                    <input type="text" name='message' id=''  className='border-b-2  w-full border-black'/>
                </div>
               <div className='flex justify-center'>
                <button className=' text-2xl m-4 border-black border-2 p-2 hover:bg-green-500 hover:scale-105 rounded-lg hover:border-white transition-all ease-in-out'>
                    Pošalji
                </button>
               </div>
                <div className='flex justify-center'>
                    <h1 className='header text-2xl'>Naši kontakti</h1>
                </div>
                <div className='text-center lg:flex justify-between gap-4'>
                    <div className='my-4 shadow-2xl p-4 rounded-lg'>
                        <h1 className='lg:text-base'>Email</h1>
                        <p>kontrash297@gmail.com</p>
                    </div>
                    <div className='my-4 shadow-2xl p-4 rounded-lg'>
                        <h1 className='text-center'>Telefon</h1>
                        <p>Robert +381 063 7783 452</p>
                        <p>David +381 060 5857 087</p>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Kontakt
