import React from 'react';
import { motion } from 'framer-motion';
import Heading from '../Heading/Index';
import PrimaryButton from '../Button/PrimaryButton';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

function Lisensi() {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };
  return (
    
    <div className='my-[10em] max-w-5xl mx-auto'>
      <Heading text={'Lisensi BNSP'}/>

      <div className='flex flex-col md:flex-row justify-between mx-auto mt-16 space-x-8 md:space-y-0'>
        <div className='md:w-1/2 relative'>
          <p className='text-lg text-center md:text-left text-ternaryBlue'>
            Lisensi Badan Nasional Sertifikasi Profesi (BNSP) adalah sebuah legalitas yang memberikan kepastian bahwa sebuah lembaga atau institusi memiliki kemampuan dan kapasitas untuk melakukan sertifikasi kompetensi kerja yang diakui secara nasional.
            Lisensi BNSP ini memberikan jaminan bahwa sertifikasi yang dilakukan oleh lembaga tersebut dilakukan sesuai dengan standar yang telah ditetapkan oleh BNSP dan diakui secara luas oleh masyarakat serta dunia kerja.
          </p>

          <div className='absolute bottom-0 flex items-center space-x-5'>
            <PrimaryButton text={'Unduh Sertifikat Linsensi BNSP'}/>
            <PrimaryButton text={'Unduh SK Linsensi BNSP'}/>
          </div>
        </div>
        <div className='md:w-1/2 flex justify-end'>
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
