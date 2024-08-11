"use client";

import { phoneNumber } from "@/libs/phoneNumber";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const ServicesCard = ({ title, description, imageSrc }) => {
  const router = useRouter();

  const handleCallClick = (event) => {
    event.preventDefault();
    gtag_report_conversion(`tel:${phoneNumber}`);
    router.push(`tel:${phoneNumber}`);
  };

  return (
    <div className="mx-5 mb-3 mt-4 flex w-screen max-w-sm transform cursor-pointer flex-col items-center justify-between overflow-hidden rounded shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:text-white lg:mt-10">
      <Image
        className="mx-auto mt-4 w-full md:h-[230px]"
        src={imageSrc}
        alt={title}
        width={180}
        height={150}
      />
      <div className="mb-2 mt-5 w-full px-3 text-xl font-semibold tracking-wide text-black">
        {title}
      </div>
      <p className="mb-5 px-3 text-gray-500">{description}</p>
      <Link
        href={`tel:${phoneNumber}`}
        target="_blank"
        className="mx-4 mb-5 flex flex-shrink-0 justify-center self-end rounded border-4 border-none bg-black px-14 py-2.5 text-white transition duration-300 ease-in-out hover:bg-black"
        onClick={handleCallClick}
      >
        Call Us
      </Link>
    </div>
  );
};

export default ServicesCard;
