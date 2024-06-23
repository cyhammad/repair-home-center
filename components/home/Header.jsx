"use client";

import Image from "next/image";
import Navlinks from "./NavLinks";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
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
    <header
      className={`${window.scrollY > 30 ? "mt-0" : "mt-[36px]"} ${isVisible ? "fixed top-0" : "-top-100 absolute"} z-50 flex w-full items-center justify-center bg-white px-5 py-3 shadow transition-all duration-200 ease-in-out`}
    >
      <div className="flex w-full max-w-7xl items-center justify-between gap-5">
        <Link href="/" className="group flex items-center gap-2">
          <Image src="/logo.svg" width={40} height={40} alt="logo" />
          <h1 className="cursor-pointer text-lg font-semibold group-hover:text-primary">
            Repair Home Center
          </h1>
        </Link>
        <Navlinks />
      </div>
    </header>
  );
};

export default Header;
