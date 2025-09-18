import React from "react";
import logo from "../assets/Cube-cover-logo.png";

const Navbar = () => {
  return (
    <div className="flex items-start p-4 sm:p-6 mx-auto font-semibold relative">
      <div to="/" className="flex-shrink-0">
        <img
          src={logo}
          alt="Cube Cover Logo"
          className="h-12 sm:h-16 md:h-17 w-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Navbar;
