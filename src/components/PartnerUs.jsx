import React from "react";
import mission from "../assets/Missions-image.png";
import vision from "../assets/Visions-image.png";
import partner from "../assets/Partner-image.png";
import { FaCheck, FaRocket, FaHandshake, FaBullseye } from "react-icons/fa";

const PartnerUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      {/* Hero Section */}
      <div className="relative text-center mb-20 sm:mb-32 px-4">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-purple-50 opacity-50 rounded-3xl -z-10"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FaHandshake className="w-4 h-4" />
            Join Our Partnership Network
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-[#1A3967] via-[#2B5A8C] to-[#4682D4] bg-clip-text text-transparent mb-6 sm:mb-8 leading-tight">
            Partner With CubeCover
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Transform your platform with embedded insurance solutions that empower your users and drive growth
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="mb-16 sm:mb-20">
        <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl border border-blue-100">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-3 rounded-2xl flex-shrink-0">
                  <FaBullseye className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#1A3967] to-blue-600 bg-clip-text text-transparent text-center sm:text-left">
                  Our Mission
                </h2>
              </div>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed text-center lg:text-left">
                Our mission at CubeCover is to revolutionize insurance accessibility
                by seamlessly embedding innovative, affordable microinsurance
                solutions into everyday digital platforms. We are committed to
                empowering individuals and businesses with the protection they need,
                wherever they are, through technology-driven partnerships and
                user-centric experiences.
              </p>
            </div>
            <div className="flex-shrink-0 mt-6 lg:mt-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 blur-2xl rounded-full"></div>
                <img
                  src={mission}
                  alt="Mission"
                  className="relative w-48 sm:w-64 md:w-80 transform hover:scale-105 transition-transform duration-500 mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision */}
      <div className="mb-16 sm:mb-20">
        <div className="bg-gradient-to-br from-white to-purple-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl border border-purple-100">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8 sm:gap-12">
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6">
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-2xl flex-shrink-0">
                  <FaRocket className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#1A3967] to-purple-600 bg-clip-text text-transparent text-center sm:text-left">
                  Our Vision
                </h2>
              </div>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed text-center lg:text-left">
                To lead the global transformation of insurance by making it
                universally accessible and seamlessly integrated into everyday digital
                experiences.
              </p>
            </div>
            <div className="flex-shrink-0 mt-6 lg:mt-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-20 blur-2xl rounded-full"></div>
                <img
                  src={vision}
                  alt="Vision"
                  className="relative w-48 sm:w-64 md:w-80 transform hover:scale-105 transition-transform duration-500 mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="flex justify-center items-center my-20">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-px bg-gradient-to-r from-transparent to-blue-400"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="w-40 h-px bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 shadow-lg"></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-300"></div>
          <div className="w-20 h-px bg-gradient-to-l from-transparent to-purple-400"></div>
        </div>
      </div>

      {/* Partner With Us */}
      <div className="mb-20">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#1A3967] to-blue-600 bg-clip-text text-transparent mb-3 sm:mb-4">
            Why Partner With Us?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Join our ecosystem of innovative partners and unlock new opportunities for growth
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-white to-green-50 rounded-3xl p-8 md:p-12 shadow-xl border border-green-100">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-8">
              <div className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl flex-shrink-0">
                    <FaCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl md:text-3xl font-bold text-[#1A3967] mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      Tailored Solutions
                    </h4>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      We understand that every platform has unique needs. Our products are customizable to fit your specific requirements and business model.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-xl flex-shrink-0">
                    <FaCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl md:text-3xl font-bold text-[#1A3967] mb-3 group-hover:text-green-600 transition-colors duration-300">
                      Enhanced User Engagement
                    </h4>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      By embedding insurance, you provide your users with immediate access to protection, boosting their engagement and loyalty to your platform.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-xl flex-shrink-0">
                    <FaCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl md:text-3xl font-bold text-[#1A3967] mb-3 group-hover:text-purple-600 transition-colors duration-300">
                      Dedicated Support
                    </h4>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Our team is here to assist you at every stage, from integration to ongoing support, ensuring you maximize the benefits of our partnership.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-20 blur-2xl rounded-full"></div>
                <img
                  src={partner}
                  alt="Partner-with-us"
                  className="relative w-72 md:w-96 transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="relative mt-16">
          <div className="relative bg-gradient-to-br from-[#094486] via-[#2B5A8C] to-[#4682D4] rounded-3xl p-12 md:p-16 overflow-hidden shadow-2xl">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl translate-x-16 translate-y-16"></div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Ready to Partner?
              </h3>
              <p className="text-xl md:text-2xl text-blue-100 font-light mb-8 max-w-2xl mx-auto">
                Join our network of successful partners and transform your platform with embedded insurance solutions
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:partnerships@cubecover.ai"
                  className="group relative bg-white text-blue-600 hover:text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center whitespace-nowrap overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <span className="relative z-10">Start Partnership</span>
                </a>
                <a
                  href="#contact"
                  className="border-2 border-white/50 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-2xl transition-all duration-300 text-center whitespace-nowrap"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerUs;
