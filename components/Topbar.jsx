"use client";

import { phoneNumber } from "@/libs/phoneNumber";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const TopBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  const handleCallClick = (event) => {
    event.preventDefault();
    gtag_report_conversion(`tel:${phoneNumber}`);
    router.push(`tel:${phoneNumber}`);
  };

  const handleWhatsAppClick = (event) => {
    event.preventDefault();
    gtag_report_conversion(`https://wa.me/${phoneNumber}?text=Hello%20I%20need%20your%20help%20with%20my%20appliance%20repairs`);
    router.push(`https://wa.me/${phoneNumber}?text=Hello%20I%20need%20your%20help%20with%20my%20appliance%20repairs`);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className="bg-gray-200/50 duration-300">
          <div className="flex w-full items-center justify-center border-b py-2">
            {phoneIcon}
            <Link
              href={`tel:${phoneNumber}`}
              target="_blank"
              className="mx-3 border-r-2 pr-4 text-xs font-light tracking-widest text-pink md:text-lg"
              onClick={handleCallClick}
            >
              {phoneNumber}
            </Link>
            <div className="flex">
              <p className="mr-3 hidden text-xs font-bold tracking-widest text-pink md:mx-5 md:block md:text-lg">
                HIRE US RIGHT NOW!
              </p>
              <Link
                href={`https://wa.me/${phoneNumber}?text=Hello%20I%20need%20your%20help%20with%20my%20appliance%20repairs`}
                target="_blank"
                className="mr-3 md:border-l-2 pl-4 text-xs font-light tracking-widest text-pink md:mx-2 md:text-lg"
                onClick={handleWhatsAppClick}
              >
                Whatsapp Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const phoneIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="ml-4 h-5 w-5"
  >
    <path
      fillRule="evenodd"
      d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
      clipRule="evenodd"
    />
  </svg>
);

export default TopBar;
