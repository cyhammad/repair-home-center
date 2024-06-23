import { phoneNumber } from "@/lib/phone";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FixedCallButtons = () => {
  return (
    <div className="fixed bottom-0 right-0 flex flex-col gap-2 p-3">
      <Link
        href={`whatsapp://send?phone=${phoneNumber}`}
        className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-black/40"
      >
        <Image src="/whatsapp.svg" width={42} height={42} alt="whatsapp icon" />
      </Link>
      <Link
        href={`tel:${phoneNumber}`}
        className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-black/50"
      >
        <Image src="/phone.svg" width={36} height={36} alt="phone icon" />
      </Link>
    </div>
  );
};

export default FixedCallButtons;
