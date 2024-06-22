"use client";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { phoneNumber } from "@/lib/phone";
import Image from "next/image";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Navlinks = () => {
  const router = useRouter();
  return (
    <div className="">
      <div className="hidden sm:block">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#services" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Services
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex items-center sm:hidden">
        <Sheet>
          <SheetTrigger>{bars}</SheetTrigger>
          <SheetContent side="left">
            <SheetHeader className="py-5">
              <SheetTitle className="flex items-center gap-2">
                <Image src="/logo.svg" width={30} height={30} alt="logo" />
                <span className="text-primary">Repair Home Center</span>
              </SheetTitle>
              <SheetDescription className="text-start text-xs">
                We repair your home with care and precision. We are a team of
                home appliances repairs in Dubai and Abu Dhabi.
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col justify-between">
              <div className="flex flex-col items-center gap-3 py-10">
                <SheetClose asChild>
                  <button onClick={() => router.push("/")}>Home</button>
                </SheetClose>
                <SheetClose asChild>
                  <button onClick={() => router.push("#about")}>About</button>
                </SheetClose>
                <SheetClose asChild>
                  <button onClick={() => router.push("#services")}>
                    Services
                  </button>
                </SheetClose>
                <SheetClose asChild>
                  <button onClick={() => router.push("#contact")}>
                    Contact
                  </button>
                </SheetClose>
              </div>
              <div className="flex flex-col gap-2 pt-20">
                <Button variant="outline">
                  <Link href={`tel:${phoneNumber}`}>Call us</Link>
                </Button>
                <Button>
                  <Link href={`https://wa.me/${phoneNumber}`}>Whatsapp</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

const bars = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 80 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M75 35H5C2.2 35 0 32.8 0 30C0 27.2 2.2 25 5 25H75C77.8 25 80 27.2 80 30C80 32.8 77.8 35 75 35ZM75 10H5C2.2 10 0 7.8 0 5C0 2.2 2.2 0 5 0H75C77.8 0 80 2.2 80 5C80 7.8 77.8 10 75 10ZM5 50H75C77.8 50 80 52.2 80 55C80 57.8 77.8 60 75 60H5C2.2 60 0 57.8 0 55C0 52.2 2.2 50 5 50Z"
      fill="currentColor"
    />
  </svg>
);

export default Navlinks;
