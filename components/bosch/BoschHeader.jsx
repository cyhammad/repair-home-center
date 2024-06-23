"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navlinks from "../home/NavLinks";

const BoschHeader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 30 && window.scrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);
  return (
    <>
      <div className="h-2 w-full bg-[url('/company/bosch-top-border.svg')] bg-cover bg-center"></div>
      <header
        className={`${isVisible ? "fixed top-0" : "-top-100 absolute"} ${window.scrollY > 30 ? "mt-0" : "mt-2"} z-50 flex w-full items-center justify-center bg-white px-5 py-5 shadow transition-all duration-200 ease-in-out`}
      >
        <div className="flex w-full max-w-7xl items-center justify-between gap-5">
          <Link
            href="/services-centers/bosch"
            className="group flex items-center gap-2"
          >
            <Image
              src="/company/bosch-logo.svg"
              width={120}
              height={50}
              alt="logo"
            />
          </Link>
          <Navlinks />
        </div>
      </header>
    </>
  );
};

export default BoschHeader;
