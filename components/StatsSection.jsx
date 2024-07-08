import { Activity, CreditCard, DollarSign, Users } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function StatsSection({ company = "none" }) {
  return (
    <div
      className={`grid grid-cols-2 gap-4 ${
        company === "bosch"
          ? "bg-[#007BC0]"
          : company === "lg"
            ? "bg-[#A50034]"
            : company === "samsung"
              ? "bg-[#000000]"
              : company === "siemens"
                ? "bg-[#000028]"
                : "bg-primary"
      } px-4 py-5 text-white md:flex md:justify-between md:gap-3`}
    >
      <div className="flex flex-row items-center">
        <Image
          className="flex h-14 w-14 rounded-full border-2 border-white px-4 py-3 md:h-20 md:w-20"
          src="/stats/stat1.svg"
          width={75} // Default width for larger screens
          height={50} // Default height for larger screens
          alt="Logo"
        />
        <p className="ml-3 mt-3 text-sm font-medium tracking-wide md:mt-0">
          Customer Satisfaction
        </p>
      </div>

      <div className="flex flex-row items-center">
        <Image
          className="flex h-14 w-14 rounded-full border-2 border-white px-4 py-3 md:h-20 md:w-20"
          src="/stats/stat2.svg"
          width={80}
          height={50}
          alt="Logo"
        />
        <p className="ml-3 mt-3 text-sm font-medium tracking-wide md:mt-0">
          Appliance Service Center
        </p>
      </div>
      <div className="flex flex-row items-center">
        <Image
          className="flex h-14 w-14 rounded-full border-2 border-white px-4 py-3 md:h-20 md:w-20"
          src="/stats/stat3.svg"
          width={80}
          height={50}
          alt="Logo"
        />
        <p className="ml-3 mt-3 text-sm font-medium tracking-wide md:mt-0">
          Expert Technicians
        </p>
      </div>
      <div className="flex flex-row items-center">
        <Image
          className="flex h-14 w-14 rounded-full border-2 border-white px-4 py-1 md:h-20 md:w-20"
          src="/stats/stat4.svg"
          width={80}
          height={50}
          alt="Logo"
        />
        <p className="ml-3 mt-3 text-sm font-medium tracking-wide md:mt-0">
          Genuine Spare Parts
        </p>
      </div>
      <div className="flex flex-row items-center">
        <Image
          className="flex h-14 w-14 rounded-full border-2 border-white px-4 md:h-20 md:w-20"
          src="/stats/stat5.svg"
          width={50}
          height={40}
          alt="Logo"
        />
        <p className="ml-3 mt-3 text-sm font-medium tracking-wide md:mt-0">
          Transparent Pricing
        </p>
      </div>
    </div>
  );
}
