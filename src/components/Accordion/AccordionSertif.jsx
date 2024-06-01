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

import React, { useState } from 'react';

function AccordionSertif({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="accordion-collapse" data-accordion="collapse" className='mt-16 mb-10'>
      {items.map((item, index) => (
        <div key={index}>
          <h2 id={`accordion-collapse-heading-${index}`}>
            <button
              type="button"
              className={`flex text-lg items-center justify-between w-full p-5 font-medium text-ternaryBlue hover:bg-secondaryBlue border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 ${
                activeIndex === index ? 'rounded-t-xl bg-secondaryBlue' : ''
              }`}
              onClick={() => handleAccordionClick(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`accordion-collapse-body-${index}`}
            >
              <span>{item.title}</span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 ${activeIndex === index ? '' : 'rotate-180'} shrink-0`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id={`accordion-collapse-body-${index}`}
            className={`${activeIndex === index ? '' : 'hidden'}`}
            aria-labelledby={`accordion-collapse-heading-${index}`}
          >
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AccordionSertif;
