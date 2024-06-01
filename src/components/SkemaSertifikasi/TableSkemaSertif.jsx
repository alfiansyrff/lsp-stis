import React from 'react';
import PrimaryButton from '../Button/PrimaryButton';

const TableSkemaSertif = ({ data }) => {
  return (
    <div>
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
      <div className="mt-4 flex justify-end space-x-3">
        <PrimaryButton text={'Unduh Skema'} />
        <PrimaryButton text={'Unduh SKKNI'} />
      </div>
    </div>
  );
};

export default TableSkemaSertif;
