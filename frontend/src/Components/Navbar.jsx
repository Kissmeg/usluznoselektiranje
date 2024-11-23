import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const handleScrollLink = (target) => {
    if (location.pathname !== '/') {
      // Ako nismo na glavnoj stranici, navigiraj na početnu stranicu
      navigate('/');
      // Kada se navigacija izvrši, postavi mali timeout za skrolovanje
      setTimeout(() => {
        const element = document.getElementById(target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // 100ms je dovoljno vreme da se komponenta učita
    } else {
      // Ako smo već na početnoj, skroluj direktno
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Držimo stanje boje navbar-a
  const [bgColor, setBgColor] = useState('transparent');

  // Funkcija koja prati scroll poziciju
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setBgColor('bg-neutral-950 ease-in-out transition-all transition-y-2 '); // Promeni boju navbar-a kad skroluješ
      setScrollToTop(' ease-in-out transition-all transition-y-2 text-white fixed'); // Promeni boju navbar-a kad skroluješ
    } else {
      setBgColor('transparent'); // Vratiti početnu boju kad je na vrhu
      setScrollToTop('hidden ease-in-out transition-all'); // Vratiti početnu boju kad je na vrhu
    }
  };
  const [scrollToTop, setScrollToTop] = useState('hidden');
  
  const scrollTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
       
    });
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
      <div className='absolute z-50 '>
        <div onClick={scrollTop} className={`${scrollToTop} bottom-12 animation-up right-8 p-2 bg-green-500 rounded-full`}> <img src={assets.arrow_up_dark} className='w-8' alt="" /> </div>
      </div>
      <div className={`${bgColor} flex justify-between w-full fixed p-4 text-white transition-all`}>
        <div className=' p-4'>
          <Link to={'/'}>
            <img src={assets.logo} alt='' className='w-8 h-8 scale-150 hover:scale-[1.6] ease-in-out transition-all ' />
          </Link>
        </div>
        <div className='text-2xl flex'>
          <div className='p-2 hover:translate-x-2 hover:text-green-500 ease-in-out transition-all scale-50'>
            <Link className=''><p className='text-4xl'>Pocetna</p></Link>
          </div>
          <div onClick={() => handleScrollLink('usluge')} className='p-2 hover:translate-x-2 hover:text-green-500 ease-in-out transition-all scale-50'>
            <Link className=''><p className='text-4xl'>Usluge</p></Link>
          </div>
          <div onClick={() => handleScrollLink('cenovnik')} className='p-2 hover:translate-x-2 hover:text-green-500 ease-in-out transition-all scale-50'>
            <Link className=''><p className='text-4xl'>Cenovnik</p></Link>
          </div>
          <div onClick={() => handleScrollLink('galerija')} className='p-2 hover:translate-x-2 hover:text-green-500 ease-in-out transition-all scale-50'>
            <Link className=''><p className='text-4xl'>Galerija</p></Link>
          </div>
          <div onClick={() => handleScrollLink('kontakt')} className='p-2 hover:translate-x-2 hover:text-green-500 ease-in-out transition-all scale-50'>
            <Link className=''><p className='text-4xl'>Kontakt</p></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
