// FloatingNavbar.js
import React, { useState } from 'react';
import { Notifications, AccountCircle } from '@mui/icons-material';
import BreadCrumbs from '../Breadcrumbs';


export default function FloatingNavbar({ breadcrumbs }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="fixed w-[80%] mt-5 rounded-lg shadow bg-transparent backdrop-filter backdrop-blur-lg border-2 border-gray-200 mx-auto mr-5 top-0 left-0 right-0 shadow-md z-50">
      <div className="flex justify-between items-center h-16 px-4">
        {/* Breadcrumbs */}
        <div className='relative flex -mt-24'>
          <BreadCrumbs links={breadcrumbs} />
        </div>
        
        {/* User Icon and Notification Icon */}
        <div className="relative flex items-center space-x-4">
          <Notifications className="text-gray-600 cursor-pointer" />
          <div className="relative">
            <AccountCircle 
              className="text-gray-600 cursor-pointer" 
              onClick={toggleDropdown} 
            />
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
