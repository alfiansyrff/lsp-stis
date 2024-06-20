import React from 'react';
import PrimaryButton from '../Button/PrimaryButton';

const TableSkemaSertif = ({ data }) => {
  return (
    <div className='overflow-x-auto'>
       <div className="mb-4 flex justify-end space-x-3">
        <button className='flex items-center text-white px-6 py-2 rounded-md transition-colors duration-300 ease-in-out transform transition-transform duration-300 ease-in-out bg-primaryBlue hover:bg-ternaryBlue'>
          Unduh Skema
        </button>
        <button className='flex items-center text-white px-6 py-2 rounded-md transition-colors duration-300 ease-in-out transform transition-transform duration-300 ease-in-out bg-primaryBlue hover:bg-ternaryBlue'>
          Unduh SKKNI
        </button>
      </div>

      <table className="w-full text-sm text-left text-ternaryBlue dark:text-gray-400">
        <thead className="text-xs text-center uppercase bg-ternaryBlue text-white">
          <tr>
            <th scope="col" className="px-6 py-3 rounded-tl-lg">No</th>
            <th scope="col" className="px-6 py-3">Kode Unit</th>
            <th scope="col" className="px-6 py-3 rounded-tr-lg">Judul Unit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((unit) => (
            <tr key={unit.no} className="bg-white border-b hover:bg-gray-200">
              <td className="px-6 py-4 text-center">{unit.no}</td>
              <td className="px-6 py-4 text-center">{unit.kode}</td>
              <td className="px-6 py-4">{unit.judul}</td>
            </tr>
          ))}
        </tbody>
      </table>
     
    </div>
  );
};

export default TableSkemaSertif;
