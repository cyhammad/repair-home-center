"use client";

import { phoneNumber } from "@/libs/phoneNumber";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const AboutUsCard = ({ title, description }) => {
  const router = useRouter();

  const handleCallClick = (event) => {
    event.preventDefault();
    gtag_report_conversion(`tel:${phoneNumber}`);
    router.push(`tel:${phoneNumber}`);
  };

  return (
    <div className="mb-3 flex transform cursor-pointer flex-col items-center justify-between rounded shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:text-white md:mt-4 md:max-w-[280px] lg:mt-10">
      <div className="w-full px-3 mb-2 mt-10 text-xl font-semibold tracking-wide text-black">
        {title}
      </div>
      <p className="mb-5 px-3 text-gray-500">{description}</p>
      <Link
        href={`tel:${phoneNumber}`}
        target="_blank"
        className="mb-4 flex justify-center rounded self-end mx-4 border-4 border-none bg-pink px-14 py-2.5 text-white transition duration-300 ease-in-out hover:bg-black"
        onClick={handleCallClick}
      >
        Call Us
      </Link>
    </div>
  );
};

export default AboutUsCard;
