import React, { useState } from 'react';
import { Notifications, DoneAll } from '@mui/icons-material';
import BreadCrumbs from '../Breadcrumbs';

export default function FloatingNavbar({ breadcrumbs }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [notifVisible, setNotifVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleNotif = () => {
    setNotifVisible(!notifVisible);
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleLogout = () => {
    // Perform logout logic here
    console.log("Logging out...");
    // Example: clear session, redirect user, etc.
  };

  return (
    <div className="hidden md:block fixed w-[80%] mt-5 rounded-lg shadow bg-transparent backdrop-filter backdrop-blur-lg border-2 border-gray-200 mx-auto mr-5 top-0 left-0 right-0 shadow-md z-50">
      <div className="flex justify-between items-center h-16 px-4">
        {/* Breadcrumbs */}
        <div className='relative flex -mt-24'>
          <BreadCrumbs links={breadcrumbs} />
        </div>
        
        {/* User Icon and Notification Icon */}
        <div className="relative flex items-center space-x-4">
          <div className="relative">
            <Notifications className="text-gray-600 cursor-pointer" onClick={toggleNotif} />
            {notifVisible && (
              <div className="absolute right-0 mt-2 w-80 bg-white border rounded shadow-lg">
                <div className="flex justify-between items-center px-4 py-2 bg-gray-100 border-b">
                  <h2 className="text-lg font-medium text-gray-800">Notifikasi</h2>
                  <button className="text-[12px] text-primaryBlue hover:underline flex items-center gap-x-1">
                    <DoneAll className='text-primaryBlue' fontSize='small'/>
                    Tandai sudah dibaca
                  </button>
                </div>
                <div className="p-4 space-y-4">
                  {/* Notification items */}
                  <div className="border-b pb-4">
                    <p className="text-gray-800"><strong>Elek</strong> has completed the certification process.</p>
                    <p className="text-gray-600 text-sm">5 minutes ago</p>
                  </div>
                  <div className="border-b pb-4">
                    <p className="text-gray-800"><strong>Another User</strong> uploaded a payment proof.</p>
                    <p className="text-gray-600 text-sm">10 minutes ago</p>
                  </div>
                  {/* Add more notifications here as needed */}
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <img
              src="https://ui-avatars.com/api/?name=Alfian+Syarif&background=D7EAFB&color=228be6&bold=true"
              alt=""
              className="w-10 h-10 rounded-full hover:cursor-pointer"
              onClick={toggleDropdown}
            />
            {dropdownVisible && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg p-2.5">
                <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={toggleModal}>
                  Keluar
                </button>
              </div>
            )}
          </div>

          {modalVisible && (
            <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
              <div className="bg-white p-8 rounded-lg max-w-md text-center">
                <svg
                  className="mx-auto mb-4 text-gray-400 w-12 h-12"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16z" clipRule="evenodd" />
                  <path
                    fillRule="evenodd"
                    d="M10 11V6a1 1 0 00-1-1H8a1 1 0 00-1 1v5a1 1 0 001 1h1a1 1 0 001-1zm0 2v.001M9 14h2v2H9v-2z"
                    clipRule="evenodd"
                  />
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500">
                  Are you sure you want to log out?
                </h3>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={handleLogout}
                    className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg focus:outline-none"
                  >
                    Yes, Log out
                  </button>
                  <button
                    onClick={toggleModal}
                    className="text-gray-700 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg focus:outline-none"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
