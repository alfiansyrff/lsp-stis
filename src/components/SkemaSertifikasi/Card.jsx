import React from 'react';

function BookletCard({ imageSrc, title, fileLink}) {
  return (
    <a href={fileLink} className="max-w-sm w-full bg-white p-5 border border-gray-200 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:shadow-2xl hover:-translate-y-2 flex flex-col">
      <a href={fileLink} className="flex-shrink-0">
        <img className="w-full h-auto object-cover rounded-t-lg" src={imageSrc} alt={title} />
      </a>
      <div className="mt-5 flex flex-col flex-grow">
 
        <h5 className="mb-2 text-2xl text-md font-bold tracking-tight text-ternaryBlue text-center">{title}</h5>

      </div>
    </a>
  );
}

export default BookletCard;
