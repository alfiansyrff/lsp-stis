// FloatingNavbar.js
import React, { useState } from 'react';
import { Notifications, AccountCircle, DoneAll } from '@mui/icons-material';
import BreadCrumbs from '../Breadcrumbs';


export default function FloatingNavbar({ breadcrumbs }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [notifVisible, setNotifVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleNotif = () => {
    setNotifVisible(!notifVisible);
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
            {/* <AccountCircle 
              className="text-gray-600 cursor-pointer" 
              onClick={toggleDropdown} 
            /> */}
           {notifVisible && (
              <div className="absolute right-0 mt-2 w-80 bg-white border rounded shadow-lg">
                <div className="flex justify-between items-center px-4 py-2 bg-gray-100 border-b">
                  <h2 className="text-lg font-medium text-gray-800">Notifikasi</h2>
                  <button className="text-[12px] text-primaryBlue hover:underline flex items-center gap-x-1">
                    <DoneAll className='text-primaryBlue' fontSize='small'/>
                    
                    Tandai sudah dibaca</button>
                </div>
                <div className="p-4 space-y-4">
                  {/* Notification item */}
                  <div className="border-b pb-4">
                    <p className="text-gray-800"><strong>Elek</strong> has completed the certification process.</p>
                    <p className="text-gray-600 text-sm">5 minutes ago</p>
                  </div>
                  {/* Another notification item */}
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
            {/* <AccountCircle 
              className="text-gray-600 cursor-pointer" 
              onClick={toggleDropdown} 
            /> */}
            {dropdownVisible && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
                <a href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Profile</a>
                <a href="/logout" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Logout</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
