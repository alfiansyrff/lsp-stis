import React, {useState, useEffect} from 'react'
import AdminLayout from '../layout/AdminLayout'
import { Dashboard, Person, Apartment, WorkspacePremium } from '@mui/icons-material';
import FloatingNavbar from '../../components/FloatingNavbar/Index';
import TableSkemaAssociate from '../../components/SkemaSertifikasi/TableSkemaAssociate';
import { motion, AnimatePresence } from 'framer-motion';
import PrimaryButton from '../../components/Button/PrimaryButton';

function DashboardUser() {
  const breadcrumbs = [
    { href: null, label: "Dashboard" }
  ];

  const [toast, setToast] = useState(false);

  useEffect(() => {
    // Check if login success flag is in local storage
    const loginSuccess = localStorage.getItem('loginSuccess');
    if (loginSuccess) {
      // If login success flag exists, display the toast
      setToast(true);
      // Remove the login success flag from local storage
      localStorage.removeItem('loginSuccess');
    }
  }, []);

  return (
    <AdminLayout>
       <FloatingNavbar breadcrumbs={breadcrumbs} />
        
        <div className="p-10 mt-[5em] mx-auto">
          <h1 className="text-3xl text-ternaryBlue font-bold">Selamat Datang, Alfian Syarif!</h1>

          <div className="mt-10 flex items-center justify-between">
            <div className="flex items-center space-x-5">
              <Person className="text-primaryBlue bg-secondaryBlue p-1 rounded-lg" fontSize="large" />
              <div className="flex flex-col text-sm">
                <p className="mb-0 font-semibold text-ternaryBlue">Alfian Syarif</p>
                <p className="text-gray-500 text-[12px]">222112218@stis.ac.id</p>
              </div>
            </div>

            <div className="flex items-center space-x-5">
              <Apartment className="text-primaryBlue bg-secondaryBlue p-1 rounded-lg" fontSize="large" />
              <div className="flex flex-col text-sm">
                <p className="mb-0 font-semibold text-ternaryBlue">Politeknik Statistika STIS</p>
                <p className="text-gray-500 text-[12px]">-</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex items-center mb-10">
              <p className="text-xl text-ternaryBlue font-bold">Sertifikasi yang diikuti</p>
              <div className="flex-grow border-t border-gray-500 ml-4"></div>
            </div>
             <div className='flex flex-col items-center justify-center mx-auto space-y-5'>
              <img src="/image/not-found.svg" className='w-48' alt="" srcset="" />
              <p className='text-ternaryBlue text-lg'>Anda belum terdaftar di skema sertifikasi manapun</p>
              <PrimaryButton text={'Daftar Sekarang'} cta={true} link={'/admin/sertifikasi/register'}/>
            </div>
   
            {/* <TableSkemaAssociate /> */}
          </div>
        </div>

        <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute bottom-5 right-5"
          >
            <div id="toast-success" className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow border-2 border-gray-200" role="alert">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="sr-only">Check icon</span>
              </div>
              <div className="ms-3 text-sm font-normal">Berhasil masuk.</div>
              <button
                type="button"
                className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                data-dismiss-target="#toast-success"
                aria-label="Close"
                onClick={() => setToast(false)}
              >
                <span className="sr-only">Close</span>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </AdminLayout>
  )
}

export default DashboardUser