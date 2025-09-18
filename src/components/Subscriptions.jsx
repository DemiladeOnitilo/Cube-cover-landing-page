import React from "react";
import { FaMobileAlt, FaUsers, FaShieldAlt, FaRocket } from "react-icons/fa";

const Subscriptions = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <div className="relative text-center mb-32 px-6">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-purple-50 opacity-50 rounded-3xl -z-10"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FaRocket className="w-4 h-4" />
            Quick & Easy Setup
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#1A3967] via-[#2B5A8C] to-[#4682D4] bg-clip-text text-transparent mb-8 leading-tight">
            Get Protected in Minutes
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Choose your preferred channel partner and get instant access to comprehensive insurance coverage
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
              <FaShieldAlt className="text-green-500" />
              <span className="text-sm font-medium text-gray-700">Instant Coverage</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
              <FaUsers className="text-blue-500" />
              <span className="text-sm font-medium text-gray-700">4.5M+ Protected</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
              <FaMobileAlt className="text-purple-500" />
              <span className="text-sm font-medium text-gray-700">Mobile First</span>
            </div>
          </div>
        </div>
      </div>

      {/*MTN & GLO Subscription*/}
      <div className="mb-16">
        <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-3 rounded-2xl">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A3967]">
              MTN & GLO Subscription
            </h2>
          </div>
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">
            Subscribe via USSD:
          </h3>
          <ol className="space-y-4 text-lg text-gray-600 leading-relaxed list-decimal list-inside bg-white p-6 rounded-2xl shadow-md">
            <li>Dial *3013#</li>
            <li>Choose your preferred service</li>
            <li>
              Choose your preferred subscription plan (i.e. autorenewal/
              one-off)
            </li>
            <li>Receive confirmation billing message from network</li>
            <li>
              Receive confirmation message from shortcode with url to access the
              service (
              <span className="underline">
                https://shorturl.at/mxES1
              </span>
              )
            </li>
          </ol>
          <div className="flex justify-center">
            <a 
              href="https://cubecover.ai/axa/imt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center mt-8 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">GET FREE INSURANCE NOW</span>
            </a>
          </div>
        </div>
      </div>

      {/*Divider*/}
      <div className="flex justify-center items-center my-20">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-px bg-gradient-to-r from-transparent to-orange-400"></div>
          <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
          <div className="w-40 h-px bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 shadow-lg"></div>
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse delay-300"></div>
          <div className="w-20 h-px bg-gradient-to-l from-transparent to-red-400"></div>
        </div>
      </div>

      {/*AIRTEL Subscription*/}
      <div className="mb-16">
        <div className="bg-gradient-to-br from-white to-orange-50 rounded-3xl p-8 md:p-12 shadow-xl border border-orange-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-gradient-to-br from-orange-500 to-red-500 p-3 rounded-2xl">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A3967]">
              Airtel Subscription
            </h2>
          </div>
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">
            Subscribe via USSD:
          </h3>
          <ol className="space-y-4 text-lg text-gray-600 leading-relaxed list-decimal list-inside bg-white p-6 rounded-2xl shadow-md">
            <li>Dial *312*44#</li>
            <li>Choose your preferred bundle</li>
            <li>Choose your preferred subscription plan (i.e. autorenewal/one-off)</li>
            <li>Receive confirmation billing message from network</li>
            <li>
              Receive confirmation message from shortcode with url to access the
              service (
              <span className="underline">
                https://shorturl.at/mxES1
              </span>
              )
            </li>
          </ol>
          <div className="flex justify-center">
            <a 
              href="https://cubecover.ai/axa/imt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center mt-8 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">GET FREE INSURANCE NOW</span>
            </a>
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

      {/*Digital Health plan on Momo Subscription*/}
      <div className="mb-16">
        <div className="bg-gradient-to-br from-white to-green-50 rounded-3xl p-8 md:p-12 shadow-xl border border-green-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-gradient-to-br from-green-600 to-emerald-600 p-3 rounded-2xl">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A3967]">
              MoMo Digital Health Plan
            </h2>
          </div>
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">
            How to Subscribe:
          </h3>
          <ol className="space-y-4 text-lg text-gray-600 leading-relaxed list-decimal list-inside bg-white p-6 rounded-2xl shadow-md">
            <li>Log into your MoMo app</li>
            <li>Navigate to "MyApps" and tap on "See All"</li>
            <li>Under "Bills & Finance", tap on CubeCover</li>
            <li>Choose the Digital Health Plan</li>
            <li>Click on Purchase</li>
          </ol>
          <div className="flex justify-center">
            <a 
              href="https://cubecover.ai/axa/imt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center mt-8 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">GET FREE INSURANCE NOW</span>
            </a>
          </div>
        </div>
      </div>

      {/*Divider*/}
      <div className="flex justify-center items-center my-20">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-px bg-gradient-to-r from-transparent to-purple-400"></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
          <div className="w-40 h-px bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 shadow-lg"></div>
          <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse delay-300"></div>
          <div className="w-20 h-px bg-gradient-to-l from-transparent to-pink-400"></div>
        </div>
      </div>

      {/*Palmpay Subscription*/}
      <div className="mb-20">
        <div className="bg-gradient-to-br from-white to-purple-50 rounded-3xl p-8 md:p-12 shadow-xl border border-purple-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-2xl">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zM14 6a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h8zM6 8a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 012-2h2z"/>
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A3967]">
              PalmPay SuperCare Plan
            </h2>
          </div>
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">
            How to Subscribe:
          </h3>
          <ol className="space-y-4 text-lg text-gray-600 leading-relaxed list-decimal list-inside bg-white p-6 rounded-2xl shadow-md">
            <li>Log into your Palmpay app</li>
            <li>Click on Insurance</li>
            <li>Select Leadway SuperCare Health Plan</li>
            <li>Click on Next, then click on confirm</li>
          </ol>
          <div className="flex justify-center">
            <a 
              href="https://cubecover.ai/axa/imt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center mt-8 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">GET FREE INSURANCE NOW</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
