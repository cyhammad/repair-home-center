import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { phoneNumber } from "@/lib/phone";

const HeroSection = ({ company = "none", title }) => {
  return (
    <section
      className={`flex items-center justify-center bg-[url('/hero-bg.jpg')] bg-cover bg-fixed bg-center px-5 py-20`}
    >
      <div className="w-full max-w-7xl py-10 lg:py-20">
        <div className="grid lg:grid-cols-7 lg:items-center lg:gap-x-8 xl:gap-x-12">
          <div className="lg:col-span-3">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Your appliances deserve quality repair <br />
              <span className="text-black/40">
                We bring appliances back to life
              </span>
            </h1>
            <p className="mt-3 py-5 text-muted-foreground">
              Trust our well-trained technicians to deliver
              professional & reliable repairs ensuring your appliances are
              in capable hands. Dishwasher Repair, Dryer, Washing
              Machine, Microwave and Refrigerator Repair.
            </p>
            <div className="flex max-w-sm items-center gap-2">
              <Button variant="outline">
                <a href={`tel:${phoneNumber}`}>Call us now</a>
              </Button>
              <Button
                className={`${
                  company === "bosch"
                    ? "bg-[#007BC0]"
                    : company === "lg"
                      ? "bg-[#A50034]"
                      : company === "samsung"
                        ? "bg-[#000000]"
                        : company === "siemens"
                          ? "bg-[#000028]"
                          : "bg-secondary-foreground"
                }`}
              >
                <Link
                  href={`https://wa.me/${phoneNumber}?text=Hey!%20I%20want%20Home%20Appliance%20Repair%20Service.`}
                >
                  Hire using Whatsapp
                </Link>
              </Button>
            </div>
            {company === "none" && (
              <div className="mt-6 lg:mt-12">
                <span className="text-xs font-medium uppercase">
                  Trusted by:
                </span>
                <div className="mt-4 grid grid-cols-2 items-center gap-2 sm:grid-cols-4 sm:justify-items-center">
                  <Image
                    src="/company/bosch-logo.svg"
                    width={100}
                    height={20}
                    alt="bosch logo"
                  />
                  <Image
                    src="/company/lg-logo.svg"
                    width={70}
                    height={20}
                    alt="lg logo"
                  />
                  <Image
                    src="/company/siemens-logo.svg"
                    width={100}
                    height={20}
                    alt="siemens logo"
                  />
                  <Image
                    src="/company/samsung-logo.svg"
                    width={100}
                    height={20}
                    alt="samsung logo"
                  />
                </div>
              </div>
            )}
          </div>
          <div className="mt-10 lg:col-span-4 lg:mt-0">
            <Image
              width={700}
              height={540}
              className="w-full rounded-xl"
              src="/banner.jpg"
              alt="Image Description"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
