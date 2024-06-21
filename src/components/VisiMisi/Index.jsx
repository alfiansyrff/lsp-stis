import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Heading from '../Heading/Index';
import AOS from 'aos';
import 'aos/dist/aos.css';

function VisiMisi() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, label: 'Visi', content: ['Menjadi lembaga sertifikasi profesi (LSP) yang profesional dan unggul untuk memastikan kompetensi mahasiswa agar diakui di tingkat nasional dan internasional'] },
    { id: 2, label: 'Misi', content: ["Menerapkan sistem sertifikasi yang objektif, independen dan profesional", "Mengembangkan asesor kompetensi yang profesional dan kompeten di bidang keahlian yang relevan di lingkungan Politeknik Statistika STIS", "Mengembangkan tempat uji kompetensi yang memenuhi persyaratan untuk digunakan sebagai tempat pelaksanaan assesmen sesuai persyaratan yang ditetapkan Badan Nasional Sertifikasi Profesi (BNSP)",  "Mengembangkan materi uji kompetensi keahlian"] },
    { id: 3, label: 'Sasaran Mutu', content: ['Penyelenggaraan sertifikasi kompetensi dengan personal dan asesor kompetensi yang berkualitas dan independen', 'Memastikan pengembangan SDM yang tersertifikasi BNSP, unggul dan adaptif, dan berkontribusi secara nyata dalam rangka mendukung sistem statistik nasional maupun internasional', 'Melaksanakan dan menjaga proses sertifikasi sesuai standar yang berlaku demi penjaminan mutu.' ,'Memastikan kerja sama Badan Pusat Statistik dan Perguruan Tinggi'] }
  ];

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const longestTabTextWidth = Math.max(...tabs.map(tab => tab.label.length));
  const buttonWidth = `${longestTabTextWidth * 10}px`; // Adjust the factor 10 as needed

  return (
    <div className="mt-20 md:mt-[18em] px-4">
      <div
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        <Heading text={'Visi Misi dan Sasaran Mutu'} />
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        className="mt-8 md:mt-16 flex justify-center space-x-2 md:space-x-4 bg-ternaryBlue rounded-full w-full md:w-1/2 lg:w-1/4 mx-auto p-2"
      >
        {tabs.map(tab => (
          <motion.button
            key={tab.id}
            className={`rounded-full text-sm md:text-lg px-3 py-1.5 ${activeTab === tab.id ? 'bg-white font-bold text-ternaryBlue' : 'bg-ternaryBlue text-white'}`}
            style={{ width: activeTab === tab.id && tab.label === 'Sasaran Mutu' ? 'auto' : buttonWidth }}
            onClick={() => handleTabClick(tab.id)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {tab.label}
          </motion.button>
        ))}
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        className="mx-auto max-w-full md:max-w-6xl mt-5"
      >
        {tabs.map(tab => (
          activeTab === tab.id && (
            <motion.div
              key={tab.id}
              className={`bg-white p-6 md:p-10 rounded-2xl shadow-md ${tab.content.length > 1 ? 'text-left' : 'text-center'}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {tab.content.length > 1 ? (
                <ol className='list-decimal'>
                  {tab.content.map((line, index) => (
                    <li className='text-xl font-semibold text-ternaryBlue my-2' key={index}>{line}</li>
                  ))}
                </ol>
              ) : (
                <p className='text-xl font-semibold text-ternaryBlue'>{tab.content[0]}</p>
              )}
            </motion.div>
          )
        ))}
      </div>
    </div>
  );
}

export default VisiMisi;
