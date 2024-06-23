import React, { useState } from 'react';
import AdminLayout from '../layout/AdminLayout';
import FloatingNavbar from '../../components/FloatingNavbar/Index';
import HistorySertifikasi from '../../components/HistorySertifikasi';
import CardInformationSertif from '../../components/CardInformationSertif';

function DetailSertifikasi() {

  const [successUpload, setSuccessUpload] = useState(false);

  const breadcrumbs = [
    { href: '/user/sertifikasi', label: "Skema Sertifikasi" },
    { href: null, label: "Detail Sertifikasi" },
  ];

  const handleSuccessUpload = (status) => {
    setSuccessUpload(status);
  };


  return (
    <AdminLayout>
      <FloatingNavbar breadcrumbs={breadcrumbs} />
      <div className="p-6 md:p-10 mx-auto flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5 overflow-auto">
        <div className='w-full md:w-2/3'>
          <CardInformationSertif onSuccessUpload={handleSuccessUpload}/>
        </div>
        <div className='w-full md:w-1/3'>
          <HistorySertifikasi successUpload={successUpload}  />
        </div>
      </div>
    </AdminLayout>
  );
}

export default DetailSertifikasi;
