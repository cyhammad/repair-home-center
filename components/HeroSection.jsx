import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="container py-10 lg:py-20">
      {/* Grid */}
      <div className="grid lg:grid-cols-7 lg:items-center lg:gap-x-8 xl:gap-x-12">
        <div className="lg:col-span-3">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Reliable, and Affordable Home Appliance Repairs
          </h1>
          <p className="mt-3 py-5 text-xl text-muted-foreground">
            We understand the importance of a smoothly functioning home. When
            your appliances break down, it disrupts your daily life. That's
            where we come in! Our team of skilled technicians is dedicated to
            restoring your appliances promptly and efficiently.
            <br />
            <br /> Available in{" "}
            <span className="font-semibold text-primary">Dubai</span> and{" "}
            <span className="font-semibold text-primary">Abu Dhabi</span>.
          </p>
          {/* Brands */}
          <div className="mt-6 lg:mt-12">
            <span className="text-xs font-medium uppercase">Trusted by:</span>
            <div className="mt-4 flex gap-x-8">
              <Image src="/company/bosch-logo.svg" width={80} height={20} />
            </div>
          </div>
          {/* End Brands */}
        </div>
        {/* End Col */}
        <div className="mt-10 lg:col-span-4 lg:mt-0">
          <Image
            width={700}
            height={540}
            className="w-full rounded-xl"
            src="/banner.jpg"
            alt="Image Description"
          />
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
    </div>
  );
};

export default HeroSection;
