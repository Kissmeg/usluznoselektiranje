import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {
  // Držimo stanje boje navbar-a
  const [bgColor, setBgColor] = useState('transparent');

  // Funkcija koja prati scroll poziciju
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setBgColor('bg-neutral-950 ease-in-out transition-all translate-y-2'); // Promeni boju navbar-a kad skroluješ
    } else {
      setBgColor('transparent'); // Vratiti početnu boju kad je na vrhu
    }
  };

  // Koristimo useEffect za dodavanje event listenera za scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Čistimo event listener kada se komponenta unmount-uje
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='absolute w-full z-50'>
      
      <div className={`${bgColor} flex justify-between w-full fixed p-4 text-white transition-all`}>
        <div >
          <Link to={'/'}>
            <img src={assets.logo} alt='' className=' w-8 h-8' />
          </Link>
        </div>
        <div className='text-2xl'>
          <Link className='m-4 hover:translate-x-4 hover:text-green-500 ease-in-out transition-all'>Pocetna</Link>
          <Link className='m-4 hover:translate-x-4 hover:text-green-500 ease-in-out transition-all'>Usluge</Link>
          <Link className='m-4 hover:translate-x-4 hover:text-green-500 ease-in-out transition-all'>Cenovnik</Link>
          <Link className='m-4 hover:translate-x-4 hover:text-green-500 ease-in-out transition-all'>Galerija</Link>
          <Link className='m-4 hover:translate-x-4 hover:text-green-500 ease-in-out transition-all'>Kontakt</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
