import React, {useEffect} from 'react';
import { motion } from 'framer-motion';
import Heading from '../Heading/Index';
import PrimaryButton from '../Button/PrimaryButton';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Lisensi() {

  useEffect(() => {
    AOS.init();
  }, [])

  const flipAnimation = {
    hover: {
      rotateY: [0, 180, 360],
      transition: { duration: 1, ease: "easeInOut" }
    }
  };

  const onInit = () => {
    console.log('lightGallery has been initialized');
  };
  return (
    
    <div className='my-[10em] max-w-5xl mx-auto sm:px-4 md:px-0'>

      <div data-aos="fade-up"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-easing="ease-in-out">
        <Heading text={'Lisensi BNSP'}/>
      </div>

      <div className='flex flex-col md:flex-row justify-between mx-auto mt-16 px-4 md:px-0 space-x-8 md:space-y-0'>
        <div className='md:w-1/2 relative' data-aos="fade-right"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-easing="ease-in-out">
          <p className='text-lg text-center md:text-left text-ternaryBlue'>
            Lisensi Badan Nasional Sertifikasi Profesi (BNSP) adalah sebuah legalitas yang memberikan kepastian bahwa sebuah lembaga atau institusi memiliki kemampuan dan kapasitas untuk melakukan sertifikasi kompetensi kerja yang diakui secara nasional.
            Lisensi BNSP ini memberikan jaminan bahwa sertifikasi yang dilakukan oleh lembaga tersebut dilakukan sesuai dengan standar yang telah ditetapkan oleh BNSP dan diakui secara luas oleh masyarakat serta dunia kerja.
          </p>

          <div className='absolute sm:bottom-full left-0 right-0 mx-auto md:mx-0 my-5 md:my-0 md:bottom-0 flex flex-col sm:flex-row items-center justify-center space-y-5 sm:space-y-0 sm:space-x-5'>
            <PrimaryButton text={'Unduh Sertifikat Linsensi'}/>
            <PrimaryButton text={'Unduh SK Linsensi'}/>
          </div>


        </div>
        <div className='hidden md:w-1/2 md:flex justify-end' data-aos="fade-left"
      data-aos-delay="50"
      data-aos-duration="500"
      data-aos-easing="ease-in-out">
          <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
               <motion.img
                className='shadow hover:cursor-pointer'
                src="/image/Sertifikat Lisensi BNSP.jpg"
                width={250}
                alt="Sertifikat Lisensi BNSP"
                whileHover={{ translateY: -10 }}
                srcSet=""
              />
            </LightGallery>
         
        </div>
      </div>
    </div>
  );
}

export default Lisensi;

// import React, { useEffect } from 'react';
// import { motion } from 'framer-motion';
// import Heading from '../Heading/Index';
// import PrimaryButton from '../Button/PrimaryButton';
// import 'lightgallery/css/lightgallery.css';
// import 'lightgallery/css/lg-zoom.css';
// import 'lightgallery/css/lg-thumbnail.css';
// import LightGallery from 'lightgallery/react';
// import lgThumbnail from 'lightgallery/plugins/thumbnail';
// import lgZoom from 'lightgallery/plugins/zoom';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// function Lisensi() {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   const onInit = () => {
//     console.log('lightGallery has been initialized');
//   };

//   return (
//     <div className="my-20 md:my-40 max-w-5xl mx-auto px-4">
//       <div
//         data-aos="fade-up"
//         data-aos-delay="50"
//         data-aos-duration="500"
//         data-aos-easing="ease-in-out"
//       >
//         <Heading text={'Lisensi BNSP'} />
//       </div>

//       <div className="flex flex-col md:flex-row justify-between items-center mx-auto mt-8 md:mt-16 space-y-8 md:space-y-0 md:space-x-8">
//         <div className="md:w-1/2" data-aos="fade-right" data-aos-delay="50" data-aos-duration="500" data-aos-easing="ease-in-out">
//           <p className="text-lg text-center md:text-left text-ternaryBlue">
//             Lisensi Badan Nasional Sertifikasi Profesi (BNSP) adalah sebuah legalitas yang memberikan kepastian bahwa sebuah lembaga atau institusi memiliki kemampuan dan kapasitas untuk melakukan sertifikasi kompetensi kerja yang diakui secara nasional.
//             Lisensi BNSP ini memberikan jaminan bahwa sertifikasi yang dilakukan oleh lembaga tersebut dilakukan sesuai dengan standar yang telah ditetapkan oleh BNSP dan diakui secara luas oleh masyarakat serta dunia kerja.
//           </p>
//         </div>
//         <div className="md:w-1/2 flex justify-center md:justify-end" data-aos="fade-left" data-aos-delay="50" data-aos-duration="500" data-aos-easing="ease-in-out">
//           <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
//             <motion.img
//               className="shadow hover:cursor-pointer"
//               src="/image/Sertifikat Lisensi BNSP.jpg"
//               width={250}
//               alt="Sertifikat Lisensi BNSP"
//               whileHover={{ translateY: -10 }}
//               srcSet=""
//             />
//           </LightGallery>
//         </div>
//       </div>

//       <div className="flex text-center md:text-right mt-4 md:mt-0">
//         <PrimaryButton text={'Unduh Sertifikat Linsensi'} />
//         <PrimaryButton text={'Unduh SK Linsensi'} />
//       </div>
//     </div>
//   );
// }

// export default Lisensi;
