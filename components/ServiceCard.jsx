import { Button } from "@/components/ui/button";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { phoneNumber } from "@/lib/phone";

const ServiceCard = ({ type, title, desc }) => {
  const bgImage =
    type == "tv"
      ? "bg-[url('/services/tv.jpg')]"
      : type == "fridge"
        ? "bg-[url('/services/fridge.jpg')]"
        : type == "dryer"
          ? "bg-[url('/services/dryer.jpg')]"
          : type == "washing-machine"
            ? "bg-[url('/services/washing-machine.jpg')]"
            : type == "oven"
              ? "bg-[url('/services/oven.jpg')]"
              : type == "dishwasher"
                ? "bg-[url('/services/dishwasher.jpg')]"
                : type == "stove"
                  ? "bg-[url('/services/stove.jpg')]"
                  : type == "coffee-maker"
                    ? "bg-[url('/services/coffee-maker.jpg')]"
                    : "";
  console.log("BGGG", bgImage);
  return (
    <div
      className={`min-h-[500px] w-full min-w-[250px] max-w-[500px] overflow-hidden rounded-md ${bgImage} bg-cover bg-center bg-no-repeat`}
    >
      <div className="flex h-full w-full flex-col justify-between bg-black/50 p-5 text-start md:p-7 xl:p-10">
        <h1 className="text-3xl font-semibold text-white">{title}</h1>
        <div className="flex flex-col gap-2">
          <div className="border-l-4 border-yellow-400 bg-black/50 p-4 text-sm">
            <p className="text-white">{desc}</p>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button className="my-3 w-full" variant="secondary">
                Hire us now
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
                      Repair Home Center
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
                <Link
                  href={`tel:${phoneNumber}`}
                  className="group cursor-pointer"
                >
                  Phone number :{" "}
                  <span className="font-semibold group-hover:text-primary">
                    {phoneNumber}
                  </span>
                </Link>
                <div className="flex max-w-sm items-center justify-center gap-2 py-10">
                  <Button variant="outline">
                    <a href={`tel:${phoneNumber}`}>Call us</a>
                  </Button>
                  <Button>
                    <Link
                      href={`https://wa.me/${phoneNumber}?text=Hey!%20I%20want%20Home%20Appliance%20Repair%20Service.`}
                    >
                      Whatsapp
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
