// import React, { useEffect, useState } from 'react';
// import Navbar from '../Navbar';
// import PrimaryButton from '../Button/PrimaryButton';
// import Typed from 'typed.js';


// const HeroSection = () => {

//   const el = React.useRef(null);
//   const [backgroundPositionY, setBackgroundPositionY] = useState(0);

//   useEffect(() => {
//     const typed = new Typed(el.current, {
//       strings: ['<span class="text-transparent bg-clip-text bg-gradient-to-r to-secondaryBlue from-white">Lembaga Sertifikasi Profesi</span>', '<span class="text-transparent bg-clip-text bg-gradient-to-r to-secondaryBlue from-white">LSP Politeknik Statistika STIS</span>'],
//       typeSpeed: 80,
//       backSpeed: 50,
//       loop: true,
//       loopCount: Infinity,
//       backDelay: 1000,
//     });

//     return () => {
//       typed.destroy();
//     };
//   }, []);


//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       setBackgroundPositionY(scrollPosition * 0.5);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <section
//       className="hero relative bg-cover bg-center"
//       style={{ 
//         backgroundImage: "url('/image/gedung.jpg')",
//         backgroundPositionY,
//         backgroundRepeat: 'no-repeat',
//         backgroundSize: 'cover',
//         minHeight: 'calc(100vh + 100px)'
//       }}
//       id="hero"
//     >
//       <div className="absolute inset-0"></div>

//       <div className="absolute inset-0 flex items-center bg-gradient-hero opacity-90 justify-center">
//         <div
//           className="flex flex-col items-center space-y-8 text-center text-white cta"
//           style={{ marginTop: '' }}
//         >
//           <div className="flex flex-col items-center">
//             <div className='flex flex-col justify-between space-y-2 mb-10'>
//               <h1 className="text-4xl md:text-[72px] font-bold">   <span ref={el} /></h1>
//             </div>
//             <p className="text-lg md:text-[1.5em] w-3/4 mb-20 opacity-80">
//               Lembaga Sertifikasi Politeknik (LSP) Politeknik Statistika STIS adalah lembaga sertifikasi profesi pihak kesatu lembaga pendidikan dan pelatihan untuk melaksanakan sertifikasi kompetensi di bidang ilmu statistika dan sains data.
//             </p>
//             <PrimaryButton text={'Selengkapnya'} cta={true} link='/sertifikasi'/>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import PrimaryButton from '../Button/PrimaryButton';
import Typed from 'typed.js';

const HeroSection = () => {
  const el = React.useRef(null);
  const [backgroundPositionY, setBackgroundPositionY] = useState(0);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        '<span class="text-transparent bg-clip-text bg-gradient-to-r to-secondaryBlue from-white">Lembaga Sertifikasi Profesi</span>',
        '<span class="text-transparent bg-clip-text bg-gradient-to-r to-secondaryBlue from-white">LSP Politeknik Statistika STIS</span>'
      ],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
      loopCount: Infinity,
      backDelay: 1000,
    });

    return () => {
      typed.destroy();
    };
  }, []);

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

      <div className="absolute inset-0 flex items-center bg-gradient-hero opacity-90 justify-center">
        <div className="flex flex-col items-center space-y-8 text-center text-white p-4 sm:p-8 lg:p-16">
          <div className="flex flex-col items-center">
            <div className="flex flex-col justify-between space-y-2 mb-10">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                <span ref={el} />
              </h1>
            </div>
            <p className="text-lg sm:text-lg md:text-2xl w-full sm:w-3/4 md:max-w-10xl mb-20 opacity-80">
              Lembaga Sertifikasi Politeknik (LSP) Politeknik Statistika STIS adalah lembaga sertifikasi profesi pihak kesatu lembaga pendidikan dan pelatihan untuk melaksanakan sertifikasi kompetensi di bidang ilmu statistika dan sains data.
            </p>
            <PrimaryButton text={'Selengkapnya'} cta={true} link='/sertifikasi' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
