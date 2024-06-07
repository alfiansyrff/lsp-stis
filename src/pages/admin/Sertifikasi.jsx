import React from 'react'
import AdminLayout from '../layout/AdminLayout'
import { FloatingLabel } from 'flowbite-react';
import FloatingNavbar from '../../components/FloatingNavbar/Index';
import PrimaryButton from '../../components/Button/PrimaryButton';
import HistorySertifikasi from '../../components/HistorySertifikasi';
import TableSkemaAssociate from '../../components/SkemaSertifikasi/TableSkemaAssociate';
import { Link } from 'react-router-dom';

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

        <div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <div className="relative w-full h-48">
                <img className="absolute inset-0 w-full h-full object-cover rounded-t-lg" src="/image/data-scientist.jpg" alt="" />
              </div>
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-ternaryBlue">
                  Ilmuwan Data 
                </h5>
              </a>
              <p className="mb-3 font-normal text-red-500 dark:text-gray-400">
                Harap segera melakukan pembayaran
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Detail
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col items-center justify-center mx-auto h-[60vh] space-y-5">
          <img src="/image/not-found.svg" className="w-48" alt="" />
          <p className="text-ternaryBlue text-lg">Anda belum terdaftar di skema sertifikasi manapun</p>
          <PrimaryButton text={'Daftar Sekarang'} cta={true} link={'/admin/sertifikasi/register'} />
        </div> */}

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