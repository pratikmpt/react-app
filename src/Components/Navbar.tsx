import React from "react";
import logo from "../Assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-50 shadow h-[90px] px-4 md:px-12 flex items-center justify-between">
      <img
        src={logo}
        alt="BHIVE Logo"
        className="h-[40px] w-[125px]"
      />

      {/* desktop view */}
      <div className="hidden md:flex items-center justify-center border border-yellow-400 rounded-md px-4 py-2 cursor-pointer">
        <FontAwesomeIcon icon={faPhone} className="text-yellow-400 text-lg" />
      </div>

      {/* mobile view */}
      <div className="md:hidden flex items-center">
        <FontAwesomeIcon icon={faPhone} className="text-yellow-400 text-xl" />
      </div>
    </nav>
  );
};
