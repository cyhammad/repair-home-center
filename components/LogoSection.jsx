
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { boschLogo, samsungLogo, lgLogo } from "@/libs/logos";

const LogoSection = () => {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex h-[70px] w-full justify-center scroll-smooth bg-white ease-in-out ${isSticky ? "fixed top-0 z-20 shadow-md" : ""}`}
    >
      <div className="flex h-full w-full max-w-7xl items-center justify-between bg-white px-4 py-2">
        {pathname === "/" ? (
          <div className="flex items-center">
            <Image src="/logo-svg.svg" width={50} height={50} alt="Logo" />
            <h2 className="mx-6 text-lg font-bold">
              Appliance Service UAE
            </h2>
          </div>
        ) : pathname === "/service-center/bosch" ? (
          <Image src="/bosch.svg" width={150} height={50} alt="bosch logo" />
        ) : pathname === "/service-center/siemens" ? (
          <Image src="/siemens.svg" width={150} height={50} alt="bosch logo" />
        ) : pathname === "/service-center/lg" ? (
          lgLogo
        ) : pathname === "/service-center/samsung" ? (
          samsungLogo
        ) :pathname === "/service-center/miele" ? (
          <Image src="/miele.svg" width={150} height={50} alt="bosch logo" />
        ):(null)}
        <div className="hidden md:block">
          <ul className="flex gap-10 text-lg font-semibold text-black">
            <li className="text-pink hover:text-black">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-pink">
              <Link href="#aboutus">About Us</Link>
            </li>
            <li className="hover:text-pink">
              <Link href="#services">Services</Link>
            </li>
            <li className="hover:text-pink">
              <Link href="">Contact Us</Link>
            </li>
          </ul>
        </div>
        <button className="text-2xl md:hidden" onClick={toggleMenu}>
          {showMenu ? "X" : "☰"}
        </button>
      </div>
      {showMenu && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black text-white"
          onClick={() => setShowMenu(false)}
        >
          <ul className="text-xl font-semibold text-white">
            <li>
              <Link href="">Home</Link>
            </li>
            <li>
              <Link href="">About Us</Link>
            </li>
            <li>
              <Link href="">Services</Link>
            </li>
            <li>
              <Link href="">Contact Us</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default LogoSection;
