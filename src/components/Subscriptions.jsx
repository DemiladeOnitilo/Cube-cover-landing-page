import React from "react";

const Subscriptions = () => {
  return (
    <div className="px-10 lg:px-0 max-w-5xl mx-auto">
      {/*MTN & GLO Subscription*/}
      <div className=" text-[#1A3967]">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold mt-10 text-center px-6 underline underline-offset-5">
          How to Subscribe Through Our Channel Partners
        </h1>
        <div className="flex flex-col gap-6">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mt-10">
            To Subscribe to the service on MTN & GLO via USSD;
          </h3>
          <ol className="flex flex-col gap-6 sm:gap-8 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl px-6 list-decimal list-inside">
            <li>Dial *3013#</li>
            <li>Choose your preferred service</li>
            <li>Choose your preferred subscription plan (i.e. autorenewal/ one-off)</li>
            <li>Receive confirmation billing message from network</li>
            <li>
              Receive confirmation message from shortcode with url to access the
              service (
              <span className="underline hover:text-blue-700 ease-in-out duration-300 cursor-pointer">
                <a href="https://shorturl.at/mxES1">
                  https://shorturl.at/mxES1
                </a>
              </span>
              )
            </li>
          </ol>
          <span className="flex justify-center border-2 border-[#1A3967] text-base sm:text-xl md:text-2xl my-10 mx-auto py-3 sm:py-4 px-10 sm:px-16 md:px-20 rounded-xl max-w-xs sm:max-w-sm md:max-w-lg">
            GET FREE INSURANCE NOW
          </span>
        </div>
      </div>

      {/*Divider*/}
      <div>
        <div className="w-3/4 h-0.5 bg-gradient-to-r from-transparent via-[#084181D1] to-transparent shadow-[0_0_15px_rgba(96,165,250,0.8)] my-16 mx-auto" />
      </div>

      {/*AIRTEL Subscription*/}
      <div className=" text-[#1A3967]">
        <div className="flex flex-col gap-6">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mt-10">
            To Subscribe to the service on AIRTEL via USSD;
          </h3>
          <ol className="flex flex-col gap-6 sm:gap-8 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl px-6 list-decimal list-inside">
            <li>Dial *312*44#</li>
            <li>Choose your preferred bundle</li>
            <li>Choose your preferred subscription plan (i.e. autorenewal/ one-off)</li>
            <li>Receive confirmation billing message from network</li>
            <li>
              Receive confirmation message from shortcode with url to access the
              service (
              <span className="underline hover:text-blue-700 ease-in-out duration-300 cursor-pointer">
                <a href="https://shorturl.at/mxES1">
                  https://shorturl.at/mxES1
                </a>
              </span>
              )
            </li>
          </ol>
          <span className="flex justify-center border-2 border-[#1A3967] text-base sm:text-xl md:text-2xl mt-10 mx-auto py-3 sm:py-4 px-10 sm:px-16 md:px-20 rounded-xl max-w-xs sm:max-w-sm md:max-w-lg">
            GET FREE INSURANCE NOW
          </span>
        </div>
      </div>

      {/*Divider*/}
      <div>
        <div className="w-3/4 h-0.5 bg-gradient-to-r from-transparent via-[#084181D1] to-transparent shadow-[0_0_15px_rgba(96,165,250,0.8)] my-16 mx-auto" />
      </div>

      {/*Digital Health plan on Momo Subscription*/}
      <div className=" text-[#1A3967]">
        <div className="flex flex-col gap-6">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mt-10">
            To Subscribe to the Digital Health Plan on Momo;
          </h3>
          <ol className="flex flex-col gap-6 sm:gap-8 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl px-6 list-decimal list-inside">
            <li>Log into your MoMo app</li>
            <li>Navigate to "MyApps" and tap on "See All"</li>
            <li>Under "Bills & Finance", tap on CubeCover</li>
            <li>Choose the Digital Health Plan</li>
            <li>Click on Purchase</li>
          </ol>
          <span className="flex justify-center border-2 border-[#1A3967] text-base sm:text-xl md:text-2xl mt-10 mx-auto py-3 sm:py-4 px-10 sm:px-16 md:px-20 rounded-xl max-w-xs sm:max-w-sm md:max-w-lg">
            GET FREE INSURANCE NOW
          </span>
        </div>
      </div>

      {/*Divider*/}
      <div>
        <div className="w-3/4 h-0.5 bg-gradient-to-r from-transparent via-[#084181D1] to-transparent shadow-[0_0_15px_rgba(96,165,250,0.8)] my-16 mx-auto" />
      </div>

      {/*Palmpay Subscription*/}
      <div className=" text-[#1A3967]">
        <div className="flex flex-col gap-6">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mt-10">
            To Subscribe to the SuperCare Plan on Palmpay;
          </h3>
          <ol className="flex flex-col gap-6 sm:gap-8 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl px-6 list-decimal list-inside">
            <li>Log into your Palmpay app</li>
            <li>Click on Insurance</li>
            <li>Select Leadway SuperCare Health Plan</li>
            <li>Click on Next, then click on confirm</li>
          </ol>
          <span className="flex justify-center border-2 border-[#1A3967] text-base sm:text-xl md:text-2xl mt-10 mx-auto py-3 sm:py-4 px-10 sm:px-16 md:px-20 rounded-xl max-w-xs sm:max-w-sm md:max-w-lg">
            GET FREE INSURANCE NOW
          </span>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
