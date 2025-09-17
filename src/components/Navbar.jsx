import React from "react";
import logo from "../assets/Cube-cover-logo.png";

const Navbar = () => {
  return (
    <div className="flex items-start p-6 min-w-7xl mx-auto font-semibold relative">
      <div to="/" className="flex-shrink-0">
        <img
          src={logo}
          alt="Cube Cover Logo"
          className="h-17 w-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Navbar;
