import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { phoneNumber } from "@/lib/phone";

const ScheduleAppointmentSection = () => {
  return (
    <section
      id="about"
      className="flex w-full items-center justify-center bg-secondary-foreground py-10 text-secondary"
    >
      <div className="grid w-full max-w-7xl grid-cols-1 gap-5 md:place-items-end md:grid-cols-2 p-5">
        <span className="w-full text-2xl font-bold">
          Schedule An Appointment
        </span>
        <div className="flex w-full max-w-sm items-center md:justify-end gap-2">
          <Button variant="secondary">
            <Link href={`tel:${phoneNumber}`}>Call us now</Link>
          </Button>
          <Button className="bg-transparent" variant="outline">
            <Link href={`https://wa.me/${phoneNumber}`}>
              Hire using Whatsapp
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ScheduleAppointmentSection;
