import React, { createContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export const Context = createContext();
export const JSContext = ({ children }) => {

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
    <Context.Provider value={{ handleScrollLink, handleScroll, scrollToTop, scrollTop, bgColor
       }}>
        {children}
      </Context.Provider>
  )
}

export default JSContext
