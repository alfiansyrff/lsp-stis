import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import PrimaryButton from '../Button/PrimaryButton';

const HeroSection = () => {
  const [backgroundPositionY, setBackgroundPositionY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setBackgroundPositionY(scrollPosition * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      className="hero relative bg-cover bg-center"
      style={{ 
        backgroundImage: "url('/image/gedung.jpg')",
        backgroundPositionY,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: 'calc(100vh + 100px)'
      }}
      id="hero"
    >
      <div className="absolute inset-0"></div>

      <Navbar />

      <div className="absolute inset-0 flex items-center bg-gradient-hero opacity-80 justify-center">
        <div
          className="flex flex-col items-center space-y-8 text-center text-white cta md:space-y-10 md:mt-24"
          style={{ marginTop: 'calc(1rem)' }}
        >
          <div className="flex flex-col items-center">
            <div className='flex flex-col justify-between space-y-6 mb-10'>
              <h1 className="text-4xl md:text-[72px] font-bold">Lembaga Sertifikasi Profesi</h1>
              <h1 className="text-4xl md:text-[72px] font-bold">Politeknik Statistika STIS</h1>
            </div>
            <p className="text-lg md:text-[1.5em] w-3/4 mb-8 md:mb-10">
              Lembaga Sertifikasi Politeknik (LSP) Politeknik Statistika STIS adalah lembaga sertifikasi profesi pihak kesatu lembaga pendidikan dan pelatihan untuk melaksanakan sertifikasi kompetensi di bidang ilmu statistika dan sains data.
            </p>
            <PrimaryButton text={'Selengkapnya'} cta={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
