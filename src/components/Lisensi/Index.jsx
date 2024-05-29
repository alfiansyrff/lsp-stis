import React from 'react';
import { motion } from 'framer-motion';
import Heading from '../Heading/Index';
import PrimaryButton from '../Button/PrimaryButton';

function Lisensi() {
  return (
    <div className='my-[4em] max-w-5xl mx-auto'>
      <Heading text={'Lisensi BNSP'}/>

      <div className='flex flex-col md:flex-row  justify-between mx-auto mt-16 space-x-8 md:space-y-0'>
        <div className='md:w-1/2 relative'>
          <p className='text-lg text-center md:text-left text-ternaryBlue'>
            Lisensi Badan Nasional Sertifikasi Profesi (BNSP) adalah sebuah legalitas yang memberikan kepastian bahwa sebuah lembaga atau institusi memiliki kemampuan dan kapasitas untuk melakukan sertifikasi kompetensi kerja yang diakui secara nasional.
            Lisensi BNSP ini memberikan jaminan bahwa sertifikasi yang dilakukan oleh lembaga tersebut dilakukan sesuai dengan standar yang telah ditetapkan oleh BNSP dan diakui secara luas oleh masyarakat serta dunia kerja.
          </p>

          <div className='absolute bottom-0 flex items-center space-x-5'>
            <PrimaryButton text={'Unduh Sertifikat Linsensi BNSP'}/>
            <PrimaryButton text={'Unduh SK Linsensi BNSP'}/>
          </div>
          {/* <button className='bg-primaryBlue text-white px-4 py-2 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'>
            Unduh Sertifikat Linsensi BNSP
          </button> */}
        </div>
        <div className='md:w-1/2 flex justify-end'>
          <motion.img
            className='shadow'
            src="/image/Sertifikat Lisensi BNSP.jpg"
            width={250}
            alt="Sertifikat Lisensi BNSP"
            whileHover={{ scale: 1.1 }}
            srcSet=""
          />
        </div>
      </div>
    </div>
  );
}

export default Lisensi;
