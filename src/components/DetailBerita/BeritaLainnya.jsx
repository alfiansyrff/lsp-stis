import React from 'react';

const BeritaLainnya = ({ beritaTerkait }) => {
  return (
    <div className="border-2 border-gray-200 shadow overflow-hidden sm:rounded-lg">
      <div className=" bg-primaryBlue text-white px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium">Berita Terkait</h3>
      </div>
      <div className="border-t border-gray-200 px-6">
        <ul className="divide-y divide-gray-200">
          {beritaTerkait.map((relatedBerita, index) => (
            <li key={index} className="py-4">
              <a href="#" className="text-sm font-medium text-ternaryBlue hover:text-primaryBlue">
                {relatedBerita.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BeritaLainnya;
