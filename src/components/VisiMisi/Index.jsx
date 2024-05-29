import React, { useState } from 'react';
import Heading from '../Heading/Index';

function VisiMisi() {
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
    <div className='my-[15em]'>
      <Heading text={'Visi Misi dan Sasaran Mutu'} />
      <div className="z-50 mt-16 flex justify-center space-x-4 bg-ternaryBlue rounded-full w-1/4 mx-auto p-2">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`rounded-full z-20 text-lg px-3 py-1.5 ${activeTab === tab.id ? 'bg-white font-bold text-ternaryBlue' : 'bg-ternaryBlue text-white'}`}
            style={{ width: activeTab === tab.id && tab.label === 'Sasaran Mutu' ? 'auto' : buttonWidth }}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mx-auto max-w-5xl z-10 mt-5">
        {tabs.map(tab => (
          activeTab === tab.id && (
            <div key={tab.id} className="bg-secondaryBlue p-[4em] rounded-lg p-4 shadow-md">
              {tab.content.split('\n').map((line, index) => (
                <p className='text-ternaryBlue font-bold text-xl' key={index}>{line}</p>
              ))}
            </div>
          )
        ))}
      </div>
    </div>
  );
}

export default VisiMisi;
