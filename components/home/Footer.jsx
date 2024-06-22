import { phoneNumber } from "@/lib/phone";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-primary-foreground text-primary">
      <div className="grid w-full max-w-7xl grid-cols-1 px-5 py-10 md:grid-cols-2">
        <div className="flex flex-col gap-3">
          <Link href="/" className="group flex items-center gap-2">
            <Image src="/logo.svg" width={40} height={40} alt="logo" />
            <h1 className="cursor-pointer text-lg font-semibold group-hover:text-primary">
              Repair Home Center
            </h1>
          </Link>
          <span className="text-sm">
            When your appliances act up, trust Repair Home Center to bring them
            back to life. Call us at{" "}
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
      <div className="flex w-full justify-center gap-1 border-t py-5 text-center text-xs">
        © 2024 Repair Home Center. All rights reserved. Code by{" "}
        <Link
          className="font-bold hover:underline"
          href="https://github.com/cyhammad"
        >
          cyhammad
        </Link>{" "}
        <Heart className="h-4 w-4 text-red-400" />
      </div>
    </div>
  );
};

export default Footer;
