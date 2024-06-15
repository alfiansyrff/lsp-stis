
// import React, { useContext, createContext, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { ChevronLeft, ChevronRight } from "@mui/icons-material";

// const SidebarContext = createContext();

// export default function Sidebar({ children }) {
//   const [expanded, setExpanded] = useState(true);

//   return (
//     <aside className="h-screen transition-all duration-300">
//       <nav
//         className={`h-full flex flex-col bg-white border-r shadow-sm transition-all duration-300 ${
//           expanded ? "w-64" : "w-20"
//         }`}
//       >
//         <div className="p-4 pb-2 flex justify-between items-center">
//           <img
//             src="/image/logo.png"
//             className={`overflow-hidden transition-all duration-300 ${
//               expanded ? "w-24" : "w-0"
//             }`}
//             alt=""
//           />
//           <p className={`ml-5 text-primaryBlue ${expanded ? "" : "hidden"}`}>
//             LSP Politeknik Statistika STIS
//           </p>
//           <button
//             onClick={() => setExpanded((curr) => !curr)}
//             className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
//           >
//             {expanded ? <ChevronLeft className="text-primaryBlue" /> : <ChevronRight className="text-primaryBlue" />}
//           </button>
//         </div>

//         <SidebarContext.Provider value={{ expanded }}>
//           <ul className="flex-1 px-3">{children}</ul>
//         </SidebarContext.Provider>

//         <div className="border-t flex p-3">
//           <img
//             src="https://ui-avatars.com/api/?name=Alfian+Syarif&background=D7EAFB&color=228be6&bold=true"
//             alt=""
//             className="w-10 h-10 rounded-md"
//           />
//           <div
//             className={`flex justify-between items-center overflow-hidden transition-all duration-300 ${
//               expanded ? "w-52 ml-3" : "w-0"
//             }`}
//           >
//             <div className="leading-4">
//               <h4 className="font-semibold">Alfian Syarif</h4>
//               <span className="text-xs text-gray-600">222112218@stis.ac.id</span>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </aside>
//   );
// }

// export function SidebarItem({ icon, text, alert, to }) {
//   const { expanded } = useContext(SidebarContext);
//   const location = useLocation();
//   const isActive = location.pathname === to;

//   return (
//     <Link to={to}>
    
//     <li
//       className={`
//         relative flex items-center py-2 px-3 my-1
//         font-medium rounded-md cursor-pointer
//         transition-colors group
//         ${isActive ? "bg-secondaryBlue text-primaryBlue" : "hover:bg-secondaryBlue text-ternaryBlue"}
//       `}
//     >
//       {icon}
      
//       <span
//         className={`overflow-hidden transition-all duration-300 ${
//           expanded ? "w-52 ml-3" : "w-0"
//         }`}
//       >
//       {text}
//       </span>
//       {alert && (
//         <div
//           className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
//             expanded ? "" : "top-2"
//           }`}
//         />
//       )}

//       {!expanded && (
//         <div
//           className={`
//           absolute left-full rounded-md px-2 py-1 ml-6
//           bg-indigo-100 text-indigo-800 text-sm
//           invisible opacity-20 -translate-x-3 transition-all duration-300
//           group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
//       `}
//         >
//           {text}
//         </div>
//       )}
//     </li>
//     </Link>
//   );
// }

// import React, { useContext, createContext, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { ChevronLeft, ChevronRight, ExpandLess, ExpandMore } from "@mui/icons-material";

// const SidebarContext = createContext();

// export default function Sidebar({ children }) {
//   const [expanded, setExpanded] = useState(true);

//   return (
//     <aside className="h-screen transition-all duration-300">
//       <nav
//         className={`h-full flex flex-col bg-white border-r shadow-sm transition-all duration-300 ${
//           expanded ? "w-64" : "w-20"
//         }`}
//       >
//         <div className="p-4 pb-2 flex justify-between items-center">
//           <img
//             src="/image/logo.png"
//             className={`overflow-hidden transition-all duration-300 ${
//               expanded ? "w-24" : "w-0"
//             }`}
//             alt=""
//           />
//           <p className={`ml-5 text-primaryBlue ${expanded ? "" : "hidden"}`}>
//             LSP Politeknik Statistika STIS
//           </p>
//           <button
//             onClick={() => setExpanded((curr) => !curr)}
//             className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
//           >
//             {expanded ? <ChevronLeft className="text-primaryBlue" /> : <ChevronRight className="text-primaryBlue" />}
//           </button>
//         </div>

//         <SidebarContext.Provider value={{ expanded }}>
//           <ul className="flex-1 px-3">{children}</ul>
//         </SidebarContext.Provider>

//         <div className="border-t flex p-3">
//           <img
//             src="https://ui-avatars.com/api/?name=Alfian+Syarif&background=D7EAFB&color=228be6&bold=true"
//             alt=""
//             className="w-10 h-10 rounded-md"
//           />
//           <div
//             className={`flex justify-between items-center overflow-hidden transition-all duration-300 ${
//               expanded ? "w-52 ml-3" : "w-0"
//             }`}
//           >
//             <div className="leading-4">
//               <h4 className="font-semibold">Alfian Syarif</h4>
//               <span className="text-xs text-gray-600">222112218@stis.ac.id</span>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </aside>
//   );
// }

// export function SidebarItem({ icon, text, alert, to, submenu }) {
//   const { expanded } = useContext(SidebarContext);
//   const location = useLocation();
//   const isActive = location.pathname === to;
//   const hasSubmenu = submenu && submenu.length > 0; // Check if submenu has items
//   const [submenuOpen, setSubmenuOpen] = useState(false);

//   const handleSubmenuToggle = () => {
//     setSubmenuOpen(!submenuOpen);
//   };

//   return (
//     <>
//       <Link to={to}>
//         <li
//           className={`
//             relative flex items-center py-2 px-3 my-1
//             font-medium rounded-md cursor-pointer
//             transition-colors group
//             ${isActive ? "bg-secondaryBlue text-primaryBlue" : "hover:bg-secondaryBlue text-ternaryBlue"}
//           `}
//         >
//           {icon}
//           <span
//             className={`overflow-hidden transition-all duration-300 ${
//               expanded ? "ml-3" : "ml-0"
//             }`}
//           >
//             {text}
//           </span>
//           {hasSubmenu && (
//             <button
//               className="ml-auto focus:outline-none"
//               onClick={handleSubmenuToggle}
//             >
//               {submenuOpen ? (
//                 <ExpandLess className="text-primaryBlue" />
//               ) : (
//                 <ExpandMore className="text-primaryBlue" />
//               )}
//             </button>
//           )}
//           {alert && (
//             <div
//               className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
//                 expanded ? "" : "top-2"
//               }`}
//             />
//           )}
//         </li>
//       </Link>

//       {/* Submenu */}
//       {hasSubmenu && submenuOpen && expanded && (
//         <ul className="ml-5">
//           {submenu.map((subItem, index) => (
//             <Link key={index} to={subItem.to}>
//               <li
//                 className={`
//                   relative flex items-center py-2 px-3 my-1
//                   font-medium rounded-md cursor-pointer
//                   transition-colors group
//                   ${location.pathname === subItem.to ? "bg-secondaryBlue text-primaryBlue" : "hover:bg-secondaryBlue text-ternaryBlue"}
//                 `}
//               >
//                 <span className="">{subItem.icon}</span>
//                 <span className="ml-3">{subItem.text}</span>
//               </li>
//             </Link>
//           ))}
//         </ul>
//       )}
//     </>
//   );
// }

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";

const Sidebar = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { pathname } = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <aside className={`h-screen ${isSidebarOpen ? "w-64" : "w-20"}`}>
      <nav className="flex flex-col bg-white border-r shadow-sm transition-all duration-300 h-full">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="/image/logo.png"
            className={`overflow-hidden transition-all duration-300 ${
              isSidebarOpen ? "w-24" : "w-0"
            }`}
            alt=""
          />
          <p className={`ml-5 text-primaryBlue ${isSidebarOpen ? "" : "hidden"}`}>
            LSP Politeknik Statistika STIS
          </p>
          <button
            onClick={toggleSidebar}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 md:hidden"
          >
            {isSidebarOpen ? (
              <ChevronLeft className="text-primaryBlue" />
            ) : (
              <ChevronRight className="text-primaryBlue" />
            )}
          </button>
        </div>

        <ul className="flex-1 px-3">
          {React.Children.map(children, (child) =>
            React.cloneElement(child, {
              isSidebarOpen, // Pass isSidebarOpen prop to SidebarItem
            })
          )}
        </ul>

        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?name=Alfian+Syarif&background=D7EAFB&color=228be6&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`flex justify-between items-center overflow-hidden transition-all duration-300 ${
              isSidebarOpen ? "w-52 ml-3" : "w-0"
            }`}
          >
            <div className="leading-4">
              <h4 className="font-semibold">Alfian Syarif</h4>
              <span className="text-xs text-gray-600">222112218@stis.ac.id</span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export function SidebarItem({ icon, text, alert, to, submenu, isSidebarOpen }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  const hasSubmenu = submenu && submenu.length > 0;
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleSubmenuToggle = () => {
    setSubmenuOpen(!submenuOpen);
  };

  return (
    <>
      <Link to={to}>
        <li
          className={`
            relative flex items-center py-2 px-3 my-1
            font-medium rounded-md cursor-pointer
            transition-colors group
            ${isActive ? "bg-secondaryBlue text-primaryBlue" : "hover:bg-secondaryBlue text-ternaryBlue"}
            ${isSidebarOpen ? "ml-3" : "ml-0"}
          `}
        >
          {icon}
          <span className={`overflow-hidden transition-all duration-300 ${isSidebarOpen ? "ml-3" : "ml-1.5"}`}>
            {text}
          </span>
          {hasSubmenu && (
            <button
              className="ml-auto focus:outline-none"
              onClick={handleSubmenuToggle}
            >
              {submenuOpen ? (
                <ExpandLess className="text-primaryBlue" />
              ) : (
                <ExpandMore className="text-primaryBlue" />
              )}
            </button>
          )}
          {alert && (
            <div
              className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
                isSidebarOpen ? "" : "top-2"
              }`}
            />
          )}
        </li>
      </Link>

      {hasSubmenu && submenuOpen && isSidebarOpen && (
        <ul className="ml-5">
          {submenu.map((subItem, index) => (
            <Link key={index} to={subItem.to}>
              <li
                className={`
                  relative flex items-center py-2 px-3 my-1
                  font-medium rounded-md cursor-pointer
                  transition-colors group
                  ${location.pathname === subItem.to ? "bg-secondaryBlue text-primaryBlue" : "hover:bg-secondaryBlue text-ternaryBlue"}
                `}
              >
                <span className="ml-6">{subItem.icon}</span>
                <span className="ml-3">{subItem.text}</span>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </>
  );
}

export default Sidebar;
