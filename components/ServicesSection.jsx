import { Wrench } from "lucide-react";
import React from "react";
import ServiceCard from "./ServiceCard";

const ServicesSection = ({ company = "none" }) => {
  return (
    <section
      id="services"
      className="flex w-full items-center justify-center px-5 py-20"
    >
      <div className="flex w-full max-w-7xl flex-col items-center gap-3 text-center">
        <div className="flex items-center gap-2">
          <Wrench className="h-5 w-5 text-yellow-500" />
          <span className="text-lg">Our Services</span>
        </div>
        <h1 className="text-4xl font-bold">
          If it needs repairing, we can fix it!
        </h1>
        <span className="max-w-3xl text-sm font-medium text-primary/70">
          Certainly! Trust is the cornerstone of our business. Our skilled
          technicians undergo rigorous training and certification. When they
          arrive at your doorstep, you can trust that they'll diagnose and
          repair your appliances with expertise.
        </span>
        <div className="grid w-full grid-cols-1 gap-5 py-10 sm:grid-cols-2 md:grid-cols-3">
          <ServiceCard
            type="washing-machine"
            title="Washing Machine Repair"
            desc="From mysterious leaks to stubborn spin cycles, we'll have your washing machine back in action. Trust Repair Home Center for hassle-free laundry days!"
          />
          <ServiceCard
            type="dryer"
            title="Dryer Repair"
            desc="Is your dryer not drying clothes efficiently? Our skilled technicians will diagnose and fix the issue promptly. Trust us to keep your laundry routine hassle-free."
          />
          {(company == "none" || company == "samsung" || company == "lg") && (
            <ServiceCard
              type="tv"
              title="Tv Repair"
              desc="When your TV screen goes dark or the sound disappears, we are here to bring your entertainment back to life. Whether it's a plasma, LED, or smart TV, we've got you covered!"
            />
          )}
          <ServiceCard
            type="stove"
            title="Stove/Cooker Repair"
            desc="From faulty burners to temperature inconsistencies, we will ensure your cooker is back in action. Cooking made easy with Repair Home Center!"
          />
          <ServiceCard
            type="dishwasher"
            title="Dishwasher Repair"
            desc="Tired of handwashing dishes? Our team will tackle any dishwasher issue, so you can enjoy sparkling clean plates without the effort."
          />
          <ServiceCard
            type="oven"
            title="Oven Repair"
            desc="Don't let a malfunctioning oven ruin your culinary adventures. We will have it baking, roasting, and broiling perfectly again."
          />
          <ServiceCard
            type="fridge"
            title="Refrigerator Repair"
            desc="From cooling woes to mysterious leaks, we're the experts who'll revive your refrigerator. Trust Repair Home Center for reliable fridge repairs!"
          />
          {(company == "none" ||
            company == "siemens" ||
            company == "bosch") && (
            <ServiceCard
              type="coffee-maker"
              title="Coffee Maker Repair"
              desc="Is your coffee maker not brewing the perfect cup? Our skilled technicians will diagnose and fix the issue promptly. Trust us to keep your mornings hassle-free!"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
