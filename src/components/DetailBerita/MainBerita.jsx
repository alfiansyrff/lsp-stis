import React, { useState } from 'react';
import { CalendarMonth, Share, Visibility } from '@mui/icons-material';
import { motion } from 'framer-motion';

const MainBerita = ({ berita }) => {
  const [showFlashMessage, setShowFlashMessage] = useState(false);
  const [link, setLink] = useState('');


  const handleShareClick = () => {
    setShowFlashMessage(true);
    setLink(window.location.href);
    navigator.clipboard.writeText(link);
    setTimeout(() => {
      setShowFlashMessage(false);
    }, 2000); 
  };

  return (
    <div className="bg-white shadow border-2 border-gray-200 rounded-lg overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-2xl font-bold text-ternaryBlue text-center">{berita.title}</h3>
      </div>
      <div className="px-6 py-4">
        <img className="object-cover h-auto mx-auto w-auto" src={berita.image} alt={berita.judul} />

        <div className='flex items-center justify-between mt-5'>
          <div className='flex items-center space-x-5'>
            <p className="text-sm text-primaryOrange flex items-center">
              <span className="mr-2"><CalendarMonth className='text-primaryOrange' fontSize='small'/></span>
              {berita.date}
            </p>
            <p className="text-sm text-primaryOrange flex items-center">
              <span className="mr-2"><Visibility className='text-primaryOrange' fontSize='small'/></span>
              10
            </p>
          </div>

          <div className='relative'>

            <div className='flex items-center space-x-5'>
              <Share className='text-sm text-primaryOrange cursor-pointer' fontSize='small' onClick={handleShareClick}/>
            </div>

            <motion.div
              initial={{ opacity: 0, y: '-50%' }}
              animate={{ opacity: showFlashMessage ? 1 : 0, y: showFlashMessage ? '-50%' : '-30%' }}
              transition={{ duration: 0.5 }}
              className="absolute top-5 right-10 w-min transform -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-gray-200 shadow-lg rounded p-3"
            >
              <p className="text-primaryOrange text-sm">Tautan berhasil disalin!</p>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="px-6 py-2">
        <p className='text-ternaryBlue text-justify'>{berita.description}</p>
      </div>

    </div>
  );
}

export default MainBerita;
