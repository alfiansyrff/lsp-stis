import React from 'react';

function PrimaryButton({ text, cta = false, type = 'button' }) {
  return (
    <div>
      <button 
        type={type} 
        className="flex items-center bg-primaryBlue text-white px-4 py-2 rounded-md hover:bg-ternaryBlue transition-colors duration-300 ease-in-out"
      >
        {text}
        {cta && <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>}
      </button>
    </div>
  );
}

export default PrimaryButton;
