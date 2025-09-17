import React from "react";
import headerPhoto from "../assets/Cube-cover-home.png";
import { FaDatabase, FaSatelliteDish } from "react-icons/fa";
import { FaHeartCirclePlus } from "react-icons/fa6";
import {
  MdAnalytics,
  MdHandshake,
  MdPhoneIphone,
  MdDirectionsCar,
  MdPhonelink,
  MdPsychology,
} from "react-icons/md";

const Home = () => {
  const cardInfo = [
    {
      img: <MdAnalytics size={70} />,
      name: "Insights",
      descriptionOne: "4.5 million+ lives covered.",
      descriptionTwo:
        "16.2 million+ transactions processed across partner platforms.",
    },
    {
      img: <MdHandshake size={70} />,
      to: "/partner-us",
      name: "Partner With Us",
      descriptionOne:
        "Join leading channel partners to distribute and deliver seamless coverage to your customers.",
    },
    {
      img: <FaHeartCirclePlus size={70} />,
      name: "Health Protection",
      descriptionOne:
        "We've delivered Health protection to over 4.5million+ people across 36 states in Nigeria including the Federal Capital Territory.",
    },
    {
      img: <FaDatabase size={70} />,
      name: "Device Protection",
      descriptionOne:
        "We've protected over 257,000 devices across Nigeria and work with certified technicians like SLOT to deliver seamless service to our customers.",
    },
  ];

  const ourProducts = [
    {
      img: <FaHeartCirclePlus size={70} />,
      name: "Health Insurance",
    },
    {
      img: <MdPhoneIphone size={70} />,
      name: "Device / Phone Screen Insurance",
    },
    {
      img: <MdDirectionsCar size={70} />,
      name: "Motor Insurance",
    },
    {
      img: <MdPhonelink size={70} />,
      name: "Cube Mobile Gateway",
    },
    {
      img: <FaSatelliteDish size={70} />,
      name: "Tele-Cube",
    },
    {
      img: <MdPsychology size={70} />,
      name: "Cube AI",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/*Hero Section*/}
      <div className="relative flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 py-12 sm:py-16 md:py-24 gap-8 md:gap-12 overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-blue-100 opacity-50 rounded-3xl -z-10"></div>
        
        <div className="flex flex-col gap-6 sm:gap-8 text-center md:text-left max-w-2xl w-full">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fade-in">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              Nigeria's Leading InsurTech Platform
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#1A3967] via-[#2B5A8C] to-[#4682D4] bg-clip-text text-transparent leading-tight animate-fade-in">
              Welcome to CubeCover
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#1A3967] opacity-90">
              Smarter insurance for a <span className="text-blue-600">digital world</span>
            </h2>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-[#4F6B89] leading-relaxed">
            Trusted by over <span className="font-bold text-blue-600">4.5 million users</span>, across partner platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
            <a
              href="https://cubecover.ai/axa/imt"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>Get Started Today</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </a>
            <button className="group relative border-2 border-blue-600 text-blue-600 hover:text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <span className="relative z-10">Learn More</span>
            </button>
          </div>
        </div>
        
        <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
          {/* Multiple blended background layers */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-purple-500/30 blur-3xl rounded-full transform scale-110"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-300/20 via-purple-400/20 to-pink-300/20 blur-2xl rounded-full transform scale-105 rotate-12"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-cyan-300/15 to-blue-400/15 blur-xl rounded-full transform scale-95 -rotate-6"></div>
          
         <img
  src={headerPhoto}
  alt="Cube Cover Insurance Platform"
  className="relative w-full h-auto object-contain transform hover:scale-105 transition-all duration-700 ease-out drop-shadow-2xl rounded-3xl p-[2px] bg-gradient-to-r from-transparent via-blue-200/40 to-transparent"
/>

        </div>
      </div>

      {/*Hero Card Section*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-6 mt-16 sm:mt-24 lg:mt-32">
        {cardInfo.map((items, index) => (
          <div
            key={index}
            className="group relative bg-white border border-gray-100 hover:border-blue-200 rounded-2xl p-8 shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden"
          >
            {/* Gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-blue-600 group-hover:text-blue-700">{items.img}</span>
                </div>
                <h3 className="text-[#1A3967] text-2xl font-bold mb-2 group-hover:text-blue-700 transition-colors duration-300">
                  {items.name}
                </h3>
              </div>
              <div className="flex flex-col gap-3 text-gray-600 leading-relaxed">
                <p className="text-base">{items.descriptionOne}</p>
                {items.descriptionTwo && <p className="text-sm opacity-80">{items.descriptionTwo}</p>}
              </div>
            </div>
            
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 opacity-10 rounded-bl-full group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>

      {/*Our Impact*/}
      <div className="px-4 sm:px-6 mt-16 sm:mt-20 md:mt-24">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#1A3967] to-blue-600 bg-clip-text text-transparent mb-3 sm:mb-4">
            Our Impact
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Making a difference in millions of lives through innovative insurance solutions
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                4.5M+
              </h3>
              <p className="text-gray-600 font-medium">Lives covered</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
                16.2M+
              </h3>
              <p className="text-gray-600 font-medium">Transactions processed</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 md:col-span-2 lg:col-span-1">
              <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                10+
              </h3>
              <p className="text-gray-600 font-medium">Partners</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-lg text-gray-600">Over</span>
                <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  3000
                </span>
              </div>
              <p className="text-gray-600 font-medium">Partner pharmacies across the country</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent mb-2">
                97%
              </h3>
              <p className="text-gray-600 font-medium">Customer recommendation rate</p>
            </div>
          </div>
        </div>
      </div>

      {/*Call to Action Section*/}
      <div className="relative px-4 sm:px-6 my-16 sm:my-24 md:my-32">
        <div className="relative bg-gradient-to-br from-[#094486] via-[#2B5A8C] to-[#4682D4] rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 overflow-hidden shadow-2xl">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl translate-x-16 translate-y-16"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
            <div className="text-center md:text-left">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Ready to get protected?
              </h3>
              <p className="text-xl md:text-2xl text-blue-100 font-light">
                Join millions who trust Cube Cover for their insurance needs
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://cubecover.ai/axa/imt"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white text-blue-600 hover:text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center whitespace-nowrap overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <span className="relative z-10">Get Insured Now</span>
              </a>
              <a
                href=""
                className="border-2 border-white/50 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-2xl transition-all duration-300 text-center whitespace-nowrap"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>

      {/*Divider*/}
      <div className="flex justify-center items-center my-20">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-px bg-gradient-to-r from-transparent to-blue-400"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="w-40 h-px bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 shadow-lg"></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-300"></div>
          <div className="w-20 h-px bg-gradient-to-l from-transparent to-purple-400"></div>
        </div>
      </div>

      {/*Our Products*/}
      <div className="px-4 md:px-6 mt-32 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#1A3967] to-blue-600 bg-clip-text text-transparent mb-4">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive insurance solutions designed for the modern digital lifestyle
          </p>
        </div>
        
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 rounded-3xl blur-3xl opacity-50"></div>
          
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-3xl backdrop-blur-sm">
            {ourProducts.map((items, index) => (
              <div
                key={index}
                className="group relative bg-white hover:bg-gradient-to-br hover:from-white hover:to-blue-50 p-8 rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <span className="text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                      {items.img}
                    </span>
                  </div>
                  <h3 className="text-[#1A3967] text-2xl font-bold group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                    {items.name}
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
