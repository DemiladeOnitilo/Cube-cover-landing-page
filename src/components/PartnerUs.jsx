import React from "react";
import mission from "../assets/Missions-image.png";
import vision from "../assets/Visions-image.png";
import partner from "../assets/Partner-image.png";
import { FaCheck } from "react-icons/fa";

const PartnerUs = () => {
  return (
    <div className="px-6 lg:px-0 max-w-7xl mt-20 mx-auto text-[#1A3967]">
      {/* Mission */}
      <div className="flex flex-col items-center text-center gap-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
          <h1 className="text-5xl md:text-6xl font-semibold">
            Our Mission
          </h1>
          <img
            src={mission}
            alt="Mission"
            className="w-56"
          />
        </div>
        <p className="text-2xl md:text-3xl max-w-4xl leading-relaxed">
          Our mission at CubeCover is to revolutionize insurance accessibility
          by seamlessly embedding innovative, affordable microinsurance
          solutions into everyday digital platforms. We are committed to
          empowering individuals and businesses with the protection they need,
          wherever they are, through technology-driven partnerships and
          user-centric experiences.
        </p>
      </div>

      {/* Vision */}
      <div className="flex flex-col items-center text-center gap-6 mt-16">
        <div className="flex flex-col sm:flex-row-reverse items-center justify-center gap-6 w-full">
          <h1 className="text-5xl md:text-6xl font-semibold">
            Our Vision
          </h1>
          <img
            src={vision}
            alt="Vision"
            className="w-56"
          />
        </div>
        <p className="text-2xl md:text-3xl max-w-4xl leading-relaxed">
          To lead the global transformation of insurance by making it
          universally accessible and seamlessly integrated into everyday digital
          experiences.
        </p>
      </div>

      {/* Divider */}
      <div>
        <div className="w-3/4 h-0.5 bg-gradient-to-r from-transparent via-[#084181D1] to-transparent shadow-[0_0_15px_rgba(96,165,250,0.8)] my-16 mx-auto" />
      </div>

      {/* Partner With Us */}
      <div className="px-6 py-10 mb-20">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Partner With Us
        </h2>
        <h3 className="text-3xl md:text-4xl font-semibold text-center mb-10">
          Why Partner With Us?
        </h3>
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10">
          <div className="flex flex-col gap-10 max-w-4xl w-full">
            <div className="flex gap-4 items-start">
              <div className="flex items-center justify-center border-2 border-[#1A3967] rounded-full w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 p-2">
                <FaCheck className="text-[#1A3967]" size={30} />
              </div>
              <div>
                <h4 className="text-3xl md:text-4xl font-semibold mb-2">
                  Tailored Solutions
                </h4>
                <p className="text-lg md:text-xl leading-relaxed">
                  We understand that every platform has unique needs. Our
                  products are customizable to fit your specific requirements.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex items-center justify-center border-2 border-[#1A3967] rounded-full w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 p-2">
                <FaCheck className="text-[#1A3967]" size={30} />
              </div>
              <div>
                <h4 className="text-3xl md:text-4xl font-semibold mb-2">
                  Enhanced User Engagement
                </h4>
                <p className="text-lg md:text-xl leading-relaxed">
                  By embedding insurance, you provide your users with immediate
                  access to protection, boosting their engagement and loyalty.
                </p>
              </div>
            </div>

           <div className="flex gap-4 items-start">
              <div className="flex items-center justify-center border-2 border-[#1A3967] rounded-full w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 p-2">
                <FaCheck className="text-[#1A3967]" size={30} />
              </div>
              <div>
                <h4 className="text-3xl md:text-4xl font-semibold mb-2">
                  Dedicated Support
                </h4>
                <p className="text-lg md:text-xl leading-relaxed">
                  Our team is here to assist you at every stage, from
                  integration to ongoing support, ensuring you maximize the
                  benefits of our products.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={partner}
              alt="Partner-with-us"
              className="w-60 sm:w-72 md:w-80 lg:w-96"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerUs;
