import React, { useState } from 'react';
import { CalendarMonth, Visibility, Sell, Share } from '@mui/icons-material';
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
    <div className="bg-white shadow rounded-2xl overflow-hidden">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-2xl font-bold text-ternaryBlue text-center">{berita.title}</h3>
      </div>
      <div className="px-4 py-4">
        <img className="object-cover h-auto max-w-full mx-auto" src={berita.image} alt={berita.judul} />

        <div className="flex flex-col sm:flex-row items-center justify-between mt-5">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-8">
            <div className="text-sm text-primaryOrange flex items-center gap-2">
              <CalendarMonth className="text-primaryOrange" fontSize="small" />
              <p>{berita.date}</p>
            </div>
            <div className="text-sm text-primaryOrange flex items-center gap-2">
              <Visibility className="text-primaryOrange" fontSize="small" />
              <p>10</p>
            </div>
            <div className="text-sm text-primaryOrange flex items-center gap-2">
              <Sell className="text-primaryOrange" fontSize="small" />
              <p className={`text-[12px] px-2 rounded-full bg-opacity-20 ${berita.cat === 'Pengumuman' ? 'text-blue-500 bg-blue-500' : berita.cat === 'Kegiatan' ? 'text-green-500 bg-green-500' : 'text-primaryOrange bg-primaryOrange'}`}>
                {berita.cat}
              </p>
            </div>
          </div>

          <div className="relative mt-2 sm:mt-0">
            <Share className="text-sm text-primaryOrange cursor-pointer" fontSize="small" onClick={handleShareClick} />
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
      <div className="px-4 py-2">
        <p className="text-ternaryBlue text-justify">{berita.description}</p>
      </div>
    </div>
  );
}

export default MainBerita;
