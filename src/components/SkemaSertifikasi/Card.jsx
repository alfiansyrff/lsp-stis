// import React from 'react';

// function BookletCard({ imageSrc, title, fileLink}) {
//   return (
//     <a href={fileLink} className="max-w-sm w-full bg-white p-5 border border-gray-200 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:shadow-2xl hover:-translate-y-2 flex flex-col">
//       <a href={fileLink} className="flex-shrink-0">
//         <img className="w-full h-auto object-cover rounded-t-lg" src={imageSrc} alt={title} />
//       </a>
//       <div className="mt-5 flex flex-col flex-grow">
 
//         <h5 className="mb-2 text-2xl text-md font-bold tracking-tight text-ternaryBlue text-center">{title}</h5>

//       </div>
//     </a>
//   );
// }

// export default BookletCard;

import React, { useState, useEffect } from 'react';

function BookletCard({ imageSrc, title, fileLink }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-sm w-full mb-5 bg-white p-5 border border-gray-200 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:shadow-2xl hover:-translate-y-2 flex flex-col">
      {isLoading ? (
        <div className="animate-pulse">
          <div className="h-96 bg-gray-300 rounded-t-lg"></div>
          <div className="h-8 mt-5 bg-gray-300 rounded"></div>
        </div>
      ) : (
        <>
          <a href={fileLink} className="flex-shrink-0">
            <img className="w-full h-auto object-cover rounded-t-lg" src={imageSrc} alt={title} />
          </a>
          <div className="mt-5 flex flex-col flex-grow">
            <h5 className="mb-2 text-2xl text-md font-bold tracking-tight text-ternaryBlue text-center">{title}</h5>
          </div>
        </>
      )}
    </div>
  );
}

export default BookletCard;
