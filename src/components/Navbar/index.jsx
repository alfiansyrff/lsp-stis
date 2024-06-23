import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PrimaryButton from '../Button/PrimaryButton';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  const baseUrl = '/';

  useEffect(() => {
    const loginStatus = localStorage.getItem('email');
    setIsLoggedIn(loginStatus);
  }, []);

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

  const getLinkClass = (path) => {
    const baseClass = 'block py-1 px-4 rounded transition-colors duration-300';
    const activeClass = isHomePage ? (scrolled ? 'bg-secondaryBlue text-ternaryBlue' : 'bg-white text-ternaryBlue') : 'text-ternaryBlue bg-secondaryBlue';
    const hoverClass = isHomePage ? (scrolled ? 'hover:bg-secondaryBlue hover:text-ternaryBlue' : 'hover:bg-white hover:text-ternaryBlue') : 'hover:bg-secondaryBlue hover:text-ternaryBlue';
  
    const isLargeScreen = window.innerWidth > 1024;
  
    if (location.pathname === path) {
      return `${baseClass} ${activeClass}`;
    }
    
    if (isLargeScreen) {
      return `${baseClass} ${hoverClass} ${isHomePage && !scrolled ? 'text-white' : 'text-ternaryBlue'}`;
    } else {
      return `${baseClass} ${hoverClass}`;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('loginSuccess');
    localStorage.removeItem('email');
    setIsLoggedIn(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 ${scrolled || !isHomePage ? 'backdrop-filter backdrop-blur-lg bg-opacity-20 shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={baseUrl + 'image/logo.png'} className="h-8" alt="STIS Logo" />
          <span className={`text-sm lg:text-base ${isHomePage && !scrolled ? 'text-white' : 'text-ternaryBlue'}`}>
            <p className="mb-0 text-sm">
              Lembaga Sertifikasi Profesi <br className="lg:hidden" /> <span className="block">Politeknik Statistika STIS</span>
            </p>
          </span>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-3 items-center">
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
            <Link to="/statistik" className={getLinkClass('/statistik')}>Statistik</Link>
          </li>
        </ul>

        {/* Profile / Daftar and Masuk Buttons */}
        <div className="hidden md:flex space-x-4 items-center">
          {isLoggedIn ? (
            <div className="relative">
              <button
                onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                className={`text-ternaryBlue hover:text-secondaryBlue focus:outline-none ${isHomePage && !scrolled ? 'text-white' : 'text-ternaryBlue'}`}
              >
                 <img
              src="https://ui-avatars.com/api/?name=Alfian+Syarif&background=D7EAFB&color=228be6&bold=true"
              alt=""
              className="w-10 h-10 rounded-full hover:cursor-pointer"         
            />
              </button>
              {profileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                  <Link to="/user" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/register" className={`text-ternaryBlue  focus:outline-none ${isHomePage && !scrolled ? 'text-white' : ''}`}>
                Daftar
              </Link>
              <Link to="/login">
                <PrimaryButton text="Masuk" />
              </Link>
            </>
          )}
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
            <Link to="/statistik" className={getLinkClass('/statistik')}>Statistik</Link>
          </li>
          {isLoggedIn ? (
            <>
              <li>
                <Link to="/user" className="block py-2 px-4 text-ternaryBlue hover:text-secondaryBlue">Dashboard</Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="w-full text-left block py-2 px-4 text-ternaryBlue hover:text-secondaryBlue"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/register" className="block py-2 px-4 text-ternaryBlue hover:text-secondaryBlue">Daftar</Link>
              </li>
              <li>
                <Link to="/login">
                  <PrimaryButton text="Masuk" />
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
