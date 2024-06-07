// import React from 'react';

// function CardInformationSertif() {
//   return (
//     <div className="bg-white shadow border-2 border-gray-200 rounded-lg p-6 max-w-3xl">
//       <h2 className="text-xl font-semibold mb-4 text-primaryOrange">Informasi Detail Sertifikasi</h2>
//       <div className="space-y-5">
//         <div className="flex justify-between items-center">
//           <span className="font-medium text-gray-700">Tanggal Ujian:</span>
//           <span className="text-ternaryBlue">-</span>
//         </div>
//         <div className="flex justify-between items-center">
//           <span className="font-medium text-gray-700">Skema Sertifikasi:</span>
//           <span className="text-gray-900">Ilmuwan Data</span>
//         </div>
//         <div className="flex justify-between items-center">
//           <span className="font-medium text-gray-700">Tempat Ujian:</span>
//           <span className="text-gray-900">Website LSP Polstat STIS</span>
//         </div>
//         <div className="flex justify-between items-center">
//           <span className="font-medium text-gray-700">Nomor Pendaftaran:</span>
//           <span className="text-gray-900">LSP240004</span>
//         </div>
//         <div className="flex justify-between items-center">
//           <span className="font-medium text-gray-700">Nomor Skema:</span>
//           <span className="text-gray-900">010607</span>
//         </div>
//         <div className="flex justify-between items-center">
//           <span className="font-medium text-gray-700">Asesor:</span>
//           <span className="text-gray-900">-</span>
//         </div>
//         <div className="flex justify-between items-center">
//           <span className="font-medium text-gray-700">Biaya:</span>
//           <span className="text-gray-900">Rp.1.700.000,00</span>
//         </div>
//         <div className="flex justify-between items-center">
//           <span className="font-medium text-gray-700">Status Pembayaran:</span>
//           <span className="bg-red-500 text-red-500 bg-opacity-10 p-2 rounded-full text-[12px] text-center">Belum Dibayar</span>
//           {/* <span className="bg-ternaryBlue text-ternaryBlue bg-opacity-10 p-2 rounded-full text-sm text-center">Menunggu Konfirmasi</span> */}
//         </div>

//         <div className='flex justify-end'>
//           <button className='text-white bg-primaryBlue rounded hover:bg-ternaryBlue px-4 py-2'>Bayar</button>
//         </div>
      
//         {/* <div className="flex justify-between items-center">
//           <span className="font-medium text-gray-700">Status:</span>
//           <button className="bg-gray-500 p-1 rounded text-white text-sm w-24 h-12" disabled>N/A</button>
//         </div>
//         <div className="flex justify-between items-center">
//           <span className="font-medium text-gray-700">Formulir Pembayaran:</span>
//           <a href="https://lsp.stis.ac.id/pembayaran/LSP240004">
//             <button className="bg-blue-500 p-1 rounded text-white text-sm w-24 h-12">Upload Bukti Pembayaran</button>
//           </a>
//         </div>
//         <div className="flex justify-between items-center">
//           <span className="font-medium text-gray-700">Formulir APL.01:</span>
//           <a href="https://lsp.stis.ac.id/frapl01/LSP240004">
//             <button className="bg-gray-500 p-1 rounded text-white text-sm w-24 h-12" disabled>FR.APL.01</button>
//           </a>
//         </div>
//         <div className="flex justify-between items-center">
//           <span className="font-medium text-gray-700">Formulir APL.02:</span>
//           <a href="https://lsp.stis.ac.id/frapl02/LSP240004">
//             <button className="bg-gray-500 p-1 rounded text-white text-sm w-24 h-12" disabled>FR.APL.02</button>
//           </a>
//         </div>
//         <div className="flex justify-between items-center">
//           <span className="font-medium text-gray-700">Formulir AK.01:</span>
//           <a href="https://lsp.stis.ac.id/frak01/LSP240004/edit">
//             <button className="bg-gray-500 p-1 rounded text-white text-sm w-24 h-12" disabled>FR.AK.01</button>
//           </a>
//         </div> */}
//       </div>
//     </div>
//   );
// }

// export default CardInformationSertif;

import React, { useState } from 'react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { motion } from 'framer-motion';

function CardInformationSertif() {
  const [activeTab, setActiveTab] = useState('detail');
  const [paymentOption, setPaymentOption] = useState('');
  const [proofOfPayment, setProofOfPayment] = useState(null);
  const [proofOfPaymentUrl, setProofOfPaymentUrl] = useState(null);
  

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handlePaymentOptionClick = (option) => {
    setPaymentOption(option);
  };

  const handleProofOfPaymentChange = (event) => {
    const file = event.target.files[0];
    setProofOfPayment(file);
    setProofOfPaymentUrl(URL.createObjectURL(file));
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white shadow border-2 border-gray-200 rounded-lg">
        <div className="flex border-b-2 border-gray-200">
          <button
            className={`flex-1 px-4 py-2 ${activeTab === 'detail' ? 'text-primaryOrange border-b-4 border-primaryOrange' : 'text-gray-700'}`}
            onClick={() => handleTabClick('detail')}
          >
            Detail Sertifikasi
          </button>
          <button
            className={`flex-1 px-4 py-2 ${activeTab === 'konfirmasi' ? 'text-primaryOrange border-b-4 border-primaryOrange' : 'text-gray-700'}`}
            onClick={() => handleTabClick('konfirmasi')}
          >
            Konfirmasi Pembayaran
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'detail' && (
            <div>
              {/* <h2 className="text-xl font-semibold mb-4 text-primaryOrange">Informasi Detail Sertifikasi</h2> */}
              <div className="space-y-5">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Tanggal Ujian:</span>
                  <span className="text-ternaryBlue">-</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Skema Sertifikasi:</span>
                  <span className="text-ternaryBlue">Ilmuwan Data</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Tempat Ujian:</span>
                  <span className="text-ternaryBlue">Website LSP Polstat STIS</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Nomor Pendaftaran:</span>
                  <span className="text-ternaryBlue">LSP240004</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Nomor Skema:</span>
                  <span className="text-ternaryBlue">010607</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Asesor:</span>
                  <span className="text-ternaryBlue">-</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Biaya:</span>
                  <span className="text-ternaryBlue">Rp.1.700.000,00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Status Pembayaran:</span>
                  <span className="bg-red-500 text-red-500 bg-opacity-10 p-2 rounded-full text-[12px] text-center">Belum Dibayar</span>
                </div>
                <div className='flex justify-center'>
                  <p className='text-md text-center text-red-500'>Harap segera melakukan pembayaran dan mengunggah buktinya melalui tab Konfirmasi Pembayaran</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'konfirmasi' && (
            <div>
              {/* <h2 className="text-xl font-semibold mb-4 text-primaryOrange">Konfirmasi Pembayaran</h2> */}
              <form className="space-y-5">
                <div className="space-y-3">
                  <label className="block text-gray-700 font-medium">Pilih Metode Pembayaran:</label>
                  <div className="flex items-center space-x-5">
                    <div
                      onClick={() => handlePaymentOptionClick('Bank BNI')}
                      className={`flex flex-col items-center p-3 rounded-lg border-2 border-gray-200 cursor-pointer ${
                        paymentOption === 'Bank BNI' ? 'bg-gray-300 text-white' : 'bg-white'
                      }`}
                      style={{ width: '150px', height: '100px' }}
                    >
                      <img src="/image/bni.png" alt="Bank BNI" className="w-full h-full object-contain" />
                    </div>
                    <div
                      onClick={() => handlePaymentOptionClick('Bank BRI')}
                      className={`flex flex-col items-center p-3 rounded-lg border-2 border-gray-200 cursor-pointer ${
                        paymentOption === 'Bank BRI' ? 'bg-gray-300 text-white' : 'bg-white'
                      }`}
                      style={{ width: '150px', height: '100px' }}
                    >
                      <img src="/image/bri.png" alt="Bank BRI" className="w-full h-full object-contain" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-gray-700 font-medium">Upload Bukti Pembayaran:</label>
                  <input
                    type="file"
                    onChange={handleProofOfPaymentChange}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primaryBlue file:text-white hover:file:bg-ternaryBlue"
                  />
                  {proofOfPayment && (
                    <div>
                      <p className="text-sm text-gray-600">File: {proofOfPayment.name}</p>
                      <LightGallery
           
                          speed={500}
                          plugins={[lgThumbnail, lgZoom]}
                      >
                        <motion.img
                          className='shadow hover:cursor-pointer'
                          src={proofOfPaymentUrl}
                          width={250}
                          alt="Bukti pembayaran"
                          whileHover={{ translateY: 10 }}
                          srcSet=""
                        />
                      </LightGallery>
                      {/* <img src={proofOfPaymentUrl} alt="Proof of Payment" className="mt-2 w-48 h-auto rounded" /> */}
                    </div>
                  )}
                </div>

                <div className='flex justify-end'>
                  <button type="submit" className='text-white bg-primaryBlue rounded hover:bg-ternaryBlue px-4 py-2'>
                    Konfirmasi Pembayaran
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardInformationSertif;
