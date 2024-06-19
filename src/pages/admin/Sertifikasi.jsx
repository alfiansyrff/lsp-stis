import React, { useEffect, useState } from 'react';
import AdminLayout from '../layout/AdminLayout';
import FloatingNavbar from '../../components/FloatingNavbar/Index';
import PrimaryButton from '../../components/Button/PrimaryButton';
import HistorySertifikasi from '../../components/HistorySertifikasi';
import TableSkemaAssociate from '../../components/SkemaSertifikasi/TableSkemaAssociate';
import { Link } from 'react-router-dom';

function SertifikasiUser() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Fetch email from localStorage on component mount
    const storedEmail = localStorage.getItem('email');
    setEmail(storedEmail);
  }, []);

  const breadcrumbs = [
    { href: null, label: "Skema Sertifikasi" }
  ];

  return (
    <AdminLayout>
      <FloatingNavbar breadcrumbs={breadcrumbs}/>

      <div className="p-10 md:mt-[5em] mx-auto z-10">
        <div className="flex items-center mb-5">
          <p className="text-3xl text-ternaryBlue font-bold">Skema Sertifikasi yang Diikuti</p>
          <div className="flex-grow border-t border-gray-500 ml-4"></div>
        </div>

        {/* Conditional rendering based on email */}
        {email === 'user2@gmail.com' ? (
          <div className="flex flex-col items-center justify-center mx-auto h-[60vh] space-y-5">
            <img src="/image/not-found.svg" className="w-48" alt="" />
            <p className="text-ternaryBlue text-lg">Anda belum terdaftar di skema sertifikasi manapun</p>
            <PrimaryButton text={'Daftar Sekarang'} cta={true} link={'/user/sertifikasi/register'} />
          </div>
        ) : (
          <>
            <div>
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <div className="relative w-full h-48">
                    <img className="absolute inset-0 w-full h-full object-cover rounded-t-lg" src="/image/data-scientist.jpg" alt=""  />
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
                  <Link
                    to={'/user/sertifikasi/detail'}
                    className="inline-flex z-10 items-center text-white px-6 py-2 rounded-md transition-colors duration-300 ease-in-out transform transition-transform hover:bg-ternaryBlue duration-300 ease-in-out bg-primaryBlue"
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
                  </Link>
                </div>
              </div>
            </div>

          </>
        )}
      </div>
    </AdminLayout>
  );
}

export default SertifikasiUser;
