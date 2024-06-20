import React from 'react'
import AdminLayout from '../layout/AdminLayout'
import FloatingNavbar from '../../components/FloatingNavbar/Index';
import PrimaryButton from '../../components/Button/PrimaryButton';

function Ujian() {

  const breadcrumbs = [
    { href: null, label: "Ujian Sertifikasi" }
  ];

  return (
    <AdminLayout>
     <FloatingNavbar breadcrumbs={breadcrumbs}/>

     <div className="p-10 mx-auto">
        
        {/* <div className='w-1/3'>
          <HistorySertifikasi />
        </div> */}
      <div className="flex items-center mb-5">
        <p className="text-3xl text-ternaryBlue font-bold">Ujian Sertifikasi yang Diikuti</p>
        <div className="flex-grow border-t border-gray-500 ml-4"></div>
      </div>
    
      <div className='flex flex-col items-center justify-center h-[60vh] mx-auto space-y-5'>
        <img src="/image/not-found.svg" className='w-48' alt="" srcset="" />
        <p className='text-ternaryBlue text-lg text-center'>Belum ada ujian. Pastikan Anda telah melalui prosedur sertifikasi dengan benar</p>
      </div>

      {/* <TableSkemaAssociate /> */}
    </div>
   
    </AdminLayout>
  )
}

export default Ujian