import { phoneNumber } from "@/lib/phone";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import Image from "next/image";

const Topbar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="flex w-full items-center justify-center bg-secondary-foreground px-5 py-2 text-secondary">
          <div className="flex items-center gap-3 text-center text-sm font-light">
            {phoneIcon} Hire us: {phoneNumber}
          </div>
        </div>
      </SheetTrigger>
      <SheetContent
        className="flex flex-col items-center justify-center"
        side="bottom"
      >
        <SheetHeader>
          <SheetTitle className="flex flex-col">
            <div className="flex items-center justify-center gap-2">
              <Image src="/logo.svg" width={40} height={40} alt="logo" />
              <h1 className="cursor-pointer text-lg font-semibold group-hover:text-primary">
                Repair Home Center
              </h1>
            </div>
          </SheetTitle>
          <SheetDescription>
            The most professional home appliance services you can get in Dubai
            and Abu Dhabi. You can hire us using call or whatsapp. We are
            available 24/7.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-2">
          <a href={`tel:${phoneNumber}`} className="group cursor-pointer">
            Phone number :{" "}
            <span className="font-semibold group-hover:text-primary">
              {phoneNumber}
            </span>
          </a>
          <div className="flex max-w-sm items-center justify-center gap-2 py-10">
            <Button variant="outline">
              <a href={`tel:${phoneNumber}`}>Call us</a>
            </Button>
            <Button>
              <a href={`https://wa.me/${phoneNumber}?text=Hey!%20I%20want%20Home%20Appliance%20Repair%20Service.`}>Whatsapp</a>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const phoneIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 392 398"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M249.526 397.244C236.076 397.246 218.617 392.986 196.006 381.334C164.602 365.15 128.526 337.455 94.4239 303.354C60.3219 269.253 32.6289 233.178 16.4449 201.774C-8.70911 152.963 0.592895 128.133 12.8279 115.899L59.6319 69.096C62.2109 66.329 65.9729 65.124 70.0749 65.774C78.4439 67.103 95.0759 79.439 107.555 89.553C120.034 99.667 135.545 113.385 138.579 121.297C140.168 125.442 139.6 129.643 137.022 132.824C136.803 133.094 136.571 133.353 136.325 133.599L98.9709 170.953C101.121 179.408 119.34 205.989 155.566 242.216C191.792 278.441 218.374 296.659 226.829 298.81L264.182 261.456C264.428 261.21 264.687 260.977 264.957 260.759C266.515 259.495 270.811 256.814 277.024 259.196C286.049 262.657 300.863 279.788 308.889 289.69C316.916 299.594 330.609 317.633 332.124 327.18C333.037 332.93 330.461 336.442 328.759 338.075L281.882 384.954C275.317 391.521 265.115 397.244 249.526 397.244ZM69.9799 87.032L26.9709 130.04C12.6199 144.391 25.3559 175.403 34.2239 192.611C49.4859 222.226 75.8879 256.532 108.567 289.21C141.246 321.89 175.553 348.292 205.169 363.556C222.378 372.425 253.395 385.16 267.742 370.81L311.084 327.468C308.57 322.712 302.646 313.747 293.354 302.282C284.754 291.671 277.65 284.325 273.364 280.559L239.218 314.705C228.631 325.291 210.718 314.74 194.591 303.021C179.263 291.882 160.379 275.308 141.42 256.347C122.462 237.39 105.89 218.509 94.7549 203.183C83.0399 187.059 72.4899 169.148 83.0749 158.563L116.876 124.762C107.319 114.427 81.0629 93.239 69.9799 87.032Z"
      fill="#F1F5F9"
    />
    <path
      d="M313.199 214.947C307.677 214.947 303.199 210.47 303.199 204.947C303.199 141.025 251.193 89.019 187.27 89.019C181.748 89.019 177.27 84.542 177.27 79.019C177.27 73.496 181.748 69.019 187.27 69.019C262.221 69.019 323.199 129.996 323.199 204.947C323.199 210.471 318.722 214.947 313.199 214.947Z"
      fill="#F1F5F9"
    />
    <path
      d="M250.235 226.857C244.713 226.857 240.235 222.378 240.235 216.857C240.235 181.085 211.132 151.983 175.361 151.983C169.839 151.983 165.361 147.506 165.361 141.983C165.361 136.46 169.839 131.983 175.361 131.983C222.161 131.983 260.235 170.057 260.235 216.857C260.235 222.379 255.758 226.857 250.235 226.857Z"
      fill="#F1F5F9"
    />
    <path
      d="M381.463 215.936C375.941 215.936 371.463 211.459 371.463 205.936C371.463 103.828 288.392 20.756 186.282 20.756C180.76 20.756 176.282 16.279 176.282 10.756C176.282 5.23299 180.76 0.755997 186.282 0.755997C299.419 0.755997 391.463 92.799 391.463 205.936C391.463 211.459 386.985 215.936 381.463 215.936Z"
      fill="#F1F5F9"
    />
  </svg>
);

export default Topbar;
