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

  return (
    <div className='my-[10em] max-w-5xl mx-auto sm:px-4 md:px-0'>

      <div data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out">
        <Heading text={'Lisensi BNSP'}/>
      </div>

      <div className='flex flex-col md:flex-row justify-center items-center mx-auto mt-16 px-4 md:px-0 space-y-8 md:space-y-0 '>
        <div className='flex flex-col md:w-[60%] mx-auto justify-center bg-white rounded-2xl p-5 relative' data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="500"
          data-aos-easing="ease-in-out">
          <p className='text-2xl my-5 text-primaryBlue text-left font-bold'>Legalitas LSP Polstat STIS</p>
          <p className='text-md text-gray-700'>
            Lihat lebih lanjut mengenai lisensi Badan Nasional Sertifikasi Profesi (BNSP). Lisensi ini memberikan jaminan bahwa seluruh skema sertifikasi telah diakui dan sesuai dengan standar yang telah ditetapkan.
          </p>

          <div className='mt-5 flex flex-col sm:flex-row items-center space-y-5 sm:space-y-0 sm:space-x-5'>
            <PrimaryButton text={'Unduh Sertifikat Lisensi'}/>
            <PrimaryButton text={'Unduh SK Lisensi'}/>
          </div>
        </div>
        <div className='flex justify-center mx-auto items-center' data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="500"
          data-aos-easing="ease-in-out">
          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}>
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
