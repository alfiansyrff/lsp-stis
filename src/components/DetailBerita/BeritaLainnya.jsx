import React from 'react';
import { Link } from 'react-router-dom';

const BeritaLainnya = ({ beritaTerkait }) => {
  return (
    <div className="border-2 border-gray-200 shadow overflow-hidden sm:rounded-lg">
      <div className="text-white px-6 py-5 border-b-2
      ">
        <h3 className="text-xl text-primaryOrange text-center font-medium">Berita Terkait</h3>
      </div>
      <div className="border-gray-200 px-6">
        <ul className="divide-y divide-gray-200">
          {beritaTerkait.map((relatedBerita, index) => (
            <li key={index} className="py-4">
              <Link to={`/berita/detail/${encodeURIComponent(relatedBerita.title)}`} className="text-sm font-medium text-ternaryBlue hover:text-primaryBlue">
                {relatedBerita.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BeritaLainnya;
