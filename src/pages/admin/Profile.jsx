import React, { useState } from 'react';
import AdminLayout from '../layout/AdminLayout';
import FloatingNavbar from '../../components/FloatingNavbar/Index';
import PrimaryButton from '../../components/Button/PrimaryButton';
import { Apartment, Close, Email, Person, Visibility, VisibilityOff } from '@mui/icons-material';
import ConfirmUpdate from '../../components/Modal/ConfirmUpdate';
import { AnimatePresence, motion } from 'framer-motion';

function Profile() {
  const [activeTab, setActiveTab] = useState('updateProfile');
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [toast, setToast] = useState(false);

  const [nama, setNama] = useState('Alfian Syarif');
  const [email, setEmail] = useState('222112218@stis.ac.id');
  const [asalInstansi, setAsalInstansi] = useState('Politeknik Statistika STIS');

  const [showPasswordLama, setShowPasswordLama] = useState(false);
  const [showPasswordBaru, setShowPasswordBaru] = useState(false);
  const [showKonfirmasiPasswordBaru, setShowKonfirmasiPasswordBaru] = useState(false);

  const [passwordLama, setPasswordLama] = useState('');
  const [passwordBaru, setPasswordBaru] = useState('');
  const [konfirmasiPasswordBaru, setKonfirmasiPasswordBaru] = useState('');

  const [errors, setErrors] = useState({});

  const breadcrumbs = [{ href: null, label: "Profil" }];

  const toggleProfileModal = () => {
    setShowProfileModal(!showProfileModal);
  };

  const togglePasswordModal = () => {
    setShowPasswordModal(!showPasswordModal);
  };

  const validateProfile = () => {
    let tempErrors = {};
    if (!nama) tempErrors.nama = 'Nama harus diisi';
    if (!email) tempErrors.email = 'Email harus diisi';
    if (!asalInstansi) tempErrors.asalInstansi = 'Asal Instansi harus diisi';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const validatePassword = () => {
    let tempErrors = {};
    if (!passwordLama) tempErrors.passwordLama = 'Password Lama harus diisi';
    if (!passwordBaru) tempErrors.passwordBaru = 'Password Baru harus diisi';
    if (passwordBaru.length < 8) tempErrors.passwordBaru = 'Password Baru minimal 8 karakter';
    if (passwordBaru !== konfirmasiPasswordBaru) tempErrors.konfirmasiPasswordBaru = 'Konfirmasi Password Baru harus sama';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmitProfile = () => {
    if (validateProfile()) {
      toggleProfileModal(); 
      // setToast(true);
    }
  };
 
  const displayToast = () => {
    toggleProfileModal();
    setToast(true);
  };

  const handleSubmitPassword = () => {
    if (validatePassword()) {
      togglePasswordModal(); 
      // setToast(true); 
    }
  };

  const handleInputChange = (setter, field) => (event) => {
    setter(event.target.value);
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors[field];
      return newErrors;
    });
  };

  return (
    <AdminLayout>
      <FloatingNavbar breadcrumbs={breadcrumbs} />
    

      <div className="p-10 mt-0">
        <div className="flex items-center mb-5">
          <p className="text-3xl text-ternaryBlue font-bold">Profil Saya</p>
          <div className="flex-grow border-t border-gray-500 ml-4"></div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'> 
          <div className='bg-white rounded-2xl flex flex-col gap-10 p-5'>
            {/* <h2 className="text-2xl font-semibold mb-4 text-primaryOrange text-center">Profil</h2> */}
            <div className='flex items-center mx-auto'>
              <img
                src="https://ui-avatars.com/api/?name=Alfian+Syarif&background=D7EAFB&color=228be6&bold=true"
                alt=""
                className="w-32 h-32 rounded-full hover:cursor-pointer"         
              />
            </div>

            <div className='flex flex-col gap-4'>
              <div className="flex items-center gap-2">
                <Person className="text-primaryBlue bg-secondaryBlue p-1 rounded-lg" fontSize="large" />
                <p className="text-gray-500 text-center text-large">Alfian Syarif</p>               
              </div>

              <div className="flex items-center gap-2">
                <Email className="text-primaryBlue bg-secondaryBlue p-1 rounded-lg" fontSize="large" />
                <p className="text-gray-500 text-center text-large">222112218@stis.ac.id</p>               
              </div>

              <div className="flex items-center gap-2">
                <Apartment className="text-primaryBlue bg-secondaryBlue p-1 rounded-lg" fontSize="large" />
                <p className="text-gray-500 text-center text-large">Politeknik Statistika STIS</p>               
              </div>
            </div>

            <div className='flex flex-col items-center justify-center gap-2'>
              <button
                  className={`px-4 py-2 text-sm md:text-lg font-medium ${activeTab === 'updateProfile' ? 'text-primaryBlue bg-secondaryBlue rounded-full' : 'text-gray-500'}`}
                  onClick={() => setActiveTab('updateProfile')}
                >
                  Ubah Profil
                </button>
                <button
                  className={`ml-4 px-4 py-2 text-sm md:text-lg font-medium ${activeTab === 'updatePassword' ? 'text-primaryBlue bg-secondaryBlue rounded-full' : 'text-gray-500'}`}
                  onClick={() => setActiveTab('updatePassword')}
                >
                  Ubah Password
                </button>
            </div>
          </div>   
          
          <div className='col-span-2'>  
            {/* <div className="mb-8">
              <div className="flex border-b border-gray-300">
                <button
                  className={`px-4 py-2 text-sm md:text-lg font-medium ${activeTab === 'updateProfile' ? 'text-primaryBlue border-b-2 border-primaryBlue' : 'text-gray-500'}`}
                  onClick={() => setActiveTab('updateProfile')}
                >
                  Ubah Profil
                </button>
                <button
                  className={`ml-4 px-4 py-2 text-sm md:text-lg font-medium ${activeTab === 'updatePassword' ? 'text-primaryBlue border-b-2 border-primaryBlue' : 'text-gray-500'}`}
                  onClick={() => setActiveTab('updatePassword')}
                >
                  Ubah Password
                </button>
              </div>
            </div> */}

            <div>
              {activeTab === 'updateProfile' && (
                <div className='bg-white rounded-2xl shadow p-5'>
                  <h2 className="text-2xl font-semibold mb-4 text-primaryOrange">Ubah Profil</h2>
                  <form className="">
                    <div className="mb-5">
                      <label htmlFor="nama" className="block mb-2 text-sm font-medium text-gray-900">
                        Nama
                      </label>
                      <input
                        type="text"
                        id="nama"
                        className={`bg-gray-50 border ${errors.nama ? 'border-red-500' : 'border-gray-300'} text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                        value={nama}
                        onChange={handleInputChange(setNama, 'nama')}
                      />
                      {errors.nama && <p className="text-red-500 text-sm">{errors.nama}</p>}
                    </div>
                    <div className="mb-5">
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className={`bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-300'} text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                        value={email}
                        onChange={handleInputChange(setEmail, 'email')}
                      />
                      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                    <div className="mb-5">
                      <label htmlFor="asal-instansi" className="block mb-2 text-sm font-medium text-gray-900">
                        Asal Instansi
                      </label>
                      <input
                        type="text"
                        id="asal-instansi"
                        className={`bg-gray-50 border ${errors.asalInstansi ? 'border-red-500' : 'border-gray-300'} text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                        value={asalInstansi}
                        onChange={handleInputChange(setAsalInstansi, 'asalInstansi')}
                      />
                      {errors.asalInstansi && <p className="text-red-500 text-sm">{errors.asalInstansi}</p>}
                    </div>

                    <button type='button' className='flex items-center text-white px-6 py-2 rounded-md transition-colors duration-300 ease-in-out transform transition-transform duration-300 ease-in-out bg-primaryBlue hover:bg-ternaryBlue' onClick={handleSubmitProfile}>Simpan</button>
                  </form>

                  <ConfirmUpdate
                    isOpen={showProfileModal}
                    onClose={toggleProfileModal}
                    onConfirm={displayToast}
                    text={'Ubah profil Anda?'}
                  />
                </div>
              )}
              {activeTab === 'updatePassword' && (
                <div className='bg-white rounded-2xl shadow p-5'>
                  <h2 className="text-2xl font-semibold mb-4 text-primaryOrange">Ubah Password</h2>
                  <form id='ubahPassword' className="mx-auto">
                    <div className="relative">
                      <label htmlFor="password-lama" className="block mb-2 text-sm font-medium text-gray-900">
                        Password Lama
                      </label>
                      <input
                        type={showPasswordLama ? "text" : "password"}
                        id="password-lama"
                        className={`bg-gray-50 border ${errors.passwordLama ? 'border-red-500' : 'border-gray-300'} text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                        value={passwordLama}
                        onChange={handleInputChange(setPasswordLama, 'passwordLama')}
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-2/3 transform -translate-y-1/2"
                        onClick={() => setShowPasswordLama(!showPasswordLama)}
                      >
                        {showPasswordLama ? <VisibilityOff fontSize='medium' className='p-1 rounded-md hover:bg-secondaryBlue hover:text-primaryBlue' /> : <Visibility fontSize='medium' className='p-1 rounded-md  hover:bg-secondaryBlue hover:text-primaryBlue' />}
                      </button>
                    </div>
                    {errors.passwordLama && <p className="text-red-500 text-sm">{errors.passwordLama}</p>}

                    <div className="mt-5 relative">
                      <label htmlFor="password-baru" className="block mb-2 text-sm font-medium text-gray-900">
                        Password Baru
                      </label>
                      <input
                        type={showPasswordBaru ? "text" : "password"}
                        id="password-baru"
                        className={`bg-gray-50 border ${errors.passwordBaru ? 'border-red-500' : 'border-gray-300'} text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                        value={passwordBaru}
                        onChange={handleInputChange(setPasswordBaru, 'passwordBaru')}
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-2/3 transform -translate-y-1/2"
                        onClick={() => setShowPasswordBaru(!showPasswordBaru)}
                      >
                        {showPasswordBaru ? <VisibilityOff fontSize='medium' className='p-1 rounded-md hover:bg-secondaryBlue hover:text-primaryBlue' /> : <Visibility fontSize='medium' className='p-1 rounded-md hover:bg-secondaryBlue hover:text-primaryBlue' />}
                      </button>
                    </div>
                    {errors.passwordBaru && <p className="text-red-500 text-sm">{errors.passwordBaru}</p>}

                    <div className="mt-5 relative">
                      <label htmlFor="konfirmasi-password-baru" className="block mb-2 text-sm font-medium text-gray-900">
                        Konfirmasi Password Baru
                      </label>
                      <input
                        type={showKonfirmasiPasswordBaru ? "text" : "password"}
                        id="konfirmasi-password-baru"
                        className={`bg-gray-50 border ${errors.konfirmasiPasswordBaru ? 'border-red-500' : 'border-gray-300'} text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                        value={konfirmasiPasswordBaru}
                        onChange={handleInputChange(setKonfirmasiPasswordBaru, 'konfirmasiPasswordBaru')}
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-2/3 transform -translate-y-1/2"
                        onClick={() => setShowKonfirmasiPasswordBaru(!showKonfirmasiPasswordBaru)}
                      >
                        {showKonfirmasiPasswordBaru ? <VisibilityOff fontSize='medium' className='p-1 rounded-md hover:bg-secondaryBlue hover:text-primaryBlue' /> : <Visibility fontSize='medium' className='p-1 rounded-md hover:bg-secondaryBlue hover:text-primaryBlue' />}
                      </button>
                    </div>
                    {errors.konfirmasiPasswordBaru && <p className="text-red-500 text-sm">{errors.konfirmasiPasswordBaru}</p>}

                    <button type='button' className='mt-5 flex items-center text-white px-6 py-2 rounded-md transition-colors duration-300 ease-in-out transform transition-transform duration-300 ease-in-out bg-primaryBlue hover:bg-ternaryBlue' onClick={handleSubmitPassword}>Simpan</button>
                  </form>

                  <ConfirmUpdate
                    isOpen={showPasswordModal}
                    onClose={togglePasswordModal}
                    onConfirm={displayToast}
                    text={'Ubah password Anda?'}
                  />
                </div>
              )}
            </div>
          </div> 
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
              <div className="ms-3 text-sm font-normal">Berhasil mengubah profil</div>
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
    </AdminLayout>
  );
}

export default Profile;
