"use client"
import React from 'react'
import { phoneNumber } from '@/lib/phone';

function siemensHero() {
  return (
    <div>
      <div
        className="hero h-auto p-[20px] pt-[120px] pb-[50px] bg-cover bg-center relative"
        style={{ backgroundImage: "url('/lg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 hero-content text-center md:text-left text-white">
          <div>
            <h1 className="text-4xl font-bold font-raleway text-white leading-tight">
              Siemens Appliances Service Center in Dubai and Abu Dhabi.
            </h1>
            <p className="py-6 text-lg font-raleway text-white">
              Appliances Repairs UAE is a reliable Siemens service center in Dubai
              and Abu Dhabi. You can rest assured that your appliance will be
              fixed quickly and efficiently with the highest quality parts
              available.
            </p>
            <div className="flex flex-col ml-[-30px] md:flex-row md:gap-x-10 md:justify-start justify-center gap-y-2 px-20">
              <button
                className="px-3 py-4 bg-[#007BC0] text-white hover:text-black hover:text-lg hover:bg-[white] rounded-lg duration-200 shadow-md"
                onClick={() => {
                  window.location.href = `tel:${phoneNumber}`;
                }}
              >
                {phoneNumber}
              </button>
              <button
                className="px-3 py-4 bg-[#007BC0] rounded-lg text-white hover:text-black hover:text-lg hover:bg-[white] duration-200 shadow-md"
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

export default siemensHero
