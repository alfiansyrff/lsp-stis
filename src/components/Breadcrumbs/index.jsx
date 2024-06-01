import React from 'react';

function BreadCrumbs({ links }) {
  return (
    <div className='mx-auto mt-24 max-w-7xl px-5'>
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          {links.map((link, index) => (
            <li key={index} className="inline-flex items-center">
              {index === 0 ? (
                <a href={link.href} className="inline-flex items-center text-md font-medium text-primaryBlue hover:text-ternaryBlue">  
                  {link.label}
                </a>
              ) : (
                <div className="flex items-center">
                  <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  {link.href ? (
                    <a href={link.href} className="ms-1 text-md font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">
                      {link.label}
                    </a>
                  ) : (
                    <span className="ms-1 text-md font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                      {link.label}
                    </span>
                  )}
                </div>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}

export default BreadCrumbs;
