import React from 'react';

function BreadCrumbs({ links }) {
  return (
    <div className='mx-auto mt-24 max-w-7xl px-5'>
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          {links.map((link, index) => (
            <li key={index} className="inline-flex items-center">
              {index === 0 ? (
                <a href={link.href} className={`inline-flex items-center text-md font-medium ${link.href !== null ? 'text-primaryBlue hover:text-ternaryBlue' : 'text-ternaryBlue'}`}>  
                  {link.label}
                </a>
              ) : (
                <>
                  <svg key={`svg-${index}`} className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  {index === links.length - 1 ? (
                    <a key={`link-${index}`} href={link.href} className="ms-1 text-md font-medium text-ternaryBlue md:ms-2">
                      {link.label}
                    </a>
                  ) : (
                    <a key={`link-${index}`} href={link.href} className="ms-1 text-md font-medium text-primaryBlue hover:text-ternaryBlue md:ms-2 dark:text-gray-400 dark:hover:text-white">
                      {link.label}
                    </a>
                  )}
                </>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}

export default BreadCrumbs;
