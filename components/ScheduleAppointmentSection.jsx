import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { phoneNumber } from "@/lib/phone";

const ScheduleAppointmentSection = ({ company = "none" }) => {
  return (
    <section
      id="about"
      className={`flex w-full items-center justify-center ${company === "bosch" ? "bg-[#007BC0]" : company === "lg" ? "bg-[#A50034]" : company === "samsung" ? "bg-[#000000]" : company === "siemens" ? "bg-[#000028]" : "bg-secondary-foreground"} py-10 text-secondary`}
    >
      <div className="grid w-full max-w-7xl grid-cols-1 gap-5 p-5 md:grid-cols-2 md:place-items-end">
        <span className="w-full text-2xl font-bold">
          Schedule An Appointment
        </span>
        <div className="flex w-full max-w-sm items-center gap-2 md:justify-end">
          <Button variant="secondary">
            <a href={`tel:${phoneNumber}`}>Call us now</a>
          </Button>
          <Button className="bg-transparent" variant="outline">
            <a href={`https://wa.me/${phoneNumber}?text=Hey!%20I%20want%20Home%20Appliance%20Repair%20Service.`}>
              Hire using Whatsapp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ScheduleAppointmentSection;
