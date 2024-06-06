// import React, { useState } from 'react';

// function AccordionSertif({ items }) {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const handleAccordionClick = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div id="accordion-collapse" data-accordion="collapse" className='mt-16 mb-10'>
//       {items.map((item, index) => (
//         <div key={index}>
//           <h2 id={`accordion-collapse-heading-${index}`}>
//             <button
//               type="button"
//               className={`flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 ${
//                 activeIndex === index ? 'rounded-t-xl' : ''
//               }`}
//               onClick={() => handleAccordionClick(index)}
//               aria-expanded={activeIndex === index}
//               aria-controls={`accordion-collapse-body-${index}`}
//             >
//               <span>{item.title}</span>
//               <svg
//                 data-accordion-icon
//                 className={`w-3 h-3 ${activeIndex === index ? '' : 'rotate-180'} shrink-0`}
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 10 6"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M9 5 5 1 1 5"
//                 />
//               </svg>
//             </button>
//           </h2>
//           <div
//             id={`accordion-collapse-body-${index}`}
//             className={`${activeIndex === index ? '' : 'hidden'}`}
//             aria-labelledby={`accordion-collapse-heading-${index}`}
//           >
//             <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
//               <p className="mb-2 text-gray-500 dark:text-gray-400">{item.content}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default AccordionSertif;

// import React, { useState } from 'react';

// function AccordionSertif({ items }) {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const handleAccordionClick = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div id="accordion-collapse" data-accordion="collapse" className='mt-16 mb-10'>
//       {items.map((item, index) => (
//         <div key={index}>
//           <h2 id={`accordion-collapse-heading-${index}`}>
//             <button
//               type="button"
//               className={`flex text-lg items-center justify-between w-full p-5 font-medium text-ternaryBlue hover:bg-secondaryBlue border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 ${
//                 activeIndex === index ? 'rounded-t-xl bg-secondaryBlue' : ''
//               }`}
//               onClick={() => handleAccordionClick(index)}
//               aria-expanded={activeIndex === index}
//               aria-controls={`accordion-collapse-body-${index}`}
//             >
//               <span>{item.title}</span>
//               <svg
//                 data-accordion-icon
//                 className={`w-3 h-3 ${activeIndex === index ? '' : 'rotate-180'} shrink-0`}
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 10 6"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M9 5 5 1 1 5"
//                 />
//               </svg>
//             </button>
//           </h2>
//           <div
//             id={`accordion-collapse-body-${index}`}
//             className={`${activeIndex === index ? '' : 'hidden'}`}
//             aria-labelledby={`accordion-collapse-heading-${index}`}
//           >
//             <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
//               {item.content}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default AccordionSertif;

import React, { useState } from 'react';

function TabMenu({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="mt-16 mb-10">
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        {items.map((item, index) => (
          <button
            key={index}
            type="button"
            className={`text-lg font-medium px-5 py-3 ${
              activeIndex === index
                ? 'text-primaryBlue border-b-4 border-primaryBlue'
                : 'text-gray-500 hover:text-primaryBlue'
            }`}
            onClick={() => handleTabClick(index)}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="p-5 mt-5">
        {items[activeIndex] && (
          <p className="text-gray-500 shadow border-2 border-gray-200 px-10 py-5 rounded-lg dark:text-gray-400">{items[activeIndex].content}</p>
        )}
      </div>
    </div>
  );
}

export default TabMenu;
