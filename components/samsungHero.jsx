
"use client"
import React from 'react'
import { phoneNumber } from '@/lib/phone';

function samsungHero() {
  return (
    <div>
       <div
          className="hero h-auto p-[20px] pt-[120px] pb-[50px]"
          style={{ backgroundImage: "url('/samsung.jpg')" }}
        >
          <div className="hero-overlay bg-opacity-60" />
          <div className="hero-content text-center md:text-left text-white">
            <div>
              <h1 className="text-3xl mt-3 font-bold  font-raleway text-white leading-tight">
                <span>
                  Samsung Appliances Service Center in Dubai and Abu Dhabi.
                </span>
              </h1>
              <p className="py-6 text-lg font-raleway">
                Appliances Repairs UAE is a reliable Samsung service center in
                Dubai and Abu Dhabi, you can rest assured that your appliance
                will be fixed quickly and efficiently with the highest quality
                parts available.
              </p>
              <div className="flex flex-col md:flex-row md:gap-x-10 md:justify-start md:px-0 justify-center gap-y-2 px-10">
                <button
                  className="px-5 py-4 bg-[black] text-white hover:text-black hover:text-lg hover:bg-[white] rounded duration-200 shadow-md"
                  onClick={() => {
                    window.location.href = `tel:${phoneNumber}`;
                    gtag_report_conversion(`tel:${phoneNumber}`);
                  }}
                >
                  {phoneNumber}
                </button>
                <button
                  className="px-5 py-4 bg-[black] text-white hover:text-black hover:text-lg hover:bg-[white] rounded duration-200 shadow-md"
                  onClick={() => {
                    window.location.href = `//api.whatsapp.com/send?phone=${phoneNumber}&text=Hey, I want Home Appliance Repair Service.`;
                  }}
                >
                  Whatsapp Now
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default samsungHero
