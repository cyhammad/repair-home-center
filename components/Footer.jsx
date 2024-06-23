import { phoneNumber } from "@/lib/phone";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = ({
  logo = (
    <Link href="/" className="group flex items-center gap-2">
      <Image src="/logo.svg" width={40} height={40} alt="logo" />
      <h1 className="cursor-pointer text-lg font-semibold group-hover:text-primary">
        Repair Home Center
      </h1>
    </Link>
  ),
}) => {
  return (
    <footer className="flex w-full flex-col items-center justify-center border-t border-black/20 bg-primary-foreground text-primary">
      <div className="grid w-full max-w-7xl grid-cols-1 px-5 py-10 md:grid-cols-2">
        <div className="flex flex-col gap-3">
          {logo}
          <span className="text-sm">
            When your appliances act up, trust us to bring them back to life.
            Call us at{" "}
            <Link
              className="font-bold hover:underline"
              href={`tel:${phoneNumber}`}
            >
              {phoneNumber}
            </Link>{" "}
            or visit our website to schedule a repair. Your home deserves the
            best!
          </span>
        </div>
      </div>
      <div className="w-full justify-center gap-1 border-t border-black/20 py-5 text-center text-xs">
        © 2024 Repair Home Center. All rights reserved. Code by{" "}
        <Link
          className="font-bold hover:underline"
          href="https://github.com/cyhammad"
        >
          cyhammad
        </Link>
        .
      </div>
    </footer>
  );
};

export default Footer;
