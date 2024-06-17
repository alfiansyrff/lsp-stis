import React, { useState } from 'react';
import AdminLayout from '../layout/AdminLayout';
import FloatingNavbar from '../../components/FloatingNavbar/Index';
import PrimaryButton from '../../components/Button/PrimaryButton';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import ConfirmUpdate from '../../components/Modal/ConfirmUpdate';

function Profile() {
  const [activeTab, setActiveTab] = useState('updateProfile');
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const [nama, setNama] = useState('Alfian Syarif');
  const [email, setEmail] = useState('222112218@stis.ac.id');
  const [asalInstansi, setAsalInstansi] = useState('Politeknik Statistika STIS');

  const breadcrumbs = [{ href: null, label: "Profil" }];

  const [showPasswordLama, setShowPasswordLama] = useState(false);
  const [showPasswordBaru, setShowPasswordBaru] = useState(false);
  const [showKonfirmasiPasswordBaru, setShowKonfirmasiPasswordBaru] = useState(false);

  const toggleProfileModal = () => {
    setShowProfileModal(!showProfileModal);
  };

  const togglePasswordModal = () => {
    setShowPasswordModal(!showPasswordModal);
  };

  const handleSubmitProfile = () => {

   
    toggleProfileModal(); 
  };

  const handleSubmitPassword = () => {

    togglePasswordModal(); 
  };

  return (
    <AdminLayout>
      <FloatingNavbar breadcrumbs={breadcrumbs} />

      <div className="p-10 mt-0 md:mt-[5em]">
        <div className="flex items-center mb-5">
          <p className="text-3xl text-ternaryBlue font-bold">Profil Saya</p>
          <div className="flex-grow border-t border-gray-500 ml-4"></div>
        </div>

        <div className="mb-8">
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
        </div>

        <div>
          {activeTab === 'updateProfile' && (
            <div className='bg-white rounded-lg shadow max-w-lg border-2 border-gray-200 p-5'>
              <h2 className="text-2xl font-semibold mb-4 text-primaryOrange">Ubah Profil</h2>
              <form className="max-w-lg">
                <div className="mb-5">
                  <label htmlFor="nama" className="block mb-2 text-sm font-medium text-gray-900">
                    Nama
                  </label>
                  <input
                    type="text"
                    id="nama"
                    className="bg-gray-50 border text-sm text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                  />

                </div>
                <div className="mb-5">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border text-sm text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}

                  />

                </div>
                <div className="mb-5">
                  <label htmlFor="asal-instansi" className="block mb-2 text-sm font-medium text-gray-900">
                    Asal Instansi
                  </label>
                  <input
                    type="text"
                    id="asal-instansi"
                    className="bg-gray-50 border text-sm text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    value={asalInstansi}
                    onChange={(e) => setAsalInstansi(e.target.value)}
                  />

                </div>

                <button type='button' className='flex items-center text-white px-6 py-2 rounded-md transition-colors duration-300 ease-in-out transform transition-transform duration-300 ease-in-out bg-primaryBlue hover:bg-ternaryBlue' onClick={toggleProfileModal}>Simpan</button>
              </form>

 
              <ConfirmUpdate
                isOpen={showProfileModal}
                onClose={toggleProfileModal}
                onConfirm={handleSubmitProfile}
                text={'Ubah profil Anda?'}
              />
            </div>
          )}
          {activeTab === 'updatePassword' && (
            <div className='bg-white rounded-lg shadow max-w-lg border-2 border-gray-200 p-5'>
              <h2 className="text-2xl font-semibold mb-4 text-primaryOrange">Ubah Password</h2>
              <form id='ubahPassword' className="max-w-lg mx-auto">
                <div className="mb-5 relative">
                  <label htmlFor="password-lama" className="block mb-2 text-sm font-medium text-gray-900">
                    Password Lama
                  </label>
                  <input
                    type={showPasswordLama ? "text" : "password"}
                    id="password-lama"
                    className="bg-gray-50 border text-sm text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"

                  />
                  <button
                    type="button"
                    className="absolute right-3 top-2/3 transform -translate-y-1/2"
                    onClick={() => setShowPasswordLama(!showPasswordLama)}
                  >
                    {showPasswordLama ? <VisibilityOff fontSize='medium' className='p-1 hover:bg-secondaryBlue hover:text-primaryBlue' /> : <Visibility fontSize='medium' className='p-1 rounded-md hover:bg-secondaryBlue hover:text-primaryBlue' />}
                  </button>
                </div>

                <div className="mb-5 relative">
                  <label htmlFor="password-baru" className="block mb-2 text-sm font-medium text-gray-900">
                    Password Baru
                  </label>
                  <input
                    type={showPasswordBaru ? "text" : "password"}
                    id="password-baru"
                    className="bg-gray-50 border text-sm text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"

                  />
                  <button
                    type="button"
                    className="absolute right-3 top-2/3 transform -translate-y-1/2"
                    onClick={() => setShowPasswordBaru(!showPasswordBaru)}
                  >
                    {showPasswordBaru ? <VisibilityOff fontSize='medium' className='p-1 rounded-md hover:bg-secondaryBlue hover:text-primaryBlue' /> : <Visibility fontSize='medium' className='p-1 rounded-md hover:bg-secondaryBlue hover:text-primaryBlue' />}
                  </button>
                </div>

                <div className="mb-5 relative">
                  <label htmlFor="konfirmasi-password-baru" className="block mb-2 text-sm font-medium text-gray-900">
                    Konfirmasi Password Baru
                  </label>
                  <input
                    type={showKonfirmasiPasswordBaru ? "text" : "password"}
                    id="konfirmasi-password-baru"
                    className="bg-gray-50 border text-sm text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"

                  />
                  <button
                    type="button"
                    className="absolute right-3 top-2/3 transform -translate-y-1/2"
                    onClick={() => setShowKonfirmasiPasswordBaru(!showKonfirmasiPasswordBaru)}
                  >
                    {showKonfirmasiPasswordBaru ? <VisibilityOff fontSize='medium' className='p-1 rounded-md hover:bg-secondaryBlue hover:text-primaryBlue' /> : <Visibility fontSize='medium' className='p-1 rounded-md hover:bg-secondaryBlue hover:text-primaryBlue' />}
                  </button>
                </div>

                <button type='button' className='flex items-center text-white px-6 py-2 rounded-md transition-colors duration-300 ease-in-out transform transition-transform duration-300 ease-in-out bg-primaryBlue hover:bg-ternaryBlue' onClick={togglePasswordModal}>Simpan</button>
              </form>

              {/* Confirmation Modal for Password Update */}
              <ConfirmUpdate
                isOpen={showPasswordModal}
                onClose={togglePasswordModal}
                onConfirm={handleSubmitPassword}
                text={'Ubah password Anda?'}
              />
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}

export default Profile;
