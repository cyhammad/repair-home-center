import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { phoneNumber } from "@/lib/phone";
import { CheckCheck, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutSection = ({ company = "none" }) => {
  // Make first letter capital of company
  const companyPascalCase =
    company !== "none"
      ? company.charAt(0).toUpperCase() + company.slice(1)
      : "";
  return (
    <section
      id="about"
      className={`flex w-full items-center justify-center bg-secondary py-10`}
    >
      <div className="grid w-full max-w-7xl grid-cols-1 md:grid-cols-2">
        <div className="flex items-center">
          <div className="relative h-fit p-5">
            <Image
              src="/lg.jpg"
              width={500}
              height={500}
              alt="Image Description"
              className="w-full pb-5 pr-5"
            />
            
          </div>
        </div>
        <div className="flex flex-col p-5">
          <div className="flex items-center gap-2 py-4">
            <Zap className="h-4 w-4 text-yellow-400" />
            <span className="text-lg font-light">About us</span>
          </div>
          <h1 className="text-3xl font-bold">
            {company === "none" && "Appliance Service UAE: "}Your Trusted Appliance
            Repair Experts
          </h1>
          <div className="my-4 border-l-4 border-yellow-400 px-5">
            We take pride in being your trusted partner for all your home
            appliance repair needs. Our mission is simple: to keep your
            household running smoothly by ensuring your appliances are in
            top-notch condition.
            <br />
            <br />
            <span className="text-xl font-bold">Repair Services:</span>
            <ul className="flex flex-col gap-2 px-1 pt-3 font-medium">
              <li className="flex items-center gap-2">
                <CheckCheck className="h-5 w-5 text-yellow-400" />
                {companyPascalCase} Washing Machine Repair
              </li>
              <li className="flex items-center gap-2">
                <CheckCheck className="h-5 w-5 text-yellow-400" />
                {companyPascalCase} Refrigerator Repair
              </li>
              <li className="flex items-center gap-2">
                <CheckCheck className="h-5 w-5 text-yellow-400" />
                {companyPascalCase} Stove/Cooker Repair
              </li>
              <li className="flex items-center gap-2">
                <CheckCheck className="h-5 w-5 text-yellow-400" />
                {companyPascalCase} Dryer Repair
              </li>
              {company === "bosch" || "siemens" ? (
                <li className="flex items-center gap-2">
                  <CheckCheck className="h-5 w-5 text-yellow-400" />
                  {companyPascalCase} Coffee Machine Repair
                </li>
              ) : (
                <li className="flex items-center gap-2">
                  <CheckCheck className="h-5 w-5 text-yellow-400" />
                  {companyPascalCase} Television Repair
                </li>
              )}
              <li className="flex items-center gap-2">
                <CheckCheck className="h-5 w-5 text-yellow-400" />
                {companyPascalCase} Dishwasher Repair
              </li>
              <li className="flex items-center gap-2">
                <CheckCheck className="h-5 w-5 text-yellow-400" />
                {companyPascalCase} Gas Oven Repair
              </li>
            </ul>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button className="my-3 w-fit px-10" variant="secondary">
                Call us now
              </Button>
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
                      Appliance Service UAE
                    </h1>
                  </div>
                </SheetTitle>
                <SheetDescription>
                  The most professional home appliance services you can get in
                  Dubai and Abu Dhabi. You can hire us using call or whatsapp.
                  We are available 24/7.
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-2">
                <a
                  href={`tel:${phoneNumber}`}
                  className="group cursor-pointer"
                >
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
                    {/* Write the message "Hey! I want Home Appliance Repair Service." */}
                    <a
                      href={`https://wa.me/${phoneNumber}?text=Hey!%20I%20want%20Home%20Appliance%20Repair%20Service.`}
                    >
                      Whatsapp
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
