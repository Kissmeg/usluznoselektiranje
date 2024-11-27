import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Context } from '../Context/JSContext';
{/*Odaberite savršenu ponudu za vaše žitarice za bolji prinos! */}
const Usluge = () => {
  const [showSelektiranje, setShowSelektiranje] = useState(false);
  const [showHemija, setShowHemija] = useState();
  const [showHemijaPrem, setShowHemijaPrem] = useState();
  const [showCustom, setShowCustom] = useState();
  const {handleScrollLink} = useContext(Context);
  return (
    <div className='pt-20' id='usluge'>
      <div className=''>
        <div className='my-4'>
              <h1 className='sbold text-4xl text-center text-green-500'>Odaberite savršenu ponudu kroz,</h1>
          </div>
          <div className='my-4'>
              <h1 className='text-6xl text-center font-bold '>Naše usluge</h1>
          </div>
        <div className='lg:flex flex-1 p-4 self-start justify-center'>
          <div className="border-2 my-4 lg:mr-4 lg:w-[45%] self-start rounded-lg shadow-lg border-black">
            <div className="relative h-64 overflow-hidden bg-white">
              <img
                onClick={() => setShowSelektiranje(!showSelektiranje)}
                src={assets.selektor}
                alt="Selektiranje žitarica"
                className="mix-blend-luminosity hover:mix-blend-normal w-full h-full object-cover scale-110 transition-transform duration-300 ease-in-out hover:scale-125 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between items-center p-4">
                <h1 className="header text-2xl lg:text-4xl">Selektiranje žitarica</h1>
                <h2 className="text-2xl lg:text-4xl font-bold header">3 din/kg</h2>
              </div>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  showSelektiranje ? 'max-h-[600px]' : 'max-h-0'
                }`}
              >
                <div className="text-justify p-4">
                  <p className="text-base pt-2">
                    Osnovni paket selektiranja žitarica obuhvata mehaničko uklanjanje nečistoća bez upotrebe hemijskih
                    sredstava. Ovaj paket je osmišljen za osnovnu obradu i uključuje:
                  </p>
                  <ul className="m-4 list-disc list-inside">
                    <li className="font-semibold">
                      Odvajanje krupnih nečistoća poput kamenčića, ostataka slame i drugih neželjenih materija.
                    </li>
                    <li className="font-semibold">Prečišćavanje prašine i sitnih čestica sa površine žitarica.</li>
                    <li className="font-semibold">Vizuelnu kontrolu kvaliteta žitarica nakon selektiranja.</li>
                  </ul>
                  <p className="italic font-light text-sm">
                    Ovaj paket je idealan za korisnike koji traže osnovnu pripremu žitarica uz očuvanje njihove prirodnosti
                    i kvaliteta.
                  </p>
                </div>
              </div>
              <div className="flex justify-center p-4">
                <button
                  onClick={() => setShowSelektiranje(!showSelektiranje)}
                  className="focus:outline-none"
                >
                  <img
                    src={assets.plus}
                    alt="Toggle"
                    className={`w-12 transform transition-transform duration-300 ease-in-out ${
                      showSelektiranje ? 'rotate-45' : ''
                    }`}
                  />
                </button>
              </div>
              <div className='flex justify-center'>
                <button onClick={()=> handleScrollLink('zakazivanje')} className=' text-2xl m-4 border-black border-2 p-2 hover:bg-green-500 hover:scale-105 rounded-lg hover:border-white transition-all ease-in-out'>
                    Zakažite termin
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-2 my-4 lg:w-[45%] self-start rounded-lg shadow-lg border-black">
            <div className="relative h-64 overflow-hidden bg-white">
              <img
                onClick={() => setShowHemija(!showHemija)}
                src={assets.hemija}
                alt="Selektiranje žitarica"
                className="mix-blend-luminosity hover:mix-blend-normal w-full h-full object-cover scale-110 transition-transform duration-300 ease-in-out hover:scale-125 cursor-pointer"
              />
            </div>

            <div>
              <div className= "flex justify-between items-center p-4">
                <h1 className="header text-2xl lg:text-4xl">Selektiranje žitarica sa hemijom</h1>
                <h2 className="text-2xl lg:text-4xl font-bold header">3,5 din/kg</h2>
              </div>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  showHemija ? 'max-h-[600px]' : 'max-h-0'
                }`}
              >
                <div className="text-justify p-4">
                  <p className="text-base pt-2">
                  Paket selektiranja žitarica sa hemijom obuhvata dodatnu obradu žitarica uz primenu hemijskih sredstava koja osiguravaju visok nivo čistoće i zaštite. Ovaj paket je osmišljen za korisnike koji žele dodatnu sigurnost i kvalitet obrade i uključuje:
                  </p>
                  <ul className="m-4 list-disc list-inside">
                    <li className="font-semibold">
                      Odvajanje krupnih nečistoća poput kamenčića, ostataka slame i drugih neželjenih materija.
                    </li>
                    <li className="font-semibold">Prečišćavanje prašine i sitnih čestica sa površine žitarica.</li>
                    <li className="font-semibold">Primenu hemijskih sredstava za eliminaciju štetnih mikroorganizama i insekata.</li>
                    <li className='font-semibold'>Zaštitu žitarica od daljih oštećenja, čime se produžava njihova trajnost i očuvanje kvaliteta.</li>
                  </ul>
                  <p className="italic font-light text-sm">
                  Ovaj paket je idealan za korisnike koji traže dodatnu zaštitu svojih žitarica kroz napredne metode obrade, uz zadržavanje visokih standarda kvaliteta i sigurnosti.
                  </p>
                  <p className="italic font-light text-sm">
                  Napomena: Uz ovaj paket dolaze svi atributi od prethodnog.
                  </p>
                </div>
              </div>
              <div className="flex justify-center p-4">
                <button
                  onClick={() => setShowHemija(!showHemija)}
                  className="focus:outline-none"
                >
                  <img
                    src={assets.plus}
                    alt="Toggle"
                    className={`w-12 transform transition-transform duration-300 ease-in-out ${
                      showHemija ? 'rotate-45' : ''
                    }`}
                  />
                </button>
              </div>
              <div className='flex justify-center'>
                <button onClick={()=> handleScrollLink('zakazivanje')} className=' text-2xl m-4 border-black border-2 p-2 hover:bg-green-500 hover:scale-105 rounded-lg hover:border-white transition-all ease-in-out'>
                   Zakažite termin
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='lg:flex p-4 justify-center gap-4'>
        <div className="border-2 my-4 lg:w-[45%] self-start rounded-lg shadow-lg border-black">
            <div className="relative h-64 overflow-hidden bg-white">
              <img
                onClick={() => setShowHemijaPrem(!showHemijaPrem)}
                src={assets.hemijaPrem}
                alt="Selektiranje žitarica"
                className="mix-blend-luminosity hover:mix-blend-normal w-full h-full object-cover scale-110 transition-transform duration-300 ease-in-out hover:scale-125 cursor-pointer"
              />
            </div>
            <div>
              <div className="flex justify-between items-center p-4">
                <h1 className="header text-2xl lg:text-4xl">Dodatno zaprašivanje hemijom</h1>
                <h2 className="text-2xl lg:text-4xl font-bold header">6 din/kg</h2>
              </div>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  showHemijaPrem ? 'max-h-[600px]' : 'max-h-0'
                }`}
              >
                <div className="text-justify p-4">
                  <p className="text-base pt-2">
                  Paket dodatnog zaprašivanja hemijom pruža mogućnost tretiranja žitarica specijalizovanim hemijskim sredstvima radi dugotrajnije zaštite i očuvanja kvaliteta. Ovaj paket je osmišljen kao dopunska usluga za korisnike koji žele dodatni sloj sigurnosti i uključuje:
                  </p>
                  <ul className="m-4 list-disc list-inside">
                    <li className="font-semibold">
                    Primenu specijalizovanih hemijskih sredstava za zaštitu od štetnih insekata i mikroorganizama.
                    </li>
                    <li className="font-semibold">Preventivnu obradu koja smanjuje rizik od kvarenja tokom skladištenja.</li>
                    <li className="font-semibold">Poboljšanje kvaliteta skladištenja, uz očuvanje nutritivnih svojstava žitarica.</li>
                  </ul>
                  <p className="italic font-light text-sm">
                  Ovaj paket je idealan za korisnike koji traže rešenja za produženje trajnosti svojih žitarica i osiguranje dodatne zaštite tokom čuvanja i transporta.
                  </p>
                  <p className="italic font-light text-sm">
                  Napomena: Uz ovaj paket dolaze svi atributi od prethodna dva.
                  </p>
                </div>
              </div>
              <div className="flex justify-center p-4">
                <button
                  onClick={() => setShowHemijaPrem(!showHemijaPrem)}
                  className="focus:outline-none"
                >
                  <img
                    src={assets.plus}
                    alt="Toggle"
                    className={`w-12 transform transition-transform duration-300 ease-in-out ${
                      showHemijaPrem ? 'rotate-45' : ''
                    }`}
                  />
                </button>
              </div>
              <div className='flex justify-center'>
                <button onClick={()=> handleScrollLink('zakazivanje')} className=' text-2xl m-4 border-black border-2 p-2 hover:bg-green-500 hover:scale-105 rounded-lg hover:border-white transition-all ease-in-out'>
                    Zakažite termin
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-2 my-4 lg:w-[45%] self-start rounded-lg shadow-lg border-black">
            <div className="relative h-64 overflow-hidden bg-white">
              <img
                onClick={() => setShowCustom(!showCustom)}
                src={assets.deal}
                alt="Selektiranje žitarica"
                className="mix-blend-luminosity hover:mix-blend-normal w-full h-full object-cover scale-110 transition-transform duration-300 ease-in-out hover:scale-125 cursor-pointer"
              />
            </div>
            <div>
              <div className="flex justify-between items-center p-4">
                <h1 className="header text-2xl lg:text-4xl">Zaprašivanje po vašoj želji</h1>
                <h2 className="text-2xl lg:text-4xl font-bold header">Po dogovoru</h2>
              </div>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  showCustom ? 'max-h-[600px]' : 'max-h-0'
                }`}
              >
                <div className="text-justify p-4">
                  <p className="text-base pt-2">
                  Paket zaprašivanja po vašoj želji pruža potpunu fleksibilnost u tretiranju žitarica prema specifičnim potrebama korisnika. Ovaj paket omogućava personalizovani pristup zaštiti i obradi žitarica i uključuje:
                  </p>
                  <ul className="m-4 list-disc list-inside">
                    <li className="font-semibold">
                    Odabir hemijskih sredstava prema vašim potrebama i preferencijama.
                    </li>
                    <li className="font-semibold">Prilagođavanje doze i načina tretiranja, u skladu sa zahtevima korisnika.</li>
                    <li className="font-semibold">Fokus na specifične vrste štetočina ili mikroorganizama koji ugrožavaju vaše žitarice.</li>
                  </ul>
                  <p className="italic font-light text-sm">
                  Ovaj paket je idealan za korisnike koji žele personalizovan pristup obradi žitarica, uz garantovanu sigurnost i efikasnost tretmana.
                  </p>
                </div>
              </div>
              <div className="flex justify-center p-4">
                <button
                  onClick={() => setShowCustom(!showCustom)}
                  className="focus:outline-none"
                >
                  <img
                    src={assets.plus}
                    alt="Toggle"
                    className={`w-12 transform transition-transform duration-300 ease-in-out ${
                      showCustom ? 'rotate-45' : ''
                    }`}
                  />
                </button>
              </div>
              <div className='flex justify-center'>
                <button onClick={()=> handleScrollLink('zakazivanje')} className=' text-2xl m-4 border-black border-2 p-2 hover:bg-green-500 hover:scale-105 rounded-lg hover:border-white transition-all ease-in-out'>
                    Zakažite termin
                </button>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Usluge
