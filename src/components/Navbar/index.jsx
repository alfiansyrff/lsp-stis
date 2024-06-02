import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PrimaryButton from '../Button/PrimaryButton';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isHomePage = location.pathname === '/';


  // const getLinkClass = (path) => {
  //   if (location.pathname === path) {
  //     if (isHomePage && !scrolled) {
  //       return `block py-1 px-4 text-white rounded transition-colors duration-300 hover:bg-gray-100 md:hover:bg-white md:hover:text-blue-700`;
  //     }
  //     return `block py-1 px-4 ${!isHomePage ? 'text-ternaryBlue' : (scrolled ? 'text-ternaryBlue' : 'text-white')} rounded transition-colors duration-300 bg-secondaryBlue`;
  //   }
  //   return `block py-1 px-4 ${!isHomePage ? 'text-ternaryBlue' : (scrolled ? 'text-ternaryBlue' : 'text-white')} rounded transition-colors duration-300 hover:bg-secondaryBlue`;
  // };
  const getLinkClass = (path) => {
    const baseClass = 'block py-1 px-4 rounded transition-colors duration-300';
    const activeClass = isHomePage && !scrolled ? 'bg-white text-ternaryBlue' : 'text-ternaryBlue bg-secondaryBlue';
    const hoverClass = isHomePage && !scrolled ? 'hover:text-ternaryBlue hover:bg-white' : 'hover:bg-secondaryBlue';

    if (location.pathname === path) {
      return `${baseClass} ${activeClass}`;
    }
    return `${baseClass} ${hoverClass} ${isHomePage && !scrolled ? 'text-white' : 'text-ternaryBlue'}`;
  };

  
  return (
    <div>
      <nav className={`bg-transparent z-50 fixed w-full top-0 start-0 ${scrolled || !isHomePage ? 'backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200' : ''}  transition-colors duration-300`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src='image/logo.png' className="h-8" alt="Flowbite Logo" />
            <span className="text-left font-semibold text-white">
              <div className="text-sm lg:text-base font-semibold text-white">
              <p className={`mb-0 ${!isHomePage ? 'text-ternaryBlue' : (scrolled ? 'text-ternaryBlue' : 'text-white')}`}>Lembaga Sertifikasi Profesi <br className="lg:hidden" /> <span className='block'>Politeknik Statistika STIS</span></p>
              </div>
            </span>
          </a>

          <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
            <button className={`${scrolled || !isHomePage ? 'text-ternaryBlue' : 'text-white'}`}>Daftar</button>
            <Link to="/login">
              <PrimaryButton text={'Masuk'} />
            </Link>
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className="items-center bg-transparent justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to="/" className={getLinkClass('/')}>Beranda</Link>
              </li>
              <li>
                <Link to="/regulasi" className={getLinkClass('/regulasi')}>Regulasi</Link>
              </li>
              <li>
                <Link to="/sertifikasi" className={getLinkClass('/sertifikasi')}>Sertifikasi</Link>
              </li>
              <li>
                <Link to="/berita" className={getLinkClass('/berita')}>Berita</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
