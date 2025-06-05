import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <img src={logo} alt="BHIVE Logo" className="h-10" />

      <div className="hidden md:flex items-center justify-center border-2 border-yellow-400 rounded-md p-2 cursor-pointer">
        <FontAwesomeIcon icon={faPhone} className="text-yellow-400 text-lg" />
      </div>

      {/* mobile view */}
      <div className="md:hidden text-2xl">
        <FontAwesomeIcon icon={faPhone} className="text-yellow-400 text-lg" />
      </div>
    </nav>
  );
};

