import React from 'react'
import AdminLayout from '../layout/AdminLayout'
import { FloatingLabel } from 'flowbite-react';
import FloatingNavbar from '../../components/FloatingNavbar/Index';
import PrimaryButton from '../../components/Button/PrimaryButton';
import HistorySertifikasi from '../../components/HistorySertifikasi';
import TableSkemaAssociate from '../../components/SkemaSertifikasi/TableSkemaAssociate';

function SertifikasiUser() {

  const breadcrumbs = [
    { href: null, label: "Sertifikasi" }
  ];


  return (
    <AdminLayout>
     <FloatingNavbar breadcrumbs={breadcrumbs}/>

     <div className="p-10 mt-[5em] mx-auto">
        <div className="flex items-center mb-5">
          <p className="text-3xl text-ternaryBlue font-bold">Sertifikasi yang Diikuti</p>
          <div className="flex-grow border-t border-gray-500 ml-4"></div>
        </div>

        <div className="flex flex-col items-center justify-center mx-auto h-[60vh] space-y-5">
          <img src="/image/not-found.svg" className="w-48" alt="" />
          <p className="text-ternaryBlue text-lg">Anda belum terdaftar di skema sertifikasi manapun</p>
          <PrimaryButton text={'Daftar Sekarang'} cta={true} link={'/admin/sertifikasi/register'} />
        </div>

        {/* <TableSkemaAssociate /> */}
      
        {/* <div className='w-1/3'>
          <HistorySertifikasi />
        </div> */}
        {/* <div className='flex flex-col items-center justify-center mx-auto h-[60vh] space-y-5'>
          <img src="/image/not-found.svg" className='w-48' alt="" srcset="" />
          <p className='text-ternaryBlue text-lg'>Anda belum terdaftar di skema sertifikasi manapun</p>
          <PrimaryButton text={'Daftar Sekarang'} cta={true} link={'/admin/sertifikasi/register'}/>
        </div> */}
   
      </div>
    </AdminLayout>
  )
}

export default SertifikasiUser