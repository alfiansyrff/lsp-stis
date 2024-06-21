import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";

const Sidebar = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { pathname } = useLocation();
  const [isScreenWide, setIsScreenWide] = useState(window.innerWidth >= 1280);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1280px)");
    setIsSidebarOpen(mediaQuery.matches);
    setIsScreenWide(mediaQuery.matches);

    const handleResize = () => {
      setIsSidebarOpen(mediaQuery.matches);
      setIsScreenWide(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleResize);
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative">
      <aside className={`h-screen z-40 fixed top-0 left-0 p-4 ${isSidebarOpen ? "w-64" : "w-24"} transition-all duration-300`}>
        <nav className="flex flex-col bg-white border-r bg-white rounded-2xl shadow-sm transition-all duration-300 h-full">
          <div className="p-4 pb-2 flex justify-between items-center">
            <img
              src="/image/logo.png"
              className={`overflow-hidden transition-all duration-300 ${isSidebarOpen ? "w-24" : "w-0"}`}
              alt=""
            />
            <p className={`ml-5 text-primaryBlue ${isSidebarOpen ? "" : "hidden"}`}>
              LSP Politeknik Statistika STIS
            </p>

            <button
              onClick={toggleSidebar}
              className={`p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 ${isScreenWide ? "md:hidden" : ""}`}
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
                isSidebarOpen,
                pathname,
                setIsSidebarOpen,
              })
            )}
          </ul>

          <div className="border-t flex p-3 xl:hidden">
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
    </div>
  );
};

export function SidebarItem({
  icon,
  text,
  alert,
  to,
  submenu,
  isSidebarOpen,
  pathname,
  setShowLogoutModal,
  setIsSidebarOpen,
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = location.pathname === to || (submenu && submenu.some(subItem => subItem.to === location.pathname));
  const hasSubmenu = submenu && submenu.length > 0;
  const [submenuOpen, setSubmenuOpen] = useState(() => {
    return localStorage.getItem(to) === "true";
  });

  useEffect(() => {
    if (isActive) {
      setSubmenuOpen(true);
    }
  }, [isActive]);

  useEffect(() => {
    localStorage.setItem(to, submenuOpen);
  }, [submenuOpen, to]);

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const handleSubmenuToggle = (e) => {
    e.stopPropagation();
    setSubmenuOpen(prevState => !prevState);
    if (!isSidebarOpen) {
      setIsSidebarOpen(true); // Open the sidebar if it's closed
    }
  };

  const handleNavigation = (e) => {
    if (hasSubmenu) {
      e.preventDefault();
      handleSubmenuToggle(e);
    } else {
      navigate(to);
    }
  };

  return (
    <>
    {to === '/logout' ? (
        <li
          onClick={handleLogoutClick}
          className={`
            relative flex items-center py-2 px-3 my-2
            font-medium rounded-md cursor-pointer
            transition-colors group
            hover:bg-secondaryBlue text-ternaryBlue
            ${isSidebarOpen ? "ml-3" : "ml-0"}
          `}
        >
          {icon}
          <span className={`overflow-hidden transition-all duration-300 ${isSidebarOpen ? "ml-3" : "ml-1.5"}`}>
            {text}
          </span>
        </li>
      ): (

   
    <div onClick={handleNavigation}>
      <li
        className={`
          relative flex items-center py-2 px-3 my-2
          font-medium rounded-md cursor-pointer
          transition-colors group
          ${isActive ? "bg-secondaryBlue text-primaryBlue" : "hover:bg-secondaryBlue text-ternaryBlue"}
          ${isSidebarOpen ? "ml-3" : "ml-0"}
        `}
      >
        {icon}
        <span className={`overflow-hidden transition-all duration-300 ${isSidebarOpen ? "ml-3" : "-ml-1"}`}>
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
    </div>
    )}
    </>
  );
}

export default Sidebar;
