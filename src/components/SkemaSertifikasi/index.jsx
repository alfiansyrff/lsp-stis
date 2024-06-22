// import React, { Suspense } from 'react';
// import Heading from '../Heading/Index';
// import TabMenu from '../Accordion/AccordionSertif';
// import TableSkemaDataScientist from './TableSkemaDataScientist';
// import TableSkemaAssociate from './TableSkemaAssociate';


// // Lazy-loaded components
// const BookletCard = React.lazy(() => import('./Card'));

// function SkemaSertifikasi() {
//   const accordionItems = [
//     {
//       title: 'Ilmuwan Data (Data Scientist)',
//       content: <TableSkemaDataScientist />,
//     },
//     {
//       title: 'Ilmuwan Data Madya (Associate Data Scientist)',
//       content: <TableSkemaAssociate/>,

//     },
//   ];

//   return (
//     <div className='max-w-7xl px-5 mx-auto'>
//       <Heading text={'Skema Sertifikasi'} />
 
//       <TabMenu items={accordionItems} />

//       <Heading text={'Panduan Pengguna'} />

//       <div className='my-16 flex flex-wrap items-center justify-between'>
//         <Suspense fallback={<BookletCardLoader />}>
//           <BookletCardLazy imageSrc={'/image/panduan_asesor.png'} title={'Buku Panduan Asesor'} fileLink={'panduan_asesor.pdf'} />
//           <BookletCardLazy imageSrc={'/image/panduan_admin.png'} title={'Buku Panduan Admin'} fileLink={'panduan_adnin.pdf'} />
//           <BookletCardLazy imageSrc={'/image/panduan_asesi.png'} title={'Buku Panduan Asesi'} fileLink={'panduan_asesi.pdf'} />
//         </Suspense>
//       </div>

//     </div>
//   );
// }


// const BookletCardLoader = () => (
//   <div className="max-w-sm w-full mb-5 bg-white p-5 rounded-2xl shadow-lg transition-transform duration-300 ease-in-out transform hover:shadow-2xl hover:-translate-y-2 flex flex-col">
//     <div className="animate-pulse">
//       <div className="h-96 bg-gray-300 rounded-t-lg"></div>
//       <div className="h-8 mt-5 bg-gray-300 rounded"></div>
//     </div>
//   </div>
// );


// const BookletCardLazy = ({ imageSrc, title, fileLink }) => (
//   <React.Suspense fallback={<BookletCardLoader />}>
//     <BookletCard imageSrc={imageSrc} title={title} fileLink={fileLink} />
//   </React.Suspense>
// );

// export default SkemaSertifikasi;

// SkemaSertifikasi.js
import React, { Suspense } from 'react';
import Heading from '../Heading/Index';
import TabMenu from '../Accordion/AccordionSertif';
import TableSkemaDataScientist from './TableSkemaDataScientist';
import TableSkemaAssociate from './TableSkemaAssociate';

// Lazy-loaded components
const BookletCard = React.lazy(() => import('./Card'));

function SkemaSertifikasi() {
  const accordionItems = [
    {
      title: 'Ilmuwan Data (Data Scientist)',
      content: <TableSkemaDataScientist />,
    },
    {
      title: 'Ilmuwan Data Madya (Associate Data Scientist)',
      content: <TableSkemaAssociate/>,
    },
  ];

  return (
    <div className='max-w-7xl px-5 mx-auto'>
      <Heading text={'Skema Sertifikasi'} />
      <TabMenu items={accordionItems} />
      <Heading text={'Panduan Pengguna'} />
      <div className='my-16 flex flex-wrap items-center justify-between'>
        <Suspense fallback={<BookletCardLoader />}>
          <BookletCardLazy imageSrc={'/image/panduan_asesor.png'} title={'Buku Panduan Asesor'} fileLink={'/file/panduan_asesor.pdf'} />
          <BookletCardLazy imageSrc={'/image/panduan_admin.png'} title={'Buku Panduan Admin'} fileLink={'/file/panduan_admin.pdf'} />
          <BookletCardLazy imageSrc={'/image/panduan_asesi.png'} title={'Buku Panduan Asesi'} fileLink={'/file/panduan_asesi.pdf'} />
        </Suspense>
      </div>
    </div>
  );
}

const BookletCardLoader = () => (
  <div className="max-w-sm w-full mb-5 bg-white p-5 rounded-2xl shadow-lg transition-transform duration-300 ease-in-out transform hover:shadow-2xl hover:-translate-y-2 flex flex-col">
    <div className="animate-pulse">
      <div className="h-96 bg-gray-300 rounded-t-lg"></div>
      <div className="h-8 mt-5 bg-gray-300 rounded"></div>
    </div>
  </div>
);

const BookletCardLazy = ({ imageSrc, title, fileLink }) => (
  <React.Suspense fallback={<BookletCardLoader />}>
    <BookletCard imageSrc={imageSrc} title={title} fileLink={fileLink} />
  </React.Suspense>
);

export default SkemaSertifikasi;
