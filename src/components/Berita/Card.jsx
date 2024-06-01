import React from 'react';

function BeritaCard({ image, title, description, link }) {
  return (
    <div className="max-w-sm w-full bg-white p-5 border border-gray-200 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:shadow-2xl hover:-translate-y-2 flex flex-col">
      <a href={link} className="flex-shrink-0">
        <img className="w-full h-72 object-cover rounded-t-lg" src={image} alt={title} />
      </a>
      <div className="mt-5 flex flex-col flex-grow">
        <a href={link} className="flex-grow">
          <h5 className="mb-2 text-md font-bold tracking-tight text-ternaryBlue text-center">{title}</h5>
          <span className="block border border-primaryOrange text-center mx-5 mb-2"></span>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">{description}</p>
      </div>
    </div>
  );
}

export default BeritaCard;
