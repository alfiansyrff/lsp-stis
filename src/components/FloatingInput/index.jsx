import React from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';

function FloatingInput({ label, type, id, value, onChange, showPassword, handleTogglePasswordVisibility }) {
  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        value={value} // Ensure value is passed
        onChange={onChange} // Ensure onChange is passed
        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-full border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primaryBlue peer"
        placeholder=" "
      />
      <label
        htmlFor={id}
        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
      >
        {label}
      </label>
      {(id === 'password' || id === 'confirmPassword') && (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
          <button type="button" onClick={handleTogglePasswordVisibility} className="focus:outline-none">
            {showPassword ? <VisibilityOff className='text-ternaryBlue hover:bg-secondaryBlue rounded p-1' fontSize='medium'/> : <Visibility className='text-ternaryBlue hover:bg-secondaryBlue rounded p-1' fontSize='medium' />}
          </button>
        </div>
      )}
    </div>
  );
}

export default FloatingInput;
