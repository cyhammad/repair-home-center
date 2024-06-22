import { Zap } from "lucide-react";
import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <div className="flex w-full items-center justify-center bg-secondary-foreground py-10 text-secondary">
      <div className="grid w-full max-w-7xl grid-cols-1 md:grid-cols-2">
        <div className="flex items-center">
          <div className="relative h-fit p-5">
            <Image
              src="/about1.jpg"
              width={500}
              height={500}
              alt="Image Description"
              className="w-full pb-5 pr-5"
            />
            <div className="absolute bottom-5 right-5 h-[160px] w-[250px] bg-[url('/about2.jpg')] bg-cover bg-center">
              <div className="h-full w-full bg-yellow-500/40"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-5">
          <div className="flex items-center gap-2 py-4">
            <Zap className="h-4 w-4 text-yellow-400" />
            <span className="text-lg font-light">About us</span>
          </div>
          <h1 className="text-3xl font-bold">
            Repair Home Center: Your Trusted Appliance Repair Experts
          </h1>
          <div className="my-4 border-l-4 border-yellow-400 px-5">
            At Repair Home Center, we take pride in being your trusted partner
            for all your home appliance repair needs. Our mission is simple: to
            keep your household running smoothly by ensuring your appliances are
            in top-notch condition.
            <br />
            <br />
            <span className="font-bold">Why Choose Repair Home Center?</span>
            <ol className="list-decimal p-5">
              <li>
                Experience and Expertise: With years of experience under our
                belt, our team of skilled technicians knows the ins and outs of
                various appliances.
              </li>
              <li>
                Prompt Service: We understand that a broken appliance can
                disrupt your daily routine. That's why we prioritize prompt
                service.
              </li>
              <li>
                Transparent Pricing: No surprises here! We believe in
                transparent pricing.
              </li>
              <li>
                Quality Repairs: Our commitment to quality extends to every
                repair job.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
