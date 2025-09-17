import React, { useState } from "react";
import logo from "../assets/Cube-cover-logo.png";
import { FiMessageCircle } from "react-icons/fi";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-6 max-w-7xl mx-auto font-semibold relative">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src={logo}
            alt="Cube Cover Logo"
            className="h-17 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex gap-8 items-center">
          <p className="hover:text-blue-600 transition-colors duration-300 cursor-pointer">
            Our Company
          </p>
          <p className="hover:text-blue-600 transition-colors duration-300 cursor-pointer">
            Services
          </p>
          <p className="hover:text-blue-600 transition-colors duration-300 cursor-pointer">
            Products
          </p>
          <p className="hover:text-blue-600 transition-colors duration-300 cursor-pointer">
            Our Impact
          </p>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-6">
          <button className="flex items-center gap-2 border-2 border-black text-black hover:bg-gray-400 ease-in-out duration-300 p-2 rounded-xl cursor-pointer">
            <span>
              <FiMessageCircle />
            </span>
            Talk to us
          </button>

          <button className="text-white bg-blue-500 hover:text-black hover:bg-gray-400 ease-in-out duration-300 p-2 rounded-xl cursor-pointer">
            Our Blog
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-2xl p-2 rounded-lg hover:bg-gray-100 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden mt-4 flex flex-col gap-4 bg-white shadow-lg rounded-lg p-6 transition-all ease-in-out duration-500 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <p className="hover:text-blue-600 transition-colors duration-300 cursor-pointer">
          Our Company
        </p>
        <p className="hover:text-blue-600 transition-colors duration-300 cursor-pointer">
          Services
        </p>
        <p className="hover:text-blue-600 transition-colors duration-300 cursor-pointer">
          Products
        </p>
        <p className="hover:text-blue-600 transition-colors duration-300 cursor-pointer">
          Our Impact
        </p>

        <button className="flex items-center gap-2 border-2 border-black text-black hover:bg-gray-400 ease-in-out duration-300 p-2 rounded-xl cursor-pointer">
          <FiMessageCircle />
          Talk to us
        </button>

        <button className="text-white bg-blue-500 hover:text-black hover:bg-gray-400 ease-in-out duration-300 p-2 rounded-xl cursor-pointer">
          Our Blog
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
