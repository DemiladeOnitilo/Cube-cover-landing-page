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
    <div className="px-10 lg:px-0 max-w-7xl mx-auto">
      {/*Hero Section*/}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 gap-12">
        <div className="flex flex-col gap-6 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-semibold text-[#1A3967] leading-tight">
            Welcome to Cube Cover
          </h1>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1A3967]">
            Smarter insurance for a digital world
          </h2>
          <p className="text-lg md:text-xl text-[#4F6B89]">
            Trusted by over 4.5 million users, across partner platforms.
          </p>
        </div>
        <div className="flex">
          <img
            src={headerPhoto}
            alt="Cube Cover Insurance Platform"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/*Hero Card Section*/}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 px-6 mt-20">
        {cardInfo.map((items, index) => (
          <div
            to={items.to ? items.to : null}
            key={index}
            className="border-1 border-blue-100 rounded-xl p-8 w-full"
          >
            <div className="flex gap-2 items-center mb-4 ">
              <span className="text-blue-600">{items.img}</span>
              <h3 className="text-[#1A3967] text-3xl font-semibold">
                {items.name}
              </h3>
            </div>
            <div className="flex flex-col gap-2 text-lg">
              <p>{items.descriptionOne}</p>
              <p>{items.descriptionTwo}</p>
            </div>
          </div>
        ))}
      </div>

      {/*Our Impact*/}
      <div className="px-6 mt-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1A3967] mt-20">
            Our Impact
          </h2>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <div className="flex flex-col text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#1a3967]">
              4.5million+
            </h2>
            <p>lives covered</p>
          </div>
          <div className="flex flex-col col-span-1 lg:col-span-2 items-center text-center">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#1a3967]">
              16.2million+
            </h2>
            <p>transactions processed across partner platfroms</p>
          </div>
          <div className="flex flex-col md:col-span-2 lg:col-span-1 items-center text-center lg:text-right">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#1a3967]">
              10+
            </h2>
            <p>Partners</p>
          </div>
          <div className="flex col-span-1 lg:col-span-2 justify-center items-center text-center">
            <p>
              Over{" "}
              <span className="text-4xl md:text-5xl font-semibold text-[#1a3967]">
                3000
              </span>{" "}
              partner pharmacies across the country
            </p>
          </div>
          <div className="flex col-span-1 lg:col-span-2 justify-center items-center text-center">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#1a3967]">
              97%
            </h2>
            <p className="ml-2"> of customers say they would recommend us</p>
          </div>
        </div>
      </div>

      {/*Divider*/}
      <div>
        <div className="w-3/4 h-0.5 bg-gradient-to-r from-transparent via-[#084181D1] to-transparent shadow-[0_0_15px_rgba(96,165,250,0.8)] my-16 mx-auto" />
      </div>

      {/*Our Products*/}
      <div className="px-4 md:px-6 mt-20">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1A3967] mt-20">
            Our Products
          </h2>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 mt-12 bg-blue-50 rounded-xl">
          {ourProducts.map((items, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row gap-4 items-center text-center bg-white py-20 px-10 rounded-xl"
            >
              <span className="text-blue-600">{items.img}</span>
              <h3 className="text-[#1A3967] text-3xl font-semibold">
                {items.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Home;