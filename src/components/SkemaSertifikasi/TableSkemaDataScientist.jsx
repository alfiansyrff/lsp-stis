import React from 'react'
import PrimaryButton from '../Button/PrimaryButton';
import TableSkemaSertif from './TableSkemaSertif';

const dataScientistSkema = [
  { no: 1, kode: 'J.62DMI00.001.1', judul: 'Menentukan Objektif Bisnis' },
  { no: 2, kode: 'J.62DMI00.002.1', judul: 'Menentukan Tujuan Teknis Data Science' },
  { no: 3, kode: 'J.62DMI00.005.1', judul: 'Menelaah Data' },
  { no: 4, kode: 'J.62DMI00.006.1', judul: 'Memvalidasi Data' },
  { no: 5, kode: 'J.62DMI00.007.1', judul: 'Menentukan Objek Data' },
  { no: 6, kode: 'J.62DMI00.008.1', judul: 'Membersihkan Data' },
  { no: 7, kode: 'J.62DMI00.009.1', judul: 'Mengkonstruksi Data' },
  { no: 8, kode: 'J.62DMI00.012.1', judul: 'Membangun Skenario Model' },
  { no: 9, kode: 'J.62DMI00.013.1', judul: 'Membangun Model' },
  { no: 10, kode: 'J.62DMI00.014.1', judul: 'Mengevaluasi Hasil Pemodelan' },
  { no: 11, kode: 'J.62DMI00.015.1', judul: 'Melakukan Proses Review Pemodelan' },
];


function TableSkemaDataScientist() {
  return (
    <div>
    <TableSkemaSertif data={dataScientistSkema}/>
    {/* <table className="w-full text-sm text-left text-ternaryBlue dark:text-gray-400">
      <thead className="text-xs text-center  uppercase bg-ternaryBlue text-white">
        <tr>
          <th scope="col" className="px-6 py-3 rounded-tl-lg">No</th>
          <th scope="col" className="px-6 py-3">Kode Unit</th>
          <th scope="col" className="px-6 py-3 rounded-tr-lg">Judul Unit</th>
        </tr>
      </thead>
      <tbody>
        {dataScientistSkema.map((unit) => (
          <tr key={unit.no} className='bg-white border-b hover:bg-gray-200'>
            <td className="px-6 py-4 text-center">{unit.no}</td>
            <td className="px-6 py-4 text-center">{unit.kode}</td>
            <td className="px-6 py-4">{unit.judul}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="mt-4 flex justify-end space-x-3">
      <PrimaryButton text={'Unduh Skema'}/>
      <PrimaryButton text={'Unduh SKKNI'}/>
    </div> */}
  </div>
  )
}

export default TableSkemaDataScientist