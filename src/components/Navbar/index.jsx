// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import PrimaryButton from '../Button/PrimaryButton';

// function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();


//   const variants = {
//     open: { opacity: 1, x: 0 },
//     closed: { opacity: 0, x: "-100%" },
//   }

//   const baseUrl = '/';

  
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 200) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const isHomePage = location.pathname === '/';

//   const getLinkClass = (path) => {
//     const baseClass = 'block py-1 px-4 rounded transition-colors duration-300';
//     const activeClass = isHomePage && !scrolled ? 'bg-white text-ternaryBlue w-min' : 'text-ternaryBlue bg-secondaryBlue';
//     const hoverClass = isHomePage && !scrolled ? 'hover:text-ternaryBlue hover:bg-white' : 'hover:bg-secondaryBlue';

//     if (location.pathname === path) {
//       return `${baseClass} ${activeClass}`;
//     }
//     return `${baseClass} ${hoverClass} ${isHomePage && !scrolled ? 'text-white' : 'text-ternaryBlue'}`;
//   };

//   return (
//     <div>
//       <nav className={`bg-transparent z-50 fixed w-full top-0 start-0 ${scrolled || !isHomePage ? 'backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200' : ''} transition-colors duration-300`}>
//         <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto py-4 px-7">
//           <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
//           <img src={baseUrl + 'image/logo.png'} className="h-8" alt="STIS Logo" />

//             <span className="text-left text-white">
//               <div className="text-sm lg:text-base text-white">
//                 <p className={`mb-0 ${!isHomePage ? 'text-ternaryBlue' : (scrolled ? 'text-ternaryBlue' : 'text-white')}`}>
//                   Lembaga Sertifikasi Profesi <br className="lg:hidden" /> <span className='block'>Politeknik Statistika STIS</span>
//                 </p>
//               </div>
//             </span>
//           </a>

//           <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
//             <Link to={'/register'} className={`hidden md:flex items-center justify-center ${scrolled || !isHomePage ? 'text-ternaryBlue' : 'text-white'}`}>
//               Daftar
//             </Link>
//             <Link className='hidden md:block' to="/login">
//               <PrimaryButton text={'Masuk'} />
//             </Link>
//             <button
//               data-collapse-toggle="navbar-sticky"
//               type="button"
//               className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//               aria-controls="navbar-sticky"
//               aria-expanded={menuOpen}
//               onClick={() => setMenuOpen(!menuOpen)}
//             >
//               <span className="sr-only">Open main menu</span>
//               <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
//               </svg>
//             </button>
//           </div>

//           <div className={`items-center bg-transparent justify-between ${menuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
//             <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//               <li>
//                 <Link to="/" className={getLinkClass('/')}>Beranda</Link>
//               </li>
//               <li>
//                 <Link to="/regulasi" className={getLinkClass('/regulasi')}>Regulasi</Link>
//               </li>
//               <li>
//                 <Link to="/sertifikasi" className={getLinkClass('/sertifikasi')}>Sertifikasi</Link>
//               </li>
//               <li>
//                 <Link to="/berita" className={getLinkClass('/berita')}>Berita</Link>
//               </li>
//               <li className="md:hidden">
//                 <button className={`${scrolled || !isHomePage ? 'text-ternaryBlue' : 'text-white'}`}>Daftar</button>
//               </li>
//               <li className="md:hidden">
//                 <Link to="/login">
//                   <PrimaryButton text={'Masuk'} />
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;

// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import PrimaryButton from '../Button/PrimaryButton';

// function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();

//   const baseUrl = '/';

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 200) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const isHomePage = location.pathname === '/';

//   const getLinkClass = (path) => {
//     const baseClass = 'block py-1 px-4 rounded transition-colors duration-300';
//     const activeClass = isHomePage && !scrolled ? 'bg-white text-ternaryBlue w-min' : 'text-ternaryBlue bg-secondaryBlue';
//     const hoverClass = isHomePage && !scrolled ? 'hover:text-ternaryBlue hover:bg-white' : 'hover:bg-secondaryBlue';

//     if (location.pathname === path) {
//       return `${baseClass} ${activeClass}`;
//     }
//     return `${baseClass} ${hoverClass} ${isHomePage && !scrolled ? 'text-white' : 'text-ternaryBlue'}`;
//   };

//   return (
//     <nav className={`fixed top-0 left-0 w-full z-50 ${scrolled || !isHomePage ? 'bg-white shadow-md' : 'bg-transparent'}`}>
//       <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center space-x-3">
//             <Link to="/" className="flex items-center space-x-3">
//               <img src={baseUrl + 'image/logo.png'} className="h-8" alt="STIS Logo" />
//               <span className={`text-sm lg:text-base ${isHomePage && !scrolled ? 'text-white' : 'text-ternaryBlue'}`}>
//                 <p className="mb-0">
//                   Lembaga Sertifikasi Profesi <br className="lg:hidden" /> <span className="block">Politeknik Statistika STIS</span>
//                 </p>
//               </span>
//             </Link>
//           </div>

//           <div className="hidden md:flex items-center space-x-4">
//             <ul className="flex space-x-4">
//               <li>
//                 <Link to="/" className={getLinkClass('/')}>Beranda</Link>
//               </li>
//               <li>
//                 <Link to="/regulasi" className={getLinkClass('/regulasi')}>Regulasi</Link>
//               </li>
//               <li>
//                 <Link to="/sertifikasi" className={getLinkClass('/sertifikasi')}>Sertifikasi</Link>
//               </li>
//               <li>
//                 <Link to="/berita" className={getLinkClass('/berita')}>Berita</Link>
//               </li>
//             </ul>
//             <Link to="/register" className={`text-ternaryBlue hover:text-secondaryBlue focus:outline-none ${isHomePage && !scrolled ? 'text-white' : 'text-ternaryBlue'}`}>
//               Daftar
//             </Link>
//             <Link to="/login">
//               <PrimaryButton text="Masuk" />
//             </Link>
//           </div>

//           <div className="flex items-center md:hidden space-x-3">
//             <button
//               className="text-ternaryBlue hover:text-secondaryBlue focus:outline-none"
//               onClick={() => setMenuOpen(!menuOpen)}
//             >
//               <svg className="w-6 h-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M3 12h18M3 6h18M3 18h18"></path>
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <div className={`md:hidden mt-3 ${menuOpen ? 'block' : 'hidden'}`}>
//           <ul className="bg-white py-2 px-4 shadow-lg rounded-lg space-y-2">
//             <li>
//               <Link to="/" className={getLinkClass('/')}>Beranda</Link>
//             </li>
//             <li>
//               <Link to="/regulasi" className={getLinkClass('/regulasi')}>Regulasi</Link>
//             </li>
//             <li>
//               <Link to="/sertifikasi" className={getLinkClass('/sertifikasi')}>Sertifikasi</Link>
//             </li>
//             <li>
//               <Link to="/berita" className={getLinkClass('/berita')}>Berita</Link>
//             </li>
//             <li>
//               <Link to="/register" className="block py-2 px-4 text-ternaryBlue hover:text-secondaryBlue">Daftar</Link>
//             </li>
//             <li>
//               <Link to="/login">
//                 <PrimaryButton text="Masuk" />
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PrimaryButton from '../Button/PrimaryButton';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const baseUrl = '/';

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
  //   const baseClass = 'block py-1 px-4 rounded transition-colors duration-300';
  //   const activeClass = isHomePage && !scrolled ? 'bg-white text-ternaryBlue w-min' : 'text-ternaryBlue bg-secondaryBlue';
  //   const hoverClass = isHomePage && !scrolled ? 'hover:text-ternaryBlue hover:bg-white' : 'hover:bg-secondaryBlue';

  //   if (location.pathname === path) {
  //     return `${baseClass} ${activeClass}`;
  //   }
  //   return `${baseClass} ${hoverClass} ${isHomePage && !scrolled ? 'text-white' : 'text-ternaryBlue'}`;
  // };
  const getLinkClass = (path) => {
    const baseClass = 'block py-1 px-4 rounded transition-colors duration-300';
    const activeClass = isHomePage ? (scrolled ? 'bg-secondaryBlue text-ternaryBlue' : 'bg-white text-ternaryBlue') : 'text-ternaryBlue bg-secondaryBlue';
    const hoverClass = isHomePage ? (scrolled ? 'hover:bg-secondaryBlue hover:text-ternaryBlue' : 'hover:bg-white hover:text-ternaryBlue') : 'hover:bg-secondaryBlue hover:text-ternaryBlue';
  
    const isLargeScreen = window.innerWidth > 1024; // Example threshold for large screen
  
    if (location.pathname === path) {
      return `${baseClass} ${activeClass}`;
    }
    
    if (isLargeScreen) {
      return `${baseClass} ${hoverClass} ${isHomePage && !scrolled ? 'text-white' : 'text-ternaryBlue'}`;
    } else {
      return `${baseClass} ${hoverClass}`;
    }
  };
  
  

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 ${scrolled || !isHomePage ? ' backdrop-filter backdrop-blur-lg bg-opacity-20 shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={baseUrl + 'image/logo.png'} className="h-8" alt="STIS Logo" />
          <span className={`text-sm lg:text-base ${isHomePage && !scrolled ? 'text-white' : 'text-ternaryBlue'}`}>
            <p className="mb-0">
              Lembaga Sertifikasi Profesi <br className="lg:hidden" /> <span className="block">Politeknik Statistika STIS</span>
            </p>
          </span>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-4 items-center">
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

        {/* Daftar and Masuk Buttons */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link to="/register" className={`text-ternaryBlue hover:text-secondaryBlue focus:outline-none ${isHomePage && !scrolled ? 'text-white' : 'text-ternaryBlue'}`}>
            Daftar
          </Link>
          <Link to="/login">
            <PrimaryButton text="Masuk" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden space-x-3 items-center">
          <button
            className="text-ternaryBlue hover:text-secondaryBlue focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12h18M3 6h18M3 18h18"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden mt-3 ${menuOpen ? 'block' : 'hidden'}`}>
        <ul className="bg-white text-ternaryBlue py-2 px-4 shadow-lg rounded-lg space-y-2">
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
          <li>
            <Link to="/register" className="block py-2 px-4 text-ternaryBlue hover:text-secondaryBlue">Daftar</Link>
          </li>
          <li>
            <Link to="/login">
              <PrimaryButton text="Masuk" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
