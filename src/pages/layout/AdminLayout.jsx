// import React from 'react'
// import Sidebar, { SidebarItem } from '../../components/SidebarAdmin'
// import { Apartment, Dashboard, Person, Person2, School } from '@mui/icons-material'
// import FloatingNavbar from '../../components/FloatingNavbar/Index'
// import TableSkemaAssociate from '../../components/SkemaSertifikasi/TableSkemaAssociate'

// function AdminLayout() {
//   const data = [
//     {
//       icon: Dashboard,
//       text: "Dashboard"
//     }
//   ]
  

//   const breadcrumbs = [
//     // { href: "/", label: "Home" },
//     { href: null, label: "Dashboard" }
//   ];

//   return (
//     <div className='flex'>

//       <div className='w-1/6'>
//         <Sidebar>
//           {data.map((item, key) => (
//             <SidebarItem
//             key={key}
//             text={item.text}
//             icon={<item.icon />} 
//             alert={true}
//             active={true}
//             />
//           ))}
//         </Sidebar>
//       </div>

//       <div className='w-5/6'>
//         <div className='p-10 mt-[5em] mx-auto'>
//           <h1 className='text-3xl text-ternaryBlue font-bold'>Selamat Datang, Alfian Syarif!</h1>

//           <div className='mt-10 flex items-center justify-between'>
//             <div className='flex flex items-center space-x-5'>
//               <Person className='text-primaryBlue bg-secondaryBlue p-1 rounded-lg' fontSize='large'/>
//               <div className='flex flex-col text-sm'>
//                 <p className='mb-0 font-semibold text-ternaryBlue'>Alfian Syarif</p>
//                 <p className='text-gray-500 text-[12px]'>222112218@stis.ac.id</p>
//               </div>
//             </div>

//             <div className='flex flex items-center space-x-5'>
//               <Apartment className='text-primaryBlue bg-secondaryBlue p-1 rounded-lg' fontSize='large'/>
//               <div className='flex flex-col text-sm'>
//                 <p className='mb-0 font-semibold text-ternaryBlue'>Politeknik Statistika STIS</p>
//                 <p className='text-gray-500 text-[12px]'>-</p>
//               </div>
//             </div>
//           </div>

//           <div className='mt-10'>
//             <div className='flex items-center mb-10'>
//               <p className='text-xl text-ternaryBlue font-bold'>Sertifikasi yang diikuti</p>
//               <div className='flex-grow border-t border-gray-500 ml-4'></div>
              
//             </div>

//             <TableSkemaAssociate />
//           </div>
//         </div>
//           {/* <div className='bg-primaryBlue h-36 z-0'>
//             <div className='absolute top-5 right-5'>
//               <div className='flex items-center justify-between'>
//                 <div className='flex items-center space-x-5'>
//                   <img src="/image/logo.png" className='w-12' alt="" srcset="" />
//                   <p className='text-secondaryBlue'>Hi, Alfian Syarif</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className='bg-white rounded-lg shadow z-10 -mt-10 w-[90%] flex mx-auto p-5  items-center justify-center'>
//             <h1 className='text-primaryBlue text-5xl'>Dashboard</h1>
//           </div> */}
//       </div>

//       <FloatingNavbar breadcrumbs={breadcrumbs}/>

   
//     </div>
//   )
// }

// export default AdminLayout

import React, { useEffect, useState } from 'react';
import Sidebar, { SidebarItem } from '../../components/SidebarAdmin';
import { Dashboard, WorkspacePremium, Assignment } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function AdminLayout({ children }) {
  const data = [
    {
      icon: Dashboard,
      text: "Dashboard",
      to: "/admin"
    },
    {
      icon: WorkspacePremium,
      text: "Sertifikasi",
      to: "/admin/sertifikasi"
    },
    {
      icon: Assignment,
      text: "Ujian",
      to: "/admin/ujian"
    }
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
    <div className="flex h-screen overflow-hidden">
      <div className="fixed w-1/6 h-full">
        <Sidebar>
          {data.map((item, key) => (
            <SidebarItem
              key={key}
              text={item.text}
              icon={<item.icon />}
              alert={true}
              active={true}
              to={item.to}
            />
          ))}
        </Sidebar>
      </div>

      <div className="flex-1 ml-[16.6667%] overflow-auto">
        {children}
      </div>
    </div>
  );
}

export default AdminLayout;

