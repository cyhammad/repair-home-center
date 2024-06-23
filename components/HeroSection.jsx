import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { phoneNumber } from "@/lib/phone";

const HeroSection = ({ company = "none" }) => {
  return (
    <section
      className={`flex items-center justify-center ${company === "none" ? "bg-[url('/hero-bg.jpg')]" : "border-b border-black/20 bg-white"} bg-cover bg-fixed bg-center px-5 py-20`}
    >
      <div className="w-full max-w-7xl py-10 lg:py-20">
        <div className="grid lg:grid-cols-7 lg:items-center lg:gap-x-8 xl:gap-x-12">
          <div className="lg:col-span-3">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Reliable, and Affordable Home Appliance Repairs
            </h1>
            <p className="mt-3 py-5 text-xl text-muted-foreground">
              We understand the importance of a smoothly functioning home. When
              your appliances break down, it disrupts your daily life. Our team
              of skilled technicians is dedicated to restoring your appliances
              promptly and efficiently.
              <br />
              <br />
              Official authorized service center
              <br /> Available in{" "}
              <span className="font-semibold text-primary">Dubai</span> and{" "}
              <span className="font-semibold text-primary">Abu Dhabi</span>.
            </p>
            <div className="flex max-w-sm items-center gap-2">
              <Button variant="outline">
                <Link href={`tel:${phoneNumber}`}>Call us now</Link>
              </Button>
              <Button
                className={
                  company === "bosch"
                    ? "bg-[#007BC0]"
                    : company === "lg"
                      ? "bg-[#A50034]"
                      : company === "samsung"
                        ? "bg-[#000000]"
                        : company === "siemens"
                          ? "bg-[#000028]"
                          : "bg-secondary-foreground"
                }
              >
                <Link href={`https://wa.me/${phoneNumber}`}>
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
