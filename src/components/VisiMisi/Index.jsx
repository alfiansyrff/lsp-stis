import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Heading from '../Heading/Index';
import AOS from 'aos';
import 'aos/dist/aos.css';

function VisiMisi() {

  useEffect(() => {
    AOS.init();
  }, [])

  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, label: 'Visi', content: 'Visi Content' },
    { id: 2, label: 'Misi', content: "1. Menerapkan sistem sertifikasi yang objektif, independen dan profesional.\n2. Mengembangkan asesor kompetensi yang profesional dan kompeten di bidang keahlian yang relevan di lingkungan Politeknik Statistika STIS.\n3. Mengembangkan tempat uji kompetensi yang memenuhi persyaratan untuk digunakan sebagai tempat pelaksanaan assesmen sesuai persyaratan yang ditetapkan Badan Nasional Sertifikasi Profesi (BNSP).\n4. Mengembangkan materi uji kompetensi keahlian." },
    { id: 3, label: 'Sasaran Mutu', content: 'Sasaran Mutu Content' }
  ];

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const longestTabTextWidth = Math.max(...tabs.map(tab => tab.label.length));
  const buttonWidth = `${longestTabTextWidth * 10}px`; // Adjust the factor 10 as needed

  return (
    <div  className='mt-[15em]'>
      <div data-aos="fade-up"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-easing="ease-in-out">
        <Heading text={'Visi Misi dan Sasaran Mutu'} />
      </div>
      <div  data-aos="fade-up"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-easing="ease-in-out" className="z-50 mt-16 flex justify-center space-x-4 bg-ternaryBlue rounded-full w-1/4 mx-auto p-2">
        {tabs.map(tab => (
          <motion.button
            key={tab.id}
            className={`rounded-full z-20 text-lg px-3 py-1.5 ${activeTab === tab.id ? 'bg-white font-bold text-ternaryBlue' : 'bg-ternaryBlue text-white'}`}
            style={{ width: activeTab === tab.id && tab.label === 'Sasaran Mutu' ? 'auto' : buttonWidth }}
            onClick={() => handleTabClick(tab.id)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {tab.label}
          </motion.button>
        ))}
      </div>
      <div  data-aos="fade-up"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-easing="ease-in-out" className="mx-auto max-w-5xl z-10 mt-5">
        {tabs.map(tab => (
          activeTab === tab.id && (
            <motion.div
              key={tab.id}
              className="bg-secondaryBlue p-[4em] rounded-lg p-4 shadow-md"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {tab.content.split('\n').map((line, index) => (
                <p className='text-ternaryBlue font-bold text-xl' key={index}>{line}</p>
              ))}
            </motion.div>
          )
        ))}
      </div>
    </div>
  );
}

export default VisiMisi;
