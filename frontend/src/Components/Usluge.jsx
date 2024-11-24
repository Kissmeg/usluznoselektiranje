import React, { useState } from 'react'
import { assets } from '../assets/assets'
{/*Odaberite savršenu ponudu za vaše žitarice za bolji prinos! */}
const Usluge = () => {
  const [showSelektiranje, setShowSelektiranje] = useState(false);
  const [showHemija, setShowHemija] = useState();
  const [showHemijaPrem, setShowHemijaPrem] = useState();
  const [showCustom, setShowCustom] = useState();
  
  return (
    <div className='pt-20' id='usluge'>
      <div className=''>
        
        <div className='flex flex-1 self-start justify-center'>
          <div className="border-2 my-4 mr-4 w-[45%] self-start">
            <div className="relative h-64 overflow-hidden bg-white">
              <img
                src={assets.selektor}
                alt="Selektiranje žitarica"
                className="mix-blend-luminosity hover:mix-blend-normal w-full h-full object-cover scale-110 transition-transform duration-300 ease-in-out hover:scale-125"
              />
            </div>
            <div>
              <div className="flex justify-between items-center p-4">
                <h1 className="header text-4xl">Selektiranje žitarica</h1>
                <h2 className="text-4xl font-bold header">3din/kg</h2>
              </div>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  showSelektiranje ? 'max-h-[300px]' : 'max-h-0'
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
            </div>
          </div>
          
          <div className="border-2 my-4 mr-4 w-[45%] self-start">
            <div className="relative h-64 overflow-hidden bg-white">
              <img
                src={assets.hemija}
                alt="Selektiranje žitarica"
                className="mix-blend-luminosity hover:mix-blend-normal w-full h-full object-cover scale-110 transition-transform duration-300 ease-in-out hover:scale-125"
              />
            </div>
            <div>
              <div className="flex justify-between items-center p-4">
                <h1 className="header text-4xl">Selektiranje žitarica sa hemijom</h1>
                <h2 className="text-4xl font-bold header">3,5 din/kg</h2>
              </div>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  showHemija ? 'max-h-[300px]' : 'max-h-0'
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
            </div>
          </div>
        </div>

        <div className='flex justify-center'>
        <div className="border-2 my-4 mr-4 w-[45%] self-start">
            <div className="relative h-64 overflow-hidden bg-white">
              <img
                src={assets.hemijaPrem}
                alt="Selektiranje žitarica"
                className="mix-blend-luminosity hover:mix-blend-normal w-full h-full object-cover scale-110 transition-transform duration-300 ease-in-out hover:scale-125"
              />
            </div>
            <div>
              <div className="flex justify-between items-center p-4">
                <h1 className="header text-4xl">Dodatno zaprasivanje hemijom</h1>
                <h2 className="text-4xl font-bold header">3,5 din/kg</h2>
              </div>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  showHemijaPrem ? 'max-h-[300px]' : 'max-h-0'
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
            </div>
          </div>
          
          <div className="border-2 my-4 mr-4 w-[45%] self-start">
            <div className="relative h-64 overflow-hidden bg-white">
              <img
                src={assets.deal}
                alt="Selektiranje žitarica"
                className="mix-blend-luminosity hover:mix-blend-normal w-full h-full object-cover scale-110 transition-transform duration-300 ease-in-out hover:scale-125"
              />
            </div>
            <div>
              <div className="flex justify-between items-center p-4">
                <h1 className="header text-4xl">Zaprasivanje po vasoj zelji</h1>
                <h2 className="text-4xl font-bold header">Po dogovoru</h2>
              </div>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  showCustom ? 'max-h-[300px]' : 'max-h-0'
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Usluge
