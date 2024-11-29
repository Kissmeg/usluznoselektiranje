import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import { Context } from '../Context/JSContext';

const Navbar = () => {

  // Držimo stanje boje navbar-a
  const {location, navigation, handleScrollLink, scrollToTop, scrollTop, bgColor} = useContext(Context);
  const [mobileMenu, setMobileMenu] = useState(false);
  
  return (
    <div className='absolute w-full z-50'>
      <div className='absolute z-40 '>
        <div onClick={scrollTop} className={`${scrollToTop} bottom-12 animation-up right-8 p-2 bg-green-500 rounded-full cursor-pointer`}> <img src={assets.arrow_up_dark} className='w-8' alt="" /> </div>
      </div>
      <div className={`${bgColor} flex justify-between w-full fixed p-4 text-white transition-all`}>
        <div className=' p-4'>
          <Link to={'/'}>
            <img onClick={() => handleScrollLink('pocetna')} src={assets.logo} alt='' className='w-8 h-8 scale-150 hover:scale-[1.6] ease-in-out transition-all ' />
          </Link>
        </div>
        <div className='text-2xl lg:flex hidden'>
          <div onClick={() => handleScrollLink('pocetna')} className='p-2 hover:translate-x-2 hover:text-green-500 ease-in-out transition-all scale-50'>
            <Link className=''><p className='text-4xl'>Početna</p></Link>
          </div>
          <div onClick={() => handleScrollLink('onama')} className='p-2 hover:translate-x-2 hover:text-green-500 ease-in-out transition-all scale-50'>
            <Link className=''><p className='text-4xl'>O nama</p></Link>
          </div>
          <div onClick={() => handleScrollLink('usluge')} className='p-2 hover:translate-x-2 hover:text-green-500 ease-in-out transition-all scale-50'>
            <Link className=''><p className='text-4xl'>Usluge</p></Link>
          </div>
          <div onClick={() => handleScrollLink('zakazivanje')} className='p-2 hover:translate-x-2 hover:text-green-500 ease-in-out transition-all scale-50'>
            <Link className=''><p className='text-4xl'>Kontakt</p></Link>
          </div>
          <NavLink to={'/galerija'} className=''>
          <div onClick={() => handleScrollLink('galerija')} className='p-2 hover:translate-x-2 hover:text-green-500 ease-in-out transition-all scale-50'>
            <p className='text-4xl'>Galerija</p>
          </div>
          </NavLink>
        </div>
        <div className='p-4 lg:hidden'>
          <img onClick={()=> setMobileMenu(!mobileMenu)} src={assets.meni} className='w-8 h-8' alt="" />
          {mobileMenu &&(
          <div className='absolute z-50 bg-neutral-950 w-full left-0 top-0 h-screen'>
              <div className='flex justify-between'>
                <div className='p-4'>
                  <div onClick={() => {handleScrollLink('pocetna'),setMobileMenu(false)}} className='p-2 hover:translate-x-2 hover:text-green-500 ease-in-out transition-all scale-50'>
                    <Link className=''><p className='text-4xl'>Početna</p></Link>
                  </div>
                  <div onClick={() => {handleScrollLink('onama'),setMobileMenu(false)}} className='p-2 hover:translate-x-2 hover:text-green-500 ease-in-out transition-all scale-50'>
                    <Link className=''><p className='text-4xl'>O nama</p></Link>
                  </div>
                  <div onClick={() => {handleScrollLink('usluge'),setMobileMenu(false)}} className='p-2 hover:translate-x-2 hover:text-green-500 ease-in-out transition-all scale-50'>
                    <Link className=''><p className='text-4xl'>Usluge</p></Link>
                  </div>
                  <div onClick={() => {handleScrollLink('zakazivanje'),setMobileMenu(false)}} className='p-2 hover:translate-x-2 hover:text-green-500 ease-in-out transition-all scale-50'>
                    <Link className=''><p className='text-4xl'>Kontakt</p></Link>
                  </div>
                  <div onClick={() => {handleScrollLink('galerija'),setMobileMenu(false)}} className='p-2 hover:translate-x-2 hover:text-green-500 ease-in-out transition-all scale-50'>
                    <Link to={'/galerija'} className=''><p className='text-4xl'>Galerija</p></Link>
                  </div>
                </div>
                <div className='p-4'>
                  <img onClick={()=> setMobileMenu(false)} className='w-8 h-8 m-4' src={assets.cross} alt="" />
                </div>
              </div>
              <div className='border-2 z-0 absolute top-[8%] opacity-20'>
                <img src={assets.logo} alt="" />
              </div>
          </div>
        )}
        </div>
        
      </div>
      
    </div>
    
  );
};

export default Navbar;
