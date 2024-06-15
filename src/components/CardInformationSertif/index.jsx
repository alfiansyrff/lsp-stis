import React, { useState } from 'react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { motion, AnimatePresence } from 'framer-motion';
import { Close } from '@mui/icons-material';

function CardInformationSertif() {
  const [activeTab, setActiveTab] = useState('detail');
  const [paymentOption, setPaymentOption] = useState('');
  const [proofOfPayment, setProofOfPayment] = useState(null);
  const [proofOfPaymentUrl, setProofOfPaymentUrl] = useState(null);
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handlePaymentOptionClick = (option) => {
    setPaymentOption(option);
    setErrors((prevErrors) => ({ ...prevErrors, paymentOption: '' }));
  };

  const handleProofOfPaymentChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setErrors((prevErrors) => ({ ...prevErrors, proofOfPayment: 'File must be an image' }));
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        setErrors((prevErrors) => ({ ...prevErrors, proofOfPayment: 'File size must be less than 2MB' }));
        return;
      }
      setProofOfPayment(file);
      setProofOfPaymentUrl(URL.createObjectURL(file));
      setErrors((prevErrors) => ({ ...prevErrors, proofOfPayment: '' }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let formErrors = {};

    if (!paymentOption) {
      formErrors.paymentOption = 'Harap memilih metode pembayaran';
    }

    if (!proofOfPayment) {
      formErrors.proofOfPayment = 'Harap mengunggah bukti pembayaran';
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // If no errors, show toast
    setToast(true);

    // Hide toast after 3 seconds
    setTimeout(() => setToast(false), 3000);

    // Submit form logic here
    console.log('Form submitted');
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white shadow border-2 border-gray-200 rounded-lg">
        <div className="flex border-b-2 border-gray-200">
          <button
            className={`flex-1 px-4 py-2 ${activeTab === 'detail' ? 'text-primaryBlue border-b-4 border-primaryBlue' : 'text-gray-700'}`}
            onClick={() => handleTabClick('detail')}
          >
            Detail Sertifikasi
          </button>
          <button
            className={`flex-1 px-4 py-2 ${activeTab === 'konfirmasi' ? 'text-primaryBlue border-b-4 border-primaryBlue' : 'text-gray-700'}`}
            onClick={() => handleTabClick('konfirmasi')}
          >
            Konfirmasi Pembayaran
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'detail' && (
            <div>
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
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="space-y-3">
                  <label className="block text-gray-700 font-medium required">Metode Pembayaran</label>
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
                  {errors.paymentOption && <p className="text-red-500 text-sm mt-1">{errors.paymentOption}</p>}
                </div>

                <div className="space-y-3">
                  <label className="block text-gray-700 font-medium required">Bukti Pembayaran</label>
                  <input
                    type="file"
                    onChange={handleProofOfPaymentChange}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primaryBlue file:text-white hover:file:bg-ternaryBlue"
                  />
                  {errors.proofOfPayment && <p className="text-red-500 text-sm mt-1">{errors.proofOfPayment}</p>}
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
                        />
                      </LightGallery>
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

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute bottom-5 right-5"
          >
            <div id="toast-success" className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow border-2 border-gray-200" role="alert">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="sr-only">Check icon</span>
              </div>
              <div className="ms-3 text-sm font-normal">Konfirmasi pembayaran berhasil.</div>
              <button
                type="button"
                className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                data-dismiss-target="#toast-success"
                aria-label="Close"
                onClick={() => setToast(false)}
              >
                <Close />

              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CardInformationSertif;
