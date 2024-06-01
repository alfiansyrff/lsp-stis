import React from 'react'
import TableSkemaSertif from './TableSkemaSertif';

const associateDataSkema = [
  { no: 1, kode: 'J.62DMI00.004.1', judul: 'Mengumpulkan Data' },
  { no: 2, kode: 'J.62DMI00.005.1', judul: 'Menelaah Data' },
  { no: 3, kode: 'J.62DMI00.006.1', judul: 'Memvalidasi Data' },
  { no: 4, kode: 'J.62DMI00.007.1', judul: 'Menentukan Objek Data' },
  { no: 5, kode: 'J.62DMI00.008.1', judul: 'Membersihkan Data' },
  { no: 6, kode: 'J.62DMI00.009.1', judul: 'Mengkonstruksi Data' },
  { no: 7, kode: 'J.62DMI00.010.1', judul: 'Menentukan Label Data' },
  { no: 8, kode: 'J.62DMI00.013.1', judul: 'Membangun Model' },
  { no: 9, kode: 'J.62DMI00.014.1', judul: 'Mengevaluasi Hasil Pemodelan' },
];


function TableSkemaAssociate() {
  return (
    <div>
      <TableSkemaSertif data={associateDataSkema}/>
    </div>
  )
}

export default TableSkemaAssociate